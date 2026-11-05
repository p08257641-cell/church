export type LanguageCode = 'en' | 'es' | 'fr' | 'gaa' | 'ig' | 'sw' | 'tw' | 'yo' | 'zh';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  englishName: string;
  welcomeGreeting: string;
  flagCode: string;
  nav: {
    home: string;
    about: string;
    online: string;
    events: string;
    testimonies: string;
    readings: string;
    salvation: string;
    give: string;
    join: string;
    resources: string;
    contact: string;
    watchLive: string;
  };
  heroTagline: string;
}

export const LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    label: 'English',
    englishName: 'English',
    welcomeGreeting: 'Welcome to the Family',
    flagCode: 'gb',
    nav: {
      home: 'Home',
      about: 'About',
      online: 'Online Service',
      events: 'Events',
      testimonies: 'Testimonies',
      readings: 'Daily Readings',
      salvation: 'Salvation',
      give: 'Give',
      join: 'Join Us',
      resources: 'Resources',
      contact: 'Contact',
      watchLive: 'Join Live'
    },
    heroTagline: 'Equipping God’s Overcomers Across the Nations'
  },
  {
    code: 'es',
    label: 'Español',
    englishName: 'Spanish',
    welcomeGreeting: 'Bienvenidos a la Familia',
    flagCode: 'es',
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      online: 'Servicio en Línea',
      events: 'Eventos',
      testimonies: 'Testimonios',
      readings: 'Lecturas Diarias',
      salvation: 'Salvación',
      give: 'Dar',
      join: 'Únete',
      resources: 'Recursos',
      contact: 'Contacto',
      watchLive: 'En Vivo'
    },
    heroTagline: 'Equipando a los Vencedores de Dios en las Naciones'
  },
  {
    code: 'fr',
    label: 'Français',
    englishName: 'French',
    welcomeGreeting: 'Bienvenue dans la Famille',
    flagCode: 'fr',
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      online: 'Culte en Ligne',
      events: 'Événements',
      testimonies: 'Témoignages',
      readings: 'Lectures du Jour',
      salvation: 'Salut',
      give: 'Donner',
      join: 'Nous Rejoindre',
      resources: 'Ressources',
      contact: 'Contact',
      watchLive: 'En Direct'
    },
    heroTagline: 'Équiper les Vainqueurs de Dieu à Travers les Nations'
  },
  {
    code: 'tw',
    label: 'Twi',
    englishName: 'Akan (Twi)',
    welcomeGreeting: 'Akwaaba Ba Yɛn Abusua Mu',
    flagCode: 'gh',
    nav: {
      home: 'Fie',
      about: 'Yɛn Ho Nsɛm',
      online: 'Intanɛt Som',
      events: 'Dwumadie',
      testimonies: 'Adanseɛ',
      readings: 'Da Biara Akenkan',
      salvation: 'Nkwagyeɛ',
      give: 'Afɔrebɔ',
      join: 'Bɛka Yɛn Ho',
      resources: 'Nneɛma',
      contact: 'Frɛ Yɛn',
      watchLive: 'Hwɛ Seesei'
    },
    heroTagline: 'Yɛresiesie Onyankopɔn Nkonimdifoɔ Wɔ Aman Nyinaa So'
  },
  {
    code: 'gaa',
    label: 'Ga',
    englishName: 'Ga',
    welcomeGreeting: 'Oyiwala Dɔŋŋ — Atuu',
    flagCode: 'gh',
    nav: {
      home: 'Shĩa',
      about: 'Wɔ He Sane',
      online: 'Kpee yɛ Intanɛt Nɔ',
      events: 'Nifeemɔi',
      testimonies: 'Odasei',
      readings: 'Daa Gbi Kanemɔ',
      salvation: 'Yiwalaheremɔ',
      give: 'Nɔhãmɔ',
      join: 'Baafata Wɔ He',
      resources: 'Woji',
      contact: 'Bi Wɔ',
      watchLive: 'Kwɛmɔ Amrɔ Nɛɛ'
    },
    heroTagline: 'Equipping God’s Overcomers Across the Nations'
  },
  {
    code: 'ig',
    label: 'Igbo',
    englishName: 'Igbo',
    welcomeGreeting: 'Nnọọ n’Ezinụlọ Anyị',
    flagCode: 'ng',
    nav: {
      home: 'Ụlọ',
      about: 'Banyere Anyị',
      online: 'Ofufe n’Ịntanetị',
      events: 'Mmemme',
      testimonies: 'Àmà',
      readings: 'Ọgụgụ Kwa Ụbọchị',
      salvation: 'Nzọpụta',
      give: 'Nye',
      join: 'Soro Anyị',
      resources: 'Ngwaọrụ',
      contact: 'Kpọtụrụ Anyị',
      watchLive: 'onyonyo Ndụ'
    },
    heroTagline: 'Ikwadebe Ndị Na-emeri nke Chineke n’Ofesi'
  },
  {
    code: 'yo',
    label: 'Yorùbá',
    englishName: 'Yoruba',
    welcomeGreeting: 'Ẹ Káàbọ̀ sí Idile Wa',
    flagCode: 'ng',
    nav: {
      home: 'Ilé',
      about: 'Nípa Wa',
      online: 'Ìsìn Lórí Íńtánẹ́ẹ̀tì',
      events: 'Àwọn Ìṣẹ̀lẹ̀',
      testimonies: 'Ẹ̀rí',
      readings: 'Kíkà Bíbélì Ojoojúmọ́',
      salvation: 'Ìgbàlà',
      give: 'Fífúnni',
      join: 'Darapọ̀ Mọ́ Wa',
      resources: 'Àwọn Ohun Èlò',
      contact: 'Kàn Sí Wa',
      watchLive: 'Wò Ó Nígbà Yìí'
    },
    heroTagline: 'Pípèsè Àwọn Aṣẹ́gun Ọlọ́run Káàkiri Àwọn Orílẹ̀-èdè'
  },
  {
    code: 'sw',
    label: 'Kiswahili',
    englishName: 'Swahili',
    welcomeGreeting: 'Karibu Katika Familia',
    flagCode: 'ke',
    nav: {
      home: 'Nyumbani',
      about: 'Kutuhusu',
      online: 'Ibada Mtandaoni',
      events: 'Matukio',
      testimonies: 'Ushuhuda',
      readings: 'Masomo ya Kila Siku',
      salvation: 'Wokovu',
      give: 'Toa',
      join: 'Jiunge Nasi',
      resources: 'Nyenzo',
      contact: 'Wasiliana',
      watchLive: 'Tazama Mubashara'
    },
    heroTagline: 'Kuwavuvia Washindi wa Mungu Katika Mataifa Yote'
  },
  {
    code: 'zh',
    label: '中文',
    englishName: 'Simplified Chinese',
    welcomeGreeting: '欢迎加入神的家',
    flagCode: 'cn',
    nav: {
      home: '首页',
      about: '关于我们',
      online: '线上主日',
      events: '事工活动',
      testimonies: '见证如云',
      readings: '每日读经',
      salvation: '救恩确据',
      give: '奉献支持',
      join: '加入教会',
      resources: '属灵资源',
      contact: '联系我们',
      watchLive: '进入直播'
    },
    heroTagline: '在列国装备神国得胜者'
  }
];

