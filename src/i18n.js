/* ==================================================================
   KSM — i18n dictionary (EN · AR · TR)
   Arabic is RTL. Every user-facing string keyed here.
   ================================================================== */

export const LANGS = {
  en: { label: "EN", name: "English", dir: "ltr" },
  ar: { label: "عربي", name: "العربية", dir: "rtl" },
  tr: { label: "TR", name: "Türkçe", dir: "ltr" },
};

export const T = {
  /* ---------- shared / nav / cta ---------- */
  brandTag: {
    en: "Document Clearing · Dubai",
    ar: "تخليص المستندات · دبي",
    tr: "Belge İşlemleri · Dubai",
  },
  navFreeConsult: {
    en: "Free Consultation",
    ar: "استشارة مجانية",
    tr: "Ücretsiz Danışmanlık",
  },
  ctaDefault: {
    en: "Ready to start? Your first consultation is free — and your quote is fixed in writing.",
    ar: "جاهز للبدء؟ استشارتك الأولى مجانية — وعرض السعر مثبّت كتابيًا.",
    tr: "Başlamaya hazır mısınız? İlk danışmanlığınız ücretsiz — ve teklifiniz yazılı olarak sabittir.",
  },
  ctaBook: {
    en: "Book Free Consultation",
    ar: "احجز استشارة مجانية",
    tr: "Ücretsiz Danışmanlık Al",
  },
  chatKSM: {
    en: "💬 Chat with KSM",
    ar: "💬 تواصل مع KSM",
    tr: "💬 KSM ile Sohbet",
  },

  /* ---------- page labels (nav) ---------- */
  nav_home: { en: "Home", ar: "الرئيسية", tr: "Ana Sayfa" },
  nav_setup: { en: "Business Setup", ar: "تأسيس الشركات", tr: "Şirket Kurulumu" },
  nav_freelance: { en: "Freelance Visa", ar: "تأشيرة العمل الحر", tr: "Serbest Meslek Vizesi" },
  nav_visas: { en: "Visa Services", ar: "خدمات التأشيرات", tr: "Vize Hizmetleri" },
  nav_clearing: { en: "Document Clearing & PRO", ar: "تخليص المستندات و PRO", tr: "Belge İşlemleri & PRO" },
  nav_pricing: { en: "Pricing", ar: "الأسعار", tr: "Fiyatlandırma" },
  nav_about: { en: "About", ar: "من نحن", tr: "Hakkımızda" },
  nav_contact: { en: "Contact", ar: "اتصل بنا", tr: "İletişim" },

  /* ---------- home ---------- */
  home_eyebrow: {
    en: "Business Setup · Freelance Visas · Document Clearing — Dubai, UAE",
    ar: "تأسيس الشركات · تأشيرات العمل الحر · تخليص المستندات — دبي، الإمارات",
    tr: "Şirket Kurulumu · Serbest Meslek Vizeleri · Belge İşlemleri — Dubai, BAE",
  },
  home_h1a: { en: "Your company in Dubai,", ar: "شركتك في دبي،", tr: "Dubai'deki şirketiniz," },
  home_h1b: {
    en: "cleared. licensed. launched.",
    ar: "مُخلّصة. مُرخّصة. مُنطلقة.",
    tr: "işlendi. lisanslandı. başlatıldı.",
  },
  home_sub: {
    en: "KSM sets up mainland, free zone and offshore companies, arranges freelance and golden visas, and clears every government document in between — so you start trading in days, not months.",
    ar: "تؤسّس KSM شركات في البر الرئيسي والمناطق الحرة والأوفشور، وترتّب تأشيرات العمل الحر والذهبية، وتخلّص كل مستند حكومي بينهما — لتبدأ العمل خلال أيام، لا أشهر.",
    tr: "KSM anakara, serbest bölge ve offshore şirketleri kurar, serbest meslek ve altın vizeleri düzenler ve aradaki tüm resmi belgeleri işler — böylece aylarca değil, günler içinde faaliyete geçersiniz.",
  },
  home_ctaStart: { en: "Start Your Setup", ar: "ابدأ التأسيس", tr: "Kuruluma Başlayın" },
  home_ctaPricing: { en: "See Pricing & Estimator", ar: "الأسعار والحاسبة", tr: "Fiyat ve Hesaplayıcı" },
  home_stat1: { en: "fastest license issuance", ar: "أسرع إصدار للرخصة", tr: "en hızlı lisans" },
  home_stat2: { en: "foreign ownership", ar: "ملكية أجنبية", tr: "yabancı sahiplik" },
  home_stat3: { en: "free zones covered", ar: "منطقة حرة مغطاة", tr: "serbest bölge" },
  home_stat4: { en: "personal income tax", ar: "ضريبة دخل شخصي", tr: "kişisel gelir vergisi" },
  home_pillarsEye: { en: "Where do you want to go?", ar: "إلى أين تريد أن تذهب؟", tr: "Nereye gitmek istiyorsunuz?" },
  home_pillarsTitleA: { en: "Three doors into", ar: "ثلاثة أبواب إلى", tr: "Dubai'ye açılan" },
  home_pillarsTitleB: { en: "Dubai", ar: "دبي", tr: "üç kapı" },
  home_pillar1_t: { en: "Set up a company", ar: "أسّس شركة", tr: "Şirket kurun" },
  home_pillar1_d: {
    en: "Mainland, free zone or offshore — matched to your activity, market and budget, licensed in days.",
    ar: "بر رئيسي أو منطقة حرة أو أوفشور — مطابقة لنشاطك وسوقك وميزانيتك، مرخّصة خلال أيام.",
    tr: "Anakara, serbest bölge veya offshore — faaliyetinize, pazarınıza ve bütçenize uygun, günler içinde lisanslı.",
  },
  home_pillar1_cta: { en: "Explore Business Setup", ar: "استكشف تأسيس الشركات", tr: "Şirket Kurulumunu Keşfet" },
  home_pillar2_t: { en: "Work for yourself", ar: "اعمل لحسابك", tr: "Kendi işinizi yapın" },
  home_pillar2_d: {
    en: "A freelance permit with a 2-year residence visa. The lowest-cost legal route to living and working in Dubai.",
    ar: "تصريح عمل حر مع تأشيرة إقامة لعامين. أقل طريق قانوني تكلفة للعيش والعمل في دبي.",
    tr: "2 yıllık oturma vizesi ile serbest meslek izni. Dubai'de yaşamak ve çalışmak için en düşük maliyetli yasal yol.",
  },
  home_pillar2_cta: { en: "Explore Freelance Visa", ar: "استكشف تأشيرة العمل الحر", tr: "Serbest Meslek Vizesini Keşfet" },
  home_pillar3_t: { en: "Clear the paperwork", ar: "خلّص الأوراق", tr: "Evrak işlerini halledin" },
  home_pillar3_d: {
    en: "Attestation, translation, PRO retainers, renewals — the government work handled while you run the business.",
    ar: "التصديق والترجمة وعقود PRO والتجديدات — الأعمال الحكومية تُنجز بينما تدير عملك.",
    tr: "Tasdik, çeviri, PRO anlaşmaları, yenilemeler — siz işinizi yönetirken resmi işler halledilir.",
  },
  home_pillar3_cta: { en: "Explore Document Clearing", ar: "استكشف تخليص المستندات", tr: "Belge İşlemlerini Keşfet" },
  home_processEye: { en: "The KSM process", ar: "عملية KSM", tr: "KSM süreci" },
  home_processTitleA: { en: "Five steps.", ar: "خمس خطوات.", tr: "Beş adım." },
  home_processTitleB: { en: "One point of contact.", ar: "نقطة تواصل واحدة.", tr: "Tek iletişim noktası." },
  home_testiEye: { en: "Client words", ar: "كلمات العملاء", tr: "Müşteri sözleri" },
  home_testiTitleA: { en: "Trusted with the", ar: "موثوقون بالجزء", tr: "İşin zor kısmına" },
  home_testiTitleB: { en: "slow part", ar: "الأبطأ", tr: "güvenildi" },
  home_faqEye: { en: "Questions, answered", ar: "أسئلة وأجوبة", tr: "Sorular, yanıtlandı" },
  home_faqTitleA: { en: "Before you", ar: "قبل أن", tr: "Sormadan" },
  home_faqTitleB: { en: "ask", ar: "تسأل", tr: "önce" },
  home_faqCta: { en: "Ask Us Anything", ar: "اسألنا أي شيء", tr: "Bize Her Şeyi Sorun" },

  /* ---------- generic section words ---------- */
  packagesFrom: { en: "Packages from", ar: "الباقات من", tr: "Paketler" },
  bestFor: { en: "Best for:", ar: "الأفضل لـ:", tr: "En uygun:" },
  getQuote: { en: "Get a Fixed Quote", ar: "احصل على عرض سعر ثابت", tr: "Sabit Teklif Alın" },
  openEstimator: { en: "Open Cost Estimator", ar: "افتح حاسبة التكلفة", tr: "Maliyet Hesaplayıcıyı Aç" },
  requestQuote: { en: "Request Exact Quote", ar: "اطلب عرض سعر دقيق", tr: "Kesin Teklif İste" },
  enquire: { en: "Enquire", ar: "استفسر", tr: "Sorgula" },
  mostPopular: { en: "Most Popular", ar: "الأكثر طلبًا", tr: "En Popüler" },

  /* ---------- contact ---------- */
  contact_eyebrow: { en: "Free Consultation", ar: "استشارة مجانية", tr: "Ücretsiz Danışmanlık" },
  contact_titleA: { en: "Tell us what", ar: "أخبرنا بما", tr: "Ne kurduğunuzu" },
  contact_titleB: { en: "you're building.", ar: "تبنيه.", tr: "bize anlatın." },
  contact_sub: {
    en: "Thirty minutes, no obligation. You'll leave with the right jurisdiction, a realistic timeline, and a fixed quote in writing.",
    ar: "ثلاثون دقيقة، دون التزام. ستخرج بالاختصاص المناسب، وجدول زمني واقعي، وعرض سعر ثابت كتابيًا.",
    tr: "Otuz dakika, yükümlülük yok. Doğru yargı bölgesi, gerçekçi bir zaman çizelgesi ve yazılı sabit teklifle ayrılırsınız.",
  },
  contact_office: { en: "Office", ar: "المكتب", tr: "Ofis" },
  contact_officeVal: { en: "Dubai, United Arab Emirates", ar: "دبي، الإمارات العربية المتحدة", tr: "Dubai, Birleşik Arap Emirlikleri" },
  contact_phone: { en: "Phone / WhatsApp", ar: "الهاتف / واتساب", tr: "Telefon / WhatsApp" },
  contact_email: { en: "Email", ar: "البريد الإلكتروني", tr: "E-posta" },
  contact_hours: { en: "Hours", ar: "ساعات العمل", tr: "Çalışma Saatleri" },
  contact_hoursVal: { en: "Monday–Saturday, 9:00–18:00 GST", ar: "الإثنين–السبت، 9:00–18:00 بتوقيت الخليج", tr: "Pazartesi–Cumartesi, 9:00–18:00 GST" },
  contact_waNote: {
    en: "Prefer WhatsApp? Most of our clients run their entire setup over chat — quotes, document photos, status updates. Send us a message and it starts there.",
    ar: "تفضّل واتساب؟ معظم عملائنا يديرون تأسيسهم بالكامل عبر المحادثة — عروض الأسعار وصور المستندات وتحديثات الحالة. أرسل لنا رسالة ويبدأ الأمر من هناك.",
    tr: "WhatsApp mı tercih edersiniz? Müşterilerimizin çoğu tüm kurulumu sohbet üzerinden yürütür — teklifler, belge fotoğrafları, durum güncellemeleri. Bize bir mesaj gönderin, oradan başlasın.",
  },
  contact_sentTitle: { en: "Request received", ar: "تم استلام الطلب", tr: "Talep alındı" },
  contact_sentBody: {
    en: "A KSM consultant will contact you within one working day.",
    ar: "سيتواصل معك مستشار KSM خلال يوم عمل واحد.",
    tr: "Bir KSM danışmanı bir iş günü içinde sizinle iletişime geçecektir.",
  },
  contact_fullName: { en: "Full name *", ar: "الاسم الكامل *", tr: "Ad Soyad *" },
  contact_fullNamePh: { en: "Your name", ar: "اسمك", tr: "Adınız" },
  contact_phoneReq: { en: "Phone / WhatsApp *", ar: "الهاتف / واتساب *", tr: "Telefon / WhatsApp *" },
  contact_emailOpt: { en: "Email", ar: "البريد الإلكتروني", tr: "E-posta" },
  contact_serviceLabel: { en: "Service needed", ar: "الخدمة المطلوبة", tr: "Gerekli hizmet" },
  contact_planLabel: { en: "Tell us briefly about your plan", ar: "أخبرنا باختصار عن خطتك", tr: "Planınızı kısaca anlatın" },
  contact_planPh: {
    en: "e.g. E-commerce trading company, 2 partners, 3 visas, need bank account…",
    ar: "مثال: شركة تجارة إلكترونية، شريكان، 3 تأشيرات، بحاجة لحساب بنكي…",
    tr: "örn. E-ticaret şirketi, 2 ortak, 3 vize, banka hesabı gerekli…",
  },
  contact_submit: { en: "Book My Free Consultation", ar: "احجز استشارتي المجانية", tr: "Ücretsiz Danışmanlığımı Ayarla" },
  contact_required: { en: "* required — we reply within one working day.", ar: "* مطلوب — نرد خلال يوم عمل واحد.", tr: "* zorunlu — bir iş günü içinde yanıt veriyoruz." },
};

export function tr(lang, key) {
  const entry = T[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en ?? key;
}
