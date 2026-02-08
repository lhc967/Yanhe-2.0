export default {
  // --- 全局通用 (Global) ---
  brand: '言禾 YanHe',
  nav: {
    home: '首页',
    story: '中国故事',
    education: '教育云',
    service: '任务大厅',
    map: '方言地图',
    login: '登录 / 注册',
    lang_en: 'English'
  },
  user: {
    profile: '个人中心',
    orders: '我的订单',
    logout: '退出登录',
    vip_active: '尊享会员中',
    vip_join: '开通书院会员',
    logout_success: '已退出'
  },
  loading: {
    map: '正在加载万方之声数据...',
    audio: '正在获取音频...',
    uploading: '正在加密上传...'
  },
  login_warn: '请先登录账号',

  // --- 首页 (Home) ---
  home: {
    nav: {
      home: '首页',
      story: '中国故事',
      edu: '教育云',
      task: '任务大厅',
      map: '方言地图',
      login: '登录 / 注册',
      lang_en: 'English'
    },
    hero: {
      badge_1: '教育部产学研试点',
      badge_2: '乡村振兴重点项目',
      title_1: '连接全球语言',
      title_2: '共享',
      title_high: '中华智慧',
      desc: '基于 AI Agent 与 GIS 技术的国际中文教育平台。聚合全网优质课程，提供专家级众包翻译服务。',
      btn_task: '发布/接取任务',
      btn_learn: '开始免费学习',
      patent: '专利号：ZL2025100XXXX',
      copyright: '软著号：2025SRXXXX'
    },
    stats: {
      countries: '覆盖国家/地区',
      experts: '入驻语言专家',
      income: '人均增收 (元)',
      students: '服务贫困学生'
    },
    cards: {
      story_title: '中国故事',
      story_desc: '仿小红书社区，沉浸式了解真实中国文化。',
      edu_title: '智慧教育云',
      edu_desc: 'AI 辅助教学，结合艾宾浩斯记忆法。',
      task_title: '任务大厅',
      task_desc: '双端登录系统，连接企业需求与高校人才。',
      map_title: '方言地图 Pro',
      map_desc: 'GIS 可视化技术，抢救与保护方言文化。'
    }
  },

  // --- AI 对话 (AI Chat) ---
  ai: {
    new_chat: '新建对话',
    history: {
      today: '今天',
      yesterday: '昨天',
      demo1: '商务邮件润色',
      demo2: '合同条款翻译',
      demo3: '留学文书 PS 修改'
    },
    guest: '未登录用户',
    models: {
      pro_desc: '最强推理，适合复杂任务',
      fast_desc: '极速响应，适合日常翻译',
      creative_desc: '发散思维，适合文案创作'
    },
    clear_chat: '清空对话',
    welcome_title: '我是言禾 AI，今天能帮您做什么？',
    shortcuts: {
      translate_title: '中英互译',
      translate_desc: '商务/法律/学术',
      translate_prompt: '请帮我把这段中文翻译成地道的商务英语：',
      polish_title: '邮件润色',
      polish_desc: '提升职场专业度',
      polish_prompt: '请帮我润色这段邮件，使其语气更委婉：',
      grammar_title: '语法纠错',
      grammar_desc: '解析错误原因',
      grammar_prompt: '帮我检查这段话的语法错误并解释原因：',
      culture_title: '文化查询',
      culture_desc: '成语/典故/习俗',
      culture_prompt: '请解释这个中国成语的文化背景和典故：'
    },
    input_placeholder: '输入您的问题 (Shift + Enter 换行)...',
    disclaimer: 'AI 生成内容可能包含错误，重要文件请务必进行人工复核。',
    copy: '复制',
    retry: '重试',
    cleared: '对话已清空',
    copied: '已复制到剪贴板',
    error_msg: '网络请求失败，请稍后重试',
    mock: {
      default: "这是一个模拟的 AI 回复。\n\n1. **专业性**：我会根据语境调整用词。\n2. **准确性**：基于海量语料库。\n\n如果您需要更详细的解答，请提供更多背景信息。",
      trans: "这里是翻译结果：\n\n**商务语境**：\n> The contract shall come into force upon signature.\n\n**解析**：\n使用了 'come into force' 替代 'start'，显得更加正式。",
      polish: "建议修改如下：\n\n**原文**：I want to ask if you can give me a discount.\n**优化**：Could you please consider offering a discount?\n\n**理由**：使用 'Could you please' 更加委婉礼貌。"
    }
  },

  // --- 登录 (Login) ---
  login: {
    back_home: '首页',
    brand: {
      ent_title: '连接全球<br>语言人才',
      ent_desc: '加入言禾企业生态，一键发布众包需求。',
      ind_title: '知识变现<br>文化出海',
      ind_desc: '高校语言人才的专属平台。',
      badge_title: '平台成就体系',
      badge_gold: '认证译员',
      badge_silver: 'Top 100',
      badge_bronze: '全勤达人'
    },
    role_ent: '企业',
    role_ind: '学生',
    welcome: '欢迎回来',
    sub_ent: '企业账号登录',
    sub_ind: '高校师生登录',
    placeholder: {
      ent_account: '企业ID / 邮箱',
      ind_account: '手机号 / 学号',
      password: '密码',
      org_name: '企业全称',
      school: '所在高校',
      phone_email: '手机号/邮箱',
      set_password: '设置密码'
    },
    remember: '记住我',
    forgot: '忘记密码?',
    btn_login: '立即登录',
    logging_in: '登录中...',
    no_account: '还没有账号？',
    to_register: '去注册',
    create_account: '创建账号',
    join_ent: '加入言禾，开启招聘之旅',
    join_ind: '加入言禾，开启成长之旅',
    agree_prefix: '我已阅读并同意',
    agreement: '用户协议',
    btn_register: '注册',
    has_account: '已有账号？',
    to_login: '去登录',
    msg: {
      input_error: '请输入账号和密码',
      login_success: '登录成功',
      agree_error: '请同意协议',
      register_success: '注册申请提交成功'
    }
  },

  // --- 语料上传 (Upload) ---
  upload: {
    title: '方言语料采集终端',
    db_connected: 'DB CONNECTED',
    guest_id: 'GUEST',
    recording_hint: '正在采集... 点击停止',
    start_hint: '点击开始录制',
    form: {
      location_label: '方言归属地',
      location_placeholder: '例如：四川省 成都市',
      meaning_label: '含义 (Meaning)',
      meaning_placeholder: '这句话是什么意思？',
      tags_label: '标签'
    },
    tags: {
      daily: '日常',
      nursery: '童谣',
      slang: '俗语'
    },
    btn_submit: '上传至言禾数据库',
    loading_text: '正在加密上传...',
    success_msg: '上传成功！感谢您对方言保护的贡献'
  },

  // --- 方言地图 (Culture Map) ---
  culture: {
    navbar: {
      subtitle: 'YANHE DIALECT',
      explore: '探索',
      pro: 'PRO',
      passport: '通关文牒'
    },
    tabs: {
      learn: '学习',
      ai: 'AI 测评',
      upload: '语料共建'
    },
    cities: {
      Beijing: {
        name: '北京官话',
        intro: '吞音明显，富有皇城根下的幽默感。',
        tags: ['儿化音', '有面儿'],
        words: [
          { text: '局气', ipa: 'tɕy35 tɕʰi' },
          { text: '没谱儿', ipa: 'mei21 xu' }
        ],
        aiModels: [
          { name: '老派京味 (文读)' }, { name: '新派京味 (口语)' }, { name: '南城口音' }
        ],
        aiChallenge: { word: '这就叫地道！' }
      },
      Shanghai: {
        name: '吴侬软语',
        intro: '声调细腻，体现了海派文化的温婉。',
        tags: ['软糯', '精致'],
        words: [
          { text: '侬好', ipa: 'nɔŋ hɔ' },
          { text: '阿拉', ipa: 'a la' }
        ],
        aiModels: [
          { name: '老派上海话' }, { name: '新派上海话' }
        ],
        aiChallenge: { word: '侬饭吃过伐？' }
      }
    },
    ai: {
      model_base: '当前模型基座:',
      read_guide: '请用 {model} 朗读:',
      listen_sample: '听示范',
      analyzing: 'AI 正在构建声调曲线...',
      comparing: '比对 {city} 音素特征值...',
      analyzing_voice: 'AI 正在分析声纹...',
      release_stop: '松开 结束录音',
      long_press: '长按 开启 AI 测评',
      score_unit: '分',
      tone_analysis: '声调拟合分析',
      retry: '重新挑战',
      comment_good: '太惊艳了！声调曲线与母语者重合度高达 98%。',
      comment_avg: '整体不错，但在变调上可以压得更低一些。',
      dimensions: {
        tone: '声调准确度',
        clarity: '咬字清晰度',
        emotion: '情感饱满度'
      }
    },
    passport: {
      title: '通关文牒',
      close: '合上文牒'
    }
  },

  // --- 会员解锁 (Unlock) ---
  unlock: {
    nav_title: '会员中心',
    restore_purchase: '恢复购买',
    pro_title: 'YANHE PRO',
    pro_desc: '解锁方言全境地图 · AI 深度博弈 · 离线课程',
    benefits: {
      ai: { title: 'AI 纠音', desc: '无限次评测' },
      map: { title: '全境地图', desc: '50+ 城市解锁' },
      npc: { title: '数字夫子', desc: '高阶博弈对话' }
    },
    plans: {
      year_tag: '学生特惠 1 折',
      unit_year: '年',
      year_desc: '平均每天仅需 0.13 元',
      unit_month: '月',
      month_tag: '尝鲜'
    },
    compare: {
      title: '权益对比',
      col_feature: '功能',
      col_free: '免费版',
      row_ai: 'AI 发音评分',
      val_limit: '3次/天',
      row_map: '方言地图探索',
      val_map_limit: '仅限3城',
      val_all: '全境',
      row_npc: 'AI 数字夫子',
      val_unlock: '解锁'
    },
    agreement: '订阅即代表同意《言禾会员服务协议》，支持随时取消续订',
    total: '总计',
    btn_pay: '立即支付',
    login_warn: '请先登录再进行购买',
    verifying: '正在验证支付结果...',
    success_msg: '🎉 恭喜！您已成功开通言禾 PRO 会员',
    pay_modal: {
      title: '言禾收银台',
      amount: '订单金额',
      scan_tip: '微信 / 支付宝 扫码支付',
      btn_mock: '模拟支付成功'
    }
  },

  // --- AI 辩论 (Debate) ---
  debate: {
    header: {
      end_chat: '结束对话',
      topic_label: '当前课题：',
      status_online: '夫子在线'
    },
    topics: {
      business: '商务谈判策略',
      history: '历史兴衰逻辑',
      philosophy: '儒道哲学思想',
      general: '通识对话'
    },
    chat: {
      welcome_prefix: '阁下既入书院，想必是为了探讨',
      welcome_suffix: '而来。',
      welcome_invite: '请出题，吾愿闻其详。',
      thinking: '夫子正在思考...',
      ai_reply_prefix: '阁下所言',
      ai_reply_body: '确有几分道理，但若从长远来看，此事尚有转机。古人云：欲速则不达。在商业谈判中，这种策略可能会引发反弹。'
    },
    footer: {
      input_placeholder: '请输入你的观点 (支持语音输入)...',
      send_btn: '论'
    }
  },

  // --- 教育云 (Education) ---
  education: {
    hero: {
      title: '<i class="bi bi-cpu"></i> AI 数字夫子 · 深度博弈',
      desc: '告别简单对话。在这里，与 AI 进行一场关于 <strong>“儒家哲学”</strong> 或 <strong>“商务谈判”</strong> 的高阶辩论。',
      btn_business: '商务实战',
      btn_history: '历史辩论'
    },
    memory: {
      title: '记忆能量站',
      current_dict: '当前词库',
      forget_alert: '根据艾宾浩斯曲线，你今天有 <strong class="text-warning">{count}</strong> 个生词即将遗忘。',
      saturation: '当前记忆饱和度',
      review_now: '立即复习'
    },
    search_placeholder: '搜索：商务汉语 / 藏语入门 / 诗词鉴赏...',
    btn_search: '搜索',
    tags: {
      all: '综合排序',
      hsk: 'HSK等级',
      business: '商务汉语',
      culture: '中国文化',
      dialect: '方言特色',
      ethnic: '民族语言'
    },
    courses_title_all: '精选好课',
    courses_suffix: '相关课程',
    course_source: {
      original: '言禾原创',
      master: '大师课',
      culture: '文化',
      dialect: '方言'
    },
    courses: {
      c1: { title: '零基础直达HSK 3级：情景对话速成' },
      c2: { title: '商务谈判实战：如何用中文优雅地砍价' },
      c3: { title: '唐诗宋词鉴赏：读懂中国人的浪漫' },
      c4: { title: '四川话入门：从“巴适”开始' }
    },
    free: 'Free',
    ethnic: {
      title: '多民族语言保护计划',
      subtitle: 'The Voice of 56 Ethnic Groups',
      btn_enter: '进入部落',
      items: {
        tibetan: { lang: '藏语 (Tibetan)', desc: '雪域高原的灵魂之声' },
        uyghur: { lang: '维吾尔语 (Uyghur)', desc: '丝绸之路上的语言明珠' },
        zhuang: { lang: '壮语 (Zhuang)', desc: '山歌对唱，刘三姐的故乡' }
      }
    },
    vip_modal: {
      title: '言禾书院 PRO',
      desc: '解锁高阶文化特权',
      ben_1: 'AI 深度辩论',
      ben_2: '非遗大师课',
      ben_3: '方言实时翻译',
      ben_4: '实体证书认证',
      btn_pay: '立即开通 (¥12.9 起)'
    },
    vip_required: '该课程为付费内容，请先开通会员或购买'
  },

  // --- 收银台 (Checkout) ---
  checkout: {
    secure_ssl: '银联认证 SSL 安全支付',
    unit_year: '年',
    countdown_prefix: '价格保留中，请在',
    countdown_suffix: '内完成支付',
    course_info: '课程信息',
    escrow_detail: '托管详情',
    payment_method: '选择支付方式',
    pay_wechat: '微信支付',
    pay_wechat_desc: '推荐使用，安全快捷',
    pay_alipay: '支付宝',
    pay_alipay_desc: '支持花呗、余额宝',
    pay_card: '银联 / 公务卡',
    pay_card_desc: '支持企业网银转账',
    need_invoice: '我需要开具发票',
    summary_title: '费用明细',
    price_original: '原价',
    price_student: '学生认证优惠',
    price_tax: '税费',
    price_course_orig: '课程原价',
    price_discount: '限时折扣',
    price_bounty: '任务赏金',
    price_service_fee: '平台服务费 (5%)',
    price_expedite: '加急处理费',
    total_due: '实付总额',
    processing: '安全支付中...',
    guarantee: '资金由平台担保，7天无理由退款',
    btn_home: '返回首页',
    btn_experience: '立即体验',
    btn_pay_now: '立即支付',
    btn_pay: '支付',
    btn_escrow: '托管资金',
    demo: {
      label: '评委演示模式：',
      scenario_a: '场景A：开通会员',
      scenario_b: '场景B：购买课程',
      scenario_c: '场景C：任务托管'
    },
    products: {
      membership: {
        title: '言禾 Pro 年度会员',
        desc: '学生认证专属特惠 | 365天无限畅享',
        feat1: '解锁所有方言实战场景',
        feat2: '无限次 AI 语音发音纠错',
        feat3: '尊享黑金地图与专属头像'
      },
      course: {
        title: '商务汉语：高级谈判策略',
        tag: '单节课程解锁',
        detail: '包含：45分钟高清视频 + 商务术语表 + AI 模拟对练'
      },
      task: {
        title: '资金托管：法律合同翻译项目',
        tag: '资金已由平台担保',
        detail: '任务编号：#88392\n验收满意后才会打款给创作者。'
      }
    },
    success: {
      membership: { title: '欢迎加入 Pro 会员！', desc: '权益已生效，您可以立即解锁所有方言地图高级功能。' },
      course: { title: '课程解锁成功！', desc: '您可以前往“我的课程”查看并开始学习。' },
      task: { title: '资金托管成功', desc: '任务已发布至大厅，创作者接单后您将收到通知。' }
    }
  },

  // --- 搜索 (Search) ---
  search: {
    nav_back: '返回首页',
    placeholder: '搜索任务、人才、课程...',
    default_keyword: '翻译',
    tabs: {
      all: '全部',
      task: '任务',
      user: '人才',
      course: '课程'
    },
    tags: {
      task: '任务',
      user: '人才',
      course: '课程'
    },
    result_stat: '找到 {count} 个关于 “{keyword}” 的结果',
    empty: {
      title: '没有找到相关内容，换个词试试？',
      tip: '(试试搜：翻译、法律、商务、张杰)'
    },
    btn_contact: '联系他',
    score: '分',
    msg_contact: '已向 {name} 发送合作邀约！'
  },

  // --- 消息中心 (Chat) ---
  chat: {
    nav_back: '返回首页',
    title: '我的消息中心',
    search_placeholder: '搜索联系人...',
    typing: '对方正在输入...',
    menu_profile: '查看资料',
    menu_report: '举报用户',
    input_placeholder: '按 Enter 发送消息...'
  },

  // --- 任务大厅 (Service) ---
  service: {
    role: {
      creator: '我是创作者 (接单)',
      client: '我是需求方 (发单)'
    },
    search: {
      placeholder_creator: '搜索任务：法律翻译、方言录音...',
      placeholder_client: '搜索人才：英语八级、同声传译...',
      btn: '搜索'
    },
    recommend_title: '推荐任务',
    sort_newest: '排序：最新发布',
    task_types: {
      business: '企业商单',
      dialect: '方言采集',
      urgent: '急单'
    },
    status: {
      recruiting: '招募中',
      joined: '已招 {count}/{total} 人'
    },
    auth_card: {
      title: '高校语言人才认证',
      desc: '认证 BSU / 北外 等高校身份，解锁高薪商单，免除平台佣金。',
      btn: '立即认证'
    },
    rank: {
      title: '本周接单榜 (高校区)'
    },
    client: {
      post_title: '发布高薪悬赏',
      post_desc: '针对复杂、专业的语言需求。连接高校 12,000+ 专业人才。',
      tag_escrow: '资金托管',
      tag_audit: '双向盲审',
      btn_post: '立即发布需求',
      ai_title: 'AI 智能极速服务',
      ai_desc: '针对日常、简单的翻译与润色。言禾自研大模型，秒级响应。',
      tag_fast: '立等可取',
      btn_ai: '试用 AI 助手'
    },
    market: {
      title: '近期市场成交行情参考',
      tags: {
        law: '法律',
        interpreting: '口译',
        dubbing: '配音',
        writing: '文书'
      },
      disclaimer: '* 数据基于平台过去 30 天成交均价，仅供参考。'
    }
  },

  // --- 任务详情 (Service Detail) ---
  service_detail: {
    nav_back: '返回大厅',
    breadcrumb_cat: '翻译与本地化',
    breadcrumb_current: '需求详情',
    meta: {
      escrow: '资金已托管',
      urgent: '急需',
      views: '浏览 {count} 次',
      id_label: '需求编号'
    },
    section: {
      background: '项目背景',
      duties: '具体职责',
      skills: '能力要求',
      questions: '筛选问题 (必答)',
      attachment: '附件下载'
    },
    attachment_hint: '2.4 MB · 仅供预览试译',
    bids: {
      title: '投标动态 ({count})',
      stat_joined: '已投标',
      stat_chat: '沟通中',
      stat_active: '雇主活跃',
      stat_rate: '面试率',
      submit_time: '5分钟前 提交了方案'
    },
    sidebar: {
      budget_label: '项目预算 (一口价)',
      unit: '元'
    },
    btn: {
      apply: '立即投标',
      applied: '已投标',
      chat: '在线咨询'
    },
    action: {
      collect: '收藏',
      share: '分享',
      report: '举报'
    },
    client: {
      title: '雇主信息',
      verified: '企业认证用户',
      loc: '所在地区',
      tasks: '发布任务',
      spent: '累计支出',
      rate: '签约率'
    },
    similar_title: '你可能感兴趣',
    similar_demo: '留学申请文书翻译与润色',
    similar_tag: '文书翻译',
    modal: {
      title: '提交投标方案',
      fee_tip: '请如实填写报价和工期。平台将在交易完成后收取 10% 的技术服务费。',
      price_label: '您的报价 (¥)',
      income_calc: '预计到手',
      days_label: '预计工期',
      day_unit: '天',
      urgent_opt: '加急',
      letter_label: '优势陈述 (Cover Letter)',
      letter_ph: '请简述您的相关经验，为什么您是这个项目的最佳人选？',
      ai_polish: 'AI 简历润色',
      ai_done: 'AI 润色已完成',
      upload_label: '上传作品集/简历',
      cancel: '取消',
      confirm: '确认投标',
      submitting: '提交中...',
      success_msg: '✅ 投标成功！请等待雇主联系。'
    }
  },

  // --- 发布需求 (Publish) ---
  publish: {
    nav_title: '发布需求',
    nav_subtitle: '言禾担保交易',
    steps: {
      desc: '需求描述',
      budget: '预算设置'
    },
    types: {
      translation: '笔译/翻译',
      dubbing: '方言配音',
      polish: '文书润色',
      custom: '其他定制'
    },
    form: {
      type_label: '需求类型',
      title_label: '需求标题',
      title_ph: '一句话描述你的需求，如：5000字法律合同英译中',
      desc_label: '详细说明',
      desc_ph: '请详细描述背景、受众、专业术语要求等...',
      upload_label: '上传附件 (选填)',
      upload_hint: '点击或拖拽文件至此'
    },
    btn_next: '下一步：设置预算',
    btn_back: '返回修改需求',
    modes: {
      normal: { title: '普通悬赏', desc: '一人接单，全额独享' },
      contest: { title: '悬赏赛马 (推荐)', desc: '多人入围，优胜大奖' }
    },
    step2: {
      mode_title: '选择合作模式',
      budget_label: '任务预算',
      budget_hint: '资金将托管至平台，验收通过后结算给人才。',
      contest_alert: '您设置的总预算将分为 入围奖 (人人有份) 和 优胜奖 (冠军独享)。',
      total_budget: '总预算',
      max_people: '入围人数',
      recommend: '推荐',
      pool_entry: '入围池',
      per_person: '人均',
      pool_winner: '冠军奖',
      deadline: '期望交付日期',
      deadline_ph: '选择日期',
      urgent_opt: '加急处理 (+ ¥20.00)',
      expert_opt: '仅限认证人才接单'
    },
    footer: {
      total_label: '需托管总额',
      submitting: '提交中...',
      btn_pay: '发布并托管资金'
    },
    msg_title_required: '请输入需求标题',
    msg_budget_invalid: '请输入有效的预算金额',
    msg_success: '需求创建成功，即将跳转支付...'
  },

  // --- 灵感锦囊 (Story AI) ---
  story_ai: {
    title: '灵感锦囊',
    welcome: {
      greeting: '先生/小姐有礼了。我是言禾书童。',
      desc: '可是为了书写中国故事而苦恼？无论是润色文案、查找典故，还是英译中，小童皆可代劳。'
    },
    card_tag: 'AI 妙笔',
    actions: {
      polish: '润色文案',
      polish_prompt: '帮我把这段话改得更有古风韵味：',
      fest: '节日双语',
      fest_prompt: '关于中秋节的唯美文案，带英文翻译',
      culture: '非遗科普',
      culture_prompt: '介绍一下这个非遗文化：'
    },
    input_ph: '请赐教...',
    copied: '已复制到剪贴板'
  },

  // --- 长卷详情 (Detail Paper) ---
  detail_paper: {
    nav_back: '返回长卷',
    date_prefix: '于',
    date_suffix: '记',
    btn_follow: '关注',
    btn_following: '已关注',
    comment_title: '观后·评',
    seal_like: '赏',
    seal_liked: '已阅',
    input_ph: '题写一句...',
    msg_followed: '已关注作者',
    msg_unfollowed: '已取消关注',
    me: '我'
  },

  // --- 创作新篇 (Publish Paper) ---
  publish_paper: {
    nav: {
      cancel: '取消',
      title: '创作新篇',
      publish: '落款'
    },
    upload: {
      change: '点击更换素材',
      placeholder: '点击上传图片或视频'
    },
    form: {
      title_ph: '在此题写标题...',
      ai_btn: 'AI 润色',
      content_ph: '记录当下的见闻与感悟...',
      topic_label: '话题',
      loc_label: '所在位置',
      loc_ph: '点击获取'
    },
    tags: ['新中式', '汉服日常', '非遗文化', '街头美食', '古建筑', 'CityWalk'],
    loc_finding: '定位中...',
    ai_processing: 'AI 正在斟酌词句...',
    publishing: '正在盖章发布...',
    msg_max_tags: '最多选择3个话题',
    msg_no_title: '请先写个标题草稿',
    msg_ai_done: '润色完成',
    msg_success: '发布成功'
  },

  // --- 见闻录 (Culture Scroll) ---
  culture_scroll: {
    nav_back: '返回大厅',
    brand_sub: '浮生卷',
    intro: {
      title: '见闻录',
      desc: '连接全球语言<br>共享中华智慧'
    },
    seal: {
      like: '赞',
      liked: '已阅'
    },
    end_card: {
      title: '未完待续...',
      desc: '点击书写你的故事'
    },
    fab_write: '提笔',
    modal: {
      title: '你想记录什么？',
      opt_ai: 'AI 灵感生成',
      opt_photo: '发图文',
      opt_write: '写长文'
    },
    location_default: '中国 · China'
  },

  // --- 长文写作 (Writer) ---
  writer: {
    nav: {
      back: '收起画卷',
      status_saved: '已落墨',
      status_writing: '书写中...',
      publish: '发布'
    },
    cover: {
      change: '点击更换卷首图',
      add: '添加卷首图 (可选)'
    },
    editor: {
      title_ph: '请输入题名',
      author_suffix: '撰',
      content_ph: '在此处开始书写你的故事...',
      ai_btn: 'AI 续写',
      ai_tip: '续写'
    },
    msg: {
      anonymous: '佚名',
      ai_loading: 'AI 正在研墨构思...',
      ai_done: '续写完成',
      validate_error: '题名与正文不可为空',
      success: '发布成功，已以此文会友'
    }
  },

  // --- 课程播放 (Player) ---
  player: {
    nav: {
      demo_mode: '演示模式',
      demo_exit: '退出演示',
      back: '返回课程表'
    },
    lock: {
      title: '本节为高阶付费内容',
      desc: '解锁本章及后续所有情景剧视频',
      btn_unlock: '解锁本节 (¥ {price})',
      btn_trial: '试看 30 秒'
    },
    resume_tip: '上次看到 {time}，点击跳转',
    tools: {
      label: '学习工具',
      pinyin: '拼音助手',
      pinyin_ph: '选择字母',
      pinyin_tip: '点击字母复制声调：',
      quiz: '随堂小测',
      fav: '收藏课程',
      faved: '已收藏'
    },
    ctrl: {
      speed: '倍速',
      sub_cn: '中',
      sub_en: '英',
      sub_both: '双语',
      subtitle: '字幕'
    },
    meta: {
      views: '次观看',
      key_points: '本节重点'
    },
    playlist: {
      title: '课程目录',
      tabs: {
        all: '全部',
        grammar: '精讲',
        scenario: '情景',
        culture: '文化'
      }
    },
    tags: {
      free: '免费',
      unlocked: '已解锁',
      paid: '付费'
    },
    ai: {
      title: 'AI 助教',
      welcome: '你好！我是言禾 AI 助教。',
      input_ph: '输入问题...',
      mock_reply: '这个问题很有深度！"{input}" 在商务语境下通常意味着...'
    },
    quiz: {
      title: '随堂小测 - 商务礼仪',
      score: '得分',
      btn_submit: '提交答案',
      msg_perfect: '全对！太棒了！'
    },
    msg_jumped: '已跳转至 {time}',
    msg_faved: '已加入收藏',
    msg_unfaved: '取消收藏',
    msg_copied: '已复制: {char}'
  },

  // --- 复习中心 (Review) ---
  review: {
    header: {
      title_menu: '智能复习中心',
      title_flash: '记忆闪卡',
      title_phonics: 'AI 音标纠音',
      title_quiz: '极速挑战',
      streak: '坚持 {day} 天'
    },
    menu: {
      title: '请选择今日复习模式',
      flash: { title: '记忆闪卡', desc: '艾宾浩斯遗忘曲线复习', badge: '待复习: {count}' },
      phonics: { title: 'AI 纠音', desc: '实时分析发音准确度', badge: '新词: {count}' },
      quiz: { title: '极速挑战', desc: '30秒单词辨析闯关', badge: '历史最高: {score}分' }
    },
    flash: {
      tag: '商务核心词汇',
      hint_flip: '点击翻转查看释义',
      kb_hint_prefix: '按',
      kb_space: '空格',
      kb_hint_suffix: '翻转',
      btn_show: '查看答案',
      grade: { again: '重来', hard: '困难', good: '良好', easy: '容易' }
    },
    phonics: {
      status_recording: '正在听取您的发音...',
      status_idle: '点击麦克风开始跟读',
      score_unit: '分',
      fb_perfect: 'Perfect! 发音非常标准',
      fb_good: 'Good! 注意尾音的处理'
    },
    quiz: {
      msg_wrong: '回答错误，正确答案是：{ans}'
    },
    btn_next: '下一个',
    finish: {
      title: '本次任务完成！',
      desc: '您复习了 {count} 个内容，记忆指数 +5%',
      btn_back: '返回选择模式'
    }
  },

  // --- 勋章墙 (Badge) ---
  badge: {
    nav_back: '返回个人主页',
    header: {
      title: '成就勋章墙',
      subtitle: '记录你在言禾的每一次成长与贡献',
      unlocked: '已点亮',
      percentile: '超越了 {percent}% 的用户'
    },
    tabs: {
      all: '全部',
      unlocked: '已解锁',
      locked: '未解锁',
      ssr: '稀有 (SSR)'
    },
    status_locked: '未解锁',
    level_badge: '级勋章',
    meta: {
      condition: '获取条件',
      unlocked_at: '点亮时间',
      progress: '当前进度'
    },
    btn_close: '关闭',
    btn_share: '分享荣誉'
  },

  // --- 高校认证 (Cert) ---
  cert: {
    nav_back: '返回大厅',
    hero: {
      title: '高校语言人才专属认证',
      subtitle: '加入言禾专家库，将你的语言知识转化为价值'
    },
    benefits: {
      free: { title: '免佣金', desc: '校友认证 0 手续费' },
      priority: { title: '优先派单', desc: '高薪商单优先推送' },
      cert: { title: '实习证明', desc: '官方开具实践证明' }
    },
    form: {
      step1: '第一步：基本信息',
      name_label: '真实姓名',
      name_ph: '与学生证一致',
      school_label: '所属高校',
      school_ph: '请选择',
      schools: {
        bsu: '北京体育大学 (BSU)',
        bfsu: '北京外国语大学',
        blcu: '北京语言大学',
        other: '其他高校'
      },
      major_label: '院系/专业',
      major_ph: '例：国际体育组织学院 / 英语',
      id_label: '学号',
      id_ph: '请输入学号',
      step2: '第二步：身份核验',
      upload_label: '上传学生证 / 校园卡正面照片',
      drag_text: '拖拽文件到此处，或',
      click_upload: '点击上传',
      upload_tip: '支持 JPG/PNG 文件，不超过 5MB',
      agree: '我承诺以上信息真实有效，并遵守《言禾平台创作者公约》',
      btn_submit: '提交审核',
      submitting: '正在提交...'
    },
    msg: {
      agree_warn: '请先阅读并同意公约',
      info_warn: '请完善基本信息',
      success: '🎉 提交成功！审核将在 24 小时内完成'
    }
  },

  // --- 个人主页 (Profile) ---
  profile: {
    unnamed: '未命名用户',
    menu: {
      edit: '编辑资料',
      badge: '勋章墙',
      vip: '会员中心'
    },
    header: {
      edit_cover: '编辑封面',
      verified: '已认证',
      no_bio: '暂无简介',
      btn_edit: '编辑资料',
      btn_share: '分享主页'
    },
    stats: {
      following: '关注',
      followers: '粉丝',
      likes: '获赞'
    },
    badges: {
      title: '荣誉勋章',
      all: '全部'
    },
    tabs: {
      overview: '概览',
      learning: '学习',
      posts: '动态',
      collections: '收藏'
    },
    overview: {
      heat_title: '学习活跃度',
      heat_sub: '本年度累计学习 {hours} 小时',
      visitors: '最近访客',
      vip_title: 'PRO 会员权益',
      vip_date: '有效期至 2027.01.01',
      vip_desc: '解锁 AI 纠音与无限翻译特权',
      btn_renew: '续费管理',
      btn_unlock: '立即解锁'
    },
    learning: {
      next: '下一节',
      continue: '继续'
    },
    posts: {
      time_ago: '2小时前',
      demo_content: '这是一个非常精彩的言禾社区动态分享...'
    },
    collections: {
      items: '个内容'
    },
    modal: {
      title: '编辑资料',
      random_avatar: '随机头像',
      label_name: '昵称',
      label_bio: '简介',
      cancel: '取消',
      save: '保存'
    },
    common: {
    cancel: '取消',
    confirm: '确认',
    count_is: '当前计数',
    edit_hint_prefix: '编辑',
    edit_hint_suffix: '来测试热更新 (HMR)',
    check_out: '查看',
    vue_official_starter: '官方 Vue + Vite 起手项目',
    read_docs_tip: '点击 Vite 和 Vue 的图标了解更多信息'
  },
  login: {
    welcome: '欢迎回到言禾',
    btn_login: '立即登录',
    demo_fill: '[演示] 一键填入管理员账号',
    placeholder: {
      ind_account: '账号 / 用户名',
      password: '密码',
    },
    msg: {
      input_error: '请输入完整账号密码',
      login_success: '登录成功，欢迎回来！',
    }
  },
  ai: {
    title: '言禾 AI',
    waking_up: 'AI 助手苏醒中...',
    sync_established: '同步已建立，请指示。',
    hello_world: '你好！我是你的言禾智能助手。',
    thinking: '思考中',
    input_placeholder: '与爱丽丝同步...',
    action_happy: '最喜欢你了！❤️',
    error_msg: '同步中断，请检查连接。',
    demo_greeting: '你好呀！看到我了吗？<br>我是从 public 文件夹加载的哦！',
    model_loaded: '✅ 模型加载成功！',
    loading_progress: '加载进度：',
    model_failed: '❌ 模型加载失败：'
  },
  education: {
    pinyin_check_title: '拼音智能纠错',
    pinyin_check_hint: '点击字母，选择正确的声调',
    pinyin_complete_title: '拼写完成！',
    pinyin_result_desc: '最终结果：{result}'
  },
  player: {
    video_not_supported: '您的浏览器不支持 Video 标签。',
    speed_label: '倍速播放：',
    resume_tip: '为您恢复上次播放进度：{time}',
    time_format: '{m}分{s}秒'
  },
    msg_banner_success: '封面更新成功！',
    msg_save_success: '保存成功'
  },
  ai: {
    // 对应组件中的 messages 初始内容
    sync_established: '同步已建立，请指示。',
    // 对应组件中的 loadingAI 思考状态
    thinking: '思考中',
    // 对应组件中的 input placeholder
    input_placeholder: '与爱丽丝同步...',
    // 对应组件中的 handleAction (双击彩蛋)
    action_happy: '最喜欢你了！❤️',
    // 对应组件中的错误处理
    error_msg: '同步中断，请检查连接。',
    
    // 以下是你之前语言包里可能已有的，可以合并或保留
    new_chat: '新对话',
    welcome_title: '我是言禾 AI，有什么可以帮您？'
  }
}