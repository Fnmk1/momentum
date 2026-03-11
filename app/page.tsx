import {
  features,
  steps,
  stats,
  screenshots,
  aiPoints,
  appleIcon,
  playIcon,
} from "@/app/lib/content";
import Image from "next/image";

function StoreButtons({ variant = "primary" }: { variant?: "primary" | "outlined" }) {
  const isPrimary = variant === "primary";
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href="#"
        className={
          isPrimary
            ? "flex items-center gap-3 bg-[#0B0D14] text-white rounded-full px-7 py-3.5 transition-all hover:bg-[#b06a52] shadow-[0_2px_12px_rgba(194,119,94,0.25)]"
            : "flex items-center gap-3 bg-[#0B0D14] text-white rounded-full px-7 py-3.5 transition-all hover:bg-[#b06a52] shadow-[0_2px_12px_rgba(194,119,94,0.25)]"
        }
      >
        <svg
          viewBox="0 0 384 512"
          fill="currentColor"
          className="w-[15px] h-[15px] shrink-0"
        >
          <path d={appleIcon} />
        </svg>
        <div className="text-right">
          <div className="text-[10px] leading-tight opacity-80">حمّل من</div>
          <div className="text-sm font-bold leading-tight">App Store</div>
        </div>
      </a>

      <a
        href="#"
        className="flex items-center gap-3 rounded-full border-2 border-[#8B6E4E]/30 px-7 py-3.5 text-[#2C2417] transition-colors hover:bg-[#8B6E4E]/[0.06] hover:border-[#8B6E4E]/50"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-[15px] h-[15px] shrink-0"
        >
          <path d={playIcon} />
        </svg>
        <div className="text-right">
          <div className="text-[10px] leading-tight text-[#8B6E4E]">حمّل من</div>
          <div className="text-sm font-bold leading-tight">Google Play</div>
        </div>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#FAF8F5] text-[#2C2417] min-h-screen">
      {/* ── Nav ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#FAF8F5]/85 backdrop-blur-xl border-b border-[#8B6E4E]/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image
              src="/Logo.png"
              alt="Momentum"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="font-bold text-lg tracking-tight text-[#2C2417]">
              Momentum
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-[#6B5D4F] transition-colors hover:text-[#2C2417]"
            >
              المميزات
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-[#6B5D4F] transition-colors hover:text-[#2C2417]"
            >
              كيف يعمل
            </a>
            <a
              href="#ai"
              className="text-sm text-[#6B5D4F] transition-colors hover:text-[#2C2417]"
            >
              المساعد الذكي
            </a>
          </div>

          <a
            href="#download"
            className="hidden sm:inline-flex bg-[#161e2b] text-white text-sm font-semibold rounded-full px-5 py-2.5 transition-all hover:bg-[#b06a52] shadow-[0_2px_8px_rgba(194,119,94,0.2)]"
          >
            حمّل التطبيق
          </a>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Subtle warm radial glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#C2775E]/[0.04] blur-[100px] pointer-events-none"
        />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#475569] mb-6">
              استمر في التقدم
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] mb-6 text-[#475569]">
              رحلتك نحو
              <br />
              <span className="text-[#161e2b]">أفضل نسخة منك</span>
            </h1>

            <p className="text-[#6B5D4F] text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              تطبيق عربي شامل لتتبع التغذية والتمارين بمساعدة الذكاء
              الاصطناعي. كل اللي تحتاجه في مكان واحد.
            </p>

            <div className="mb-14">
              <StoreButtons />
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-10">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-10">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#0B0D14]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#0B0D14] mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-10 bg-[#0B0D14]/15" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section id="features" className="scroll-mt-20 bg-[#F0EDE8]">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#334155] mb-3 tracking-wide">
              المميزات
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D14]">
              كل ما تحتاجه لتحقيق أهدافك
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-7 "
              >
                <h3 className="text-lg font-semibold mb-2 text-[#334155]">
                  {f.title}
                </h3>
                <p className="text-[#6B5D4F] leading-relaxed text-[15px]">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screenshots ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#C2775E] mb-3 tracking-wide">
            نظرة على التطبيق
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2417]">
            تجربة مصممة بعناية
          </h2>
        </div>

        <div className="flex justify-center gap-5 md:gap-6 overflow-x-auto pb-4">
          {screenshots.map((shot) => (
            <div
              key={shot.alt}
              className="shrink-0 rounded-2xl overflow-hidden border border-[#8B6E4E]/10 shadow-[0_4px_16px_rgba(44,36,23,0.08)] bg-white p-1.5"
            >
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={220}
                  height={440}
                  className="object-cover"
                />
              </div>
              <p className="text-center text-sm text-[#6B5D4F] mt-2.5 mb-1 font-medium">
                {shot.alt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works (Steps) ──────────────────────────── */}
      <section id="how-it-works" className="scroll-mt-20 bg-[#F0EDE8]">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#334155] mb-3 tracking-wide">
              كيف يعمل
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D14]">
              ابدأ في أقل من دقيقة
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-10 md:gap-14">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#334155] text-white flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-[0_4px_12px_rgba(194,119,94,0.25)]">
                  {s.num}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#2C2417]">
                  {s.title}
                </h3>
                <p className="text-[#6B5D4F] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Section ────────────────────────────────────── */}
      <section id="ai" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="bg-white rounded-2xl overflow-hidden">
            {/* Terracotta accent line */}
            <div className="h-0 bg-[#C2775E]" />

            <div className="flex flex-col md:flex-row items-start gap-10 md:gap-14 p-8 md:p-12">
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#334155] mb-3 tracking-wide">
                  المساعد الذكي
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#0B0D14]">
                  شريكك في اللياقة، ٢٤/٧
                </h2>
                <p className="text-[#6B5D4F] leading-relaxed mb-8 text-[15px]">
                  مساعد ذكي يفهم أهدافك ويساعدك توصل لها. اسأله أي شي عن
                  التغذية أو التمارين، صوّر وجبتك وخله يحللها، أو خله يبني لك
                  برنامج تمارين كامل.
                </p>

                <ul className="space-y-4">
                  {aiPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[#6B5D4F] leading-relaxed"
                    >
                      <svg
                        className="w-5 h-5 text-[#161e2bff] shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="shrink-0 w-[220px] self-center">
                <div className="relative aspect-[9/19.5] rounded-2xl overflow-hidden border border-[#8B6E4E]/10 shadow-[0_4px_16px_rgba(44,36,23,0.08)]">
                  <Image
                    src="/screenshot-chat.jpeg"
                    alt="المساعد الذكي"
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Download ────────────────────────────────── */}
      <section id="download" className="scroll-mt-20 bg-[#F0EDE8]">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#2C2417]">
            جاهز تبدأ رحلتك؟
          </h2>
          <p className="text-[#6B5D4F] text-lg mb-12 max-w-md mx-auto leading-relaxed">
            حمّل Momentum الحين وابدأ رحلتك نحو أفضل نسخة منك. مجاني بالكامل.
          </p>

          <div className="flex justify-center mb-8">
            <StoreButtons />
          </div>

          <p className="text-sm text-[#8B6E4E]/60">
            متوفر على iOS و Android
          </p>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-[#8B6E4E]/10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-2.5">
              <Image
                src="/Logo.png"
                alt="Momentum"
                width={22}
                height={22}
                className="rounded-md"
              />
              <span className="font-semibold text-[#2C2417]">Momentum</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#6B5D4F]">
              <a
                href="#features"
                className="transition-colors hover:text-[#2C2417]"
              >
                المميزات
              </a>
              <a
                href="#how-it-works"
                className="transition-colors hover:text-[#2C2417]"
              >
                كيف يعمل
              </a>
              <a href="#" className="transition-colors hover:text-[#2C2417]">
                سياسة الخصوصية
              </a>
              <a href="#" className="transition-colors hover:text-[#2C2417]">
                الشروط والأحكام
              </a>
              <a href="#" className="transition-colors hover:text-[#2C2417]">
                تواصل معنا
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-[#8B6E4E]/50">
            &copy; 2026 Momentum. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
}
