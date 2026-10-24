import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const outDir = path.join(projectRoot, 'public/assets/blog');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const banners = [
  {
    slug: 'totp-vs-sms-sim-swap',
    badge: 'RFC 6238 • CRYPTOGRAPHY & 2FA',
    title: 'HMAC-SHA & TOTP Architecture',
    subtitle: 'Why Time-Based Cryptography Outperforms SS7 & SMS OTP',
    accent: '#EA580C',
    secondary: '#FB923C',
    illustration: `
      <!-- Left: Crossed-out insecure SMS Tower -->
      <g transform="translate(150, 175)">
        <rect x="0" y="0" width="240" height="230" rx="24" fill="#1C100B" stroke="#7F1D1D" stroke-width="2" stroke-dasharray="6 6"/>
        <circle cx="120" cy="85" r="38" fill="#450A0A" stroke="#EF4444" stroke-width="2"/>
        <path d="M105 70 L135 100 M135 70 L105 100" stroke="#F87171" stroke-width="4" stroke-linecap="round"/>
        <text x="120" y="155" text-anchor="middle" font-family="monospace" font-size="16" font-weight="700" fill="#FCA5A5">SS7 / SIM SWAP</text>
        <text x="120" y="182" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#A8A29E">Plaintext Intercept</text>
      </g>

      <!-- Center Arrow: Cryptographic Evolution -->
      <g transform="translate(435, 275)">
        <path d="M0 15 L95 15" stroke="url(#accentLine)" stroke-width="3" stroke-linecap="round"/>
        <path d="M85 5 L100 15 L85 25" fill="none" stroke="#FB713B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="12" y="-22" width="76" height="24" rx="12" fill="#2A1205" stroke="#EA580C" stroke-width="1.2"/>
        <text x="50" y="-6" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#FDBA74">ΔT = 30s</text>
      </g>

      <!-- Right: TOTP HMAC-SHA Vault Engine -->
      <g transform="translate(575, 145)">
        <rect x="0" y="0" width="475" height="285" rx="28" fill="#1A0D06" stroke="url(#borderGrad)" stroke-width="2.5" filter="url(#cardShadow)"/>
        <!-- Top Status Bar -->
        <circle cx="32" cy="30" r="5" fill="#22C55E"/>
        <text x="48" y="34" font-family="monospace" font-size="13" font-weight="700" fill="#FDBA74" letter-spacing="1.5">TOTP = Truncate(HMAC-SHA(K, C))</text>
        <line x1="24" y1="54" x2="451" y2="54" stroke="#EA580C" stroke-opacity="0.25" stroke-width="1"/>

        <!-- 6-Digit Token Display -->
        <g transform="translate(32, 78)">
          <rect x="0" y="0" width="58" height="74" rx="12" fill="#271309" stroke="#EA580C" stroke-width="1.5"/>
          <text x="29" y="48" text-anchor="middle" font-family="monospace" font-size="34" font-weight="800" fill="#FFFFFF">4</text>

          <rect x="68" y="0" width="58" height="74" rx="12" fill="#271309" stroke="#EA580C" stroke-width="1.5"/>
          <text x="97" y="48" text-anchor="middle" font-family="monospace" font-size="34" font-weight="800" fill="#FFFFFF">9</text>

          <rect x="136" y="0" width="58" height="74" rx="12" fill="#271309" stroke="#EA580C" stroke-width="1.5"/>
          <text x="165" y="48" text-anchor="middle" font-family="monospace" font-size="34" font-weight="800" fill="#FFFFFF">2</text>

          <circle cx="206" cy="37" r="4" fill="#FB713B"/>

          <rect x="218" y="0" width="58" height="74" rx="12" fill="#271309" stroke="#FB713B" stroke-width="1.5"/>
          <text x="247" y="48" text-anchor="middle" font-family="monospace" font-size="34" font-weight="800" fill="#FDBA74">8</text>

          <rect x="286" y="0" width="58" height="74" rx="12" fill="#271309" stroke="#FB713B" stroke-width="1.5"/>
          <text x="315" y="48" text-anchor="middle" font-family="monospace" font-size="34" font-weight="800" fill="#FDBA74">1</text>

          <rect x="354" y="0" width="58" height="74" rx="12" fill="#271309" stroke="#FB713B" stroke-width="1.5"/>
          <text x="383" y="48" text-anchor="middle" font-family="monospace" font-size="34" font-weight="800" fill="#FDBA74">7</text>
        </g>

        <!-- Bottom Metadata Chips -->
        <g transform="translate(32, 182)">
          <rect x="0" y="0" width="195" height="68" rx="14" fill="#120804" stroke="#EA580C" stroke-opacity="0.4"/>
          <text x="18" y="28" font-family="monospace" font-size="12" fill="#A8A29E">SHARED SECRET (K)</text>
          <text x="18" y="50" font-family="monospace" font-size="14" font-weight="700" fill="#22C55E">100% OFFLINE VAULT</text>

          <rect x="215" y="0" width="197" height="68" rx="14" fill="#120804" stroke="#EA580C" stroke-opacity="0.4"/>
          <text x="233" y="28" font-family="monospace" font-size="12" fill="#A8A29E">HASH SUITE</text>
          <text x="233" y="50" font-family="monospace" font-size="14" font-weight="700" fill="#FB923C">SHA-1 / 256 / 512</text>
        </g>
      </g>
    `,
  },
  {
    slug: 'secure-enclave-vs-android-keystore',
    badge: 'HARDWARE SECURITY • MOBILE ARCHITECTURE',
    title: 'Secure Enclave & StrongBox Keystore',
    subtitle: 'Inside Dedicated Silicon Co-Processors Protecting Cryptographic Keys',
    accent: '#EA580C',
    secondary: '#FDBA74',
    illustration: `
      <!-- Silicon Die / Microprocessor Visualization -->
      <g transform="translate(160, 145)">
        <!-- Left Node: Application OS World (Untrusted Rich OS) -->
        <rect x="0" y="30" width="250" height="225" rx="22" fill="#170E0A" stroke="#57534E" stroke-width="1.5"/>
        <text x="125" y="72" text-anchor="middle" font-family="monospace" font-size="13" font-weight="700" fill="#A8A29E">RICH OS SPACE (REE)</text>
        <rect x="28" y="92" width="194" height="44" rx="10" fill="#231711" stroke="#78716C" stroke-width="1"/>
        <text x="125" y="119" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="600" fill="#E7E5E4">App Layer (Simple OTP)</text>
        <rect x="28" y="150" width="194" height="44" rx="10" fill="#231711" stroke="#78716C" stroke-width="1"/>
        <text x="125" y="177" text-anchor="middle" font-family="monospace" font-size="13" fill="#FDBA74">Key Handle Reference</text>
        <text x="125" y="225" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#A8A29E">Raw Key Never Exposed</text>

        <!-- Hardware Bus Bridge -->
        <g transform="translate(250, 115)">
          <line x1="0" y1="15" x2="115" y2="15" stroke="#EA580C" stroke-width="3" stroke-dasharray="6 4"/>
          <line x1="0" y1="45" x2="115" y2="45" stroke="#FB923C" stroke-width="3"/>
          <rect x="14" y="-12" width="88" height="22" rx="11" fill="#2A1205" stroke="#EA580C"/>
          <text x="58" y="3" text-anchor="middle" font-family="monospace" font-size="10" font-weight="700" fill="#FDBA74">CRYPTO IPC</text>
        </g>

        <!-- Right Node: Hardware Security Module (Secure Enclave / StrongBox) -->
        <g transform="translate(365, 0)">
          <!-- IC Pins -->
          <g stroke="#EA580C" stroke-width="3" stroke-linecap="round" opacity="0.7">
            <line x1="60" y1="-12" x2="60" y2="0"/><line x1="120" y1="-12" x2="120" y2="0"/><line x1="180" y1="-12" x2="180" y2="0"/><line x1="240" y1="-12" x2="240" y2="0"/><line x1="300" y1="-12" x2="300" y2="0"/><line x1="360" y1="-12" x2="360" y2="0"/><line x1="420" y1="-12" x2="420" y2="0"/>
            <line x1="60" y1="285" x2="60" y2="297"/><line x1="120" y1="285" x2="120" y2="297"/><line x1="180" y1="285" x2="180" y2="297"/><line x1="240" y1="285" x2="240" y2="297"/><line x1="300" y1="285" x2="300" y2="297"/><line x1="360" y1="285" x2="360" y2="297"/><line x1="420" y1="285" x2="420" y2="297"/>
          </g>
          <rect x="0" y="0" width="500" height="285" rx="28" fill="#1C0B04" stroke="url(#borderGrad)" stroke-width="2.5" filter="url(#cardShadow)"/>
          <rect x="18" y="18" width="464" height="249" rx="20" fill="#120602" stroke="#EA580C" stroke-opacity="0.35" stroke-width="1"/>
          
          <text x="42" y="52" font-family="monospace" font-size="14" font-weight="800" fill="#FB713B" letter-spacing="1.5">ISOLATED SILICON BOUNDARY</text>
          <rect x="352" y="34" width="108" height="24" rx="12" fill="#052E16" stroke="#22C55E" stroke-width="1"/>
          <text x="406" y="50" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#4ADE80">TAMPER-PROOF</text>

          <!-- Two Pillars: Apple SEP & Android StrongBox -->
          <g transform="translate(36, 74)">
            <rect x="0" y="0" width="206" height="108" rx="14" fill="#220F06" stroke="#EA580C" stroke-width="1.5"/>
            <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#FFFFFF">iOS Secure Enclave</text>
            <text x="20" y="54" font-family="monospace" font-size="12" fill="#FDBA74">• Dedicated AES Engine</text>
            <text x="20" y="74" font-family="monospace" font-size="12" fill="#FDBA74">• UID Fused in Silicon</text>
            <text x="20" y="94" font-family="monospace" font-size="12" fill="#A8A29E">• Biometric Gatekeeper</text>

            <rect x="222" y="0" width="206" height="108" rx="14" fill="#220F06" stroke="#FB923C" stroke-width="1.5"/>
            <text x="242" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#FFFFFF">Android StrongBox</text>
            <text x="242" y="54" font-family="monospace" font-size="12" fill="#FDBA74">• Discrete Secure Element</text>
            <text x="242" y="74" font-family="monospace" font-size="12" fill="#FDBA74">• ARM TrustZone TEE</text>
            <text x="242" y="94" font-family="monospace" font-size="12" fill="#A8A29E">• Key Attestation</text>
          </g>

          <!-- Bottom Hardware Root of Trust bar -->
          <rect x="36" y="198" width="428" height="46" rx="12" fill="#2A1205" stroke="#EA580C" stroke-opacity="0.5"/>
          <text x="250" y="226" text-anchor="middle" font-family="monospace" font-size="13" font-weight="700" fill="#FED7AA">HARDWARE ROOT OF TRUST • NON-EXPORTABLE KEYS</text>
        </g>
      </g>
    `,
  },
  {
    slug: 'zero-knowledge-aes-256-gcm',
    badge: 'AUTHENTICATED ENCRYPTION • ZERO-KNOWLEDGE',
    title: 'Zero-Knowledge & AES-256-GCM',
    subtitle: 'Client-Side Encryption, KDF Hardening & Tamper-Evident Auth Tags',
    accent: '#EA580C',
    secondary: '#FB713B',
    illustration: `
      <!-- Pipeline Diagram: Passphrase -> KDF -> AES-256-GCM -> Authenticated Vault -->
      <g transform="translate(125, 155)">
        <!-- Stage 1: Passphrase + Salt -> KDF -->
        <g transform="translate(0, 20)">
          <rect x="0" y="0" width="260" height="230" rx="22" fill="#1A0C05" stroke="#EA580C" stroke-width="1.8" filter="url(#cardShadow)"/>
          <text x="24" y="38" font-family="monospace" font-size="12" font-weight="700" fill="#FB923C">1. KEY DERIVATION (KDF)</text>
          <rect x="20" y="54" width="220" height="42" rx="10" fill="#271207" stroke="#7C2D12"/>
          <text x="34" y="80" font-family="monospace" font-size="13" fill="#FFFFFF">Passphrase + 128b Salt</text>
          
          <path d="M130 102 L130 124" stroke="#FB713B" stroke-width="2"/>
          <rect x="20" y="126" width="220" height="46" rx="10" fill="#2A1408" stroke="#EA580C"/>
          <text x="130" y="154" text-anchor="middle" font-family="monospace" font-size="13" font-weight="700" fill="#FDBA74">PBKDF2 / Argon2id</text>
          <text x="130" y="204" text-anchor="middle" font-family="monospace" font-size="12" fill="#4ADE80">256-bit Master Key (DEK)</text>
        </g>

        <!-- Arrow 1 -->
        <path d="M270 135 L320 135" stroke="#EA580C" stroke-width="3" stroke-linecap="round"/>
        <circle cx="295" cy="135" r="5" fill="#FB713B"/>

        <!-- Stage 2: AES-256-GCM Engine -->
        <g transform="translate(330, 0)">
          <rect x="0" y="0" width="300" height="270" rx="26" fill="#210D04" stroke="url(#borderGrad)" stroke-width="2.5" filter="url(#cardShadow)"/>
          <circle cx="150" cy="76" r="38" fill="#2E1306" stroke="#EA580C" stroke-width="2"/>
          <!-- Padlock Icon -->
          <rect x="136" y="72" width="28" height="22" rx="5" fill="#FB713B"/>
          <path d="M141 72 V64 A9 9 0 0 1 159 64 V72" fill="none" stroke="#FFFFFF" stroke-width="3"/>
          
          <text x="150" y="142" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="800" fill="#FFFFFF">AES-256-GCM</text>
          <text x="150" y="168" text-anchor="middle" font-family="monospace" font-size="12" fill="#FDBA74">Galois / Counter Mode (AEAD)</text>

          <g transform="translate(24, 188)">
            <rect x="0" y="0" width="120" height="54" rx="10" fill="#140702" stroke="#EA580C" stroke-opacity="0.4"/>
            <text x="60" y="24" text-anchor="middle" font-family="monospace" font-size="11" fill="#A8A29E">NONCE / IV</text>
            <text x="60" y="42" text-anchor="middle" font-family="monospace" font-size="13" font-weight="700" fill="#FFFFFF">96-bit Unique</text>

            <rect x="132" y="0" width="120" height="54" rx="10" fill="#140702" stroke="#EA580C" stroke-opacity="0.4"/>
            <text x="192" y="24" text-anchor="middle" font-family="monospace" font-size="11" fill="#A8A29E">AUTH TAG</text>
            <text x="192" y="42" text-anchor="middle" font-family="monospace" font-size="13" font-weight="700" fill="#4ADE80">128-bit GMAC</text>
          </g>
        </g>

        <!-- Arrow 2 -->
        <path d="M640 135 L690 135" stroke="#EA580C" stroke-width="3" stroke-linecap="round"/>
        <circle cx="665" cy="135" r="5" fill="#FB713B"/>

        <!-- Stage 3: Zero-Knowledge Container (.simpleotp) -->
        <g transform="translate(700, 20)">
          <rect x="0" y="0" width="250" height="230" rx="22" fill="#1A0C05" stroke="#22C55E" stroke-opacity="0.6" stroke-width="1.8" filter="url(#cardShadow)"/>
          <text x="24" y="38" font-family="monospace" font-size="12" font-weight="700" fill="#4ADE80">3. SEALED ARTIFACT</text>
          <rect x="24" y="56" width="202" height="110" rx="14" fill="#120703" stroke="#EA580C" stroke-opacity="0.35"/>
          <text x="125" y="92" text-anchor="middle" font-family="monospace" font-size="16" font-weight="800" fill="#FFFFFF">vault.simpleotp</text>
          <text x="125" y="118" text-anchor="middle" font-family="monospace" font-size="12" fill="#FDBA74">Ciphertext + GMAC Tag</text>
          <text x="125" y="144" text-anchor="middle" font-family="monospace" font-size="11" fill="#A8A29E">Zero Server Visibility</text>
          <text x="125" y="200" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#4ADE80">✓ Tamper-Proof Integrity</text>
        </g>
      </g>
    `,
  },
  {
    slug: 'passkeys-fido2-vs-2fa-hardware-keys',
    badge: 'FIDO2 / WEBAUTHN • AUTHENTICATION SPECTRUM',
    title: 'Passkeys, Hardware Keys & TOTP 2FA',
    subtitle: 'Public-Key Cryptography, Phishing Resistance & Defense-in-Depth',
    accent: '#EA580C',
    secondary: '#FB923C',
    illustration: `
      <!-- 3-Column Comparison Cards -->
      <g transform="translate(130, 150)">
        <!-- Card 1: Passkeys (FIDO2 / WebAuthn) -->
        <g transform="translate(0, 10)">
          <rect x="0" y="0" width="290" height="260" rx="24" fill="#1C0B04" stroke="#EA580C" stroke-width="2" filter="url(#cardShadow)"/>
          <rect x="24" y="24" width="48" height="48" rx="14" fill="#2E1306" stroke="#FB713B" stroke-width="1.5"/>
          <circle cx="48" cy="42" r="8" fill="none" stroke="#FDBA74" stroke-width="2.5"/>
          <path d="M36 58 C36 50 60 50 60 58" fill="none" stroke="#FDBA74" stroke-width="2.5" stroke-linecap="round"/>
          <text x="86" y="45" font-family="sans-serif" font-size="18" font-weight="800" fill="#FFFFFF">Passkeys</text>
          <text x="86" y="65" font-family="monospace" font-size="12" fill="#FB923C">FIDO2 / WebAuthn</text>

          <line x1="24" y1="90" x2="266" y2="90" stroke="#EA580C" stroke-opacity="0.25"/>
          <text x="24" y="122" font-family="monospace" font-size="13" fill="#E7E5E4">• Asymmetric ECDSA P-256</text>
          <text x="24" y="150" font-family="monospace" font-size="13" fill="#E7E5E4">• Origin-Bound Signature</text>
          <text x="24" y="178" font-family="monospace" font-size="13" fill="#E7E5E4">• Biometric / Sync Ecosystem</text>
          <rect x="24" y="202" width="242" height="34" rx="10" fill="#2A1205" stroke="#EA580C" stroke-opacity="0.5"/>
          <text x="145" y="224" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#FDBA74">PRIMARY PASSWORDLESS</text>
        </g>

        <!-- Card 2: Offline TOTP (RFC 6238) - Center Highlight -->
        <g transform="translate(325, -5)">
          <rect x="0" y="0" width="290" height="275" rx="24" fill="#240E04" stroke="url(#borderGrad)" stroke-width="2.5" filter="url(#cardShadow)"/>
          <rect x="24" y="24" width="48" height="48" rx="14" fill="#EA580C"/>
          <text x="48" y="55" text-anchor="middle" font-family="monospace" font-size="18" font-weight="900" fill="#FFFFFF">2FA</text>
          <text x="86" y="45" font-family="sans-serif" font-size="18" font-weight="800" fill="#FFFFFF">Offline TOTP</text>
          <text x="86" y="65" font-family="monospace" font-size="12" fill="#FDBA74">RFC 6238 Sovereign</text>

          <line x1="24" y1="90" x2="266" y2="90" stroke="#EA580C" stroke-opacity="0.35"/>
          <text x="24" y="122" font-family="monospace" font-size="13" fill="#FFFFFF">• Universal Compatibility</text>
          <text x="24" y="150" font-family="monospace" font-size="13" fill="#FFFFFF">• Zero Cloud Lock-in</text>
          <text x="24" y="178" font-family="monospace" font-size="13" fill="#FFFFFF">• Sovereign Encrypted Export</text>
          <rect x="24" y="212" width="242" height="38" rx="10" fill="#052E16" stroke="#22C55E" stroke-width="1.2"/>
          <text x="145" y="236" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#4ADE80">SOVEREIGN PORTABILITY</text>
        </g>

        <!-- Card 3: Physical Hardware Keys -->
        <g transform="translate(650, 10)">
          <rect x="0" y="0" width="290" height="260" rx="24" fill="#1C0B04" stroke="#EA580C" stroke-width="2" filter="url(#cardShadow)"/>
          <rect x="24" y="24" width="48" height="48" rx="14" fill="#2E1306" stroke="#FB713B" stroke-width="1.5"/>
          <rect x="36" y="38" width="24" height="20" rx="4" fill="none" stroke="#FDBA74" stroke-width="2.2"/>
          <circle cx="48" cy="48" r="3" fill="#FB713B"/>
          <text x="86" y="45" font-family="sans-serif" font-size="18" font-weight="800" fill="#FFFFFF">Hardware Keys</text>
          <text x="86" y="65" font-family="monospace" font-size="12" fill="#FB923C">CTAP2 / USB-C &amp; NFC</text>

          <line x1="24" y1="90" x2="266" y2="90" stroke="#EA580C" stroke-opacity="0.25"/>
          <text x="24" y="122" font-family="monospace" font-size="13" fill="#E7E5E4">• Air-Gapped Silicon Token</text>
          <text x="24" y="150" font-family="monospace" font-size="13" fill="#E7E5E4">• Physical Touch Presence</text>
          <text x="24" y="178" font-family="monospace" font-size="13" fill="#E7E5E4">• High-Risk Root Accounts</text>
          <rect x="24" y="202" width="242" height="34" rx="10" fill="#2A1205" stroke="#EA580C" stroke-opacity="0.5"/>
          <text x="145" y="224" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#FDBA74">PHYSICAL VAULT ANCHOR</text>
        </g>
      </g>
    `,
  },
  {
    slug: 'personal-cybersecurity-zero-trust-guide',
    badge: 'PERSONAL ZERO-TRUST • THREAT DEFENSE',
    title: 'Personal Zero-Trust Defense Guide',
    subtitle: 'Defeating AiTM Phishing, Session Cookie Theft & Building 3-2-1 Backups',
    accent: '#EA580C',
    secondary: '#FDBA74',
    illustration: `
      <!-- 3 Concentric Defense Layers / Zero-Trust Matrix -->
      <g transform="translate(135, 145)">
        <!-- Left: Threat Radar & Shield -->
        <g transform="translate(0, 5)">
          <rect x="0" y="0" width="380" height="275" rx="26" fill="#1C0B04" stroke="url(#borderGrad)" stroke-width="2.5" filter="url(#cardShadow)"/>
          <!-- Concentric Radar Circles -->
          <circle cx="190" cy="125" r="88" fill="none" stroke="#EA580C" stroke-opacity="0.2" stroke-width="1.5" stroke-dasharray="4 4"/>
          <circle cx="190" cy="125" r="58" fill="none" stroke="#EA580C" stroke-opacity="0.4" stroke-width="1.5"/>
          <circle cx="190" cy="125" r="30" fill="#EA580C" fill-opacity="0.2" stroke="#FB713B" stroke-width="2"/>
          <!-- Shield Core -->
          <path d="M190 105 L206 112 V124 C206 136 198 144 190 148 C182 144 174 136 174 124 V112 Z" fill="#FB713B"/>
          <!-- Blocked Threat Nodes -->
          <circle cx="115" cy="78" r="6" fill="#EF4444"/>
          <text x="48" y="64" font-family="monospace" font-size="11" fill="#FCA5A5">AiTM Proxy</text>
          <circle cx="268" cy="92" r="6" fill="#EF4444"/>
          <text x="255" y="75" font-family="monospace" font-size="11" fill="#FCA5A5">Infostealer</text>
          <text x="190" y="246" text-anchor="middle" font-family="monospace" font-size="13" font-weight="700" fill="#FDBA74">ZERO-TRUST PERIMETER</text>
        </g>

        <!-- Right: 3 Pillars of Personal Sovereignty -->
        <g transform="translate(415, 5)">
          <!-- Pillar 1 -->
          <rect x="0" y="0" width="515" height="80" rx="18" fill="#1A0C05" stroke="#EA580C" stroke-width="1.5"/>
          <rect x="20" y="20" width="40" height="40" rx="10" fill="#2A1205" stroke="#FB713B"/>
          <text x="40" y="46" text-anchor="middle" font-family="monospace" font-size="16" font-weight="800" fill="#FB713B">01</text>
          <text x="78" y="36" font-family="sans-serif" font-size="16" font-weight="800" fill="#FFFFFF">Compartmentalized Identity &amp; Offline 2FA</text>
          <text x="78" y="58" font-family="monospace" font-size="12" fill="#A8A29E">Email Aliasing • Hardware Vault • Zero-Network OTP</text>

          <!-- Pillar 2 -->
          <rect x="0" y="97" width="515" height="80" rx="18" fill="#1A0C05" stroke="#EA580C" stroke-width="1.5"/>
          <rect x="20" y="117" width="40" height="40" rx="10" fill="#2A1205" stroke="#FB713B"/>
          <text x="40" y="143" text-anchor="middle" font-family="monospace" font-size="16" font-weight="800" fill="#FB713B">02</text>
          <text x="78" y="133" font-family="sans-serif" font-size="16" font-weight="800" fill="#FFFFFF">Session Hygiene &amp; Screen Shielding</text>
          <text x="78" y="155" font-family="monospace" font-size="12" fill="#A8A29E">Anti-Cookie Hijacking • FLAG_SECURE • DNS-over-HTTPS</text>

          <!-- Pillar 3 -->
          <rect x="0" y="195" width="515" height="80" rx="18" fill="#1A0C05" stroke="#22C55E" stroke-opacity="0.6" stroke-width="1.5"/>
          <rect x="20" y="215" width="40" height="40" rx="10" fill="#052E16" stroke="#22C55E"/>
          <text x="40" y="241" text-anchor="middle" font-family="monospace" font-size="16" font-weight="800" fill="#4ADE80">03</text>
          <text x="78" y="231" font-family="sans-serif" font-size="16" font-weight="800" fill="#FFFFFF">3-2-1 Encrypted Disaster Recovery</text>
          <text x="78" y="253" font-family="monospace" font-size="12" fill="#4ADE80">3 Copies • 2 Media Types • 1 Offsite AES-256 Vault</text>
        </g>
      </g>
    `,
  },
];

