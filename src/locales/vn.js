export default {
  // --- Global (Toàn cầu) ---
  brand: 'YanHe',
  nav: {
    home: 'Trang chủ',
    story: 'Câu chuyện',
    education: 'Giáo dục',
    service: 'Nhiệm vụ',
    map: 'Bản đồ',
    login: 'Đăng nhập'
  },
  user: {
    profile: 'Hồ sơ',
    orders: 'Đơn hàng',
    logout: 'Đăng xuất',
    vip_active: 'Pro Đang hoạt động',
    vip_join: 'Tham gia Pro',
    logout_success: 'Đăng xuất thành công'
  },
  loading: {
    map: 'Đang tải bản đồ...',
    audio: 'Đang tải âm thanh...',
    uploading: 'Đang mã hóa và tải lên...'
  },
  login_warn: 'Vui lòng đăng nhập trước',

  // --- Home (Trang chủ) ---
  home: {
    nav: {
      home: 'Trang chủ',
      story: 'Câu chuyện',
      edu: 'Giáo dục',
      task: 'Nhiệm vụ',
      map: 'Bản đồ',
      login: 'Đăng nhập',
      lang_en: 'English'
    },
    hero: {
      badge_1: 'Dự án thí điểm MOE',
      badge_2: 'Hồi sinh nông thôn',
      title_1: 'Kết nối ngôn ngữ',
      title_2: 'Chia sẻ',
      title_high: 'Trí tuệ Trung Hoa',
      desc: 'Nền tảng giáo dục tiếng Trung quốc tế dựa trên tác nhân AI & GIS. Tập hợp các khóa học hàng đầu và dịch vụ dịch thuật chuyên gia.',
      btn_task: 'Trung tâm Nhiệm vụ',
      btn_learn: 'Bắt đầu học',
      patent: 'Bằng sáng chế: ZL2025100XXXX',
      copyright: 'Bản quyền: 2025SRXXXX'
    },
    stats: {
      countries: 'Quốc gia/Vùng',
      experts: 'Chuyên gia ngôn ngữ',
      income: 'Thu nhập TB (CNY)',
      students: 'Học viên phục vụ'
    },
    cards: {
      story_title: 'Câu chuyện Trung Hoa',
      story_desc: 'Cộng đồng nhập vai để khám phá văn hóa đích thực.',
      edu_title: 'Giáo dục Thông minh',
      edu_desc: 'Giảng dạy hỗ trợ bởi AI và đường cong quên lãng Ebbinghaus.',
      task_title: 'Sảnh Nhiệm vụ',
      task_desc: 'Kết nối nhu cầu doanh nghiệp với tài năng đại học.',
      map_title: 'Bản đồ Phương ngữ',
      map_desc: 'Trực quan hóa GIS để bảo vệ văn hóa phương ngữ.'
    }
  },

  // --- AI Chat (Trò chuyện AI) ---
  ai: {
    new_chat: 'Cuộc trò chuyện mới',
    history: {
      today: 'Hôm nay',
      yesterday: 'Hôm qua',
      demo1: 'Chỉnh sửa Email',
      demo2: 'Dịch Hợp đồng',
      demo3: 'Sửa Bài luận'
    },
    guest: 'Khách',
    models: {
      pro_desc: 'Suy luận mạnh mẽ cho các tác vụ phức tạp',
      fast_desc: 'Phản hồi nhanh cho dịch thuật hàng ngày',
      creative_desc: 'Tư duy sáng tạo cho viết quảng cáo'
    },
    clear_chat: 'Xóa trò chuyện',
    welcome_title: 'Tôi là YanHe AI, tôi có thể giúp gì?',
    shortcuts: {
      translate_title: 'Dịch thuật',
      translate_desc: 'Kinh doanh/Luật',
      translate_prompt: 'Hãy dịch cái này sang tiếng Anh thương mại:',
      polish_title: 'Trau chuốt',
      polish_desc: 'Giọng điệu chuyên nghiệp',
      polish_prompt: 'Hãy làm cho email này lịch sự hơn:',
      grammar_title: 'Ngữ pháp',
      grammar_desc: 'Phân tích lỗi',
      grammar_prompt: 'Kiểm tra lỗi ngữ pháp và giải thích lý do:',
      culture_title: 'Văn hóa',
      culture_desc: 'Thành ngữ/Phong tục',
      culture_prompt: 'Giải thích bối cảnh văn hóa của thành ngữ này:'
    },
    input_placeholder: 'Nhập tin nhắn (Shift + Enter để xuống dòng)...',
    disclaimer: 'Nội dung do AI tạo có thể có lỗi. Vui lòng kiểm tra thủ công các tài liệu quan trọng.',
    copy: 'Sao chép',
    retry: 'Thử lại',
    cleared: 'Đã xóa trò chuyện',
    copied: 'Đã sao chép vào bảng nhớ tạm',
    error_msg: 'Lỗi mạng, vui lòng thử lại sau',
    mock: {
      default: "Đây là phản hồi mô phỏng của AI.\n\n1. **Chuyên nghiệp**: Tôi điều chỉnh giọng điệu theo ngữ cảnh.\n2. **Chính xác**: Dựa trên kho dữ liệu khổng lồ.\n\nVui lòng cung cấp thêm ngữ cảnh để có câu trả lời chi tiết.",
      trans: "Đây là kết quả dịch:\n\n**Ngữ cảnh Kinh doanh**:\n> The contract shall come into force upon signature.\n\n**Phân tích**:\nSử dụng 'come into force' thay vì 'start' để tăng tính trang trọng.",
      polish: "Gợi ý cải thiện:\n\n**Gốc**: I want to ask if you can give me a discount.\n**Tối ưu**: Could you please consider offering a discount?\n\n**Lý do**: 'Could you please' lịch sự và chuyên nghiệp hơn."
    }
  },

  // --- Login (Đăng nhập) ---
  login: {
    back_home: 'Về trang chủ',
    brand: {
      ent_title: 'Kết nối Tài năng<br>Toàn cầu',
      ent_desc: 'Tham gia hệ sinh thái YanHe, đăng tải nhu cầu của bạn.',
      ind_title: 'Kiếm tiền từ Tri thức<br>Xuất khẩu Văn hóa',
      ind_desc: 'Nền tảng dành riêng cho tài năng ngôn ngữ đại học.',
      badge_title: 'Thành tựu',
      badge_gold: 'Dịch giả được chứng nhận',
      badge_silver: 'Top 100',
      badge_bronze: 'Ngôi sao Chăm chỉ'
    },
    role_ent: 'Doanh nghiệp',
    role_ind: 'Sinh viên',
    welcome: 'Chào mừng trở lại',
    sub_ent: 'Đăng nhập Doanh nghiệp',
    sub_ind: 'Đăng nhập Sinh viên/Giáo viên',
    placeholder: {
      ent_account: 'ID Doanh nghiệp / Email',
      ind_account: 'SĐT / Mã SV',
      password: 'Mật khẩu',
      org_name: 'Tên Doanh nghiệp',
      school: 'Đại học',
      phone_email: 'SĐT / Email',
      set_password: 'Đặt mật khẩu'
    },
    remember: 'Ghi nhớ tôi',
    forgot: 'Quên mật khẩu?',
    btn_login: 'Đăng nhập',
    logging_in: 'Đang đăng nhập...',
    no_account: 'Chưa có tài khoản?',
    to_register: 'Đăng ký',
    create_account: 'Tạo tài khoản',
    join_ent: 'Gia nhập YanHe, tuyển dụng người giỏi nhất',
    join_ind: 'Gia nhập YanHe, phát triển cùng chúng tôi',
    agree_prefix: 'Tôi đồng ý với',
    agreement: 'Điều khoản Dịch vụ',
    btn_register: 'Đăng ký',
    has_account: 'Đã có tài khoản?',
    to_login: 'Đăng nhập',
    msg: {
      input_error: 'Vui lòng nhập tài khoản và mật khẩu',
      login_success: 'Đăng nhập thành công',
      agree_error: 'Vui lòng chấp nhận các điều khoản',
      register_success: 'Yêu cầu đăng ký đã được gửi'
    }
  },

  // --- Upload (Tải lên) ---
  upload: {
    title: 'Thiết bị Thu thập Phương ngữ',
    db_connected: 'ĐÃ KẾT NỐI DB',
    guest_id: 'KHÁCH',
    recording_hint: 'Đang ghi âm... Nhấn để dừng',
    start_hint: 'Nhấn để ghi âm',
    form: {
      location_label: 'Địa điểm Phương ngữ',
      location_placeholder: 'vd: Thành Đô, Tứ Xuyên',
      meaning_label: 'Ý nghĩa (Meaning)',
      meaning_placeholder: 'Câu này có nghĩa là gì?',
      tags_label: 'Thẻ'
    },
    tags: {
      daily: 'Hàng ngày',
      nursery: 'Đồng dao',
      slang: 'Tiếng lóng'
    },
    btn_submit: 'Tải lên YanHe DB',
    loading_text: 'Đang mã hóa và tải lên...',
    success_msg: 'Tải lên thành công! Cảm ơn sự đóng góp của bạn.'
  },

  // --- Culture Map (Bản đồ Văn hóa) ---
  culture: {
    navbar: {
      subtitle: 'YANHE DIALECT',
      explore: 'Khám phá',
      pro: 'PRO',
      passport: 'Hộ chiếu'
    },
    tabs: {
      learn: 'Học',
      ai: 'Đánh giá AI',
      upload: 'Đóng góp'
    },
    cities: {
      Beijing: {
        name: 'Tiếng Quan Thoại Bắc Kinh',
        intro: 'Giọng lưỡi uốn đặc trưng với nhịp điệu độc đáo.',
        tags: ['Uốn lưỡi', 'Hài hước'],
        words: [
          { text: 'Ju Qi (Nghĩa khí)', ipa: 'tɕy35 tɕʰi' },
          { text: 'Mei Pu Er (Không đáng tin)', ipa: 'mei21 xu' }
        ],
        aiModels: [
          { name: 'Bắc Kinh Cổ (Trang trọng)' }, { name: 'Bắc Kinh Mới (Thông tục)' }, { name: 'Giọng Nam Thành' }
        ],
        aiChallenge: { word: 'Đây mới là chính gốc!' }
      },
      Shanghai: {
        name: 'Tiếng Ngô Thượng Hải',
        intro: 'Thanh điệu nhẹ nhàng phản ánh sự thanh lịch của văn hóa Thượng Hải.',
        tags: ['Nhẹ nhàng', 'Thanh lịch'],
        words: [
          { text: 'Nong Hao (Xin chào)', ipa: 'nɔŋ hɔ' },
          { text: 'A La (Chúng tôi)', ipa: 'a la' }
        ],
        aiModels: [
          { name: 'Thượng Hải Cũ' }, { name: 'Thượng Hải Mới' }
        ],
        aiChallenge: { word: 'Bạn ăn cơm chưa?' }
      }
    },
    ai: {
      model_base: 'Mô hình cơ sở:',
      read_guide: 'Vui lòng đọc bằng giọng {model}:',
      listen_sample: 'Nghe mẫu',
      analyzing: 'Đang xây dựng đường cong thanh điệu...',
      comparing: 'Đang so sánh âm vị {city}...',
      analyzing_voice: 'Đang phân tích giọng nói...',
      release_stop: 'Thả để dừng',
      long_press: 'Nhấn giữ để ghi âm',
      score_unit: 'Điểm',
      tone_analysis: 'Phân tích Thanh điệu',
      retry: 'Thử lại',
      comment_good: 'Tuyệt vời! Khớp 98% với người bản xứ.',
      comment_avg: 'Tốt, nhưng biến điệu có thể cải thiện.',
      dimensions: {
        tone: 'Ngữ điệu',
        clarity: 'Rõ ràng',
        emotion: 'Cảm xúc'
      }
    },
    passport: {
      title: 'Hộ chiếu',
      close: 'Đóng'
    }
  },

  // --- Unlock Pro (Mở khóa Pro) ---
  unlock: {
    nav_title: 'Trung tâm Hội viên',
    restore_purchase: 'Khôi phục',
    pro_title: 'YANHE PRO',
    pro_desc: 'Mở khóa Bản đồ đầy đủ · Đối thoại AI sâu · Khóa học Offline',
    benefits: {
      ai: { title: 'Sửa lỗi AI', desc: 'Không giới hạn' },
      map: { title: 'Bản đồ đầy đủ', desc: '50+ Thành phố' },
      npc: { title: 'Bậc thầy Số', desc: 'Đối thoại nâng cao' }
    },
    plans: {
      year_tag: 'Sinh viên giảm 90%',
      unit_year: 'Năm',
      year_desc: 'Chỉ 0.13 CNY/Ngày',
      unit_month: 'Tháng',
      month_tag: 'Thử nghiệm'
    },
    compare: {
      title: 'So sánh',
      col_feature: 'Tính năng',
      col_free: 'Miễn phí',
      row_ai: 'Điểm AI',
      val_limit: '3/Ngày',
      row_map: 'Khám phá Bản đồ',
      val_map_limit: '3 Thành phố',
      val_all: 'Tất cả',
      row_npc: 'Bậc thầy Số',
      val_unlock: 'Mở khóa'
    },
    agreement: 'Đăng ký đồng nghĩa với việc chấp nhận Điều khoản. Hủy bất cứ lúc nào.',
    total: 'Tổng cộng',
    btn_pay: 'Thanh toán ngay',
    login_warn: 'Vui lòng đăng nhập để mua',
    verifying: 'Đang xác minh thanh toán...',
    success_msg: '🎉 Chúc mừng! YanHe PRO đã được kích hoạt.',
    pay_modal: {
      title: 'Quầy thu ngân YanHe',
      amount: 'Số tiền',
      scan_tip: 'Quét bằng WeChat / Alipay',
      btn_mock: 'Mô phỏng Thành công'
    }
  },

  // --- AI Debate (Tranh biện AI) ---
  debate: {
    header: {
      end_chat: 'Kết thúc',
      topic_label: 'Chủ đề:',
      status_online: 'Bậc thầy Trực tuyến'
    },
    topics: {
      business: 'Đàm phán Kinh doanh',
      history: 'Logic Lịch sử',
      philosophy: 'Triết học Nho giáo',
      general: 'Đối thoại Chung'
    },
    chat: {
      welcome_prefix: 'Vì bạn đã bước vào học viện, bạn hẳn ở đây để thảo luận về',
      welcome_suffix: '.',
      welcome_invite: 'Xin hãy trình bày lập luận của bạn, tôi đang lắng nghe.',
      thinking: 'Bậc thầy đang suy nghĩ...',
      ai_reply_prefix: 'Những gì bạn nói về',
      ai_reply_body: 'có lý. Tuy nhiên, về lâu dài, "Dục tốc bất đạt". Trong đàm phán, chiến lược đó có thể phản tác dụng.'
    },
    footer: {
      input_placeholder: 'Nhập lập luận của bạn (Hỗ trợ giọng nói)...',
      send_btn: 'Tranh biện'
    }
  },

  // --- Education (Giáo dục) ---
  education: {
    hero: {
      title: '<i class="bi bi-cpu"></i> Bậc thầy Kỹ thuật số AI · Tranh biện Sâu',
      desc: 'Hơn cả trò chuyện đơn giản. Tham gia các cuộc tranh biện cấp cao về <strong>Triết học</strong> hoặc <strong>Kinh doanh</strong> với AI.',
      btn_business: 'Trận chiến Kinh doanh',
      btn_history: 'Tranh biện Lịch sử'
    },
    memory: {
      title: 'Trạm Ký ức',
      current_dict: 'Bộ từ hiện tại',
      forget_alert: 'Cảnh báo Ebbinghaus: <strong class="text-warning">{count}</strong> từ sẽ bị quên hôm nay.',
      saturation: 'Độ bão hòa',
      review_now: 'Ôn tập ngay'
    },
    search_placeholder: 'Tìm kiếm: Tiếng Trung Kinh doanh / Tây Tạng / Thơ ca...',
    btn_search: 'Tìm kiếm',
    tags: {
      all: 'Tất cả',
      hsk: 'Cấp độ HSK',
      business: 'Kinh doanh',
      culture: 'Văn hóa',
      dialect: 'Phương ngữ',
      ethnic: 'Dân tộc'
    },
    courses_title_all: 'Khóa học Nổi bật',
    courses_suffix: 'Khóa học',
    course_source: {
      original: 'Gốc',
      master: 'Lớp Cao cấp',
      culture: 'Văn hóa',
      dialect: 'Phương ngữ'
    },
    courses: {
      c1: { title: 'Từ số 0 đến HSK 3: Đường tắt' },
      c2: { title: 'Đàm phán: Mặc cả bằng tiếng Trung' },
      c3: { title: 'Thơ Đường & Tống' },
      c4: { title: 'Phương ngữ Tứ Xuyên 101: Bắt đầu với "Ba Shi"' }
    },
    free: 'Miễn phí',
    ethnic: {
      title: 'Kế hoạch Bảo vệ Ngôn ngữ',
      subtitle: 'Tiếng nói của 56 Dân tộc',
      btn_enter: 'Vào',
      items: {
        tibetan: { lang: 'Tây Tạng', desc: 'Tiếng nói của cao nguyên tuyết' },
        uyghur: { lang: 'Duy Ngô Nhĩ', desc: 'Viên ngọc Con đường Tơ lụa' },
        zhuang: { lang: 'Choang', desc: 'Dân ca Lưu Tam Tỷ' }
      }
    },
    vip_modal: {
      title: 'YanHe Academy PRO',
      desc: 'Mở khóa Đặc quyền Văn hóa Cao cấp',
      ben_1: 'Tranh biện AI Sâu',
      ben_2: 'Lớp Cao cấp Di sản',
      ben_3: 'Dịch Phương ngữ Trực tiếp',
      ben_4: 'Chứng chỉ Vật lý',
      btn_pay: 'Mở khóa (từ ¥12.9)'
    },
    vip_required: 'Đây là khóa học trả phí. Vui lòng đăng ký PRO.'
  },

  // --- Checkout (Thanh toán) ---
  checkout: {
    secure_ssl: 'UnionPay SSL Bảo mật',
    unit_year: 'Năm',
    countdown_prefix: 'Giá đã chốt, thanh toán trong',
    countdown_suffix: '',
    course_info: 'Thông tin khóa học',
    escrow_detail: 'Chi tiết Ký quỹ',
    payment_method: 'Phương thức thanh toán',
    pay_wechat: 'WeChat Pay',
    pay_wechat_desc: 'Khuyên dùng, Nhanh & An toàn',
    pay_alipay: 'Alipay',
    pay_alipay_desc: 'Hỗ trợ Huabei',
    pay_card: 'UnionPay / Thẻ',
    pay_card_desc: 'Hỗ trợ chuyển khoản doanh nghiệp',
    need_invoice: 'Tôi cần hóa đơn',
    summary_title: 'Tóm tắt',
    price_original: 'Giá gốc',
    price_student: 'Giảm giá Sinh viên',
    price_tax: 'Thuế',
    price_course_orig: 'Giá Khóa học',
    price_discount: 'Ưu đãi có hạn',
    price_bounty: 'Tiền thưởng Nhiệm vụ',
    price_service_fee: 'Phí dịch vụ (5%)',
    price_expedite: 'Phí khẩn cấp',
    total_due: 'Tổng thanh toán',
    processing: 'Đang xử lý...',
    guarantee: 'Tiền được nền tảng bảo đảm, hoàn tiền trong 7 ngày',
    btn_home: 'Trang chủ',
    btn_experience: 'Bắt đầu',
    btn_pay_now: 'Thanh toán ngay',
    btn_pay: 'Thanh toán',
    btn_escrow: 'Ký quỹ',
    demo: {
      label: 'Chế độ Demo:',
      scenario_a: 'A: Hội viên',
      scenario_b: 'B: Khóa học',
      scenario_c: 'C: Ký quỹ Nhiệm vụ'
    },
    products: {
      membership: {
        title: 'YanHe Pro Hàng năm',
        desc: 'Ưu đãi Sinh viên | Truy cập 365 ngày',
        feat1: 'Mở khóa tất cả kịch bản phương ngữ',
        feat2: 'Sửa lỗi AI không giới hạn',
        feat3: 'Bản đồ Cao cấp & Avatar'
      },
      course: {
        title: 'Tiếng Trung Kinh doanh: Đàm phán',
        tag: 'Khóa đơn lẻ',
        detail: 'Bao gồm: 45 phút Video + Thuật ngữ + Thực hành AI'
      },
      task: {
        title: 'Ký quỹ: Dịch thuật Pháp lý',
        tag: 'Đảm bảo bởi Nền tảng',
        detail: 'Đơn hàng #88392\nThanh toán được giải ngân sau khi hài lòng.'
      }
    },
    success: {
      membership: { title: 'Chào mừng Pro!', desc: 'Quyền lợi đã kích hoạt. Tận hưởng tính năng cao cấp.' },
      course: { title: 'Đã mở khóa Khóa học!', desc: 'Vào "Khóa học của tôi" để bắt đầu.' },
      task: { title: 'Đã ký quỹ', desc: 'Nhiệm vụ đã đăng. Bạn sẽ nhận thông báo khi được chấp nhận.' }
    }
  },

  // --- Search (Tìm kiếm) ---
  search: {
    nav_back: 'Trang chủ',
    placeholder: 'Tìm nhiệm vụ, tài năng, khóa học...',
    default_keyword: 'Dịch thuật',
    tabs: {
      all: 'Tất cả',
      task: 'Nhiệm vụ',
      user: 'Tài năng',
      course: 'Khóa học'
    },
    tags: {
      task: 'Nhiệm vụ',
      user: 'Tài năng',
      course: 'Khóa học'
    },
    result_stat: 'Tìm thấy {count} kết quả cho "{keyword}"',
    empty: {
      title: 'Không có kết quả, thử từ khóa khác?',
      tip: '(Thử: Dịch thuật, Pháp lý, Kinh doanh, Jack)'
    },
    btn_contact: 'Liên hệ',
    score: 'Điểm',
    msg_contact: 'Đã gửi yêu cầu hợp tác đến {name}!'
  },

  // --- Chat (Tin nhắn) ---
  chat: {
    nav_back: 'Trang chủ',
    title: 'Trung tâm Tin nhắn',
    search_placeholder: 'Tìm liên hệ...',
    typing: 'Đang nhập...',
    menu_profile: 'Xem Hồ sơ',
    menu_report: 'Báo cáo',
    input_placeholder: 'Nhấn Enter để gửi...'
  },

  // --- Service Hall (Sảnh Nhiệm vụ) ---
  service: {
    role: {
      creator: 'Tôi là Người làm (Tìm việc)',
      client: 'Tôi là Khách hàng (Đăng việc)'
    },
    search: {
      placeholder_creator: 'Tìm nhiệm vụ: Dịch thuật, Lồng tiếng...',
      placeholder_client: 'Tìm tài năng: TEM-8, Phiên dịch...',
      btn: 'Tìm kiếm'
    },
    recommend_title: 'Nhiệm vụ Đề xuất',
    sort_newest: 'Sắp xếp: Mới nhất',
    task_types: {
      business: 'Kinh doanh',
      dialect: 'Phương ngữ',
      urgent: 'Khẩn cấp'
    },
    status: {
      recruiting: 'Tuyển dụng',
      joined: '{count}/{total} Đã tham gia'
    },
    auth_card: {
      title: 'Xác minh Tài năng ĐH',
      desc: 'Xác minh trạng thái BSU/BFSU cho nhiệm vụ cao cấp & 0 phí.',
      btn: 'Xác minh'
    },
    rank: {
      title: 'Top Thu nhập Tuần'
    },
    client: {
      post_title: 'Đăng Thưởng Cao cấp',
      post_desc: 'Cho nhu cầu phức tạp. Kết nối 12,000+ tài năng.',
      tag_escrow: 'Ký quỹ',
      tag_audit: 'Đánh giá mù',
      btn_post: 'Đăng',
      ai_title: 'Dịch vụ AI Tốc hành',
      ai_desc: 'Cho nhiệm vụ đơn giản. Hỗ trợ bởi YanHe LLM, phản hồi tức thì.',
      tag_fast: 'Tức thì',
      btn_ai: 'Thử AI'
    },
    market: {
      title: 'Tham khảo Giá thị trường',
      tags: {
        law: 'Pháp lý',
        interpreting: 'Phiên dịch',
        dubbing: 'Giọng nói',
        writing: 'Viết'
      },
      disclaimer: '* Dữ liệu dựa trên trung bình 30 ngày.'
    }
  },

  // --- Service Detail (Chi tiết Nhiệm vụ) ---
  service_detail: {
    nav_back: 'Về Sảnh',
    breadcrumb_cat: 'Dịch thuật & Bản địa hóa',
    breadcrumb_current: 'Chi tiết',
    meta: {
      escrow: 'Quỹ được bảo đảm',
      urgent: 'Khẩn cấp',
      views: '{count} Lượt xem',
      id_label: 'ID Nhiệm vụ'
    },
    section: {
      background: 'Bối cảnh',
      duties: 'Trách nhiệm',
      skills: 'Yêu cầu',
      questions: 'Câu hỏi sàng lọc',
      attachment: 'Tệp đính kèm'
    },
    attachment_hint: '2.4 MB · Để xem trước',
    bids: {
      title: 'Hoạt động ({count})',
      stat_joined: 'Ứng tuyển',
      stat_chat: 'Đang chat',
      stat_active: 'Hoạt động',
      stat_rate: 'Tỷ lệ thuê',
      submit_time: 'Gửi 5 phút trước'
    },
    sidebar: {
      budget_label: 'Ngân sách (Cố định)',
      unit: 'CNY'
    },
    btn: {
      apply: 'Ứng tuyển',
      applied: 'Đã ứng tuyển',
      chat: 'Chat'
    },
    action: {
      collect: 'Lưu',
      share: 'Chia sẻ',
      report: 'Báo cáo'
    },
    client: {
      title: 'Thông tin Khách hàng',
      verified: 'Công ty đã xác minh',
      loc: 'Địa điểm',
      tasks: 'Đã đăng',
      spent: 'Đã chi',
      rate: 'Tỷ lệ thuê'
    },
    similar_title: 'Có thể bạn thích',
    similar_demo: 'Chỉnh sửa bài luận đại học',
    similar_tag: 'Viết',
    modal: {
      title: 'Gửi Đề xuất',
      fee_tip: 'Nền tảng thu 10% phí dịch vụ sau khi hoàn thành.',
      price_label: 'Báo giá của bạn (¥)',
      income_calc: 'Ước tính nhận',
      days_label: 'Thời lượng',
      day_unit: 'Ngày',
      urgent_opt: 'Khẩn cấp',
      letter_label: 'Thư giới thiệu',
      letter_ph: 'Tại sao bạn là người tốt nhất cho công việc này?',
      ai_polish: 'Trau chuốt AI',
      ai_done: 'Đã trau chuốt!',
      upload_label: 'Hồ sơ năng lực/CV',
      cancel: 'Hủy',
      confirm: 'Gửi',
      submitting: 'Đang gửi...',
      success_msg: '✅ Đã gửi đề xuất! Chờ khách hàng liên hệ.'
    }
  },

  // --- Publish Task (Đăng Nhiệm vụ) ---
  publish: {
    nav_title: 'Tạo Nhiệm vụ',
    nav_subtitle: 'Bảo đảm bởi YanHe',
    steps: {
      desc: 'Mô tả',
      budget: 'Ngân sách'
    },
    types: {
      translation: 'Dịch thuật',
      dubbing: 'Lồng tiếng',
      polish: 'Hiệu đính',
      custom: 'Tùy chỉnh'
    },
    form: {
      type_label: 'Danh mục',
      title_label: 'Tiêu đề',
      title_ph: 'vd: Dịch hợp đồng pháp lý 5000 từ',
      desc_label: 'Chi tiết',
      desc_ph: 'Mô tả bối cảnh, đối tượng, thuật ngữ...',
      upload_label: 'Đính kèm (Tùy chọn)',
      upload_hint: 'Nhấp hoặc kéo tệp vào đây'
    },
    btn_next: 'Tiếp: Ngân sách',
    btn_back: 'Quay lại',
    modes: {
      normal: { title: 'Tiêu chuẩn', desc: 'Một người nhận tất cả' },
      contest: { title: 'Cuộc thi (Khuyên dùng)', desc: 'Nhiều bài nộp, một người thắng' }
    },
    step2: {
      mode_title: 'Chế độ Hợp tác',
      budget_label: 'Ngân sách',
      budget_hint: 'Quỹ được giữ trong ký quỹ cho đến khi phê duyệt.',
      contest_alert: 'Ngân sách chia thành Quỹ Tham gia và Giải Người thắng.',
      total_budget: 'Tổng Ngân sách',
      max_people: 'Số bài tối đa',
      recommend: 'Đề xuất',
      pool_entry: 'Quỹ Tham gia',
      per_person: 'TB',
      pool_winner: 'Giải Người thắng',
      deadline: 'Hạn chót',
      deadline_ph: 'Chọn ngày',
      urgent_opt: 'Khẩn cấp (+ ¥20.00)',
      expert_opt: 'Chỉ chuyên gia đã xác minh'
    },
    footer: {
      total_label: 'Tổng Ký quỹ',
      submitting: 'Đang gửi...',
      btn_pay: 'Đăng & Thanh toán'
    },
    msg_title_required: 'Vui lòng nhập tiêu đề',
    msg_budget_invalid: 'Vui lòng nhập ngân sách hợp lệ',
    msg_success: 'Đã tạo! Chuyển hướng thanh toán...'
  },

  // --- Story AI (Câu chuyện AI) ---
  story_ai: {
    title: 'Bộ công cụ Cảm hứng',
    welcome: {
      greeting: 'Xin chào. Tôi là Trợ lý Học giả YanHe.',
      desc: 'Gặp khó khăn với câu chuyện Trung Hoa của bạn? Dù là trau chuốt văn bản, điển cố hay dịch thuật, tôi ở đây.'
    },
    card_tag: 'Bút AI',
    actions: {
      polish: 'Trau chuốt văn bản',
      polish_prompt: 'Làm cho văn bản này thơ mộng và cổ điển hơn:',
      fest: 'Lễ hội',
      fest_prompt: 'Văn bản hay cho Tết Trung Thu kèm bản dịch',
      culture: 'Di sản',
      culture_prompt: 'Giới thiệu di sản văn hóa phi vật thể này:'
    },
    input_ph: 'Hỏi tôi bất cứ điều gì...',
    copied: 'Đã sao chép vào bảng nhớ tạm'
  },

  // --- Detail Paper (Chi tiết Cuộn giấy) ---
  detail_paper: {
    nav_back: 'Quay lại Cuộn giấy',
    date_prefix: 'Ghi lại lúc',
    date_suffix: '',
    btn_follow: 'Theo dõi',
    btn_following: 'Đang theo dõi',
    comment_title: 'Bình luận',
    seal_like: 'Thích',
    seal_liked: 'Đã thích',
    input_ph: 'Viết bình luận...',
    msg_followed: 'Đã theo dõi',
    msg_unfollowed: 'Đã bỏ theo dõi',
    me: 'Tôi'
  },

  // --- Publish Paper (Đăng Bài) ---
  publish_paper: {
    nav: {
      cancel: 'Hủy',
      title: 'Câu chuyện mới',
      publish: 'Ký & Đăng'
    },
    upload: {
      change: 'Đổi Phương tiện',
      placeholder: 'Tải lên Ảnh/Video'
    },
    form: {
      title_ph: 'Tiêu đề ở đây...',
      ai_btn: 'Trau chuốt AI',
      content_ph: 'Ghi lại suy nghĩ của bạn...',
      topic_label: 'Chủ đề',
      loc_label: 'Vị trí',
      loc_ph: 'Lấy vị trí'
    },
    tags: ['Trung Hoa Mới', 'Hán phục hàng ngày', 'Di sản', 'Ẩm thực đường phố', 'Kiến trúc cổ', 'Dạo phố'],
    loc_finding: 'Đang định vị...',
    ai_processing: 'AI đang trau chuốt...',
    publishing: 'Đang đăng...',
    msg_max_tags: 'Tối đa 3 chủ đề',
    msg_no_title: 'Vui lòng nhập tiêu đề trước',
    msg_ai_done: 'Đã trau chuốt!',
    msg_success: 'Đăng thành công'
  },

  // --- Culture Scroll (Cuộn văn hóa) ---
  culture_scroll: {
    nav_back: 'Quay lại Cổng',
    brand_sub: 'Hồi ký',
    intro: {
      title: 'Nhật ký',
      desc: 'Kết nối Ngôn ngữ<br>Chia sẻ Trí tuệ'
    },
    seal: {
      like: 'Thích',
      liked: 'Đã đọc'
    },
    end_card: {
      title: 'Còn tiếp...',
      desc: 'Nhấn để viết câu chuyện của bạn'
    },
    fab_write: 'Viết',
    modal: {
      title: 'Ghi lại gì?',
      opt_ai: 'Cảm hứng AI',
      opt_photo: 'Ảnh/Câu chuyện',
      opt_write: 'Bài viết dài'
    },
    location_default: 'Trung Quốc'
  },

  // --- Writer (Người viết) ---
  writer: {
    nav: {
      back: 'Đóng Cuộn giấy',
      status_saved: 'Mực đã khô',
      status_writing: 'Đang viết...',
      publish: 'Đăng'
    },
    cover: {
      change: 'Đổi Bìa',
      add: 'Thêm Bìa (Tùy chọn)'
    },
    editor: {
      title_ph: 'Nhập Tiêu đề',
      author_suffix: '',
      content_ph: 'Bắt đầu viết câu chuyện của bạn ở đây...',
      ai_btn: 'AI Viết tiếp',
      ai_tip: 'AI'
    },
    msg: {
      anonymous: 'Ẩn danh',
      ai_loading: 'AI đang nghĩ...',
      ai_done: 'Đã viết tiếp xong',
      validate_error: 'Tiêu đề và nội dung không được để trống',
      success: 'Đăng thành công'
    }
  },

  // --- Course Player (Trình phát khóa học) ---
  player: {
    nav: {
      demo_mode: 'Chế độ Demo',
      demo_exit: 'Thoát Demo',
      back: 'Quay lại'
    },
    lock: {
      title: 'Nội dung Cao cấp',
      desc: 'Mở khóa chương này và tất cả video tình huống',
      btn_unlock: 'Mở khóa (¥ {price})',
      btn_trial: 'Thử 30s'
    },
    resume_tip: 'Tiếp tục tại {time}, nhấn để nhảy',
    tools: {
      label: 'Công cụ',
      pinyin: 'Pinyin',
      pinyin_ph: 'Chọn',
      pinyin_tip: 'Nhấn để sao chép:',
      quiz: 'Câu hỏi',
      fav: 'Yêu thích',
      faved: 'Đã lưu'
    },
    ctrl: {
      speed: 'Tốc độ',
      sub_cn: 'CN',
      sub_en: 'VN', // Changed to VN for context
      sub_both: 'Cả hai',
      subtitle: 'Phụ đề'
    },
    meta: {
      views: 'lượt xem',
      key_points: 'Điểm chính'
    },
    playlist: {
      title: 'Danh sách phát',
      tabs: {
        all: 'Tất cả',
        grammar: 'Bài giảng',
        scenario: 'Tình huống',
        culture: 'Văn hóa'
      }
    },
    tags: {
      free: 'Miễn phí',
      unlocked: 'Đã mở',
      paid: 'Trả phí'
    },
    ai: {
      title: 'Gia sư AI',
      welcome: 'Xin chào! Tôi là Trợ lý AI của bạn.',
      input_ph: 'Đặt câu hỏi...',
      mock_reply: 'Câu hỏi hay! "{input}" trong bối cảnh kinh doanh thường có nghĩa là...'
    },
    quiz: {
      title: 'Quiz - Nghi thức Kinh doanh',
      score: 'Điểm',
      btn_submit: 'Gửi',
      msg_perfect: 'Hoàn hảo! Làm tốt lắm!'
    },
    msg_jumped: 'Đã nhảy đến {time}',
    msg_faved: 'Đã thêm vào yêu thích',
    msg_unfaved: 'Đã xóa khỏi yêu thích',
    msg_copied: 'Đã sao chép: {char}'
  },

  // --- Review Center (Trung tâm Ôn tập) ---
  review: {
    header: {
      title_menu: 'Ôn tập Thông minh',
      title_flash: 'Thẻ ghi nhớ',
      title_phonics: 'Ngữ âm AI',
      title_quiz: 'Quiz Tốc độ',
      streak: '{day} Ngày liên tiếp'
    },
    menu: {
      title: 'Chọn Chế độ Ôn tập',
      flash: { title: 'Thẻ ghi nhớ', desc: 'Hệ thống Lặp lại Ngắt quãng', badge: 'Đến hạn: {count}' },
      phonics: { title: 'Ngữ âm AI', desc: 'Phân tích phát âm thời gian thực', badge: 'Mới: {count}' },
      quiz: { title: 'Quiz Tốc độ', desc: 'Thử thách 30s', badge: 'Kỷ lục: {score}' }
    },
    flash: {
      tag: 'Từ vựng Kinh doanh Cơ bản',
      hint_flip: 'Nhấn để lật',
      kb_hint_prefix: 'Nhấn',
      kb_space: 'Space',
      kb_hint_suffix: 'để lật',
      btn_show: 'Xem Đáp án',
      grade: { again: 'Lại', hard: 'Khó', good: 'Tốt', easy: 'Dễ' }
    },
    phonics: {
      status_recording: 'Đang nghe...',
      status_idle: 'Nhấn mic để ghi âm',
      score_unit: 'điểm',
      fb_perfect: 'Hoàn hảo! Như người bản xứ!',
      fb_good: 'Tốt! Chú ý âm đuôi.'
    },
    quiz: {
      msg_wrong: 'Sai! Đáp án là: {ans}'
    },
    btn_next: 'Tiếp theo',
    finish: {
      title: 'Hoàn thành Phiên!',
      desc: 'Bạn đã ôn tập {count} mục. Trí nhớ +5%',
      btn_back: 'Về Menu'
    }
  },

  // --- Badge Wall (Tường Huy hiệu) ---
  badge: {
    nav_back: 'Về Hồ sơ',
    header: {
      title: 'Tường Thành tựu',
      subtitle: 'Theo dõi sự phát triển và đóng góp của bạn.',
      unlocked: 'Đã mở khóa',
      percentile: 'Top {percent}%'
    },
    tabs: {
      all: 'Tất cả',
      unlocked: 'Đã mở',
      locked: 'Chưa mở',
      ssr: 'Hiếm (SSR)'
    },
    status_locked: 'Bị khóa',
    level_badge: 'Huy hiệu',
    meta: {
      condition: 'Yêu cầu',
      unlocked_at: 'Mở khóa lúc',
      progress: 'Tiến độ'
    },
    btn_close: 'Đóng',
    btn_share: 'Chia sẻ'
  },

  // --- Cert (Chứng nhận ĐH) ---
  cert: {
    nav_back: 'Về Sảnh',
    hero: {
      title: 'Xác minh Tài năng Đại học',
      subtitle: 'Tham gia nhóm chuyên gia YanHe, kiếm tiền từ kỹ năng của bạn.'
    },
    benefits: {
      free: { title: '0% Phí', desc: 'Không hoa hồng cho cựu sinh viên' },
      priority: { title: 'Ưu tiên', desc: 'Nhiệm vụ cao cấp trước' },
      cert: { title: 'Chứng chỉ', desc: 'Bằng chứng thực tập chính thức' }
    },
    form: {
      step1: 'Bước 1: Thông tin cơ bản',
      name_label: 'Tên thật',
      name_ph: 'Như trên thẻ sinh viên',
      school_label: 'Đại học',
      school_ph: 'Chọn',
      schools: {
        bsu: 'ĐH Thể thao Bắc Kinh (BSU)',
        bfsu: 'ĐH Ngoại ngữ Bắc Kinh',
        blcu: 'ĐH Ngôn ngữ & Văn hóa Bắc Kinh',
        other: 'Khác'
      },
      major_label: 'Khoa/Ngành',
      major_ph: 'vd: Khoa Tiếng Anh',
      id_label: 'Mã Sinh viên',
      id_ph: 'Nhập ID',
      step2: 'Bước 2: Xác minh',
      upload_label: 'Tải lên Thẻ SV (Mặt trước)',
      drag_text: 'Kéo thả tệp vào đây hoặc',
      click_upload: 'Nhấn để Tải lên',
      upload_tip: 'Chỉ JPG/PNG, tối đa 5MB',
      agree: 'Tôi xác nhận thông tin và đồng ý điều khoản YanHe.',
      btn_submit: 'Gửi',
      submitting: 'Đang gửi...'
    },
    msg: {
      agree_warn: 'Vui lòng chấp nhận điều khoản',
      info_warn: 'Vui lòng điền thông tin cơ bản',
      success: '🎉 Đã gửi! Xem xét trong 24h.'
    }
  },

  // --- User Profile (Hồ sơ Người dùng) ---
  profile: {
    unnamed: 'Chưa đặt tên',
    menu: {
      edit: 'Sửa Hồ sơ',
      badge: 'Tường Huy hiệu',
      vip: 'Trung tâm Hội viên'
    },
    header: {
      edit_cover: 'Ảnh bìa',
      verified: 'Đã xác minh',
      no_bio: 'Chưa có tiểu sử',
      btn_edit: 'Sửa Hồ sơ',
      btn_share: 'Chia sẻ'
    },
    stats: {
      following: 'Đang theo dõi',
      followers: 'Người theo dõi',
      likes: 'Thích'
    },
    badges: {
      title: 'Huy hiệu Danh dự',
      all: 'Tất cả'
    },
    tabs: {
      overview: 'Tổng quan',
      learning: 'Học tập',
      posts: 'Bài đăng',
      collections: 'Bộ sưu tập'
    },
    overview: {
      heat_title: 'Hoạt động',
      heat_sub: 'Tổng {hours} giờ năm nay',
      visitors: 'Khách gần đây',
      vip_title: 'Quyền lợi PRO',
      vip_date: 'Có hiệu lực đến 2027.01.01',
      vip_desc: 'Mở khóa sửa lỗi AI & dịch không giới hạn',
      btn_renew: 'Quản lý',
      btn_unlock: 'Mở khóa ngay'
    },
    learning: {
      next: 'Tiếp theo',
      continue: 'Tiếp tục'
    },
    posts: {
      time_ago: '2g trước',
      demo_content: 'Đây là nội dung demo từ cộng đồng YanHe...'
    },
    collections: {
      items: 'mục'
    },
    common: {
    cancel: 'Hủy',
    confirm: 'Xác nhận',
    count_is: 'Số đếm là',
    edit_hint_prefix: 'Chỉnh sửa',
    edit_hint_suffix: 'để kiểm tra HMR',
    check_out: 'Xem',
    vue_official_starter: 'bộ khởi động Vue + Vite chính thức',
    read_docs_tip: 'Nhấp vào logo để tìm hiểu thêm'
  },
  login: {
    welcome: 'Chào mừng đến với YanHe',
    btn_login: 'Đăng nhập',
    demo_fill: '[Demo] Tự động điền Admin',
    placeholder: {
      ind_account: 'Tài khoản / Tên người dùng',
      password: 'Mật khẩu',
    },
    msg: {
      input_error: 'Vui lòng nhập tài khoản và mật khẩu',
      login_success: 'Đăng nhập thành công!',
    }
  },
  ai: {
    title: 'YanHe AI',
    waking_up: 'Trợ lý AI đang thức dậy...',
    sync_established: 'Đồng bộ hóa đã thiết lập.',
    hello_world: 'Xin chào! Tôi là trợ lý YanHe.',
    thinking: 'Đang suy nghĩ',
    input_placeholder: 'Đồng bộ với Alice...',
    action_happy: 'Yêu bạn nhất! ❤️',
    error_msg: 'Đồng bộ bị gián đoạn.',
    demo_greeting: 'Chào! Bạn thấy tôi không?<br>Được tải từ thư mục public!',
    model_loaded: '✅ Tải mô hình thành công!',
    loading_progress: 'Tiến độ:',
    model_failed: '❌ Lỗi tải mô hình:'
  },
  education: {
    pinyin_check_title: 'Sửa lỗi Pinyin thông minh',
    pinyin_check_hint: 'Nhấp vào chữ cái để chọn thanh điệu',
    pinyin_complete_title: 'Hoàn thành chính tả!',
    pinyin_result_desc: 'Kết quả: {result}'
  },
  player: {
    video_not_supported: 'Trình duyệt không hỗ trợ video.',
    speed_label: 'Tốc độ:',
    resume_tip: 'Tiếp tục tại: {time}',
    time_format: '{m} phút {s} giây'
  },
    modal: {
      title: 'Sửa Hồ sơ',
      random_avatar: 'Avatar Ngẫu nhiên',
      label_name: 'Biệt danh',
      label_bio: 'Tiểu sử',
      cancel: 'Hủy',
      save: 'Lưu'
    },
    msg_banner_success: 'Đã cập nhật ảnh bìa!',
    msg_save_success: 'Lưu thành công'
  }
}