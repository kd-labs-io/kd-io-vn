---
title: 'Anatomy of TOTP (RFC 6238) & Why SMS 2FA Fails Against Modern SIM Swap Attacks'
description: 'A technical deep dive into SS7 telecom vulnerabilities, SIM swapping mechanics, and the HMAC-SHA cryptography powering offline TOTP authenticators under RFC 6238.'
pubDate: 2026-10-02
heroImage: '/assets/blog/totp-vs-sms-sim-swap.png'
tags: ['Security', 'Cryptography', 'TOTP', '2FA', 'Cybersecurity']
author: 'KD Labs'
readingTime: '7 min read'
---

For well over a decade, SMS One-Time Passwords (**SMS OTP**) served as the default second factor for online banking, email accounts, and digital exchanges. Yet both the U.S. National Institute of Standards and Technology (**NIST** in *Special Publication 800-63B*) and leading security researchers worldwide have long classified SMS as a **restricted and vulnerable authentication channel**.

Why has such a ubiquitous security mechanism become the weakest link in personal digital defense? And how does the **TOTP (Time-based One-Time Password – RFC 6238)** algorithm mathematically eliminate network interception without sending a single packet over the air? Let’s dissect the engineering reality with **KD Labs**.

---

## 1. The Collapse of SMS OTP: Telecom Infrastructure Was Never Built for Cryptography

The Short Message Service (SMS) specification was engineered in the 1980s with a single objective: squeezing 160-character messages across cellular control channels. By design, SMS **lacks End-to-End Encryption (E2EE)** and relies on implicit trust across hundreds of interconnected carrier networks worldwide.

Three practical attack vectors routinely defeat SMS 2FA without an attacker ever touching your physical phone:

### 1.1. SIM Swapping (Port-Out Fraud)
In a **SIM Swap** attack, adversaries aggregate leaked personal identifiers (from historical data breaches) and use targeted social engineering—or bribed retail insiders—to convince a mobile carrier to reassign your phone number to a new physical SIM card or eSIM profile controlled by the attacker.

The moment the fraudulent SIM activates:
1. Your phone immediately drops cellular connectivity (`No Service`).
2. Every incoming voice call and SMS OTP for banking password resets, email recovery, and crypto exchange logins routes directly to the attacker's device.
3. Within minutes, any account that permits SMS as a primary recovery fallback can be completely hijacked.

### 1.2. SS7 & Diameter Protocol Interception
**Signaling System No. 7 (SS7)** is the global telecom backbone that enables international roaming between cellular operators. Because SS7 relies on legacy perimeter trust rather than cryptographic sender verification, a threat actor who gains access to a rogue or compromised SS7 node can broadcast a spoofed `MAP SendRoutingInfoForSM` packet—silently redirecting your incoming SMS OTPs to an external interceptor anywhere in the world.

### 1.3. Plaintext Notification Harvesting
On the endpoint device itself, mobile spyware and banking trojans frequently trick users into granting `NotificationListenerService` or Accessibility permissions. Because incoming SMS messages arrive in unencrypted plaintext and often preview directly on the lock screen, malicious background listeners can scrape the 6-digit code and exfiltrate it to a Command-and-Control (C2) server in milliseconds.

> *“An authentication token that traverses dozens of cellular base stations and third-party routing hubs in plaintext is no longer a secret you own.”*

---

## 2. Dissecting TOTP (RFC 6238): Replacing Telecom Channels with Synchronized Time

To sever reliance on telecom carriers altogether, the **Initiative for Open Authentication (OATH)** and the **IETF** standardized two open cryptographic specifications:
- **RFC 4226 (HOTP):** An algorithm based on HMAC cryptographic hashing and a monotonically incrementing *Counter*.
- **RFC 6238 (TOTP):** An extension of HOTP that replaces the event counter with a **deterministic time-step derived from Unix Epoch Time**.

The brilliance of TOTP lies in a simple cryptographic invariant: **The authentication server and your handheld device never communicate over the network to agree on a code.**

