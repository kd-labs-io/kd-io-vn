export interface AppItem {
  id: string;
  slug: string;
  isReleased: boolean;
  status: 'released' | 'coming_soon' | 'in_development' | 'beta' | 'slot_available';
  name: string;
  category: {
    vi: string;
    en: string;
  };
  rating?: string;
  reviewsCount?: string;
  downloads?: string;
  version?: string;
  size?: string;
  osRequirement?: string;
  lastUpdated?: string;
  packageName?: string;
  googlePlayUrl: string; // Set to '#' by default for user to update
  appStoreUrl?: string;
  githubUrl?: string;
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
  accentColor: string;
}

export const appsData: AppItem[] = [
  {
    id: 'simple-otp',
    slug: 'simple-otp',
    isReleased: true,
    status: 'released',
    name: 'Simple OTP',
    category: {
      vi: 'Bảo mật & Xác thực 2FA',
      en: 'Security & 2FA Authenticator',
    },
    version: '0.0.3',
    size: '12.4 MB',
    osRequirement: 'iOS 16.4+ & Android 8.0+',
    lastUpdated: 'Tháng 10, 2026',
    packageName: 'vn.io.kd.simpleotp',
    appStoreUrl: 'https://apps.apple.com/us/app/simple-otp/id6816673973',
    googlePlayUrl: '#', // Dự kiến phát hành trên Google Play
    githubUrl: 'https://github.com/kd-labs-io/simple-otp',
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
      vi: 'Ứng dụng xác thực 2 bước (2FA) hoạt động 100% ngoại tuyến. Khóa bí mật được mã hóa trong két phần cứng và không gửi dữ liệu ra ngoài mạng.',
      en: '100% offline two-factor authenticator (2FA). Master keys stay in hardware enclaves and never connect to the internet.',
    },
    fullDescription: {
      vi: 'Simple OTP bảo vệ tài khoản số của bạn bằng phương thức xác thực hai bước (2FA). Ứng dụng hoạt động hoàn toàn ngoại tuyến và không yêu cầu quyền Internet. Mọi khóa bảo mật được lưu trong két phần cứng (iOS Keychain / Android Keystore) với mã hóa AES-256-GCM. Ứng dụng đi kèm các trợ thủ ảo tương tác giúp trải nghiệm bảo mật trở nên đơn giản và thuận tiện.',
      en: 'Simple OTP protects your accounts with two-factor authentication (2FA). The app operates 100% offline with zero internet permissions. All secret keys are stored in hardware enclaves (iOS Keychain / Android Keystore) encrypted with AES-256-GCM. Animated mascot companions make account security simple and friendly.',
    },
    features: {
      vi: [
        'Ngoại tuyến 100%: Ứng dụng không yêu cầu quyền truy cập mạng.',
        'Két mã hóa phần cứng: Bảo vệ bằng AES-256-GCM trong iOS Keychain và Android Keystore.',
        'Tiêu chuẩn quốc tế: Tương thích hoàn toàn chuẩn TOTP (RFC 6238) và HOTP (RFC 4226).',
        'Quét mã QR linh hoạt: Quét trực tiếp bằng camera, nhận diện từ ảnh chụp hoặc nhập tay.',
        'Màn chắn quyền riêng tư: Tự động che nội dung khi chuyển ứng dụng.',
        'Khóa sinh trắc học: Mở khóa an toàn bằng Face ID, Touch ID hoặc vân tay.',
        'Trợ thủ ảo tương tác: Phản hồi hình ảnh sinh động từ Bé Khóa, Cipher Cat và Byte Dog.',
        'Sao lưu mã hóa: Xuất tệp .simpleotp có mật khẩu bảo vệ để chuyển sang thiết bị mới.',
        'Mã nguồn mở MIT: Toàn bộ mã nguồn được công khai minh bạch trên GitHub.',
      ],
      en: [
        '100% Offline: The app requests zero internet permissions.',
        'Hardware Encryption: AES-256-GCM inside iOS Keychain and Android Keystore.',
        'Industry Standard: Fully compliant with TOTP (RFC 6238) and HOTP (RFC 4226).',
        'Fast QR Scanning: Scan with camera, import from photos, or enter keys manually.',
        'Privacy Shield: Automatically obscures app content in the app switcher.',
        'Biometric Protection: Unlock with Face ID, Touch ID, or fingerprint.',
        'Animated Companions: Real-time reactions from Bé Khóa, Cipher Cat, and Byte Dog.',
        'Encrypted Backup: Export password-protected .simpleotp files to transfer devices.',
        'Open Source MIT: Fully transparent and independently auditable on GitHub.',
      ],
    },
    whatsNew: {
      vi: '• Phát hành chính thức phiên bản 0.0.3 trên Apple App Store\n• Hỗ trợ đầy đủ chuẩn RFC 6238 (TOTP) và RFC 4226 (HOTP)\n• Kiến trúc Zero-Network 100% ngoại tuyến, bảo mật két phần cứng iOS Keychain\n• Trọn bộ 3 linh vật trợ thủ bảo mật tương tác sống động',
      en: '• Official release of version 0.0.3 on the Apple App Store\n• Full compliance with RFC 6238 (TOTP) and RFC 4226 (HOTP)\n• 100% offline Zero-Network architecture with iOS Keychain enclave\n• Complete trio of interactive security companion mascots',
    },
    accentColor: '#F76B00',
  },
  {
    id: 'kanso-focus',
    slug: 'kanso-focus',
    isReleased: false,
    status: 'in_development',
    name: 'Kanso Focus',
    category: {
      vi: 'Năng suất & Phong cách sống',
      en: 'Productivity & Lifestyle',
    },
    version: '1.0.0-lab',
    size: '7.8 MB',
    osRequirement: 'Android 8.0+',
    lastUpdated: 'Dự án phòng Lab',
    packageName: 'com.kdlabs.kansofocus',
    googlePlayUrl: '#',
    shortDescription: {
      vi: 'Đồng hồ đếm giờ Pomodoro tối giản kết hợp âm thanh thiên nhiên, giúp bạn bước vào trạng thái Deep Work mà không bị xao nhãng.',
      en: 'Minimalist Pomodoro timer paired with ambient nature soundscapes, designed to cultivate deep work without cognitive noise.',
    },
    fullDescription: {
      vi: 'Dự án đang trong phòng nghiên cứu phát triển tiếp theo của KD Labs.',
      en: 'Active laboratory project at KD Labs.',
    },
    features: {
      vi: [
        'Đồng hồ Pomodoro với chu kỳ tuỳ chỉnh',
        'Âm thanh nền thiên nhiên chất lượng cao',
        'Hoạt động 100% Offline không quảng cáo',
      ],
      en: [
        'Customizable Pomodoro timer intervals',
        'High-quality ambient soundscapes',
        '100% Offline with zero ads',
      ],
    },
    accentColor: '#EA580C',
  },
  {
    id: 'next-project-slot',
    slug: 'next-project-slot',
    isReleased: false,
    status: 'slot_available',
    name: 'Ứng dụng mới (Slot trống)',
    category: {
      vi: 'Dành cho dự án tiếp theo của bạn',
      en: 'Reserved for your upcoming app',
    },
    version: 'Upcoming',
    googlePlayUrl: '#',
    shortDescription: {
      vi: 'Slot dự phòng đã được thiết kế sẵn. Bạn có thể dễ dàng bổ sung thông tin ứng dụng mới vào src/data/apps.ts.',
      en: 'Pre-configured reserve slot. You can easily add your next mobile application to src/data/apps.ts.',
    },
    fullDescription: {
      vi: 'Khung hiển thị mô-đun cho nhà phát triển KD Labs.',
      en: 'Modular showcase slot for KD Labs developer.',
    },
    features: {
      vi: [
        'Tự động sinh trang chi tiết ứng dụng',
        'Tích hợp nút tải Google Play',
        'Tương thích đa ngôn ngữ EN / VI',
      ],
      en: [
        'Automatically creates dedicated app route',
        'Instant Google Play download button support',
        'Full bilingual EN / VI compatibility',
      ],
    },
    accentColor: '#9A3412',
  },
];
