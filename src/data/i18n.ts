export type Locale = 'vi' | 'en';

export const translations = {
  vi: {
    nav: {
      apps: 'Dự án',
      philosophy: 'Triết lý',
      blog: 'Blog',
      press: 'Press Kit',
      privacy: 'Quyền riêng tư',
      support: 'Hỗ trợ',
      googlePlay: 'Google Play Store',
      themeToggle: 'Chuyển giao diện',
      language: 'Ngôn ngữ',
    },
    hero: {
      badge: 'AI-Native Labs',
      badgeSubtitle: 'Software & Research Lab',
      titleLine1: 'Kiến trúc AI-Native.',
      titleLine2: 'Từ Ý tưởng đến Hệ thống Lõi.',
      description:
        'KD Labs là AI-Native Software & Research Lab chuyên nghiên cứu và phát triển phần mềm tích hợp AI Agent, kiến trúc hệ thống phân tán, hạ tầng Kubernetes và ứng dụng đề cao quyền riêng tư.',
      ctaAppStore: 'Tải trên App Store',
      ctaGooglePlay: 'Google Play (Sắp có)',
      ctaBrowseApps: 'Khám phá Hệ sinh thái',
      statsOffline: 'AI-Native Core',
      statsSecurity: 'Zero-Trust & AES-256',
      statsAdFree: 'Cloud-Native K8s',
      statsOpenSource: 'Mã nguồn mở MIT',
    },
    statsBar: {
      item1Title: 'Kiến trúc AI-Native',
      item1Desc: 'Tích hợp Multi-Agent, LLM và tự động hóa quy trình.',
      item2Title: 'Hệ thống Chịu tải cao',
      item2Desc: 'Thiết kế phân tán, Cloud-Native & Kubernetes (K8s).',
      item3Title: 'Bảo mật Zero-Trust',
      item3Desc: 'Mã hóa phần cứng và tôn trọng quyền riêng tư dữ liệu.',
      item4Title: 'Nghiên cứu Mở (Open R&D)',
      item4Desc: 'Chia sẻ kiến thức chuyên sâu và mã nguồn minh bạch.',
    },
    showcase: {
      tagline: 'Ứng dụng tiêu biểu',
      title: 'Simple OTP',
      subtitle:
        'Simple OTP là ứng dụng xác thực 2 bước (2FA) hoạt động hoàn toàn ngoại tuyến. Ứng dụng hiện đã có mặt trên Apple App Store.',
      viewDetails: 'Xem chi tiết & Tính năng',
      getOnAppStore: 'Tải trên App Store',
      getOnGooglePlay: 'Google Play (Sắp có)',
      googlePlayComingSoon: 'Google Play (Sắp có)',
      viewOnGithub: 'Mã nguồn trên GitHub',
      releasedBadge: 'Đã phát hành',
      comingSoonBadge: 'Sắp ra mắt',
      inLabBadge: 'Đang phát triển',
      readySlotBadge: 'Dự án mới',
      slotTitleTemplate: 'Dự án tiếp theo',
      slotDescTemplate:
        'KD Labs đang phát triển ứng dụng mới. Vị trí này sẽ hiển thị sản phẩm khi ra mắt.',
      slotHint: 'Cấu hình dễ dàng qua tệp dữ liệu src/data/apps.ts',
      featuresHeading: 'Tính năng cốt lõi:',
      version: 'Phiên bản',
      downloads: 'Trạng thái',
      rating: 'Bảo mật',
      category: 'Danh mục',
    },
    philosophy: {
      tagline: 'Tiêu chuẩn Kỹ thuật',
      title: 'Tối giản, Thông minh & Bền vững',
      subtitle:
        'Tại KD Labs, mọi sản phẩm phần mềm và hệ thống hạ tầng đều được kiến tạo dựa trên 4 trụ cột kỹ thuật cốt lõi:',
      pillar1Title: 'Kiến trúc AI-Native',
      pillar1Desc:
        'Tích hợp mô hình ngôn ngữ lớn (LLM) và hệ thống Multi-Agent ngay từ tầng lõi để tự động hóa và tối ưu luồng xử lý.',
      pillar2Title: 'Hiệu năng & Mở rộng',
      pillar2Desc:
        'Thiết kế hệ thống phân tán, Web Edge SSR/SSG và hạ tầng Kubernetes (K8s) đảm bảo độ trễ thấp và khả năng chịu lỗi cao.',
      pillar3Title: 'Bảo mật Zero-Trust',
      pillar3Desc:
        'Ưu tiên xử lý cục bộ (Local-First), bảo vệ khóa mật mã bằng phần cứng chuyên dụng và tuyệt đối tôn trọng dữ liệu người dùng.',
      pillar4Title: 'Tinh thần Kanso & Mở',
      pillar4Desc:
        'Giao diện tinh gọn theo triết lý Zen Nhật Bản, kết hợp tài liệu nghiên cứu chuyên sâu và mã nguồn mở minh bạch.',
    },
    dataSafety: {
      tagline: 'Quyền riêng tư & Bảo mật',
      title: 'Kiến trúc Zero-Trust & Tôn trọng Dữ liệu',
      subtitle:
        'Dữ liệu của người dùng thuộc về chính họ. Các phần mềm và hệ thống của KD Labs được thiết kế theo nguyên tắc bảo mật từ trong cốt lõi (Security by Design).',
      point1Title: 'Không thu thập ẩn danh',
      point1Desc:
        'Không gắn SDK theo dõi hành vi, không quảng cáo và không khai thác dữ liệu người dùng.',
      point2Title: 'Đặc quyền Tối thiểu',
      point2Desc:
        'Mọi dịch vụ và ứng dụng chỉ yêu cầu quyền hạn tối thiểu cần thiết để vận hành tác vụ.',
      point3Title: 'Mã hóa Chuẩn Công nghiệp',
      point3Desc:
        'Ứng dụng chuẩn mật mã học hiện đại (AES-256-GCM, Enclave/HSM, Zero-Knowledge) trên toàn hệ sinh thái.',
      readPolicyCta: 'Đọc Chính sách quyền riêng tư đầy đủ',
    },
    contact: {
      tagline: 'Liên hệ & Hợp tác',
      title: 'Đồng hành cùng KD Labs',
      subtitle:
        'Bạn muốn trao đổi về kiến trúc AI-Native, thiết kế hệ thống phân tán, Kubernetes hay đóng góp cho các dự án mã nguồn mở? Hãy kết nối cùng chúng tôi.',
      emailLabel: 'Email liên hệ & hỗ trợ',
      developerIdLabel: 'Mã nhà phát triển Google Play',
      copySuccess: 'Đã sao chép vào bộ nhớ tạm!',
      faqTitle: 'Câu hỏi thường gặp',
      faq1Q: 'KD Labs tập trung vào những lĩnh vực công nghệ nào?',
      faq1A:
        'KD Labs là AI-Native Software & Research Lab tập trung vào phát triển hệ thống AI-Native (Multi-Agent/LLM), Web & Mobile hiệu năng cao, kiến trúc hệ thống phân tán, hạ tầng Cloud-Native Kubernetes (K8s) và mật mã học ứng dụng.',
      faq2Q: 'Triết lý thiết kế phần mềm của KD Labs là gì?',
      faq2A:
        'Chúng tôi kết hợp tư duy kỹ thuật AI-Native hiện đại với triết lý Kanso (Tối giản) của Nhật Bản và kiến trúc bảo mật Zero-Trust — tạo ra những phần mềm thông minh, tốc độ cao và tôn trọng quyền riêng tư.',
      faq3Q: 'Các dự án và nghiên cứu của KD Labs có mở cho cộng đồng không?',
      faq3A:
        'Có. KD Labs thường xuyên xuất bản các bài nghiên cứu kỹ thuật chuyên sâu trên Blog và phát hành mã nguồn mở theo giấy phép MIT trên GitHub để cộng đồng cùng tham khảo và kiểm chứng.',
    },
    footer: {
      description:
        'KD Labs là AI-Native Software & Research Lab chuyên nghiên cứu và phát triển phần mềm thông minh, hệ thống phân tán, hạ tầng Cloud-Native (K8s) và các ứng dụng đề cao quyền riêng tư.',
      quickLinks: 'Điều hướng',
      legal: 'Pháp lý',
      privacyPolicy: 'Chính sách quyền riêng tư',
      termsOfService: 'Điều khoản dịch vụ',
      googlePlayNotice:
        'Google Play và logo Google Play là thương hiệu của Google LLC. Apple, logo Apple và App Store là thương hiệu của Apple Inc.',
      allRightsReserved: 'Đã đăng ký bản quyền.',
    },
    appDetail: {
      backToApps: 'Quay lại danh sách dự án',
      downloadNow: 'Tải ứng dụng',
      downloadOnAppStore: 'Tải trên App Store',
      downloadOnGooglePlay: 'Google Play (Sắp có)',
      viewGithub: 'Mã nguồn mở trên GitHub',
      specifications: 'Thông số kỹ thuật',
      packageId: 'Mã gói (Package Name)',
      osRequirement: 'Yêu cầu hệ điều hành',
      size: 'Dung lượng tải',
      lastUpdate: 'Cập nhật lần cuối',
      screenshots: 'Hình ảnh giao diện thực tế',
      whatsNew: 'Có gì mới trong phiên bản này',
      dataProtection: 'Bảo vệ quyền riêng tư',
      dataProtectionText:
        'Ứng dụng này cam kết không chứa mã độc, không kết nối internet ngầm và tuân thủ tuyệt đối chuẩn Google Play Data Safety.',
    },
    privacyPage: {
      title: 'Chính Sách Quyền Riêng Tư',
      lastUpdated: 'Cập nhật lần cuối: Tháng 9, 2026',
      intro:
        'KD Labs cam kết bảo vệ tuyệt đối sự riêng tư của bạn. Chúng tôi phát triển các ứng dụng di động như Simple OTP với kiến trúc 100% ngoại tuyến (Zero-Network) và không bao giờ thu thập thông tin người dùng.',
      summaryBadge: 'Tuân thủ Google Play Developer Policy & Kiến trúc Không-Mạng',
      sections: [
        {
          heading: '1. Không thu thập bất kỳ dữ liệu nào',
          content:
            'Simple OTP và các ứng dụng của KD Labs KHÔNG thu thập tên, số điện thoại, địa chỉ IP, vị trí địa lý hay danh bạ của bạn. Ứng dụng không sử dụng bất kỳ SDK phân tích (như Firebase, Google Analytics) hay mã quảng cáo nào.',
        },
        {
          heading: '2. Hoạt động ngoại tuyến 100% (Zero-Network)',
          content:
            'Ứng dụng hoàn toàn không yêu cầu quyền Internet (android.permission.INTERNET). Toàn bộ khóa bảo mật và mã 2FA được mã hóa AES-256-GCM và lưu trữ độc quyền trong két phần cứng (Android Keystore / iOS Keychain) trên máy của bạn.',
        },
        {
          heading: '3. Quyền hạn thiết bị tối thiểu',
          content:
            'Camera chỉ được sử dụng để quét mã QR 2FA và hình ảnh được xử lý trực tiếp trên RAM, không bao giờ lưu trữ. Thư viện ảnh chỉ mở khi bạn chủ động chọn ảnh. Sinh trắc học (vân tay/khuôn mặt) được xử lý an toàn qua hệ điều hành.',
        },
        {
          heading: '4. Bản sao lưu được mã hóa mạnh mẽ',
          content:
            'Tệp sao lưu .simpleotp do bạn tạo ra được mã hóa bằng thuật toán PBKDF2 (100.000 vòng lặp) và AES-256-GCM với mật khẩu riêng của bạn.',
        },
        {
          heading: '5. Mã nguồn mở minh bạch & Liên hệ',
          content:
            'Mã nguồn của Simple OTP được công khai minh bạch tại github.com/kd-labs-io/simple-otp để cộng đồng tự do kiểm chứng. Mọi thắc mắc vui lòng gửi về support@kd.io.vn.',
        },
      ],
    },
    termsPage: {
      title: 'Điều Khoản Dịch Vụ',
      lastUpdated: 'Cập nhật lần cuối: Tháng 9, 2026',
      intro:
        'Chào mừng bạn đến với các ứng dụng của KD Labs. Khi cài đặt và sử dụng ứng dụng của chúng tôi từ Google Play hoặc kho mã nguồn mở, bạn đồng ý với các điều khoản dưới đây.',
      sections: [
        {
          heading: '1. Giấy phép mã nguồn mở & Sử dụng',
          content:
            'Simple OTP được phát hành theo giấy phép mã nguồn mở MIT, trao cho bạn quyền tự do sử dụng, tùy chỉnh và kiểm tra tính an toàn của phần mềm.',
        },
        {
          heading: '2. Trách nhiệm quản lý khóa bí mật',
          content:
            'Vì KD Labs không lưu trữ dữ liệu của bạn trên bất kỳ máy chủ nào, bạn chịu trách nhiệm bảo quản mật khẩu sao lưu và thiết bị cá nhân của mình.',
        },
        {
          heading: '3. Miễn trừ trách nhiệm',
          content:
            'Phần mềm được cung cấp "nguyên trạng" (as is) với cam kết cao nhất về tiêu chuẩn mật mã học chuẩn RFC 6238 và RFC 4226.',
        },
      ],
    },
    pressPage: {
      badge: 'Media & Press Kit',
      title: 'Bộ Tư Liệu Báo Chí & Thương Hiệu KD Labs',
      subtitle:
        'Thông cáo báo chí chính thức, hồ sơ AI-Native Software & Research Lab, hệ thống logo vector, bảng màu Zen và tài nguyên thương hiệu KD Labs.',
      downloadKitBtn: 'Tải Trọn Bộ Press Kit (.zip)',
      downloadKitSub: 'Bao gồm file SVG vector, PNG 2K, App Icon, thông cáo & hướng dẫn sử dụng',
      backToHome: 'Quay về trang chủ',
      story: {
        tagline: 'Triết lý & Câu chuyện',
        title: 'Vòng tròn Ensō & Tinh thần Khởi Đầu',
        ensoHeading: 'Biểu tượng Vòng tròn Ensō (Thiền họa)',
        ensoText1:
          'Trong Thiền học Á Đông, Ensō là vòng tròn vẽ bằng một nét mực dứt khoát không ngắt quãng. Vòng tròn mở, không khép kín hoàn toàn thể hiện tinh thần Kanso (Giản dị), sự khiêm tốn và khả năng đón nhận sự tiến hóa công nghệ không ngừng.',
        ensoText2:
          'Hai chấm tròn màu cam ấm bên trong biểu trưng cho "Knowledge & Data" (Tri thức thông minh & Dữ liệu cốt lõi) — hai giá trị nền tảng được kết nối và bảo vệ an toàn bên trong vòng cung Ensō.',
        nameHeading: 'Ý nghĩa tên gọi "KD Labs"',
        nameText1:
          'Chữ "KD" là sự hòa quyện giữa tinh thần Kanso (Tối giản trong tiếng Nhật) và Khởi Đầu (Sự sáng tạo không ngừng trong tiếng Việt). Dưới góc nhìn kỹ thuật hệ thống, KD còn đại diện cho "Knowledge & Data" — tri thức AI và dữ liệu được kiến tạo với độ tin cậy cao nhất.',
        nameText2:
          '"Labs" khẳng định định vị là một AI-Native Software & Research Lab, nơi chúng tôi liên tục nghiên cứu, thử nghiệm và xây dựng từ các hệ thống phần mềm thông minh, hạ tầng phân tán Cloud-Native đến các sản phẩm bảo mật quyền riêng tư.',
        values: [
          { title: 'AI-Native by Design', desc: 'Tích hợp trí tuệ nhân tạo và tự động hóa sâu vào kiến trúc phần mềm.' },
          { title: 'Kanso (Tối giản)', desc: 'Loại bỏ sự phức tạp thừa thãi, tập trung vào hiệu năng và cốt lõi trải nghiệm.' },
          { title: 'Zero-Trust & Privacy', desc: 'Bảo vệ dữ liệu bằng mật mã học hiện đại và kiến trúc an toàn từ trong lõi.' },
          { title: 'Open R&D (Nghiên cứu mở)', desc: 'Chia sẻ tri thức kỹ thuật chuyên sâu và mã nguồn mở minh bạch.' },
        ],
      },
      logos: {
        tagline: 'Hệ thống Logo',
        title: 'Bộ Logo & Biểu tượng Vector',
        subtitle:
          'Được thiết kế tối ưu với định dạng SVG vector sắc nét vô hạn và PNG độ phân giải cao cho mọi kích thước hiển thị.',
        downloadSvg: 'Tải SVG',
        downloadPng: 'Tải PNG',
        copySvg: 'Sao chép SVG',
        copied: 'Đã sao chép mã SVG!',
        items: [
          {
            id: 'horizontal-dark',
            name: 'Logo Ngang (Nền Sáng)',
            desc: 'Dành cho nền trắng hoặc giấy Washi. Chữ màu mực Sumi đậm kết hợp vòng tròn Ensō cam.',
            previewBg: 'light',
            svgUrl: '/assets/press/kd-labs-logo-horizontal-dark.svg',
            pngUrl: '/assets/press/kd-labs-logo-horizontal-dark.png',
          },
          {
            id: 'horizontal-light',
            name: 'Logo Ngang (Nền Tối)',
            desc: 'Dành cho nền đen Sumi hoặc dark mode. Chữ màu sáng thanh thoát với độ tương phản cao.',
            previewBg: 'dark',
            svgUrl: '/assets/press/kd-labs-logo-horizontal-light.svg',
            pngUrl: '/assets/press/kd-labs-logo-horizontal-light.png',
          },
          {
            id: 'icon-badge',
            name: 'Icon Badge (Nền Tối)',
            desc: 'Biểu tượng ứng dụng di động bo góc tròn chuẩn squircle trên nền đen Sumi.',
            previewBg: 'transparent',
            svgUrl: '/assets/press/kd-labs-icon.svg',
            pngUrl: '/assets/press/kd-labs-icon.png',
          },
          {
            id: 'icon-badge-light',
            name: 'Icon Badge (Nền Sáng)',
            desc: 'Biểu tượng ứng dụng di động bo góc tròn squircle trên nền giấy Washi ấm áp viền cam nhạt.',
            previewBg: 'transparent',
            svgUrl: '/assets/press/kd-labs-icon-light.svg',
            pngUrl: '/assets/press/kd-labs-icon-light.png',
          },
          {
            id: 'symbol-transparent',
            name: 'Ensō Mark (Nền Trong Suốt)',
            desc: 'Biểu tượng vòng tròn Ensō độc lập nền trong suốt với 2 chấm tròn Key & Data, linh hoạt ứng dụng trên mọi chất liệu.',
            previewBg: 'transparent',
            svgUrl: '/assets/press/kd-labs-symbol-transparent.svg',
            pngUrl: '/assets/press/kd-labs-symbol-transparent.png',
          },
          {
            id: 'monochrome-black',
            name: 'Đơn Sắc Đen (In ấn)',
            desc: 'Dành cho tài liệu đơn sắc, in ấn văn bản hoặc vật phẩm khắc laser.',
            previewBg: 'light',
            svgUrl: '/assets/press/kd-labs-logo-monochrome-dark.svg',
            pngUrl: '/assets/press/kd-labs-logo-monochrome-dark.png',
          },
          {
            id: 'monochrome-white',
            name: 'Đơn Sắc Trắng (Âm bản)',
            desc: 'Dành cho in áo, khắc laser trên bề mặt tối màu hoặc màn hình đơn sắc.',
            previewBg: 'dark',
            svgUrl: '/assets/press/kd-labs-logo-monochrome-white.svg',
            pngUrl: '/assets/press/kd-labs-logo-monochrome-white.png',
          },
        ],
      },
      colors: {
        tagline: 'Hệ màu thương hiệu',
        title: 'Bảng màu Washi & Sumi Zen',
        subtitle:
          'Hệ màu cân bằng giữa sự tĩnh lặng của giấy thủ công Washi, chiều sâu của mực Sumi và sức sống của ngọn lửa Zen Orange.',
        clickToCopy: 'Nhấp chuột để sao chép',
        copied: 'Đã sao chép mã màu!',
        colors: [
          {
            name: 'Zen Orange',
            role: 'Màu nhận diện chính (Primary Accent)',
            hex: '#EA580C',
            rgb: 'rgb(234, 88, 12)',
            textColor: '#FFFFFF',
            bordered: false,
          },
          {
            name: 'Zen Orange Glow',
            role: 'Màu điểm nhấn Dark Theme',
            hex: '#FB713B',
            rgb: 'rgb(251, 113, 59)',
            textColor: '#000000',
            bordered: false,
          },
          {
            name: 'Washi Background',
            role: 'Màu nền giấy thủ công (Light BG)',
            hex: '#FBF9F5',
            rgb: 'rgb(251, 249, 245)',
            textColor: '#1C1917',
            bordered: true,
          },
          {
            name: 'Washi Card',
            role: 'Khối nội dung sáng (Light Card)',
            hex: '#FFFFFF',
            rgb: 'rgb(255, 255, 255)',
            textColor: '#1C1917',
            bordered: true,
          },
          {
            name: 'Sumi Background',
            role: 'Màu nền mực mài (Dark BG)',
            hex: '#0F0E0D',
            rgb: 'rgb(15, 14, 13)',
            textColor: '#F7F5F0',
            bordered: false,
          },
          {
            name: 'Sumi Card',
            role: 'Khối nội dung tối (Dark Card)',
            hex: '#181614',
            rgb: 'rgb(24, 22, 20)',
            textColor: '#F7F5F0',
            bordered: false,
          },
          {
            name: 'Sumi Slate',
            role: 'Văn bản tương phản cao',
            hex: '#1C1917',
            rgb: 'rgb(28, 25, 23)',
            textColor: '#F7F5F0',
            bordered: false,
          },
          {
            name: 'Muted Stone',
            role: 'Đường viền và phân cách',
            hex: '#E8E2D8',
            rgb: 'rgb(232, 226, 216)',
            textColor: '#1C1917',
            bordered: true,
          },
        ],
      },
      typography: {
        tagline: 'Kiểu chữ',
        title: 'Plus Jakarta Sans',
        subtitle:
          'Họ font chữ sans-serif hình học hiện đại, các đường cong phóng khoáng mang lại cảm giác thân thiện, rõ ràng và thanh thoát.',
        specimenUrl: 'https://fonts.google.com/specimen/Plus+Jakarta+Sans',
        specimenBtn: 'Mở Google Fonts',
        weights: [
          { name: 'Light 300', class: 'font-light', sample: 'KD Labs - Tối giản trong thiết kế, an toàn trong từng thao tác.' },
          { name: 'Regular 400', class: 'font-normal', sample: 'KD Labs - Tối giản trong thiết kế, an toàn trong từng thao tác.' },
          { name: 'SemiBold 600', class: 'font-semibold', sample: 'KD Labs - Tối giản trong thiết kế, an toàn trong từng thao tác.' },
          { name: 'Bold 700', class: 'font-bold', sample: 'KD Labs - Tối giản trong thiết kế, an toàn trong từng thao tác.' },
        ],
      },
      appIcons: {
        tagline: 'Biểu tượng ứng dụng',
        title: 'Hệ Thống Icon Ứng Dụng Chính Thức',
        subtitle:
          'Biểu tượng ứng dụng di động được thiết kế nổi khối tinh tế, chuẩn hóa theo quy chuẩn Google Play Store (512x512px).',
        downloadPng: 'Tải PNG (512x512)',
        items: [
          {
            name: 'Simple OTP',
            badge: 'Flagship App',
            desc: 'Biểu tượng ứng dụng Simple OTP với sắc cam Zen ấm áp, thiết kế 3D nổi khối mềm mại trên nền squircle chuẩn Google Play Store.',
            resolution: '512 x 512 px',
            format: 'PNG (Nền trong suốt)',
            pngUrl: '/assets/press/simple-otp-icon.png',
          },
        ],
      },
      guidelines: {
        tagline: 'Quy chuẩn sử dụng',
        title: 'Điều Nên Làm & Cần Tránh',
        subtitle:
          'Nhằm đảm bảo sự nhất quán và tính nhận diện của KD Labs trên mọi ấn phẩm truyền thông, vui lòng tuân thủ các quy tắc dưới đây.',
        clearSpaceTitle: 'Khoảng trống an toàn (Clear Space)',
        clearSpaceDesc:
          'Luôn giữ khoảng cách an toàn xung quanh logo tối thiểu bằng chiều cao của chữ "K" trong logo. Không để bất kỳ chữ, hình khối hoặc đường kẻ nào xâm phạm vào vùng an toàn này.',
        dosTitle: 'Điều nên làm (Do\'s)',
        dos: [
          'Sử dụng các tệp vector SVG chính thức để đảm bảo độ sắc nét tốt nhất.',
          'Dùng phiên bản logo sáng trên nền tối và phiên bản logo tối trên nền sáng.',
          'Giữ nguyên tỉ lệ kích thước gốc 100% khi phóng to thu nhỏ.',
          'Duy trì khoảng trống an toàn xung quanh logo trên tất cả bố cục thiết kế.',
        ],
        dontsTitle: 'Điều cần tránh (Don\'ts)',
        donts: [
          'Không kéo dãn, bóp méo hoặc thay đổi tỉ lệ ngang/dọc của logo.',
          'Không xoay nghiêng hoặc đảo ngược hướng mở của vòng tròn Ensō.',
          'Không thay đổi màu cam thương hiệu bằng các dải màu không quy định.',
          'Không áp dụng hiệu ứng bóng đổ nặng nề, viền sáng lòe loẹt hoặc hoa văn rườm rà.',
        ],
      },
      boilerplate: {
        tagline: 'Dành cho báo chí',
        title: 'Press Boilerplate & Liên Hệ Truyền Thông',
        subtitle:
          'Đoạn giới thiệu chuẩn mực sẵn sàng sao chép cho các bài viết báo chí, tin tức công nghệ và đối tác.',
        copyBtn: 'Sao chép Boilerplate',
        copied: 'Đã sao chép đoạn giới thiệu!',
        text: 'KD Labs là một AI-Native Software & Research Lab tại Việt Nam được sáng lập bởi Bùi Khương Duy, chuyên nghiên cứu và phát triển các hệ thống phần mềm tích hợp AI Agent, kiến trúc hệ thống phân tán, hạ tầng Cloud-Native Kubernetes (K8s) và các ứng dụng đề cao quyền riêng tư. Kết hợp tư duy kỹ thuật hiện đại với triết lý tối giản Kanso Nhật Bản và chuẩn mực bảo mật Zero-Trust, KD Labs hướng tới việc kiến tạo những giải pháp công nghệ thông minh, bền vững và đáng tin cậy trên toàn cầu.',
        contactTitle: 'Bộ phận Truyền thông & Báo chí',
        contactDesc:
          'Nếu bạn là phóng viên, blogger công nghệ hoặc đối tác cần hình ảnh độ phân giải cao hoặc phỏng vấn nhà sáng lập:',
        contactEmail: 'contact@kd.io.vn',
      },
    },
    blogPage: {
      badge: 'Góc Chia Sẻ & Nghiên Cứu',
      title: 'KD Labs Blog',
      subtitle:
        'Các bài viết nghiên cứu chuyên sâu về kỹ thuật phần mềm AI-Native, kiến trúc hệ thống phân tán, hạ tầng Cloud-Native Kubernetes (K8s) và mật mã học hiện đại.',
      readMore: 'Đọc bài viết',
      readingTime: 'Thời gian đọc',
      publishedOn: 'Ngày đăng',
      backToBlog: 'Quay lại danh sách bài viết',
      tableOfContents: 'Mục lục bài viết',
      share: 'Chia sẻ',
      shareTwitter: 'Chia sẻ trên X (Twitter)',
      shareFacebook: 'Chia sẻ trên Facebook',
      copyLink: 'Sao chép liên kết',
      copied: 'Đã sao chép liên kết bài viết!',
      tagAll: 'Tất cả chủ đề',
      noPosts: 'Chưa có bài viết nào.',
      author: 'Tác giả',
    },
  },
  en: {
    nav: {
      apps: 'Projects',
      philosophy: 'Philosophy',
      blog: 'Blog',
      press: 'Press Kit',
      privacy: 'Privacy Policy',
      support: 'Support',
      googlePlay: 'Google Play Store',
      themeToggle: 'Toggle Theme',
      language: 'Language',
    },
    hero: {
      badge: 'AI-Native Labs',
      badgeSubtitle: 'Software & Research Lab',
      titleLine1: 'AI-Native Engineering.',
      titleLine2: 'From Concept to Core Systems.',
      description:
        'KD Labs is an AI-Native Software & Research Lab building intelligent multi-agent software, distributed systems, Cloud-Native Kubernetes infrastructure, and privacy-first applications.',
      ctaAppStore: 'Download on App Store',
      ctaGooglePlay: 'Google Play (Coming Soon)',
      ctaBrowseApps: 'Explore Ecosystem',
      statsOffline: 'AI-Native Core',
      statsSecurity: 'Zero-Trust & AES-256',
      statsAdFree: 'Cloud-Native K8s',
      statsOpenSource: 'Open Source MIT',
    },
    statsBar: {
      item1Title: 'AI-Native Architecture',
      item1Desc: 'Multi-Agent workflows, LLM systems, and intelligent automation.',
      item2Title: 'High-Scale Systems',
      item2Desc: 'Distributed architecture, Cloud-Native & Kubernetes (K8s).',
      item3Title: 'Zero-Trust Security',
      item3Desc: 'Hardware-backed cryptography and strict data privacy.',
      item4Title: 'Open Research (R&D)',
      item4Desc: 'Deep technical publications and transparent open-source code.',
    },
    showcase: {
      tagline: 'Featured Application',
      title: 'Simple OTP',
      subtitle:
        'Simple OTP is a 100% offline two-factor authenticator. The app is now available on the Apple App Store.',
      viewDetails: 'View Details & Features',
      getOnAppStore: 'Download on App Store',
      getOnGooglePlay: 'Google Play (Coming Soon)',
      googlePlayComingSoon: 'Google Play (Coming Soon)',
      viewOnGithub: 'Source on GitHub',
      releasedBadge: 'Released',
      comingSoonBadge: 'Coming Soon',
      inLabBadge: 'In Development',
      readySlotBadge: 'New Project',
      slotTitleTemplate: 'Next Project',
      slotDescTemplate:
        'KD Labs is developing a new application. This card will display the product upon release.',
      slotHint: 'Easily customize through data file src/data/apps.ts',
      featuresHeading: 'Core Security Pillars:',
      version: 'Version',
      downloads: 'Status',
      rating: 'Security',
      category: 'Category',
    },
    philosophy: {
      tagline: 'Engineering Principles',
      title: 'Minimalist, Intelligent & Resilient',
      subtitle:
        'At KD Labs, every software product and infrastructure platform is engineered around 4 foundational pillars:',
      pillar1Title: 'AI-Native by Design',
      pillar1Desc:
        'Integrating Large Language Models (LLMs) and Multi-Agent workflows at the core layer to automate and accelerate complex systems.',
      pillar2Title: 'High-Scale & Resilient',
      pillar2Desc:
        'Architecting distributed systems, Edge SSR/SSG web platforms, and Kubernetes (K8s) clusters for sub-millisecond responsiveness and fault tolerance.',
      pillar3Title: 'Zero-Trust Security',
      pillar3Desc:
        'Prioritizing local-first execution, hardware enclave cryptography, and uncompromising respect for user data sovereignty.',
      pillar4Title: 'Kanso & Open R&D',
      pillar4Desc:
        'Combining Japanese Zen minimalism in interface craft with deep technical publications and auditable MIT open-source software.',
    },
    dataSafety: {
      tagline: 'Privacy & Security Standards',
      title: 'Zero-Trust & Privacy-First Architecture',
      subtitle:
        'Your data belongs exclusively to you. All KD Labs software systems and client applications are engineered with Security and Privacy by Design.',
      point1Title: 'Zero Telemetry & Tracking',
      point1Desc:
        'No behavioral tracking SDKs, no advertisements, and zero monetization of user data.',
      point2Title: 'Least-Privilege Access',
      point2Desc:
        'Every system service and client application operates under strict minimal permission boundaries.',
      point3Title: 'Hardware & Modern Crypto',
      point3Desc:
        'Built on industry-standard cryptography (AES-256-GCM, Secure Enclave/HSM, and Zero-Knowledge architectures).',
      readPolicyCta: 'Read Full Privacy Policy',
    },
    contact: {
      tagline: 'Get in Touch & Collaborate',
      title: 'Connect with KD Labs',
      subtitle:
        'Interested in discussing AI-Native engineering, distributed system architecture, Kubernetes infrastructure, or open-source collaboration? We are always glad to connect.',
      emailLabel: 'Official Contact & Support Email',
      developerIdLabel: 'Google Play Developer ID',
      copySuccess: 'Copied to clipboard!',
      faqTitle: 'Frequently Asked Questions',
      faq1Q: 'What technology domains does KD Labs focus on?',
      faq1A:
        'KD Labs is an AI-Native Software & Research Lab specializing in AI-Native systems (Multi-Agent & LLMs), high-performance Web & Mobile engineering, distributed systems architecture, Cloud-Native Kubernetes (K8s), and applied cryptography.',
      faq2Q: 'What is the core engineering philosophy at KD Labs?',
      faq2A:
        'We unite AI-Native software engineering with Japanese Kanso (Simplicity) aesthetics and Zero-Trust security — building systems that are intelligent, resilient, and privacy-respecting.',
      faq3Q: 'Are KD Labs research and software projects open to the community?',
      faq3A:
        'Yes. KD Labs publishes in-depth engineering research on our Blog and releases open-source software under the MIT license on GitHub for community inspection and collaboration.',
    },
    footer: {
      description:
        'KD Labs is an AI-Native Software & Research Lab building intelligent software systems, distributed architectures, Cloud-Native (K8s) infrastructure, and privacy-first applications.',
      quickLinks: 'Navigation',
      legal: 'Legal',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      googlePlayNotice:
        'Google Play and the Google Play logo are trademarks of Google LLC. Apple, the Apple logo and App Store are trademarks of Apple Inc.',
      allRightsReserved: 'All rights reserved.',
    },
    appDetail: {
      backToApps: 'Back to Projects',
      downloadNow: 'Download App',
      downloadOnAppStore: 'Download on App Store',
      downloadOnGooglePlay: 'Google Play (Coming Soon)',
      viewGithub: 'Open Source on GitHub',
      specifications: 'Technical Specifications',
      packageId: 'Package Name',
      osRequirement: 'OS Requirement',
      size: 'Download Size',
      lastUpdate: 'Last Updated',
      screenshots: 'Official App Screenshots & Banners',
      whatsNew: "What's New in this Version",
      dataProtection: 'Privacy & Data Protection',
      dataProtectionText:
        'This application guarantees zero spyware, zero network tracking, and 100% compliance with Google Play Data Safety.',
    },
    privacyPage: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: September 2026',
      intro:
        'KD Labs is committed to protecting your privacy. We engineer mobile applications like Simple OTP with a strict Zero-Network architecture that never collects or transmits user data.',
      summaryBadge: 'Google Play Developer Policy & Zero-Network Compliant',
      sections: [
        {
          heading: '1. Zero Data Collection',
          content:
            'Simple OTP and KD Labs apps DO NOT collect your name, phone number, IP address, geolocation, or contacts. We include zero tracking or telemetry SDKs (no Firebase, no Google Analytics).',
        },
        {
          heading: '2. 100% Offline Architecture',
          content:
            'The app operates with zero network permissions (no android.permission.INTERNET). All secret keys and OTP codes are encrypted using AES-256-GCM and kept exclusively inside your hardware security enclaves.',
        },
        {
          heading: '3. Bare Minimum Permissions',
          content:
            'Camera permission is solely used for live QR code scanning, processed entirely in local memory. Biometric authentication is managed natively by OS LocalAuthentication.',
        },
        {
          heading: '4. Strong Password-Protected Backups',
          content:
            'Exported .simpleotp backup files are fortified with PBKDF2 (100,000 iterations) and authenticated AES-256-GCM encryption using your chosen passphrase.',
        },
        {
          heading: '5. Open Source Auditability & Contact',
          content:
            'Simple OTP is free open-source software auditable at github.com/kd-labs-io/simple-otp. For support or privacy questions, reach us at support@kd.io.vn.',
        },
      ],
    },
    termsPage: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: September 2026',
      intro:
        'Welcome to KD Labs software. By installing or utilizing our applications downloaded from the Google Play Store or open-source repositories, you agree to these terms.',
      sections: [
        {
          heading: '1. Open Source License & Usage',
          content:
            'Simple OTP is distributed under the MIT license, giving you the freedom to use, modify, and audit the application for personal and commercial needs.',
        },
        {
          heading: '2. Responsibility for Master Passwords',
          content:
            'Because KD Labs stores zero data on cloud servers, you are solely responsible for safeguarding your encrypted backup passphrases and physical device access.',
        },
        {
          heading: '3. Disclaimer of Warranties',
          content:
            'The software is provided "as is" with the highest commitment to international cryptographic standards (RFC 6238 and RFC 4226).',
        },
      ],
    },
    pressPage: {
      badge: 'Media & Press Kit',
      title: 'KD Labs Official Press Kit & Brand Assets',
      subtitle:
        'Official press statement, AI-Native Software & Research Lab profile, vector logo suites, Zen color system, and brand guidelines.',
      downloadKitBtn: 'Download Press Kit (.zip)',
      downloadKitSub: 'Includes vector SVGs, 2K PNGs, official app icon, boilerplate & guidelines',
      backToHome: 'Back to Home',
      story: {
        tagline: 'Philosophy & Origins',
        title: 'The Ensō Circle & Spirit of Beginnings',
        ensoHeading: 'The Ensō Symbolism (Zen Brushstroke)',
        ensoText1:
          'In Zen philosophy, an Ensō is a sacred circle drawn in a single, fluid brushstroke. The unclosed, imperfect ring symbolizes Kanso (Simplicity), humility, and an infinite capacity for technological evolution.',
        ensoText2:
          'The two vibrant warm orange dots inside symbolize "Knowledge & Data" — intelligent systems and core user data securely connected and protected within the open Ensō arc.',
        nameHeading: 'The Meaning of "KD Labs"',
        nameText1:
          'The letters "KD" unite the Japanese concept of Kanso (Simplicity) with "Khởi Đầu" (Vietnamese for fresh beginnings). In systems engineering, KD also signifies "Knowledge & Data" — AI intelligence and critical data engineered with high integrity.',
        nameText2:
          '"Labs" defines our identity as an AI-Native Software & Research Lab — continuously researching, prototyping, and building across intelligent multi-agent software, distributed Cloud-Native infrastructure, and privacy-first applications.',
        values: [
          { title: 'AI-Native by Design', desc: 'Embedding intelligent multi-agent workflows deeply into software architecture.' },
          { title: 'Kanso (Simplicity)', desc: 'Stripping away unnecessary complexity to maximize performance and clarity.' },
          { title: 'Zero-Trust & Privacy', desc: 'Protecting data with modern cryptography and security-first architecture.' },
          { title: 'Open R&D', desc: 'Sharing deep technical research and auditable open-source engineering.' },
        ],
      },
      logos: {
        tagline: 'Logo Architecture',
        title: 'Official Vector Marks & Suites',
        subtitle:
          'Engineered for infinite scalability as vector SVGs and pixel-perfect high-resolution PNGs across light and dark displays.',
        downloadSvg: 'Download SVG',
        downloadPng: 'Download PNG',
        copySvg: 'Copy SVG Code',
        copied: 'SVG code copied to clipboard!',
        items: [
          {
            id: 'horizontal-dark',
            name: 'Horizontal Logo (Light Surface)',
            desc: 'Tailored for pure white or Washi backgrounds. Sumi ink lettering with signature Zen Orange ring.',
            previewBg: 'light',
            svgUrl: '/assets/press/kd-labs-logo-horizontal-dark.svg',
            pngUrl: '/assets/press/kd-labs-logo-horizontal-dark.png',
          },
          {
            id: 'horizontal-light',
            name: 'Horizontal Logo (Dark Surface)',
            desc: 'Tailored for Sumi black surfaces and dark mode. Clean high-contrast typography.',
            previewBg: 'dark',
            svgUrl: '/assets/press/kd-labs-logo-horizontal-light.svg',
            pngUrl: '/assets/press/kd-labs-logo-horizontal-light.png',
          },
          {
            id: 'icon-badge',
            name: 'Application Icon Badge (Dark)',
            desc: 'Rounded squircle application badge on deep Sumi black backdrop.',
            previewBg: 'transparent',
            svgUrl: '/assets/press/kd-labs-icon.svg',
            pngUrl: '/assets/press/kd-labs-icon.png',
          },
          {
            id: 'icon-badge-light',
            name: 'Application Icon Badge (Light)',
            desc: 'Rounded squircle application badge on warm Washi paper backdrop with subtle orange border.',
            previewBg: 'transparent',
            svgUrl: '/assets/press/kd-labs-icon-light.svg',
            pngUrl: '/assets/press/kd-labs-icon-light.png',
          },
          {
            id: 'symbol-transparent',
            name: 'Ensō Mark (Transparent)',
            desc: 'Standalone Ensō brush circle with dual Key & Data dots on transparent background for versatile placement.',
            previewBg: 'transparent',
            svgUrl: '/assets/press/kd-labs-symbol-transparent.svg',
            pngUrl: '/assets/press/kd-labs-symbol-transparent.png',
          },
          {
            id: 'monochrome-black',
            name: 'Monochrome Black (Print)',
            desc: 'For single-color grayscale print documents, paperwork, and laser engravings.',
            previewBg: 'light',
            svgUrl: '/assets/press/kd-labs-logo-monochrome-dark.svg',
            pngUrl: '/assets/press/kd-labs-logo-monochrome-dark.png',
          },
          {
            id: 'monochrome-white',
            name: 'Monochrome White (Inverted)',
            desc: 'For laser engraving on dark anodized metal, merchandise, and single-tone dark screens.',
            previewBg: 'dark',
            svgUrl: '/assets/press/kd-labs-logo-monochrome-white.svg',
            pngUrl: '/assets/press/kd-labs-logo-monochrome-white.png',
          },
        ],
      },
      colors: {
        tagline: 'Brand Color System',
        title: 'Zen Washi & Sumi Palette',
        subtitle:
          'Harmonizing the gentle texture of handmade Washi paper, deep charcoal Sumi ink, and the dawn warmth of Zen Orange.',
        clickToCopy: 'Click to copy color code',
        copied: 'Color code copied!',
        colors: [
          {
            name: 'Zen Orange',
            role: 'Primary Signature Accent',
            hex: '#EA580C',
            rgb: 'rgb(234, 88, 12)',
            textColor: '#FFFFFF',
            bordered: false,
          },
          {
            name: 'Zen Orange Glow',
            role: 'Dark Theme Glow Accent',
            hex: '#FB713B',
            rgb: 'rgb(251, 113, 59)',
            textColor: '#000000',
            bordered: false,
          },
          {
            name: 'Washi Background',
            role: 'Handmade Paper (Light BG)',
            hex: '#FBF9F5',
            rgb: 'rgb(251, 249, 245)',
            textColor: '#1C1917',
            bordered: true,
          },
          {
            name: 'Washi Card',
            role: 'Light Container Surface',
            hex: '#FFFFFF',
            rgb: 'rgb(255, 255, 255)',
            textColor: '#1C1917',
            bordered: true,
          },
          {
            name: 'Sumi Background',
            role: 'Charcoal Ink (Dark BG)',
            hex: '#0F0E0D',
            rgb: 'rgb(15, 14, 13)',
            textColor: '#F7F5F0',
            bordered: false,
          },
          {
            name: 'Sumi Card',
            role: 'Dark Container Surface',
            hex: '#181614',
            rgb: 'rgb(24, 22, 20)',
            textColor: '#F7F5F0',
            bordered: false,
          },
          {
            name: 'Sumi Slate',
            role: 'High Contrast Ink Typography',
            hex: '#1C1917',
            rgb: 'rgb(28, 25, 23)',
            textColor: '#F7F5F0',
            bordered: false,
          },
          {
            name: 'Muted Stone',
            role: 'Borders & Subtle Dividers',
            hex: '#E8E2D8',
            rgb: 'rgb(232, 226, 216)',
            textColor: '#1C1917',
            bordered: true,
          },
        ],
      },
      typography: {
        tagline: 'Typography',
        title: 'Plus Jakarta Sans',
        subtitle:
          'A geometric sans-serif typeface crafted with generous proportions and crisp clarity, delivering effortless reading comfort.',
        specimenUrl: 'https://fonts.google.com/specimen/Plus+Jakarta+Sans',
        specimenBtn: 'Open Google Fonts',
        weights: [
          { name: 'Light 300', class: 'font-light', sample: 'KD Labs - Simplicity in design, security in every touch.' },
          { name: 'Regular 400', class: 'font-normal', sample: 'KD Labs - Simplicity in design, security in every touch.' },
          { name: 'SemiBold 600', class: 'font-semibold', sample: 'KD Labs - Simplicity in design, security in every touch.' },
          { name: 'Bold 700 / 800', class: 'font-bold', sample: 'KD Labs - Simplicity in design, security in every touch.' },
        ],
      },
      appIcons: {
        tagline: 'Application Icons',
        title: 'Official Production App Icons',
        subtitle:
          'Mobile application icons rendered to Google Play Store specifications (512x512px, adaptive squircle).',
        downloadPng: 'Download PNG (512x512)',
        items: [
          {
            name: 'Simple OTP',
            badge: 'Flagship App',
            desc: 'Official app icon for Simple OTP featuring warm Zen Orange depth and dimensional frosted squircle geometry.',
            resolution: '512 x 512 px',
            format: 'PNG (Transparent background)',
            pngUrl: '/assets/press/simple-otp-icon.png',
          },
        ],
      },
      guidelines: {
        tagline: 'Brand Protection',
        title: 'Do\'s and Don\'ts Guidelines',
        subtitle:
          'To preserve the elegance and clarity of the KD Labs identity across all media, please adhere to these guidelines.',
        clearSpaceTitle: 'Clear Space Requirement',
        clearSpaceDesc:
          'Always preserve an exclusion zone around the logo equal to at least the height of the letter "K" in the wordmark. No text, graphic, or trim line should encroach on this perimeter.',
        dosTitle: 'Do\'s (Recommended Practices)',
        dos: [
          'Use official vector SVG files whenever possible for maximum sharpness.',
          'Use light logo variants on dark surfaces, and dark variants on light surfaces.',
          'Maintain original aspect ratio and geometry without stretching or warping.',
          'Preserve the clear space zone on all marketing assets and press covers.',
        ],
        dontsTitle: 'Don\'ts (Prohibited Uses)',
        donts: [
          'Do not stretch, distort, or alter the geometric proportions.',
          'Do not rotate or invert the Ensō circle (the brush opening must stay lower-right).',
          'Do not substitute the signature Zen Orange with arbitrary non-brand hues.',
          'Do not add heavy drop shadows, outer glow strokes, or place over busy backgrounds.',
        ],
      },
      boilerplate: {
        tagline: 'Press & Media Kit',
        title: 'Press Boilerplate & Media Inquiries',
        subtitle:
          'Standardized overview text ready for press releases, technological media, and editorial coverage.',
        copyBtn: 'Copy Boilerplate',
        copied: 'Boilerplate copied to clipboard!',
        text: 'KD Labs is an AI-Native Software & Research Lab founded in Vietnam by Bui Khuong Duy, specializing in intelligent multi-agent software, distributed systems architecture, Cloud-Native Kubernetes (K8s) infrastructure, and privacy-first applications. Uniting modern AI-Native engineering with Japanese Kanso (Simplicity) aesthetics and Zero-Trust cryptography, KD Labs engineers resilient, high-performance technology for global users.',
        contactTitle: 'Media & Communications Contact',
        contactDesc:
          'For press kits, editorial inquiries, or founder interviews, please reach out to our communications inbox:',
        contactEmail: 'contact@kd.io.vn',
      },
    },
    blogPage: {
      badge: 'Research & Engineering',
      title: 'KD Labs Blog',
      subtitle:
        'Deep-dive technical research on AI-Native software engineering, distributed systems architecture, Cloud-Native Kubernetes (K8s), and modern cryptography.',
      readMore: 'Read Article',
      readingTime: 'Reading time',
      publishedOn: 'Published on',
      backToBlog: 'Back to all articles',
      tableOfContents: 'Table of Contents',
      share: 'Share',
      shareTwitter: 'Share on X (Twitter)',
      shareFacebook: 'Share on Facebook',
      copyLink: 'Copy link',
      copied: 'Article link copied to clipboard!',
      tagAll: 'All Topics',
      noPosts: 'No articles published yet.',
      author: 'Author',
    },
  },
};

export function getTranslations(lang: Locale) {
  return translations[lang] || translations.vi;
}

/**
 * Returns the localized URL path for a given pathname and target locale.
 * Default locale ('vi') is served directly at the root (no prefix).
 * English locale ('en') is prefixed with '/en'.
 */
export function getLocalizedPath(pathname: string, targetLang: Locale): string {
  let cleanPath = pathname.split('?')[0].split('#')[0];

  if (cleanPath.startsWith('/en/')) {
    cleanPath = cleanPath.slice(3);
  } else if (cleanPath === '/en') {
    cleanPath = '/';
  } else if (cleanPath.startsWith('/vi/')) {
    cleanPath = cleanPath.slice(3);
  } else if (cleanPath === '/vi') {
    cleanPath = '/';
  }

  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  if (!cleanPath.endsWith('/')) {
    cleanPath = cleanPath + '/';
  }

  if (targetLang === 'vi') {
    return cleanPath;
  } else {
    if (cleanPath === '/') {
      return '/en/';
    }
    return `/en${cleanPath}`;
  }
}
