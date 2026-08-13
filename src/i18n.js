/* ==================================================================
   KSM — i18n dictionary (EN · AR · TR · RU)
   Arabic is RTL. Every user-facing string keyed here.
   ================================================================== */

export const LANGS = {
  en: { label: "EN", name: "English", dir: "ltr" },
  ar: { label: "عربي", name: "العربية", dir: "rtl" },
  tr: { label: "TR", name: "Türkçe", dir: "ltr" },
  ru: { label: "RU", name: "Русский", dir: "ltr" },
};

export const T = {
  /* ---------- shared / nav / cta ---------- */
  brandTag: {
    en: "Document Clearing · Dubai",
    ar: "تخليص المستندات · دبي",
    tr: "Belge İşlemleri · Dubai",
    ru: "Оформление документов · Дубай",
  },
  navFreeConsult: {
    en: "Free Consultation",
    ar: "استشارة مجانية",
    tr: "Ücretsiz Danışmanlık",
    ru: "Бесплатная консультация",
  },
  ctaDefault: {
    en: "Ready to start? Your first consultation is free — and your quote is fixed in writing.",
    ar: "جاهز للبدء؟ استشارتك الأولى مجانية — وعرض السعر مثبّت كتابيًا.",
    tr: "Başlamaya hazır mısınız? İlk danışmanlığınız ücretsiz — ve teklifiniz yazılı olarak sabittir.",
    ru: "Готовы начать? Первая консультация бесплатна — а стоимость фиксируется письменно.",
  },
  ctaBook: {
    en: "Book Free Consultation",
    ar: "احجز استشارة مجانية",
    tr: "Ücretsiz Danışmanlık Al",
    ru: "Записаться на консультацию",
  },
  chatKSM: {
    en: "💬 Chat with KSM",
    ar: "💬 تواصل مع KSM",
    tr: "💬 KSM ile Sohbet",
    ru: "💬 Написать в KSM",
  },

  /* ---------- page labels (nav) ---------- */
  nav_home: { en: "Home", ar: "الرئيسية", tr: "Ana Sayfa", ru: "Главная" },
  nav_setup: { en: "Business Setup", ar: "تأسيس الشركات", tr: "Şirket Kurulumu", ru: "Регистрация бизнеса" },
  nav_freelance: { en: "Freelance Visa", ar: "تأشيرة العمل الحر", tr: "Serbest Meslek Vizesi", ru: "Виза фрилансера" },
  nav_visas: { en: "Visa Services", ar: "خدمات التأشيرات", tr: "Vize Hizmetleri", ru: "Визовые услуги" },
  nav_clearing: { en: "Document Clearing & PRO", ar: "تخليص المستندات و PRO", tr: "Belge İşlemleri & PRO", ru: "Оформление документов и PRO" },
  nav_pricing: { en: "Pricing", ar: "الأسعار", tr: "Fiyatlandırma", ru: "Цены" },
  nav_about: { en: "About", ar: "من نحن", tr: "Hakkımızda", ru: "О нас" },
  nav_contact: { en: "Contact", ar: "اتصل بنا", tr: "İletişim", ru: "Контакты" },

  /* ---------- home ---------- */
  home_eyebrow: {
    en: "Business Setup · Freelance Visas · Document Clearing — Dubai, UAE",
    ar: "تأسيس الشركات · تأشيرات العمل الحر · تخليص المستندات — دبي، الإمارات",
    tr: "Şirket Kurulumu · Serbest Meslek Vizeleri · Belge İşlemleri — Dubai, BAE",
    ru: "Регистрация бизнеса · Визы фрилансера · Оформление документов — Дубай, ОАЭ",
  },
  home_h1a: { en: "Your company in Dubai,", ar: "شركتك في دبي،", tr: "Dubai'deki şirketiniz,", ru: "Ваша компания в Дубае —" },
  home_h1b: {
    en: "cleared. licensed. launched.",
    ar: "مُخلّصة. مُرخّصة. مُنطلقة.",
    tr: "işlendi. lisanslandı. başlatıldı.",
    ru: "оформлена. лицензирована. запущена.",
  },
  home_sub: {
    en: "KSM sets up mainland, free zone and offshore companies, arranges freelance and golden visas, and clears every government document in between — so you start trading in days, not months.",
    ar: "تؤسّس KSM شركات في البر الرئيسي والمناطق الحرة والأوفشور، وترتّب تأشيرات العمل الحر والذهبية، وتخلّص كل مستند حكومي بينهما — لتبدأ العمل خلال أيام، لا أشهر.",
    tr: "KSM anakara, serbest bölge ve offshore şirketleri kurar, serbest meslek ve altın vizeleri düzenler ve aradaki tüm resmi belgeleri işler — böylece aylarca değil, günler içinde faaliyete geçersiniz.",
    ru: "KSM регистрирует компании на материке, в свободных зонах и офшоре, оформляет визы фрилансера и золотые визы и готовит все государственные документы — чтобы вы начали работу за дни, а не месяцы.",
  },
  home_ctaStart: { en: "Start Your Setup", ar: "ابدأ التأسيس", tr: "Kuruluma Başlayın", ru: "Начать регистрацию" },
  home_ctaPricing: { en: "See Pricing & Estimator", ar: "الأسعار والحاسبة", tr: "Fiyat ve Hesaplayıcı", ru: "Цены и калькулятор" },
  home_stat1: { en: "fastest license issuance", ar: "أسرع إصدار للرخصة", tr: "en hızlı lisans", ru: "быстрая выдача лицензии" },
  home_stat2: { en: "foreign ownership", ar: "ملكية أجنبية", tr: "yabancı sahiplik", ru: "иностранное владение" },
  home_stat3: { en: "free zones covered", ar: "منطقة حرة مغطاة", tr: "serbest bölge", ru: "свободных зон" },
  home_stat4: { en: "personal income tax", ar: "ضريبة دخل شخصي", tr: "kişisel gelir vergisi", ru: "налог на доход" },
  home_pillarsEye: { en: "Where do you want to go?", ar: "إلى أين تريد أن تذهب؟", tr: "Nereye gitmek istiyorsunuz?", ru: "Куда вы хотите попасть?" },
  home_pillarsTitleA: { en: "Three doors into", ar: "ثلاثة أبواب إلى", tr: "Dubai'ye açılan", ru: "Три пути в" },
  home_pillarsTitleB: { en: "Dubai", ar: "دبي", tr: "üç kapı", ru: "Дубай" },
  home_pillar1_t: { en: "Set up a company", ar: "أسّس شركة", tr: "Şirket kurun", ru: "Открыть компанию" },
  home_pillar1_d: {
    en: "Mainland, free zone or offshore — matched to your activity, market and budget, licensed in days.",
    ar: "بر رئيسي أو منطقة حرة أو أوفشور — مطابقة لنشاطك وسوقك وميزانيتك، مرخّصة خلال أيام.",
    tr: "Anakara, serbest bölge veya offshore — faaliyetinize, pazarınıza ve bütçenize uygun, günler içinde lisanslı.",
    ru: "Материк, свободная зона или офшор — под вашу деятельность, рынок и бюджет, лицензия за несколько дней.",
  },
  home_pillar1_cta: { en: "Explore Business Setup", ar: "استكشف تأسيس الشركات", tr: "Şirket Kurulumunu Keşfet", ru: "Подробнее о регистрации" },
  home_pillar2_t: { en: "Work for yourself", ar: "اعمل لحسابك", tr: "Kendi işinizi yapın", ru: "Работайте на себя" },
  home_pillar2_d: {
    en: "A freelance permit with a 2-year residence visa. The lowest-cost legal route to living and working in Dubai.",
    ar: "تصريح عمل حر مع تأشيرة إقامة لعامين. أقل طريق قانوني تكلفة للعيش والعمل في دبي.",
    tr: "2 yıllık oturma vizesi ile serbest meslek izni. Dubai'de yaşamak ve çalışmak için en düşük maliyetli yasal yol.",
    ru: "Разрешение фрилансера с резидентской визой на 2 года. Самый дешёвый легальный способ жить и работать в Дубае.",
  },
  home_pillar2_cta: { en: "Explore Freelance Visa", ar: "استكشف تأشيرة العمل الحر", tr: "Serbest Meslek Vizesini Keşfet", ru: "Подробнее о визе фрилансера" },
  home_pillar3_t: { en: "Clear the paperwork", ar: "خلّص الأوراق", tr: "Evrak işlerini halledin", ru: "Оформить документы" },
  home_pillar3_d: {
    en: "Attestation, translation, PRO retainers, renewals — the government work handled while you run the business.",
    ar: "التصديق والترجمة وعقود PRO والتجديدات — الأعمال الحكومية تُنجز بينما تدير عملك.",
    tr: "Tasdik, çeviri, PRO anlaşmaları, yenilemeler — siz işinizi yönetirken resmi işler halledilir.",
    ru: "Заверение, перевод, PRO-обслуживание, продления — государственные дела, пока вы ведёте бизнес.",
  },
  home_pillar3_cta: { en: "Explore Document Clearing", ar: "استكشف تخليص المستندات", tr: "Belge İşlemlerini Keşfet", ru: "Подробнее об оформлении" },
  home_processEye: { en: "The KSM process", ar: "عملية KSM", tr: "KSM süreci", ru: "Процесс KSM" },
  home_processTitleA: { en: "Five steps.", ar: "خمس خطوات.", tr: "Beş adım.", ru: "Пять шагов." },
  home_processTitleB: { en: "One point of contact.", ar: "نقطة تواصل واحدة.", tr: "Tek iletişim noktası.", ru: "Один контакт." },
  home_testiEye: { en: "Client words", ar: "كلمات العملاء", tr: "Müşteri sözleri", ru: "Отзывы клиентов" },
  home_testiTitleA: { en: "Trusted with the", ar: "موثوقون بالجزء", tr: "İşin zor kısmına", ru: "Нам доверяют" },
  home_testiTitleB: { en: "slow part", ar: "الأبطأ", tr: "güvenildi", ru: "сложное" },
  home_faqEye: { en: "Questions, answered", ar: "أسئلة وأجوبة", tr: "Sorular, yanıtlandı", ru: "Вопросы и ответы" },
  home_faqTitleA: { en: "Before you", ar: "قبل أن", tr: "Sormadan", ru: "Прежде чем" },
  home_faqTitleB: { en: "ask", ar: "تسأل", tr: "önce", ru: "спросить" },
  home_faqCta: { en: "Ask Us Anything", ar: "اسألنا أي شيء", tr: "Bize Her Şeyi Sorun", ru: "Задайте любой вопрос" },

  /* ---------- generic section words ---------- */
  packagesFrom: { en: "Packages from", ar: "الباقات من", tr: "Paketler", ru: "Пакеты от" },
  bestFor: { en: "Best for:", ar: "الأفضل لـ:", tr: "En uygun:", ru: "Подходит для:" },
  getQuote: { en: "Get a Fixed Quote", ar: "احصل على عرض سعر ثابت", tr: "Sabit Teklif Alın", ru: "Получить фиксированную цену" },
  openEstimator: { en: "Open Cost Estimator", ar: "افتح حاسبة التكلفة", tr: "Maliyet Hesaplayıcıyı Aç", ru: "Открыть калькулятор" },
  requestQuote: { en: "Request Exact Quote", ar: "اطلب عرض سعر دقيق", tr: "Kesin Teklif İste", ru: "Запросить точную цену" },
  enquire: { en: "Enquire", ar: "استفسر", tr: "Sorgula", ru: "Узнать" },
  mostPopular: { en: "Most Popular", ar: "الأكثر طلبًا", tr: "En Popüler", ru: "Популярное" },

  /* ---------- contact ---------- */
  contact_eyebrow: { en: "Free Consultation", ar: "استشارة مجانية", tr: "Ücretsiz Danışmanlık", ru: "Бесплатная консультация" },
  contact_titleA: { en: "Tell us what", ar: "أخبرنا بما", tr: "Ne kurduğunuzu", ru: "Расскажите, что" },
  contact_titleB: { en: "you're building.", ar: "تبنيه.", tr: "bize anlatın.", ru: "вы создаёте." },
  contact_sub: {
    en: "Thirty minutes, no obligation. You'll leave with the right jurisdiction, a realistic timeline, and a fixed quote in writing.",
    ar: "ثلاثون دقيقة، دون التزام. ستخرج بالاختصاص المناسب، وجدول زمني واقعي، وعرض سعر ثابت كتابيًا.",
    tr: "Otuz dakika, yükümlülük yok. Doğru yargı bölgesi, gerçekçi bir zaman çizelgesi ve yazılı sabit teklifle ayrılırsınız.",
    ru: "Тридцать минут, без обязательств. Вы получите подходящую юрисдикцию, реальные сроки и фиксированную цену письменно.",
  },
  contact_office: { en: "Office", ar: "المكتب", tr: "Ofis", ru: "Офис" },
  contact_officeVal: { en: "Dubai, United Arab Emirates", ar: "دبي، الإمارات العربية المتحدة", tr: "Dubai, Birleşik Arap Emirlikleri", ru: "Дубай, ОАЭ" },
  contact_phone: { en: "Phone / WhatsApp", ar: "الهاتف / واتساب", tr: "Telefon / WhatsApp", ru: "Телефон / WhatsApp" },
  contact_email: { en: "Email", ar: "البريد الإلكتروني", tr: "E-posta", ru: "Эл. почта" },
  contact_hours: { en: "Hours", ar: "ساعات العمل", tr: "Çalışma Saatleri", ru: "Часы работы" },
  contact_hoursVal: { en: "Monday–Saturday, 9:00–18:00 GST", ar: "الإثنين–السبت، 9:00–18:00 بتوقيت الخليج", tr: "Pazartesi–Cumartesi, 9:00–18:00 GST", ru: "Понедельник–суббота, 9:00–18:00 GST" },
  contact_waNote: {
    en: "Prefer WhatsApp? Most of our clients run their entire setup over chat — quotes, document photos, status updates. Send us a message and it starts there.",
    ar: "تفضّل واتساب؟ معظم عملائنا يديرون تأسيسهم بالكامل عبر المحادثة — عروض الأسعار وصور المستندات وتحديثات الحالة. أرسل لنا رسالة ويبدأ الأمر من هناك.",
    tr: "WhatsApp mı tercih edersiniz? Müşterilerimizin çoğu tüm kurulumu sohbet üzerinden yürütür — teklifler, belge fotoğrafları, durum güncellemeleri. Bize bir mesaj gönderin, oradan başlasın.",
    ru: "Предпочитаете WhatsApp? Большинство наших клиентов ведут весь процесс в чате — цены, фото документов, статусы. Напишите нам — и всё начнётся прямо там.",
  },
  contact_sentTitle: { en: "Request received", ar: "تم استلام الطلب", tr: "Talep alındı", ru: "Заявка получена" },
  contact_sentBody: {
    en: "A KSM consultant will contact you within one working day.",
    ar: "سيتواصل معك مستشار KSM خلال يوم عمل واحد.",
    tr: "Bir KSM danışmanı bir iş günü içinde sizinle iletişime geçecektir.",
    ru: "Консультант KSM свяжется с вами в течение одного рабочего дня.",
  },
  contact_fullName: { en: "Full name *", ar: "الاسم الكامل *", tr: "Ad Soyad *", ru: "Полное имя *" },
  contact_fullNamePh: { en: "Your name", ar: "اسمك", tr: "Adınız", ru: "Ваше имя" },
  contact_phoneReq: { en: "Phone / WhatsApp *", ar: "الهاتف / واتساب *", tr: "Telefon / WhatsApp *", ru: "Телефон / WhatsApp *" },
  contact_emailOpt: { en: "Email", ar: "البريد الإلكتروني", tr: "E-posta", ru: "Эл. почта" },
  contact_serviceLabel: { en: "Service needed", ar: "الخدمة المطلوبة", tr: "Gerekli hizmet", ru: "Нужная услуга" },
  contact_planLabel: { en: "Tell us briefly about your plan", ar: "أخبرنا باختصار عن خطتك", tr: "Planınızı kısaca anlatın", ru: "Кратко расскажите о вашем плане" },
  contact_planPh: {
    en: "e.g. E-commerce trading company, 2 partners, 3 visas, need bank account…",
    ar: "مثال: شركة تجارة إلكترونية، شريكان، 3 تأشيرات، بحاجة لحساب بنكي…",
    tr: "örn. E-ticaret şirketi, 2 ortak, 3 vize, banka hesabı gerekli…",
    ru: "напр. Компания электронной торговли, 2 партнёра, 3 визы, нужен банковский счёт…",
  },
  contact_submit: { en: "Book My Free Consultation", ar: "احجز استشارتي المجانية", tr: "Ücretsiz Danışmanlığımı Ayarla", ru: "Записаться на консультацию" },
  contact_required: { en: "* required — we reply within one working day.", ar: "* مطلوب — نرد خلال يوم عمل واحد.", tr: "* zorunlu — bir iş günü içinde yanıt veriyoruz.", ru: "* обязательно — отвечаем в течение одного рабочего дня." },
};

export function tr(lang, key) {
  const entry = T[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en ?? key;
}
