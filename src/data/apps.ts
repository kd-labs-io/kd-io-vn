export interface AppItem {
  id: string;
  slug: string;
  platformType: 'vscode_extension' | 'mobile_app';
  isReleased: boolean;
  status: 'released' | 'open_source';
  name: string;
  category: {
    vi: string;
    en: string;
  };
  securityBadge: {
    vi: string;
    en: string;
  };
  platformBadge: string;
  rating?: string;
  reviewsCount?: string;
  downloads?: string;
  version?: string;
  size?: string;
  osRequirement?: string;
  lastUpdated?: string;
  packageName?: string;
  googlePlayUrl: string;
  appStoreUrl?: string;
  githubUrl?: string;
  vsMarketplaceUrl?: string;
  openVsxUrl?: string;
  protocolUrl?: string;
  installCommand?: string;
  researchBlogSlug?: string;
  iconImage?: string;
  featureGraphic?: {
    vi: string;
    en: string;
  };
  screenshots?: {
    vi: string[];
    en: string[];
  };
  shortDescription: {
    vi: string;
    en: string;
  };
  fullDescription: {
    vi: string;
    en: string;
  };
  features: {
    vi: string[];
    en: string[];
  };
  whatsNew?: {
    vi: string;
    en: string;
  };
  securityPledge?: {
    vi: string;
    en: string;
  };
  accentColor: string;
}