export const FLAG_URLS: Record<string, string> = {
  gb: 'https://ephesusgatheringsworldwide.com/wp-content/themes/egw-diaspora-theme/assets/img/flags/gb.svg',
  ca: 'https://ephesusgatheringsworldwide.com/wp-content/themes/egw-diaspora-theme/assets/img/flags/ca.svg',
  us: 'https://ephesusgatheringsworldwide.com/wp-content/themes/egw-diaspora-theme/assets/img/flags/us.svg',
  de: 'https://ephesusgatheringsworldwide.com/wp-content/themes/egw-diaspora-theme/assets/img/flags/de.svg',
  gh: 'https://ephesusgatheringsworldwide.com/wp-content/themes/egw-diaspora-theme/assets/img/flags/gh.svg',
  ke: 'https://ephesusgatheringsworldwide.com/wp-content/themes/egw-diaspora-theme/assets/img/flags/ke.svg',
  es: 'https://ephesusgatheringsworldwide.com/wp-content/themes/egw-diaspora-theme/assets/img/flags/es.svg',
  fr: 'https://ephesusgatheringsworldwide.com/wp-content/themes/egw-diaspora-theme/assets/img/flags/fr.svg',
  ng: 'https://ephesusgatheringsworldwide.com/wp-content/themes/egw-diaspora-theme/assets/img/flags/ng.svg',
  tz: 'https://ephesusgatheringsworldwide.com/wp-content/themes/egw-diaspora-theme/assets/img/flags/tz.svg',
  cn: 'https://ephesusgatheringsworldwide.com/wp-content/themes/egw-diaspora-theme/assets/img/flags/cn.svg'
};

export const CHURCH_INFO = {
  name: 'Ephesus Gatherings Worldwide',
  canonicalUrl: 'https://ephesusgatheringsworldwide.org/',
  headquarters: {
    name: 'The Son Place (Grace Grounds)',
    venue: 'Mikaddo Plaza, Labone Junction',
    city: 'Accra',
    country: 'Ghana',
    fullAddress: 'The Son Place, Mikaddo Plaza, Labone Junction, Accra, Ghana',
    serviceTimes: 'Every Sunday at 3:00 PM GMT (15:00 HRS GMT)'
  },
  contact: {
    phoneGhana: '+233 20 194 4006',
    phoneInternational: '+1 (780) 953-7153',
    emailAdmin: 'admin@ephesusgatheringsworldwide.org',
    emailInfo: 'info@ephesusgatheringsworldwide.org',
    emailWelfare: 'welfare@ephesusgatheringsworldwide.org'
  },
  social: {
    facebook: 'https://web.facebook.com/people/Ephesus-Gatherings/61558894460389/',
    instagram: 'https://www.instagram.com/ephesusgatheringsworldwide/',
    mixlr: 'https://ephesus-radio.mixlr.com/events/4361028',
    youtube: 'https://www.youtube.com/@EphesusGatheringsWorldwide',
    spotify: 'https://open.spotify.com/show/76wjFskbcoaJiCzwPTc7yG',
    whatsapp: 'https://www.whatsapp.com/channel/0029VaAKoAFDZ4LUxGNPze0t'
  },
  outreachStats: {
    schoolsReached: '6+',
    peopleReached: '5,500+',
    soulsWon: 'Thousands',
    scholarshipsAwarded: '1,250+'
  },
  giving: {
    tithes: 'https://paystack.shop/pay/ephesustithes',
    offerings: 'https://paystack.shop/pay/ephesusofferings',
    seeds: 'https://paystack.shop/pay/ephesusseeds',
    seedToProphet: 'https://paystack.shop/pay/forprophetedem',
    partnerForm: 'https://forms.gle/yZWzABAiM58dmPqH6'
  },
  schools: [
    { id: 'foundation', name: 'Foundation School', level: 'Level 1', desc: 'Establishing new believers in the foundational doctrines of Christ, righteousness, and grace.' },
    { id: 'discipleship', name: 'School of Discipleship', level: 'Level 2', desc: 'Practical spiritual growth, cruciform character, and holy living through the Spirit.' },
    { id: 'word', name: 'School of the Word', level: 'Level 3', desc: 'Deep-dive biblical hermeneutics, Christ-centred exposition, and covenant theology.' },
    { id: 'prophets', name: 'School of the Prophets', level: 'Level 4', desc: 'Discerning the voice of God, prophetic accuracy, intercession, and ministering under unction.' },
    { id: 'faith', name: 'School of Faith', level: 'Level 5', desc: 'Walking in prevailing faith, Kingdom dominion, divine healing, and moving spiritual mountains.' }
  ]
};

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  scripture?: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'overcomers',
    eyebrow: 'Ephesus Gatherings Worldwide · Welcome Home',
    title: 'Equipping God’s overcomers to fulfill divine purpose.',
    description:
      'A Christ-centred training centre dedicated to establishing believers in their faith through Spirit-filled worship, sound biblical teaching, divine healing, and practical ministry training.',
    image: '/images/prophet-edem-pulpit.jpg',
    imagePosition: 'center 25%',
    primaryCta: { label: 'Join Online Broadcast', to: '/online-service' },
    secondaryCta: { label: 'New to Ephesus? Start Here', to: '/about#welcome' },
    scripture: 'Revelation 2:7 — To him who overcomes I will give to eat from the tree of life.'
  },
  {
    id: 'sunday-worship',
    eyebrow: 'Every Sunday · 15:00 GMT · Mikaddo Plaza, Labone',
    title: 'Worship with us in person or join live globally.',
    description:
      'Experience dynamic worship, apostolic teaching from Prophet Edem Julius-Cudjoe, and fervent intercession at The Son Place in Accra or via worldwide live streaming.',
    image: '/images/prophet-edem-worship-lead.jpg',
    imagePosition: 'center 30%',
    primaryCta: { label: 'Watch Live Broadcast', to: '/online-service' },
    secondaryCta: { label: 'Service Schedule', to: '/events' },
    scripture: 'Hebrews 10:25 — Not forsaking the assembling of ourselves together.'
  },
  {
    id: 'training-schools',
    eyebrow: 'Education & Training Unit · 5 Specialized Schools',
    title: 'Grow from biblical foundations to ministerial authority.',
    description:
      'Enroll in the Foundation School, School of Discipleship, School of the Word, School of the Prophets, and School of Faith designed to raise mature overcomers in Christ.',
    image: '/images/training-discipleship-session.jpg',
    imagePosition: 'center 20%',
    primaryCta: { label: 'Explore Training Programs', to: '/about#schools' },
    secondaryCta: { label: 'Join as Member or Student', to: '/join' },
    scripture: '2 Timothy 2:15 — Study to shew thyself approved unto God, a workman that needeth not to be ashamed.'
  },
  {
    id: 'outreach-partnership',
    eyebrow: 'Outreach & Partnership · Touching Lives Globally',
    title: 'Over 5,500 people reached and thousands won for Christ.',
    description:
      'Through school outreaches, Bible donations, student scholarships, and benevolence, Ephesus Gatherings Worldwide is taking the glorious Gospel of grace to the ends of the earth.',
    image: '/images/schools-outreach-stage.jpg',
    imagePosition: 'center 28%',
    primaryCta: { label: 'Support the Mission', to: '/give' },
    secondaryCta: { label: 'Read Good Reports', to: '/testimonies' },
    scripture: 'Mark 16:15 — Go ye into all the world, and preach the gospel to every creature.'
  }
];

