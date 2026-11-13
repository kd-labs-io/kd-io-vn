---
title: 'Context Engineering for Coding Agents: Hierarchical Memory, AST Indexing, and Lossless Context Compaction'
description: 'Why 1-million-token context windows still suffer from reasoning degradation — and how production AI-Native coding agents use KV-Cache alignment, Tree-sitter AST chunking, subagent isolation, and structured compaction.'
pubDate: 2026-11-09
heroImage: '/assets/blog/context-engineering-compaction-hybrid-rag-agents.png'
tags: ['AI-Native', 'Context Engineering', 'AI Agents', 'Software Architecture', 'LLM']
author: 'KD Labs'
readingTime: '11 min read'
---

If 2023 was defined by *Prompt Engineering* — crafting clever one-shot instructions — the era of **AI-Native software systems** has decisively shifted the engineering bottleneck to **Context Engineering**: the systems discipline of curating, indexing, caching, and compacting everything inside an agent's active working memory.

A modern coding agent executes dozens of iterative tool loops: traversing files, running test suites, inspecting compiler diagnostics, and applying multi-file patches. Dumping raw terminal logs and entire source trees indiscriminately into a prompt causes reasoning quality to degrade sharply — even on frontier models advertising 200K to 1M+ token windows.

---

## 1. The Long-Context Fallacy & "Context Rot"

A common misconception is that massive context windows make retrieval and memory management obsolete. Production telemetry across real-world software repositories reveals three hard constraints:

1. **Attention Dilution ("Context Rot" & Lost-in-the-Middle):** Transformer attention mechanisms weigh the system prefix and the most recent tokens heavily, while recall and multi-hop reasoning degrade noticeably when tens of thousands of noisy intermediate tokens (such as verbose `npm` logs or lockfiles) accumulate in the middle.
2. **Compound Multi-Turn Token Economics:** An autonomous task spanning 30 tool-invocation turns re-sends the conversation trajectory on every step. Letting unpruned tool outputs bloat the prompt to 150K tokens by turn 15 turns a routine bug fix into millions of billed tokens and sluggish Time-To-First-Token (TTFT).
3. **Trajectory Poisoning:** When an agent explores a flawed hypothesis in turn 4 and leaves 400 lines of failed code inside its active context, self-attention continues conditioning on that broken pattern twenty turns later.

**Context Engineering** treats the LLM context window like CPU L1/L2 cache: **maximize signal density per token, preserve cache locality, and aggressively evict stale intermediate state.**

---

## 2. Three-Tier Hierarchical Agent Memory

Much like a computer's L1 Cache → RAM → NVMe hierarchy, resilient AI-Native coding architectures partition state across three distinct tiers:

```
┌───────────────────────────────────────────────────────────────────────────┐
│ TIER 1: WORKING CONTEXT (Active Token Window — Equivalent to L1/RAM)      │
│  • Immutable Prefix (System Prompt + Tool Schemas) ──> KV-Cache Aligned   │
│  • Repository Rules (AGENTS.md) & Active Execution Plan                   │
│  • Focal AST Slices & Unpruned Tool Outputs from Last 2–3 Turns           │
└─────────────────────────────────────┬─────────────────────────────────────┘
                                      ▲ Dynamic Paging / Structured Compaction
┌─────────────────────────────────────┴─────────────────────────────────────┐
│ TIER 2: EPISODIC & SUBAGENT MEMORY (Session State — Equivalent to L2/L3)  │
│  • Structured Checkpoint Summaries of Completed Milestones                │
│  • Context-Isolated Subagents (Consume 50K tokens, return 600-token brief)│
└─────────────────────────────────────┬─────────────────────────────────────┘
                                      ▲ Hybrid Retrieval + LSP Call Graph
┌─────────────────────────────────────┴─────────────────────────────────────┐
│ TIER 3: PERSISTENT CODEBASE GRAPH (Durable Knowledge — NVMe/Disk)         │
│  • Tree-sitter AST Symbol Index + BM25 Lexical + Dense Embeddings         │
│  • Git History, Architectural Decision Records & Test Suites              │
└───────────────────────────────────────────────────────────────────────────┘
```

