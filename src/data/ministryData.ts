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
      online: ' Kpee yɛ Intanɛt Nɔ',
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
      give: 'Nye Onyinye',
      join: 'Sonyere Anyị',
      resources: 'Ngwaọrụ',
      contact: 'Kpọtụrụ Anyị',
      watchLive: 'onyonyo Ndụ'
    },
    heroTagline: 'Ịkwadebe Ndị Mmeri Chineke Gafe Mba Niile'
  },
  {
    code: 'yo',
    label: 'Yorùbá',
    englishName: 'Yoruba',
    welcomeGreeting: 'Ẹ káàbọ̀ sí Ìdílé Wa',
    flagCode: 'ng',
    nav: {
      home: 'Ilé',
      about: 'Nípa Wa',
      online: 'Ìsìn Ojú-òpó',
      events: 'Àwọn Ètò',
      testimonies: 'Ẹ̀rí',
      readings: 'Ìkàwé Ojoojúmọ́',
      salvation: 'Ìgbàlà',
      give: 'Ọrẹ',
      join: 'Darapọ̀ Mọ́ Wa',
      resources: 'Àwọn Ohun Èlò',
      contact: 'Kàn Sí Wa',
      watchLive: 'Wò Ó Nígbà Yìí'
    },
    heroTagline: 'Ṣíṣe Àgbékalẹ̀ Àwọn Aṣẹ́gun Ọlọ́run Kárí Ayé'
  },
  {
    code: 'sw',
    label: 'Kiswahili',
    englishName: 'Swahili',
    welcomeGreeting: 'Karibu Kwenye Familia Yetu',
    flagCode: 'tz',
    nav: {
      home: 'Nyumbani',
      about: 'Kuhusu Sisi',
      online: 'Ibada Mtandaoni',
      events: 'Matukio',
      testimonies: 'Shuhuda',
      readings: 'Masomo ya Kila Siku',
      salvation: 'Wokovu',
      give: 'Toa Sadaka',
      join: 'Jiunge Nasi',
      resources: 'Nyenzo',
      contact: 'Wasiliana',
      watchLive: 'Tazama Mubashara'
    },
    heroTagline: 'Kuwaandaa Washindi wa Mungu Katika Mataifa Yote'
  },
  {
    code: 'zh',
    label: '中文',
    englishName: 'Mandarin Chinese',
    welcomeGreeting: '欢迎来到以弗所大家庭',
    flagCode: 'cn',
    nav: {
      home: '首页',
      about: '关于我们',
      online: '线上崇拜',
      events: '聚会活动',
      testimonies: '生命见证',
      readings: '每日读经',
      salvation: '救恩之道',
      give: '奉献支持',
      join: '加入我们',
      resources: '事工资源',
      contact: '联系我们',
      watchLive: '观看直播'
    },
    heroTagline: '在万国中装备神得胜的子民'
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
    eyebrow: 'Ephesus Gatherings Worldwide · Diaspora',
    title: 'Equipping God’s overcomers to take their place for Christ.',
    description:
      'Rooted in the Lordship of Jesus, the power of the Holy Spirit, and the authority of Scripture—uniting believers across Canada, the UK, the USA, Germany, Ghana, and the nations.',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Lead-Coordinator-leading-prayers-at-ITFC-2026-2-1920x800.jpg',
    imagePosition: 'center 25%',
    primaryCta: { label: 'Join Online Service', to: '/online-service' },
    secondaryCta: { label: 'New Here? Start Here', to: '/about#welcome' },
    scripture: 'Revelation 2:7 — To him who overcomes I will give to eat from the tree of life.'
  },
  {
    id: 'sunday-worship',
    eyebrow: 'Every Sunday · 12:30 GMT Worldwide',
    title: 'One church family worshipping live across the nations.',
    description:
      'Experience Spirit-filled worship, corporate intercession, and sound biblical teaching from wherever you live—every Sunday, Wednesday, and Saturday.',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/04/Copy-of-ITF-2025-2-2-1-scaled.jpg',
    imagePosition: 'center 32%',
    primaryCta: { label: 'Watch Live Broadcast', to: '/online-service' },
    secondaryCta: { label: 'Service Schedule', to: '/events' },
    scripture: 'Hebrews 10:25 — Not forsaking the assembling of ourselves together.'
  },
  {
    id: 'night-with-the-king',
    eyebrow: 'Crossover Service · Thursday 31 December · 12:30 GMT',
    title: 'Night with the King 2026.',
    description:
      'Join Prophet Edem Julius-Cudjoe and guest minister Rev. Dr. George Wilfred-Arthur as the global Ephesus family crosses into a new year in worship and prophetic prayer.',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Christmas-Eve-Prophetic-Service-with-Prophet-Edem-Julius-Cudjoe-20241224_131825-Meeting-Recording-00.11.10.763.jpeg',
    imagePosition: 'center 20%',
    primaryCta: { label: 'View Event Details', to: '/events' },
    secondaryCta: { label: 'Send a Prayer Request', to: '/contact' },
    scripture: 'Psalm 65:11 — You crown the year with Your goodness.'
  },
  {
    id: 'global-family',
    eyebrow: 'Mother Church in Accra & Global Diaspora',
    title: 'Grounded in grace. Established in His finished work.',
    description:
      'Whether EGW becomes your primary church home as a Member or a spiritual family you walk alongside as an Affiliate, you are warmly welcome here.',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Copy-of-ITF-2025-54-1-scaled.jpg',
    imagePosition: 'center 28%',
    primaryCta: { label: 'Become Part of the Family', to: '/join' },
    secondaryCta: { label: 'Read Testimonies', to: '/testimonies' },
    scripture: 'Hebrews 10:10 — Sanctified through the offering of the body of Jesus Christ once for all.'
  }
];