export const FOUNDER_INFO = {
  name: 'Prophet Edem Julius-Cudjoe',
  role: 'Visionary & Lead Convener',
  ministry: 'The Ephesus Gatherings Worldwide',
  portraitPrimary: '/images/prophet-edem-pulpit.jpg',
  portraitSquare: '/images/prophet-edem-holding-bible.jpg',
  portraitWithWife: '/images/prophet-mrs-julius-cudjoe.png',
  shortBio:
    'Prophet Edem Julius-Cudjoe is a devoted bondservant of the Lord Jesus Christ, a passionate revivalist, and a prophet with an apostolic mandate to strengthen the body of Christ by establishing the Church in Him and His finished work.',
  extendedBio:
    'As the visionary and Lead Convener of The Ephesus Gatherings Worldwide—headquartered at The Son Place, Mikaddo Plaza, Labone Junction, Accra, Ghana, with a global family of believers—his ministry is marked by deep intimacy with the Holy Spirit, Christ-centred revelation, prophetic accuracy, divine healing, and a burning heart to see believers raised as mature overcomers in every sphere of life.',
  welcomeLetter: [
    'We want you to know that you are God’s beloved, and that He has great plans and good things in store for you! He wants you blessed wherever you are and in whatever you put your hands to.',
    'You can look forward to and enjoy all the blessings of being a child of God because of what Jesus has done for you at the cross. By His one perfect sacrifice, He has paid the price for all your sins — past, present and future (Hebrews 10:10). So God will never again condemn or judge you. And today, He is totally for you and always with you.',
    'May you continue to receive fresh revelations of God’s love for you. It is our prayer that you will grow in your knowledge of Jesus and His loveliness, and find rest in His finished work for you, as you feed on His Word.'
  ],
  podcasts: {
    title: 'The Emergence Podcast & Audio Streams',
    apple: 'https://podcasts.apple.com/us/podcast/the-emergence-podcast-intimacy-fire-ministries/id1748969233',
    spotify: 'https://open.spotify.com/show/76wjFskbcoaJiCzwPTc7yG',
    mixlr: 'https://ephesus-radio.mixlr.com/events/4361028',
    youtube: 'https://www.youtube.com/@officialprophetedem',
    instagram: 'https://www.instagram.com/ephesusgatheringsworldwide/'
  }
};

export interface LeaderMember {
  id: string;
  name: string;
  role: string;
  country: string;
  flagCode: string;
  email: string;
  image: string;
  focus: string;
}

export const MINISTRY_LEADERS: LeaderMember[] = [
  {
    id: 'ebenezer-dickson',
    name: 'Ebenezer Dickson',
    role: 'Lead Coordinator',
    country: 'United Kingdom',
    flagCode: 'gb',
    email: 'admin@ephesusgatheringsworldwide.org',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/04/Lead-Convener-Ebenezer_edited-868x1024.jpg',
    focus: 'Provides overall pastoral coordination, prayer leadership, and strategic alignment with the Mother Church sanctuary.'
  },
  {
    id: 'dennis-pinkrah',
    name: 'Dennis Pinkrah',
    role: 'Assistant Lead Coordinator',
    country: 'Canada',
    flagCode: 'ca',
    email: 'admin@ephesusgatheringsworldwide.org',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/04/Assistant-Lead-Convener-Dennis_edited_edited-770x1024.jpg',
    focus: 'Supports global operations, ministry administration, and North American community growth.'
  },
  {
    id: 'legbel-ekpata',
    name: 'Legbel Ekpata',
    role: 'Welfare Coordinator',
    country: 'United States',
    flagCode: 'us',
    email: 'welfare@ephesusgatheringsworldwide.org',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/04/Welfare-Coordinator-Legbel_edited-789x1024.jpg',
    focus: 'Leads member care, pastoral follow-up, family support, and community well-being initiatives.'
  },
  {
    id: 'evelyn-ami-mensah',
    name: 'Evelyn Ami Mensah',
    role: 'Welfare Coordinator',
    country: 'United States',
    flagCode: 'us',
    email: 'welfare@ephesusgatheringsworldwide.org',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/04/Welfare-Coordinator-Evelyn-763x1024.jpeg',
    focus: 'Walks alongside newcomers, families, and members to ensure nobody journeys alone.'
  },
  {
    id: 'mary-otu-okley',
    name: 'Mary Otu Okley',
    role: 'Service Coordinator',
    country: 'United States',
    flagCode: 'us',
    email: 'service@ephesusgatheringsworldwide.org',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Mary-Otu-Okley-edited-1024x1024.jpg',
    focus: 'Coordinates weekly worship flow, liturgical excellence, and broadcast volunteer teams.'
  },
  {
    id: 'karen-danso',
    name: 'Karen Danso',
    role: 'Service Coordinator',
    country: 'United Kingdom',
    flagCode: 'gb',
    email: 'service@ephesusgatheringsworldwide.org',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Karen-Danso-1-768x1024.jpg',
    focus: 'Stewards online service hospitality, intercession schedules, and special programme execution.'
  },
  {
    id: 'mark-boateng',
    name: 'Mark Boateng',
    role: 'Education & Training Coordinator',
    country: 'Germany',
    flagCode: 'de',
    email: 'academy@ephesusgatheringsworldwide.org',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Mark-Boateng-1024x1024.jpg',
    focus: 'Oversees Foundation School, discipleship tracks, biblical study plans, and the Education & Training Unit.'
  }
];