```
[Shared Secret K (Base32)]  +  [Time Counter C = ⌊UnixTime / 30⌋]
                                      │
                                      ▼
                        ┌───────────────────────────┐
                        │  HMAC-SHA1 / SHA256 / 512 │
                        └───────────────────────────┘
                                      │
                             20–64 Byte Digest
                                      │
                                      ▼
                        ┌───────────────────────────┐
                        │ Dynamic Truncation (DT)   │
                        │ Extract 4 Bytes (31-bit)  │
                        └───────────────────────────┘
                                      │
                                Modulo Operation
                                 (Modulo 10^6)
                                      │
                                      ▼
                              6-Digit TOTP Code
```

Token generation executes across **four deterministic mathematical stages**:

### Stage 1: Provisioning the Shared Secret ($K$)
When you enable 2FA on GitHub, Google, or AWS, the server generates a high-entropy random byte array (typically 128-bit to 256-bit), encodes it in **Base32** (`A–Z` and `2–7`), and presents it inside a standardized `otpauth://` QR code:

```text
otpauth://totp/GitHub:kdlabs?secret=JBSWY3DPEHPK3PXP&issuer=GitHub&algorithm=SHA1&digits=6&period=30
```

When an offline authenticator like **Simple OTP** scans this QR code, the secret $K$ is sealed inside your phone's hardware enclave. From that moment onward, $K$ never travels across a network again.

### Stage 2: Computing the Moving Time Counter ($C$)
Both the server and your device read the current **UTC Unix Timestamp** (seconds elapsed since `1970-01-01T00:00:00Z`). Using a standard time-step window of $X = 30$ seconds, the 64-bit integer counter $C$ (encoded as an 8-byte Big-Endian array) is calculated via integer floor division:

$$C = \left\lfloor \frac{\text{UnixTime} - T_0}{30} \right\rfloor$$

Every timestamp within the same 30-second window yields the exact same counter $C$.

### Stage 3: HMAC Cryptographic Hashing
The authenticator feeds the secret key $K$ and the 8-byte counter $C$ into a **Hash-based Message Authentication Code (HMAC)** using `SHA-1`, `SHA-256`, or `SHA-512`:

$$\text{HS} = \text{HMAC-SHA}(K, C)$$

For `HMAC-SHA1`, the resulting digest $\text{HS}$ is a 20-byte array (`byte[0]` through `byte[19]`). Because HMAC is a one-way cryptographic PRF (Pseudorandom Function), even an adversary who observes millions of sequential 6-digit codes cannot reverse-engineer the underlying secret key $K$.

### Stage 4: Dynamic Truncation and Modulo $10^d$
How do we deterministically compress a 20-byte cryptographic digest into a human-friendly 6-digit number? RFC 4226 specifies **Dynamic Truncation**:

1. Read the **low-order 4 bits** of the final byte in the hash digest to serve as a dynamic byte index (`offset`), yielding a value between `0` and `15`:
   `offset = HS[HS.length - 1] & 0x0f`
2. Slice 4 consecutive bytes starting at `offset` (`HS[offset]...HS[offset + 3]`).
3. Mask the most significant bit (`& 0x7fffffff`) to strip the sign bit and avoid signed/unsigned integer ambiguity across CPU architectures, producing a 31-bit unsigned integer $S_{\text{num}}$.
4. Compute $S_{\text{num}} \bmod 10^6$ (or $10^8$ for 8-digit tokens) and zero-pad the result on the left.

---

## 3. Code Reference: Implementing RFC 6238 TOTP from Scratch

Below is a clean, dependency-free TypeScript implementation using the standard Web Crypto API that illustrates the exact bitwise operations inside a compliant TOTP engine:

```typescript
/**
 * Generates an IETF RFC 6238 & RFC 4226 compliant TOTP token
 */
export async function generateTOTP(
  secretBytes: Uint8Array,
  unixTimeSeconds: number = Math.floor(Date.now() / 1000),
  period: number = 30,
  digits: number = 6,
  algorithm: 'SHA-1' | 'SHA-256' | 'SHA-512' = 'SHA-1'
): Promise<string> {
  // 1. Compute 64-bit Big-Endian time counter C
  const counter = BigInt(Math.floor(unixTimeSeconds / period));
  const counterBuffer = new ArrayBuffer(8);
  const view = new DataView(counterBuffer);
  view.setBigUint64(0, counter, false); // false = Big-Endian

  // 2. Import shared secret K and compute HMAC-SHA digest
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    secretBytes,
    { name: 'HMAC', hash: { name: algorithm } },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', cryptoKey, counterBuffer);
  const hs = new Uint8Array(signature);

  // 3. Dynamic Truncation (31-bit extraction per RFC 4226 Section 5.4)
  const offset = hs[hs.length - 1] & 0x0f;
  const binaryCode =
    ((hs[offset] & 0x7f) << 24) |
    ((hs[offset + 1] & 0xff) << 16) |
    ((hs[offset + 2] & 0xff) << 8) |
    (hs[offset + 3] & 0xff);

  // 4. Modulo 10^digits reduction with leading-zero padding
  const otp = binaryCode % Math.pow(10, digits);
  return otp.toString().padStart(digits, '0');
}
```

Because this entire pipeline relies strictly on local arithmetic and hardware clocks, generating a token takes less than **0.1 milliseconds** and requires **zero internet connectivity**.

---

## 4. Security Comparison: SMS OTP vs. Cloud 2FA vs. Offline TOTP

Not all TOTP authenticators share the same threat model. Many mainstream 2FA apps silently synchronize your raw secret keys ($K$) to centralized cloud servers for convenience. If that cloud provider suffers a breach—or if your cloud account is compromised—every 2FA seed in your vault is exposed simultaneously.

| Security Dimension | SMS OTP (Cellular Text) | Cloud-Synced 2FA Apps | Offline Hardware 2FA (e.g., Simple OTP) |
| :--- | :--- | :--- | :--- |
| **SIM Swap & SS7 Immunity** | ❌ Vulnerable to interception | ✅ Immune (SIM-independent) | ✅ Fully Immune (SIM-independent) |
| **Airplane Mode / Off-Grid Operation** | ❌ Requires cellular tower | ⚠️ Depends on active cloud session | ✅ 100% Offline by Architecture |
| **Cloud Breach Attack Surface** | ❌ Exposed at telecom carrier | ⚠️ Centralized cloud vault target | ✅ Zero (`INTERNET` permission removed) |
| **Hardware Key Isolation** | ❌ Plaintext message | ⚠️ Often decrypted in memory/cloud | ✅ Sealed in iOS Keychain / Android Keystore |
| **Backup Sovereignty** | ❌ None | ⚠️ Locked into vendor ecosystem | ✅ User-owned `.simpleotp` AES-256 files |

---

## 5. Actionable Defense Checklist: Hardening Your 2FA Posture Today

To protect your critical accounts against SIM swapping and credential harvesting, **KD Labs** recommends executing these four steps immediately:

1. **Strip SMS Fallbacks from Critical Accounts:** Inside your Google, Apple, Microsoft, and GitHub security settings, remove SMS phone numbers as a 2FA fallback once an Authenticator App is configured. An account with both TOTP and SMS enabled is only as secure as the weaker SMS link (*Fallback Downgrade Attack*).
2. **Enable Carrier Port-Out Locks & SIM PINs:** Activate a SIM PIN on your physical SIM or eSIM and enable "Number Lock / Port Freeze" inside your mobile carrier's account portal.
3. **Adopt a Zero-Network Authenticator:** Choose an authenticator engineered without network permissions, such as **[Simple OTP](/en/apps/simple-otp/)**. When an app physically lacks the OS permission to open a network socket, remote exfiltration of your `otpauth://` secrets is mathematically and architecturally impossible.
4. **Store Recovery Codes in an Encrypted Offline Vault:** Whenever you enroll a new TOTP token, save the one-time emergency recovery codes inside an AES-256-GCM encrypted archive or a physical safe.

---

## Final Thoughts

Moving from **SMS OTP** to **offline RFC 6238 TOTP** is more than a routine settings tweak—it is a philosophical shift from *"trusting third-party telecom intermediaries"* to *"trusting deterministic cryptography anchored on hardware you control."*

If you want a clean, open-source TOTP/HOTP authenticator that operates 100% offline with hardware-backed encryption, explore **[Simple OTP](/en/apps/simple-otp/)** by KD Labs.
