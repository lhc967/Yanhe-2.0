export default {
  // --- Global (글로벌) ---
  brand: 'YanHe',
  nav: {
    home: '홈',
    story: '스토리',
    education: '에듀 클라우드',
    service: '과제',
    map: '방언 지도',
    login: '로그인'
  },
  user: {
    profile: '프로필',
    orders: '주문 내역',
    logout: '로그아웃',
    vip_active: 'Pro 활성',
    vip_join: 'Pro 가입',
    logout_success: '로그아웃 됨'
  },
  loading: {
    map: '지도 데이터 로딩 중...',
    audio: '오디오 로딩 중...',
    uploading: '업로드 중...'
  },
  login_warn: '먼저 로그인해주세요',

  // --- Home (홈) ---
  home: {
    nav: {
      home: '홈',
      story: '스토리',
      edu: '에듀 클라우드',
      task: '과제 홀',
      map: '방언 지도',
      login: '로그인',
      lang_en: 'English'
    },
    hero: {
      badge_1: '교육부 시범 프로젝트',
      badge_2: '농촌 진흥',
      title_1: '글로벌 언어 연결',
      title_2: '공유하다',
      title_high: '중화의 지혜',
      desc: 'AI 에이전트 및 GIS 기술 기반 국제 중국어 교육 플랫폼. 최고의 코스와 전문가 번역 서비스를 통합.',
      btn_task: '과제 센터',
      btn_learn: '학습 시작',
      patent: '특허: ZL2025100XXXX',
      copyright: '저작권: 2025SRXXXX'
    },
    stats: {
      countries: '국가/지역',
      experts: '언어 전문가',
      income: '평균 수입 (CNY)',
      students: '학생 수'
    },
    cards: {
      story_title: '중국 스토리',
      story_desc: '진정한 문화를 탐험하는 몰입형 커뮤니티.',
      edu_title: '스마트 에듀',
      edu_desc: '에빙하우스 망각 곡선을 활용한 AI 보조 교육.',
      task_title: '과제 홀',
      task_desc: '기업의 니즈와 대학 인재를 연결.',
      map_title: '방언 지도 Pro',
      map_desc: '방언 문화를 보호하는 GIS 시각화 기술.'
    }
  },

  // --- AI Chat (AI 채팅) ---
  ai: {
    new_chat: '새 채팅',
    history: {
      today: '오늘',
      yesterday: '어제',
      demo1: '이메일 교정',
      demo2: '계약서 번역',
      demo3: '에세이 수정'
    },
    guest: '게스트',
    models: {
      pro_desc: '복잡한 작업을 위한 강력한 추론',
      fast_desc: '일상 번역을 위한 빠른 응답',
      creative_desc: '카피라이팅을 위한 창의적 사고'
    },
    clear_chat: '지우기',
    welcome_title: 'YanHe AI입니다, 무엇을 도와드릴까요?',
    shortcuts: {
      translate_title: '번역',
      translate_desc: '비즈니스/법률',
      translate_prompt: '이것을 비즈니스 영어로 번역해줘:',
      polish_title: '교정',
      polish_desc: '전문적인 어조',
      polish_prompt: '이 이메일을 더 정중하게 수정해줘:',
      grammar_title: '문법',
      grammar_desc: '오류 분석',
      grammar_prompt: '문법 오류를 확인하고 이유를 설명해줘:',
      culture_title: '문화',
      culture_desc: '사자성어/관습',
      culture_prompt: '이 사자성어의 문화적 배경을 설명해줘:'
    },
    input_placeholder: '메시지를 입력하세요 (Shift + Enter 줄바꿈)...',
    disclaimer: 'AI 생성 콘텐츠에 오류가 있을 수 있습니다. 중요 문서는 수동으로 확인하세요.',
    copy: '복사',
    retry: '재시도',
    cleared: '채팅 삭제됨',
    copied: '클립보드에 복사됨',
    error_msg: '네트워크 오류, 나중에 다시 시도하세요',
    mock: {
      default: "이것은 AI 시뮬레이션 응답입니다.\n\n1. **전문성**: 문맥에 따라 어조를 조정합니다.\n2. **정확성**: 방대한 코퍼스를 기반으로 합니다.\n\n더 자세한 답변을 원하시면 배경 정보를 제공해주세요.",
      trans: "번역 결과입니다:\n\n**비즈니스 문맥**:\n> The contract shall come into force upon signature.\n\n**분석**:\n더 격식 있는 표현을 위해 'start' 대신 'come into force'를 사용했습니다.",
      polish: "수정 제안:\n\n**원본**: I want to ask if you can give me a discount.\n**최적화**: Could you please consider offering a discount?\n\n**이유**: 'Could you please'를 사용하면 더 정중합니다."
    }
  },

  // --- Login (로그인) ---
  login: {
    back_home: '홈으로',
    brand: {
      ent_title: '글로벌 언어 인재<br>연결',
      ent_desc: 'YanHe 기업 생태계에 참여하여 크라우드소싱 니즈를 게시하세요.',
      ind_title: '지식 수익화<br>문화 수출',
      ind_desc: '대학 언어 인재를 위한 전용 플랫폼.',
      badge_title: '플랫폼 성과',
      badge_gold: '인증 번역가',
      badge_silver: 'Top 100',
      badge_bronze: '성실 스타'
    },
    role_ent: '기업',
    role_ind: '학생',
    welcome: '환영합니다',
    sub_ent: '기업 로그인',
    sub_ind: '학생/교사 로그인',
    placeholder: {
      ent_account: '기업 ID / 이메일',
      ind_account: '전화번호 / 학번',
      password: '비밀번호',
      org_name: '기업명',
      school: '대학교',
      phone_email: '전화 / 이메일',
      set_password: '비밀번호 설정'
    },
    remember: '로그인 유지',
    forgot: '비밀번호 찾기?',
    btn_login: '로그인',
    logging_in: '로그인 중...',
    no_account: '계정이 없으신가요?',
    to_register: '회원가입',
    create_account: '계정 생성',
    join_ent: 'YanHe 가입, 채용 시작',
    join_ind: 'YanHe 가입, 성장 시작',
    agree_prefix: '본인은',
    agreement: '이용약관에 동의합니다',
    btn_register: '가입하기',
    has_account: '계정이 있으신가요?',
    to_login: '로그인',
    msg: {
      input_error: '계정과 비밀번호를 입력하세요',
      login_success: '로그인 성공',
      agree_error: '약관에 동의해주세요',
      register_success: '가입 신청이 제출되었습니다'
    }
  },

  // --- Upload (업로드) ---
  upload: {
    title: '방언 수집 터미널',
    db_connected: 'DB 연결됨',
    guest_id: '게스트',
    recording_hint: '녹음 중... 클릭하여 중지',
    start_hint: '클릭하여 녹음',
    form: {
      location_label: '방언 지역',
      location_placeholder: '예: 쓰촨성 청두',
      meaning_label: '의미 (Meaning)',
      meaning_placeholder: '이 문장은 무슨 뜻인가요?',
      tags_label: '태그'
    },
    tags: {
      daily: '일상',
      nursery: '동요',
      slang: '속어'
    },
    btn_submit: 'YanHe 데이터베이스에 업로드',
    loading_text: '암호화 및 업로드 중...',
    success_msg: '업로드 성공! 기여해 주셔서 감사합니다.'
  },

  // --- Culture Map (방언 지도) ---
  culture: {
    navbar: {
      subtitle: 'YANHE DIALECT',
      explore: '탐색',
      pro: 'PRO',
      passport: '통행증'
    },
    tabs: {
      learn: '학습',
      ai: 'AI 평가',
      upload: '기여'
    },
    cities: {
      Beijing: {
        name: '베이징 관화',
        intro: '독특한 얼화와 리듬감이 특징입니다.',
        tags: ['얼화', '유머'],
        words: [
          { text: 'Ju Qi (의리)', ipa: 'tɕy35 tɕʰi' },
          { text: 'Mei Pu Er (미덥지 않음)', ipa: 'mei21 xu' }
        ],
        aiModels: [
          { name: '구 베이징 (문어)' }, { name: '신 베이징 (구어)' }, { name: '남성 억양' }
        ],
        aiChallenge: { word: '이것이 정통이다!' }
      },
      Shanghai: {
        name: '상하이 오어',
        intro: '상하이 문화의 우아함을 반영한 부드러운 성조.',
        tags: ['부드러움', '우아함'],
        words: [
          { text: 'Nong Hao (안녕)', ipa: 'nɔŋ hɔ' },
          { text: 'A La (우리)', ipa: 'a la' }
        ],
        aiModels: [
          { name: '구 상하이' }, { name: '신 상하이' }
        ],
        aiChallenge: { word: '밥 먹었니?' }
      }
    },
    ai: {
      model_base: '기본 모델:',
      read_guide: '{model}로 읽어주세요:',
      listen_sample: '샘플 듣기',
      analyzing: '성조 곡선 생성 중...',
      comparing: '{city} 음소 비교 중...',
      analyzing_voice: '성문 분석 중...',
      release_stop: '놓아서 중지',
      long_press: '길게 눌러 녹음',
      score_unit: '점',
      tone_analysis: '성조 적합도 분석',
      retry: '재시도',
      comment_good: '놀라워요! 원어민과 98% 일치합니다.',
      comment_avg: '좋습니다만, 성조 변화를 더 낮출 수 있습니다.',
      dimensions: {
        tone: '성조 정확도',
        clarity: '발음 명확성',
        emotion: '감정 표현'
      }
    },
    passport: {
      title: '통행증',
      close: '닫기'
    }
  },

  // --- Unlock (Pro 잠금 해제) ---
  unlock: {
    nav_title: '회원 센터',
    restore_purchase: '복원',
    pro_title: 'YANHE PRO',
    pro_desc: '전체 지도 잠금 해제 · 심층 AI 대화 · 오프라인 코스',
    benefits: {
      ai: { title: 'AI 교정', desc: '무제한' },
      map: { title: '전체 지도', desc: '50+ 도시' },
      npc: { title: '디지털 마스터', desc: '고급 대화' }
    },
    plans: {
      year_tag: '학생 90% 할인',
      unit_year: '년',
      year_desc: '하루 단 0.13 위안',
      unit_month: '월',
      month_tag: '체험'
    },
    compare: {
      title: '비교',
      col_feature: '기능',
      col_free: '무료',
      row_ai: 'AI 채점',
      val_limit: '3회/일',
      row_map: '지도 탐색',
      val_map_limit: '3개 도시',
      val_all: '전체',
      row_npc: '디지털 마스터',
      val_unlock: '해제'
    },
    agreement: '구독 시 약관에 동의하는 것으로 간주됩니다. 언제든 취소 가능.',
    total: '합계',
    btn_pay: '결제하기',
    login_warn: '구매하려면 먼저 로그인하세요',
    verifying: '결제 확인 중...',
    success_msg: '🎉 축하합니다! YanHe PRO 회원이 되었습니다.',
    pay_modal: {
      title: 'YanHe 계산대',
      amount: '주문 금액',
      scan_tip: 'WeChat / Alipay 스캔',
      btn_mock: '성공 시뮬레이션'
    }
  },

  // --- Debate (AI 토론) ---
  debate: {
    header: {
      end_chat: '대화 종료',
      topic_label: '현재 주제:',
      status_online: '마스터 온라인'
    },
    topics: {
      business: '비즈니스 협상 전략',
      history: '역사적 논리',
      philosophy: '유교 철학',
      general: '일반 대화'
    },
    chat: {
      welcome_prefix: '서원에 들어오셨으니,',
      welcome_suffix: '에 대해 논하러 오셨군요.',
      welcome_invite: '견해를 말씀해 주십시오, 경청하겠습니다.',
      thinking: '마스터가 생각 중...',
      ai_reply_prefix: '귀하께서 말씀하신',
      ai_reply_body: '일리가 있습니다. 그러나 장기적인 관점에서 보면 "급할수록 돌아가라"는 말이 있습니다. 협상에서 그 전략은 역효과를 낼 수 있습니다.'
    },
    footer: {
      input_placeholder: '의견을 입력하세요 (음성 입력 지원)...',
      send_btn: '토론'
    }
  },

  // --- Education (에듀 클라우드) ---
  education: {
    hero: {
      title: '<i class="bi bi-cpu"></i> AI 디지털 마스터 · 심층 토론',
      desc: '단순한 채팅 그 이상. AI와 <strong>유교 철학</strong>이나 <strong>비즈니스 협상</strong>에 대해 높은 수준의 토론을 진행하세요.',
      btn_business: '비즈니스 배틀',
      btn_history: '역사 토론'
    },
    memory: {
      title: '기억 충전소',
      current_dict: '현재 단어장',
      forget_alert: '에빙하우스 망각 곡선: 오늘 <strong class="text-warning">{count}</strong>개의 단어가 잊혀집니다.',
      saturation: '기억 포화도',
      review_now: '지금 복습'
    },
    search_placeholder: '검색: 비즈니스 중국어 / 티베트어 입문 / 시 감상...',
    btn_search: '검색',
    tags: {
      all: '전체',
      hsk: 'HSK 급수',
      business: '비즈니스',
      culture: '중국 문화',
      dialect: '방언 특색',
      ethnic: '민족 언어'
    },
    courses_title_all: '추천 코스',
    courses_suffix: '관련 코스',
    course_source: {
      original: 'YanHe 오리지널',
      master: '마스터 클래스',
      culture: '문화',
      dialect: '방언'
    },
    courses: {
      c1: { title: '기초부터 HSK 3급까지: 속성' },
      c2: { title: '비즈니스 협상 실전: 중국어로 흥정하기' },
      c3: { title: '당시 송사 감상: 중국인의 낭만' },
      c4: { title: '쓰촨 방언 입문: "Ba Shi"로 시작하기' }
    },
    free: '무료',
    ethnic: {
      title: '다민족 언어 보호 프로젝트',
      subtitle: '56개 민족의 목소리',
      btn_enter: '부락 입장',
      items: {
        tibetan: { lang: '티베트어', desc: '설원의 영혼의 소리' },
        uyghur: { lang: '위구르어', desc: '실크로드의 진주' },
        zhuang: { lang: '좡어', desc: '유삼저의 민요' }
      }
    },
    vip_modal: {
      title: 'YanHe 서원 PRO',
      desc: '프리미엄 문화 특권 해제',
      ben_1: 'AI 심층 토론',
      ben_2: '문화유산 마스터 클래스',
      ben_3: '방언 실시간 번역',
      ben_4: '실물 인증서',
      btn_pay: '지금 해제 (¥12.9부터)'
    },
    vip_required: '유료 코스입니다. PRO를 구독해주세요.'
  },

  // --- Checkout (계산대) ---
  checkout: {
    secure_ssl: 'UnionPay SSL 보안 결제',
    unit_year: '년',
    countdown_prefix: '가격 고정, ',
    countdown_suffix: '내에 결제해주세요',
    course_info: '코스 정보',
    escrow_detail: '에스크로 상세',
    payment_method: '결제 방식 선택',
    pay_wechat: 'WeChat Pay',
    pay_wechat_desc: '추천, 빠르고 안전함',
    pay_alipay: 'Alipay',
    pay_alipay_desc: 'Huabei 지원',
    pay_card: 'UnionPay / 카드',
    pay_card_desc: '기업 송금 지원',
    need_invoice: '영수증 필요',
    summary_title: '비용 명세',
    price_original: '원가',
    price_student: '학생 할인',
    price_tax: '세금',
    price_course_orig: '코스 가격',
    price_discount: '한정 할인',
    price_bounty: '과제 현상금',
    price_service_fee: '플랫폼 수수료 (5%)',
    price_expedite: '급행료',
    total_due: '총 결제액',
    processing: '처리 중...',
    guarantee: '플랫폼 자금 보장, 7일 환불 정책',
    btn_home: '홈으로',
    btn_experience: '시작하기',
    btn_pay_now: '지금 결제',
    btn_pay: '결제',
    btn_escrow: '예치',
    demo: {
      label: '데모 모드:',
      scenario_a: 'A: 멤버십',
      scenario_b: 'B: 코스',
      scenario_c: 'C: 과제 예치'
    },
    products: {
      membership: {
        title: 'YanHe Pro 연간 회원',
        desc: '학생 전용 혜택 | 365일 무제한',
        feat1: '모든 방언 시나리오 해제',
        feat2: '무제한 AI 교정',
        feat3: '프리미엄 지도 및 아바타'
      },
      course: {
        title: '비즈니스 중국어: 고급 협상',
        tag: '단일 코스',
        detail: '포함: 45분 영상 + 용어집 + AI 실습'
      },
      task: {
        title: '에스크로: 법률 계약 번역',
        tag: '플랫폼 보장',
        detail: '주문 #88392\n만족 시 크리에이터에게 지급됩니다.'
      }
    },
    success: {
      membership: { title: 'Pro 환영합니다!', desc: '혜택이 활성화되었습니다. 프리미엄 기능을 즐겨보세요.' },
      course: { title: '코스 해제 성공!', desc: '"내 코스"에서 학습을 시작하세요.' },
      task: { title: '자금 예치됨', desc: '과제가 게시되었습니다. 수락 시 알림을 받습니다.' }
    }
  },

  // --- Search (검색) ---
  search: {
    nav_back: '홈으로',
    placeholder: '과제, 인재, 코스 검색...',
    default_keyword: '번역',
    tabs: {
      all: '전체',
      task: '과제',
      user: '인재',
      course: '코스'
    },
    tags: {
      task: '과제',
      user: '인재',
      course: '코스'
    },
    result_stat: '"{keyword}"에 대한 결과 {count}개 발견',
    empty: {
      title: '결과가 없습니다. 다른 키워드는 어떠세요?',
      tip: '(예: 번역, 법률, 비즈니스, Jack)'
    },
    btn_contact: '연락하기',
    score: '점',
    msg_contact: '{name}님에게 협업 요청을 보냈습니다!'
  },

  // --- Chat (메시지) ---
  chat: {
    nav_back: '홈으로',
    title: '메시지 센터',
    search_placeholder: '연락처 검색...',
    typing: '입력 중...',
    menu_profile: '프로필 보기',
    menu_report: '신고하기',
    input_placeholder: 'Enter를 눌러 전송...'
  },

  // --- Service (과제 홀) ---
  service: {
    role: {
      creator: '나는 크리에이터 (일자리 찾기)',
      client: '나는 클라이언트 (의뢰 하기)'
    },
    search: {
      placeholder_creator: '과제 검색: 번역, 녹음...',
      placeholder_client: '인재 검색: 통역, TEM-8...',
      btn: '검색'
    },
    recommend_title: '추천 과제',
    sort_newest: '정렬: 최신순',
    task_types: {
      business: '비즈니스',
      dialect: '방언 수집',
      urgent: '급구'
    },
    status: {
      recruiting: '모집 중',
      joined: '{count}/{total} 참여'
    },
    auth_card: {
      title: '대학 언어 인재 인증',
      desc: 'BSU / 베이징외대 신분을 인증하고 고소득 과제 및 수수료 면제를 받으세요.',
      btn: '인증하기'
    },
    rank: {
      title: '금주의 수익 랭킹'
    },
    client: {
      post_title: '프리미엄 현상금 게시',
      post_desc: '복잡하고 전문적인 언어 니즈. 12,000+ 대학 인재와 연결.',
      tag_escrow: '에스크로',
      tag_audit: '블라인드 심사',
      btn_post: '게시하기',
      ai_title: 'AI 스마트 급행 서비스',
      ai_desc: '간단한 번역 및 교정용. YanHe 자체 LLM, 즉시 응답.',
      tag_fast: '즉시 완료',
      btn_ai: 'AI 비서 체험'
    },
    market: {
      title: '최근 시장 시세 참고',
      tags: {
        law: '법률',
        interpreting: '통역',
        dubbing: '더빙',
        writing: '작문'
      },
      disclaimer: '* 데이터는 지난 30일 평균 거래가 기준입니다.'
    }
  },

  // --- Service Detail (과제 상세) ---
  service_detail: {
    nav_back: '홀로 돌아가기',
    breadcrumb_cat: '번역 및 현지화',
    breadcrumb_current: '상세',
    meta: {
      escrow: '자금 예치됨',
      urgent: '급구',
      views: '조회 {count}회',
      id_label: '과제 ID'
    },
    section: {
      background: '배경',
      duties: '책무',
      skills: '요구사항',
      questions: '선별 질문',
      attachment: '첨부파일'
    },
    attachment_hint: '2.4 MB · 미리보기용',
    bids: {
      title: '입찰 현황 ({count})',
      stat_joined: '지원함',
      stat_chat: '대화 중',
      stat_active: '활성',
      stat_rate: '채용률',
      submit_time: '5분 전 제출'
    },
    sidebar: {
      budget_label: '예산 (고정)',
      unit: '위안'
    },
    btn: {
      apply: '지원하기',
      applied: '지원 완료',
      chat: '채팅'
    },
    action: {
      collect: '저장',
      share: '공유',
      report: '신고'
    },
    client: {
      title: '클라이언트 정보',
      verified: '기업 인증됨',
      loc: '위치',
      tasks: '게시됨',
      spent: '지출액',
      rate: '채용률'
    },
    similar_title: '관심 있을 만한 과제',
    similar_demo: '유학 에세이 번역 및 교정',
    similar_tag: '문서 번역',
    modal: {
      title: '제안서 제출',
      fee_tip: '플랫폼은 완료 후 10%의 수수료를 부과합니다.',
      price_label: '견적가 (¥)',
      income_calc: '예상 수령액',
      days_label: '예상 기간',
      day_unit: '일',
      urgent_opt: '급행',
      letter_label: '커버 레터',
      letter_ph: '왜 당신이 이 일에 적합한가요?',
      ai_polish: 'AI 이력서 교정',
      ai_done: 'AI 교정 완료',
      upload_label: '포트폴리오/이력서',
      cancel: '취소',
      confirm: '제출',
      submitting: '전송 중...',
      success_msg: '✅ 입찰 성공! 연락을 기다리세요.'
    }
  },

  // --- Publish (과제 게시) ---
  publish: {
    nav_title: '과제 게시',
    nav_subtitle: 'YanHe 보증 거래',
    steps: {
      desc: '설명',
      budget: '예산'
    },
    types: {
      translation: '번역',
      dubbing: '더빙',
      polish: '교정',
      custom: '기타'
    },
    form: {
      type_label: '카테고리',
      title_label: '제목',
      title_ph: '예: 5000자 법률 계약서 번역',
      desc_label: '상세 내용',
      desc_ph: '배경, 타겟, 용어 요구사항 등을 설명하세요...',
      upload_label: '첨부파일 (선택)',
      upload_hint: '클릭하거나 파일을 드래그하세요'
    },
    btn_next: '다음: 예산',
    btn_back: '수정',
    modes: {
      normal: { title: '일반', desc: '한 명이 전액 수령' },
      contest: { title: '콘테스트 (추천)', desc: '다수 참가, 우승자 독식' }
    },
    step2: {
      mode_title: '협력 모드',
      budget_label: '예산',
      budget_hint: '승인 전까지 자금은 에스크로에 보관됩니다.',
      contest_alert: '총 예산은 참가상(공유)과 우승상금(독점)으로 나뉩니다.',
      total_budget: '총 예산',
      max_people: '최대 참가',
      recommend: '추천',
      pool_entry: '참가 풀',
      per_person: '평균',
      pool_winner: '우승 상금',
      deadline: '마감일',
      deadline_ph: '날짜 선택',
      urgent_opt: '급행 (+ ¥20.00)',
      expert_opt: '인증된 전문가만'
    },
    footer: {
      total_label: '총 에스크로',
      submitting: '제출 중...',
      btn_pay: '게시 및 결제'
    },
    msg_title_required: '제목을 입력하세요',
    msg_budget_invalid: '유효한 예산을 입력하세요',
    msg_success: '생성됨! 결제 페이지로 이동...'
  },

  // --- Story AI (영감 주머니) ---
  story_ai: {
    title: '영감 키트',
    welcome: {
      greeting: '안녕하십니까. YanHe 서동입니다.',
      desc: '중국 이야기를 쓰는 데 어려움이 있나요? 문장 다듬기, 고사성어 찾기, 번역 등 도와드리겠습니다.'
    },
    card_tag: 'AI 붓',
    actions: {
      polish: '문장 다듬기',
      polish_prompt: '이 문장을 더 시적이고 고전적으로 바꿔줘:',
      fest: '명절 이중언어',
      fest_prompt: '중추절에 관한 아름다운 문구와 번역',
      culture: '문화유산',
      culture_prompt: '이 무형문화유산을 소개해줘:'
    },
    input_ph: '무엇이든 물어보세요...',
    copied: '클립보드에 복사됨'
  },

  // --- Detail Paper (두루마리 상세) ---
  detail_paper: {
    nav_back: '두루마리로 복귀',
    date_prefix: '기록일:',
    date_suffix: '',
    btn_follow: '팔로우',
    btn_following: '팔로잉',
    comment_title: '댓글',
    seal_like: '좋아요',
    seal_liked: '읽음',
    input_ph: '댓글 작성...',
    msg_followed: '팔로우함',
    msg_unfollowed: '팔로우 취소',
    me: '나'
  },

  // --- Publish Paper (새 글) ---
  publish_paper: {
    nav: {
      cancel: '취소',
      title: '새 이야기',
      publish: '낙관 찍기'
    },
    upload: {
      change: '미디어 변경',
      placeholder: '이미지/영상 업로드'
    },
    form: {
      title_ph: '제목 입력...',
      ai_btn: 'AI 교정',
      content_ph: '생각을 기록하세요...',
      topic_label: '주제',
      loc_label: '위치',
      loc_ph: '위치 가져오기'
    },
    tags: ['네오 차이니즈', '한푸 일상', '문화유산', '길거리 음식', '고건축', '시티워크'],
    loc_finding: '위치 확인 중...',
    ai_processing: 'AI가 다듬는 중...',
    publishing: '게시 중...',
    msg_max_tags: '최대 3개 주제',
    msg_no_title: '제목을 입력해주세요',
    msg_ai_done: '교정 완료!',
    msg_success: '게시 성공'
  },

  // --- Culture Scroll (견문록) ---
  culture_scroll: {
    nav_back: '홀로 복귀',
    brand_sub: '회고록',
    intro: {
      title: '저널',
      desc: '언어를 잇고<br>지혜를 나누다'
    },
    seal: {
      like: '좋아요',
      liked: '읽음'
    },
    end_card: {
      title: '계속...',
      desc: '클릭하여 이야기 쓰기'
    },
    fab_write: '쓰기',
    modal: {
      title: '무엇을 기록할까요?',
      opt_ai: 'AI 영감',
      opt_photo: '사진/스토리',
      opt_write: '긴 글'
    },
    location_default: '중국'
  },

  // --- Writer (작가) ---
  writer: {
    nav: {
      back: '두루마리 닫기',
      status_saved: '먹물 마름',
      status_writing: '쓰는 중...',
      publish: '게시'
    },
    cover: {
      change: '커버 변경',
      add: '커버 추가 (선택)'
    },
    editor: {
      title_ph: '제목 입력',
      author_suffix: '지음',
      content_ph: '여기서 이야기를 시작하세요...',
      ai_btn: 'AI 이어쓰기',
      ai_tip: 'AI'
    },
    msg: {
      anonymous: '익명',
      ai_loading: 'AI 생각 중...',
      ai_done: '이어쓰기 완료',
      validate_error: '제목과 내용은 필수입니다',
      success: '게시 성공'
    }
  },

  // --- Course Player (플레이어) ---
  player: {
    nav: {
      demo_mode: '데모 모드',
      demo_exit: '데모 종료',
      back: '뒤로'
    },
    lock: {
      title: '프리미엄 콘텐츠',
      desc: '이 챕터와 모든 시나리오 영상 해제',
      btn_unlock: '해제 (¥ {price})',
      btn_trial: '30초 체험'
    },
    resume_tip: '{time}에서 이어보기, 클릭하여 점프',
    tools: {
      label: '도구',
      pinyin: '병음',
      pinyin_ph: '선택',
      pinyin_tip: '클릭하여 복사:',
      quiz: '퀴즈',
      fav: '즐겨찾기',
      faved: '저장됨'
    },
    ctrl: {
      speed: '배속',
      sub_cn: '중',
      sub_en: '영',
      sub_both: '둘다',
      subtitle: '자막'
    },
    meta: {
      views: '회 조회',
      key_points: '핵심 포인트'
    },
    playlist: {
      title: '목록',
      tabs: {
        all: '전체',
        grammar: '강의',
        scenario: '시나리오',
        culture: '문화'
      }
    },
    tags: {
      free: '무료',
      unlocked: '해제됨',
      paid: '유료'
    },
    ai: {
      title: 'AI 튜터',
      welcome: '안녕하세요! AI 조교입니다.',
      input_ph: '질문 입력...',
      mock_reply: '좋은 질문입니다! "{input}"은 비즈니스 맥락에서 보통...'
    },
    quiz: {
      title: '퀴즈 - 비즈니스 예절',
      score: '점수',
      btn_submit: '제출',
      msg_perfect: '완벽해요! 잘했습니다!'
    },
    msg_jumped: '{time}으로 이동',
    msg_faved: '즐겨찾기에 추가됨',
    msg_unfaved: '즐겨찾기 해제됨',
    msg_copied: '복사됨: {char}'
  },

  // --- Review Center (복습 센터) ---
  review: {
    header: {
      title_menu: '스마트 복습',
      title_flash: '플래시카드',
      title_phonics: 'AI 발음',
      title_quiz: '스피드 퀴즈',
      streak: '{day}일 연속'
    },
    menu: {
      title: '복습 모드 선택',
      flash: { title: '기억 카드', desc: '간격 반복 시스템', badge: '예정: {count}' },
      phonics: { title: 'AI 발음', desc: '실시간 발음 분석', badge: '신규: {count}' },
      quiz: { title: '스피드 퀴즈', desc: '30초 도전', badge: '기록: {score}' }
    },
    flash: {
      tag: '핵심 비즈니스 어휘',
      hint_flip: '클릭하여 뒤집기',
      kb_hint_prefix: '',
      kb_space: '스페이스바',
      kb_hint_suffix: '로 뒤집기',
      btn_show: '정답 보기',
      grade: { again: '다시', hard: '어려움', good: '좋음', easy: '쉬움' }
    },
    phonics: {
      status_recording: '듣는 중...',
      status_idle: '마이크를 눌러 녹음',
      score_unit: '점',
      fb_perfect: '완벽해요! 원어민 같네요!',
      fb_good: '좋아요! 어미 처리에 주의하세요.'
    },
    quiz: {
      msg_wrong: '틀렸습니다! 정답은: {ans}'
    },
    btn_next: '다음',
    finish: {
      title: '세션 완료!',
      desc: '{count}개 항목 복습 완료. 기억력 +5%',
      btn_back: '메뉴로 복귀'
    }
  },

  // --- Badge Wall (배지 월) ---
  badge: {
    nav_back: '프로필로 복귀',
    header: {
      title: '성취의 벽',
      subtitle: '성장과 기여를 기록합니다.',
      unlocked: '해제됨',
      percentile: '상위 {percent}%'
    },
    tabs: {
      all: '전체',
      unlocked: '해제됨',
      locked: '잠김',
      ssr: '희귀 (SSR)'
    },
    status_locked: '잠김',
    level_badge: '급 배지',
    meta: {
      condition: '요구조건',
      unlocked_at: '달성일',
      progress: '진행도'
    },
    btn_close: '닫기',
    btn_share: '공유'
  },

  // --- Cert (대학 인증) ---
  cert: {
    nav_back: '홀로 복귀',
    hero: {
      title: '대학 인재 인증',
      subtitle: 'YanHe 전문가 풀에 참여하여 언어 능력을 수익화하세요.'
    },
    benefits: {
      free: { title: '수수료 0원', desc: '동문 수수료 면제' },
      priority: { title: '우선순위', desc: '프리미엄 과제 우선 배정' },
      cert: { title: '증명서', desc: '공식 인턴십 증명' }
    },
    form: {
      step1: '1단계: 기본 정보',
      name_label: '실명',
      name_ph: '학생증과 동일하게',
      school_label: '대학교',
      school_ph: '선택',
      schools: {
        bsu: '베이징체육대학 (BSU)',
        bfsu: '베이징외국어대학',
        blcu: '베이징어언대학',
        other: '기타'
      },
      major_label: '학부/전공',
      major_ph: '예: 영어과',
      id_label: '학번',
      id_ph: '학번 입력',
      step2: '2단계: 검증',
      upload_label: '학생증 업로드 (앞면)',
      drag_text: '파일을 드래그하거나',
      click_upload: '클릭하여 업로드',
      upload_tip: 'JPG/PNG만 가능, 최대 5MB',
      agree: '정보가 사실임을 확인하며 YanHe 약관에 동의합니다.',
      btn_submit: '제출',
      submitting: '전송 중...'
    },
    msg: {
      agree_warn: '약관에 동의해주세요',
      info_warn: '기본 정보를 입력해주세요',
      success: '🎉 제출됨! 24시간 내 검토.'
    }
  },

  // --- Profile (프로필) ---
  profile: {
    unnamed: '이름 없음',
    menu: {
      edit: '프로필 편집',
      badge: '배지 월',
      vip: '회원 센터'
    },
    header: {
      edit_cover: '커버',
      verified: '인증됨',
      no_bio: '소개 없음',
      btn_edit: '편집',
      btn_share: '공유'
    },
    stats: {
      following: '팔로잉',
      followers: '팔로워',
      likes: '좋아요'
    },
    badges: {
      title: '명예 배지',
      all: '전체'
    },
    tabs: {
      overview: '개요',
      learning: '학습',
      posts: '포스트',
      collections: '컬렉션'
    },
    overview: {
      heat_title: '활동',
      heat_sub: '올해 총 {hours}시간',
      visitors: '최근 방문자',
      vip_title: 'PRO 혜택',
      vip_date: '2027.01.01까지 유효',
      vip_desc: 'AI 교정 & 무제한 번역 해제',
      btn_renew: '관리',
      btn_unlock: '지금 해제'
    },
    learning: {
      next: '다음',
      continue: '계속'
    },
    posts: {
      time_ago: '2시간 전',
      demo_content: 'YanHe 커뮤니티의 데모 게시물입니다...'
    },
    collections: {
      items: '항목'
    },
    common: {
    cancel: '취소',
    confirm: '확인',
    count_is: '현재 카운트',
    edit_hint_prefix: '편집',
    edit_hint_suffix: 'HMR 테스트',
    check_out: '확인',
    vue_official_starter: '공식 Vue + Vite 스타터',
    read_docs_tip: '자세한 내용을 보려면 Vite 및 Vue 로고를 클릭하세요'
  },
  login: {
    welcome: 'YanHe에 오신 것을 환영합니다',
    btn_login: '로그인',
    demo_fill: '[데모] 관리자 계정 입력',
    placeholder: {
      ind_account: '계정 / 아이디',
      password: '비밀번호',
    },
    msg: {
      input_error: '계정과 비밀번호를 입력해주세요',
      login_success: '로그인 성공, 환영합니다!',
    }
  },
  ai: {
    title: 'YanHe AI',
    waking_up: 'AI 어시스턴트 깨어나는 중...',
    sync_established: '동기화 완료, 지시 대기 중.',
    hello_world: '안녕하세요! YanHe 스마트 어시스턴트입니다.',
    thinking: '생각 중',
    input_placeholder: '앨리스와 동기화...',
    action_happy: '당신을 제일 좋아해요!❤️',
    error_msg: '동기화 중단, 연결을 확인하세요.',
    demo_greeting: '안녕! 보여요?<br>public 폴더에서 로드되었습니다!',
    model_loaded: '✅ 모델 로드 성공!',
    loading_progress: '로드 진행률:',
    model_failed: '❌ 모델 로드 실패:'
  },
  education: {
    pinyin_check_title: '병음 스마트 교정',
    pinyin_check_hint: '문자를 클릭하여 성조 선택',
    pinyin_complete_title: '철자 완성!',
    pinyin_result_desc: '최종 결과: {result}'
  },
  player: {
    video_not_supported: '브라우저가 비디오 태그를 지원하지 않습니다.',
    speed_label: '배속:',
    resume_tip: '이전 재생 지점 복구: {time}',
    time_format: '{m}분 {s}초'
  },
    modal: {
      title: '프로필 편집',
      random_avatar: '랜덤 아바타',
      label_name: '닉네임',
      label_bio: '소개',
      cancel: '취소',
      save: '저장'
    },
    msg_banner_success: '커버 업데이트됨!',
    msg_save_success: '저장 성공'
  }
}