// Backwards-compatible alias for existing imports
export const DIASPORA_LEADERS = MINISTRY_LEADERS;

export interface ArticleOfFaith {
  number: string;
  title: string;
  statement: string;
  pillar: 'Godhead & Word' | 'Redemption & Spirit' | 'Ordinances & Life' | 'Kingdom & Mission';
  scriptures: string[];
}

export const ARTICLES_OF_FAITH: ArticleOfFaith[] = [
  {
    number: '01',
    title: 'The Scriptures',
    pillar: 'Godhead & Word',
    statement:
      'We believe the Holy Bible is the inspired, infallible, and authoritative Word of God, given as the supreme and final standard of faith, life, and doctrine.',
    scriptures: ['2 Timothy 3:16–17', '2 Peter 1:20–21', 'Psalm 119:105']
  },
  {
    number: '02',
    title: 'The One True God',
    pillar: 'Godhead & Word',
    statement:
      'We believe in one God, eternally existent in three co-equal persons: the Father, the Son, and the Holy Spirit.',
    scriptures: ['Deuteronomy 6:4', 'Matthew 28:19', '2 Corinthians 13:14']
  },
  {
    number: '03',
    title: 'The Lord Jesus Christ',
    pillar: 'Godhead & Word',
    statement:
      'We believe in the virgin birth, sinless life, substitutionary atoning death, bodily resurrection, ascension to the Father’s right hand, and visible return of our Lord Jesus Christ.',
    scriptures: ['John 1:1–14', '1 Corinthians 15:3–4', 'Hebrews 1:1–3']
  },
  {
    number: '04',
    title: 'Salvation by Grace',
    pillar: 'Redemption & Spirit',
    statement:
      'We believe that salvation is received solely by grace through faith in the finished work of Jesus Christ, completely apart from human merit or law-keeping.',
    scriptures: ['Ephesians 2:8–9', 'Romans 3:24–26', 'Titus 3:5']
  },
  {
    number: '05',
    title: 'The Holy Spirit & Power',
    pillar: 'Redemption & Spirit',
    statement:
      'We believe in the baptism of the Holy Spirit with evidence of speaking in tongues, the active manifestation of spiritual gifts, and His indwelling power for victorious Christian living.',
    scriptures: ['Acts 1:8', 'Acts 2:1–4', '1 Corinthians 12:4–11']
  },
  {
    number: '06',
    title: 'Divine Healing & Health',
    pillar: 'Redemption & Spirit',
    statement:
      'We believe that deliverance from sickness is provided in the atonement of Jesus Christ and is the covenant privilege of every believer today.',
    scriptures: ['Isaiah 53:4–5', 'Matthew 8:16–17', '1 Peter 2:24']
  },
  {
    number: '07',
    title: 'The New Creation & Righteousness',
    pillar: 'Redemption & Spirit',
    statement:
      'We believe that anyone who is in Christ is a new creation, made the righteousness of God in Him, permanently justified, sanctified, and perfected forever.',
    scriptures: ['2 Corinthians 5:17 & 21', 'Romans 5:17', 'Hebrews 10:14']
  },
  {
    number: '08',
    title: 'Water Baptism & The Lord’s Supper',
    pillar: 'Ordinances & Life',
    statement:
      'We observe water baptism by immersion as an outward declaration of our union with Christ, and the Lord’s Supper as a joyful celebration of His body and blood.',
    scriptures: ['Romans 6:3–4', '1 Corinthians 11:23–26', 'Matthew 28:19']
  },
  {
    number: '09',
    title: 'The Local & Universal Church',
    pillar: 'Ordinances & Life',
    statement:
      'We believe the Church is the living body of Christ, comprised of all genuine believers, called to gather locally and virtually to worship, disciple, and advance God’s Kingdom.',
    scriptures: ['Ephesians 1:22–23', 'Hebrews 10:24–25', 'Acts 2:42–47']
  },
  {
    number: '10',
    title: 'Kingdom Dominion & Overcoming Life',
    pillar: 'Kingdom & Mission',
    statement:
      'We believe believers are called to reign in life through Christ Jesus, destroying works of darkness, discipling communities, and shining as the light of the world.',
    scriptures: ['Romans 5:17', '1 John 5:4', 'Matthew 5:14–16']
  },
  {
    number: '11',
    title: 'Biblical Stewardship',
    pillar: 'Kingdom & Mission',
    statement:
      'We believe in the grace of giving—honouring God through faithful tithes, generous offerings, and purposeful partnership to advance the Gospel and care for the vulnerable.',
    scriptures: ['Malachi 3:10', '2 Corinthians 9:6–8', 'Proverbs 3:9–10']
  },
  {
    number: '12',
    title: 'The Blessed Hope & Eternity',
    pillar: 'Kingdom & Mission',
    statement:
      'We believe in the personal, imminent return of our Lord Jesus Christ, the resurrection of the just to eternal glory, and the judgment of the lost.',
    scriptures: ['Titus 2:13', '1 Thessalonians 4:16–17', 'Revelation 21:1–4']
  }
];

export interface MinistryEvent {
  id: string;
  title: string;
  subtitle: string;
  category: 'Weekly Service' | 'Special Gathering' | 'Conference & Camp' | 'Prayer & Fasting';
  dateLabel: string;
  startIso: string;
  timeGMT: string;
  durationMinutes: number;
  location: string;
  isOnline: boolean;
  featured?: boolean;
  speaker: string;
  image: string;
  description: string;
}

