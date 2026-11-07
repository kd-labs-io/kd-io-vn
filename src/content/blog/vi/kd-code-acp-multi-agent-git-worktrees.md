---
title: 'Kiến Trúc KD Code: Điều Phối Multi-Agent Trong VS Code Qua Agent Client Protocol (ACP) & Git Worktrees Cô Lập'
description: 'Phân tích kiến trúc kỹ thuật của KD Code (kd-code-extension) — tiện ích mã nguồn mở giúp kết nối Claude, Codex, OpenCode qua chuẩn Agent Client Protocol (ACP), thực thi song song Best-of-N trên các Git Worktree độc lập và bảo mật cấp độ máy.'
pubDate: 2026-11-07
heroImage: '/assets/blog/kd-code-acp-multi-agent-git-worktrees.png'
tags: ['AI-Native', 'KD Code', 'Agent Client Protocol', 'Git Worktrees', 'VS Code']
author: 'KD Labs'
readingTime: '10 phút đọc'
---

Trong kỷ nguyên kỹ thuật phần mềm **AI-Native**, lập trình viên không còn chỉ viết từng dòng lệnh thủ công hay dừng lại ở tính năng tự động hoàn thành mã (*Tab Autocomplete*). Thay vào đó, các **Coding Agents** tự chủ (như Claude Code, Codex, OpenCode) đã có thể đọc toàn bộ kho mã nguồn, chạy lệnh kiểm thử trên terminal, lập kế hoạch đa bước và chỉnh sửa hàng chục tệp tin cùng lúc.

Tuy nhiên, khi đưa các Coding Agent vào quy trình làm việc thực tế hàng ngày trong IDE, các kỹ sư hệ thống thường vấp phải **3 nút thắt kiến trúc lớn**:

1. **Sự phân mảnh giao thức (Vendor Lock-in):** Mỗi Agent sử dụng một giao diện CLI, cơ chế xin quyền (Permission Prompt) và định dạng luồng dữ liệu riêng biệt.
2. **Xung đột cây thư mục làm việc (Working-Tree Pollution):** Khi một Agent đang sửa đổi 15 tệp tin trên nhánh hiện tại, lập trình viên không thể đồng thời sửa lỗi khẩn cấp hoặc chạy thử một hướng tiếp cận thứ hai mà không làm hỏng trạng thái Git.
3. **Rủi ro bảo mật từ Workspace lạ:** Việc cho phép cấu hình trong thư mục dự án (`.vscode/settings.json`) tự ý chỉ định nhị phân Agent hay máy chủ MCP mở ra bề mặt tấn công thực thi mã từ xa (*Remote Code Execution*).

