export default {
  // --- Global (Global) ---
  brand: 'YanHe',
  nav: {
    home: 'Startseite',
    story: 'Geschichten',
    education: 'Bildung',
    service: 'Aufgaben',
    map: 'Karte',
    login: 'Anmelden'
  },
  user: {
    profile: 'Profil',
    orders: 'Bestellungen',
    logout: 'Abmelden',
    vip_active: 'Pro Aktiv',
    vip_join: 'Pro werden',
    logout_success: 'Abgemeldet'
  },
  loading: {
    map: 'Karte wird geladen...',
    audio: 'Audio wird geladen...',
    uploading: 'Verschlüsseln & Hochladen...'
  },
  login_warn: 'Bitte zuerst anmelden',

  // --- Startseite (Home) ---
  home: {
    nav: {
      home: 'Startseite',
      story: 'Geschichten',
      edu: 'Bildung',
      task: 'Aufgaben',
      map: 'Karte',
      login: 'Anmelden',
      lang_en: 'English'
    },
    hero: {
      badge_1: 'MOE Pilotprojekt',
      badge_2: 'Ländliche Wiederbelebung',
      title_1: 'Sprachen verbinden',
      title_2: 'Teilen',
      title_high: 'Chinesische Weisheit',
      desc: 'Internationale Chinesisch-Bildungsplattform basierend auf KI-Agenten & GIS. Bündelung von Top-Kursen und Experten-Übersetzungsdiensten.',
      btn_task: 'Aufgabenzentrum',
      btn_learn: 'Lernen starten',
      patent: 'Patent: ZL2025100XXXX',
      copyright: 'Copyright: 2025SRXXXX'
    },
    stats: {
      countries: 'Länder/Regionen',
      experts: 'Sprachexperten',
      income: 'Einkommen (CNY)',
      students: 'Betreute Studenten'
    },
    cards: {
      story_title: 'China-Geschichten',
      story_desc: 'Immersive Community zur Erkundung der authentischen Kultur.',
      edu_title: 'Smarte Bildung',
      edu_desc: 'KI-gestützter Unterricht mit Ebbinghaus-Methode.',
      task_title: 'Aufgabenhalle',
      task_desc: 'Verbindung von Unternehmensbedarf und Hochschultalenten.',
      map_title: 'Dialekt-Karte',
      map_desc: 'GIS-Visualisierung zum Schutz von Dialekten.'
    }
  },

  // --- KI-Chat (AI Chat) ---
  ai: {
    new_chat: 'Neuer Chat',
    history: {
      today: 'Heute',
      yesterday: 'Gestern',
      demo1: 'E-Mail-Optimierung',
      demo2: 'Vertragsübersetzung',
      demo3: 'Essay-Korrektur'
    },
    guest: 'Gast',
    models: {
      pro_desc: 'Stärkste Logik für komplexe Aufgaben',
      fast_desc: 'Schnelle Antwort für tägliche Übersetzungen',
      creative_desc: 'Kreatives Denken für Texterstellung'
    },
    clear_chat: 'Löschen',
    welcome_title: 'Ich bin YanHe AI, wie kann ich helfen?',
    shortcuts: {
      translate_title: 'Übersetzung',
      translate_desc: 'Geschäft/Recht',
      translate_prompt: 'Bitte übersetzen Sie dies ins Geschäftsenglisch:',
      polish_title: 'Optimierung',
      polish_desc: 'Professioneller Ton',
      polish_prompt: 'Bitte machen Sie diese E-Mail höflicher:',
      grammar_title: 'Grammatik',
      grammar_desc: 'Fehleranalyse',
      grammar_prompt: 'Prüfen Sie auf Grammatikfehler und erklären Sie warum:',
      culture_title: 'Kultur',
      culture_desc: 'Redewendungen/Bräuche',
      culture_prompt: 'Erklären Sie den kulturellen Hintergrund dieser Redewendung:'
    },
    input_placeholder: 'Nachricht eingeben (Shift + Enter für Zeilenumbruch)...',
    disclaimer: 'KI-generierte Inhalte können Fehler enthalten. Bitte wichtige Dokumente manuell überprüfen.',
    copy: 'Kopieren',
    retry: 'Wiederholen',
    cleared: 'Chat geleert',
    copied: 'In die Zwischenablage kopiert',
    error_msg: 'Netzwerkfehler, bitte später erneut versuchen',
    mock: {
      default: "Dies ist eine simulierte KI-Antwort.\n\n1. **Professionell**: Ich passe den Ton an.\n2. **Präzise**: Basierend auf einem riesigen Korpus.\n\nBitte geben Sie mehr Kontext für detaillierte Antworten.",
      trans: "Hier ist die Übersetzung:\n\n**Geschäftskontext**:\n> The contract shall come into force upon signature.\n\n**Analyse**:\nVerwendung von 'come into force' statt 'start' für mehr Formalität.",
      polish: "Vorschlag:\n\n**Original**: I want to ask if you can give me a discount.\n**Optimiert**: Could you please consider offering a discount?\n\n**Grund**: 'Could you please' ist höflicher."
    }
  },

  // --- Anmelden (Login) ---
  login: {
    back_home: 'Startseite',
    brand: {
      ent_title: 'Verbinde Globale<br>Talente',
      ent_desc: 'Treten Sie dem YanHe-Ökosystem bei, veröffentlichen Sie Bedarfe.',
      ind_title: 'Wissen monetarisieren<br>Kultur exportieren',
      ind_desc: 'Exklusive Plattform für Sprachtalente an Hochschulen.',
      badge_title: 'Plattform-Erfolge',
      badge_gold: 'Zertifizierter Übersetzer',
      badge_silver: 'Top 100',
      badge_bronze: 'Fleißiger Stern'
    },
    role_ent: 'Firma',
    role_ind: 'Student',
    welcome: 'Willkommen zurück',
    sub_ent: 'Firmen-Login',
    sub_ind: 'Studenten/Lehrer-Login',
    placeholder: {
      ent_account: 'Firmen-ID / E-Mail',
      ind_account: 'Tel / Matrikelnummer',
      password: 'Passwort',
      org_name: 'Firmenname',
      school: 'Universität',
      phone_email: 'Tel / E-Mail',
      set_password: 'Passwort setzen'
    },
    remember: 'Angemeldet bleiben',
    forgot: 'Passwort vergessen?',
    btn_login: 'Anmelden',
    logging_in: 'Anmeldung...',
    no_account: 'Kein Konto?',
    to_register: 'Registrieren',
    create_account: 'Konto erstellen',
    join_ent: 'YanHe beitreten, Talente finden',
    join_ind: 'YanHe beitreten, wachsen',
    agree_prefix: 'Ich stimme zu:',
    agreement: 'Nutzungsbedingungen',
    btn_register: 'Registrieren',
    has_account: 'Bereits ein Konto?',
    to_login: 'Anmelden',
    msg: {
      input_error: 'Bitte Konto und Passwort eingeben',
      login_success: 'Anmeldung erfolgreich',
      agree_error: 'Bitte stimmen Sie den Bedingungen zu',
      register_success: 'Registrierung erfolgreich gesendet'
    }
  },

  // --- Hochladen (Upload) ---
  upload: {
    title: 'Dialekt-Sammelterminal',
    db_connected: 'DB VERBUNDEN',
    guest_id: 'GAST',
    recording_hint: 'Aufnahme... Klicken zum Stoppen',
    start_hint: 'Klicken für Aufnahme',
    form: {
      location_label: 'Dialekt-Ort',
      location_placeholder: 'z.B. Chengdu, Sichuan',
      meaning_label: 'Bedeutung (Meaning)',
      meaning_placeholder: 'Was bedeutet dieser Satz?',
      tags_label: 'Tags'
    },
    tags: {
      daily: 'Alltag',
      nursery: 'Kinderlied',
      slang: 'Slang'
    },
    btn_submit: 'Hochladen in YanHe-DB',
    loading_text: 'Verschlüsseln & Hochladen...',
    success_msg: 'Upload erfolgreich! Danke für Ihren Beitrag.'
  },

  // --- Kulturkarte (Culture Map) ---
  culture: {
    navbar: {
      subtitle: 'YANHE DIALECT',
      explore: 'Entdecken',
      pro: 'PRO',
      passport: 'Reisepass'
    },
    tabs: {
      learn: 'Lernen',
      ai: 'KI-Test',
      upload: 'Beitragen'
    },
    cities: {
      Beijing: {
        name: 'Peking-Mandarin',
        intro: 'Markanter rhotischer Akzent mit einzigartigem Rhythmus.',
        tags: ['Erhua', 'Humor'],
        words: [
          { text: 'Ju Qi', ipa: 'tɕy35 tɕʰi' },
          { text: 'Mei Pu Er', ipa: 'mei21 xu' }
        ],
        aiModels: [
          { name: 'Alt-Peking (Formell)' }, { name: 'Neu-Peking (Umgangsspr.)' }, { name: 'Südstadt-Akzent' }
        ],
        aiChallenge: { word: 'Das ist authentisch!' }
      },
      Shanghai: {
        name: 'Shanghai-Wu',
        intro: 'Weiche Töne, die die Eleganz der Shanghaier Kultur widerspiegeln.',
        tags: ['Weich', 'Elegant'],
        words: [
          { text: 'Nong Hao', ipa: 'nɔŋ hɔ' },
          { text: 'A La', ipa: 'a la' }
        ],
        aiModels: [
          { name: 'Alt-Shanghai' }, { name: 'Neu-Shanghai' }
        ],
        aiChallenge: { word: 'Haben Sie schon gegessen?' }
      }
    },
    ai: {
      model_base: 'Basis-Modell:',
      read_guide: 'Bitte lesen Sie in {model}:',
      listen_sample: 'Beispiel hören',
      analyzing: 'Tonkurve wird erstellt...',
      comparing: 'Vergleiche {city} Phoneme...',
      analyzing_voice: 'Stimmenanalyse...',
      release_stop: 'Loslassen zum Stoppen',
      long_press: 'Halten für Aufnahme',
      score_unit: 'Pkt',
      tone_analysis: 'Ton-Anpassungsanalyse',
      retry: 'Wiederholen',
      comment_good: 'Erstaunlich! 98% Übereinstimmung mit Muttersprachlern.',
      comment_avg: 'Gut, aber die Tonvariation könnte besser sein.',
      dimensions: {
        tone: 'Intonation',
        clarity: 'Klarheit',
        emotion: 'Emotion'
      }
    },
    passport: {
      title: 'Reisepass',
      close: 'Schließen'
    }
  },

  // --- Pro Freischalten (Unlock) ---
  unlock: {
    nav_title: 'Mitgliedszentrum',
    restore_purchase: 'Wiederherstellen',
    pro_title: 'YANHE PRO',
    pro_desc: 'Volle Karte · Tiefer KI-Dialog · Offline-Kurse',
    benefits: {
      ai: { title: 'KI-Korrektur', desc: 'Unbegrenzt' },
      map: { title: 'Volle Karte', desc: '50+ Städte' },
      npc: { title: 'Digitaler Meister', desc: 'Fortgeschrittener Dialog' }
    },
    plans: {
      year_tag: 'Studenten -90%',
      unit_year: 'Jahr',
      year_desc: 'Nur 0.13 CNY/Tag',
      unit_month: 'Monat',
      month_tag: 'Test'
    },
    compare: {
      title: 'Vergleich',
      col_feature: 'Funktion',
      col_free: 'Gratis',
      row_ai: 'KI-Bewertung',
      val_limit: '3/Tag',
      row_map: 'Karten-Erkundung',
      val_map_limit: '3 Städte',
      val_all: 'Alle',
      row_npc: 'Digitaler Meister',
      val_unlock: 'Freischalten'
    },
    agreement: 'Abo bedeutet Zustimmung zu den Bedingungen. Jederzeit kündbar.',
    total: 'Gesamt',
    btn_pay: 'Jetzt zahlen',
    login_warn: 'Bitte melden Sie sich zum Kauf an',
    verifying: 'Zahlung wird überprüft...',
    success_msg: '🎉 Glückwunsch! YanHe PRO aktiviert.',
    pay_modal: {
      title: 'YanHe Kasse',
      amount: 'Betrag',
      scan_tip: 'Scan mit WeChat / Alipay',
      btn_mock: 'Erfolg simulieren'
    }
  },

  // --- KI-Debatte (Debate) ---
  debate: {
    header: {
      end_chat: 'Beenden',
      topic_label: 'Thema:',
      status_online: 'Meister Online'
    },
    topics: {
      business: 'Geschäftsverhandlung',
      history: 'Historische Logik',
      philosophy: 'Konfuzianische Philosophie',
      general: 'Allgemeiner Dialog'
    },
    chat: {
      welcome_prefix: 'Da Ihr die Akademie betreten habt, müsst Ihr hier sein, um über',
      welcome_suffix: 'zu diskutieren.',
      welcome_invite: 'Bitte tragt Euer Argument vor, ich bin ganz Ohr.',
      thinking: 'Meister denkt nach...',
      ai_reply_prefix: 'Was Ihr über',
      ai_reply_body: 'gesagt habt, ergibt Sinn. Langfristig gesehen gilt jedoch: "Eile mit Weile". In Verhandlungen könnte diese Strategie nach hinten losgehen.'
    },
    footer: {
      input_placeholder: 'Argument eingeben (Spracheingabe möglich)...',
      send_btn: 'Debatte'
    }
  },

  // --- Bildung (Education) ---
  education: {
    hero: {
      title: '<i class="bi bi-cpu"></i> Digitaler KI-Meister · Tiefe Debatte',
      desc: 'Mehr als einfacher Chat. Führen Sie hochkarätige Debatten über <strong>Philosophie</strong> oder <strong>Verhandlungen</strong> mit der KI.',
      btn_business: 'Business-Duell',
      btn_history: 'Geschichts-Debatte'
    },
    memory: {
      title: 'Gedächtnis-Station',
      current_dict: 'Aktuelles Deck',
      forget_alert: 'Ebbinghaus-Warnung: <strong class="text-warning">{count}</strong> Wörter verblassen heute.',
      saturation: 'Sättigung',
      review_now: 'Jetzt wiederholen'
    },
    search_placeholder: 'Suche: Wirtschafts-Chinesisch / Tibetisch / Poesie...',
    btn_search: 'Suchen',
    tags: {
      all: 'Alle',
      hsk: 'HSK-Level',
      business: 'Geschäft',
      culture: 'Kultur',
      dialect: 'Dialekt',
      ethnic: 'Ethnisch'
    },
    courses_title_all: 'Empfohlene Kurse',
    courses_suffix: 'Kurse',
    course_source: {
      original: 'Original',
      master: 'Meisterklasse',
      culture: 'Kultur',
      dialect: 'Dialekt'
    },
    courses: {
      c1: { title: 'Null bis HSK 3: Schnellkurs' },
      c2: { title: 'Verhandlung: Feilschen auf Chinesisch' },
      c3: { title: 'Tang & Song Poesie' },
      c4: { title: 'Sichuan-Dialekt 101: "Ba Shi"' }
    },
    free: 'Gratis',
    ethnic: {
      title: 'Sprachschutzplan',
      subtitle: 'Die Stimme von 56 ethnischen Gruppen',
      btn_enter: 'Eintreten',
      items: {
        tibetan: { lang: 'Tibetisch', desc: 'Stimme des schneebedeckten Plateaus' },
        uyghur: { lang: 'Uigurisch', desc: 'Perle der Seidenstraße' },
        zhuang: { lang: 'Zhuang', desc: 'Volkslieder von Liu Sanjie' }
      }
    },
    vip_modal: {
      title: 'YanHe Akademie PRO',
      desc: 'Premium-Kultur-Privilegien freischalten',
      ben_1: 'KI-Tiefendebatte',
      ben_2: 'Meisterklasse Kulturerbe',
      ben_3: 'Dialekt-Live-Übersetzung',
      ben_4: 'Physisches Zertifikat',
      btn_pay: 'Freischalten (ab ¥12.9)'
    },
    vip_required: 'Dies ist ein kostenpflichtiger Kurs. Bitte abonnieren Sie PRO.'
  },

  // --- Kasse (Checkout) ---
  checkout: {
    secure_ssl: 'UnionPay SSL Gesichert',
    unit_year: 'Jahr',
    countdown_prefix: 'Preis fixiert, bitte zahlen in',
    countdown_suffix: '',
    course_info: 'Kursinfo',
    escrow_detail: 'Treuhand-Details',
    payment_method: 'Zahlungsmethode',
    pay_wechat: 'WeChat Pay',
    pay_wechat_desc: 'Empfohlen, Sicher & Schnell',
    pay_alipay: 'Alipay',
    pay_alipay_desc: 'Unterstützt Huabei',
    pay_card: 'UnionPay / Karte',
    pay_card_desc: 'Unterstützt Firmenüberweisung',
    need_invoice: 'Ich benötige eine Rechnung',
    summary_title: 'Zusammenfassung',
    price_original: 'Originalpreis',
    price_student: 'Studentenrabatt',
    price_tax: 'Steuer',
    price_course_orig: 'Kurspreis',
    price_discount: 'Angebot',
    price_bounty: 'Aufgaben-Prämie',
    price_service_fee: 'Servicegebühr (5%)',
    price_expedite: 'Eilgebühr',
    total_due: 'Gesamtsumme',
    processing: 'Verarbeitung...',
    guarantee: 'Plattform-gesicherte Treuhand, 7 Tage Rückerstattung',
    btn_home: 'Startseite',
    btn_experience: 'Starten',
    btn_pay_now: 'Jetzt zahlen',
    btn_pay: 'Zahlen',
    btn_escrow: 'Hinterlegen',
    demo: {
      label: 'Demo-Modus:',
      scenario_a: 'A: Mitgliedschaft',
      scenario_b: 'B: Kurs',
      scenario_c: 'C: Aufgaben-Treuhand'
    },
    products: {
      membership: {
        title: 'YanHe Pro Jährlich',
        desc: 'Studentenangebot | 365 Tage Zugang',
        feat1: 'Alle Dialekt-Szenarien',
        feat2: 'Unbegrenzte KI-Korrektur',
        feat3: 'Premium Karte & Avatar'
      },
      course: {
        title: 'Wirtschaftschinesisch: Verhandlung',
        tag: 'Einzelkurs',
        detail: 'Inklusive: 45min Video + Terminologie + KI-Praxis'
      },
      task: {
        title: 'Treuhand: Juristische Übersetzung',
        tag: 'Plattform-gesichert',
        detail: 'Bestellung #88392\nZahlung nach Zufriedenheit freigegeben.'
      }
    },
    success: {
      membership: { title: 'Willkommen bei Pro!', desc: 'Vorteile aktiviert. Genießen Sie Premium-Funktionen.' },
      course: { title: 'Kurs freigeschaltet!', desc: 'Gehen Sie zu "Meine Kurse" um zu beginnen.' },
      task: { title: 'Gelder hinterlegt', desc: 'Aufgabe veröffentlicht. Sie werden bei Annahme benachrichtigt.' }
    }
  },

  // --- Suche (Search) ---
  search: {
    nav_back: 'Startseite',
    placeholder: 'Suche Aufgaben, Talente, Kurse...',
    default_keyword: 'Übersetzung',
    tabs: {
      all: 'Alle',
      task: 'Aufgaben',
      user: 'Talente',
      course: 'Kurse'
    },
    tags: {
      task: 'Aufgabe',
      user: 'Talent',
      course: 'Kurs'
    },
    result_stat: '{count} Ergebnisse für "{keyword}" gefunden',
    empty: {
      title: 'Keine Ergebnisse, anderes Stichwort versuchen?',
      tip: '(Versuchen Sie: Übersetzung, Recht, Business, Jack)'
    },
    btn_contact: 'Kontakt',
    score: 'Pkt',
    msg_contact: 'Kooperationsanfrage an {name} gesendet!'
  },

  // --- Chat (Chat) ---
  chat: {
    nav_back: 'Startseite',
    title: 'Nachrichtenzentrum',
    search_placeholder: 'Kontakte suchen...',
    typing: 'Schreibt...',
    menu_profile: 'Profil ansehen',
    menu_report: 'Melden',
    input_placeholder: 'Enter zum Senden...'
  },

  // --- Aufgabenhalle (Service) ---
  service: {
    role: {
      creator: 'Ich bin Ersteller (Arbeit suchen)',
      client: 'Ich bin Auftraggeber (Job posten)'
    },
    search: {
      placeholder_creator: 'Aufgaben suchen: Übersetzung, Aufnahme...',
      placeholder_client: 'Talente suchen: TEM-8, Dolmetschen...',
      btn: 'Suchen'
    },
    recommend_title: 'Empfohlene Aufgaben',
    sort_newest: 'Sort: Neueste',
    task_types: {
      business: 'Geschäft',
      dialect: 'Dialekt',
      urgent: 'Dringend'
    },
    status: {
      recruiting: 'Rekrutierung',
      joined: '{count}/{total} Beigetreten'
    },
    auth_card: {
      title: 'Uni-Talent Verifizierung',
      desc: 'BSU/BFSU Status verifizieren für Premium-Aufgaben & 0 Gebühren.',
      btn: 'Verifizieren'
    },
    rank: {
      title: 'Wöchentliche Top-Verdiener'
    },
    client: {
      post_title: 'Premium-Prämie posten',
      post_desc: 'Für komplexe, professionelle Bedürfnisse. Verbindung zu 12.000+ Talenten.',
      tag_escrow: 'Treuhand',
      tag_audit: 'Blind Review',
      btn_post: 'Veröffentlichen',
      ai_title: 'KI Express-Service',
      ai_desc: 'Für einfache Aufgaben. Angetrieben von YanHe LLM, sofortige Antwort.',
      tag_fast: 'Sofort',
      btn_ai: 'KI testen'
    },
    market: {
      title: 'Marktpreis-Referenz',
      tags: {
        law: 'Recht',
        interpreting: 'Dolmetschen',
        dubbing: 'Stimme',
        writing: 'Schreiben'
      },
      disclaimer: '* Daten basieren auf 30-Tage-Durchschnitt.'
    }
  },

  // --- Aufgabendetails (Service Detail) ---
  service_detail: {
    nav_back: 'Zurück zur Halle',
    breadcrumb_cat: 'Übersetzung & Lokalisierung',
    breadcrumb_current: 'Details',
    meta: {
      escrow: 'Fonds gesichert',
      urgent: 'Dringend',
      views: '{count} Ansichten',
      id_label: 'Job ID'
    },
    section: {
      background: 'Hintergrund',
      duties: 'Verantwortlichkeiten',
      skills: 'Anforderungen',
      questions: 'Auswahlfragen',
      attachment: 'Anhänge'
    },
    attachment_hint: '2.4 MB · Zur Vorschau',
    bids: {
      title: 'Aktivität ({count})',
      stat_joined: 'Beworben',
      stat_chat: 'Im Chat',
      stat_active: 'Aktiv',
      stat_rate: 'Einstellungsrate',
      submit_time: 'Vor 5 Min eingereicht'
    },
    sidebar: {
      budget_label: 'Budget (Fest)',
      unit: 'CNY'
    },
    btn: {
      apply: 'Bewerben',
      applied: 'Beworben',
      chat: 'Chat'
    },
    action: {
      collect: 'Speichern',
      share: 'Teilen',
      report: 'Melden'
    },
    client: {
      title: 'Kundeninfo',
      verified: 'Firma verifiziert',
      loc: 'Ort',
      tasks: 'Gepostet',
      spent: 'Ausgegeben',
      rate: 'Einstellungsrate'
    },
    similar_title: 'Das könnte Sie interessieren',
    similar_demo: 'Korrekturlesen von Uni-Aufsätzen',
    similar_tag: 'Schreiben',
    modal: {
      title: 'Angebot abgeben',
      fee_tip: 'Die Plattform erhebt nach Abschluss 10% Servicegebühr.',
      price_label: 'Ihr Angebot (¥)',
      income_calc: 'Geschätzter Erhalt',
      days_label: 'Dauer',
      day_unit: 'Tage',
      urgent_opt: 'Dringend',
      letter_label: 'Anschreiben',
      letter_ph: 'Warum sind Sie der/die Beste für diesen Job?',
      ai_polish: 'KI-Optimierung',
      ai_done: 'KI Optimiert!',
      upload_label: 'Portfolio/CV',
      cancel: 'Abbrechen',
      confirm: 'Absenden',
      submitting: 'Senden...',
      success_msg: '✅ Gebot gesendet! Warten Sie auf Kundenkontakt.'
    }
  },

  // --- Aufgabe veröffentlichen (Publish) ---
  publish: {
    nav_title: 'Aufgabe erstellen',
    nav_subtitle: 'YanHe Gesichert',
    steps: {
      desc: 'Beschreibung',
      budget: 'Budget'
    },
    types: {
      translation: 'Übersetzung',
      dubbing: 'Synchronisation',
      polish: 'Korrektur',
      custom: 'Benutzerdefiniert'
    },
    form: {
      type_label: 'Kategorie',
      title_label: 'Titel',
      title_ph: 'z.B. Juristische Übersetzung 5000 Wörter',
      desc_label: 'Details',
      desc_ph: 'Beschreiben Sie Hintergrund, Zielgruppe, Terminologie...',
      upload_label: 'Anhang (Optional)',
      upload_hint: 'Klicken oder Datei hierher ziehen'
    },
    btn_next: 'Weiter: Budget',
    btn_back: 'Zurück',
    modes: {
      normal: { title: 'Standard', desc: 'Ein Beauftragter bekommt alles' },
      contest: { title: 'Wettbewerb (Empf.)', desc: 'Mehrere Einträge, ein Gewinner' }
    },
    step2: {
      mode_title: 'Kooperationsmodus',
      budget_label: 'Budget',
      budget_hint: 'Gelder werden bis zur Genehmigung treuhänderisch verwaltet.',
      contest_alert: 'Budget teilt sich in Teilnahme-Pool (Geteilt) und Gewinnerpreis (Exklusiv).',
      total_budget: 'Gesamtbudget',
      max_people: 'Max Einträge',
      recommend: 'Empf.',
      pool_entry: 'Teilnahme-Pool',
      per_person: 'Durchschn.',
      pool_winner: 'Gewinnerpreis',
      deadline: 'Frist',
      deadline_ph: 'Datum wählen',
      urgent_opt: 'Dringend (+ ¥20.00)',
      expert_opt: 'Nur verifizierte Experten'
    },
    footer: {
      total_label: 'Gesamt Treuhand',
      submitting: 'Senden...',
      btn_pay: 'Posten & Zahlen'
    },
    msg_title_required: 'Bitte Titel eingeben',
    msg_budget_invalid: 'Bitte gültiges Budget eingeben',
    msg_success: 'Erstellt! Weiterleitung zur Zahlung...'
  },

  // --- Story KI (Story AI) ---
  story_ai: {
    title: 'Inspirations-Kit',
    welcome: {
      greeting: 'Grüße. Ich bin der YanHe Gelehrten-Assistent.',
      desc: 'Kämpfen Sie mit Ihrer China-Story? Ob Textoptimierung, Anspielungen oder Übersetzung, ich bin hier.'
    },
    card_tag: 'KI-Feder',
    actions: {
      polish: 'Text polieren',
      polish_prompt: 'Machen Sie diesen Text poetischer und klassischer:',
      fest: 'Feste',
      fest_prompt: 'Schöner Text für das Mittherbstfest mit Übersetzung',
      culture: 'Erbe',
      culture_prompt: 'Stellen Sie dieses immaterielle Kulturerbe vor:'
    },
    input_ph: 'Fragen Sie mich alles...',
    copied: 'In die Zwischenablage kopiert'
  },

  // --- Rolle Detail (Detail Paper) ---
  detail_paper: {
    nav_back: 'Zurück zur Rolle',
    date_prefix: 'Aufgezeichnet in',
    date_suffix: '',
    btn_follow: 'Folgen',
    btn_following: 'Gefolgt',
    comment_title: 'Kommentare',
    seal_like: 'Gefällt mir',
    seal_liked: 'Gefällt',
    input_ph: 'Kommentar schreiben...',
    msg_followed: 'Gefolgt',
    msg_unfollowed: 'Nicht mehr gefolgt',
    me: 'Ich'
  },

  // --- Rolle veröffentlichen (Publish Paper) ---
  publish_paper: {
    nav: {
      cancel: 'Abbrechen',
      title: 'Neue Geschichte',
      publish: 'Signieren & Posten'
    },
    upload: {
      change: 'Medien ändern',
      placeholder: 'Bild/Video hochladen'
    },
    form: {
      title_ph: 'Titel hier...',
      ai_btn: 'KI-Optimierung',
      content_ph: 'Halten Sie Ihre Gedanken fest...',
      topic_label: 'Themen',
      loc_label: 'Ort',
      loc_ph: 'Ort abrufen'
    },
    tags: ['Neo-Chinesisch', 'Hanfu Alltag', 'Erbe', 'Street Food', 'Alte Architektur', 'Stadtbummel'],
    loc_finding: 'Ortung...',
    ai_processing: 'KI optimiert...',
    publishing: 'Veröffentlichung...',
    msg_max_tags: 'Max 3 Themen',
    msg_no_title: 'Bitte zuerst einen Titel eingeben',
    msg_ai_done: 'Optimiert!',
    msg_success: 'Erfolgreich veröffentlicht'
  },

  // --- Kulturrolle (Culture Scroll) ---
  culture_scroll: {
    nav_back: 'Zurück zum Portal',
    brand_sub: 'Memoiren',
    intro: {
      title: 'Journale',
      desc: 'Sprachen verbinden<br>Weisheit teilen'
    },
    seal: {
      like: 'Gefällt mir',
      liked: 'Gelesen'
    },
    end_card: {
      title: 'Fortsetzung folgt...',
      desc: 'Klicken, um Ihre Geschichte zu schreiben'
    },
    fab_write: 'Schreiben',
    modal: {
      title: 'Was aufnehmen?',
      opt_ai: 'KI-Inspiration',
      opt_photo: 'Foto/Story',
      opt_write: 'Langer Artikel'
    },
    location_default: 'China'
  },

  // --- Autor (Writer) ---
  writer: {
    nav: {
      back: 'Rolle schließen',
      status_saved: 'Tinte getrocknet',
      status_writing: 'Schreiben...',
      publish: 'Veröffentlichen'
    },
    cover: {
      change: 'Cover ändern',
      add: 'Cover hinzufügen (Opt)'
    },
    editor: {
      title_ph: 'Titel eingeben',
      author_suffix: '',
      content_ph: 'Beginnen Sie Ihre Geschichte hier...',
      ai_btn: 'KI Fortsetzen',
      ai_tip: 'KI'
    },
    msg: {
      anonymous: 'Anonym',
      ai_loading: 'KI denkt nach...',
      ai_done: 'Fortsetzung beendet',
      validate_error: 'Titel und Inhalt dürfen nicht leer sein',
      success: 'Erfolgreich veröffentlicht'
    }
  },

  // --- Kurs-Player (Player) ---
  player: {
    nav: {
      demo_mode: 'Demo-Modus',
      demo_exit: 'Demo beenden',
      back: 'Zurück'
    },
    lock: {
      title: 'Premium-Inhalt',
      desc: 'Schalten Sie dieses Kapitel und alle Szenario-Videos frei',
      btn_unlock: 'Freischalten (¥ {price})',
      btn_trial: '30s Test'
    },
    resume_tip: 'Weiter bei {time}, klicken zum Springen',
    tools: {
      label: 'Werkzeuge',
      pinyin: 'Pinyin',
      pinyin_ph: 'Wählen',
      pinyin_tip: 'Klicken zum Kopieren:',
      quiz: 'Quiz',
      fav: 'Favorit',
      faved: 'Gespeichert'
    },
    ctrl: {
      speed: 'Geschw.',
      sub_cn: 'CN',
      sub_en: 'DE',
      sub_both: 'Beide',
      subtitle: 'Untertitel'
    },
    meta: {
      views: 'Ansichten',
      key_points: 'Kernpunkte'
    },
    playlist: {
      title: 'Playlist',
      tabs: {
        all: 'Alle',
        grammar: 'Vorlesung',
        scenario: 'Szenario',
        culture: 'Kultur'
      }
    },
    tags: {
      free: 'Gratis',
      unlocked: 'Freigeschaltet',
      paid: 'Bezahlt'
    },
    ai: {
      title: 'KI-Tutor',
      welcome: 'Hallo! Ich bin Ihr KI-Assistent.',
      input_ph: 'Stellen Sie eine Frage...',
      mock_reply: 'Gute Frage! "{input}" im Geschäftskontext bedeutet normalerweise...'
    },
    quiz: {
      title: 'Quiz - Geschäftsetikette',
      score: 'Punkte',
      btn_submit: 'Senden',
      msg_perfect: 'Perfekt! Gut gemacht!'
    },
    msg_jumped: 'Gesprungen zu {time}',
    msg_faved: 'Zu Favoriten hinzugefügt',
    msg_unfaved: 'Aus Favoriten entfernt',
    msg_copied: 'Kopiert: {char}'
  },

  // --- Wiederholungszentrum (Review) ---
  review: {
    header: {
      title_menu: 'Smarte Wiederholung',
      title_flash: 'Lernkarten',
      title_phonics: 'KI-Phonetik',
      title_quiz: 'Speed-Quiz',
      streak: '{day} Tage Serie'
    },
    menu: {
      title: 'Wiederholungsmodus wählen',
      flash: { title: 'Lernkarten', desc: 'Spaced Repetition System', badge: 'Fällig: {count}' },
      phonics: { title: 'KI-Phonetik', desc: 'Echtzeit-Ausspracheanalyse', badge: 'Neu: {count}' },
      quiz: { title: 'Speed-Quiz', desc: '30s Herausforderung', badge: 'Rekord: {score}' }
    },
    flash: {
      tag: 'Basis-Geschäftsvokabular',
      hint_flip: 'Klicken zum Umdrehen',
      kb_hint_prefix: 'Drücke',
      kb_space: 'Leertaste',
      kb_hint_suffix: 'zum Umdrehen',
      btn_show: 'Antwort zeigen',
      grade: { again: 'Nochmal', hard: 'Schwer', good: 'Gut', easy: 'Leicht' }
    },
    phonics: {
      status_recording: 'Zuhören...',
      status_idle: 'Mikrofon tippen zur Aufnahme',
      score_unit: 'Pkt',
      fb_perfect: 'Perfekt! Wie ein Muttersprachler!',
      fb_good: 'Gut! Achten Sie auf die Endung.'
    },
    quiz: {
      msg_wrong: 'Falsch! Antwort ist: {ans}'
    },
    btn_next: 'Weiter',
    finish: {
      title: 'Sitzung beendet!',
      desc: 'Sie haben {count} Elemente wiederholt. Gedächtnis +5%',
      btn_back: 'Zurück zum Menü'
    }
  },

  // --- Abzeichen-Wand (Badge Wall) ---
  badge: {
    nav_back: 'Zurück zum Profil',
    header: {
      title: 'Erfolgswand',
      subtitle: 'Verfolgen Sie Ihr Wachstum und Ihre Beiträge.',
      unlocked: 'Freigeschaltet',
      percentile: 'Top {percent}%'
    },
    tabs: {
      all: 'Alle',
      unlocked: 'Freigeschaltet',
      locked: 'Gesperrt',
      ssr: 'Selten (SSR)'
    },
    status_locked: 'Gesperrt',
    level_badge: 'Abzeichen',
    meta: {
      condition: 'Anforderung',
      unlocked_at: 'Freigeschaltet am',
      progress: 'Fortschritt'
    },
    btn_close: 'Schließen',
    btn_share: 'Teilen'
  },

  // --- Uni-Zertifikat (Cert) ---
  cert: {
    nav_back: 'Zurück zur Halle',
    hero: {
      title: 'Universitäts-Talent-Verifizierung',
      subtitle: 'Treten Sie dem YanHe-Expertenpool bei, monetarisieren Sie Ihre Fähigkeiten.'
    },
    benefits: {
      free: { title: '0% Gebühr', desc: 'Keine Provision für Alumni' },
      priority: { title: 'Priorität', desc: 'Premium-Aufgaben zuerst' },
      cert: { title: 'Zertifikat', desc: 'Offizieller Praktikumsnachweis' }
    },
    form: {
      step1: 'Schritt 1: Basis-Info',
      name_label: 'Echter Name',
      name_ph: 'Wie im Studentenausweis',
      school_label: 'Universität',
      school_ph: 'Wählen',
      schools: {
        bsu: 'Sport-Uni Peking (BSU)',
        bfsu: 'Fremdsprachen-Uni Peking',
        blcu: 'Sprach- & Kultur-Uni Peking',
        other: 'Andere'
      },
      major_label: 'Fakultät/Hauptfach',
      major_ph: 'z.B. Englisch Dept',
      id_label: 'Studenten-ID',
      id_ph: 'ID eingeben',
      step2: 'Schritt 2: Verifizierung',
      upload_label: 'Studentenausweis hochladen (Vorderseite)',
      drag_text: 'Datei hierher ziehen oder',
      click_upload: 'Klicken zum Hochladen',
      upload_tip: 'Nur JPG/PNG, max 5MB',
      agree: 'Ich bestätige die Richtigkeit und stimme den YanHe-Bedingungen zu.',
      btn_submit: 'Senden',
      submitting: 'Senden...'
    },
    msg: {
      agree_warn: 'Bitte stimmen Sie den Bedingungen zu',
      info_warn: 'Bitte vervollständigen Sie die Basis-Infos',
      success: '🎉 Gesendet! Überprüfung in 24h.'
    }
  },

  // --- Benutzerprofil (User Profile) ---
  profile: {
    unnamed: 'Unbenannt',
    menu: {
      edit: 'Profil bearbeiten',
      badge: 'Abzeichen-Wand',
      vip: 'Mitgliedszentrum'
    },
    header: {
      edit_cover: 'Cover',
      verified: 'Verifiziert',
      no_bio: 'Keine Bio',
      btn_edit: 'Profil bearbeiten',
      btn_share: 'Teilen'
    },
    stats: {
      following: 'Folgt',
      followers: 'Follower',
      likes: 'Likes'
    },
    badges: {
      title: 'Ehrenabzeichen',
      all: 'Alle'
    },
    tabs: {
      overview: 'Übersicht',
      learning: 'Lernen',
      posts: 'Beiträge',
      collections: 'Sammlungen'
    },
    overview: {
      heat_title: 'Aktivität',
      heat_sub: 'Gesamt {hours} Stunden dieses Jahr',
      visitors: 'Besucher',
      vip_title: 'PRO Vorteile',
      vip_date: 'Gültig bis 2027.01.01',
      vip_desc: 'KI-Korrektur & unbegrenzte Übersetzung freischalten',
      btn_renew: 'Verwalten',
      btn_unlock: 'Jetzt freischalten'
    },
    learning: {
      next: 'Nächste',
      continue: 'Fortsetzen'
    },
    posts: {
      time_ago: 'vor 2h',
      demo_content: 'Dies ist ein Demo-Beitrag der YanHe-Community...'
    },
    collections: {
      items: 'Elemente'
    },
    common: {
    cancel: 'Abbrechen',
    confirm: 'Bestätigen',
    count_is: 'Zähler ist',
    edit_hint_prefix: 'Bearbeite',
    edit_hint_suffix: 'um HMR zu testen',
    check_out: 'Schau dir',
    vue_official_starter: 'den offiziellen Vue + Vite Starter an',
    read_docs_tip: 'Klicke auf die Vite- und Vue-Logos für mehr Infos'
  },
  login: {
    welcome: 'Willkommen bei YanHe',
    btn_login: 'Anmelden',
    demo_fill: '[Demo] Admin Auto-Fill',
    placeholder: {
      ind_account: 'Konto / Benutzername',
      password: 'Passwort',
    },
    msg: {
      input_error: 'Bitte Benutzername und Passwort eingeben',
      login_success: 'Anmeldung erfolgreich, willkommen zurück!',
    }
  },
  ai: {
    title: 'YanHe AI',
    waking_up: 'AI-Assistent wacht auf...',
    sync_established: 'Synchronisation hergestellt.',
    hello_world: 'Hallo! Ich bin dein YanHe Assistent.',
    thinking: 'Nachdenken',
    input_placeholder: 'Synchronisieren mit Alice...',
    action_happy: 'Ich mag dich am liebsten! ❤️',
    error_msg: 'Sync unterbrochen, Verbindung prüfen.',
    demo_greeting: 'Hallo! Siehst du mich?<br>Ich werde aus dem public-Ordner geladen!',
    model_loaded: '✅ Modell geladen!',
    loading_progress: 'Ladefortschritt:',
    model_failed: '❌ Modellfehler:'
  },
  education: {
    pinyin_check_title: 'Pinyin Smart-Korrektur',
    pinyin_check_hint: 'Klicke auf den Buchstaben für den Ton',
    pinyin_complete_title: 'Rechtschreibung fertig!',
    pinyin_result_desc: 'Endergebnis: {result}'
  },
  player: {
    video_not_supported: 'Dein Browser unterstützt keine Videos.',
    speed_label: 'Tempo:',
    resume_tip: 'Wiedergabe fortgesetzt bei: {time}',
    time_format: '{m} Min {s} Sek'
  },
    modal: {
      title: 'Profil bearbeiten',
      random_avatar: 'Zufälliger Avatar',
      label_name: 'Spitzname',
      label_bio: 'Bio',
      cancel: 'Abbrechen',
      save: 'Speichern'
    },
    msg_banner_success: 'Cover aktualisiert!',
    msg_save_success: 'Erfolgreich gespeichert'
  }
}