export const MINISTRY_EVENTS: MinistryEvent[] = [
  {
    id: 'sunday-main-sanctuary',
    title: 'Sunday Service & Worldwide Broadcast',
    subtitle: 'Worship at The Son Place & Global Streaming',
    category: 'Weekly Service',
    dateLabel: 'Every Sunday',
    startIso: '2026-11-08T15:00:00Z',
    timeGMT: '15:00 GMT',
    durationMinutes: 150,
    location: 'The Son Place, Mikaddo Plaza, Labone & Online',
    isOnline: true,
    featured: true,
    speaker: 'Prophet Edem Julius-Cudjoe',
    image: '/images/prophet-edem-worship-lead.jpg',
    description:
      'Our flagship worship service. Gather in-person at The Son Place, Mikaddo Plaza, Labone, Accra or join the worldwide broadcast for apostolic preaching, prophetic ministry, and corporate worship.'
  },
  {
    id: 'wednesday-prayer-session',
    title: 'Wednesday Prayer Session',
    subtitle: 'Midweek Midnight Intercession & Watch',
    category: 'Prayer & Fasting',
    dateLabel: 'Every Wednesday',
    startIso: '2026-11-11T23:59:00Z',
    timeGMT: '23:59 GMT',
    durationMinutes: 120,
    location: 'Ephesus Radio Mixlr & Digital Channels',
    isOnline: true,
    speaker: 'Prophet Edem Julius-Cudjoe & EGW Prayer Team',
    image:
      'https://ephesusgatheringsworldwide.org/wp-content/uploads/2025/07/PWWC-4243-scaled-1.jpg',
    description:
      'Stand together on the watchtower at the turn of midweek to contend in prayer for families, nations, divine health, and spiritual awakening streamed live on Mixlr and digital channels.'
  },
  {
    id: 'saturday-word-session',
    title: 'Mixlr Word Session & Discipleship',
    subtitle: 'Foundation Teaching & Spiritual Equipping',
    category: 'Weekly Service',
    dateLabel: 'Every Saturday',
    startIso: '2026-11-07T18:30:00Z',
    timeGMT: '18:30 GMT',
    durationMinutes: 120,
    location: 'Ephesus Radio Mixlr Broadcast',
    isOnline: true,
    speaker: 'Prophet Edem Julius-Cudjoe & Teaching Pastors',
    image:
      'https://ephesusgatheringsworldwide.org/wp-content/uploads/2024/06/SOFC@21-162-1-1024x683.jpg',
    description:
      'Apostolic doctrine, foundation discipleship, and spiritual equipping to ground every believer firmly in Christ and His finished work.'
  },
  {
    id: 'cross-over-service',
    title: 'Cross Over Service — Time With the King of Kings',
    subtitle: 'Annual 31st December Convocation at Grace Grounds',
    category: 'Special Gathering',
    dateLabel: '31st December · 20:00 GMT',
    startIso: '2026-12-31T20:00:00Z',
    timeGMT: '20:00 GMT',
    durationMinutes: 300,
    location: 'Grace Grounds (The Son Place), Mikaddo Plaza, Labone & Online',
    isOnline: true,
    featured: true,
    speaker: 'Prophet Edem Julius-Cudjoe & Guest Ministers',
    image:
      'https://ephesusgatheringsworldwide.org/wp-content/uploads/2025/07/photo_2025-06-25_13-24-57.jpg',
    description:
      '31st December crossover service happening at the Grace Grounds (The Son Place), Mikaddo Plaza, Labone Junction, Accra and streamed to the ends of the earth.'
  },
  {
    id: 'fathers-blessing',
    title: 'The Father’s Blessing & Impartation',
    subtitle: 'The 11th Hour Generation Impartation Service',
    category: 'Special Gathering',
    dateLabel: 'Annual Prophetic Service',
    startIso: '2026-11-22T15:00:00Z',
    timeGMT: '15:00 GMT',
    durationMinutes: 180,
    location: 'The Son Place, Mikaddo Plaza, Labone, Accra',
    isOnline: true,
    speaker: 'Prophet Edem Julius-Cudjoe',
    image:
      'https://ephesusgatheringsworldwide.org/wp-content/uploads/2024/12/The-Fathers-Blessing-2024-01.jpg',
    description:
      'A powerful prophetic convocation releasing the fatherly mantle, favor, and covenant blessings upon the 11th hour generation of believers.'
  },
  {
    id: 'itf-camp-convocation',
    title: 'Ignite The Fire Camp (ITFC) — Global Convocation',
    subtitle: 'Annual Mother Church & International Gathering',
    category: 'Conference & Camp',
    dateLabel: 'Annual Camp · Registration Open',
    startIso: '2027-02-18T09:00:00Z',
    timeGMT: '09:00 GMT',
    durationMinutes: 480,
    location: 'Accra, Ghana & Live Worldwide Stream',
    isOnline: true,
    speaker: 'Prophet Edem Julius-Cudjoe & Guest Ministers',
    image:
      'https://ephesusgatheringsworldwide.org/wp-content/uploads/2025/07/PWWC-3853-scaled-1.jpg',
    description:
      'Unforgettable days of prayer, Flag Night celebration of nations, prophetic impartation, and deep spiritual renewal with the entire Ephesus family.'
  }
];

export interface MediaItem {
  id: string;
  title: string;
  speaker: string;
  category: 'Worship Song' | 'Prophetic Word' | 'Teaching Series' | 'Camp Highlight';
  duration: string;
  thumbnail: string;
  youtubeId?: string;
  videoUrl?: string;
  externalUrl?: string;
  description: string;
}

export const MEDIA_LIBRARY: MediaItem[] = [
  {
    id: 'by-my-side',
    title: 'By My Side (Live Worship)',
    speaker: 'Prophet Edem Julius-Cudjoe',
    category: 'Worship Song',
    duration: '07:42',
    thumbnail:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/05/By-My-Side-Thumbnail-1-300x169.jpg',
    youtubeId: '0m1lZvlf1mA',
    description:
      'A heartfelt live worship anthem celebrating the unfailing nearness, covenant faithfulness, and finished work of Jesus Christ.'
  },
  {
    id: 'suach-hagah',
    title: 'SUACH HAGAH 3.0 — The Word in Prayer',
    speaker: 'Prophet Edem Julius-Cudjoe',
    category: 'Teaching Series',
    duration: '1:32:15',
    thumbnail:
      'https://ephesusgatheringsworldwide.org/wp-content/uploads/2025/11/SUACH-HAGAR-3.0-300x300.jpg',
    youtubeId: '0pxcuNwbmaE',
    description:
      'Unlocking the art of meditation, deep contemplation, and releasing spiritual power through speaking the Word of God.'
  },
  {
    id: 'crisis-of-galatians',
    title: 'The Crisis of the Galatians 2.0',
    speaker: 'Prophet Edem Julius-Cudjoe',
    category: 'Teaching Series',
    duration: '1:24:40',
    thumbnail:
      'https://ephesusgatheringsworldwide.org/wp-content/uploads/2025/11/THE-CRISES-OF-THE-GALATIANS-copy.jpg',
    youtubeId: 'JJlVc8X333E',
    description:
      'A decisive apostolic defense of the true Gospel of grace against legalism, works, and human effort.'
  },
  {
    id: 'grace-for-life',
    title: 'Grace for Life — Living in His Fullness',
    speaker: 'Prophet Edem Julius-Cudjoe',
    category: 'Prophetic Word',
    duration: '1:18:24',
    thumbnail:
      'https://ephesusgatheringsworldwide.org/wp-content/uploads/2025/12/GRACE-FOR-LIFE-TV-1-300x169.jpg',
    youtubeId: 'qcwVAVxsayU',
    description:
      'Discover how the unearned favor and righteousness of Jesus Christ empowers effortless success in everyday life.'
  },
  {
    id: 'itfc-prayer-moment',
    title: 'ITFC Corporate Intercession & Praise Clip',
    speaker: 'Ephesus Gatherings Worldwide Family',
    category: 'Camp Highlight',
    duration: '01:45',
    thumbnail: '/images/sanctuary-prayer-worship.jpg',
    videoUrl:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/WhatsApp-Video-2026-10-23-at-02.03.46.mp4',
    description:
      'A glimpse into the fervency of prayer, joyful unity, and prophetic atmosphere when the Ephesus family gathers.'
  }
];