Để giải quyết triệt để ba bài toán này, **KD Labs** đã thiết kế và phát hành mã nguồn mở **[KD Code (`kd-labs-io/kd-code-extension`)](https://github.com/kd-labs-io/kd-code-extension)** — tiện ích mở rộng cho VS Code dựa trên giao thức mở **Agent Client Protocol (ACP)** và kiến trúc **Git Worktree cô lập**.

---

## 1. Agent Client Protocol (ACP): Chuẩn Hóa Giao Tiếp Giữa IDE Và Coding Agents

Tương tự như cách **Language Server Protocol (LSP)** từng chuẩn hóa cách trình soạn thảo giao tiếp với trình phân tích ngôn ngữ, **[Agent Client Protocol (ACP)](https://agentclientprotocol.com)** định nghĩa một giao thức chuẩn để mọi trình soạn thảo mã nguồn có thể trò chuyện, cấp quyền và nhận luồng thay đổi từ bất kỳ Coding Agent nào.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    VS CODE (KD Code Extension Host)                     │
│  ┌──────────────────┐   ┌────────────────────┐   ┌───────────────────┐  │
│  │ Secondary Sidebar│   │ Diff & Hunk Engine │   │ Machine-Scoped    │  │
│  │ Multi-Tab UI     │   │ Keep / Undo / Sync │   │ Security Gate     │  │
│  └────────┬─────────┘   └─────────┬──────────┘   └─────────┬─────────┘  │
└───────────┼───────────────────────┼────────────────────────┼────────────┘
            │                       │                        │
            ▼                       ▼                        ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                 AGENT CLIENT PROTOCOL (ACP) TRANSPORT                   │
│       JSON-RPC Stream • Tool Permissions • Subagent & Plan Events       │
└───────────────────┬───────────────────────────────┬─────────────────────┘
                    │                               │
        ┌───────────┴───────────┐       ┌───────────┴───────────┐
        ▼                       ▼       ▼                       ▼
┌───────────────┐       ┌───────────────┐               ┌───────────────┐
│  Claude Code  │       │  Codex Agent  │      ...      │   OpenCode    │
│ (ACP Adapter) │       │ (ACP Adapter) │               │ (ACP Adapter) │
└───────────────┘       └───────────────┘               └───────────────┘
```

Trong **KD Code**, lớp điều phối ACP mang lại các khả năng vượt trội:
- **Cài đặt 1-Click từ ACP Registry:** Truy cập trực tiếp danh mục `registry.json` chuẩn của ACP để cài đặt, cập nhật hoặc chuyển đổi giữa Claude, Codex, OpenCode (qua `npx` hoặc `uvx`) ngay trong trang **Manage Agents**.
- **Theo dõi toàn diện vòng đời Agent:** Hiển thị trực tiếp kế hoạch hành động (*Plans*), lời gọi công cụ (*Tool Calls*), các tiến trình con (*Subagents*), luồng đầu ra Terminal và trạng thái nén ngữ cảnh (*Context Compaction*).
- **Giám sát thông điệp (ACP Tracing) & Chi phí (`ccusage`):** Ghi nhận độ trễ từng lượt phản hồi, lượng token tiêu thụ trong cửa sổ ngữ cảnh và tích hợp `ccusage` để thống kê chi phí theo ngày, theo phiên hội thoại hoặc theo từng Agent.

---

## 2. Cô Lập Tuyệt Đối Với Git Worktrees & Đối Sánh Song Song (Best-of-N)

Điểm cốt lõi tạo nên sự khác biệt của **KD Code** chính là việc biến **Git Worktree** thành đơn vị thực thi cơ bản cho mỗi phiên làm việc của Agent.

Khi bạn bật tùy chọn Worktree trên thanh soạn thảo (hoặc cấu hình mặc định cho mọi cuộc hội thoại mới), KD Code sẽ tự động:
1. Khởi tạo một nhánh mới đặt tên theo yêu cầu đầu tiên của bạn.
2. Tạo một thư mục **Git Worktree riêng biệt** liên kết với kho chứa chính nhưng hoàn toàn tách rời khỏi cây thư mục bạn đang mở.
3. Sao chép có kiểm soát các tệp bị bỏ qua bởi Git (như `.env`, `node_modules`) và chạy lệnh khởi tạo môi trường (sau khi được bạn phê duyệt).

### Chiến lược "Best-of-N Compare": Cho Nhiều Agent Cùng Giải Một Bài Toán

Đối với các bài toán tái cấu trúc phức tạp hoặc sửa lỗi kiến trúc khó, một mô hình đơn lẻ có thể đưa ra giải pháp chưa tối ưu. Tính năng **Compare (Best-of-N)** trong KD Code cho phép gửi **cùng một Prompt** tới nhiều tổ hợp Agent, Model và mức độ suy luận (*Effort*) cùng lúc:

```
                   [ Một Prompt Yêu Cầu Duy Nhất ]
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│ Worktree #1     │      │ Worktree #2     │      │ Worktree #3     │
│ Agent: Claude   │      │ Agent: Codex    │      │ Agent: OpenCode │
│ Branch: wt/a1   │      │ Branch: wt/a2   │      │ Branch: wt/a3   │
└────────┬────────┘      └────────┬────────┘      └────────┬────────┘
         │                        │                        │
         └────────────────────────┼────────────────────────┘
                                  ▼
             [ Group Tab: So sánh Diff cạnh nhau ]
         ──> Chọn bản tốt nhất (Apply) hoặc Gộp nhánh / Tạo PR
```

Mỗi Agent làm việc độc lập trên Worktree của riêng mình dưới một **Group Tab** chung. Khi hoàn tất, bạn có thể đối chiếu bản diff của từng Agent, áp dụng giải pháp xuất sắc nhất vào nhánh chính, yêu cầu Agent tự viết mô tả và mở **Pull Request** qua GitHub CLI, sau đó dọn dẹp toàn bộ các worktree nháp chỉ bằng một nút bấm.

---

## 3. Ngữ Cảnh Đa Phương Thức (`@Context`) & Kiểm Duyệt Từng Hunk (`Keep / Undo`)

Một Agent chỉ thông minh khi được cung cấp ngữ cảnh chính xác:
- **Đính kèm tức thì với `@`:** Đính kèm tệp tin, thư mục, danh sách lỗi từ bảng *Problems* của VS Code (`Cmd+Alt+P`), vùng văn bản đang bôi đen trong trình soạn thảo hoặc kết quả lệnh vừa thất bại dưới Terminal (`Cmd+Alt+L`).
- **Chú thích trực tiếp trên Hình ảnh:** Khi dán ảnh chụp giao diện lỗi vào khung chat, bạn có thể mở trình vẽ tích hợp để khoanh vùng bằng bút, mũi tên, hình chữ nhật và ghi chú văn bản trực tiếp lên ảnh trước khi gửi cho Agent.
- **Duyệt thay đổi từng phần (Keep & Undo):** Mọi chỉnh sửa của Agent đều được hiển thị trực quan với nút **Keep** (Giữ) và **Undo** (Hoàn tác) cho từng khối mã (hunk) hoặc từng tệp, kèm khả năng quay lui toàn bộ trạng thái tệp về bất kỳ **Checkpoint** nào trước đó.

---

## 4. Ranh Giới Bảo Mật Cấp Độ Máy (Machine-Scoped Security)

Khi làm việc với các kho mã nguồn bên ngoài, bảo mật chuỗi cung ứng là ưu tiên sống còn tại **KD Labs**. KD Code áp dụng nguyên tắc phòng thủ chặt chẽ:
- **Khóa cấu hình thực thi ở Machine Scope:** Mọi cài đặt quyết định mã nào được phép chạy trên máy tính — bao gồm danh sách Custom Agents, máy chủ MCP, biến môi trường (`env`), đường dẫn thực thi Node.js và `ccusage` — **chỉ có hiệu lực ở cấp độ máy người dùng (User/Machine Scope)**. Một thư mục dự án (Workspace) không thể tự ý ghi đè các thiết lập này để chạy mã độc.
- **Xác thực lệnh khởi tạo Worktree:** Nếu dự án có cấu hình lệnh thiết lập worktree riêng, KD Code luôn hỏi ý kiến người dùng trước khi chạy, và **bắt buộc hỏi lại** ngay khi câu lệnh hoặc tệp kịch bản được tham chiếu có bất kỳ thay đổi nào.
- **Kiểm soát liên kết & đường dẫn Registry:** Từ chối cài đặt các mục Registry chứa đường dẫn không an toàn và luôn yêu cầu xác nhận trước khi mở liên kết ngoài từ Agent.

---

## 5. Trải Nghiệm Ngay KD Code (Mã Nguồn Mở MIT)

Toàn bộ mã nguồn của **KD Code** được phát hành minh bạch theo giấy phép **MIT** với giao diện hỗ trợ đầy đủ cả **Tiếng Việt** và **Tiếng Anh**.

Bạn có thể kiểm tra mã nguồn, đóng góp hoặc biên dịch trực tiếp từ GitHub chính thức của KD Labs:

- **GitHub Repository:** [github.com/kd-labs-io/kd-code-extension](https://github.com/kd-labs-io/kd-code-extension)
- **Trang Chi Tiết Sản Phẩm:** [kd.io.vn/apps/kd-code](/apps/kd-code/)
- **Chuẩn Giao Thức ACP:** [agentclientprotocol.com](https://agentclientprotocol.com)
