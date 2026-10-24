import type { Locale } from './i18n';

export interface PrivacySection {
  id: string;
  number: string;
  title: string;
  badge?: string;
  content: string[];
  subsections?: {
    subId?: string;
    title: string;
    content: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
    callout?: {
      type: 'info' | 'shield' | 'alert';
      title: string;
      text: string;
    };
  }[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  callout?: {
    type: 'info' | 'shield' | 'alert';
    title: string;
    text: string;
  };
}

export interface PrivacyData {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  intro: string;
  backToHome: string;
  tableOfContentsTitle: string;
  readingTime: string;
  highlightsTitle: string;
  highlightsSubtitle: string;
  highlights: {
    icon: string;
    title: string;
    desc: string;
    tag: string;
  }[];
  sections: PrivacySection[];
  contactBox: {
    title: string;
    description: string;
    entityName: string;
    jurisdiction: string;
    supportEmail: string;
    githubRepo: string;
    gpgKeyNote: string;
  };
}

export const privacyData: Record<Locale, PrivacyData> = {
  vi: {
    metaTitle: 'Chính Sách Quyền Riêng Tư • KD Labs',
    metaDescription:
      'Chính sách quyền riêng tư chi tiết của KD Labs: Kiến trúc 100% ngoại tuyến (Zero-Network), mã hóa phần cứng Keystore, tuân thủ Google Play Data Safety, Nghị định 13/2023/NĐ-CP và GDPR.',
    badge: 'Văn Bản Pháp Lý & Cam Kết Kỹ Thuật • Tháng 09/2026',
    title: 'Chính Sách Quyền Riêng Tư',
    effectiveDate: 'Hiệu lực từ: 01/09/2026',
    lastUpdated: 'Phiên bản: 1.2.0 (Cập nhật lần cuối: Tháng 9, 2026)',
    intro:
      'Tại KD Labs, chúng tôi tin rằng quyền riêng tư không phải là một tính năng đi kèm có thể tùy ý cấu hình, mà là quyền cơ bản bất khả xâm phạm của mỗi người dùng. Tài liệu này công khai minh bạch toàn bộ nguyên tắc xử lý dữ liệu, chứng minh kỹ thuật kiến trúc Zero-Network và đối chiếu chi tiết theo tiêu chuẩn Google Play Data Safety, Nghị định 13/2023/NĐ-CP (Việt Nam), GDPR (Liên minh Châu Âu) và CCPA (Hoa Kỳ).',
    backToHome: 'Quay về trang chủ',
    tableOfContentsTitle: 'Mục Lục Văn Bản',
    readingTime: 'Thời gian đọc: ~8 phút',
    highlightsTitle: 'Tóm Tắt Cam Kết Cốt Lõi (At a Glance)',
    highlightsSubtitle: 'Bốn nguyên tắc bất di bất dịch trong mọi sản phẩm phần mềm của KD Labs:',
    highlights: [
      {
        icon: 'zero-net',
        title: 'Zero-Network (Không-Mạng)',
        desc: 'Ứng dụng không khai báo quyền android.permission.INTERNET. Không có mã độc, không có cổng truyền dữ liệu ra ngoài thiết bị.',
        tag: '0 Byte Truyền Đi',
      },
      {
        icon: 'zero-sdk',
        title: '0 SDK Theo Dõi & Quảng Cáo',
        desc: 'Tuyệt đối không nhúng Google Firebase Analytics, Crashlytics, AppsFlyer hay bất kỳ mạng lưới quảng cáo thương mại nào.',
        tag: '100% Sạch Mã',
      },
      {
        icon: 'keystore',
        title: 'Két Mật Mã Phần Cứng',
        desc: 'Khóa chính Vault được tạo từ PBKDF2 (100.000 vòng lặp) và mã hóa AES-256-GCM bảo vệ bởi Android Keystore / iOS Secure Enclave.',
        tag: 'Mã Hóa Quân Đội',
      },
      {
        icon: 'audit',
        title: 'Minh Bạch Nguồn Mở MIT',
        desc: 'Toàn bộ mã nguồn được công khai tại github.com/kd-labs-io/simple-otp để cộng đồng và các chuyên gia bảo mật kiểm chứng độc lập.',
        tag: 'Mã Nguồn Mở',
      },
    ],
    sections: [
      {
        id: 'gioi-thieu-va-pham-vi',
        number: '01',
        title: 'Giới Thiệu & Phạm Vi Điều Chỉnh',
        content: [
          'Chính sách quyền riêng tư này ("Chính sách") áp dụng đối với tất cả các sản phẩm, ứng dụng di động, công cụ phần mềm do KD Labs ("chúng tôi", "KD Labs") phát triển và phân phối thông qua Google Play Store, Apple App Store hoặc kho mã nguồn mở GitHub, bao gồm nhưng không giới hạn ở ứng dụng xác thực Simple OTP (Package ID: vn.io.kd.simpleotp) và trang thông tin chính thức https://kd.io.vn.',
          'Bằng việc cài đặt, sao chép hoặc sử dụng bất kỳ ứng dụng nào của KD Labs, bạn thừa nhận đã đọc, hiểu và đồng ý với các nguyên tắc được nêu trong văn bản này. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng gỡ cài đặt ứng dụng khỏi thiết bị của bạn.',
        ],
        subsections: [
          {
            title: '1.1. Định nghĩa thuật ngữ chính',
            content: [
              '• "Dữ liệu cá nhân" (Personal Data): Thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự gắn liền với một con người cụ thể hoặc giúp xác định một con người cụ thể theo Nghị định 13/2023/NĐ-CP và GDPR.',
              '• "Ứng dụng": Ứng dụng di động Simple OTP và các tiện ích độc lập do KD Labs phát hành.',
              '• "Thiết bị": Điện thoại thông minh, máy tính bảng hoặc thiết bị cá nhân khác chạy hệ điều hành Android hoặc iOS do người dùng sở hữu và kiểm soát.',
              '• "Khóa bí mật 2FA / Hạt giống (Seed)": Chuỗi ký tự chuẩn Base32 hoặc URI định dạng otpauth:// do các dịch vụ trực tuyến cung cấp để sinh mã xác thực hai lớp (TOTP / HOTP).',
            ],
          },
          {
            title: '1.2. Tư cách pháp lý và Trách nhiệm xử lý dữ liệu',
            content: [
              'Theo khuôn khổ Nghị định 13/2023/NĐ-CP và GDPR Điều 4(7), đối với toàn bộ dữ liệu bạn nhập vào ứng dụng Simple OTP, bạn là Chủ thể Dữ liệu duy nhất đồng thời là Bên Kiểm soát Dữ liệu độc quyền. KD Labs KHÔNG đóng vai trò Bên Xử lý Dữ liệu trên máy chủ, bởi vì kiến trúc hệ thống của chúng tôi hoàn toàn không tiếp cận, không lưu trữ và không truyền tải dữ liệu của bạn.',
            ],
          },
        ],
      },
      {
        id: 'kien-truc-zero-network',
        number: '02',
        title: 'Cam Kết Kiến Trúc Không-Mạng (Zero-Network Architecture)',
        content: [
          'Sự khác biệt cốt lõi giữa Simple OTP của KD Labs và các ứng dụng xác thực thương mại khác trên thị trường là Kiến trúc Zero-Network (Không-Mạng). Đây là cam kết mang tính bảo đảm toán học và kỹ thuật, không đơn thuần chỉ là lời hứa pháp lý.',
          'Trong tệp kê khai ứng dụng Android (AndroidManifest.xml), chúng tôi hoàn toàn KHÔNG khai báo quyền truy cập Internet:',
        ],
        callout: {
          type: 'shield',
          title: 'Chứng chỉ Kỹ thuật Không-Internet',
          text: 'Tệp AndroidManifest.xml của Simple OTP không chứa thẻ <uses-permission android:name="android.permission.INTERNET" />. Về mặt hệ điều hành Android, một ứng dụng không có quyền này sẽ bị chặn vĩnh viễn ở tầng Linux kernel nếu cố gắng mở bất kỳ socket mạng nào. Dữ liệu của bạn không thể bị rò rỉ ra ngoài qua Internet dưới bất kỳ hình thức nào.',
        },
        subsections: [
          {
            title: '2.1. Không thu thập dữ liệu ngầm (Zero Telemetry)',
            content: [
              'Chúng tôi chủ động loại bỏ toàn bộ các bộ thư viện (SDK) của bên thứ ba thường thấy trong các ứng dụng di động:',
              '• Không Google Firebase Analytics, không Google Crashlytics.',
              '• Không Facebook SDK, AppsFlyer, Mixpanel hay Flurry.',
              '• Không thư viện tiếp thị, đo lường chuyển đổi hoặc quảng cáo rác (Zero Ad Networks).',
              'Ứng dụng không tạo ra bất kỳ yêu cầu gửi báo cáo lỗi (crash reports) hay nhật ký sử dụng (analytics logs) nào qua mạng. Mọi lỗi phần mềm xảy ra (nếu có) chỉ hiển thị trực tiếp cục bộ trên màn hình để bạn tự quyết định chia sẻ khi gửi email hỗ trợ.',
            ],
          },
          {
            title: '2.2. Khả năng hoạt động cô lập (Air-Gapped & Airplane Mode)',
            content: [
              'Simple OTP hoạt động trơn tru 100% trong môi trường ngắt kết nối hoàn toàn (Air-gapped device) hoặc khi thiết bị bật Chế độ máy bay (Airplane Mode). Thuật toán TOTP (RFC 6238) tính toán mã OTP dựa trên đồng hồ phần cứng nội bộ của thiết bị và khóa bí mật lưu cục bộ mà không đòi hỏi bất kỳ sự đồng bộ nào từ máy chủ thời gian bên ngoài.',
            ],
          },
        ],
      },
      {
        id: 'google-play-data-safety',
        number: '03',
        title: 'Biểu Mẫu Đối Chiếu An Toàn Dữ Liệu Google Play (Data Safety)',
        content: [
          'Google Play Store yêu cầu mọi nhà phát triển phải công bố chi tiết bảng khai báo An toàn Dữ liệu (Data Safety Section). Dưới đây là đối chiếu chính xác từng mục theo hồ sơ khai báo chính thức của KD Labs trên Google Play Console:',
        ],
        table: {
          headers: ['Hạng mục dữ liệu', 'Trạng thái thu thập', 'Trạng thái chia sẻ', 'Mục đích & Ghi chú'],
          rows: [
            ['Thông tin cá nhân (Tên, Email, SĐT, ID)', 'KHÔNG THU THẬP', 'KHÔNG CHIA SẺ', 'Ứng dụng không có tính năng đăng ký tài khoản.'],
            ['Vị trí địa lý (Chính xác hoặc tương đối)', 'KHÔNG THU THẬP', 'KHÔNG CHIA SẺ', 'Không yêu cầu quyền truy cập GPS hay mạng di động.'],
            ['Thông tin tài chính & Thanh toán', 'KHÔNG THU THẬP', 'KHÔNG CHIA SẺ', 'Không có mua hàng trong ứng dụng (In-app Purchases).'],
            ['Danh bạ, Tin nhắn & Nhật ký cuộc gọi', 'KHÔNG THU THẬP', 'KHÔNG CHIA SẺ', 'Không yêu cầu quyền truy cập danh bạ hay viễn thông.'],
            ['Ảnh & Video cá nhân', 'KHÔNG THU THẬP', 'KHÔNG CHIA SẺ', 'Chỉ đọc tạm trên RAM ảnh QR khi người dùng chọn thủ công.'],
            ['Tệp âm thanh & Ghi âm', 'KHÔNG THU THẬP', 'KHÔNG CHIA SẺ', 'Quyền RECORD_AUDIO bị tắt vĩnh viễn.'],
            ['Tệp tin và Tài liệu người dùng', 'KHÔNG THU THẬP', 'KHÔNG CHIA SẺ', 'Chỉ xuất/nhập tệp sao lưu .simpleotp do bạn chỉ định lưu.'],
            ['Hoạt động trong ứng dụng & Tương tác', 'KHÔNG THU THẬP', 'KHÔNG CHIA SẺ', '0 sự kiện theo dõi, 0 phân tích thói quen người dùng.'],
            ['Thông tin thiết bị & Định danh phần cứng', 'KHÔNG THU THẬP', 'KHÔNG CHIA SẺ', 'Không đọc IMEI, Android ID, MAC address hoặc Advertising ID.'],
            ['Nhật ký chẩn đoán & Báo cáo lỗi (Crash logs)', 'KHÔNG THU THẬP', 'KHÔNG CHIA SẺ', 'Không gửi bất kỳ báo cáo lỗi nào về máy chủ.'],
          ],
        },
        callout: {
          type: 'info',
          title: 'Tiêu chuẩn bảo mật được Google Play xác thực',
          text: '• Cơ chế mã hóa đường truyền (Data encryption in transit): KHÔNG ÁP DỤNG (N/A) do ứng dụng không kết nối mạng.\n• Cơ chế bảo mật lưu trữ: Mã hóa AES-256-GCM bảo vệ bởi phần cứng.\n• Yêu cầu xóa dữ liệu: Người dùng có toàn quyền xóa dữ liệu bất kỳ lúc nào bằng cách xóa bộ nhớ ứng dụng trong Cài đặt thiết bị hoặc gỡ cài đặt.',
        },
      },
      {
        id: 'ma-tran-quyen-thiet-bi',
        number: '04',
        title: 'Ma Trận Phân Tích Quyền Hạn Thiết Bị (Permissions Matrix)',
        content: [
          'Simple OTP tuân thủ nguyên tắc Quyền Hạn Tối Thiểu (Principle of Least Privilege). Chúng tôi chỉ yêu cầu những quyền hạn hệ điều hành tuyệt đối cần thiết để vận hành các tính năng bảo mật do bạn chủ động khởi xướng:',
        ],
        table: {
          headers: ['Quyền hạn hệ điều hành', 'Loại quyền', 'Mục đích sử dụng', 'Cơ chế xử lý & Bảo mật'],
          rows: [
            [
              'android.permission.CAMERA',
              'Nguy hiểm (Runtime Permission)',
              'Chỉ dùng để quét mã QR chứa thông tin cấu hình 2FA (otpauth://).',
              'Luồng khung hình camera được nạp trực tiếp vào RAM, giải mã mã vạch cục bộ thông qua thư viện ML Kit / ZXing và hủy ngay lập tức. Không chụp ảnh, không ghi file vào bộ nhớ, không gửi đi.',
            ],
            [
              'android.permission.USE_BIOMETRIC\n/ USE_FINGERPRINT',
              'Bình thường (Hardware Enclave)',
              'Xác thực danh tính người dùng bằng vân tay hoặc nhận diện khuôn mặt khi mở khóa kho Vault.',
              'Ủy quyền hoàn toàn cho BiometricPrompt của hệ điều hành. Ứng dụng chỉ nhận tín hiệu Boolean (thành công / thất bại) và CryptoObject; không bao giờ tiếp cận dữ liệu sinh trắc học thô.',
            ],
            [
              'android.permission.READ_MEDIA_IMAGES\n(Android 13+) / READ_EXTERNAL_STORAGE',
              'Tùy chọn (Photo Picker)',
              'Cho phép người dùng chọn hình ảnh mã QR có sẵn từ thư viện để nhập tài khoản 2FA.',
              'Khuyến khích sử dụng Android Photo Picker hệ thống (chỉ cấp quyền truy cập duy nhất một tấm ảnh được chọn). Ảnh được đọc trong bộ nhớ tạm để giải mã QR và giải phóng RAM ngay sau đó.',
            ],
            [
              'android.permission.VIBRATE',
              'Bình thường',
              'Tạo phản hồi xúc giác nhẹ (Haptic Feedback) khi quét QR thành công hoặc sao chép mã OTP.',
              'Không tác động đến dữ liệu cá nhân hay quyền riêng tư.',
            ],
            [
              'android.permission.POST_NOTIFICATIONS\n(Android 13+)',
              'Tùy chọn',
              'Nhắc nhở sao lưu định kỳ cục bộ (nếu người dùng bật tính năng).',
              'Chỉ lên lịch cục bộ (Local AlarmManager), không có thông báo đẩy (Push Notification) từ đám mây.',
            ],
          ],
        },
        subsections: [
          {
            title: '4.1. Quyền bị từ chối tuyệt đối (Explicitly Forbidden Permissions)',
            content: [
              'KD Labs cam kết vĩnh viễn không bổ sung các quyền sau vào Simple OTP:',
              '• android.permission.INTERNET (Không mạng)',
              '• android.permission.ACCESS_FINE_LOCATION / COARSE_LOCATION (Không định vị)',
              '• android.permission.READ_CONTACTS (Không danh bạ)',
              '• android.permission.RECORD_AUDIO (Không ghi âm / micro)',
              '• android.permission.READ_PHONE_STATE (Không đọc trạng thái điện thoại / SIM)',
            ],
          },
        ],
      },
      {
        id: 'kien-truc-mat-ma-hoc',
        number: '05',
        title: 'Kiến Trúc Mật Mã Học & Bảo Vệ Bộ Nhớ (Cryptographic Security)',
        content: [
          'Dữ liệu mã 2FA của bạn (tên tài khoản, nhà cung cấp, khóa bí mật Seed) được bảo vệ bằng các tiêu chuẩn mật mã học cao cấp nhất hiện nay:',
        ],
        subsections: [
          {
            title: '5.1. Khóa Chính Vault (Master Vault Key - MVK) & Sinh khóa PBKDF2',
            content: [
              '• Khi bạn thiết lập mật mã truy cập ứng dụng, mật mã được đưa qua hàm chuẩn hóa khóa PBKDF2-HMAC-SHA256 với muối ngẫu nhiên (salt) 256-bit được sinh qua bộ tạo số ngẫu nhiên an toàn SecureRandom.',
              '• Số vòng lặp tối thiểu: 100.000 vòng (100k iterations) nhằm ngăn chặn triệt để các cuộc tấn công vét cạn (Brute-force) và bảng cầu vồng (Rainbow table) trên GPU chuyên dụng.',
            ],
          },
          {
            title: '5.2. Mã hóa đối xứng AES-256-GCM kết hợp Android Keystore',
            content: [
              '• Toàn bộ cơ sở dữ liệu tài khoản cục bộ được mã hóa bằng thuật toán AES-256 ở chế độ Galois/Counter Mode (GCM). Chế độ GCM cung cấp cả tính bảo mật (Confidentiality) lẫn tính toàn vẹn xác thực (Authenticity) thông qua thẻ tag xác thực 128-bit, ngăn chặn mọi hành vi can thiệp sửa đổi tệp.',
              '• Khóa mã hóa cơ sở dữ liệu được bảo vệ bởi Android Keystore (trên Android) hoặc Apple Keychain / Secure Enclave (trên iOS). Khóa nằm trong phân vùng phần cứng cách ly an toàn và không bao giờ xuất hiện dưới dạng văn bản rõ (plaintext) trong bộ nhớ ứng dụng.',
            ],
          },
          {
            title: '5.3. Bảo vệ giao diện: Ngăn chụp màn hình với FLAG_SECURE',
            content: [
              'Để ngăn chặn các ứng dụng gián điệp chạy nền chụp lén màn hình hoặc hệ điều hành lưu ảnh chụp vào danh sách ứng dụng gần đây (Recents App Switcher), Simple OTP kích hoạt cờ hệ thống WindowManager.LayoutParams.FLAG_SECURE trên tất cả các Activity quan trọng.',
              'Mọi nỗ lực chụp màn hình (Screenshot), quay video màn hình (Screen Recording) hoặc chia sẻ màn hình qua HDMI/Cast sẽ bị hệ điều hành chặn hoặc chỉ thu được khung hình màu đen hoàn toàn.',
            ],
          },
          {
            title: '5.4. Xóa sạch bộ nhớ nhạy cảm (Memory Zeroization)',
            content: [
              'Trong quá trình sinh mã OTP (theo RFC 6238 / RFC 4226), các mảng byte nhạy cảm chứa khóa bí mật Base32 chỉ được giữ trong bộ nhớ RAM trong thời gian tối thiểu tính bằng mili-giây. Ngay sau khi tính toán xong mã xác thực, các mảng bộ nhớ này được chủ động ghi đè bằng số 0 (Zeroized/Wiped) để phòng chống kỹ thuật trích xuất bộ nhớ (Memory Dump inspection).',
            ],
          },
        ],
      },
      {
        id: 'co-che-sao-luu-ma-hoa',
        number: '06',
        title: 'Cơ Chế Sao Lưu & Phục Hồi Mã Hóa (.simpleotp)',
        content: [
          'Vì Simple OTP không có máy chủ đám mây để tự động đồng bộ tài khoản của bạn, chúng tôi cung cấp tính năng Sao lưu Thủ công Mã hóa để bạn có thể chuyển đổi thiết bị hoặc cất giữ an toàn.',
        ],
        subsections: [
          {
            title: '6.1. Định dạng tệp sao lưu .simpleotp',
            content: [
              '• Tệp sao lưu do Simple OTP xuất ra có đuôi .simpleotp. Đây là một tệp nhị phân được đóng gói an toàn.',
              '• Cấu trúc tệp bao gồm: Header nhận diện phiên bản, Muối bảo mật ngẫu nhiên (Salt 32 bytes), Vector khởi tạo ngẫu nhiên (IV 12 bytes), Thẻ xác thực (Auth Tag 16 bytes) và Phần dữ liệu JSON đã mã hóa hoàn toàn.',
              '• Mật khẩu sao lưu: Do chính bạn thiết lập tại thời điểm xuất tệp. KD Labs KHÔNG lưu trữ mật khẩu này và hoàn toàn KHÔNG CÓ CỬA SAU (Backdoor) để mở khóa tệp nếu bạn quên mật khẩu.',
            ],
            callout: {
              type: 'alert',
              title: 'Cảnh báo trách nhiệm về Mật khẩu sao lưu',
              text: 'Vui lòng ghi nhớ hoặc lưu trữ mật khẩu sao lưu vào trình quản lý mật khẩu tin cậy của bạn. Nếu bạn quên mật khẩu này, không ai trên thế giới — kể cả đội ngũ phát triển KD Labs — có thể giải mã hoặc khôi phục lại các mã 2FA trong tệp .simpleotp của bạn.',
            },
          },
          {
            title: '6.2. Không tự động đồng bộ lên đám mây của bên thứ ba',
            content: [
              'Ứng dụng không tự ý đẩy tệp sao lưu lên Google Drive, iCloud hay Dropbox. Khi bạn chọn "Xuất bản sao lưu", ứng dụng sẽ kích hoạt SAF (Storage Access Framework) của Android để bạn tự tay chọn vị trí lưu: thẻ nhớ ngoài, bộ nhớ USB OTG hoặc thư mục cục bộ bạn muốn.',
            ],
          },
        ],
      },
      {
        id: 'tuong-tac-ngoai-vi',
        number: '07',
        title: 'Dữ Liệu Tương Tác Ngoại Vi & Kênh Hỗ Trợ',
        content: [
          'Mặc dù ứng dụng Simple OTP là 100% ngoại tuyến, người dùng có thể tương tác với KD Labs thông qua các kênh liên lạc bên ngoài như Email hỗ trợ hoặc kho mã nguồn GitHub. Dưới đây là cách chúng tôi xử lý các thông tin phát sinh:',
        ],
        subsections: [
          {
            title: '7.1. Email hỗ trợ kỹ thuật (support@kd.io.vn)',
            content: [
              '• Khi bạn chủ động gửi email yêu cầu trợ giúp kỹ thuật hoặc phản ánh lỗi, chúng tôi sẽ nhận được địa chỉ email, tên hiển thị và nội dung bức thư của bạn.',
              '• Mục đích sử dụng: Duy nhất để giải đáp thắc mắc, hướng dẫn khắc phục sự cố hoặc trao đổi về tính năng bạn yêu cầu.',
              '• Thời gian lưu trữ: Chúng tôi định kỳ xóa sạch các luồng email hỗ trợ đã được giải quyết xong sau 90 ngày. Chúng tôi không bao giờ sử dụng email của bạn cho mục đích tiếp thị, không lập danh sách gửi thư rác (newsletter) và tuyệt đối không bán cho bên thứ ba.',
            ],
          },
          {
            title: '7.2. Tương tác trên kho mã nguồn mở GitHub',
            content: [
              '• Khi bạn báo cáo lỗi (Issues) hoặc đóng góp mã nguồn (Pull Requests) tại kho lưu trữ github.com/kd-labs-io/simple-otp, các thông tin này tuân theo Chính sách Quyền riêng tư của GitHub (Microsoft).',
              '• Cảnh báo: Vui lòng KHÔNG BAO GIỜ đính kèm ảnh chụp mã QR, khóa bí mật Seed, mật mã sao lưu hoặc thông tin cá nhân nhạy cảm trong các Issue công khai trên GitHub.',
            ],
          },
          {
            title: '7.3. Nhật ký truy cập Website chính thức (https://kd.io.vn)',
            content: [
              '• Trang web kd.io.vn là trang tĩnh (Static Site) được phân phối qua mạng phân phối nội dung Cloudflare Pages. Chúng tôi KHÔNG sử dụng cookie theo dõi hành vi, không nhúng mã theo dõi pixel (Facebook Pixel, Google Tag Manager).',
              '• Cloudflare có thể ghi nhận nhật ký kỹ thuật cơ bản ở tầng mạng (địa chỉ IP ẩn danh, chuỗi User-Agent, thời gian truy cập) nhằm mục đích bảo vệ chống tấn công DDoS và tối ưu định tuyến. Dữ liệu này được xử lý theo chính sách quyền riêng tư của Cloudflare Inc.',
            ],
          },
        ],
      },
      {
        id: 'quyen-chu-the-du-lieu',
        number: '08',
        title: 'Quyền Của Chủ Thể Dữ Liệu (Nghị Định 13, GDPR, CCPA)',
        content: [
          'KD Labs hoàn toàn ủng hộ và tuân thủ các quy định pháp luật hiện đại về bảo vệ dữ liệu, bao gồm Nghị định số 13/2023/NĐ-CP của Chính phủ Việt Nam, Quy chế Bảo vệ Dữ liệu Chung (GDPR) của Liên minh Châu Âu và Đạo luật Quyền riêng tư Người tiêu dùng California (CCPA/CPRA).',
        ],
        subsections: [
          {
            title: '8.1. Thực thi các quyền pháp lý của bạn',
            content: [
              '• Quyền được biết và Quyền truy cập: Bạn có toàn quyền xem mọi dữ liệu đang được lưu trữ bằng cách mở ứng dụng trên thiết bị của mình. Không có dữ liệu ẩn nào được lưu ngoài tầm mắt bạn.',
              '• Quyền chỉnh sửa: Bạn có thể tự do đổi tên tài khoản 2FA, cập nhật icon hoặc chỉnh sửa thông tin nhà cung cấp trực tiếp trong màn hình chi tiết của ứng dụng.',
              '• Quyền xóa dữ liệu (Right to be Forgotten): Vì KD Labs không lưu dữ liệu của bạn trên bất kỳ máy chủ nào, bạn không cần phải gửi đơn yêu cầu xóa dữ liệu. Bạn thực hiện quyền xóa ngay lập tức và triệt để bằng cách:',
              '    1. Mở Cài đặt hệ điều hành Android > Ứng dụng > Simple OTP > Lưu trữ > Xóa dữ liệu (Clear Data); hoặc',
              '    2. Gỡ cài đặt ứng dụng Simple OTP khỏi thiết bị.',
              '• Quyền phản đối và Rút lại sự đồng ý: Bạn có thể thu hồi quyền Camera hoặc Thư viện ảnh bất kỳ lúc nào trong phần Cài đặt Quyền ứng dụng của hệ điều hành Android.',
            ],
          },
        ],
      },
      {
        id: 'bao-ve-tre-em',
        number: '09',
        title: 'Bảo Vệ Quyền Riêng Tư Của Trẻ Em (COPPA Compliance)',
        content: [
          'Các ứng dụng của KD Labs là công cụ tiện ích kỹ thuật số hướng tới người dùng phổ thông nói chung và không nhắm mục tiêu cụ thể đến trẻ em dưới 13 tuổi (hoặc dưới 16 tuổi theo quy định tại khu vực kinh tế Châu Âu EEA).',
          'Chúng tôi không cố ý thu thập, lưu trữ hay yêu cầu bất kỳ thông tin nhận dạng cá nhân nào từ trẻ em. Do kiến trúc Zero-Network không thu thập dữ liệu của bất kỳ ai, nguy cơ khai thác dữ liệu trẻ em trong các ứng dụng của chúng tôi là hoàn toàn bằng không.',
          'Nếu quý phụ huynh hoặc người giám hộ phát hiện trẻ em cung cấp thông tin liên hệ khi gửi email đến hòm thư hỗ trợ của chúng tôi, vui lòng liên hệ support@kd.io.vn để chúng tôi tiến hành xóa sạch các thư từ liên quan ngay lập tức.',
        ],
      },
      {
        id: 'minh-bach-nguon-mo',
        number: '10',
        title: 'Minh Bạch Nguồn Mở & Hướng Dẫn Kiểm Định Độc Lập',
        content: [
          'Chúng tôi tin rằng trong lĩnh vực an ninh mạng và mật mã học: "Không nên tin tưởng một cách mù quáng, hãy kiểm chứng" (Don\'t trust, verify). Cách duy nhất để chứng minh một ứng dụng tôn trọng quyền riêng tư là để cộng đồng tự do soi chiếu từng dòng mã nguồn.',
          'Toàn bộ mã nguồn của Simple OTP được phát hành công khai theo Giấy phép Mã nguồn Mở MIT (MIT License) tại địa chỉ: https://github.com/kd-labs-io/simple-otp.',
        ],
        subsections: [
          {
            title: '10.1. Hướng dẫn độc lập kiểm tra tính an toàn',
            content: [
              'Bất kỳ lập trình viên, chuyên gia bảo mật hoặc người dùng nào có kiến thức kỹ thuật đều có thể tự kiểm chứng cam kết của chúng tôi bằng các bước sau:',
              '1. Kiểm tra AndroidManifest.xml: Xác nhận không có quyền android.permission.INTERNET.',
              '2. Kiểm tra tệp build.gradle: Xác nhận danh sách dependencies không chứa bất kỳ SDK phân tích, SDK quảng cáo hay dịch vụ theo dõi nào.',
              '3. Bắt gói tin mạng (Network Packet Sniffing): Cài đặt ứng dụng lên máy ảo Android, sử dụng công cụ như Wireshark, Charles Proxy hoặc PCAPdroid để giám sát toàn bộ lưu lượng ra/vào. Bạn sẽ thấy 0 byte dữ liệu được truyền qua giao diện mạng.',
              '4. Tự biên dịch từ mã nguồn (Reproducible Builds): Bạn hoàn toàn có thể tự clone mã nguồn từ GitHub và biên dịch tệp APK cho riêng mình để đảm bảo ứng dụng không bị can thiệp bởi bất kỳ bên thứ ba nào.',
            ],
          },
        ],
      },
      {
        id: 'nhat-ky-phien-ban-va-thay-doi',
        number: '11',
        title: 'Nhật Ký Phiên Bản & Thay Đổi Chính Sách',
        content: [
          'KD Labs có thể định kỳ cập nhật Chính sách quyền riêng tư này để phản ánh các cải tiến về tính năng ứng dụng, thay đổi trong quy định pháp luật hoặc điều chỉnh tiêu chuẩn của Google Play Store.',
          'Mọi thay đổi sẽ được công bố trực tiếp tại trang này kèm theo việc cập nhật số phiên bản và ngày sửa đổi ở đầu tài liệu. Đối với những thay đổi trọng yếu, chúng tôi sẽ đưa thông báo nổi bật vào phần "Có gì mới" (What\'s New) trên trang phát hành của Google Play Store.',
        ],
        table: {
          headers: ['Phiên bản', 'Ngày ban hành', 'Tóm tắt nội dung thay đổi chính'],
          rows: [
            ['1.2.0', 'Tháng 09/2026', 'Nâng cấp toàn diện trang chính sách 1-page chi tiết; bổ sung bảng ma trận quyền hạn, đối chiếu Google Play Data Safety và phân tích mật mã học Keystore.'],
            ['1.0.0', 'Tháng 06/2026', 'Ban hành chính sách quyền riêng tư ban đầu cho dự án Simple OTP trên Google Play Store.'],
          ],
        },
      },
      {
        id: 'thong-tin-phap-nhan-va-lien-he',
        number: '12',
        title: 'Thông Tin Đơn Vị Chủ Quản & Kênh Liên Hệ',
        content: [
          'Nếu bạn có bất kỳ câu hỏi, thắc mắc, phản ánh về an ninh hoặc cần hỗ trợ liên quan đến Chính sách quyền riêng tư này, vui lòng liên hệ với đội ngũ phụ trách quyền riêng tư của KD Labs qua các kênh chính thức sau:',
        ],
        subsections: [
          {
            title: '12.1. Thông tin đại diện phát triển',
            content: [
              '• Đơn vị phát triển: KD Labs (Nhà phát triển phần mềm độc lập)',
              '• Quốc gia sở tại: Việt Nam',
              '• Đại diện kỹ thuật: Duy BK',
              '• Hòm thư điện tử bảo mật & hỗ trợ: support@kd.io.vn',
              '• Trang thông tin điện tử: https://kd.io.vn',
              '• Kho lưu trữ mã nguồn mở: https://github.com/kd-labs-io/simple-otp',
              '• Thời gian phản hồi cam kết: Chúng tôi nỗ lực phản hồi mọi yêu cầu liên quan đến bảo mật và quyền riêng tư trong vòng 48 giờ làm việc.',
            ],
          },
        ],
      },
    ],
    contactBox: {
      title: 'Đầu Mối Tiếp Nhận Vấn Đề Quyền Riêng Tư & An Ninh Mật Mã',
      description:
        'Bạn phát hiện ra lỗ hổng bảo mật hoặc có đề xuất cải thiện quyền riêng tư cho Simple OTP? Hãy liên hệ trực tiếp với chúng tôi. Chúng tôi luôn trân trọng mọi đóng góp xây dựng từ cộng đồng bảo mật.',
      entityName: 'KD Labs',
      jurisdiction: 'Việt Nam • Phạm vi phục vụ Toàn Cầu',
      supportEmail: 'support@kd.io.vn',
      githubRepo: 'https://github.com/kd-labs-io/simple-otp',
      gpgKeyNote: 'Đối với các thông báo lỗ hổng nhạy cảm, bạn có thể gửi email kèm mã hóa hoặc mở Security Advisory riêng tư trên GitHub repository.',
    },
  },

  en: {
    metaTitle: 'Privacy Policy • KD Labs',
    metaDescription:
      'Detailed Privacy Policy of KD Labs: 100% Offline (Zero-Network Architecture), hardware-backed Keystore encryption, compliant with Google Play Data Safety, VN Decree 13/2023/ND-CP, GDPR, and CCPA.',
    badge: 'Legal & Technical Compliance Document • September 2026',
    title: 'Privacy Policy',
    effectiveDate: 'Effective Date: September 1, 2026',
    lastUpdated: 'Version: 1.2.0 (Last Updated: September 2026)',
    intro:
      'At KD Labs, we hold that privacy is not a decorative configurable feature, but an inviolable fundamental human right. This comprehensive document transparently articulates our data practices, mathematically and technically substantiates our Zero-Network architecture, and provides thorough alignment with the Google Play Data Safety requirements, Vietnam Decree 13/2023/ND-CP, the European Union General Data Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA/CPRA).',
    backToHome: 'Back to Homepage',
    tableOfContentsTitle: 'Table of Contents',
    readingTime: 'Estimated Reading Time: ~8 minutes',
    highlightsTitle: 'Executive Summary (At a Glance)',
    highlightsSubtitle: 'Four non-negotiable architectural pillars embedded into every KD Labs software product:',
    highlights: [
      {
        icon: 'zero-net',
        title: 'Zero-Network Architecture',
        desc: 'The app never declares android.permission.INTERNET. Mathematically incapable of transmitting telemetry or exfiltrating data.',
        tag: '0 Bytes Outward',
      },
      {
        icon: 'zero-sdk',
        title: 'Zero Tracking & Ad SDKs',
        desc: 'Strictly zero Google Firebase Analytics, Crashlytics, AppsFlyer, or any commercial advertising networks.',
        tag: '100% Clean Code',
      },
      {
        icon: 'keystore',
        title: 'Hardware Cryptographic Enclave',
        desc: 'Master Vault Keys derived via PBKDF2 (100,000 rounds) and encrypted with AES-256-GCM backed by Android Keystore / iOS Keychain.',
        tag: 'Military-Grade Encryption',
      },
      {
        icon: 'audit',
        title: 'MIT Open-Source Auditing',
        desc: 'Entire codebase publicly auditable at github.com/kd-labs-io/simple-otp for peer review by security researchers worldwide.',
        tag: 'Open-Source Auditable',
      },
    ],
    sections: [
      {
        id: 'introduction-and-scope',
        number: '01',
        title: 'Introduction & Scope of Application',
        content: [
          'This Privacy Policy ("Policy") governs all software applications, mobile utilities, and digital tools created and published by KD Labs ("we", "us", "our", or "KD Labs") across the Google Play Store, Apple App Store, and open-source software repositories such as GitHub. This includes, without limitation, the Simple OTP authenticator app (Package ID: vn.io.kd.simpleotp) and our official domain https://kd.io.vn.',
          'By installing, copying, or utilizing any KD Labs application, you acknowledge that you have read, understood, and consented to the stipulations detailed herein. If you do not consent to these terms, please immediately uninstall our applications from your hardware.',
        ],
        subsections: [
          {
            title: '1.1. Key Definitions',
            content: [
              '• "Personal Data": Any information relating to an identified or identifiable natural person as defined under GDPR Article 4(1) and Vietnam Decree 13/2023/ND-CP.',
              '• "Application": The Simple OTP mobile application and all modular standalone software tools engineered by KD Labs.',
              '• "Device": Any mobile phone, tablet, or consumer hardware operating Android or iOS owned and operated by the user.',
              '• "2FA Secret Key / Seed": Base32 formatted cryptographic strings or otpauth:// URIs issued by online service providers to calculate two-factor authentication tokens (TOTP / HOTP).',
            ],
          },
          {
            title: '1.2. Legal Status & Data Processing Roles',
            content: [
              'Under GDPR Article 4(7) and Vietnam Decree 13/2023/ND-CP, with respect to all 2FA accounts and secrets entered into Simple OTP, you remain the sole Data Subject and the exclusive Data Controller. KD Labs DOES NOT act as a cloud Data Processor because our software architecture operates with zero servers, never ingests, never stores, and never transmits your data.',
            ],
          },
        ],
      },
      {
        id: 'zero-network-architecture',
        number: '02',
        title: 'Zero-Network Architecture Guarantee',
        content: [
          'The defining distinction between KD Labs’ Simple OTP and mainstream commercial authenticator utilities is our strict Zero-Network Architecture. This is a mathematical and operating-system-level guarantee rather than a mere contractual promise.',
          'In our Android application manifest (AndroidManifest.xml), we purposefully omit network permissions entirely:',
        ],
        callout: {
          type: 'shield',
          title: 'Technical Proof of Zero Network Permission',
          text: 'The AndroidManifest.xml of Simple OTP contains NO <uses-permission android:name="android.permission.INTERNET" /> tag. In the Android security architecture, an application lacking this manifest permission is unconditionally blocked at the Linux kernel sandbox boundary from opening any network sockets. Your data cannot be exfiltrated over the Internet under any circumstances.',
        },
        subsections: [
          {
            title: '2.1. Zero Telemetry & Zero External SDKs',
            content: [
              'We rigorously exclude all third-party software development kits (SDKs) common in mobile development:',
              '• No Google Firebase Analytics, no Google Crashlytics.',
              '• No Facebook SDK, AppsFlyer, Mixpanel, or Flurry.',
              '• Zero tracking pixels, conversion monitors, or advertising libraries.',
              'The application generates no outbound crash reports or telemetry logs. Any application errors or exceptions remain strictly local on your screen for manual review if you choose to report them via support email.',
            ],
          },
          {
            title: '2.2. Air-Gapped & Airplane Mode Operation',
            content: [
              'Simple OTP operates with 100% functional completeness on air-gapped devices and in Airplane Mode. TOTP token calculations (RFC 6238) depend exclusively on your device’s local hardware clock and locally stored seeds, without requiring any external time-server synchronization.',
            ],
          },
        ],
      },
      {
        id: 'google-play-data-safety',
        number: '03',
        title: 'Google Play Data Safety Section Compliance',
        content: [
          'The Google Play Store mandates that developers publish an explicit Data Safety declaration. Below is the verified item-by-item breakdown matching KD Labs’ official Google Play Console disclosure:',
        ],
        table: {
          headers: ['Data Category', 'Collection Status', 'Sharing Status', 'Purpose & Handling Details'],
          rows: [
            ['Personal Info (Name, Email, Phone, User ID)', 'NOT COLLECTED', 'NOT SHARED', 'App requires no account sign-in or registration.'],
            ['Location (Precise or Approximate)', 'NOT COLLECTED', 'NOT SHARED', 'No GPS or cellular triangulation permissions requested.'],
            ['Financial & Payment Info', 'NOT COLLECTED', 'NOT SHARED', 'Zero in-app purchases or payment processing libraries.'],
            ['Contacts, SMS, & Call Logs', 'NOT COLLECTED', 'NOT SHARED', 'No telecommunication or address book permissions requested.'],
            ['Photos & Videos', 'NOT COLLECTED', 'NOT SHARED', 'Temporary RAM decode only when user actively selects a QR image.'],
            ['Audio Recordings & Microphone', 'NOT COLLECTED', 'NOT SHARED', 'RECORD_AUDIO permission permanently excluded.'],
            ['Files & User Documents', 'NOT COLLECTED', 'NOT SHARED', 'Only imports/exports user-specified .simpleotp backup files.'],
            ['App Activity & Usage Analytics', 'NOT COLLECTED', 'NOT SHARED', 'Zero analytics events or telemetry monitoring.'],
            ['Device Identifiers (IMEI, Android ID, Ad ID)', 'NOT COLLECTED', 'NOT SHARED', 'Never queries hardware IDs or Advertising IDs.'],
            ['Diagnostic & Crash Logs', 'NOT COLLECTED', 'NOT SHARED', 'No background transmission of crash telemetry.'],
          ],
        },
        callout: {
          type: 'info',
          title: 'Google Play Verified Security Practices',
          text: '• Data encryption in transit: NOT APPLICABLE (N/A) as the application initiates no network traffic.\n• Data encryption at rest: AES-256-GCM hardware-backed vault.\n• Data deletion mechanism: Complete and immediate deletion by clearing app storage in Device Settings or uninstalling the app.',
        },
      },
      {
        id: 'device-permissions-matrix',
        number: '04',
        title: 'Device Permissions Breakdown Matrix',
        content: [
          'Simple OTP strictly observes the Principle of Least Privilege. We only request permissions necessary to execute user-initiated cryptographic features:',
        ],
        table: {
          headers: ['Android / iOS Permission', 'Permission Tier', 'Functional Purpose', 'Technical Handling & Security Bounds'],
          rows: [
            [
              'android.permission.CAMERA',
              'Dangerous (Runtime Permission)',
              'Exclusively used for scanning live 2FA configuration QR codes (otpauth://).',
              'Camera frames stream strictly into volatile memory (RAM), decoded locally via ML Kit / ZXing, and immediately purged. Never written to disk, never recorded, never broadcasted.',
            ],
            [
              'android.permission.USE_BIOMETRIC\n/ USE_FINGERPRINT',
              'Normal (Hardware Security)',
              'Authenticates user identity via fingerprint or biometric face unlock to decrypt the vault.',
              'Delegated entirely to system BiometricPrompt. The app receives only a boolean success/failure signal and CryptoObject; raw biometric templates are never exposed.',
            ],
            [
              'android.permission.READ_MEDIA_IMAGES\n(Android 13+) / READ_EXTERNAL_STORAGE',
              'Optional (System Photo Picker)',
              'Allows user to select a pre-saved QR code screenshot from the gallery.',
              'Leverages the modern system Photo Picker where available (granting isolated access only to the selected item). The image is decoded in RAM and released immediately.',
            ],
            [
              'android.permission.VIBRATE',
              'Normal',
              'Triggers subtle tactile haptic feedback upon successful QR scan or code copy.',
              'Has zero privacy implications or data exposure risk.',
            ],
            [
              'android.permission.POST_NOTIFICATIONS\n(Android 13+)',
              'Optional',
              'Schedules local reminders to create an offline backup (if toggled by the user).',
              'Managed via local AlarmManager; contains zero cloud push notification tokens.',
            ],
          ],
        },
        subsections: [
          {
            title: '4.1. Explicitly Excluded Permissions',
            content: [
              'KD Labs commits to never introducing the following invasive permissions into Simple OTP:',
              '• android.permission.INTERNET (No network)',
              '• android.permission.ACCESS_FINE_LOCATION / COARSE_LOCATION (No GPS)',
              '• android.permission.READ_CONTACTS (No contacts)',
              '• android.permission.RECORD_AUDIO (No microphone)',
              '• android.permission.READ_PHONE_STATE (No telephony identifiers)',
            ],
          },
        ],
      },
      {
        id: 'cryptographic-security',
        number: '05',
        title: 'Cryptographic Architecture & Memory Security',
        content: [
          'Your 2FA credentials (issuer names, account labels, and secret seeds) are secured using state-of-the-art cryptographic primitives:',
        ],
        subsections: [
          {
            title: '5.1. Master Vault Key (MVK) & PBKDF2 Key Derivation',
            content: [
              '• When you configure a master passphrase, it is processed through PBKDF2-HMAC-SHA256 with a cryptographically secure 256-bit random salt produced by SecureRandom.',
              '• A minimum iteration count of 100,000 rounds is enforced to prevent GPU-accelerated brute-force attacks and rainbow table computations.',
            ],
          },
          {
            title: '5.2. AES-256-GCM & Android Keystore Integration',
            content: [
              '• All persistent local account data is encrypted using 256-bit Advanced Encryption Standard in Galois/Counter Mode (AES-256-GCM). GCM provides both confidentiality and authenticated integrity verification with a 128-bit authentication tag.',
              '• The database encryption key is safeguarded within the Android Keystore (or Apple Keychain / Secure Enclave on iOS). Cryptographic keys reside inside hardware-isolated enclaves and are never exposed as plaintext in application memory.',
            ],
          },
          {
            title: '5.3. Interface Shielding: FLAG_SECURE Anti-Surveillance',
            content: [
              'To shield against malicious background screen-recorder utilities and OS recent-apps snapshots, Simple OTP activates WindowManager.LayoutParams.FLAG_SECURE across all sensitive screens.',
              'Any attempt to take a screenshot, record the screen, or mirror content over HDMI/Chromecast will be blocked by the operating system or will output a completely black frame.',
            ],
          },
          {
            title: '5.4. Memory Zeroization & Ephemeral Secrets',
            content: [
              'During OTP token generation (RFC 6238 / RFC 4226), byte arrays holding decrypted secret seeds reside in RAM for mere milliseconds. Once token math completes, memory buffers are explicitly zeroized (overwritten with zeroes) to mitigate memory dump exploits.',
            ],
          },
        ],
      },
      {
        id: 'encrypted-backup-and-recovery',
        number: '06',
        title: 'Encrypted Backup & Recovery Mechanism (.simpleotp)',
        content: [
          'Because Simple OTP maintains zero cloud servers to sync your tokens, we provide an Encrypted Offline Backup feature allowing you to transfer credentials securely across devices.',
        ],
        subsections: [
          {
            title: '6.1. The .simpleotp Archive Format',
            content: [
              '• Backups are saved with the custom .simpleotp extension as an authenticated binary bundle.',
              '• Format specification: Version header byte, 32-byte cryptographic Salt, 12-byte initialization vector (IV), 16-byte authentication tag, followed by AES-256-GCM encrypted payload.',
              '• Passphrase protection: Determined exclusively by you upon export. KD Labs holds NO record of this passphrase and incorporates ABSOLUTELY NO BACKDOOR to open your file if you forget it.',
            ],
            callout: {
              type: 'alert',
              title: 'Critical Passphrase Responsibility Warning',
              text: 'Please preserve your backup passphrase in a dependable password manager. If you lose this passphrase, no entity on Earth — including KD Labs engineers — can recover or decrypt your .simpleotp backup file.',
            },
          },
          {
            title: '6.2. No Automatic Third-Party Cloud Uploads',
            content: [
              'The application does not autonomously push backups to Google Drive, iCloud, or Dropbox. When you choose "Export Backup", the Android Storage Access Framework (SAF) prompts you to choose your desired target: local storage, SD card, or USB OTG flash drive.',
            ],
          },
        ],
      },
      {
        id: 'external-interactions-and-support',
        number: '07',
        title: 'External Interactions & Support Data',
        content: [
          'While Simple OTP runs 100% offline, users may communicate with KD Labs through external touchpoints such as customer support email or GitHub. Here is how such interactions are managed:',
        ],
        subsections: [
          {
            title: '7.1. Technical Support Email (support@kd.io.vn)',
            content: [
              '• When you email our support team, we receive your email address, sender name, and message contents.',
              '• Processing Purpose: Strictly utilized to respond to inquiries, troubleshoot bugs, or address feature suggestions.',
              '• Retention Period: Resolved support correspondence is purged after 90 days. We never use support emails for marketing, never build promotional mailing lists, and never share email addresses with commercial brokers.',
            ],
          },
          {
            title: '7.2. Public GitHub Repository Interactions',
            content: [
              '• Bug reports (Issues) and code contributions (Pull Requests) submitted to github.com/kd-labs-io/simple-otp are governed by GitHub’s (Microsoft) Privacy Statement.',
              '• Precaution: NEVER attach screenshots containing live QR codes, secret keys, or backup passwords to public GitHub tickets.',
            ],
          },
          {
            title: '7.3. Official Website Access (https://kd.io.vn)',
            content: [
              '• The kd.io.vn website is a static site hosted via Cloudflare Pages. We deploy zero behavioral cookies, zero third-party advertising pixels, and zero analytics scripts.',
              '• Cloudflare may record transient routing logs (anonymized IP, User-Agent, timestamp) solely to defend against DDoS attacks and maintain CDN performance, in accordance with Cloudflare Inc.’s privacy practices.',
            ],
          },
        ],
      },
      {
        id: 'data-subject-rights',
        number: '08',
        title: 'Data Subject Rights (Decree 13, GDPR, CCPA/CPRA)',
        content: [
          'KD Labs unconditionally honors global privacy frameworks including Vietnam Decree 13/2023/ND-CP, EU GDPR, and the California Consumer Privacy Act (CCPA/CPRA).',
        ],
        subsections: [
          {
            title: '8.1. Exercising Your Legal Rights',
            content: [
              '• Right to Know & Access: You have transparent, real-time access to all stored information directly inside the app interface. No shadow data is stored outside your view.',
              '• Right to Rectification: You can freely edit labels, issuers, and icons directly in the application UI at any moment.',
              '• Right to Erasure (Right to be Forgotten): Because KD Labs retains zero user records on servers, you do not need to submit formal data deletion requests. You execute complete and irreversible erasure yourself by:',
              '    1. Navigating to Device Settings > Apps > Simple OTP > Storage > Clear Data; or',
              '    2. Uninstalling Simple OTP from your device.',
              '• Right to Object & Withdraw Consent: You can revoke camera or storage permissions at any time via Android system settings.',
            ],
          },
        ],
      },
      {
        id: 'childrens-privacy-protection',
        number: '09',
        title: "Children's Privacy Protection (COPPA Compliance)",
        content: [
          'KD Labs software utilities are designed for general audiences and are not directed towards children under 13 years of age (or under 16 within the European Economic Area).',
          'We do not knowingly solicit, collect, or process personal data from children. Given our Zero-Network architecture which collects no user data whatsoever, the risk of child data exploitation within our software is non-existent.',
          'If a parent or guardian discovers that a child has communicated personal details via our support email, please notify support@kd.io.vn for prompt and complete record deletion.',
        ],
      },
      {
        id: 'open-source-transparency',
        number: '10',
        title: 'Open-Source Transparency & Independent Auditing',
        content: [
          'In cryptography and software security, we adhere firmly to Kerckhoffs’s principle: "Don\'t trust, verify." The only credible proof of privacy is unrestricted open-source audibility.',
          'Simple OTP is distributed under the permissive MIT Open Source License at https://github.com/kd-labs-io/simple-otp.',
        ],
        subsections: [
          {
            title: '10.1. Independent Verification Procedure',
            content: [
              'Security researchers, developers, and privacy auditors can independently verify our claims:',
              '1. Inspect AndroidManifest.xml: Confirm the complete absence of android.permission.INTERNET.',
              '2. Audit build.gradle: Verify that no telemetry or ad dependencies are linked.',
              '3. Packet Sniffing: Run Simple OTP within an Android emulator monitored by Wireshark, Charles Proxy, or PCAPdroid. You will observe exactly zero outbound network packets.',
              '4. Reproducible Builds: Clone the GitHub repository and build your own APK directly from source to ensure binary integrity.',
            ],
          },
        ],
      },
      {
        id: 'policy-updates-and-history',
        number: '11',
        title: 'Policy Updates & Version History',
        content: [
          'KD Labs may periodically amend this Privacy Policy to reflect software enhancements, updated regulatory standards, or Google Play Developer Policy revisions.',
          'All updates will be published immediately on this page with an updated version number and effective date. Material alterations will also be highlighted in our Google Play Store "What\'s New" release notes.',
        ],
        table: {
          headers: ['Version', 'Effective Date', 'Summary of Principal Changes'],
          rows: [
            ['1.2.0', 'September 2026', 'Comprehensive 1-page overhaul: added detailed permissions matrix, Google Play Data Safety alignment, Keystore cryptographic analysis, and global compliance clauses.'],
            ['1.0.0', 'June 2026', 'Initial privacy policy published for Simple OTP Google Play launch.'],
          ],
        },
      },
      {
        id: 'developer-contact-and-entity',
        number: '12',
        title: 'Developer Identification & Contact Channels',
        content: [
          'If you have inquiries, privacy concerns, or security vulnerability disclosures regarding this Policy or KD Labs products, please reach our dedicated team through the following official channels:',
        ],
        subsections: [
          {
            title: '12.1. Developer Contact Details',
            content: [
              '• Developer Entity: KD Labs (Independent Mobile & Cryptographic Studio)',
              '• Country of Origin: Vietnam',
              '• Lead Developer: Duy BK',
              '• Official Privacy & Support Email: support@kd.io.vn',
              '• Official Website: https://kd.io.vn',
              '• Open-Source Repository: https://github.com/kd-labs-io/simple-otp',
              '• Service Level Commitment: We endeavor to address all privacy and cryptographic inquiries within 48 business hours.',
            ],
          },
        ],
      },
    ],
    contactBox: {
      title: 'Privacy & Cryptographic Security Inquiries',
      description:
        'Discovered a potential vulnerability or have ideas to bolster Simple OTP’s privacy guarantees? Reach out directly. We actively collaborate with ethical security researchers.',
      entityName: 'KD Labs',
      jurisdiction: 'Vietnam • Serving Users Globally',
      supportEmail: 'support@kd.io.vn',
      githubRepo: 'https://github.com/kd-labs-io/simple-otp',
      gpgKeyNote: 'For sensitive vulnerability disclosures, please reach out via email or submit a private GitHub Security Advisory on our repository.',
    },
  },
};
