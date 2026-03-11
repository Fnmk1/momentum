import Image from "next/image";

const features = [
  {
    title: "تتبع السعرات",
    description: "سجّل وجباتك من قاعدة بيانات تضم أكثر من 18,000 طعام. امسح الباركود، ابحث بالاسم، أو صوّر وخلّ الذكاء الاصطناعي يسوّيها.",
  },
  {
    title: "تسجيل الوجبات",
    description: "تابع كل وجبة مع تفاصيل الماكروز. حجم الحصص، معلومات غذائية لحظية، وتسجيل بالصور.",
  },
  {
    title: "برامج التمارين",
    description: "أكثر من 1,500 تمرين مع برامج جاهزة. تتبع المجموعات والتكرارات والأوزان.",
  },
  {
    title: "تتبع العادات",
    description: "حدد أهدافك اليومية للماء والخطوات والتغذية. ابنِ سلاسل التزام يوم بعد يوم.",
  },
  {
    title: "مساعد ذكي",
    description: "تكلم مع Momentum AI — يقترح وجبات، ينصحك بتمارين، يحلل صور الأكل، ويجاوب أي سؤال.",
  },
  {
    title: "مجتمع الوصفات",
    description: "اكتشف وصفات من المجتمع. احفظ المفضلة، قيّم الوجبات، وشارك إبداعاتك.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-border-subtle">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image src="/Logo.png" alt="Momentum" width={26} height={26} />
            <span className="font-semibold text-lg tracking-tight">Momentum</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
            <a href="#features" className="hover:text-text-primary transition-colors">المميزات</a>
            <a href="#how-it-works" className="hover:text-text-primary transition-colors">كيف يعمل</a>
            <a href="#ai" className="hover:text-text-primary transition-colors">المساعد الذكي</a>
          </div>

          <a
            href="#download"
            className="px-5 py-2 rounded-full bg-text-primary text-bg text-sm font-medium hover:bg-text-primary/85 transition-colors"
          >
            حمّل التطبيق
          </a>
        </div>
      </nav>

      <main>
        {/* ── Hero ── */}
        <section className="min-h-screen flex items-center justify-center pt-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-text-muted text-sm tracking-widest uppercase mb-8 animate-fade-in-up opacity-0">
              استمر في التقدم
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.12] tracking-tight mb-6 animate-fade-in-up opacity-0 animate-delay-100">
              رحلتك الصحية،
              <br />
              بكل بساطة.
            </h1>

            <p className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12 animate-fade-in-up opacity-0 animate-delay-200">
              تتبع سعراتك، سجّل وجباتك، تابع تمارينك، وابنِ عادات صحية
              — مع مساعد ذكي يخليك دايم على المسار.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up opacity-0 animate-delay-300">
              <a href="#download" className="flex items-center gap-3 px-6 py-3 rounded-full bg-text-primary text-bg font-medium text-sm hover:bg-text-primary/85 transition-colors">
                <svg width="15" height="18" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 37.4 59.1 128.9 107.2 127.4 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-94.1zM244.8 8C265.4 30.5 280.4 62.1 276.4 96h-2.3c-21.4 0-42.6-17.2-55.7-38.5C205.1 36.4 192.4 4.7 196.5 0h2.3c17.6 0 35.1 2.7 46 8z" />
                </svg>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-wide opacity-50">حمّل من</div>
                  <div className="text-sm font-semibold -mt-0.5">App Store</div>
                </div>
              </a>
              <a href="#download" className="flex items-center gap-3 px-6 py-3 rounded-full border border-border text-text-primary font-medium text-sm hover:bg-bg-subtle transition-colors">
                <svg width="15" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
                </svg>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-wide opacity-50">حمّل من</div>
                  <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── Screenshots ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {[
                { src: "/screenshot-dashboard.jpeg", alt: "لوحة التحكم" },
                { src: "/screenshot-mealplan.jpeg", alt: "خطة الوجبات" },
                { src: "/screenshot-gym.jpeg", alt: "النادي" },
                { src: "/screenshot-chat.jpeg", alt: "المساعد الذكي" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-[9/19.5] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg shadow-black/[0.08]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 22vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="py-16 md:py-24 bg-bg-subtle">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              كل اللي تحتاجه في مكان واحد
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-14">
              Momentum يجمع لك تتبع التغذية، برامج التمارين، والمساعد الذكي
              في تطبيق واحد بدون تعقيد.
            </p>

            <div className="flex justify-center gap-14 md:gap-20">
              {[
                { value: "+18,000", label: "طعام" },
                { value: "+1,500", label: "تمرين" },
                { value: "24/7", label: "مساعد ذكي" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-text-muted text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section id="features" className="py-16 md:py-24 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">المميزات</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14">
              مصمم لنتائج حقيقية
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {features.map((f) => (
                <div key={f.title}>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="py-16 md:py-24 bg-bg-subtle scroll-mt-20">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">كيف يعمل</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14">
              ابدأ في أقل من دقيقة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
              {[
                {
                  num: "١",
                  title: "حدد هدفك",
                  description: "أخبرنا هدفك — تنزيل وزن، بناء عضل، أو ثبات. نحسب لك السعرات والماكروز المثالية.",
                },
                {
                  num: "٢",
                  title: "سجّل يومك",
                  description: "سجّل وجباتك وتمارينك وعاداتك خلال اليوم. كل ما سجّلت أكثر، صار التطبيق أذكى.",
                },
                {
                  num: "٣",
                  title: "شوف النتائج",
                  description: "تابع تقدمك بالرسوم البيانية. ابنِ سلاسل إنجاز واستمر في التقدم.",
                },
              ].map((s) => (
                <div key={s.num}>
                  <div className="text-5xl font-bold text-border mb-4">{s.num}</div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI Companion ── */}
        <section id="ai" className="py-16 md:py-24 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">المساعد الذكي</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
                  شريكك في اللياقة، ٢٤/٧
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  Momentum AI يفهم أهدافك، يتابع تقدمك، ويعطيك
                  نصائح عملية في أي وقت تحتاجها.
                </p>

                <div className="space-y-3 text-text-secondary text-[15px] leading-relaxed">
                  <p>— اقتراحات وجبات مبنية على ماكروزك المتبقية</p>
                  <p>— توصيات تمارين حسب جدولك ومستواك</p>
                  <p>— صوّر وجبتك واعرف السعرات فوراً</p>
                  <p>— جاوب على أي سؤال عن اللياقة والتغذية</p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-[220px] md:w-[240px] aspect-[9/19.5] rounded-3xl overflow-hidden shadow-xl shadow-black/[0.1]">
                  <Image
                    src="/screenshot-chat.jpeg"
                    alt="Momentum AI"
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Download CTA ── */}
        <section id="download" className="py-20 md:py-28 bg-bg-subtle scroll-mt-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
              جاهز تبدأ؟
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-md mx-auto">
              حمّل Momentum مجاناً وابدأ ابنِ عادات صحية اليوم.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#" className="flex items-center gap-3 px-6 py-3 rounded-full bg-text-primary text-bg font-medium text-sm hover:bg-text-primary/85 transition-colors">
                <svg width="15" height="18" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 37.4 59.1 128.9 107.2 127.4 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-94.1zM244.8 8C265.4 30.5 280.4 62.1 276.4 96h-2.3c-21.4 0-42.6-17.2-55.7-38.5C205.1 36.4 192.4 4.7 196.5 0h2.3c17.6 0 35.1 2.7 46 8z" />
                </svg>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-wide opacity-50">حمّل من</div>
                  <div className="text-sm font-semibold -mt-0.5">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 px-6 py-3 rounded-full border border-border text-text-primary font-medium text-sm hover:bg-bg transition-colors">
                <svg width="15" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
                </svg>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-wide opacity-50">حمّل من</div>
                  <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border-subtle">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-2.5">
              <Image src="/Logo.png" alt="Momentum" width={22} height={22} />
              <span className="font-semibold tracking-tight">Momentum</span>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-8 text-sm text-text-secondary">
              <a href="#features" className="hover:text-text-primary transition-colors">المميزات</a>
              <a href="#how-it-works" className="hover:text-text-primary transition-colors">كيف يعمل</a>
              <a href="#" className="hover:text-text-primary transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-text-primary transition-colors">الشروط والأحكام</a>
              <a href="mailto:support@momentumsup.com" className="hover:text-text-primary transition-colors">تواصل معنا</a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border-subtle">
            <p className="text-text-muted text-xs">
              &copy; {new Date().getFullYear()} Momentum. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