export const FOUNDER_INFO = {
  name: 'Prophet Edem Julius-Cudjoe',
  role: 'Founder & Lead Convener',
  ministry: 'Ephesus Gatherings Worldwide & Intimacy Fire Ministries',
  portraitPrimary:
    'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Prophet-Edem-Julius-Cudjo-About-Page.png',
  portraitSquare:
    'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Prophet-Edem-Julius-Cudjoe-1024x1024.jpg',
  portraitWithWife:
    'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/04/Prophet-Mrs.-Julius-Cudjoe-747x1024.png',
  shortBio:
    'Prophet Edem Julius-Cudjoe is a devoted bondservant of the Lord Jesus Christ, a passionate revivalist, and a prophet with an apostolic mandate to strengthen the body of Christ by establishing the Church in Him and His finished work.',
  extendedBio:
    'As the visionary and Lead Convener of Ephesus Gatherings Worldwide—headquartered at The Son Place, Labone, Accra, with a thriving global Diaspora family—his ministry is marked by deep intimacy with the Holy Spirit, Christ-centred revelation, prophetic accuracy, and a burning heart to see believers raised as mature overcomers in every sphere of life.',
  welcomeLetter: [
    'We want you to know that you are God’s beloved, and that He has great plans and good things in store for you! He wants you blessed wherever you are and in whatever you put your hands to.',
    'You can look forward to and enjoy all the blessings of being a child of God because of what Jesus has done for you at the cross. By His one perfect sacrifice, He has paid the price for all your sins — past, present and future (Hebrews 10:10). So God will never again condemn or judge you. And today, He is totally for you and always with you.',
    'May you continue to receive fresh revelations of God’s love for you. It is our prayer that you will grow in your knowledge of Jesus and His loveliness, and find rest in His finished work for you, as you feed on His Word.'
  ],
  podcasts: {
    title: 'The Emergence Podcast',
    apple: 'https://podcasts.apple.com/us/podcast/the-emergence-podcast-intimacy-fire-ministries/id1748969233',
    spotify: 'https://open.spotify.com/show/76wjFskbcoaJiCzwPTc7yG',
    youtube: 'https://www.youtube.com/@officialprophetedem',
    instagram: 'https://www.instagram.com/officialprophetedem/'
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

export const DIASPORA_LEADERS: LeaderMember[] = [
  {
    id: 'ebenezer-dickson',
    name: 'Ebenezer Dickson',
    role: 'Lead Coordinator',
    country: 'United Kingdom',
    flagCode: 'gb',
    email: 'admin@ephesusgatheringsworldwide.com',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/04/Lead-Convener-Ebenezer_edited-868x1024.jpg',
    focus: 'Provides overall pastoral coordination, prayer leadership, and strategic alignment with the Mother Church.'
  },
  {
    id: 'dennis-pinkrah',
    name: 'Dennis Pinkrah',
    role: 'Assistant Lead Coordinator',
    country: 'Canada',
    flagCode: 'ca',
    email: 'admin@ephesusgatheringsworldwide.com',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/04/Assistant-Lead-Convener-Dennis_edited_edited-770x1024.jpg',
    focus: 'Supports global operations, diaspora administration, and North American community growth.'
  },
  {
    id: 'legbel-ekpata',
    name: 'Legbel Ekpata',
    role: 'Welfare Coordinator',
    country: 'United States',
    flagCode: 'us',
    email: 'welfare@ephesusgatheringsworldwide.com',
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
    email: 'welfare@ephesusgatheringsworldwide.com',
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
    email: 'service@ephesusgatheringsworldwide.com',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Mary-Otu-Okley-edited-1024x1024.jpg',
    focus: 'Coordinates weekly online worship flow, liturgical excellence, and volunteer service teams.'
  },
  {
    id: 'karen-danso',
    name: 'Karen Danso',
    role: 'Service Coordinator',
    country: 'United Kingdom',
    flagCode: 'gb',
    email: 'service@ephesusgatheringsworldwide.com',
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
    email: 'academy@ephesusgatheringsworldwide.com',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Mark-Boateng-1024x1024.jpg',
    focus: 'Oversees Foundation School, discipleship tracks, biblical study plans, and Ephesus Academy.'
  }
];

export interface ArticleOfFaith {
  number: string;
  title: string;
  statement: string;
  scriptures: string[];
  pillar: 'Godhead & Word' | 'Redemption & Spirit' | 'Ordinances & Life' | 'Kingdom & Mission';
}

export const ARTICLES_OF_FAITH: ArticleOfFaith[] = [
  {
    number: '01',
    title: 'The Blessed God',
    statement:
      'We believe in the existence of the Triune God, Elohim, who is the creator of all existence. Elohim, the plural of Eloha, indicates the triunity of the one true God. They are in majesty coequal and in essence coeternal: the Father, the Son and the Holy Spirit, who are one in essence, in nature and in attributes.',
    scriptures: ['Genesis 1:1–26', 'Deuteronomy 6:4', 'Matthew 28:19', '2 Corinthians 13:14'],
    pillar: 'Godhead & Word'
  },
  {
    number: '02',
    title: 'The Lordship of Jesus Christ',
    statement:
      'For all have sinned and fallen short of the glory of God. God sent His Son, in the fullness of time, to save the world from destruction. We believe in the Lordship of Jesus Christ, by which means man is saved. The Incarnation, Death, Resurrection, Ascension and Glorification of our Lord is the means by which redemption was made available for mankind.',
    scriptures: ['Romans 3:23', 'Galatians 4:4–5', 'Philippians 2:6–11', 'Acts 4:12'],
    pillar: 'Redemption & Spirit'
  },
  {
    number: '03',
    title: 'The Person and Work of the Holy Spirit',
    statement:
      'We believe that the Holy Spirit is a person, coequal and coeternal in the Godhead. He is the present Paraclete and Administrator of the Godhead on earth today. He empowers, gifts and helps the believer to live a life consistent with the lifestyle of our Lord Jesus Christ.',
    scriptures: ['John 14:16–17', 'John 16:13–14', 'Acts 1:8', '1 Corinthians 12:4–11'],
    pillar: 'Redemption & Spirit'
  },
  {
    number: '04',
    title: 'The Written Word',
    statement:
      'We believe in the canon of the Written Word of God (the Bible), which captures the Living Word of God. All Scripture is given by inspiration of God and is profitable for doctrine, reproof, correction and instruction in righteousness.',
    scriptures: ['2 Timothy 3:16–17', '2 Peter 1:20–21', 'Hebrews 4:12', 'Psalm 119:105'],
    pillar: 'Godhead & Word'
  },
  {
    number: '05',
    title: 'Doctrine of Salvation',
    statement:
      'The wages of sin is death, and the gift of God is eternal life. We believe all people have to believe in the Lord Jesus Christ to be saved. Salvation is the gift of God by grace through faith in the Lord Jesus Christ, not of works, lest anyone should boast.',
    scriptures: ['Romans 6:23', 'Ephesians 2:8–9', 'Romans 10:9–10', 'Titus 3:5'],
    pillar: 'Redemption & Spirit'
  },
  {
    number: '06',
    title: 'The Holy Communion',
    statement:
      'On the night Jesus was betrayed He gave us the Last Supper as the means by which we should remember Him. We believe that the Holy Communion should be partaken of as often as we meet as believers, to remember the ultimate sacrifice of our Lord.',
    scriptures: ['1 Corinthians 11:23–26', 'Luke 22:19–20', 'Acts 2:42'],
    pillar: 'Ordinances & Life'
  },
  {
    number: '07',
    title: 'Divine Health and Healing',
    statement:
      'The fall of man brought a fracture in the quality of life we live, characterised by weakness, sickness and death. The belief in divine healing and health is primal and a clear indication of the foretaste of the heavenly life. God uses people, and sometimes heals through medicine.',
    scriptures: ['Isaiah 53:4–5', '1 Peter 2:24', '3 John 1:2', 'Matthew 8:16–17'],
    pillar: 'Ordinances & Life'
  },
  {
    number: '08',
    title: 'Tithes and Offerings',
    statement:
      'For God so loved the world that He gave His only begotten Son. We believe in the Kingdom’s economic keys of giving, which include tithes, alms, first fruits and free-will offerings, by which God releases His blessings upon His children.',
    scriptures: ['John 3:16', 'Malachi 3:10', '2 Corinthians 9:6–8', 'Proverbs 3:9–10'],
    pillar: 'Kingdom & Mission'
  },
  {
    number: '09',
    title: 'Fasting and Prayers',
    statement:
      'The disciplines of the believer by which the flesh is subdued are fasting and prayers. We believe in the efficacy of fasting and prayers as a means of drawing closer to God, seeking His face and experiencing breakthroughs.',
    scriptures: ['Matthew 6:16–18', 'Isaiah 58:6–9', 'Luke 18:1', 'James 5:16'],
    pillar: 'Ordinances & Life'
  },
  {
    number: '10',
    title: 'Water Baptism',
    statement:
      'Our Lord Jesus Christ, when He gave the Great Commission, stated that we should baptise everyone who is made a disciple. We believe in baptism by immersion in water as an outward demonstration of an inward transformation.',
    scriptures: ['Matthew 28:19', 'Romans 6:3–4', 'Acts 8:36–38', 'Colossians 2:12'],
    pillar: 'Ordinances & Life'
  },
  {
    number: '11',
    title: 'The Coming of Our Lord and Saviour',
    statement:
      'We believe the Lord Jesus Christ is coming for a church without spot or wrinkle. The Church shall be raptured and shall reign with Christ forever. Every knee shall bow and every tongue shall confess that Jesus Christ is Lord.',
    scriptures: ['Ephesians 5:27', '1 Thessalonians 4:16–17', 'Revelation 22:12', 'Philippians 2:10–11'],
    pillar: 'Kingdom & Mission'
  },
  {
    number: '12',
    title: 'Societal Transformation and Influence',
    statement:
      'We believe in societal transformation by means of the gospel. The world is in darkness, and the light of the gospel should be the means by which societies are reformed and lives are changed for the glory of God.',
    scriptures: ['Matthew 5:13–16', 'Romans 1:16', 'Isaiah 60:1–3'],
    pillar: 'Kingdom & Mission'
  }
];

export interface MinistryEvent {
  id: string;
  title: string;
  subtitle: string;
  category: 'Special Gathering' | 'Weekly Service' | 'Conference & Camp' | 'Prayer & Fasting';
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
    id: 'night-with-the-king-2026',
    title: 'Night with the King 2026',
    subtitle: 'Global Crossover & Prophetic Service',
    category: 'Special Gathering',
    dateLabel: 'Thursday, 31 December 2026',
    startIso: '2026-12-31T12:30:00Z',
    timeGMT: '12:30 GMT',
    durationMinutes: 180,
    location: 'EGW Online Broadcast & Accra HQ',
    isOnline: true,
    featured: true,
    speaker: 'Prophet Edem Julius-Cudjoe & Rev. Dr. George Wilfred-Arthur',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Night-with-the-King-3X4-2026-878x1024.jpg',
    description:
      'Gather with the entire Ephesus family across the nations for high praise, prophetic declarations, and the Word of the Lord as we step boldly into God’s appointed season.'
  },
  {
    id: 'sunday-global-worship',
    title: 'Sunday Online Service',
    subtitle: 'Weekly Diaspora Worship & Word',
    category: 'Weekly Service',
    dateLabel: 'Every Sunday',
    startIso: '2026-11-08T12:30:00Z',
    timeGMT: '12:30 GMT',
    durationMinutes: 150,
    location: 'EGW Online Broadcast Stage',
    isOnline: true,
    speaker: 'Prophet Edem Julius-Cudjoe & Diaspora Leadership',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Sunday-Service.jpg',
    description:
      'Our flagship weekly gathering uniting members and affiliates across North America, Europe, Africa, and Asia in Spirit-filled worship, Communion, and sound teaching.'
  },
  {
    id: 'wednesday-midnight-watch',
    title: 'Wednesday Prayer Session',
    subtitle: 'Midweek Prophetic Intercession',
    category: 'Prayer & Fasting',
    dateLabel: 'Every Wednesday',
    startIso: '2026-11-11T23:59:00Z',
    timeGMT: '23:59 GMT',
    durationMinutes: 120,
    location: 'EGW Online Prayer Room',
    isOnline: true,
    speaker: 'EGW Diaspora Prayer & Leadership Team',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Prayer-Meeting-1X1-768x768.jpg',
    description:
      'Stand together on the watchtower at the turn of midweek to contend in prayer for families, nations, divine health, and spiritual awakening.'
  },
  {
    id: 'saturday-equipping-service',
    title: 'Saturday Special Service',
    subtitle: 'Discipleship, Doctrine & Overcomers’ Training',
    category: 'Weekly Service',
    dateLabel: 'Every Saturday',
    startIso: '2026-11-07T18:30:00Z',
    timeGMT: '18:30 GMT',
    durationMinutes: 120,
    location: 'EGW Online Broadcast Stage',
    isOnline: true,
    speaker: 'EGW Teaching & Training Team',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Saturday-Special-Service-1.jpg',
    description:
      'Practical ministry training, interactive Bible study, and foundational equipping designed to establish believers in Christ’s finished work.'
  },
  {
    id: 'occupying-army-series',
    title: 'The Occupying Army — Teaching Series',
    subtitle: 'Advancing Kingdom Influence in the Nations',
    category: 'Special Gathering',
    dateLabel: 'November Teaching Emphasis',
    startIso: '2026-11-15T12:30:00Z',
    timeGMT: '12:30 GMT',
    durationMinutes: 150,
    location: 'EGW Online Broadcast & YouTube',
    isOnline: true,
    speaker: 'Prophet Edem Julius-Cudjoe',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/The-Occupying-Army-1x1-2-1024x1024.jpg',
    description:
      'An apostolic teaching series unpacking what it means to occupy till Jesus comes—walking in spiritual authority, excellence, and societal transformation.'
  },
  {
    id: 'itf-camp-convocation',
    title: 'Ignite The Fire Camp (ITFC) — Global Convocation',
    subtitle: 'Annual Mother Church & Diaspora Gathering',
    category: 'Conference & Camp',
    dateLabel: 'Annual Convocation · Registration Open',
    startIso: '2027-02-18T09:00:00Z',
    timeGMT: '09:00 GMT',
    durationMinutes: 480,
    location: 'Accra, Ghana & Live Worldwide Stream',
    isOnline: true,
    speaker: 'Prophet Edem Julius-Cudjoe & Guest Ministers',
    image:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Copy-of-ITF-2025-54-1-scaled.jpg',
    description:
      'Days of unforgettable unity, Flag Night celebrations, prophetic impartation, and deep spiritual renewal as Diaspora delegates join the Mother Church.'
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
    id: 'the-occupying-army',
    title: 'The Occupying Army',
    speaker: 'Prophet Edem Julius-Cudjoe',
    category: 'Prophetic Word',
    duration: '1:18:24',
    thumbnail:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/The-Occupying-Army-1x1-2-1024x1024.jpg',
    youtubeId: 'bwp71Pzmijg',
    description:
      'Equipping believers to stand as Christ’s ambassadors and overcomers in every nation, profession, and calling.'
  },
  {
    id: 'overcomers-iv',
    title: 'The Overcomers IV — Walking in Victory',
    speaker: 'Prophet Edem Julius-Cudjoe',
    category: 'Teaching Series',
    duration: '1:05:10',
    thumbnail:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/The-Overcomers-IV-768x768.jpg',
    externalUrl: 'https://www.youtube.com/@EGW_Diaspora',
    description:
      'Foundational revelation on resting in Christ’s righteousness and overcoming every adversary by the blood of the Lamb.'
  },
  {
    id: 'itfc-prayer-moment',
    title: 'ITFC 2026 Corporate Intercession & Fellowship Clip',
    speaker: 'EGW Diaspora & Mother Church Family',
    category: 'Camp Highlight',
    duration: '01:45',
    thumbnail:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Lead-Coordinator-leading-prayers-at-ITFC-2026-2-1920x800.jpg',
    videoUrl:
      'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/WhatsApp-Video-2026-10-23-at-02.03.46.mp4',
    description:
      'A glimpse into the fervency of prayer and joyful unity when the Ephesus family gathers together.'
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
    year: '2026',
    categories: ['Healing', 'Strength from the Lord', 'Wondrous Work'],
    featured: true,
    summary:
      'After waking up with severe pain and numbness in both arms and palms that left her unable to move in bed, Mrs. Sandra Offei Dankwah experienced immediate, total relief following prayer and a prophetic voice note at 1:00 a.m.',
    closingQuote:
      'He has truly blessed me through the gift of Prophet Edem Julius-Cudjoe. Thank You, Jesus! Thank You, My Pastor!',
    paragraphs: [
      'I am deeply grateful for the opportunity to share this testimony and to give glory to God for His unfailing love and goodness toward me. I also thank God for the blessing that Prophet Edem Julius-Cudjoe and his ministry continue to be in my life.',
      'On Sunday, August 30, 2026, I woke up with severe numbness and intense pain in both my arms and palms, especially in my right arm. The pain was unlike anything I had ever experienced. I could hardly move or turn in bed because of the discomfort.',
      'I began declaring the Word of God concerning my health, while my husband stood in faith with me, praying and declaring God’s promises over my life. He also gave me Communion. However, the pain persisted.',
      'Remembering Pastor’s instruction that we should seek help when symptoms remain after applying the principles we have been taught, I asked my husband to reach out to him around 1:00 a.m.',
      'Within moments, I began to feel relief in my arm. Prophet Edem responded with a short voice note, commanding the pain to leave and declaring that it had been absorbed by the Cross, then asked me to do what I had previously been unable to do.',
      'To the glory of God, I immediately lifted my right hand, turned from side to side without pain, got out of bed, and walked freely. What made it even more remarkable was learning he happened to be online at that exact moment and went offline right afterward—positioned by the Lord for that very hour.'
    ]
  },
  {
    id: 'gods-word-military-enlistment',
    title: 'God’s Word Came to Pass',
    author: 'EGW Diaspora Member',
    country: 'United States',
    flagCode: 'us',
    year: '2026',
    categories: ['Breakthrough', 'Wondrous Work'],
    featured: true,
    summary:
      'A 2021 end-of-month prophetic word about military enlistment and holding a rifle came to pass to the exact detail—overcoming an initial medical file error and bringing unshakeable peace.',
    closingQuote:
      'What He says, He brings to pass, and the peace that comes from walking in His will is unlike anything else. To God be all the glory.',
    paragraphs: [
      'On June 30, 2021, during one of our end-of-month prayers, Prophet Edem Julius-Cudjoe gave me a prophetic word. He said he saw an enlistment in the military and saw me holding a rifle.',
      'At the time, I wasn’t particularly excited about the prophecy because I had just come out of a Navy program. I simply noted it and moved on without giving it much thought.',
      'In 2023, as I began seeking God about what to do after college, the military kept coming up. The more I prayed, the more I felt led in that direction, and I made the decision to enlist in 2025.',
      'The process was far from straightforward—I was initially rejected because of an error a doctor had made on my medical file. By God’s grace, I was given the opportunity to correct and resubmit the file, and I was officially accepted.',
      'During training, photographers came to take pictures for our families. Out of all the possible photos, the only picture taken of me was one showing me shooting a rifle. The moment I saw it, I remembered the prophetic word spoken years earlier.',
      'Today, I thank God not only for the opportunity to serve, but for the reminder that His Word never fails.'
    ]
  },
  {
    id: 'after-4-years-11-months',
    title: 'After 4 Years and 11 Months, God Did It',
    author: 'EGW Family Member',
    country: 'Canada',
    flagCode: 'ca',
    year: '2026',
    categories: ['Divine Provision', 'Speedy Breakthrough'],
    featured: true,
    summary:
      'Nearly five years of waiting for permanent settlement and documentation ended in sudden divine turnaround after corporate intercession and prophetic counsel.',
    closingQuote:
      'I thank God for His faithfulness, and I sincerely appreciate Prophet Edem Julius-Cudjoe for his prayers, prophetic guidance, and unwavering support. Hallelujah!',
    paragraphs: [
      'For four years and eleven months, our family walked through a season of prolonged waiting concerning critical settlement documents. Every human timeline seemed stretched to its limit.',
      'Through weekly Sunday online services and midnight prayer watches with the EGW family, our faith remained anchored in God’s unchanging promises rather than the delays before us.',
      'Following a season of focused prayer and prophetic agreement, the long-awaited approval arrived suddenly and completely—turning years of waiting into a testimony of unmistakable grace.'
    ]
  },
  {
    id: 'thesis-pass-to-merit',
    title: 'Thesis Grade Changed from Pass to Merit',
    author: 'Graduate Scholar · EGW Diaspora',
    country: 'United Kingdom',
    flagCode: 'gb',
    year: '2026',
    categories: ['Favour & Excellence'],
    summary:
      'An academic dissertation initially graded at a standard Pass was reviewed and elevated to Merit through uncommon favour.',
    closingQuote:
      'I want to thank Abba for His continual favor and for helping me excel in what I do.',
    paragraphs: [
      'After months of intense postgraduate research, my initial thesis feedback came back graded as a Pass, falling short of the Merit classification I had prayed and worked diligently toward.',
      'Standing on our confession as overcomers called to excellence, we committed the final board review into the Lord’s hands.',
      'When the official senate transcript was released, my thesis grade had been formally upgraded to Merit—opening doors for my next career milestone!'
    ]
  },
  {
    id: 'car-perfect-timing',
    title: 'Car Received in God’s Perfect Timing',
    author: 'EGW Diaspora Sister',
    country: 'Canada',
    flagCode: 'ca',
    year: '2026',
    categories: ['Divine Provision'],
    summary:
      'Navigating harsh winter commutes became effortless when God orchestrated the provision of a reliable vehicle debt-stress free.',
    closingQuote: 'Truly, He knows how to arrange things perfectly. All glory to God!',
    paragraphs: [
      'Living in the diaspora without personal transportation made work shifts and winter errands deeply challenging.',
      'During one of our prayer sessions, we thanked God ahead of time for practical provision. Within weeks, an unexpected door opened to receive a well-maintained vehicle on terms far beyond what I had budgeted.',
      'Truly, God arranges every detail in His perfect timing.'
    ]
  },
  {
    id: 'separation-to-restoration',
    title: 'From Separation to Restoration',
    author: 'Restored Couple · EGW Family',
    country: 'United States',
    flagCode: 'us',
    year: '2024',
    categories: ['Family Restoration'],
    summary:
      'A marriage standing on the brink of permanent separation experienced deep healing, forgiveness, and complete restoration through Christ.',
    closingQuote: 'Where human effort ran out, the grace of Jesus rebuilt our home stronger than before.',
    paragraphs: [
      'Misunderstandings and prolonged strain had pushed our home into separation, and reconciliation looked impossible from every natural angle.',
      'Through consistent pastoral counsel, feeding on the message of Christ’s grace, and earnest prayer, softened hearts replaced years of hurt.',
      'Today our home is united in peace, joy, and shared devotion to the Lord.'
    ]
  },
  {
    id: 'mothers-business-increase',
    title: 'Healing, Increase, and New Doors for My Mother’s Business',
    author: 'EGW Member',
    country: 'Kenya',
    flagCode: 'ke',
    year: '2026',
    categories: ['Business Breakthrough', 'Healing'],
    summary:
      'Physical strength returned alongside major new supply contracts that revived a family enterprise.',
    closingQuote: 'God healed her body and multiplied the work of her hands in the same season!',
    paragraphs: [
      'We prayed simultaneously for my mother’s health and for her business, which had slowed dramatically.',
      'Not only did the Lord restore her vitality completely, He brought high-value clients she had never even pitched to, multiplying her monthly revenue.'
    ]
  },
  {
    id: 'what-took-years-days',
    title: 'What Took Years, God Did in Days',
    author: 'EGW Member',
    country: 'Ghana',
    flagCode: 'gh',
    year: '2026',
    categories: ['Speedy Breakthrough', 'Divine Provision'],
    summary:
      'An institutional bottleneck that routinely stalls applicants for years cleared in a matter of days after prayer.',
    closingQuote: 'When the hand of the Lord rests upon a matter, protocols align with speed.',
    paragraphs: [
      'Colleagues warned me that the approval queue routinely took two to three years to clear.',
      'After lifting the request during Wednesday Midnight Prayer, every desk signed off consecutively within days—leaving even the officers amazed.'
    ]
  }
];

export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  category: 'ITF Camp' | 'Worship & Prayer' | 'Diaspora Family';
  location: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    src: 'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/04/Copy-of-ITF-2025-2-2-1-scaled.jpg',
    caption: 'EGW Family gathered with Founder Prophet Edem Julius-Cudjoe and his wife at Ignite The Fire Camp.',
    category: 'ITF Camp',
    location: 'Accra & Global Delegates'
  },
  {
    id: 'gal-2',
    src: 'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Lead-Coordinator-leading-prayers-at-ITFC-2026-2-1920x800.jpg',
    caption: 'Lead Coordinator Ebenezer Dickson leading fervent corporate intercession during ITFC 2026.',
    category: 'Worship & Prayer',
    location: 'ITFC 2026 Convocation'
  },
  {
    id: 'gal-3',
    src: 'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Copy-of-ITF-2025-54-1-scaled.jpg',
    caption: 'Diaspora Family representatives standing united in faith and joyful fellowship.',
    category: 'Diaspora Family',
    location: 'Global Convocation'
  },
  {
    id: 'gal-4',
    src: 'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Diaspora-photos-ITF-Camp-2026-2-scaled.jpg',
    caption: 'Flag Night celebration honouring the nations represented across the Ephesus family.',
    category: 'Diaspora Family',
    location: 'ITF Camp 2026'
  },
  {
    id: 'gal-5',
    src: 'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Diaspora-photos-ITF-Camp-2026-4-scaled.jpg',
    caption: 'Moments of radiant joy, brotherhood, and spiritual renewal among camp delegates.',
    category: 'ITF Camp',
    location: 'ITF Camp 2026'
  },
  {
    id: 'gal-6',
    src: 'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Diaspora-photos-ITF-Camp-2026-5-scaled.jpg',
    caption: 'Generations worshipping side by side as one Christ-centred household.',
    category: 'Worship & Prayer',
    location: 'ITF Camp 2026'
  },
  {
    id: 'gal-7',
    src: 'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Copy-of-ITF-2025-20-1-scaled.jpg',
    caption: 'Deep worship and prophetic ministry in the sanctuary.',
    category: 'Worship & Prayer',
    location: 'The Son Place · Accra'
  },
  {
    id: 'gal-8',
    src: 'https://ephesusgatheringsworldwide.com/wp-content/uploads/2026/10/Diaspora-photo.jpg',
    caption: 'Connected across continents—one Lord, one faith, one mission.',
    category: 'Diaspora Family',
    location: 'Worldwide Fellowship'
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
  actionLabel: string;
}

