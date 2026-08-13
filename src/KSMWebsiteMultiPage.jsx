import React, { useState, useEffect } from "react";

/* ==================================================================
   KSM DOCUMENT CLEARING — Business Setup in Dubai
   Multi-page React app · Black & Gold brand system from the KSM mark
   Pages: Home · Business Setup · Freelance Visa · Visa Services ·
          Document Clearing & PRO · Pricing · About · Contact
   ================================================================== */

const GOLD = "#D4AF37";
const GOLD_LIGHT = "#F0D98C";
const GOLD_DEEP = "#9C7C1E";
const INK = "#0B0B0D";
const INK_2 = "#131316";
const INK_3 = "#1C1C21";
const PAPER = "#B8B2A6";
const IVORY = "#EFEAE0";

const goldText = {
  background: `linear-gradient(120deg, ${GOLD_LIGHT} 0%, ${GOLD} 45%, ${GOLD_DEEP} 100%)`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

/* ---------------- shared atoms ---------------- */

const Eyebrow = ({ children, center }) => (
  <p className={`ksm-body text-xs tracking-widest uppercase ${center ? "text-center" : ""}`} style={{ color: GOLD, letterSpacing: ".22em" }}>
    {children}
  </p>
);

const H2 = ({ children, center }) => (
  <h2 className={`ksm-display font-semibold mt-3 ${center ? "text-center" : ""}`} style={{ color: IVORY, fontSize: "clamp(2rem,4.5vw,3.2rem)", lineHeight: 1.1 }}>
    {children}
  </h2>
);

const GoldRule = ({ my = 6 }) => <div className={`my-${my}`} style={{ height: 1, background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />;

const GoldBtn = ({ children, onClick, ghost, full }) => (
  <button
    onClick={onClick}
    className={`gold-btn ksm-body px-8 py-4 text-sm font-semibold tracking-widest uppercase ${full ? "w-full" : ""}`}
    style={
      ghost
        ? { background: "transparent", color: GOLD, border: `1px solid ${GOLD}66`, cursor: "pointer" }
        : { background: `linear-gradient(120deg, ${GOLD_LIGHT}, ${GOLD})`, color: INK, border: "none", cursor: "pointer" }
    }
  >
    {children}
  </button>
);

const Check = ({ children }) => (
  <li className="flex gap-3 items-start ksm-body text-sm">
    <span style={{ color: GOLD }}>✦</span>
    <span style={{ color: `${PAPER}dd` }}>{children}</span>
  </li>
);

const PageHero = ({ eyebrow, title, gold, sub }) => (
  <section className="relative overflow-hidden" style={{ paddingTop: 150, paddingBottom: 70, background: INK }}>
    <div aria-hidden style={{ position: "absolute", inset: 0, background: `radial-gradient(800px 400px at 75% -20%, ${GOLD}17, transparent 60%)` }} />
    <div aria-hidden className="ksm-display hidden lg:block" style={{ position: "absolute", right: -40, top: 60, fontSize: 280, fontWeight: 700, color: `${GOLD}08`, lineHeight: 1, userSelect: "none" }}>
      KSM
    </div>
    <div className="max-w-6xl mx-auto px-5 relative">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="ksm-display font-semibold leading-none mt-3" style={{ fontSize: "clamp(2.4rem,6vw,4.4rem)", color: IVORY }}>
        {title} <span style={goldText}>{gold}</span>
      </h1>
      {sub && <p className="ksm-body mt-6 max-w-2xl text-lg font-light leading-relaxed">{sub}</p>}
    </div>
  </section>
);

const CTABand = ({ nav, text = "Ready to start? Your first consultation is free — and your quote is fixed in writing." }) => (
  <section className="py-16" style={{ background: `linear-gradient(120deg, ${GOLD_LIGHT}, ${GOLD} 60%, ${GOLD_DEEP})` }}>
    <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="ksm-display text-2xl md:text-3xl font-semibold" style={{ color: INK }}>{text}</p>
      <button onClick={() => nav("contact")} className="ksm-body px-8 py-4 text-sm font-semibold tracking-widest uppercase shrink-0"
        style={{ background: INK, color: GOLD_LIGHT, border: "none", cursor: "pointer" }}>
        Book Free Consultation
      </button>
    </div>
  </section>
);

/* ---------------- data ---------------- */

const SETUP_TYPES = [
  {
    id: "mainland",
    icon: "🏙️",
    name: "Mainland (DED)",
    tag: "Trade anywhere in the UAE",
    from: "AED 19,900",
    desc: "A Dubai Economy (DED) license is the most flexible structure in the UAE. Since the 2021 Companies Law reforms, most activities allow 100% foreign ownership — no local sponsor. Trade across all seven emirates, take government contracts, and scale visas with your office space.",
    points: ["100% foreign ownership for most activities", "Commercial, professional & industrial licenses", "Bid for UAE government tenders", "Unlimited branches across the Emirates", "Visa quota scales with office size", "Retail, restaurants & on-ground operations allowed"],
    bestFor: "Trading with the local UAE market, retail, restaurants, contracting, and companies planning large teams.",
  },
  {
    id: "freezone",
    icon: "🏢",
    name: "Free Zone",
    tag: "0% corporate tax on qualifying income",
    from: "AED 12,900",
    desc: "Over 40 free zones — IFZA, Meydan, DMCC, SHAMS, SPC, RAKEZ, DAFZA and more — each with its own pricing, visa quotas and specializations. KSM is authority-agnostic: we match you to the zone that fits your activity and budget, not the one that pays the highest commission.",
    points: ["100% foreign ownership, guaranteed by law", "0% corporate tax on qualifying free zone income", "Full repatriation of capital & profits", "Flexi-desk packages keep first-year costs low", "Multi-year licenses with locked pricing", "Fastest route: licensed in 3–5 working days"],
    bestFor: "Consultants, e-commerce, tech, media, trading companies serving international markets, and first-time founders.",
  },
  {
    id: "offshore",
    icon: "🌐",
    name: "Offshore",
    tag: "Holding & asset protection",
    from: "AED 9,500",
    desc: "JAFZA Offshore, RAK ICC and Ajman Offshore companies are non-resident structures for international business — holding shares, owning property, protecting assets and invoicing globally. No UAE office, no visas, complete confidentiality.",
    points: ["No physical office or UAE presence required", "Confidential shareholder & director registers", "Hold shares in UAE & foreign companies", "Own Dubai real estate (JAFZA Offshore)", "No minimum share capital", "Incorporated in as little as 48 hours"],
    bestFor: "Holding structures, international trading, wealth & succession planning, and property ownership vehicles.",
  },
];

const VISA_SERVICES = [
  { icon: "🥇", t: "Golden Visa (10 years)", d: "For investors (AED 2M+ property or deposits), entrepreneurs, skilled professionals on AED 30,000+ salaries, scientists and exceptional talents. Renewable 10-year residency with no sponsor — and you can sponsor your family and domestic staff.", from: "Full eligibility check free" },
  { icon: "💼", t: "Investor / Partner Visa", d: "Residence visa attached to your mainland or free zone company. 2-year renewable, Emirates ID included, and the foundation for sponsoring your family in the UAE.", from: "From AED 3,800" },
  { icon: "👨‍👩‍👧", t: "Family Sponsorship", d: "Sponsor your spouse, children and parents once your own residency is stamped. We handle entry permits, status change, medical, Emirates ID and stamping as one package — for the whole family at once.", from: "From AED 3,200 / person" },
  { icon: "🧑‍💼", t: "Employment Visas", d: "Hiring? We process work permits, labour contracts, quota approvals, medicals and visa stamping for your staff — mainland (MOHRE) and free zone alike. Volume pricing for teams.", from: "From AED 3,500 / employee" },
  { icon: "🪪", t: "Emirates ID & Medical", d: "Typing, biometrics booking, medical fitness tests, and collection — the errands nobody has time for, done the same week.", from: "From AED 750" },
  { icon: "🔁", t: "Renewals, Transfers & Cancellations", d: "Visa renewals before expiry, sponsorship transfers when circumstances change, and clean cancellations that protect you from fines and bans.", from: "From AED 900" },
];

const CLEARING_SERVICES = [
  { icon: "📜", t: "Certificate Attestation", d: "Degree, marriage, birth and commercial certificates attested through home-country authorities, UAE embassies and MOFA — tracked at every stage." },
  { icon: "🌍", t: "MOFA Legalization", d: "Ministry of Foreign Affairs stamping for documents entering or leaving the UAE, usually completed within 24–48 hours." },
  { icon: "🔤", t: "Legal Translation", d: "Certified Arabic ⇄ English translation accepted by UAE courts, notaries and government departments." },
  { icon: "🏛️", t: "Notary & Court Services", d: "POAs, MOAs, board resolutions and declarations drafted, translated and notarized — in person or via remote notary." },
  { icon: "🖥️", t: "Tasheel, Amer & GDRFA", d: "Daily runners at every service center. Labour contracts, immigration files, entry permits, status changes — typed and cleared without you queuing." },
  { icon: "📇", t: "Corporate Amendments", d: "License renewals, activity changes, share transfers, trade name changes, branch openings and liquidations, handled start to finish." },
];

const PRO_TIERS = [
  { name: "Per Transaction", price: "Pay as you go", features: ["Any single government transaction", "Fixed quote before we start", "Same-day or next-day processing", "WhatsApp status updates"] },
  { name: "PRO Retainer", price: "From AED 1,200/mo", best: true, features: ["Dedicated PRO officer for your company", "All labour & immigration transactions included*", "License & visa renewal tracking calendar", "Fines monitoring & resolution", "Priority same-day processing", "Monthly compliance report"] },
  { name: "Corporate Desk", price: "Custom", features: ["Multi-company / group structures", "On-site document collection", "Attestation & translation volume rates", "Dedicated account manager", "Quarterly compliance review meetings"] },
];

const PACKAGES = [
  { name: "Freelancer", price: "7,500", tag: "AED · all-in, from", features: ["Freelance permit (1 activity)", "2-year UAE residence visa", "Medical + Emirates ID processing", "Bank account assistance", "No office required"] },
  { name: "Free Zone Starter", price: "12,900", tag: "AED · from, incl. 1 visa", best: true, features: ["Free zone license, up to 3 activities", "1 investor visa + Emirates ID", "Flexi-desk facility included", "Bank account file & introduction", "Corporate tax + VAT registration guidance", "Dedicated PRO for every government step"] },
  { name: "Mainland Pro", price: "19,900", tag: "AED · from, incl. approvals", features: ["DED license, 100% foreign ownership", "MOA drafting, notarization & translation", "Ejari / virtual office guidance", "Investor visa + establishment card", "Unlimited activity & visa scalability", "1 year of renewal PRO support"] },
];

const STEPS = [
  { n: "01", t: "Free Consultation", d: "Tell us what you want to build. We map jurisdiction, activities and visas — and give you a fixed written quote the same day." },
  { n: "02", t: "Name & Approvals", d: "Trade name reservation, initial approvals from DED or the free zone authority, MOA and incorporation documents prepared for signature." },
  { n: "03", t: "License Issued", d: "Trade license, establishment card and corporate kit in hand. Free zone setups license in as little as 3–5 working days." },
  { n: "04", t: "Visas & Emirates ID", d: "Entry permits, status change, medical, biometrics and stamping — for you, partners, family and first hires." },
  { n: "05", t: "Bank & Launch", d: "Banking file prepared, introductions made, account opened. You're trading in Dubai." },
];

const FAQS = [
  { q: "How long does setup take?", a: "Free zone: 3–7 working days for the license. Mainland: 5–10 depending on activity approvals. Visas and Emirates ID add 1–2 weeks. Most KSM clients are fully operational — license, visa, bank account — within 2–3 weeks." },
  { q: "Can I own 100% of my company?", a: "Yes. Free zones guarantee it, and since the 2021 Companies Law amendments most mainland activities also allow 100% foreign ownership. A short list of strategic activities still requires Emirati participation — we confirm your activity before you commit to anything." },
  { q: "How much does it cost?", a: "Freelance permits from AED 7,500 all-in. Free zone packages with one visa from AED 12,900. Mainland typically AED 15,000–25,000 depending on activity and office. Every KSM quote is fixed and itemized, government fees at cost." },
  { q: "Do I need a physical office?", a: "Not always. Free zones offer flexi-desks; freelance permits need no office; mainland requires an Ejari address but shared and virtual solutions satisfy many activities. We advise based on your activity and visa count." },
  { q: "What taxes apply?", a: "0% personal income tax. Corporate tax is 9% on profits above AED 375,000, and qualifying free zone income can remain 0%. VAT is 5%, mandatory above AED 375,000 turnover. We register you for both as part of setup." },
  { q: "What happens after setup?", a: "That's our core business. Renewals, amendments, visas, attestation, translation and every government transaction — most clients keep KSM on an annual PRO retainer so nothing expires, lapses or gets fined." },
];

const TESTIMONIALS = [
  { name: "Omar R.", role: "E-commerce founder, UK", text: "License, visa and bank account in 16 days. Every fee was on the quote — nothing appeared later. That alone put KSM ahead of the three agencies I spoke to before them." },
  { name: "Priya S.", role: "Freelance UX designer", text: "I didn't want a company, just to work legally from Dubai. KSM set up my freelance permit and visa while I kept working. The renewals reminder this year saved me a fine." },
  { name: "Ahmed K.", role: "Trading company, KSA", text: "We use their corporate desk for three companies. One WhatsApp message and documents get attested, licenses renew, visas stamp. It's how PRO work should function." },
];

const ESTIMATOR_BASE = { freezone: 12900, mainland: 19900, freelance: 7500, offshore: 9500 };
const JUR_LABEL = { freezone: "Free Zone", mainland: "Mainland (DED)", freelance: "Freelance Permit", offshore: "Offshore" };

/* ---------------- pages ---------------- */

function HomePage({ nav }) {
  return (
    <>
      <section className="relative overflow-hidden" style={{ paddingTop: 160, paddingBottom: 100 }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, background: `radial-gradient(1000px 520px at 70% -10%, ${GOLD}16, transparent 60%), radial-gradient(700px 400px at 5% 110%, ${GOLD}0c, transparent 60%)` }} />
        <div aria-hidden className="ksm-display hidden md:block" style={{ position: "absolute", right: -60, bottom: -70, fontSize: 380, fontWeight: 700, color: `${GOLD}07`, lineHeight: 1, userSelect: "none" }}>KSM</div>
        <div className="max-w-6xl mx-auto px-5 relative">
          <Eyebrow>Business Setup · Freelance Visas · Document Clearing — Dubai, UAE</Eyebrow>
          <h1 className="ksm-display font-semibold leading-none mt-4" style={{ fontSize: "clamp(2.8rem,7.5vw,5.6rem)", color: IVORY }}>
            Your company in Dubai,
            <br />
            <span style={goldText}>cleared. licensed. launched.</span>
          </h1>
          <p className="ksm-body mt-7 max-w-2xl text-lg font-light leading-relaxed">
            KSM sets up mainland, free zone and offshore companies, arranges freelance and golden visas, and clears
            every government document in between — so you start trading in days, not months.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <GoldBtn onClick={() => nav("contact")}>Start Your Setup</GoldBtn>
            <GoldBtn ghost onClick={() => nav("pricing")}>See Pricing & Estimator</GoldBtn>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16 ksm-body" style={{ background: `${GOLD}22`, border: `1px solid ${GOLD}22` }}>
            {[["3–5 days", "fastest license issuance"], ["100%", "foreign ownership"], ["40+", "free zones covered"], ["0%", "personal income tax"]].map(([v, l]) => (
              <div key={l} className="p-6" style={{ background: INK_2 }}>
                <div className="ksm-display text-3xl font-semibold" style={goldText}>{v}</div>
                <div className="text-xs mt-1 tracking-wide uppercase" style={{ color: `${PAPER}bb` }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* pillars */}
      <section className="py-20" style={{ background: INK_2 }}>
        <div className="max-w-6xl mx-auto px-5">
          <Eyebrow>Where do you want to go?</Eyebrow>
          <H2>Three doors into <span style={goldText}>Dubai</span></H2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "🏢", t: "Set up a company", d: "Mainland, free zone or offshore — matched to your activity, market and budget, licensed in days.", page: "setup", cta: "Explore Business Setup" },
              { icon: "🪪", t: "Work for yourself", d: "A freelance permit with a 2-year residence visa. The lowest-cost legal route to living and working in Dubai.", page: "freelance", cta: "Explore Freelance Visa" },
              { icon: "📑", t: "Clear the paperwork", d: "Attestation, translation, PRO retainers, renewals — the government work handled while you run the business.", page: "clearing", cta: "Explore Document Clearing" },
            ].map((c) => (
              <button key={c.t} onClick={() => nav(c.page)} className="svc-card text-left p-8 flex flex-col"
                style={{ background: INK, border: `1px solid ${GOLD}22`, cursor: "pointer" }}>
                <div className="text-4xl" aria-hidden>{c.icon}</div>
                <h3 className="ksm-display text-2xl font-semibold mt-5" style={{ color: GOLD_LIGHT }}>{c.t}</h3>
                <p className="ksm-body text-sm font-light mt-3 leading-relaxed flex-1" style={{ color: `${PAPER}dd` }}>{c.d}</p>
                <span className="ksm-body text-xs tracking-widest uppercase mt-6" style={{ color: GOLD }}>{c.cta} →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <Eyebrow>The KSM process</Eyebrow>
          <H2>Five steps. <span style={goldText}>One point of contact.</span></H2>
          <div className="mt-12">
            {STEPS.map((s, i) => (
              <div key={s.n} className="grid md:grid-cols-12 gap-4 py-7" style={{ borderTop: `1px solid ${GOLD}22`, borderBottom: i === STEPS.length - 1 ? `1px solid ${GOLD}22` : "none" }}>
                <div className="md:col-span-2 ksm-display text-4xl font-semibold" style={goldText}>{s.n}</div>
                <div className="md:col-span-3 ksm-display text-2xl font-semibold" style={{ color: IVORY }}>{s.t}</div>
                <div className="md:col-span-7 ksm-body font-light leading-relaxed" style={{ color: `${PAPER}dd` }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="py-20" style={{ background: INK_2 }}>
        <div className="max-w-6xl mx-auto px-5">
          <Eyebrow center>Client words</Eyebrow>
          <H2 center>Trusted with the <span style={goldText}>slow part</span></H2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="p-8 flex flex-col" style={{ background: INK, border: `1px solid ${GOLD}22` }}>
                <div className="ksm-display text-4xl" style={goldText}>“</div>
                <p className="ksm-body text-sm font-light leading-relaxed flex-1" style={{ color: `${PAPER}dd` }}>{t.text}</p>
                <div className="mt-6 pt-4" style={{ borderTop: `1px solid ${GOLD}22` }}>
                  <div className="ksm-body font-medium" style={{ color: GOLD_LIGHT }}>{t.name}</div>
                  <div className="ksm-body text-xs uppercase tracking-wide mt-1" style={{ color: `${PAPER}99` }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* faq teaser */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5">
          <Eyebrow center>Questions, answered</Eyebrow>
          <H2 center>Before you <span style={goldText}>ask</span></H2>
          <FAQList items={FAQS.slice(0, 4)} />
          <div className="text-center mt-10">
            <GoldBtn ghost onClick={() => nav("contact")}>Ask Us Anything</GoldBtn>
          </div>
        </div>
      </section>

      <CTABand nav={nav} />
    </>
  );
}

function SetupPage({ nav }) {
  const [active, setActive] = useState("freezone");
  const t = SETUP_TYPES.find((x) => x.id === active);
  return (
    <>
      <PageHero eyebrow="Business Setup in Dubai" title="Mainland. Free zone." gold="Offshore." sub="Three legal structures, forty-plus licensing authorities, one honest recommendation. KSM is authority-agnostic — we match the jurisdiction to your business, not the other way around." />
      <section className="py-16" style={{ background: INK_2 }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-3 gap-2 ksm-body">
            {SETUP_TYPES.map((x) => (
              <button key={x.id} onClick={() => setActive(x.id)} className="py-4 px-2 text-sm md:text-base font-medium"
                style={{ background: active === x.id ? `${GOLD}1f` : INK, border: `1px solid ${active === x.id ? GOLD : GOLD + "26"}`, color: active === x.id ? GOLD_LIGHT : PAPER, cursor: "pointer" }}>
                <span className="mr-2" aria-hidden>{x.icon}</span>{x.name}
              </button>
            ))}
          </div>

          <div key={t.id} className="page-fade grid lg:grid-cols-5 gap-10 mt-12">
            <div className="lg:col-span-3">
              <div className="ksm-body text-xs tracking-widest uppercase" style={{ color: GOLD }}>{t.tag}</div>
              <h2 className="ksm-display text-4xl font-semibold mt-2" style={{ color: IVORY }}>{t.name} <span style={goldText}>company setup</span></h2>
              <p className="ksm-body mt-5 font-light leading-relaxed">{t.desc}</p>
              <ul className="mt-7 space-y-3">{t.points.map((p) => <Check key={p}>{p}</Check>)}</ul>
            </div>
            <div className="lg:col-span-2 self-start p-8" style={{ background: INK, border: `1px solid ${GOLD}33` }}>
              <div className="ksm-body text-xs tracking-widest uppercase" style={{ color: GOLD }}>Packages from</div>
              <div className="ksm-display font-semibold mt-2" style={{ ...goldText, fontSize: "2.8rem" }}>{t.from}</div>
              <GoldRule />
              <div className="ksm-body text-sm font-light leading-relaxed" style={{ color: `${PAPER}dd` }}>
                <span style={{ color: GOLD_LIGHT }}>Best for:</span> {t.bestFor}
              </div>
              <div className="mt-7 space-y-3">
                <GoldBtn full onClick={() => nav("contact")}>Get a Fixed Quote</GoldBtn>
                <GoldBtn full ghost onClick={() => nav("pricing")}>Open Cost Estimator</GoldBtn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <Eyebrow>Included with every setup</Eyebrow>
          <H2>The parts other agencies <span style={goldText}>outsource</span></H2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 ksm-body">
            {[
              ["🧾", "Tax & VAT registration", "Corporate tax and VAT registered with the FTA before your first invoice."],
              ["🏦", "Bank account file", "Compliance-ready KYC pack and introductions to freelancer- and SME-friendly banks."],
              ["📑", "Document clearing", "MOA notarization, translations, attestations — done in-house, our core trade."],
              ["🔁", "Renewal calendar", "License, visa and Emirates ID expiries tracked so nothing lapses into fines."],
            ].map(([i, t2, d]) => (
              <div key={t2} className="svc-card p-6" style={{ background: INK_2, border: `1px solid ${GOLD}1f` }}>
                <div className="text-3xl" aria-hidden>{i}</div>
                <h3 className="ksm-display text-xl font-semibold mt-3" style={{ color: GOLD_LIGHT }}>{t2}</h3>
                <p className="text-sm font-light mt-2 leading-relaxed" style={{ color: `${PAPER}cc` }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand nav={nav} />
    </>
  );
}

function FreelancePage({ nav }) {
  return (
    <>
      <PageHero eyebrow="Freelance Visa Dubai" title="Work for yourself." gold="Live in Dubai legally." sub="A freelance permit with a 2-year residence visa — no company, no office, no employer. The lowest-cost legal route into the UAE for independent professionals." />
      <section className="py-16" style={{ background: INK_2 }}>
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12">
          <div>
            <Eyebrow>Who it's for</Eyebrow>
            <H2>100+ activities <span style={goldText}>qualify</span></H2>
            <p className="ksm-body mt-5 font-light leading-relaxed">
              Designers, developers, marketers, writers, photographers, teachers, trainers, consultants, media
              producers — if you sell your own skills, there is almost certainly a freelance activity for you.
              We confirm your exact activity and authority before you pay anything.
            </p>
            <ul className="mt-7 space-y-3">
              <Check>Freelance permit in your own name — no company required</Check>
              <Check>2-year renewable UAE residence visa & Emirates ID</Check>
              <Check>Sponsor your spouse and children on your visa</Check>
              <Check>Open a UAE bank account & invoice clients worldwide</Check>
              <Check>0% personal income tax on your earnings</Check>
              <Check>Upgrade to a full company license anytime — we handle the transition</Check>
            </ul>
            <div className="mt-9"><GoldBtn onClick={() => nav("contact")}>Get My Freelance Visa</GoldBtn></div>
          </div>
          <div className="self-start p-8" style={{ background: INK, border: `1px solid ${GOLD}33` }}>
            <h3 className="ksm-display text-2xl font-semibold" style={{ color: GOLD_LIGHT }}>The package — what's inside</h3>
            <GoldRule />
            {[
              ["Freelance permit", "Issued under a recognized UAE authority in your chosen activity"],
              ["Residence visa", "Entry permit, status change, medical fitness & stamping"],
              ["Emirates ID", "Biometrics booked, card collected"],
              ["Bank account", "File prepared, introductions to freelancer-friendly banks"],
              ["Renewals handled", "Diarized and processed before anything expires"],
            ].map(([t, d]) => (
              <div key={t} className="ksm-body mb-5">
                <div className="font-medium" style={{ color: IVORY }}>{t}</div>
                <div className="text-sm font-light mt-1" style={{ color: `${PAPER}cc` }}>{d}</div>
              </div>
            ))}
            <div className="ksm-body text-sm pt-4" style={{ borderTop: `1px solid ${GOLD}22` }}>
              <span className="ksm-display text-2xl font-semibold" style={goldText}>From AED 7,500 all-in</span>
              <div className="mt-1 font-light" style={{ color: `${PAPER}99` }}>typically completed in 10–15 working days</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <Eyebrow>Freelance vs. company — honestly</Eyebrow>
          <H2>Which one do <span style={goldText}>you</span> need?</H2>
          <div className="grid md:grid-cols-2 gap-6 mt-12 ksm-body text-sm">
            <div className="p-8" style={{ background: INK_2, border: `1px solid ${GOLD}33` }}>
              <h3 className="ksm-display text-2xl font-semibold" style={{ color: GOLD_LIGHT }}>Choose the freelance permit if…</h3>
              <ul className="mt-5 space-y-3">
                <Check>You sell your own time and skills, solo</Check>
                <Check>You want the lowest legal cost of UAE residency</Check>
                <Check>Your clients are individuals or overseas companies</Check>
                <Check>You don't need to hire employees yet</Check>
              </ul>
            </div>
            <div className="p-8" style={{ background: INK_2, border: `1px solid ${GOLD}22` }}>
              <h3 className="ksm-display text-2xl font-semibold" style={{ color: IVORY }}>Choose a company license if…</h3>
              <ul className="mt-5 space-y-3">
                <Check>You'll hire staff or bring in partners</Check>
                <Check>You trade goods, not just services</Check>
                <Check>Large UAE corporates or government are your clients</Check>
                <Check>You want to build a sellable brand and entity</Check>
              </ul>
              <p className="mt-5 font-light" style={{ color: `${PAPER}99` }}>Not sure? The consultation is free — and switching later is a service we do weekly.</p>
            </div>
          </div>
        </div>
      </section>
      <CTABand nav={nav} text="Freelance visa from AED 7,500 all-in. Eligibility confirmed free, in one call." />
    </>
  );
}

function VisasPage({ nav }) {
  return (
    <>
      <PageHero eyebrow="Visa Services" title="Every visa," gold="every stage." sub="Golden visas, investor visas, family sponsorship, employment visas, renewals and cancellations — processed daily through Amer, GDRFA and the free zone authorities." />
      <section className="py-16" style={{ background: INK_2 }}>
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VISA_SERVICES.map((v) => (
            <div key={v.t} className="svc-card p-7 flex flex-col" style={{ background: INK, border: `1px solid ${GOLD}1f` }}>
              <div className="text-3xl" aria-hidden>{v.icon}</div>
              <h3 className="ksm-display text-2xl font-semibold mt-4" style={{ color: GOLD_LIGHT }}>{v.t}</h3>
              <p className="ksm-body text-sm mt-3 font-light leading-relaxed flex-1" style={{ color: `${PAPER}dd` }}>{v.d}</p>
              <div className="ksm-body text-xs tracking-widest uppercase mt-5 pt-4" style={{ color: GOLD, borderTop: `1px solid ${GOLD}22` }}>{v.from}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5">
          <Eyebrow center>Golden Visa spotlight</Eyebrow>
          <H2 center>Ten years, <span style={goldText}>no sponsor</span></H2>
          <p className="ksm-body mt-6 text-center font-light leading-relaxed max-w-2xl mx-auto">
            The UAE Golden Visa grants renewable 10-year residency to investors, entrepreneurs, skilled professionals
            (AED 30,000+ monthly salary), property owners (AED 2M+), scientists, doctors, and outstanding students.
            KSM checks your eligibility free, prepares the evidence file, and follows your application through
            nomination, approval and stamping.
          </p>
          <div className="text-center mt-9"><GoldBtn onClick={() => nav("contact")}>Check My Golden Visa Eligibility — Free</GoldBtn></div>
        </div>
      </section>
      <CTABand nav={nav} />
    </>
  );
}

function ClearingPage({ nav }) {
  return (
    <>
      <PageHero eyebrow="Document Clearing & PRO Services" title="The paperwork," gold="perfected." sub="Document clearing is not a side service at KSM — it's the trade we're named for. Attestation, translation, notarization and every government counter in Dubai, handled by in-house runners daily." />
      <section className="py-16" style={{ background: INK_2 }}>
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CLEARING_SERVICES.map((v) => (
            <div key={v.t} className="svc-card p-7" style={{ background: INK, border: `1px solid ${GOLD}1f` }}>
              <div className="text-3xl" aria-hidden>{v.icon}</div>
              <h3 className="ksm-display text-2xl font-semibold mt-4" style={{ color: GOLD_LIGHT }}>{v.t}</h3>
              <p className="ksm-body text-sm mt-3 font-light leading-relaxed" style={{ color: `${PAPER}dd` }}>{v.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <Eyebrow>PRO services</Eyebrow>
          <H2>Your government department, <span style={goldText}>outsourced</span></H2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {PRO_TIERS.map((p) => (
              <div key={p.name} className="relative p-8 flex flex-col" style={{ background: INK_2, border: `1px solid ${p.best ? GOLD : GOLD + "26"}`, boxShadow: p.best ? `0 0 50px -18px ${GOLD}66` : "none" }}>
                {p.best && <div className="ksm-body absolute -top-3 left-8 px-3 py-1 text-xs tracking-widest uppercase font-semibold" style={{ background: GOLD, color: INK }}>Most Popular</div>}
                <h3 className="ksm-display text-2xl font-semibold" style={{ color: GOLD_LIGHT }}>{p.name}</h3>
                <div className="ksm-display text-3xl font-semibold mt-3" style={goldText}>{p.price}</div>
                <ul className="mt-6 space-y-3 flex-1">{p.features.map((f) => <Check key={f}>{f}</Check>)}</ul>
                <div className="mt-8"><GoldBtn full ghost={!p.best} onClick={() => nav("contact")}>Enquire</GoldBtn></div>
              </div>
            ))}
          </div>
          <p className="ksm-body text-xs font-light mt-6" style={{ color: `${PAPER}77` }}>* Government fees charged at cost. Retainer covers KSM professional fees for standard labour & immigration transactions.</p>
        </div>
      </section>
      <CTABand nav={nav} text="One WhatsApp message. Documents cleared. That's the retainer." />
    </>
  );
}

function PricingPage({ nav }) {
  const [jur, setJur] = useState("freezone");
  const [visas, setVisas] = useState(1);
  const [office, setOffice] = useState(false);
  const visaCost = jur === "freelance" ? 0 : Math.max(0, visas - (jur === "offshore" ? 0 : 1)) * 3800;
  const officeCost = office ? (jur === "mainland" ? 12000 : 6500) : 0;
  const estimate = ESTIMATOR_BASE[jur] + visaCost + officeCost;

  return (
    <>
      <PageHero eyebrow="Transparent Pricing" title="Fixed quotes." gold="No surprises." sub="Government fees shown at cost, itemized on every invoice. These packages are real starting prices — your exact quote is confirmed in writing before you pay a dirham." />

      <section className="py-16" style={{ background: INK_2 }}>
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-6">
          {PACKAGES.map((p) => (
            <div key={p.name} className="relative p-8 flex flex-col" style={{ background: INK, border: `1px solid ${p.best ? GOLD : GOLD + "26"}`, boxShadow: p.best ? `0 0 50px -18px ${GOLD}66` : "none" }}>
              {p.best && <div className="ksm-body absolute -top-3 left-8 px-3 py-1 text-xs tracking-widest uppercase font-semibold" style={{ background: GOLD, color: INK }}>Most Popular</div>}
              <h3 className="ksm-display text-2xl font-semibold" style={{ color: GOLD_LIGHT }}>{p.name}</h3>
              <div className="ksm-display text-5xl font-semibold mt-4" style={goldText}>{p.price}</div>
              <div className="ksm-body text-xs uppercase tracking-wide mt-1" style={{ color: `${PAPER}99` }}>{p.tag}</div>
              <ul className="mt-6 space-y-3 flex-1">{p.features.map((f) => <Check key={f}>{f}</Check>)}</ul>
              <div className="mt-8"><GoldBtn full ghost={!p.best} onClick={() => nav("contact")}>Request Exact Quote</GoldBtn></div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12">
          <div>
            <Eyebrow>Cost estimator</Eyebrow>
            <H2>What will it <span style={goldText}>actually cost?</span></H2>
            <p className="ksm-body mt-4 font-light leading-relaxed max-w-lg">A realistic starting figure in 10 seconds. Your exact quote depends on activity approvals and the authority you license with.</p>
            <div className="ksm-body mt-8 space-y-6">
              <div>
                <label className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>Jurisdiction</label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {Object.keys(ESTIMATOR_BASE).map((k) => (
                    <button key={k} onClick={() => setJur(k)} className="py-3 px-3 text-sm"
                      style={{ background: jur === k ? `${GOLD}1f` : INK_2, border: `1px solid ${jur === k ? GOLD : GOLD + "26"}`, color: jur === k ? GOLD_LIGHT : PAPER, cursor: "pointer" }}>
                      {JUR_LABEL[k]}
                    </button>
                  ))}
                </div>
              </div>
              {jur !== "freelance" && (
                <div>
                  <label className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>Visas needed: {visas}</label>
                  <input type="range" min="0" max="6" value={visas} onChange={(e) => setVisas(+e.target.value)} className="w-full mt-2" style={{ accentColor: GOLD }} />
                </div>
              )}
              <label className="flex items-center gap-3 text-sm cursor-pointer">
                <input type="checkbox" checked={office} onChange={(e) => setOffice(e.target.checked)} style={{ accentColor: GOLD, width: 18, height: 18 }} />
                I need a physical office / Ejari address
              </label>
            </div>
          </div>
          <div className="p-9 self-start" style={{ background: INK_2, border: `1px solid ${GOLD}33` }}>
            <div className="ksm-body text-xs tracking-widest uppercase" style={{ color: GOLD }}>Estimated first-year cost</div>
            <div className="ksm-display font-semibold mt-3" style={{ ...goldText, fontSize: "3.6rem", lineHeight: 1 }}>AED {estimate.toLocaleString()}</div>
            <GoldRule />
            <div className="ksm-body text-sm space-y-3">
              <div className="flex justify-between"><span>{JUR_LABEL[jur]} package</span><span style={{ color: GOLD_LIGHT }}>AED {ESTIMATOR_BASE[jur].toLocaleString()}</span></div>
              {jur !== "freelance" && <div className="flex justify-between"><span>Additional visas ({Math.max(0, visas - (jur === "offshore" ? 0 : 1))} × 3,800)</span><span style={{ color: GOLD_LIGHT }}>AED {visaCost.toLocaleString()}</span></div>}
              {office && <div className="flex justify-between"><span>Office / Ejari solution</span><span style={{ color: GOLD_LIGHT }}>AED {officeCost.toLocaleString()}</span></div>}
            </div>
            <p className="ksm-body text-xs mt-6 font-light" style={{ color: `${PAPER}88` }}>Indicative only. Includes license, standard government fees and KSM professional fees. Excludes activity-specific external approvals and bank minimum balances.</p>
            <div className="mt-6"><GoldBtn full onClick={() => nav("contact")}>Get My Exact Quote</GoldBtn></div>
          </div>
        </div>
      </section>
      <CTABand nav={nav} />
    </>
  );
}

function AboutPage({ nav }) {
  return (
    <>
      <PageHero eyebrow="About KSM" title="Document clearers" gold="first." sub="Most setup agencies outsource the paperwork. Document clearing is our business — which means the slowest part of company formation is the part we control directly." />
      <section className="py-16" style={{ background: INK_2 }}>
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12">
          <div>
            <Eyebrow>Our promise</Eyebrow>
            <H2>Four things we <span style={goldText}>guarantee</span></H2>
            <ul className="ksm-body mt-7 space-y-5 text-sm font-light">
              {[
                ["Fixed written quotes", "Government fees at cost, itemized, before you pay. If it's not on the quote, you don't pay it."],
                ["Same-day response", "One dedicated consultant from first call to launch. No call centers, no ticket queues."],
                ["In-house government runners", "Tasheel, Amer, DED, GDRFA and MOFA visited daily. Your file never waits for a courier."],
                ["After-setup care", "Renewals, amendments, visas and attestation on retainer — the relationship starts at the license, it doesn't end there."],
              ].map(([t, d]) => (
                <li key={t}>
                  <span className="ksm-display text-xl font-semibold block" style={{ color: GOLD_LIGHT }}>{t}</span>
                  <span style={{ color: `${PAPER}cc` }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Why Dubai</Eyebrow>
            <H2>The most business-friendly <span style={goldText}>address on earth</span></H2>
            <ul className="ksm-body mt-7 space-y-5 text-sm font-light">
              {[
                ["0% personal income tax", "and 0% corporate tax on qualifying free zone income."],
                ["Strategic location", "8-hour flight from two-thirds of the world's population."],
                ["World-class infrastructure", "banking, logistics and connectivity with full profit repatriation."],
                ["Residency for your family", "through investor, freelance and 10-year golden visa routes."],
              ].map(([t, d]) => (
                <li key={t}>
                  <span className="ksm-display text-xl font-semibold block" style={{ color: GOLD_LIGHT }}>{t}</span>
                  <span style={{ color: `${PAPER}cc` }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5">
          <Eyebrow center>FAQ</Eyebrow>
          <H2 center>Everything else you'd <span style={goldText}>ask</span></H2>
          <FAQList items={FAQS} />
        </div>
      </section>
      <CTABand nav={nav} />
    </>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "Free Zone Company Setup", message: "" });
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Free Consultation" title="Tell us what" gold="you're building." sub="Thirty minutes, no obligation. You'll leave with the right jurisdiction, a realistic timeline, and a fixed quote in writing." />
      <section className="py-16" style={{ background: INK_2 }}>
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12">
          <div className="ksm-body space-y-6 text-sm">
            {[
              ["Office", "Dubai, United Arab Emirates"],
              ["Phone / WhatsApp", "+971 56 884 6843"],
              ["Email", "info@ksm.ae"],
              ["Hours", "Monday–Saturday, 9:00–18:00 GST"],
            ].map(([t, d]) => (
              <div key={t} className="pb-5" style={{ borderBottom: `1px solid ${GOLD}22` }}>
                <div className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>{t}</div>
                <div className="ksm-display text-2xl font-semibold mt-1" style={{ color: IVORY }}>{d}</div>
              </div>
            ))}
            <p className="font-light leading-relaxed" style={{ color: `${PAPER}bb` }}>
              Prefer WhatsApp? Most of our clients run their entire setup over chat — quotes, document photos,
              status updates. Send us a message and it starts there.
            </p>
          </div>
          <div className="p-8" style={{ background: INK, border: `1px solid ${GOLD}33` }}>
            {sent ? (
              <div className="text-center py-16">
                <div className="ksm-display text-5xl" style={goldText}>✦</div>
                <h3 className="ksm-display text-3xl font-semibold mt-4" style={{ color: GOLD_LIGHT }}>Request received</h3>
                <p className="ksm-body text-sm font-light mt-3">A KSM consultant will contact you within one working day.</p>
              </div>
            ) : (
              <div className="ksm-body space-y-4">
                {[["Full name *", "name", "text", "Your name"], ["Phone / WhatsApp *", "phone", "tel", "+971 56 884 6843"], ["Email", "email", "email", "you@company.com"]].map(([label, key, type, ph]) => (
                  <div key={key}>
                    <label className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>{label}</label>
                    <input type={type} value={form[key]} placeholder={ph} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="w-full mt-2 px-4 py-3 text-sm" style={{ background: INK_3, border: `1px solid ${GOLD}26`, color: IVORY }} />
                  </div>
                ))}
                <div>
                  <label className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>Service needed</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full mt-2 px-4 py-3 text-sm" style={{ background: INK_3, border: `1px solid ${GOLD}26`, color: IVORY }}>
                    {["Free Zone Company Setup", "Mainland Company Setup", "Offshore Formation", "Freelance Visa", "Golden Visa", "Family Sponsorship", "Document Clearing / Attestation", "PRO Retainer", "Bank Account Assistance", "Other"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>Tell us briefly about your plan</label>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="e.g. E-commerce trading company, 2 partners, 3 visas, need bank account…"
                    className="w-full mt-2 px-4 py-3 text-sm" style={{ background: INK_3, border: `1px solid ${GOLD}26`, color: IVORY, resize: "vertical" }} />
                </div>
                <button onClick={() => form.name && form.phone && setSent(true)} className="gold-btn w-full py-4 text-sm font-semibold tracking-widest uppercase"
                  style={{ background: `linear-gradient(120deg, ${GOLD_LIGHT}, ${GOLD})`, color: INK, border: "none", cursor: form.name && form.phone ? "pointer" : "not-allowed", opacity: form.name && form.phone ? 1 : 0.5 }}>
                  Book My Free Consultation
                </button>
                <p className="text-xs font-light" style={{ color: `${PAPER}77` }}>* required — we reply within one working day.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- FAQ list ---------------- */

function FAQList({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="mt-10">
      {items.map((f, i) => (
        <div key={f.q} style={{ borderBottom: `1px solid ${GOLD}22` }}>
          <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex justify-between items-center py-6 text-left gap-4"
            style={{ background: "none", border: "none", cursor: "pointer" }} aria-expanded={open === i}>
            <span className="ksm-display text-xl font-semibold" style={{ color: open === i ? GOLD_LIGHT : IVORY }}>{f.q}</span>
            <span className="ksm-display text-2xl shrink-0" style={{ color: GOLD }}>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <p className="ksm-body text-sm font-light leading-relaxed pb-6 pr-8" style={{ color: `${PAPER}dd` }}>{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

/* ---------------- app shell ---------------- */

const PAGES = {
  home: { label: "Home", C: HomePage },
  setup: { label: "Business Setup", C: SetupPage },
  freelance: { label: "Freelance Visa", C: FreelancePage },
  visas: { label: "Visa Services", C: VisasPage },
  clearing: { label: "Document Clearing & PRO", C: ClearingPage },
  pricing: { label: "Pricing", C: PricingPage },
  about: { label: "About", C: AboutPage },
  contact: { label: "Contact", C: ContactPage },
};

export default function KSMWebsite() {
  const [route, setRoute] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (r) => {
    setRoute(r);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  };

  const Page = PAGES[route].C;

  return (
    <div style={{ background: INK, color: PAPER, fontFamily: "'Georgia','Times New Roman',serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');
        .ksm-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .ksm-body { font-family: 'Jost', 'Segoe UI', sans-serif; }
        .svc-card { transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease; }
        .svc-card:hover { transform: translateY(-6px); border-color: ${GOLD}66; box-shadow: 0 18px 40px -18px ${GOLD}33; }
        .gold-btn { transition: all .3s ease; }
        .gold-btn:hover { box-shadow: 0 0 28px ${GOLD}55; transform: translateY(-2px); }
        @keyframes pageFade { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .page-fade { animation: pageFade .5s ease both; }
        @media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }
        input:focus, textarea:focus, select:focus, button:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 2px; }
      `}</style>

      {/* NAV */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled || menuOpen ? "rgba(11,11,13,.95)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        borderBottom: scrolled || menuOpen ? `1px solid ${GOLD}22` : "1px solid transparent",
        transition: "all .3s ease",
      }}>
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between" style={{ height: 74 }}>
          <button onClick={() => nav("home")} className="flex items-baseline gap-2" style={{ background: "none", border: "none", cursor: "pointer" }}>
            <span className="ksm-display text-3xl font-bold tracking-wide" style={goldText}>KSM</span>
            <span className="ksm-body text-xs tracking-widest uppercase hidden sm:inline" style={{ color: PAPER }}>Document Clearing · Dubai</span>
          </button>
          <nav className="hidden xl:flex items-center gap-6 ksm-body text-sm">
            {Object.entries(PAGES).filter(([k]) => k !== "contact").map(([k, v]) => (
              <button key={k} onClick={() => nav(k)}
                style={{ background: "none", border: "none", cursor: "pointer", letterSpacing: ".04em", color: route === k ? GOLD_LIGHT : PAPER, borderBottom: route === k ? `1px solid ${GOLD}` : "1px solid transparent", paddingBottom: 3 }}
                onMouseEnter={(e) => (e.target.style.color = GOLD)} onMouseLeave={(e) => (e.target.style.color = route === k ? GOLD_LIGHT : PAPER)}>
                {v.label}
              </button>
            ))}
            <button onClick={() => nav("contact")} className="gold-btn px-5 py-2 text-sm font-medium tracking-wide"
              style={{ background: `linear-gradient(120deg, ${GOLD_LIGHT}, ${GOLD})`, color: INK, border: "none", cursor: "pointer" }}>
              Free Consultation
            </button>
          </nav>
          <button className="xl:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
            style={{ background: "none", border: `1px solid ${GOLD}44`, color: GOLD, width: 42, height: 42, cursor: "pointer" }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="xl:hidden px-5 pb-5 ksm-body" style={{ borderBottom: `1px solid ${GOLD}22`, maxHeight: "70vh", overflowY: "auto" }}>
            {Object.entries(PAGES).map(([k, v]) => (
              <button key={k} onClick={() => nav(k)} className="block w-full text-left py-3 text-base"
                style={{ background: "none", border: "none", color: route === k ? GOLD_LIGHT : PAPER, borderBottom: `1px solid ${GOLD}14`, cursor: "pointer" }}>
                {v.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* PAGE */}
      <main key={route} className="page-fade">
        <Page nav={nav} />
      </main>

      {/* FOOTER */}
      <footer className="py-12" style={{ borderTop: `1px solid ${GOLD}22` }}>
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-4 gap-10 ksm-body text-sm">
          <div className="md:col-span-2">
            <div className="ksm-display text-3xl font-bold" style={goldText}>KSM</div>
            <div className="text-xs tracking-widest uppercase mt-1" style={{ color: `${PAPER}99` }}>Document Clearing · Dubai, UAE</div>
            <p className="font-light mt-4 max-w-sm leading-relaxed" style={{ color: `${PAPER}bb` }}>
              Business setup, freelance & golden visas, PRO services and document clearing — handled end to end from our Dubai office.
            </p>
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD }}>Services</div>
            {[["Business Setup", "setup"], ["Freelance Visa", "freelance"], ["Visa Services", "visas"], ["Document Clearing & PRO", "clearing"]].map(([x, r]) => (
              <button key={x} onClick={() => nav(r)} className="block py-1 text-left font-light" style={{ background: "none", border: "none", color: `${PAPER}bb`, cursor: "pointer" }}>{x}</button>
            ))}
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD }}>Company</div>
            {[["Pricing", "pricing"], ["About", "about"], ["Contact", "contact"]].map(([x, r]) => (
              <button key={x} onClick={() => nav(r)} className="block py-1 text-left font-light" style={{ background: "none", border: "none", color: `${PAPER}bb`, cursor: "pointer" }}>{x}</button>
            ))}
            <div className="mt-5 font-light" style={{ color: `${PAPER}bb` }}>
              <div>+971 56 884 6843</div>
              <div>info@ksm.ae</div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-5 mt-10 pt-6 ksm-body text-xs font-light flex flex-wrap justify-between gap-3" style={{ borderTop: `1px solid ${GOLD}14`, color: `${PAPER}77` }}>
          <span>© {new Date().getFullYear()} KSM Document Clearing, Dubai, UAE. All rights reserved.</span>
          <span>Licensed document clearing & business setup services.</span>
        </div>
      </footer>

      {/* WhatsApp float */}
      <a href="https://wa.me/971568846843" target="_blank" rel="noopener noreferrer" aria-label="Chat with KSM on WhatsApp"
        className="gold-btn ksm-body fixed bottom-6 right-6 flex items-center gap-2 px-5 py-3 text-sm font-semibold"
        style={{ background: `linear-gradient(120deg, ${GOLD_LIGHT}, ${GOLD})`, color: INK, border: "none", cursor: "pointer", zIndex: 60, borderRadius: 999, boxShadow: `0 8px 30px -8px ${GOLD}88`, textDecoration: "none" }}>
        💬 Chat with KSM
      </a>
    </div>
  );
}