export const appsData: AppItem[] = [
  {
    id: 'kd-code',
    slug: 'kd-code',
    platformType: 'vscode_extension',
    isReleased: true,
    status: 'open_source',
    name: 'KD Code',
    category: {
      vi: 'AI-Native IDE • VS Code Extension',
      en: 'AI-Native IDE • VS Code Extension',
    },
    securityBadge: {
      vi: 'ACP Protocol • Git Worktrees',
      en: 'ACP Protocol • Git Worktrees',
    },
    platformBadge: 'VS Code ≥ 1.123 • MIT',
    version: '0.0.6',
    size: 'Open Source (MIT)',
    osRequirement: 'VS Code ≥ 1.123 (macOS • Linux • Windows)',
    lastUpdated: 'Tháng 11, 2026',
    packageName: 'kd-labs.kd-code',
    googlePlayUrl: '#',
    githubUrl: 'https://github.com/kd-labs-io/kd-code-extension',
    vsMarketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=kd-labs.kd-code',
    openVsxUrl: 'https://open-vsx.org/extension/kd-labs/kd-code',
    protocolUrl: 'https://agentclientprotocol.com',
    installCommand: 'npm install && npm run reinstall',
    researchBlogSlug: 'kd-code-acp-multi-agent-git-worktrees',
    iconImage: '/assets/kd-code/icon.png',
    shortDescription: {
      vi: 'Tiện ích mở rộng VS Code điều phối các Coding Agent qua giao thức chuẩn Agent Client Protocol (ACP). Cài đặt 1-click Claude, Codex, OpenCode và chạy đối sánh song song (Best-of-N) trên các Git Worktree độc lập.',
      en: 'VS Code extension for orchestrating coding agents over the Agent Client Protocol (ACP). Install Claude, Codex, OpenCode in one click and compare parallel agent runs (Best-of-N) in isolated Git worktrees.',
    },
    fullDescription: {
      vi: 'KD Code mang đến luồng làm việc AI-Native chuẩn mực ngay bên trong VS Code thông qua giao thức mở Agent Client Protocol (ACP). Thay vì bị khóa chặt vào một trợ lý duy nhất, lập trình viên có thể cài đặt Claude, Codex, OpenCode từ ACP Registry hoặc kết nối Agent cục bộ chỉ với một cú nhấp chuột. Điểm đột phá của KD Code là khả năng chạy mỗi phiên hội thoại trong một Git Worktree riêng biệt và thực thi chế độ Best-of-N (Compare): gửi cùng một yêu cầu tới nhiều Agent/Model song song, đối chiếu diff trực quan theo từng hunk/file, sau đó gộp nhánh (merge) hoặc tự động tạo Pull Request.',
      en: 'KD Code brings a disciplined AI-Native engineering workflow directly into VS Code over the open Agent Client Protocol (ACP). Instead of locking developers into a single assistant, KD Code lets you install Claude, Codex, OpenCode, and custom local agents from the ACP Registry in one click. Its core breakthrough is isolated Git Worktree execution with Best-of-N Compare: dispatch a single prompt across multiple agents, models, and effort levels in parallel worktrees, inspect side-by-side diffs per file or hunk, and seamlessly merge or draft Pull Requests.',
    },
    features: {
      vi: [
        'Chuẩn giao thức ACP: Kết nối và cài đặt 1-click Claude, Codex, OpenCode từ ACP Registry hoặc Agent tùy chỉnh.',
        'Cô lập bằng Git Worktrees: Mỗi tab hội thoại vận hành trên một nhánh Git Worktree riêng biệt, không làm bẩn nhánh đang code.',
        'Đối sánh Best-of-N (Compare): Gửi 1 prompt cho nhiều Agent/Model cùng lúc, so sánh diff song song và chọn bản tốt nhất.',
        'Kiểm duyệt thay đổi (Keep & Undo): Duyệt diff theo từng dòng/file ngay trong khung chat và trình soạn thảo, hỗ trợ khôi phục Checkpoint.',
        'Ngữ cảnh đa phương thức (@Context): Đính kèm file, thư mục, terminal lỗi, Problems và vẽ chú thích trực tiếp lên ảnh chụp màn hình.',
        'Tích hợp MCP, Skills ($) & Slash Commands (/): Mở rộng công cụ cho Agent và tự động duyệt quyền (Permission Rules) linh hoạt.',
        'Theo dõi Token, Chi phí & Tracing: Thống kê chi phí theo phiên/ngày qua ccusage và giám sát toàn bộ thông điệp ACP theo thời gian thực.',
        'Bảo mật cấp độ máy (Machine-Scoped Security): Cấu hình thực thi (Agent, MCP, biến môi trường) được khóa ở cấp máy để chống tấn công từ repo lạ.',
        'Giao diện Song ngữ & Mã nguồn mở MIT: Hỗ trợ hoàn chỉnh Tiếng Việt & Tiếng Anh, công khai minh bạch tại github.com/kd-labs-io/kd-code-extension.',
      ],
      en: [
        'Agent Client Protocol (ACP): One-click install of Claude, Codex, OpenCode from the ACP Registry or custom local agents.',
        'Isolated Git Worktrees: Run any tab or new chat in its own Git worktree and branch without polluting your working tree.',
        'Best-of-N Parallel Compare: Send one prompt to multiple agents/models simultaneously, compare diffs side-by-side, and apply the winner.',
        'Granular Diff Review & Checkpoints: Keep or Undo changes per file or per hunk in chat and editor, with full checkpoint restore.',
        'Rich @Context & Image Annotation: Attach files, folders, terminals, IDE problems, and draw directly on images with pen/arrows/text.',
        'MCP Servers, Skills ($) & Commands (/): Pass custom MCP servers, invoke skills with $, and configure workspace permission rules.',
        'Token Cost & ACP Tracing: Track session/daily token spend via ccusage and inspect live turn latency and raw ACP protocol logs.',
        'Machine-Scoped Security Boundary: Execution settings (custom agents, MCP, env vars) are restricted to machine scope to prevent workspace tampering.',
        'Bilingual UI & MIT Open Source: Native English and Vietnamese interface, openly auditable at github.com/kd-labs-io/kd-code-extension.',
      ],
    },
    whatsNew: {
      vi: '• Ra mắt mã nguồn mở KD Code v0.0.6 theo giấy phép MIT tại github.com/kd-labs-io/kd-code-extension\n• Hỗ trợ đầy đủ Agent Client Protocol (ACP) & cài đặt tự động từ ACP Registry\n• Chế độ Git Worktree tự động, Best-of-N Compare và tạo Pull Request qua GitHub CLI\n• Công cụ chẩn đoán môi trường (Doctor), thống kê chi phí ccusage và giao diện song ngữ Anh - Việt',
      en: '• Open-source release of KD Code v0.0.6 under the MIT License at github.com/kd-labs-io/kd-code-extension\n• Full Agent Client Protocol (ACP) client implementation & 1-click ACP Registry installer\n• Automated Git Worktree isolation, Best-of-N parallel comparison, and GitHub CLI PR drafting\n• Built-in Setup Doctor, ccusage token cost analytics, and bilingual English/Vietnamese UI',
    },
    securityPledge: {
      vi: 'Mọi thiết lập thực thi (Custom Agents, MCP Servers, biến môi trường, đường dẫn Node/ccusage) chỉ được áp dụng ở phạm vi máy (Machine Scope) — ngăn chặn hoàn toàn việc một workspace độc hại tự ý thực thi mã. Lệnh khởi tạo worktree luôn yêu cầu xác nhận lại mỗi khi nội dung tệp cấu hình thay đổi.',
      en: 'All execution-critical settings (custom agents, MCP servers, environment variables, Node/ccusage paths) are strictly enforced at machine scope — preventing untrusted workspaces from injecting executable commands. Worktree setup scripts require explicit user approval whenever commands or referenced files change.',
    },
    accentColor: '#EA580C',
  },
  {
    id: 'simple-otp',
    slug: 'simple-otp',
    platformType: 'mobile_app',
    isReleased: true,
    status: 'released',
    name: 'Simple OTP',
    category: {
      vi: 'Bảo mật & Xác thực 2FA',
      en: 'Security & 2FA Authenticator',
    },
    securityBadge: {
      vi: '100% Offline • AES-256-GCM',
      en: '100% Offline • AES-256-GCM',
    },
    platformBadge: 'iOS & Android • MIT',
    version: '0.0.3',
    size: '12.4 MB',
    osRequirement: 'iOS 16.4+ & Android 8.0+',
    lastUpdated: 'Tháng 10, 2026',
    packageName: 'vn.io.kd.simpleotp',
    appStoreUrl: 'https://apps.apple.com/us/app/simple-otp/id6816673973',
    googlePlayUrl: '#',
    githubUrl: 'https://github.com/kd-labs-io/simple-otp',
    researchBlogSlug: 'simple-otp',
    iconImage: '/assets/simple-otp/icon.png',
    featureGraphic: {
      vi: '/assets/simple-otp/banners/vi/00_feature_graphic.png',
      en: '/assets/simple-otp/banners/en/00_feature_graphic.png',
    },
    screenshots: {
      vi: [
        '/assets/simple-otp/banners/vi/01_offline_security.png',
        '/assets/simple-otp/banners/vi/02_qr_scanner.png',
        '/assets/simple-otp/banners/vi/03_pet_academy.png',
        '/assets/simple-otp/banners/vi/04_encrypted_backup.png',
      ],
      en: [
        '/assets/simple-otp/banners/en/01_offline_security.png',
        '/assets/simple-otp/banners/en/02_qr_scanner.png',
        '/assets/simple-otp/banners/en/03_pet_academy.png',
        '/assets/simple-otp/banners/en/04_encrypted_backup.png',
      ],
    },
    shortDescription: {
      vi: 'Ứng dụng xác thực 2 bước (2FA) hoạt động 100% ngoại tuyến trên iOS & Android. Khóa bí mật được mã hóa AES-256-GCM trong két phần cứng và tuyệt đối không kết nối mạng.',
      en: '100% offline two-factor authenticator (2FA) for iOS & Android. Master keys stay locked inside hardware enclaves with AES-256-GCM and never connect to the internet.',
    },
    fullDescription: {
      vi: 'Simple OTP bảo vệ tài khoản số của bạn bằng phương thức xác thực hai bước (2FA). Ứng dụng hoạt động hoàn toàn ngoại tuyến và lược bỏ hoàn toàn quyền truy cập Internet. Mọi khóa bảo mật được lưu trong két phần cứng (iOS Keychain / Android Keystore) với mã hóa xác thực AES-256-GCM và dẫn xuất khóa PBKDF2 100.000 vòng. Ứng dụng đi kèm các trợ thủ ảo tương tác giúp trải nghiệm bảo mật hàng ngày trở nên nhẹ nhàng và an tâm.',
      en: 'Simple OTP protects your accounts with two-factor authentication (2FA). The app operates 100% offline with zero internet permissions. All secret keys are stored in hardware enclaves (iOS Keychain / Android Keystore) encrypted with authenticated AES-256-GCM and 100,000-round PBKDF2 key derivation. Animated mascot companions make daily security simple and calm.',
    },
    features: {
      vi: [
        'Ngoại tuyến 100% (Zero-Network): Ứng dụng không yêu cầu quyền truy cập mạng.',
        'Két mã hóa phần cứng: Bảo vệ bằng AES-256-GCM trong iOS Keychain và Android Keystore.',
        'Tiêu chuẩn quốc tế: Tương thích hoàn toàn chuẩn TOTP (RFC 6238) và HOTP (RFC 4226).',
        'Quét mã QR linh hoạt: Quét trực tiếp bằng camera, nhận diện từ ảnh chụp hoặc nhập tay.',
        'Màn chắn quyền riêng tư: Tự động che nội dung khi chuyển đổi ứng dụng đa nhiệm.',
        'Khóa sinh trắc học: Mở khóa an toàn bằng Face ID, Touch ID hoặc vân tay.',
        'Trợ thủ ảo tương tác: Phản hồi hình ảnh sinh động từ Bé Khóa, Cipher Cat và Byte Dog.',
        'Sao lưu mã hóa: Xuất tệp .simpleotp có mật khẩu bảo vệ để chuyển sang thiết bị mới.',
        'Mã nguồn mở MIT: Toàn bộ mã nguồn được công khai minh bạch tại github.com/kd-labs-io/simple-otp.',
      ],
      en: [
        '100% Offline (Zero-Network): The app requests zero internet permissions.',
        'Hardware Encryption: AES-256-GCM inside iOS Keychain and Android Keystore.',
        'Industry Standard: Fully compliant with TOTP (RFC 6238) and HOTP (RFC 4226).',
        'Fast QR Scanning: Scan with camera, import from photos, or enter keys manually.',
        'Privacy Shield: Automatically obscures app content in the multitasking switcher.',
        'Biometric Protection: Unlock with Face ID, Touch ID, or fingerprint.',
        'Animated Companions: Real-time reactions from Bé Khóa, Cipher Cat, and Byte Dog.',
        'Encrypted Backup: Export password-protected .simpleotp files to transfer devices.',
        'Open Source MIT: Fully transparent and auditable at github.com/kd-labs-io/simple-otp.',
      ],
    },
    whatsNew: {
      vi: '• Phát hành chính thức phiên bản 0.0.3 trên Apple App Store\n• Hỗ trợ đầy đủ chuẩn RFC 6238 (TOTP) và RFC 4226 (HOTP)\n• Kiến trúc Zero-Network 100% ngoại tuyến, bảo mật két phần cứng iOS Keychain\n• Trọn bộ 3 linh vật trợ thủ bảo mật tương tác sống động',
      en: '• Official release of version 0.0.3 on the Apple App Store\n• Full compliance with RFC 6238 (TOTP) and RFC 4226 (HOTP)\n• 100% offline Zero-Network architecture with iOS Keychain enclave\n• Complete trio of interactive security companion mascots',
    },
    securityPledge: {
      vi: 'Ứng dụng hoạt động với kiến trúc 100% Không-Mạng (Zero-Network), không chứa SDK theo dõi hay quảng cáo, lưu trữ khóa trong két phần cứng và tuân thủ nghiêm ngặt chuẩn an toàn dữ liệu trên App Store & Google Play.',
      en: 'Engineered with a strict 100% Zero-Network architecture, zero tracking SDKs, hardware-backed enclave key storage, and full compliance with App Store & Google Play Data Safety standards.',
    },
    accentColor: '#F76B00',
  },
];