export interface Testimony {
  id: string;
  title: string;
  author: string;
  country: string;
  flagCode: string;
  year: string;
  categories: string[];
  featured?: boolean;
  summary: string;
  closingQuote: string;
  paragraphs: string[];
}

export const TESTIMONIES_DATA: Testimony[] = [
  {
    id: 'instant-deliverance-prayer',
    title: 'Instant Deliverance Through the Power of Prayer',
    author: 'Mrs. Sandra Offei Dankwah',
    country: 'Ghana',
    flagCode: 'gh',
    year: '2025',
    categories: ['Deliverance', 'Prayer', 'Healing'],
    featured: true,
    summary:
      'Debilitating physical oppression and sudden spiritual heaviness lifted instantly as Prophet Edem ministered with prophetic precision.',
    closingQuote:
      '“The chains broke the exact moment the prayer was released. I am totally free, whole, and rejoicing in Christ Jesus!”',
    paragraphs: [
      'For several months, I walked under severe physical weakness, mysterious heaviness, and unexplained medical symptoms that doctors could not diagnose.',
      'During a live gathering at Ephesus, Prophet Edem spoke a word of knowledge into our situation. When hands were laid and prayer was offered in the name of Jesus, immediate warmth surged through my body.',
      'Every symptom vanished instantly. The next medical review showed total health and vitality. Praise God for His finished work!'
    ]
  },
  {
    id: 'healing-from-severe-condition',
    title: 'Miraculous Healing from Chronic Illness',
    author: 'Brother Emmanuel K.',
    country: 'Ghana',
    flagCode: 'gh',
    year: '2025',
    categories: ['Healing', 'Divine Health'],
    featured: true,
    summary:
      'Years of chronic pain and hospital visits were cancelled when the Word of faith took root at Ephesus Gatherings.',
    closingQuote:
      '“By His stripes I am made whole. The doctors were amazed, but we gave all glory to the Lamb of God!”',
    paragraphs: [
      'I suffered from a severe chronic ailment that limited my daily activities and caused continuous medical bills.',
      'Hearing the messages of grace and the finished work of Christ re-anchored my spirit in truth. I received prayer during the Sunday service at The Son Place.',
      'The pain stopped completely that evening. Subsequent checkups confirmed that every trace of the condition was gone. God is faithful!'
    ]
  },
  {
    id: 'gods-word-came-to-pass',
    title: 'God’s Word Came to Pass in My Family',
    author: 'Sister Grace A.',
    country: 'United Kingdom',
    flagCode: 'gb',
    year: '2025',
    categories: ['Prophetic Word', 'Family', 'Breakthrough'],
    summary:
      'A prophetic promise spoken into our family during an online prayer watch materialized with precision after years of delay.',
    closingQuote:
      '“What God spoke through His prophet did not return void. He did exceedingly and abundantly above our prayers.”',
    paragraphs: [
      'Our family had faced an unresolved legal and immigration stalemate spanning almost five years with no progress.',
      'During the Wednesday midnight prayer session on Mixlr, Prophet Edem declared a season of divine speed and open gates for members waiting on official responses.',
      'Within three weeks, we received unexpected approval letters without further interview or dispute. We give glory to the God of Ephesus!'
    ]
  },
  {
    id: 'supernatural-academic-breakthrough',
    title: 'Thesis Grade Changed from Pass to Merit',
    author: 'Graduate Scholar',
    country: 'United Kingdom',
    flagCode: 'gb',
    year: '2025',
    categories: ['Academic', 'Favour', 'Career'],
    summary:
      'Unfavorable assessment reviewed and reversed into an honorable grade following earnest intercession.',
    closingQuote:
      '“Favour surrounded me as with a shield. Never give up when the finished work is on your side.”',
    paragraphs: [
      'My postgraduate dissertation was initially graded lower than required to advance into my doctoral progression.',
      'I sent a prayer request through the online pastoral desk and joined the weekly prayer watch with faith in God’s favour.',
      'The academic board independently requested a secondary external review, which resulted in an upgraded final award of Merit.'
    ]
  },
  {
    id: 'divine-provision-testimony',
    title: 'Supernatural Provision in Season of Need',
    author: 'Brother Kofi B.',
    country: 'Ghana',
    flagCode: 'gh',
    year: '2025',
    categories: ['Financial', 'Provision'],
    summary:
      'Unexpected financial supply provided tuition and living expenses right at the deadline.',
    closingQuote:
      '“God proved Himself as Jehovah Jireh. When men said there was no way, He made rivers in the desert.”',
    paragraphs: [
      'I faced a strict tuition payment deadline with zero personal savings and no bank loan facility approved.',
      'I sowed my seed in faith into the Ephesus Outreach unit and thanked God for divine supply.',
      'A benefactor I had not spoken with in years called out of the blue and wired the exact total amount required. Truly, God provides!'
    ]
  }
];