export const ECOSYSTEM_RESOURCES: EcosystemResource[] = [
  {
    id: 'res-online-service',
    name: 'Online Service Stage',
    category: 'Services',
    status: 'Available Now',
    description: 'Join live Sunday, Wednesday, and Saturday broadcasts with interactive notes, prayer, and timezone sync.',
    internalRoute: '/online-service',
    actionLabel: 'Enter Broadcast Stage'
  },
  {
    id: 'res-daily-readings',
    name: 'Daily Readings & Streak',
    category: 'Spiritual Growth',
    status: 'Available Now',
    description: 'Follow the 1-year, 10-month, or 9-month Bible plan alongside the daily Proverbs wisdom challenge.',
    internalRoute: '/daily-readings',
    actionLabel: 'Open Today’s Plan'
  },
  {
    id: 'res-broadcast',
    name: 'Ephesus Broadcast & Podcast',
    category: 'Media',
    status: 'Available Now',
    description: 'Stream sermons, prophetic teachings, and The Emergence Podcast on YouTube, Apple Podcasts, and Spotify.',
    internalRoute: '/online-service#library',
    actionLabel: 'Watch & Listen'
  },
  {
    id: 'res-prayer',
    name: 'Confidential Prayer Desk',
    category: 'Spiritual Growth',
    status: 'Available Now',
    description: 'Send prayer burdens directly to the EGW pastoral and intercessory team—held in confidence and prayed over.',
    internalRoute: '/contact?topic=prayer',
    actionLabel: 'Share Prayer Request'
  },
  {
    id: 'res-calendar',
    name: 'Global Events & Calendar',
    category: 'Community',
    status: 'Available Now',
    description: 'Explore conferences, crossover services, fasting seasons, and one-click .ics calendar reminders.',
    internalRoute: '/events',
    actionLabel: 'Browse Calendar'
  },
  {
    id: 'res-whatsapp',
    name: 'WhatsApp Global Channel',
    category: 'Community',
    status: 'Available Now',
    description: 'Receive instant prophetic alerts, service links, and announcements on the official EGW WhatsApp Channel.',
    externalUrl: 'https://www.whatsapp.com/channel/0029VaAKoAFDZ4LUxGNPze0t',
    actionLabel: 'Join WhatsApp Channel'
  },
  {
    id: 'res-volunteer',
    name: 'Volunteer & Ministry Teams',
    category: 'Community',
    status: 'Available Now',
    description: 'Serve with your gifts in Media, Worship, Hospitality, Welfare, Intercession, or Administration.',
    internalRoute: '/contact?topic=volunteer',
    actionLabel: 'Join a Team'
  },
  {
    id: 'res-testimonies',
    name: 'Testimony Archive',
    category: 'Community',
    status: 'Available Now',
    description: 'Read verified accounts of healing, restoration, and divine provision across four continents.',
    internalRoute: '/testimonies',
    actionLabel: 'Read Stories'
  },
  {
    id: 'res-salvation',
    name: 'New Believer & Foundation Path',
    category: 'Spiritual Growth',
    status: 'Available Now',
    description: 'Guided salvation prayer, personal pastoral follow-up, and onboarding into Foundation School.',
    internalRoute: '/salvation',
    actionLabel: 'Begin Journey'
  },
  {
    id: 'res-worship-songs',
    name: 'EGW Worship & Original Music',
    category: 'Media',
    status: 'Available Now',
    description: 'Listen to "By My Side (Live)" and original worship expressions recorded from the Ephesus sanctuary.',
    internalRoute: '/online-service#library',
    actionLabel: 'Play Worship'
  },
  {
    id: 'res-academy',
    name: 'Ephesus Academy',
    category: 'Spiritual Growth',
    status: 'Preview / Coming Soon',
    description: 'Structured theological and practical ministry courses led by our Education & Training department.',
    internalRoute: '/contact?topic=academy',
    actionLabel: 'Request Early Access'
  },
  {
    id: 'res-devotion',
    name: 'Ephesus Daily Devotional',
    category: 'Spiritual Growth',
    status: 'Preview / Coming Soon',
    description: 'Written morning meditations unpacking grace, righteousness, and victorious Christian living.',
    internalRoute: '/daily-readings',
    actionLabel: 'Use Daily Readings'
  },
  {
    id: 'res-radio',
    name: 'Ephesus 24/7 Internet Radio',
    category: 'Media',
    status: 'Preview / Coming Soon',
    description: 'Continuous worship, scripture reading, and rebroadcasts of classic EGW teachings around the clock.',
    internalRoute: '/online-service',
    actionLabel: 'Visit Broadcast Stage'
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
