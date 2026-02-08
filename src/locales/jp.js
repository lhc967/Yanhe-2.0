export default {
  // --- Global (グローバル) ---
  brand: '言禾 YanHe',
  nav: {
    home: 'ホーム',
    story: 'ストーリー',
    education: '教育クラウド',
    service: 'タスク',
    map: '方言マップ',
    login: 'ログイン'
  },
  user: {
    profile: 'プロフィール',
    orders: '注文履歴',
    logout: 'ログアウト',
    vip_active: 'Pro 有効',
    vip_join: 'Proに参加',
    logout_success: 'ログアウトしました'
  },
  loading: {
    map: 'マップデータを読み込み中...',
    audio: '音声を読み込み中...',
    uploading: '暗号化してアップロード中...'
  },
  login_warn: '先にログインしてください',

  // --- Home (ホーム) ---
  home: {
    nav: {
      home: 'ホーム',
      story: 'ストーリー',
      edu: '教育クラウド',
      task: 'タスクホール',
      map: '方言マップ',
      login: 'ログイン',
      lang_en: 'English'
    },
    hero: {
      badge_1: '教育部パイロット事業',
      badge_2: '農村振興プロジェクト',
      title_1: '世界の言語をつなぐ',
      title_2: '共有する',
      title_high: '中華の知恵',
      desc: 'AIエージェントとGIS技術に基づく国際中国語教育プラットフォーム。トップクラスのコースと専門的な翻訳サービスを集約。',
      btn_task: 'タスクセンター',
      btn_learn: '学習を開始',
      patent: '特許番号：ZL2025100XXXX',
      copyright: '著作権番号：2025SRXXXX'
    },
    stats: {
      countries: '国・地域',
      experts: '言語専門家',
      income: '平均収入 (元)',
      students: '支援学生数'
    },
    cards: {
      story_title: '中国ストーリー',
      story_desc: 'リアルな中国文化を探索する没入型コミュニティ。',
      edu_title: 'スマート教育',
      edu_desc: 'AI支援教育とエビングハウス忘却曲線。',
      task_title: 'タスクホール',
      task_desc: '企業のニーズと大学の人材をマッチング。',
      map_title: '方言マップ Pro',
      map_desc: '方言文化を保護するGIS可視化技術。'
    }
  },

  // --- AI Chat (AIチャット) ---
  ai: {
    new_chat: '新しいチャット',
    history: {
      today: '今日',
      yesterday: '昨日',
      demo1: 'ビジネスメール添削',
      demo2: '契約書翻訳',
      demo3: '留学志望動機書の修正'
    },
    guest: 'ゲスト',
    models: {
      pro_desc: '複雑なタスク向けの強力な推論',
      fast_desc: '日常翻訳向けの高速応答',
      creative_desc: 'コピーライティング向けの拡散的思考'
    },
    clear_chat: 'チャットをクリア',
    welcome_title: '言禾AIです、何かお手伝いしましょうか？',
    shortcuts: {
      translate_title: '中英翻訳',
      translate_desc: 'ビジネス/法律/学術',
      translate_prompt: 'これを自然なビジネス英語に翻訳してください：',
      polish_title: '文章推敲',
      polish_desc: 'プロフェッショナルなトーンに',
      polish_prompt: 'このメールをより丁寧な表現に修正してください：',
      grammar_title: '文法チェック',
      grammar_desc: '誤りの分析',
      grammar_prompt: '文法ミスをチェックし、理由を説明してください：',
      culture_title: '文化クエリ',
      culture_desc: '成語/故事/習慣',
      culture_prompt: 'この中国の成語の文化的背景と故事を説明してください：'
    },
    input_placeholder: 'メッセージを入力 (Shift + Enter で改行)...',
    disclaimer: 'AI生成コンテンツには誤りが含まれる可能性があります。重要なドキュメントは必ず手動で確認してください。',
    copy: 'コピー',
    retry: '再試行',
    cleared: 'クリアしました',
    copied: 'クリップボードにコピーしました',
    error_msg: 'ネットワークエラー、後でもう一度お試しください',
    mock: {
      default: "これはAIのシミュレーション応答です。\n\n1. **専門性**：文脈に応じてトーンを調整します。\n2. **正確性**：膨大なコーパスに基づいています。\n\nより詳細な回答が必要な場合は、背景情報を提供してください。",
      trans: "翻訳結果はこちらです：\n\n**ビジネス文脈**：\n> The contract shall come into force upon signature.\n\n**解説**：\nよりフォーマルな印象を与えるために、'start' の代わりに 'come into force' を使用しました。",
      polish: "修正案：\n\n**原文**：I want to ask if you can give me a discount.\n**最適化**：Could you please consider offering a discount?\n\n**理由**：'Could you please' を使うことで、より丁寧で礼儀正しくなります。"
    }
  },

  // --- Login (ログイン) ---
  login: {
    back_home: 'ホームへ',
    brand: {
      ent_title: '世界中の言語人材を<br>つなぐ',
      ent_desc: '言禾の企業エコシステムに参加し、クラウドソーシングニーズを一括投稿。',
      ind_title: '知識の収益化<br>文化の輸出',
      ind_desc: '大学言語人材のための専用プラットフォーム。',
      badge_title: 'プラットフォーム実績',
      badge_gold: '認定翻訳者',
      badge_silver: 'Top 100',
      badge_bronze: '皆勤賞'
    },
    role_ent: '企業',
    role_ind: '学生',
    welcome: 'お帰りなさい',
    sub_ent: '企業アカウントログイン',
    sub_ind: '学生・教員ログイン',
    placeholder: {
      ent_account: '企業ID / メール',
      ind_account: '携帯番号 / 学籍番号',
      password: 'パスワード',
      org_name: '企業正式名称',
      school: '所属大学',
      phone_email: '携帯 / メール',
      set_password: 'パスワード設定'
    },
    remember: 'ログイン状態を保持',
    forgot: 'パスワードを忘れた場合',
    btn_login: 'ログイン',
    logging_in: 'ログイン中...',
    no_account: 'アカウントをお持ちでないですか？',
    to_register: '新規登録',
    create_account: 'アカウント作成',
    join_ent: '言禾に参加して、採用を始める',
    join_ind: '言禾に参加して、成長を始める',
    agree_prefix: '私は読み、同意しました',
    agreement: '利用規約',
    btn_register: '登録',
    has_account: 'すでにアカウントをお持ちですか？',
    to_login: 'ログイン',
    msg: {
      input_error: 'アカウントとパスワードを入力してください',
      login_success: 'ログイン成功',
      agree_error: '規約に同意してください',
      register_success: '登録申請が送信されました'
    }
  },

  // --- Upload (アップロード) ---
  upload: {
    title: '方言収集ターミナル',
    db_connected: 'DB接続済み',
    guest_id: 'ゲスト',
    recording_hint: '収集中... クリックして停止',
    start_hint: 'クリックして録音',
    form: {
      location_label: '方言の場所',
      location_placeholder: '例：四川省 成都市',
      meaning_label: '意味 (Meaning)',
      meaning_placeholder: 'このフレーズはどういう意味ですか？',
      tags_label: 'タグ'
    },
    tags: {
      daily: '日常',
      nursery: '童謡',
      slang: 'スラング'
    },
    btn_submit: '言禾データベースにアップロード',
    loading_text: '暗号化してアップロード中...',
    success_msg: 'アップロード成功！方言保護への貢献ありがとうございます。'
  },

  // --- Culture Map (方言マップ) ---
  culture: {
    navbar: {
      subtitle: 'YANHE DIALECT',
      explore: '探索',
      pro: 'PRO',
      passport: '通行手形'
    },
    tabs: {
      learn: '学習',
      ai: 'AI評価',
      upload: '共創'
    },
    cities: {
      Beijing: {
        name: '北京官話',
        intro: '巻き舌音が特徴的で、皇城独特のユーモアがある。',
        tags: ['アル化', '面子'],
        words: [
          { text: '局气 (義理堅い)', ipa: 'tɕy35 tɕʰi' },
          { text: '没谱儿 (頼りない)', ipa: 'mei21 xu' }
        ],
        aiModels: [
          { name: '旧北京訛り (文語)' }, { name: '新北京訛り (口語)' }, { name: '城南アクセント' }
        ],
        aiChallenge: { word: 'これが本場だ！' }
      },
      Shanghai: {
        name: '上海呉語',
        intro: '繊細な声調で、海派文化の優雅さを体現している。',
        tags: ['柔らかい', '繊細'],
        words: [
          { text: '侬好 (こんにちは)', ipa: 'nɔŋ hɔ' },
          { text: '阿拉 (私たち)', ipa: 'a la' }
        ],
        aiModels: [
          { name: '旧上海語' }, { name: '新上海語' }
        ],
        aiChallenge: { word: 'ご飯食べた？' }
      }
    },
    ai: {
      model_base: 'ベースモデル:',
      read_guide: '{model}で読んでください:',
      listen_sample: '手本を聞く',
      analyzing: '声調曲線を構築中...',
      comparing: '{city}の音素特徴と比較中...',
      analyzing_voice: '声紋分析中...',
      release_stop: '離して終了',
      long_press: '長押しでAI評価',
      score_unit: '点',
      tone_analysis: '声調適合分析',
      retry: '再挑戦',
      comment_good: '素晴らしい！ネイティブとの一致率が98%に達しています。',
      comment_avg: '全体的に良いですが、変調をもっと低く抑えられます。',
      dimensions: {
        tone: '声調の正確さ',
        clarity: '発音の明瞭さ',
        emotion: '感情の豊かさ'
      }
    },
    passport: {
      title: '通行手形',
      close: '閉じる'
    }
  },

  // --- Unlock (Pro解禁) ---
  unlock: {
    nav_title: '会員センター',
    restore_purchase: '購入を復元',
    pro_title: '言禾 PRO',
    pro_desc: '全マップ解禁 · AI深層対話 · オフラインコース',
    benefits: {
      ai: { title: 'AI矯正', desc: '無制限評価' },
      map: { title: '全マップ', desc: '50+ 都市解禁' },
      npc: { title: 'デジタル師匠', desc: '高度な対話' }
    },
    plans: {
      year_tag: '学生限定90%OFF',
      unit_year: '年',
      year_desc: '1日あたりわずか0.13元',
      unit_month: '月',
      month_tag: 'お試し'
    },
    compare: {
      title: 'プラン比較',
      col_feature: '機能',
      col_free: '無料版',
      row_ai: 'AI発音採点',
      val_limit: '3回/日',
      row_map: 'マップ探索',
      val_map_limit: '3都市限定',
      val_all: '全域',
      row_npc: 'デジタル師匠',
      val_unlock: '解禁'
    },
    agreement: '購読することで「言禾会員サービス規約」に同意したことになります。いつでも解約可能。',
    total: '合計',
    btn_pay: '今すぐ支払う',
    login_warn: '購入する前にログインしてください',
    verifying: '支払結果を確認中...',
    success_msg: '🎉 おめでとうございます！言禾 PRO会員が開通しました。',
    pay_modal: {
      title: '言禾レジ',
      amount: '注文金額',
      scan_tip: 'WeChat / Alipay でスキャン',
      btn_mock: '支払成功をシミュレート'
    }
  },

  // --- Debate (AI討論) ---
  debate: {
    header: {
      end_chat: '対話を終了',
      topic_label: '現在の課題：',
      status_online: '師匠オンライン'
    },
    topics: {
      business: 'ビジネス交渉戦略',
      history: '歴史的興亡の論理',
      philosophy: '儒教・道教思想',
      general: '一般教養対話'
    },
    chat: {
      welcome_prefix: '書院に入られたということは、',
      welcome_suffix: 'について議論するためでしょう。',
      welcome_invite: 'どうぞ持論を述べてください、拝聴いたします。',
      thinking: '師匠が思考中...',
      ai_reply_prefix: 'あなたが仰った',
      ai_reply_body: 'には一理あります。しかし長期的視点で見れば、「急がば回れ」です。ビジネス交渉において、その戦略は反発を招く恐れがあります。'
    },
    footer: {
      input_placeholder: 'あなたの観点を入力 (音声入力対応)...',
      send_btn: '論'
    }
  },

  // --- Education (教育クラウド) ---
  education: {
    hero: {
      title: '<i class="bi bi-cpu"></i> AIデジタル師匠 · 深層討論',
      desc: '単純な対話を超えて。AIと<strong>「儒教哲学」</strong>や<strong>「ビジネス交渉」</strong>について高度な討論を行いましょう。',
      btn_business: 'ビジネス実戦',
      btn_history: '歴史討論'
    },
    memory: {
      title: '記憶エネルギーステーション',
      current_dict: '現在の単語帳',
      forget_alert: 'エビングハウス曲線によると、今日 <strong class="text-warning">{count}</strong> 個の単語を忘れそうです。',
      saturation: '記憶飽和度',
      review_now: '今すぐ復習'
    },
    search_placeholder: '検索：ビジネス中国語 / チベット語入門 / 詩吟...',
    btn_search: '検索',
    tags: {
      all: '総合順',
      hsk: 'HSKレベル',
      business: 'ビジネス',
      culture: '中国文化',
      dialect: '方言の特色',
      ethnic: '民族言語'
    },
    courses_title_all: '厳選コース',
    courses_suffix: '関連コース',
    course_source: {
      original: '言禾オリジナル',
      master: 'マスタークラス',
      culture: '文化',
      dialect: '方言'
    },
    courses: {
      c1: { title: 'ゼロからHSK3級：会話速成' },
      c2: { title: 'ビジネス交渉実戦：優雅な値切り方' },
      c3: { title: '唐詩宋詞鑑賞：中国人のロマンを読む' },
      c4: { title: '四川語入門：「巴适」から始めよう' }
    },
    free: '無料',
    ethnic: {
      title: '多民族言語保護計画',
      subtitle: '56民族の声',
      btn_enter: '集落に入る',
      items: {
        tibetan: { lang: 'チベット語', desc: '雪原の魂の声' },
        uyghur: { lang: 'ウイグル語', desc: 'シルクロードの真珠' },
        zhuang: { lang: 'チワン語', desc: '劉三姐の故郷の山歌' }
      }
    },
    vip_modal: {
      title: '言禾書院 PRO',
      desc: '高度な文化特権を解禁',
      ben_1: 'AI深層討論',
      ben_2: '無形文化遺産マスタークラス',
      ben_3: '方言リアルタイム翻訳',
      ben_4: '実物証明書発行',
      btn_pay: '今すぐ開通 (¥12.9〜)'
    },
    vip_required: 'このコースは有料です。会員登録または購入してください。'
  },

  // --- Checkout (レジ) ---
  checkout: {
    secure_ssl: '銀聯認証 SSL安全支払',
    unit_year: '年',
    countdown_prefix: '価格保留中、',
    countdown_suffix: '以内に支払いを完了してください',
    course_info: 'コース情報',
    escrow_detail: 'エスクロー詳細',
    payment_method: '支払い方法を選択',
    pay_wechat: 'WeChat Pay',
    pay_wechat_desc: '推奨、安全かつ迅速',
    pay_alipay: 'Alipay',
    pay_alipay_desc: '花唄、余額宝に対応',
    pay_card: '銀聯 / 公務カード',
    pay_card_desc: '企業ネットバンキング対応',
    need_invoice: '領収書が必要です',
    summary_title: '費用明細',
    price_original: '定価',
    price_student: '学生割引',
    price_tax: '税金',
    price_course_orig: 'コース原価',
    price_discount: '期間限定割引',
    price_bounty: 'タスク報酬金',
    price_service_fee: 'プラットフォーム手数料 (5%)',
    price_expedite: '特急処理費',
    total_due: '支払総額',
    processing: '安全に処理中...',
    guarantee: '資金はプラットフォームが保証、7日間無理由返金',
    btn_home: 'ホームに戻る',
    btn_experience: 'すぐに体験',
    btn_pay_now: '今すぐ支払う',
    btn_pay: '支払う',
    btn_escrow: '資金を預託',
    demo: {
      label: '審査員デモモード：',
      scenario_a: 'シナリオA：会員登録',
      scenario_b: 'シナリオB：コース購入',
      scenario_c: 'シナリオC：タスク預託'
    },
    products: {
      membership: {
        title: '言禾 Pro 年間会員',
        desc: '学生認証限定割引 | 365日無制限アクセス',
        feat1: '全方言実戦シナリオ解禁',
        feat2: '無制限AI発音矯正',
        feat3: 'ブラックゴールドマップと専用アイコン'
      },
      course: {
        title: 'ビジネス中国語：上級交渉戦略',
        tag: '単体コース購入',
        detail: '内容：45分HDビデオ + ビジネス用語集 + AI模擬練習'
      },
      task: {
        title: '資金エスクロー：法的契約翻訳案件',
        tag: 'プラットフォーム資金保証済み',
        detail: 'タスク番号：#88392\n検収完了後にクリエイターへ送金されます。'
      }
    },
    success: {
      membership: { title: 'Pro会員へようこそ！', desc: '特典が有効になりました。すべての方言マップ高級機能をすぐにご利用いただけます。' },
      course: { title: 'コース解禁成功！', desc: '「マイコース」から学習を開始できます。' },
      task: { title: '資金預託成功', desc: 'タスクがホールに公開されました。クリエイターが受注すると通知が届きます。' }
    }
  },

  // --- Search (検索) ---
  search: {
    nav_back: 'ホームに戻る',
    placeholder: 'タスク、人材、コースを検索...',
    default_keyword: '翻訳',
    tabs: {
      all: 'すべて',
      task: 'タスク',
      user: '人材',
      course: 'コース'
    },
    tags: {
      task: 'タスク',
      user: '人材',
      course: 'コース'
    },
    result_stat: '"{keyword}" に関する結果が {count} 件見つかりました',
    empty: {
      title: '関連コンテンツが見つかりません。別の単語で試しますか？',
      tip: '(試す：翻訳、法律、ビジネス、Jack)'
    },
    btn_contact: '連絡する',
    score: '点',
    msg_contact: '{name} に協力依頼を送信しました！'
  },

  // --- Chat (メッセージ) ---
  chat: {
    nav_back: 'ホームに戻る',
    title: 'メッセージセンター',
    search_placeholder: '連絡先を検索...',
    typing: '相手が入力中...',
    menu_profile: 'プロフィールを見る',
    menu_report: 'ユーザーを報告',
    input_placeholder: 'Enterキーで送信...'
  },

  // --- Service (タスクホール) ---
  service: {
    role: {
      creator: '私はクリエイター (受注)',
      client: '私はクライアント (発注)'
    },
    search: {
      placeholder_creator: 'タスク検索：法律翻訳、方言録音...',
      placeholder_client: '人材検索：英語専攻八級、同時通訳...',
      btn: '検索'
    },
    recommend_title: 'おすすめタスク',
    sort_newest: '並び替え：最新順',
    task_types: {
      business: '企業案件',
      dialect: '方言収集',
      urgent: '急募'
    },
    status: {
      recruiting: '募集中',
      joined: '参加済 {count}/{total} 人'
    },
    auth_card: {
      title: '大学言語人材認証',
      desc: 'BSU / 北外 などの大学身分を認証し、高単価案件を解禁、手数料免除。',
      btn: '今すぐ認証'
    },
    rank: {
      title: '今週の受注ランキング (大学区)'
    },
    client: {
      post_title: '高額懸賞を公開',
      post_desc: '複雑で専門的な言語ニーズ向け。12,000+ の大学専門人材とつながる。',
      tag_escrow: '資金エスクロー',
      tag_audit: 'ブラインド審査',
      btn_post: '今すぐニーズを公開',
      ai_title: 'AIスマート特急サービス',
      ai_desc: '日常の簡単な翻訳や潤色向け。言禾独自の大規模モデルで秒速応答。',
      tag_fast: '即時完了',
      btn_ai: 'AIアシスタントを試す'
    },
    market: {
      title: '最近の市場成約相場参考',
      tags: {
        law: '法律',
        interpreting: '通訳',
        dubbing: 'アフレコ',
        writing: '文書'
      },
      disclaimer: '* データはプラットフォームの過去30日間の成約平均価格に基づきます。'
    }
  },

  // --- Service Detail (タスク詳細) ---
  service_detail: {
    nav_back: 'ホールに戻る',
    breadcrumb_cat: '翻訳とローカリゼーション',
    breadcrumb_current: 'ニーズ詳細',
    meta: {
      escrow: '資金エスクロー済',
      urgent: '急募',
      views: '閲覧 {count} 回',
      id_label: 'ニーズ番号'
    },
    section: {
      background: 'プロジェクト背景',
      duties: '具体的職務',
      skills: '能力要件',
      questions: '選考質問 (必須)',
      attachment: '添付ファイル'
    },
    attachment_hint: '2.4 MB · プレビュー用',
    bids: {
      title: '入札状況 ({count})',
      stat_joined: '入札済',
      stat_chat: '交渉中',
      stat_active: '雇用主活動',
      stat_rate: '面接率',
      submit_time: '5分前に提案を提出'
    },
    sidebar: {
      budget_label: 'プロジェクト予算 (固定)',
      unit: '元'
    },
    btn: {
      apply: '今すぐ入札',
      applied: '入札済み',
      chat: 'オンライン相談'
    },
    action: {
      collect: '保存',
      share: '共有',
      report: '報告'
    },
    client: {
      title: '雇用主情報',
      verified: '企業認証ユーザー',
      loc: '所在地',
      tasks: '公開タスク',
      spent: '累計支出',
      rate: '契約率'
    },
    similar_title: '興味があるかも',
    similar_demo: '留学申請書の翻訳と潤色',
    similar_tag: '文書翻訳',
    modal: {
      title: '入札提案を提出',
      fee_tip: '見積額と工期を正直に記入してください。取引完了後、プラットフォームは10%の技術サービス料を徴収します。',
      price_label: '見積もり (¥)',
      income_calc: '受取予定',
      days_label: '予定工期',
      day_unit: '日',
      urgent_opt: '特急',
      letter_label: '強みのアピール (カバーレター)',
      letter_ph: '関連経験を簡潔に述べてください。なぜあなたがこのプロジェクトに最適なのですか？',
      ai_polish: 'AI履歴書潤色',
      ai_done: 'AI潤色が完了しました',
      upload_label: 'ポートフォリオ/履歴書アップロード',
      cancel: 'キャンセル',
      confirm: '入札確認',
      submitting: '提出中...',
      success_msg: '✅ 入札成功！雇用主からの連絡をお待ちください。'
    }
  },

  // --- Publish (タスク公開) ---
  publish: {
    nav_title: 'ニーズを公開',
    nav_subtitle: '言禾保証取引',
    steps: {
      desc: 'ニーズ記述',
      budget: '予算設定'
    },
    types: {
      translation: '翻訳/筆訳',
      dubbing: '方言吹き替え',
      polish: '文書潤色',
      custom: 'その他カスタマイズ'
    },
    form: {
      type_label: 'ニーズタイプ',
      title_label: 'ニーズタイトル',
      title_ph: '一言でニーズを記述、例：5000字法律契約英中翻訳',
      desc_label: '詳細説明',
      desc_ph: '背景、ターゲット、専門用語の要件などを詳しく記述してください...',
      upload_label: '添付ファイル (任意)',
      upload_hint: 'クリックまたはドラッグしてファイルをアップロード'
    },
    btn_next: '次へ：予算設定',
    btn_back: '戻って修正',
    modes: {
      normal: { title: '通常懸賞', desc: '一人が受注、全額独占' },
      contest: { title: 'コンペ形式 (推奨)', desc: '多数が入選、優勝者に大賞' }
    },
    step2: {
      mode_title: '協力モード選択',
      budget_label: 'タスク予算',
      budget_hint: '資金はプラットフォームにエスクローされ、検収通過後に人材に決済されます。',
      contest_alert: '設定した総予算は、入選賞（全員配布）と優勝賞（独占）に分けられます。',
      total_budget: '総予算',
      max_people: '入選人数',
      recommend: '推奨',
      pool_entry: '入選プール',
      per_person: '一人平均',
      pool_winner: '優勝賞',
      deadline: '希望納期',
      deadline_ph: '日付を選択',
      urgent_opt: '特急処理 (+ ¥20.00)',
      expert_opt: '認証人材のみ受注可能'
    },
    footer: {
      total_label: 'エスクロー総額',
      submitting: '提出中...',
      btn_pay: '公開して資金を預託'
    },
    msg_title_required: 'ニーズタイトルを入力してください',
    msg_budget_invalid: '有効な予算額を入力してください',
    msg_success: 'ニーズ作成成功、支払いに移動します...'
  },

  // --- Story AI (霊感錦嚢) ---
  story_ai: {
    title: 'インスピレーションキット',
    welcome: {
      greeting: 'ごきげんよう。私は言禾の書童です。',
      desc: '中国の物語を書くのにお困りですか？文章の潤色、典故の検索、英中翻訳など、小童がお手伝いします。'
    },
    card_tag: 'AIの妙筆',
    actions: {
      polish: '文章潤色',
      polish_prompt: 'この文章をより古風な韻致のあるものに修正して：',
      fest: '祝日バイリンガル',
      fest_prompt: '中秋節に関する美しい文章を英語翻訳付きで',
      culture: '無形文化遺産',
      culture_prompt: 'この無形文化遺産を紹介して：'
    },
    input_ph: 'ご教示ください...',
    copied: 'クリップボードにコピーしました'
  },

  // --- Detail Paper (巻物詳細) ---
  detail_paper: {
    nav_back: '巻物に戻る',
    date_prefix: '',
    date_suffix: 'に記す',
    btn_follow: 'フォロー',
    btn_following: 'フォロー中',
    comment_title: '読後・評',
    seal_like: '賞',
    seal_liked: '既読',
    input_ph: '一筆したためる...',
    msg_followed: '著者をフォローしました',
    msg_unfollowed: 'フォローを解除しました',
    me: '私'
  },

  // --- Publish Paper (新作投稿) ---
  publish_paper: {
    nav: {
      cancel: '取消',
      title: '新作創作',
      publish: '落款'
    },
    upload: {
      change: '素材を変更',
      placeholder: 'クリックして画像/動画をアップロード'
    },
    form: {
      title_ph: 'ここにタイトルを...',
      ai_btn: 'AI潤色',
      content_ph: '今の見聞や感想を記録...',
      topic_label: 'トピック',
      loc_label: '現在地',
      loc_ph: '取得をクリック'
    },
    tags: ['新中華風', '漢服日常', '無形文化遺産', '屋台グルメ', '古建築', 'CityWalk'],
    loc_finding: '測位中...',
    ai_processing: 'AIが推敲中...',
    publishing: '捺印して公開中...',
    msg_max_tags: 'トピックは最大3つまで',
    msg_no_title: '先にタイトルの下書きをしてください',
    msg_ai_done: '潤色完了',
    msg_success: '公開成功'
  },

  // --- Culture Scroll (見聞録) ---
  culture_scroll: {
    nav_back: 'ホールに戻る',
    brand_sub: '浮生巻',
    intro: {
      title: '見聞録',
      desc: '世界の言語をつなぎ<br>中華の知恵を共有する'
    },
    seal: {
      like: 'いいね',
      liked: '既読'
    },
    end_card: {
      title: '続く...',
      desc: 'クリックしてあなたの物語を書く'
    },
    fab_write: '執筆',
    modal: {
      title: '何を記録しますか？',
      opt_ai: 'AIインスピレーション',
      opt_photo: '画像/文章',
      opt_write: '長文記事'
    },
    location_default: '中国 · China'
  },

  // --- Writer (長文執筆) ---
  writer: {
    nav: {
      back: '巻物を閉じる',
      status_saved: '墨が乾きました',
      status_writing: '執筆中...',
      publish: '公開'
    },
    cover: {
      change: '巻頭画を変更',
      add: '巻頭画を追加 (任意)'
    },
    editor: {
      title_ph: 'タイトルを入力',
      author_suffix: '撰',
      content_ph: 'ここから物語を書き始めましょう...',
      ai_btn: 'AI続き書き',
      ai_tip: '続き'
    },
    msg: {
      anonymous: '匿名',
      ai_loading: 'AIが構想を練っています...',
      ai_done: '続き書き完了',
      validate_error: 'タイトルと本文は必須です',
      success: '公開成功、この文で友と会う'
    }
  },

  // --- Course Player (コース再生) ---
  player: {
    nav: {
      demo_mode: 'デモモード',
      demo_exit: 'デモ終了',
      back: '時間割に戻る'
    },
    lock: {
      title: '本節は上級有料コンテンツです',
      desc: 'この章と以降のすべてのシナリオ動画を解禁',
      btn_unlock: '本節を解禁 (¥ {price})',
      btn_trial: '30秒試聴'
    },
    resume_tip: '前回は {time} まで見ました、クリックしてジャンプ',
    tools: {
      label: '学習ツール',
      pinyin: 'ピンイン助手',
      pinyin_ph: '文字を選択',
      pinyin_tip: 'クリックして声調をコピー：',
      quiz: '随時テスト',
      fav: 'コースを收藏',
      faved: '收藏済み'
    },
    ctrl: {
      speed: '倍速',
      sub_cn: '中',
      sub_en: '英',
      sub_both: '二言語',
      subtitle: '字幕'
    },
    meta: {
      views: '回視聴',
      key_points: '本節の重点'
    },
    playlist: {
      title: 'コース目次',
      tabs: {
        all: 'すべて',
        grammar: '講義',
        scenario: 'シナリオ',
        culture: '文化'
      }
    },
    tags: {
      free: '無料',
      unlocked: '解禁済',
      paid: '有料'
    },
    ai: {
      title: 'AIチューター',
      welcome: 'こんにちは！言禾AIチューターです。',
      input_ph: '質問を入力...',
      mock_reply: '深い質問ですね！"{input}" はビジネスの文脈では通常...'
    },
    quiz: {
      title: '随時テスト - ビジネスエチケット',
      score: '得点',
      btn_submit: '回答を提出',
      msg_perfect: '全問正解！素晴らしい！'
    },
    msg_jumped: '{time} にジャンプしました',
    msg_faved: 'お気に入りに追加しました',
    msg_unfaved: 'お気に入りを解除しました',
    msg_copied: 'コピーしました: {char}'
  },

  // --- Review Center (復習センター) ---
  review: {
    header: {
      title_menu: 'スマート復習センター',
      title_flash: '記憶フラッシュカード',
      title_phonics: 'AI発音矯正',
      title_quiz: 'スピード挑戦',
      streak: '{day}日連続'
    },
    menu: {
      title: '今日の復習モードを選択',
      flash: { title: '記憶カード', desc: 'エビングハウス忘却曲線復習', badge: '復習待ち: {count}' },
      phonics: { title: 'AI矯正', desc: '発音精度をリアルタイム分析', badge: '新出単語: {count}' },
      quiz: { title: 'スピード挑戦', desc: '30秒単語識別チャレンジ', badge: '最高得点: {score}点' }
    },
    flash: {
      tag: 'ビジネス核心語彙',
      hint_flip: 'クリックして意味を表示',
      kb_hint_prefix: 'キーボードの',
      kb_space: 'スペース',
      kb_hint_suffix: 'で反転',
      btn_show: '答えを見る',
      grade: { again: 'やり直し', hard: '困難', good: '良好', easy: '簡単' }
    },
    phonics: {
      status_recording: '発音を聞き取っています...',
      status_idle: 'マイクをクリックして音読開始',
      score_unit: '点',
      fb_perfect: 'Perfect! 標準的な発音です',
      fb_good: 'Good! 語尾の処理に注意しましょう'
    },
    quiz: {
      msg_wrong: '不正解です。正解は：{ans}'
    },
    btn_next: '次へ',
    finish: {
      title: '今回のタスク完了！',
      desc: '{count} 個の内容を復習しました。記憶指数 +5%',
      btn_back: 'モード選択に戻る'
    }
  },

  // --- Badge Wall (勲章ウォール) ---
  badge: {
    nav_back: 'プロフィールに戻る',
    header: {
      title: '実績勲章ウォール',
      subtitle: '言禾での成長と貢献を記録',
      unlocked: '点灯済み',
      percentile: 'ユーザーの {percent}% を超えました'
    },
    tabs: {
      all: 'すべて',
      unlocked: '解禁済',
      locked: '未解禁',
      ssr: 'レア (SSR)'
    },
    status_locked: '未解禁',
    level_badge: '級勲章',
    meta: {
      condition: '獲得条件',
      unlocked_at: '点灯日時',
      progress: '現在の進捗'
    },
    btn_close: '閉じる',
    btn_share: '栄誉をシェア'
  },

  // --- Cert (大学認証) ---
  cert: {
    nav_back: 'ホールに戻る',
    hero: {
      title: '大学言語人材専用認証',
      subtitle: '言禾専門家プールに参加し、言語知識を価値に変える'
    },
    benefits: {
      free: { title: '手数料無料', desc: '学友認証で手数料0' },
      priority: { title: '優先配分', desc: '高額案件を優先プッシュ' },
      cert: { title: '実習証明', desc: '公式実践証明書発行' }
    },
    form: {
      step1: 'ステップ1：基本情報',
      name_label: '本名',
      name_ph: '学生証と一致させてください',
      school_label: '所属大学',
      school_ph: '選択してください',
      schools: {
        bsu: '北京体育大学 (BSU)',
        bfsu: '北京外国語大学',
        blcu: '北京語言大学',
        other: 'その他の大学'
      },
      major_label: '学部/専攻',
      major_ph: '例：英語学科',
      id_label: '学籍番号',
      id_ph: '学籍番号を入力',
      step2: 'ステップ2：身分確認',
      upload_label: '学生証 / キャンパスカード表面写真をアップロード',
      drag_text: 'ファイルをここにドラッグ、または',
      click_upload: 'クリックしてアップロード',
      upload_tip: 'JPG/PNG形式、5MB以下',
      agree: '私は上記の情報が真実であることを約束し、「言禾プラットフォームクリエイター規約」を遵守します',
      btn_submit: '審査に提出',
      submitting: '提出中...'
    },
    msg: {
      agree_warn: '先に規約を読んで同意してください',
      info_warn: '基本情報を入力してください',
      success: '🎉 提出成功！審査は24時間以内に完了します'
    }
  },

  // --- Profile (プロフィール) ---
  profile: {
    unnamed: '名無しユーザー',
    menu: {
      edit: 'プロフィール編集',
      badge: '勲章ウォール',
      vip: '会員センター'
    },
    header: {
      edit_cover: 'カバー編集',
      verified: '認証済み',
      no_bio: '自己紹介なし',
      btn_edit: '編集',
      btn_share: 'シェア'
    },
    stats: {
      following: 'フォロー',
      followers: 'フォロワー',
      likes: 'いいね'
    },
    badges: {
      title: '栄誉勲章',
      all: 'すべて'
    },
    tabs: {
      overview: '概要',
      learning: '学習',
      posts: '投稿',
      collections: '收藏'
    },
    overview: {
      heat_title: '学習アクティビティ',
      heat_sub: '今年度累計学習 {hours} 時間',
      visitors: '最近の訪問者',
      vip_title: 'PRO 会員権益',
      vip_date: '有効期限 2027.01.01',
      vip_desc: 'AI矯正と無制限翻訳特権を解禁',
      btn_renew: '更新管理',
      btn_unlock: '今すぐ解禁'
    },
    learning: {
      next: '次節',
      continue: '継続'
    },
    posts: {
      time_ago: '2時間前',
      demo_content: 'これは言禾コミュニティのデモ投稿コンテンツです...'
    },
    collections: {
      items: '個のコンテンツ'
    },
    common: {
    cancel: 'キャンセル',
    confirm: '確認',
    count_is: '現在のカウント',
    edit_hint_prefix: '編集',
    edit_hint_suffix: 'HMRをテスト',
    check_out: 'チェック',
    vue_official_starter: '公式 Vue + Vite スターター',
    read_docs_tip: '詳細についてはViteとVueのロゴをクリックしてください'
  },
  login: {
    welcome: 'YanHeへようこそ',
    btn_login: 'ログイン',
    demo_fill: '[デモ] 管理者自動入力',
    placeholder: {
      ind_account: 'アカウント / ユーザー名',
      password: 'パスワード',
    },
    msg: {
      input_error: 'アカウントとパスワードを入力してください',
      login_success: 'ログイン成功、おかえりなさい！',
    }
  },
  ai: {
    title: 'YanHe AI',
    waking_up: 'AIアシスタント起動中...',
    sync_established: '同期完了、指示を待っています。',
    hello_world: 'こんにちは！YanHeスマートアシスタントです。',
    thinking: '思考中',
    input_placeholder: 'アリスと同期...',
    action_happy: 'あなたが一番好き！❤️',
    error_msg: '同期中断、接続を確認してください。',
    demo_greeting: 'やっほー！見えますか？<br>publicフォルダから読み込まれました！',
    model_loaded: '✅ モデル読み込み成功！',
    loading_progress: '読み込み状況：',
    model_failed: '❌ モデル読み込み失敗：'
  },
  education: {
    pinyin_check_title: 'ピンインスマート修正',
    pinyin_check_hint: '文字をクリックして正しい声調を選択',
    pinyin_complete_title: '綴り完了！',
    pinyin_result_desc: '最終結果：{result}'
  },
  player: {
    video_not_supported: 'お使いのブラウザは動画タグに対応していません。',
    speed_label: '倍速：',
    resume_tip: '前回停止位置から再生：{time}',
    time_format: '{m}分{s}秒'
  },
    modal: {
      title: 'プロフィール編集',
      random_avatar: 'ランダムアイコン',
      label_name: 'ニックネーム',
      label_bio: '自己紹介',
      cancel: '取消',
      save: '保存'
    },
    msg_banner_success: 'カバーを更新しました！',
    msg_save_success: '保存成功'
  }
}