export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  category: 'Sanctuary Worship' | 'ITF Camp' | 'Outreach & Missions';
  location: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    src: '/images/prophet-edem-pulpit.jpg',
    caption: 'Prophet Edem Julius-Cudjoe ministering under an apostolic grace at The Son Place sanctuary.',
    category: 'Sanctuary Worship',
    location: 'The Son Place · Labone, Accra'
  },
  {
    id: 'gal-2',
    src: '/images/sanctuary-prayer-worship.jpg',
    caption: 'Dynamic Sunday worship, prayer and celebration at Grace Grounds in Accra.',
    category: 'Sanctuary Worship',
    location: 'Grace Grounds · Accra'
  },
  {
    id: 'gal-3',
    src: '/images/training-discipleship-session.jpg',
    caption: 'Education & Training Unit session equipping believers in the Word and apostolic discipleship.',
    category: 'Sanctuary Worship',
    location: 'Ephesus Training Centre'
  },
  {
    id: 'gal-4',
    src: '/images/prophet-edem-worship-lead.jpg',
    caption: 'Prophetic worship, song, and impartation with Prophet Edem Julius-Cudjoe.',
    category: 'Sanctuary Worship',
    location: 'The Son Place · Accra'
  },
  {
    id: 'gal-5',
    src: '/images/worship-surrender.jpg',
    caption: 'Intercessors standing on the watchtower in fervent prayer for families and nations.',
    category: 'ITF Camp',
    location: 'Ignite The Fire Convocation'
  },
  {
    id: 'gal-6',
    src: '/images/itf-camp-family.jpg',
    caption: 'Ephesus Gatherings Worldwide family united in joy and spiritual fellowship at Ignite The Fire Camp.',
    category: 'ITF Camp',
    location: 'Ignite The Fire Camp'
  },
  {
    id: 'gal-7',
    src: '/images/minister-altar-prayer.jpg',
    caption: 'Anointed altar ministry, healing, and prophetic intercession.',
    category: 'Sanctuary Worship',
    location: 'The Son Place · Accra'
  },
  {
    id: 'gal-8',
    src: '/images/schools-outreach-stage.jpg',
    caption: 'Ephesus Outreach Program ministering to thousands of senior high school students outdoors.',
    category: 'Outreach & Missions',
    location: 'Schools Outreach Mission'
  },
  {
    id: 'gal-9',
    src: '/images/schools-outreach-students.jpg',
    caption: 'Students gathered under canopy tents listening to the Word of God and receiving free Bibles.',
    category: 'Outreach & Missions',
    location: 'Senior High School Mission'
  },
  {
    id: 'gal-10',
    src: '/images/youth-fellowship-gathering.jpg',
    caption: 'Young believers and campus ambassadors walking out the Gospel with joy and brotherly love.',
    category: 'Outreach & Missions',
    location: 'Youth & Campus Fellowship'
  }
];

export interface EcosystemResource {
  id: string;
  name: string;
  category: 'Spiritual Growth' | 'Community' | 'Media' | 'Services' | 'Resources';
  status: 'Available Now' | 'Preview / Coming Soon';
  description: string;
  internalRoute?: string;
  externalUrl?: string;
  actionLabel?: string;
}

export const ECOSYSTEM_RESOURCES: EcosystemResource[] = [
  {
    id: 'res-training-unit',
    name: 'Education & Training Unit (5 Schools)',
    category: 'Spiritual Growth',
    status: 'Available Now',
    description: 'Foundation School, School of Discipleship, School of the Word, School of the Prophets, and School of Faith.',
    internalRoute: '/about#schools',
    actionLabel: 'Explore Schools'
  },
  {
    id: 'res-live-stage',
    name: 'Online Broadcast Stage',
    category: 'Services',
    status: 'Available Now',
    description: 'Interactive Sunday live stream console, Mixlr audio links, scripture display, and real-time chat gateway.',
    internalRoute: '/online-service',
    actionLabel: 'Enter Broadcast Stage'
  },
  {
    id: 'res-readings',
    name: 'Daily Bible Readings & Plan',
    category: 'Spiritual Growth',
    status: 'Available Now',
    description: 'Structured 1-Year, 10-Month, and 9-Month Bible tracks with interactive progress and Book of the Month companions.',
    internalRoute: '/daily-readings',
    actionLabel: 'Start Daily Reading'
  },
  {
    id: 'res-outreach-partner',
    name: 'Ephesus Outreach & Partnership Unit',
    category: 'Community',
    status: 'Available Now',
    description: 'Support high school outreaches, Bible distributions, family welfare, and Kingdom development across Ghana and beyond.',
    internalRoute: '/give',
    actionLabel: 'Become a Partner'
  },
  {
    id: 'res-mixlr',
    name: 'Ephesus Radio (Mixlr 24/7)',
    category: 'Media',
    status: 'Available Now',
    description: 'Live midweek prayer broadcasts, Saturday word sessions, and continuous preaching from Prophet Edem Julius-Cudjoe.',
    externalUrl: 'https://ephesus-radio.mixlr.com/events/4361028',
    actionLabel: 'Listen on Mixlr'
  },
  {
    id: 'res-podcast',
    name: 'The Emergence Podcast',
    category: 'Media',
    status: 'Available Now',
    description: 'Deep revelations of grace, righteousness, and the finished work of Jesus Christ hosted on Spotify and Apple Podcasts.',
    externalUrl: 'https://open.spotify.com/show/76wjFskbcoaJiCzwPTc7yG',
    actionLabel: 'Listen on Spotify'
  },
  {
    id: 'res-salvation',
    name: 'Salvation — Receive Jesus',
    category: 'Spiritual Growth',
    status: 'Available Now',
    description: 'A biblical presentation of the Gospel, Jesus the Only Way, and a guided prayer of salvation with immediate next steps.',
    internalRoute: '/salvation',
    actionLabel: 'Receive Jesus'
  },
  {
    id: 'res-prayer-desk',
    name: 'Confidential Pastoral Prayer Desk',
    category: 'Services',
    status: 'Available Now',
    description: 'Send prayer burdens directly to the EGW pastoral and intercessory team—held in confidence and prayed over.',
    internalRoute: '/contact?topic=prayer',
    actionLabel: 'Share Prayer Request'
  },
  {
    id: 'res-testimonies',
    name: 'Testimonies & Good Reports Wall',
    category: 'Community',
    status: 'Available Now',
    description: 'Verified reports of healings, financial provisions, and academic breakthroughs shared to glorify the Lord Jesus.',
    internalRoute: '/testimonies',
    actionLabel: 'Read Good Reports'
  },
  {
    id: 'res-volunteer',
    name: 'Volunteer in a Ministry Team',
    category: 'Community',
    status: 'Available Now',
    description: 'Serve with your gifts in Media, Worship, Hospitality, Welfare, Intercession, or Administration.',
    internalRoute: '/contact?topic=volunteer',
    actionLabel: 'Join a Team'
  },
  {
    id: 'res-worship',
    name: 'By My Side — Live Worship',
    category: 'Media',
    status: 'Available Now',
    description: 'Listen to "By My Side (Live)" and original worship expressions recorded from the Ephesus sanctuary.',
    internalRoute: '/online-service#library',
    actionLabel: 'Play Worship'
  },
  {
    id: 'res-app',
    name: 'Ephesus Mobile App',
    category: 'Resources',
    status: 'Preview / Coming Soon',
    description: 'Unified iOS & Android companion for live streams, reading streaks, notes, and Kingdom giving.',
    internalRoute: '/give',
    actionLabel: 'Get Launch Alert'
  }
];

