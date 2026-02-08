export default {
  // --- Global (Globalne) ---
  brand: 'YanHe',
  nav: {
    home: 'Strona główna',
    story: 'Historie',
    education: 'Edukacja',
    service: 'Zadania',
    map: 'Mapa',
    login: 'Zaloguj'
  },
  user: {
    profile: 'Profil',
    orders: 'Zamówienia',
    logout: 'Wyloguj',
    vip_active: 'Pro Aktywne',
    vip_join: 'Dołącz do Pro',
    logout_success: 'Wylogowano pomyślnie'
  },
  loading: {
    map: 'Ładowanie mapy...',
    audio: 'Ładowanie dźwięku...',
    uploading: 'Szyfrowanie i przesyłanie...'
  },
  login_warn: 'Proszę najpierw się zalogować',

  // --- Home (Strona główna) ---
  home: {
    nav: {
      home: 'Dom',
      story: 'Historie',
      edu: 'Edukacja',
      task: 'Zadania',
      map: 'Mapa',
      login: 'Zaloguj',
      lang_en: 'English'
    },
    hero: {
      badge_1: 'Projekt Pilotażowy MOE',
      badge_2: 'Rewitalizacja Wsi',
      title_1: 'Łączenie Języków',
      title_2: 'Dzielenie się',
      title_high: 'Mądrością Chin',
      desc: 'Międzynarodowa platforma edukacji języka chińskiego oparta na agentach AI i GIS. Gromadzi najlepsze kursy i eksperckie usługi tłumaczeniowe.',
      btn_task: 'Centrum Zadań',
      btn_learn: 'Rozpocznij Naukę',
      patent: 'Patent: ZL2025100XXXX',
      copyright: 'Prawa autorskie: 2025SRXXXX'
    },
    stats: {
      countries: 'Kraje/Regiony',
      experts: 'Eksperci Językowi',
      income: 'Średni Dochód (CNY)',
      students: 'Obsłużeni Studenci'
    },
    cards: {
      story_title: 'Chińskie Historie',
      story_desc: 'Immersyjna społeczność do odkrywania autentycznej kultury.',
      edu_title: 'Inteligentna Edukacja',
      edu_desc: 'Nauczanie wspomagane przez AI i krzywa zapominania Ebbinghausa.',
      task_title: 'Sala Zadań',
      task_desc: 'Łączenie potrzeb biznesowych z talentami uniwersyteckimi.',
      map_title: 'Mapa Dialektów',
      map_desc: 'Wizualizacja GIS do ochrony kultury dialektów.'
    }
  },

  // --- AI Chat (Czat AI) ---
  ai: {
    new_chat: 'Nowy Czat',
    history: {
      today: 'Dzisiaj',
      yesterday: 'Wczoraj',
      demo1: 'Korekta E-maila',
      demo2: 'Tłumaczenie Umowy',
      demo3: 'Rewizja Eseju'
    },
    guest: 'Gość',
    models: {
      pro_desc: 'Silne wnioskowanie dla złożonych zadań',
      fast_desc: 'Szybka odpowiedź dla tłumaczeń codziennych',
      creative_desc: 'Kreatywne myślenie dla copywritingu'
    },
    clear_chat: 'Wyczyść Czat',
    welcome_title: 'Jestem YanHe AI, w czym mogę pomóc?',
    shortcuts: {
      translate_title: 'Tłumaczenie',
      translate_desc: 'Biznes/Prawo',
      translate_prompt: 'Przetłumacz to na angielski biznesowy:',
      polish_title: 'Ulepsz',
      polish_desc: 'Profesjonalny ton',
      polish_prompt: 'Spraw, aby ten e-mail był bardziej uprzejmy:',
      grammar_title: 'Gramatyka',
      grammar_desc: 'Analiza błędów',
      grammar_prompt: 'Sprawdź błędy gramatyczne i wyjaśnij dlaczego:',
      culture_title: 'Kultura',
      culture_desc: 'Idiomy/Zwyczaje',
      culture_prompt: 'Wyjaśnij tło kulturowe tego idiomu:'
    },
    input_placeholder: 'Wpisz wiadomość (Shift + Enter dla nowej linii)...',
    disclaimer: 'Treści generowane przez AI mogą zawierać błędy. Proszę ręcznie sprawdzać ważne dokumenty.',
    copy: 'Kopiuj',
    retry: 'Ponów',
    cleared: 'Czat wyczyszczony',
    copied: 'Skopiowano do schowka',
    error_msg: 'Błąd sieci, spróbuj ponownie później',
    mock: {
      default: "To jest symulowana odpowiedź AI.\n\n1. **Profesjonalizm**: Dostosowuję ton do kontekstu.\n2. **Precyzja**: Oparta na ogromnym korpusie danych.\n\nProszę podać więcej kontekstu dla szczegółowych odpowiedzi.",
      trans: "Oto wynik tłumaczenia:\n\n**Kontekst Biznesowy**:\n> The contract shall come into force upon signature.\n\n**Analiza**:\nUżyto 'come into force' zamiast 'start' dla większej formalności.",
      polish: "Sugestia poprawy:\n\n**Oryginał**: I want to ask if you can give me a discount.\n**Zoptymalizowane**: Could you please consider offering a discount?\n\n**Powód**: 'Could you please' jest bardziej uprzejme i profesjonalne."
    }
  },

  // --- Login (Logowanie) ---
  login: {
    back_home: 'Powrót',
    brand: {
      ent_title: 'Połącz Globalne<br>Talenty',
      ent_desc: 'Dołącz do ekosystemu YanHe, opublikuj swoje potrzeby.',
      ind_title: 'Monetyzuj Wiedzę<br>Eksportuj Kulturę',
      ind_desc: 'Ekskluzywna platforma dla uniwersyteckich talentów językowych.',
      badge_title: 'Osiągnięcia',
      badge_gold: 'Certyfikowany Tłumacz',
      badge_silver: 'Top 100',
      badge_bronze: 'Pracowita Gwiazda'
    },
    role_ent: 'Firma',
    role_ind: 'Student',
    welcome: 'Witaj ponownie',
    sub_ent: 'Logowanie Firmy',
    sub_ind: 'Logowanie Studenta/Nauczyciela',
    placeholder: {
      ent_account: 'ID Firmy / E-mail',
      ind_account: 'Tel / ID Studenta',
      password: 'Hasło',
      org_name: 'Nazwa Firmy',
      school: 'Uniwersytet',
      phone_email: 'Tel / E-mail',
      set_password: 'Ustaw Hasło'
    },
    remember: 'Zapamiętaj mnie',
    forgot: 'Zapomniałeś hasła?',
    btn_login: 'Zaloguj',
    logging_in: 'Logowanie...',
    no_account: 'Nie masz konta?',
    to_register: 'Zarejestruj się',
    create_account: 'Utwórz Konto',
    join_ent: 'Dołącz do YanHe, zatrudnij najlepszych',
    join_ind: 'Dołącz do YanHe, rozwijaj się z nami',
    agree_prefix: 'Akceptuję',
    agreement: 'Warunki Usługi',
    btn_register: 'Zarejestruj',
    has_account: 'Masz już konto?',
    to_login: 'Zaloguj',
    msg: {
      input_error: 'Proszę podać konto i hasło',
      login_success: 'Zalogowano pomyślnie',
      agree_error: 'Proszę zaakceptować warunki',
      register_success: 'Wniosek o rejestrację wysłany'
    }
  },

  // --- Upload (Przesyłanie) ---
  upload: {
    title: 'Terminal Zbiórki Dialektów',
    db_connected: 'DB POŁĄCZONA',
    guest_id: 'GOŚĆ',
    recording_hint: 'Nagrywanie... Kliknij, aby zatrzymać',
    start_hint: 'Kliknij, aby nagrać',
    form: {
      location_label: 'Lokalizacja Dialektu',
      location_placeholder: 'np. Chengdu, Syczuan',
      meaning_label: 'Znaczenie (Meaning)',
      meaning_placeholder: 'Co oznacza to zdanie?',
      tags_label: 'Tagi'
    },
    tags: {
      daily: 'Codzienne',
      nursery: 'Rymowanka',
      slang: 'Slang'
    },
    btn_submit: 'Prześlij do YanHe DB',
    loading_text: 'Szyfrowanie i przesyłanie...',
    success_msg: 'Przesłano pomyślnie! Dziękujemy za Twój wkład.'
  },

  // --- Culture Map (Mapa Kulturowa) ---
  culture: {
    navbar: {
      subtitle: 'YANHE DIALECT',
      explore: 'Odkrywaj',
      pro: 'PRO',
      passport: 'Paszport'
    },
    tabs: {
      learn: 'Nauka',
      ai: 'Ocena AI',
      upload: 'Wkład'
    },
    cities: {
      Beijing: {
        name: 'Mandaryński Pekiński',
        intro: 'Charakterystyczny akcent z "er-hua" i unikalnym rytmem.',
        tags: ['Er-hua', 'Humor'],
        words: [
          { text: 'Ju Qi (Lojalny)', ipa: 'tɕy35 tɕʰi' },
          { text: 'Mei Pu Er (Nierzetelny)', ipa: 'mei21 xu' }
        ],
        aiModels: [
          { name: 'Stary Pekin (Formalny)' }, { name: 'Nowy Pekin (Potoczny)' }, { name: 'Akcent Południowy' }
        ],
        aiChallenge: { word: 'To jest autentyczne!' }
      },
      Shanghai: {
        name: 'Szanghajski Wu',
        intro: 'Miękkie tony odzwierciedlające elegancję kultury Szanghaju.',
        tags: ['Miękki', 'Elegancki'],
        words: [
          { text: 'Nong Hao (Cześć)', ipa: 'nɔŋ hɔ' },
          { text: 'A La (My)', ipa: 'a la' }
        ],
        aiModels: [
          { name: 'Stary Szanghaj' }, { name: 'Nowy Szanghaj' }
        ],
        aiChallenge: { word: 'Jadłeś już?' }
      }
    },
    ai: {
      model_base: 'Model Bazowy:',
      read_guide: 'Proszę przeczytać jako {model}:',
      listen_sample: 'Posłuchaj Próbki',
      analyzing: 'Budowanie krzywej tonu...',
      comparing: 'Porównywanie fonemów {city}...',
      analyzing_voice: 'Analiza głosu...',
      release_stop: 'Puść, aby zatrzymać',
      long_press: 'Przytrzymaj, aby nagrać',
      score_unit: 'Pkt',
      tone_analysis: 'Analiza Tonu',
      retry: 'Ponów',
      comment_good: 'Niesamowite! 98% zgodności z native speakerem.',
      comment_avg: 'Dobrze, ale wariacja tonu może być lepsza.',
      dimensions: {
        tone: 'Intonacja',
        clarity: 'Jasność',
        emotion: 'Emocje'
      }
    },
    passport: {
      title: 'Paszport',
      close: 'Zamknij'
    }
  },

  // --- Unlock Pro (Odblokuj Pro) ---
  unlock: {
    nav_title: 'Centrum Członkowskie',
    restore_purchase: 'Przywróć',
    pro_title: 'YANHE PRO',
    pro_desc: 'Odblokuj Pełną Mapę · Głęboki Dialog AI · Kursy Offline',
    benefits: {
      ai: { title: 'Korekta AI', desc: 'Bez limitu' },
      map: { title: 'Pełna Mapa', desc: '50+ Miast' },
      npc: { title: 'Cyfrowy Mistrz', desc: 'Zaawansowany Dialog' }
    },
    plans: {
      year_tag: 'Zniżka Studencka 90%',
      unit_year: 'Rok',
      year_desc: 'Tylko 0.13 PLN/Dzień',
      unit_month: 'Miesiąc',
      month_tag: 'Próba'
    },
    compare: {
      title: 'Porównanie',
      col_feature: 'Funkcja',
      col_free: 'Darmowe',
      row_ai: 'Wynik AI',
      val_limit: '3/Dzień',
      row_map: 'Eksploracja Mapy',
      val_map_limit: '3 Miasta',
      val_all: 'Wszystko',
      row_npc: 'Cyfrowy Mistrz',
      val_unlock: 'Odblokowane'
    },
    agreement: 'Subskrypcja oznacza akceptację Regulaminu. Anuluj w dowolnym momencie.',
    total: 'Razem',
    btn_pay: 'Zapłać Teraz',
    login_warn: 'Zaloguj się, aby kupić',
    verifying: 'Weryfikacja płatności...',
    success_msg: '🎉 Gratulacje! YanHe PRO aktywne.',
    pay_modal: {
      title: 'Kasa YanHe',
      amount: 'Kwota',
      scan_tip: 'Zeskanuj przez WeChat / Alipay',
      btn_mock: 'Symuluj Sukces'
    }
  },

  // --- AI Debate (Debata AI) ---
  debate: {
    header: {
      end_chat: 'Zakończ',
      topic_label: 'Temat:',
      status_online: 'Mistrz Online'
    },
    topics: {
      business: 'Negocjacje Biznesowe',
      history: 'Logika Historyczna',
      philosophy: 'Filozofia Konfucjańska',
      general: 'Dialog Ogólny'
    },
    chat: {
      welcome_prefix: 'Skoro wstąpiłeś do akademii, musisz być tutaj, aby dyskutować o',
      welcome_suffix: '.',
      welcome_invite: 'Proszę przedstawić swój argument, zamieniam się w słuch.',
      thinking: 'Mistrz myśli...',
      ai_reply_prefix: 'To co powiedziałeś o',
      ai_reply_body: 'ma sens. Jednak w dłuższej perspektywie, "co nagle to po diable". W negocjacjach ta strategia może przynieść odwrotny skutek.'
    },
    footer: {
      input_placeholder: 'Wpisz swój argument (Obsługa głosu)...',
      send_btn: 'Debatuj'
    }
  },

  // --- Education (Edukacja) ---
  education: {
    hero: {
      title: '<i class="bi bi-cpu"></i> Cyfrowy Mistrz AI · Głęboka Debata',
      desc: 'Więcej niż prosty czat. Weź udział w debatach na wysokim poziomie o <strong>Filozofii</strong> lub <strong>Biznesie</strong> z AI.',
      btn_business: 'Bitwa Biznesowa',
      btn_history: 'Debata Historyczna'
    },
    memory: {
      title: 'Stacja Pamięci',
      current_dict: 'Obecna Talia',
      forget_alert: 'Alert Ebbinghausa: <strong class="text-warning">{count}</strong> słów zostanie dziś zapomnianych.',
      saturation: 'Nasycenie',
      review_now: 'Powtórz Teraz'
    },
    search_placeholder: 'Szukaj: Chiński Biznesowy / Tybetański / Poezja...',
    btn_search: 'Szukaj',
    tags: {
      all: 'Wszystkie',
      hsk: 'Poziom HSK',
      business: 'Biznes',
      culture: 'Kultura',
      dialect: 'Dialekt',
      ethnic: 'Etniczne'
    },
    courses_title_all: 'Polecane Kursy',
    courses_suffix: 'Kursy',
    course_source: {
      original: 'Oryginalne',
      master: 'Mistrzowska Klasa',
      culture: 'Kultura',
      dialect: 'Dialekt'
    },
    courses: {
      c1: { title: 'Od Zera do HSK 3: Szybka Ścieżka' },
      c2: { title: 'Negocjacje: Targowanie się po Chińsku' },
      c3: { title: 'Poezja Tang i Song' },
      c4: { title: 'Dialekt Syczuański 101: Zacznij od "Ba Shi"' }
    },
    free: 'Darmowe',
    ethnic: {
      title: 'Plan Ochrony Języków',
      subtitle: 'Głos 56 Grup Etnicznych',
      btn_enter: 'Wejdź',
      items: {
        tibetan: { lang: 'Tybetański', desc: 'Głos śnieżnego płaskowyżu' },
        uyghur: { lang: 'Ujgurski', desc: 'Perła Jedwabnego Szlaku' },
        zhuang: { lang: 'Zhuang', desc: 'Pieśni ludowe Liu Sanjie' }
      }
    },
    vip_modal: {
      title: 'Akademia YanHe PRO',
      desc: 'Odblokuj Przywileje Kulturowe Premium',
      ben_1: 'Głęboka Debata AI',
      ben_2: 'Klasa Mistrzowska Dziedzictwa',
      ben_3: 'Tłumaczenie Dialektu na Żywo',
      ben_4: 'Fizyczny Certyfikat',
      btn_pay: 'Odblokuj (od ¥12.9)'
    },
    vip_required: 'To jest kurs płatny. Proszę zasubskrybować PRO.'
  },

  // --- Checkout (Kasa) ---
  checkout: {
    secure_ssl: 'UnionPay SSL Bezpieczne',
    unit_year: 'Rok',
    countdown_prefix: 'Cena zablokowana, zapłać w',
    countdown_suffix: '',
    course_info: 'Info o Kursie',
    escrow_detail: 'Szczegóły Depozytu',
    payment_method: 'Metoda Płatności',
    pay_wechat: 'WeChat Pay',
    pay_wechat_desc: 'Zalecane, Szybkie i Bezpieczne',
    pay_alipay: 'Alipay',
    pay_alipay_desc: 'Obsługuje Huabei',
    pay_card: 'UnionPay / Karta',
    pay_card_desc: 'Obsługuje przelewy firmowe',
    need_invoice: 'Potrzebuję faktury',
    summary_title: 'Podsumowanie',
    price_original: 'Cena Oryginalna',
    price_student: 'Zniżka Studencka',
    price_tax: 'Podatek',
    price_course_orig: 'Cena Kursu',
    price_discount: 'Oferta Limitowana',
    price_bounty: 'Nagroda za Zadanie',
    price_service_fee: 'Opłata Serwisowa (5%)',
    price_expedite: 'Opłata Ekspresowa',
    total_due: 'Razem do Zapłaty',
    processing: 'Przetwarzanie...',
    guarantee: 'Środki gwarantowane przez platformę, zwrot w 7 dni',
    btn_home: 'Strona Główna',
    btn_experience: 'Zacznij',
    btn_pay_now: 'Zapłać Teraz',
    btn_pay: 'Zapłać',
    btn_escrow: 'Wpłać Depozyt',
    demo: {
      label: 'Tryb Demo:',
      scenario_a: 'A: Członkostwo',
      scenario_b: 'B: Kurs',
      scenario_c: 'C: Depozyt Zadania'
    },
    products: {
      membership: {
        title: 'YanHe Pro Roczny',
        desc: 'Oferta Studencka | Dostęp 365 Dni',
        feat1: 'Odblokuj wszystkie scenariusze dialektów',
        feat2: 'Nielimitowana Korekta AI',
        feat3: 'Mapa Premium i Awatar'
      },
      course: {
        title: 'Chiński Biznesowy: Negocjacje',
        tag: 'Pojedynczy Kurs',
        detail: 'Zawiera: 45min Wideo + Terminologia + Praktyka AI'
      },
      task: {
        title: 'Depozyt: Tłumaczenie Prawne',
        tag: 'Gwarancja Platformy',
        detail: 'Zamówienie #88392\nPłatność zwolniona po akceptacji.'
      }
    },
    success: {
      membership: { title: 'Witaj w Pro!', desc: 'Korzyści aktywowane. Ciesz się funkcjami premium.' },
      course: { title: 'Kurs Odblokowany!', desc: 'Przejdź do "Moje Kursy", aby rozpocząć.' },
      task: { title: 'Środki Wpłacone', desc: 'Zadanie opublikowane. Zostaniesz powiadomiony po akceptacji.' }
    }
  },

  // --- Search (Szukaj) ---
  search: {
    nav_back: 'Strona Główna',
    placeholder: 'Szukaj zadań, talentów, kursów...',
    default_keyword: 'Tłumaczenie',
    tabs: {
      all: 'Wszystko',
      task: 'Zadania',
      user: 'Talenty',
      course: 'Kursy'
    },
    tags: {
      task: 'Zadanie',
      user: 'Talent',
      course: 'Kurs'
    },
    result_stat: 'Znaleziono {count} wyników dla "{keyword}"',
    empty: {
      title: 'Brak wyników, spróbuj innego słowa kluczowego?',
      tip: '(Spróbuj: Tłumaczenie, Prawo, Biznes, Jack)'
    },
    btn_contact: 'Kontakt',
    score: 'Pkt',
    msg_contact: 'Wysłano prośbę o współpracę do {name}!'
  },

  // --- Chat (Wiadomości) ---
  chat: {
    nav_back: 'Strona Główna',
    title: 'Centrum Wiadomości',
    search_placeholder: 'Szukaj kontaktów...',
    typing: 'Pisze...',
    menu_profile: 'Zobacz Profil',
    menu_report: 'Zgłoś',
    input_placeholder: 'Naciśnij Enter, aby wysłać...'
  },

  // --- Service Hall (Sala Usług) ---
  service: {
    role: {
      creator: 'Jestem Twórcą (Szukam Pracy)',
      client: 'Jestem Klientem (Zlecam Pracę)'
    },
    search: {
      placeholder_creator: 'Szukaj zadań: Tłumaczenie, Dubbing...',
      placeholder_client: 'Szukaj talentów: TEM-8, Tłumaczenie ustne...',
      btn: 'Szukaj'
    },
    recommend_title: 'Polecane Zadania',
    sort_newest: 'Sortuj: Najnowsze',
    task_types: {
      business: 'Biznes',
      dialect: 'Dialekt',
      urgent: 'Pilne'
    },
    status: {
      recruiting: 'Rekrutacja',
      joined: 'Dołączyło {count}/{total}'
    },
    auth_card: {
      title: 'Weryfikacja Talentu Uni.',
      desc: 'Zweryfikuj status BSU/BFSU dla zadań premium i 0 opłat.',
      btn: 'Weryfikuj'
    },
    rank: {
      title: 'Najlepiej Zarabiający w Tygodniu'
    },
    client: {
      post_title: 'Opublikuj Nagrodę Premium',
      post_desc: 'Dla złożonych potrzeb. Połącz się z 12,000+ talentami.',
      tag_escrow: 'Depozyt',
      tag_audit: 'Ślepa Recenzja',
      btn_post: 'Opublikuj',
      ai_title: 'Usługa Ekspresowa AI',
      ai_desc: 'Dla prostych zadań. Obsługiwane przez YanHe LLM, natychmiastowa odpowiedź.',
      tag_fast: 'Natychmiastowe',
      btn_ai: 'Wypróbuj AI'
    },
    market: {
      title: 'Referencje Cen Rynkowych',
      tags: {
        law: 'Prawo',
        interpreting: 'Tłumaczenie ustne',
        dubbing: 'Głos',
        writing: 'Pisanie'
      },
      disclaimer: '* Dane oparte na średniej z 30 dni.'
    }
  },

  // --- Service Detail (Szczegóły Zadania) ---
  service_detail: {
    nav_back: 'Powrót do Sali',
    breadcrumb_cat: 'Tłumaczenie i Lokalizacja',
    breadcrumb_current: 'Szczegóły',
    meta: {
      escrow: 'Fundusze Zabezpieczone',
      urgent: 'Pilne',
      views: '{count} Wyświetleń',
      id_label: 'ID Zadania'
    },
    section: {
      background: 'Tło',
      duties: 'Obowiązki',
      skills: 'Wymagania',
      questions: 'Pytania Przesiewowe',
      attachment: 'Załączniki'
    },
    attachment_hint: '2.4 MB · Do podglądu',
    bids: {
      title: 'Aktywność ({count})',
      stat_joined: 'Aplikanci',
      stat_chat: 'W Rozmowie',
      stat_active: 'Aktywne',
      stat_rate: 'Wskaźnik Zatrudnienia',
      submit_time: 'Wysłano 5 min temu'
    },
    sidebar: {
      budget_label: 'Budżet (Stały)',
      unit: 'CNY'
    },
    btn: {
      apply: 'Aplikuj',
      applied: 'Zaaplikowano',
      chat: 'Czat'
    },
    action: {
      collect: 'Zapisz',
      share: 'Udostępnij',
      report: 'Zgłoś'
    },
    client: {
      title: 'Informacje o Kliencie',
      verified: 'Firma Zweryfikowana',
      loc: 'Lokalizacja',
      tasks: 'Opublikowano',
      spent: 'Wydano',
      rate: 'Wskaźnik Zatrudnienia'
    },
    similar_title: 'Może Cię zainteresować',
    similar_demo: 'Edycja Eseju Studenckiego',
    similar_tag: 'Pisanie',
    modal: {
      title: 'Wyślij Propozycję',
      fee_tip: 'Platforma pobiera 10% opłaty serwisowej po zakończeniu.',
      price_label: 'Twoja Oferta (¥)',
      income_calc: 'Szacowany Dochód',
      days_label: 'Czas Trwania',
      day_unit: 'Dni',
      urgent_opt: 'Pilne',
      letter_label: 'List Motywacyjny',
      letter_ph: 'Dlaczego jesteś najlepszy do tej pracy?',
      ai_polish: 'Korekta AI',
      ai_done: 'AI Poprawiło!',
      upload_label: 'Portfolio/CV',
      cancel: 'Anuluj',
      confirm: 'Wyślij',
      submitting: 'Wysyłanie...',
      success_msg: '✅ Oferta wysłana! Czekaj na kontakt klienta.'
    }
  },

  // --- Publish Task (Opublikuj Zadanie) ---
  publish: {
    nav_title: 'Utwórz Zadanie',
    nav_subtitle: 'Gwarantowane przez YanHe',
    steps: {
      desc: 'Opis',
      budget: 'Budżet'
    },
    types: {
      translation: 'Tłumaczenie',
      dubbing: 'Dubbing',
      polish: 'Korekta',
      custom: 'Niestandardowe'
    },
    form: {
      type_label: 'Kategoria',
      title_label: 'Tytuł',
      title_ph: 'np: Tłumaczenie umowy prawnej 5000 słów',
      desc_label: 'Szczegóły',
      desc_ph: 'Opisz tło, odbiorców, terminologię...',
      upload_label: 'Załącznik (Opcjonalnie)',
      upload_hint: 'Kliknij lub przeciągnij plik tutaj'
    },
    btn_next: 'Dalej: Budżet',
    btn_back: 'Wstecz',
    modes: {
      normal: { title: 'Standard', desc: 'Jeden wykonawca bierze wszystko' },
      contest: { title: 'Konkurs (Polecane)', desc: 'Wiele zgłoszeń, jeden zwycięzca' }
    },
    step2: {
      mode_title: 'Tryb Współpracy',
      budget_label: 'Budżet',
      budget_hint: 'Środki są trzymane w depozycie do momentu zatwierdzenia.',
      contest_alert: 'Budżet jest dzielony na pulę uczestnictwa i nagrodę zwycięzcy.',
      total_budget: 'Całkowity Budżet',
      max_people: 'Max Zgłoszeń',
      recommend: 'Polecane',
      pool_entry: 'Pula Uczestnictwa',
      per_person: 'Średnio',
      pool_winner: 'Nagroda Zwycięzcy',
      deadline: 'Termin',
      deadline_ph: 'Wybierz datę',
      urgent_opt: 'Pilne (+ ¥20.00)',
      expert_opt: 'Tylko Zweryfikowani Eksperci'
    },
    footer: {
      total_label: 'Całkowity Depozyt',
      submitting: 'Wysyłanie...',
      btn_pay: 'Opublikuj i Zapłać'
    },
    msg_title_required: 'Proszę podać tytuł',
    msg_budget_invalid: 'Proszę podać prawidłowy budżet',
    msg_success: 'Utworzono! Przekierowanie do płatności...'
  },

  // --- Story AI (Historia AI) ---
  story_ai: {
    title: 'Zestaw Inspiracji',
    welcome: {
      greeting: 'Witaj. Jestem Asystentem Naukowym YanHe.',
      desc: 'Masz problem ze swoją chińską historią? Niezależnie od tego, czy chodzi o szlifowanie tekstu, aluzje czy tłumaczenie, jestem tutaj.'
    },
    card_tag: 'Pióro AI',
    actions: {
      polish: 'Oszlifuj Tekst',
      polish_prompt: 'Spraw, aby ten tekst był bardziej poetycki i klasyczny:',
      fest: 'Festiwale',
      fest_prompt: 'Piękny tekst na Święto Środka Jesieni z tłumaczeniem',
      culture: 'Dziedzictwo',
      culture_prompt: 'Przedstaw to niematerialne dziedzictwo kulturowe:'
    },
    input_ph: 'Zapytaj mnie o cokolwiek...',
    copied: 'Skopiowano do schowka'
  },

  // --- Detail Paper (Szczegóły Papieru) ---
  detail_paper: {
    nav_back: 'Powrót do Zwoju',
    date_prefix: 'Zapisano',
    date_suffix: '',
    btn_follow: 'Obserwuj',
    btn_following: 'Obserwujesz',
    comment_title: 'Komentarze',
    seal_like: 'Lubię to',
    seal_liked: 'Polubione',
    input_ph: 'Napisz komentarz...',
    msg_followed: 'Zaobserwowano',
    msg_unfollowed: 'Przestano obserwować',
    me: 'Ja'
  },

  // --- Publish Paper (Opublikuj Papier) ---
  publish_paper: {
    nav: {
      cancel: 'Anuluj',
      title: 'Nowa Historia',
      publish: 'Podpisz i Opublikuj'
    },
    upload: {
      change: 'Zmień Media',
      placeholder: 'Prześlij Zdjęcie/Wideo'
    },
    form: {
      title_ph: 'Tytuł tutaj...',
      ai_btn: 'Korekta AI',
      content_ph: 'Zapisz swoje myśli...',
      topic_label: 'Temat',
      loc_label: 'Lokalizacja',
      loc_ph: 'Pobierz Lokalizację'
    },
    tags: ['Neo-Chiński', 'Hanfu na co dzień', 'Dziedzictwo', 'Street Food', 'Starożytna Architektura', 'Spacer po Mieście'],
    loc_finding: 'Lokalizowanie...',
    ai_processing: 'AI poprawia...',
    publishing: 'Publikowanie...',
    msg_max_tags: 'Maks. 3 tematy',
    msg_no_title: 'Proszę najpierw podać tytuł',
    msg_ai_done: 'Poprawiono!',
    msg_success: 'Opublikowano pomyślnie'
  },

  // --- Culture Scroll (Zwój Kultury) ---
  culture_scroll: {
    nav_back: 'Powrót do Portalu',
    brand_sub: 'Wspomnienia',
    intro: {
      title: 'Dzienniki',
      desc: 'Łączenie Języków<br>Dzielenie się Mądrością'
    },
    seal: {
      like: 'Lubię to',
      liked: 'Przeczytane'
    },
    end_card: {
      title: 'Ciąg dalszy nastąpi...',
      desc: 'Kliknij, aby napisać swoją historię'
    },
    fab_write: 'Napisz',
    modal: {
      title: 'Co zapisać?',
      opt_ai: 'Inspiracja AI',
      opt_photo: 'Zdjęcie/Historia',
      opt_write: 'Długi Artykuł'
    },
    location_default: 'Chiny'
  },

  // --- Writer (Pisarz) ---
  writer: {
    nav: {
      back: 'Zamknij Zwój',
      status_saved: 'Tusz Wyschnięty',
      status_writing: 'Pisanie...',
      publish: 'Opublikuj'
    },
    cover: {
      change: 'Zmień Okładkę',
      add: 'Dodaj Okładkę (Opcjonalnie)'
    },
    editor: {
      title_ph: 'Wpisz Tytuł',
      author_suffix: '',
      content_ph: 'Zacznij pisać swoją historię tutaj...',
      ai_btn: 'AI Kontynuuj',
      ai_tip: 'AI'
    },
    msg: {
      anonymous: 'Anonim',
      ai_loading: 'AI myśli...',
      ai_done: 'Kontynuacja zakończona',
      validate_error: 'Tytuł i treść nie mogą być puste',
      success: 'Opublikowano pomyślnie'
    }
  },

  // --- Course Player (Odtwarzacz Kursu) ---
  player: {
    nav: {
      demo_mode: 'Tryb Demo',
      demo_exit: 'Wyjdź z Demo',
      back: 'Wstecz'
    },
    lock: {
      title: 'Treść Premium',
      desc: 'Odblokuj ten rozdział i wszystkie filmy scenariuszowe',
      btn_unlock: 'Odblokuj (¥ {price})',
      btn_trial: 'Próba 30s'
    },
    resume_tip: 'Wznów od {time}, kliknij aby skoczyć',
    tools: {
      label: 'Narzędzia',
      pinyin: 'Pinyin',
      pinyin_ph: 'Wybierz',
      pinyin_tip: 'Kliknij, aby skopiować:',
      quiz: 'Quiz',
      fav: 'Ulubione',
      faved: 'Zapisano'
    },
    ctrl: {
      speed: 'Prędkość',
      sub_cn: 'CN',
      sub_en: 'PL', // Polish
      sub_both: 'Oba',
      subtitle: 'Napisy'
    },
    meta: {
      views: 'wyświetleń',
      key_points: 'Kluczowe Punkty'
    },
    playlist: {
      title: 'Playlista',
      tabs: {
        all: 'Wszystkie',
        grammar: 'Wykład',
        scenario: 'Scenariusz',
        culture: 'Kultura'
      }
    },
    tags: {
      free: 'Darmowe',
      unlocked: 'Odblokowane',
      paid: 'Płatne'
    },
    ai: {
      title: 'Korepetytor AI',
      welcome: 'Cześć! Jestem Twoim Asystentem AI.',
      input_ph: 'Zadaj pytanie...',
      mock_reply: 'Dobre pytanie! "{input}" w kontekście biznesowym zazwyczaj oznacza...'
    },
    quiz: {
      title: 'Quiz - Etykieta Biznesowa',
      score: 'Wynik',
      btn_submit: 'Wyślij',
      msg_perfect: 'Idealnie! Dobra robota!'
    },
    msg_jumped: 'Skoczono do {time}',
    msg_faved: 'Dodano do ulubionych',
    msg_unfaved: 'Usunięto z ulubionych',
    msg_copied: 'Skopiowano: {char}'
  },

  // --- Review Center (Centrum Powtórek) ---
  review: {
    header: {
      title_menu: 'Inteligentna Powtórka',
      title_flash: 'Fiszki',
      title_phonics: 'Fonetyka AI',
      title_quiz: 'Szybki Quiz',
      streak: '{day} Dni z rzędu'
    },
    menu: {
      title: 'Wybierz Tryb Powtórki',
      flash: { title: 'Fiszki', desc: 'System Powtórek Rozłożonych', badge: 'Zaległe: {count}' },
      phonics: { title: 'Fonetyka AI', desc: 'Analiza wymowy w czasie rzeczywistym', badge: 'Nowe: {count}' },
      quiz: { title: 'Szybki Quiz', desc: 'Wyzwanie 30s', badge: 'Rekord: {score}' }
    },
    flash: {
      tag: 'Podstawowe Słownictwo Biznesowe',
      hint_flip: 'Kliknij, aby odwrócić',
      kb_hint_prefix: 'Naciśnij',
      kb_space: 'Spację',
      kb_hint_suffix: 'aby odwrócić',
      btn_show: 'Pokaż Odpowiedź',
      grade: { again: 'Jeszcze raz', hard: 'Trudne', good: 'Dobre', easy: 'Łatwe' }
    },
    phonics: {
      status_recording: 'Słuchanie...',
      status_idle: 'Dotknij mikrofonu, aby nagrać',
      score_unit: 'pkt',
      fb_perfect: 'Idealnie! Jak native speaker!',
      fb_good: 'Dobrze! Zwróć uwagę na końcówkę.'
    },
    quiz: {
      msg_wrong: 'Błąd! Odpowiedź to: {ans}'
    },
    btn_next: 'Dalej',
    finish: {
      title: 'Sesja Zakończona!',
      desc: 'Powtórzono {count} elementów. Pamięć +5%',
      btn_back: 'Powrót do Menu'
    }
  },

  // --- Badge Wall (Ściana Odznak) ---
  badge: {
    nav_back: 'Powrót do Profilu',
    header: {
      title: 'Ściana Osiągnięć',
      subtitle: 'Śledź swój rozwój i wkład.',
      unlocked: 'Odblokowane',
      percentile: 'Top {percent}%'
    },
    tabs: {
      all: 'Wszystkie',
      unlocked: 'Odblokowane',
      locked: 'Zablokowane',
      ssr: 'Rzadkie (SSR)'
    },
    status_locked: 'Zablokowane',
    level_badge: 'Odznaka',
    meta: {
      condition: 'Wymaganie',
      unlocked_at: 'Odblokowano',
      progress: 'Postęp'
    },
    btn_close: 'Zamknij',
    btn_share: 'Udostępnij'
  },

  // --- University Cert (Certyfikat Uniw.) ---
  cert: {
    nav_back: 'Powrót do Sali',
    hero: {
      title: 'Weryfikacja Talentu Uniwersyteckiego',
      subtitle: 'Dołącz do puli ekspertów YanHe, monetyzuj swoje umiejętności.'
    },
    benefits: {
      free: { title: '0% Opłat', desc: 'Brak prowizji dla absolwentów' },
      priority: { title: 'Priorytet', desc: 'Zadania premium jako pierwsze' },
      cert: { title: 'Certyfikat', desc: 'Oficjalny dowód stażu' }
    },
    form: {
      step1: 'Krok 1: Informacje Podstawowe',
      name_label: 'Prawdziwe Imię i Nazwisko',
      name_ph: 'Zgodnie z legitymacją studencką',
      school_label: 'Uniwersytet',
      school_ph: 'Wybierz',
      schools: {
        bsu: 'Uniwersytet Sportowy w Pekinie (BSU)',
        bfsu: 'Uniwersytet Studiów Zagranicznych w Pekinie',
        blcu: 'Uniwersytet Języka i Kultury w Pekinie',
        other: 'Inne'
      },
      major_label: 'Wydział/Kierunek',
      major_ph: 'np: Wydział Anglistyki',
      id_label: 'ID Studenta',
      id_ph: 'Wpisz ID',
      step2: 'Krok 2: Weryfikacja',
      upload_label: 'Prześlij Legitymację Studencką (Przód)',
      drag_text: 'Przeciągnij plik tutaj lub',
      click_upload: 'Kliknij, aby Przesłać',
      upload_tip: 'Tylko JPG/PNG, maks. 5MB',
      agree: 'Potwierdzam prawdziwość informacji i akceptuję warunki YanHe.',
      btn_submit: 'Wyślij',
      submitting: 'Wysyłanie...'
    },
    msg: {
      agree_warn: 'Proszę zaakceptować warunki',
      info_warn: 'Proszę uzupełnić podstawowe informacje',
      success: '🎉 Wysłano! Weryfikacja w ciągu 24h.'
    }
  },

  // --- User Profile (Profil Użytkownika) ---
  profile: {
    unnamed: 'Bez Nazwy',
    menu: {
      edit: 'Edytuj Profil',
      badge: 'Ściana Odznak',
      vip: 'Centrum Członkowskie'
    },
    header: {
      edit_cover: 'Okładka',
      verified: 'Zweryfikowany',
      no_bio: 'Brak bio',
      btn_edit: 'Edytuj Profil',
      btn_share: 'Udostępnij'
    },
    stats: {
      following: 'Obserwuje',
      followers: 'Obserwujący',
      likes: 'Polubienia'
    },
    badges: {
      title: 'Odznaki Honorowe',
      all: 'Wszystkie'
    },
    tabs: {
      overview: 'Przegląd',
      learning: 'Nauka',
      posts: 'Posty',
      collections: 'Kolekcje'
    },
    overview: {
      heat_title: 'Aktywność',
      heat_sub: 'Łącznie {hours} godzin w tym roku',
      visitors: 'Ostatni Goście',
      vip_title: 'Korzyści PRO',
      vip_date: 'Ważne do 2027.01.01',
      vip_desc: 'Odblokuj korektę AI i nielimitowane tłumaczenie',
      btn_renew: 'Zarządzaj',
      btn_unlock: 'Odblokuj Teraz'
    },
    learning: {
      next: 'Dalej',
      continue: 'Wznów'
    },
    posts: {
      time_ago: '2 godz. temu',
      demo_content: 'To jest przykładowa treść ze społeczności YanHe...'
    },
    collections: {
      items: 'elementy'
    },
    common: {
    cancel: 'Anuluj',
    confirm: 'Potwierdź',
    count_is: 'Licznik wynosi',
    edit_hint_prefix: 'Edytuj',
    edit_hint_suffix: 'aby przetestować HMR',
    check_out: 'Sprawdź',
    vue_official_starter: 'oficjalny starter Vue + Vite',
    read_docs_tip: 'Kliknij logo, aby dowiedzieć się więcej'
  },
  login: {
    welcome: 'Witaj w YanHe',
    btn_login: 'Zaloguj',
    demo_fill: '[Demo] Auto-wypełnianie Admin',
    placeholder: {
      ind_account: 'Konto / Nazwa użytkownika',
      password: 'Hasło',
    },
    msg: {
      input_error: 'Proszę podać konto i hasło',
      login_success: 'Logowanie udane, witaj z powrotem!',
    }
  },
  ai: {
    title: 'YanHe AI',
    waking_up: 'Asystent AI się budzi...',
    sync_established: 'Synchronizacja nawiązana.',
    hello_world: 'Cześć! Jestem Twoim inteligentnym asystentem.',
    thinking: 'Myślę',
    input_placeholder: 'Synchronizacja z Alice...',
    action_happy: 'Kocham cię najbardziej! ❤️',
    error_msg: 'Synchronizacja przerwana.',
    demo_greeting: 'Cześć! Widzisz mnie?<br>Załadowano z folderu public!',
    model_loaded: '✅ Model Załadowany!',
    loading_progress: 'Postęp:',
    model_failed: '❌ Błąd Modelu:'
  },
  education: {
    pinyin_check_title: 'Inteligentna Korekta Pinyin',
    pinyin_check_hint: 'Kliknij literę, aby wybrać ton',
    pinyin_complete_title: 'Pisownia zakończona!',
    pinyin_result_desc: 'Wynik końcowy: {result}'
  },
  player: {
    video_not_supported: 'Twoja przeglądarka nie obsługuje wideo.',
    speed_label: 'Prędkość:',
    resume_tip: 'Wznowiono w: {time}',
    time_format: '{m} min {s} s'
  },
    modal: {
      title: 'Edytuj Profil',
      random_avatar: 'Losowy Awatar',
      label_name: 'Pseudonim',
      label_bio: 'Bio',
      cancel: 'Anuluj',
      save: 'Zapisz'
    },
    msg_banner_success: 'Okładka zaktualizowana!',
    msg_save_success: 'Zapisano pomyślnie'
  }
}