### Designing for Prefix KV-Cache Hit Rates
Modern inference engines rely on **Prefix KV-Caching**, slashing input token costs by **75%–90%** and dramatically cutting latency — provided the leading token sequence remains **byte-for-byte identical** across turns.

Injecting a live wall-clock timestamp or fluctuating IDE cursor metadata near the top of the System Prompt invalidates the entire downstream KV-Cache on every single turn! High-throughput context pipelines enforce strict ordering:
- **Immutable Prefix:** System Instructions → Canonical Tool Definitions → Project `AGENTS.md`.
- **Append-Only Trajectory:** Conversation & Tool Turns → Ephemeral IDE State appended at the very tail.

---

## 3. Tree-sitter AST Indexing & Subagent Context Isolation

Naive text RAG splits source files into arbitrary 500-token windows, slicing function signatures away from their bodies and severing type definitions from implementations.

AI-Native developer tools combine **syntax-aware indexing** with **agentic navigation**:

1. **AST-Bounded Semantic Units:** Using **Tree-sitter**, files are parsed into complete syntactic nodes (`function`, `class`, `interface`, `impl` blocks) enriched with structural breadcrumbs (file path, module imports, and enclosing type signatures).
2. **Hybrid Lexical + Semantic Retrieval:** Dense vector embeddings excel at conceptual queries (*"Where do we validate webhook signatures?"*), while **BM25 / Ripgrep** dominates exact identifier lookups (`ERR_ACP_TRANSPORT_TIMEOUT`). Merging both rankings via **Reciprocal Rank Fusion (RRF)** delivers superior precision.
3. **Subagent Context Firewalling:** Instead of polluting the primary orchestrator's window by reading 25 candidate files during exploratory search, the parent agent delegates discovery to a read-only **Research Subagent**. The subagent scans 40,000 tokens in its own ephemeral context and returns a crisp 600-token architectural summary with exact line references (`router.ts#L42-L88`).

---

## 4. Lossless-Intent Context Compaction

When an extended coding session reaches 75%–80% of its effective context budget, naive prose summarization (*"Summarize our conversation so far"*) routinely drops critical file paths, exact compiler error codes, and subtle architectural invariants.

Production systems replace free-form summarization with **Structured State Compaction** combined with aggressive pruning of superseded tool outputs:

```typescript
export interface CompactedSessionState {
  // Original objective and non-negotiable user constraints
  userGoalAndConstraints: string[];
  // Exact file paths touched, diff summaries, and verification status
  modifiedFiles: Array<{ path: string; summaryOfChanges: string; verified: boolean }>;
  // Approaches ALREADY TRIED THAT FAILED (prevents repeating loops!)
  deadEndsToAvoid: string[];
  // Ordered queue of remaining implementation & verification tasks
  pendingNextSteps: string[];
}
```

Explicitly preserving `deadEndsToAvoid` prevents the classic post-compaction failure mode where a freshly compacted agent immediately re-attempts an approach that failed thirty minutes earlier.

---

## 5. Practical Context Engineering in KD Code

When building **[KD Code](/en/apps/kd-code/)** at **KD Labs**, we designed first-class UX primitives to give engineers direct visibility and control over agent context:

- **High-Signal `@Context` Pinning:** Pin exact files, directories, active editor selections, VS Code *Problems* diagnostics (`Cmd+Alt+P`), or the latest failed terminal output (`Cmd+Alt+L`) directly into the prompt instead of forcing blind repository scans.
- **Live Context Telemetry & `ccusage` Analytics:** Track real-time context window saturation, automatic compaction checkpoints, and KV-cache efficiency directly inside the ACP sidebar.
- **Declarative Repository Memory (`AGENTS.md`):** Encode build commands, architectural boundaries, and domain conventions in a concise root `AGENTS.md` so every coding agent starts with zero-shot repository fluency.

In **AI-Native software engineering**, model intelligence is only half the equation. **Context Engineering** is the discipline that turns raw token capacity into sustained, reliable engineering execution.