function escapeXml(str) {
  return str.replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, '&amp;');
}

function createBannerSvg(item) {
  const badge = escapeXml(item.badge);
  const title = escapeXml(item.title);
  const subtitle = escapeXml(item.subtitle);
  return `<svg width="1200" height="675" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E0903"/>
      <stop offset="45%" stop-color="#120502"/>
      <stop offset="100%" stop-color="#080201"/>
    </linearGradient>

    <radialGradient id="centerGlow" cx="50%" cy="42%" r="60%">
      <stop offset="0%" stop-color="#EA580C" stop-opacity="0.28"/>
      <stop offset="50%" stop-color="#EA580C" stop-opacity="0.09"/>
      <stop offset="100%" stop-color="#EA580C" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C" stop-opacity="0.75"/>
      <stop offset="50%" stop-color="#FB923C" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#7C2D12" stop-opacity="0.4"/>
    </linearGradient>

    <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7F1D1D"/>
      <stop offset="100%" stop-color="#FB713B"/>
    </linearGradient>

    <pattern id="gridPattern" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="18" cy="18" r="1.1" fill="#EA580C" fill-opacity="0.12"/>
    </pattern>

    <filter id="cardShadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#000000" flood-opacity="0.65"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="675" fill="url(#bgGrad)"/>
  <rect width="1200" height="675" fill="url(#centerGlow)"/>
  <rect width="1200" height="675" fill="url(#gridPattern)"/>

  <!-- Subtle Enso Zen Circle Watermark -->
  <g transform="translate(1030, 130) scale(3.2) translate(-50, -50)" opacity="0.07">
    <path d="M 56.1 13.1 A 37.2 37.2 0 1 0 85.6 65.1" stroke="#EA580C" stroke-width="8" stroke-linecap="round"/>
    <circle cx="65.2" cy="28.3" r="6" fill="#FB923C"/>
    <circle cx="78.4" cy="48.1" r="6" fill="#FB923C"/>
  </g>

  <!-- Outer Frame -->
  <rect x="24" y="24" width="1152" height="627" rx="28" fill="none" stroke="url(#borderGrad)" stroke-width="1.5"/>

  <!-- Top Header Badge & KD Labs Identity -->
  <g transform="translate(64, 58)">
    <!-- KD Labs Mini Icon -->
    <rect x="0" y="0" width="38" height="38" rx="11" fill="#EA580C"/>
    <text x="19" y="25" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="900" fill="#FFFFFF">KD</text>
    <text x="52" y="25" font-family="sans-serif" font-size="18" font-weight="800" fill="#FFFFFF" letter-spacing="-0.3">KD Labs</text>
    <text x="132" y="25" font-family="monospace" font-size="14" fill="#FB923C">• SECURITY &amp; ENGINEERING</text>

    <!-- Right Pill Badge -->
    <rect x="652" y="2" width="420" height="34" rx="17" fill="#220D05" stroke="#EA580C" stroke-opacity="0.6" stroke-width="1.2"/>
    <text x="862" y="23" text-anchor="middle" font-family="monospace" font-size="11.5" font-weight="700" fill="#FED7AA" letter-spacing="0.6">● ${badge}</text>
  </g>

  <!-- Central Technical Diagram Illustration -->
  ${item.illustration}

  <!-- Bottom Title & Subtitle Bar -->
  <g transform="translate(64, 515)">
    <line x1="0" y1="-22" x2="1072" y2="-22" stroke="#EA580C" stroke-opacity="0.22" stroke-width="1"/>
    <text x="0" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="38" font-weight="800" fill="#FFFFFF" letter-spacing="-0.8">${title}</text>
    <text x="0" y="62" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="19" font-weight="500" fill="#D6D3D1">${subtitle}</text>
    <text x="1072" y="62" text-anchor="end" font-family="monospace" font-size="15" font-weight="700" fill="#FB713B">kd.io.vn/blog</text>
  </g>
</svg>`;
}

async function run() {
  for (const item of banners) {
    const svgContent = createBannerSvg(item);
    const svgFile = path.join(outDir, `${item.slug}.svg`);
    const pngFile = path.join(outDir, `${item.slug}.png`);

    fs.writeFileSync(svgFile, svgContent, 'utf8');
    await sharp(Buffer.from(svgContent), { density: 144 })
      .resize(1200, 675)
      .png({ quality: 95, compressionLevel: 9 })
      .toFile(pngFile);

    console.log(`Generated banner: ${item.slug}.svg & ${item.slug}.png`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