export interface DailyReadingPlanDay {
  dayOfYear: number;
  percentOfYear: number;
  proverbsChapter: number;
  bookOfTheMonth: {
    monthName: string;
    title: string;
    author: string;
    theme: string;
  };
  passages: {
    '1-year': { id: string; reference: string; focus: string }[];
    '10-month': { id: string; reference: string; focus: string }[];
    '9-month': { id: string; reference: string; focus: string }[];
  };
}

const OT_BOOKS = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth',
  '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra',
  'Nehemiah', 'Esther', 'Job', 'Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Zechariah'
];

const NT_BOOKS = [
  'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians',
  'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', 'Hebrews', 'James', '1 Peter', 'Revelation'
];

const BOOKS_OF_THE_MONTH = [
  { title: 'Destined To Reign', author: 'Pastoral Reading Selection', theme: 'Effortless success through the abundance of grace and the gift of righteousness.' },
  { title: 'The Normal Christian Life', author: 'Watchman Nee', theme: 'Understanding our union with Christ in His death, burial, and resurrection.' },
  { title: 'Practicing His Presence', author: 'Classic Devotional Selection', theme: 'Cultivating unbroken fellowship with the Holy Spirit throughout every day.' },
  { title: 'The Power of Right Believing', author: 'Grace & Truth Selection', theme: 'Anchoring the mind in the finished work of Jesus Christ.' },
  { title: 'Why Revival Tarries', author: 'Leonard Ravenhill', theme: 'Fervent intercession, consecration, and spiritual hunger.' },
  { title: 'Sit, Walk, Stand', author: 'Watchman Nee', theme: 'Unpacking the Book of Ephesians: resting in Christ, walking in love, standing in victory.' },
  { title: 'God’s Generals', author: 'Roberts Liardon', theme: 'Learning from vessels of revival, faith, and healing across church history.' },
  { title: 'The Spirit-Filled Life', author: 'Apostolic Foundations', theme: 'Walking daily in the gifts and fruit of the Holy Spirit.' },
  { title: 'Complete in Him', author: 'Colossians Study Companion', theme: 'Discovering the fullness of the Godhead bodily in Christ Jesus.' },
  { title: 'Prevailing Prayer & Fasting', author: 'EGW Discipleship Track', theme: 'Subduing the flesh and enforcing Kingdom decrees on earth.' },
  { title: 'The Authority of the Believer', author: 'John A. MacMillan / Kenneth E. Hagin', theme: 'Seated with Christ in heavenly places far above all principalities.' },
  { title: 'Crowned with Goodness', author: 'Year-End Thanksgiving Reader', theme: 'Stewarding prophetic words and crossing into new seasons with praise.' }
];

export function getReadingsForDate(date: Date): DailyReadingPlanDay {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.max(1, Math.min(365, Math.floor(diff / oneDay)));
  const percentOfYear = Math.min(100, Math.round((dayOfYear / 365) * 100));
  const proverbsChapter = ((date.getDate() - 1) % 31) + 1;
  const psalmNumber = ((dayOfYear - 1) % 150) + 1;

  const otBook1 = OT_BOOKS[(dayOfYear - 1) % OT_BOOKS.length];
  const otChap1 = ((dayOfYear * 2) % 24) + 1;
  const ntBook1 = NT_BOOKS[(dayOfYear - 1) % NT_BOOKS.length];
  const ntChap1 = (dayOfYear % 16) + 1;

  const otBookFast = OT_BOOKS[(dayOfYear + 4) % OT_BOOKS.length];
  const ntBookFast = NT_BOOKS[(dayOfYear + 2) % NT_BOOKS.length];

  const monthIdx = date.getMonth();
  const monthName = date.toLocaleString('en-US', { month: 'long' });
  const bom = BOOKS_OF_THE_MONTH[monthIdx];

  return {
    dayOfYear,
    percentOfYear,
    proverbsChapter,
    bookOfTheMonth: {
      monthName,
      ...bom
    },
    passages: {
      '1-year': [
        { id: `1y-ot-${dayOfYear}`, reference: `${otBook1} ${otChap1}–${otChap1 + 1}`, focus: 'Old Testament Counsel & Covenant History' },
        { id: `1y-nt-${dayOfYear}`, reference: `${ntBook1} ${ntChap1}`, focus: 'New Testament Revelation in Christ' },
        { id: `1y-ps-${dayOfYear}`, reference: `Psalm ${psalmNumber}`, focus: 'Devotional Praise & Prayer' }
      ],
      '10-month': [
        { id: `10m-ot-${dayOfYear}`, reference: `${otBook1} ${otChap1}–${otChap1 + 2}`, focus: 'Accelerated Old Testament Track' },
        { id: `10m-nt-${dayOfYear}`, reference: `${ntBook1} ${ntChap1}–${ntChap1 + 1}`, focus: 'Apostolic Doctrine & Epistles' },
        { id: `10m-ps-${dayOfYear}`, reference: `Psalm ${psalmNumber}–${(psalmNumber % 150) + 1}`, focus: 'Psalms of Ascent & Worship' }
      ],
      '9-month': [
        { id: `9m-ot-${dayOfYear}`, reference: `${otBookFast} ${otChap1}–${otChap1 + 3}`, focus: 'Intensive Old Testament Immersion' },
        { id: `9m-nt-${dayOfYear}`, reference: `${ntBookFast} ${ntChap1}–${ntChap1 + 1}`, focus: 'Gospel & Kingdom Fulfilment' },
        { id: `9m-ps-${dayOfYear}`, reference: `Psalm ${psalmNumber}`, focus: 'Heart Meditation' },
        { id: `9m-pr-${dayOfYear}`, reference: `Proverbs ${proverbsChapter}`, focus: 'Daily Wisdom & Discernment' }
      ]
    }
  };
}

export const SCRIPTURE_GEMS = [
  {
    reference: 'Ephesians 1:17–19 (KJV)',
    text: 'That the God of our Lord Jesus Christ, the Father of glory, may give unto you the spirit of wisdom and revelation in the knowledge of him: The eyes of your understanding being enlightened; that ye may know what is the hope of his calling, and what the riches of the glory of his inheritance in the saints.'
  },
  {
    reference: 'Hebrews 10:10 & 14 (KJV)',
    text: 'By the which will we are sanctified through the offering of the body of Jesus Christ once for all… For by one offering he hath perfected for ever them that are sanctified.'
  },
  {
    reference: '1 John 5:4 (KJV)',
    text: 'For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.'
  },
  {
    reference: 'Romans 8:31–32 (KJV)',
    text: 'What shall we then say to these things? If God be for us, who can be against us? He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?'
  }
];
