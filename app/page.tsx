"use client";

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
import { useEffect, useRef, useState } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

function CountUp({ value, duration = 4000 }: { value: string; duration?: number }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const cleaned = value.replace(/[+,]/g, "");
          const num = parseInt(cleaned, 10);

          if (isNaN(num) || value.includes("/")) {
            setDisplay(value);
            return;
          }

          const prefix = value.startsWith("+") ? "+" : "";
          const hasComma = value.includes(",");
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * num);
            const formatted = hasComma ? current.toLocaleString("en-US") : String(current);
            setDisplay(prefix + formatted);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="inline-grid" style={{ fontVariantNumeric: "tabular-nums" }}>
      <span className="col-start-1 row-start-1 invisible">{value}</span>
      <span className="col-start-1 row-start-1">{display}</span>
    </span>
  );
}

function StoreButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href="#"
        className="flex items-center gap-3 bg-white text-[#1d1d1f] rounded-full px-7 py-3.5 transition-transform active:scale-95"
      >
        <svg
          viewBox="0 0 384 512"
          fill="currentColor"
          className="w-[15px] h-[15px] shrink-0"
        >
          <path d={appleIcon} />
        </svg>
        <div className="text-right">
          <div className="text-[10px] leading-tight opacity-60">حمّل من</div>
          <div className="text-sm font-semibold leading-tight">App Store</div>
        </div>
      </a>

      <a
        href="#"
        className="flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-white transition-transform active:scale-95"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-[15px] h-[15px] shrink-0"
        >
          <path d={playIcon} />
        </svg>
        <div className="text-right">
          <div className="text-[10px] leading-tight text-white/50">حمّل من</div>
          <div className="text-sm font-semibold leading-tight">Google Play</div>
        </div>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      {/* ── Nav ─────────────────────────────────────────────── */}
      <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-5xl bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
        <div className="px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image
              src="/Logo (2).png"
              alt="Momentum"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="font-bold text-lg tracking-tight text-white">
              Momentum
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              المميزات
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              كيف يعمل
            </a>
            <a
              href="#ai"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              المساعد الذكي
            </a>
            <a
              href="/library"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              مكتبة البرامج
            </a>
            <a
              href="#contact"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              تواصل معنا
            </a>
          </div>

          <a
            href="#download"
            className="hidden sm:inline-flex bg-white text-black text-sm font-semibold rounded-full px-5 py-2.5 transition-transform active:scale-95"
          >
            حمّل التطبيق
          </a>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section
        className="group/hero min-h-screen relative overflow-hidden"
        onMouseMove={(e) => {
          const el = e.currentTarget
          el.style.setProperty('--mouse-x', `${e.clientX}px`)
          el.style.setProperty('--mouse-y', `${e.clientY}px`)
        }}
      >
        <Spotlight
          className="-top-40 right-0 md:right-30 md:-top-20"
          fill="white"
        />

        {/* Mouse-follow spotlight glow — behind the robot */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300 group-hover/hero:opacity-100"
          style={{
            background: 'radial-gradient(2080px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.02), transparent 45%)',
          }}
        />

        <div className="flex flex-col md:flex-row h-screen pt-16">
          {/* Text content */}
          <div className="flex-1 relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-34 py-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                رحلتك نحو
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                أفضل نسخة منك
              </span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
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
                    <div className="text-2xl md:text-3xl font-bold text-[#4D8AFF]">
                      <CountUp value={stat.value} />
                    </div>
                    <div className="text-sm text-[#4D8AFF]/70 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-10 bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3D Spline scene — above the glow so robot has glow behind it */}
          <div className="flex-1 relative z-10 min-h-[300px] md:min-h-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BELOW: Redesigned following Apple DESIGN.md principles
          — Full-bleed alternating tiles
          — Single blue accent (#0066cc)
          — No card borders/shadows (only product shadow on mockups)
          — Generous whitespace, centered stacks
          — Tight tracking on display type
          ══════════════════════════════════════════════════════ */}

      {/* ── App Showcase ─────────────────────────────────────── */}
      <section className="py-20 md:py-32">
        {/* Screenshots — staggered, product-shadow on mockups */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-end gap-8 w-max px-8" dir="ltr">
            {[...screenshots, ...screenshots].map((shot, i) => (
              <div
                key={`${shot.alt}-${i}`}
                className={`shrink-0 w-[200px] md:w-[260px] ${i % 2 === 0 ? '-translate-y-3' : 'translate-y-3'}`}
              >
                <div
                  className="rounded-[20px] overflow-hidden"
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.22) 3px 5px 30px 0px' }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={600}
                    height={1300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section id="features" className="scroll-mt-20">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="py-20 md:py-28 border-t border-white/[0.04]"
          >
            <div className={`max-w-5xl mx-auto px-6 flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}>
              {/* Screenshot */}
              <div className="shrink-0 w-[200px] md:w-[240px]">
                <div
                  className="rounded-[24px] overflow-hidden"
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.22) 3px 5px 30px 0px' }}
                >
                  <Image
                    src={feature.screenshot}
                    alt={feature.title}
                    width={600}
                    height={1300}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-right">
                <h3
                  className="text-2xl md:text-[34px] font-semibold text-white leading-snug"
                  style={{ letterSpacing: '-0.37px' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[17px] text-[#cccccc] mt-4 leading-relaxed max-w-xl"
                  style={{ letterSpacing: '-0.37px' }}
                >
                  {feature.desc}
                </p>
                <div className="mt-8">
                  <a
                    href="#download"
                    className="inline-flex items-center text-[#2997ff] text-[17px] font-normal transition-transform active:scale-95"
                    style={{ letterSpacing: '-0.37px' }}
                  >
                    اكتشف المزيد
                    <svg className="w-4 h-4 mr-1 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section id="how-it-works" className="scroll-mt-20 py-20 md:py-32 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2
              className="text-3xl md:text-[40px] font-semibold text-white leading-tight"
              style={{ letterSpacing: '-0.3px' }}
            >
              كيف يعمل
            </h2>
            <p
              className="text-[17px] text-[#cccccc] mt-4 leading-relaxed"
              style={{ letterSpacing: '-0.37px' }}
            >
              ثلاث خطوات بسيطة تبدأ بها رحلتك.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 md:gap-12">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0066cc]/10 mb-6">
                  <span className="text-[#2997ff] text-xl font-semibold">{step.num}</span>
                </div>
                <h3
                  className="text-[21px] font-semibold text-white mb-3"
                  style={{ letterSpacing: '0.23px' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[17px] text-[#cccccc] leading-relaxed"
                  style={{ letterSpacing: '-0.37px' }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Section ───────────────────────────────────────── */}
      <section id="ai" className="scroll-mt-20 py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-white/[0.02] border border-white/[0.06] p-10 md:p-16">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-[40px] font-semibold text-white leading-tight"
                style={{ letterSpacing: '-0.3px' }}
              >
                رفيق الدرب، ٢٤/٧
              </h2>
              <p
                className="text-[17px] text-[#cccccc] mt-4 leading-relaxed max-w-lg mx-auto"
                style={{ letterSpacing: '-0.37px' }}
              >
                مساعد ذكي يفهم أهدافك ويساعدك توصل لها. اسأله أي شي عن
                التغذية أو التمارين.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20">
              {/* Screenshot with product shadow */}
              <div className="shrink-0 w-[200px] md:w-[240px]">
                <div
                  className="rounded-[24px] overflow-hidden"
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.22) 3px 5px 30px 0px' }}
                >
                  <Image
                    src="/Screenshots/1292@3x.png"
                    alt="المساعد الذكي"
                    width={600}
                    height={1300}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Features list */}
              <div className="flex-1 space-y-6">
                {aiPoints.map((point) => (
                  <div key={point} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#2997ff]/10 flex items-center justify-center shrink-0 mt-1">
                      <svg
                        className="w-2.5 h-2.5 text-[#2997ff]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span
                      className="text-[17px] text-[#cccccc] leading-relaxed"
                      style={{ letterSpacing: '-0.37px' }}
                    >
                      {point}
                    </span>
                  </div>
                ))}

                <div className="pt-4">
                  <a
                    href="#download"
                    className="inline-flex items-center rounded-full bg-[#0066cc] text-white px-6 py-3 text-[17px] font-normal transition-transform active:scale-95"
                  >
                    جرّب المساعد الذكي
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-20 bg-black py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-[40px] font-semibold text-white leading-tight"
              style={{ letterSpacing: '-0.3px' }}
            >
              نحب نسمع منك
            </h2>
            <p
              className="text-[17px] text-[#cccccc] mt-4 leading-relaxed"
              style={{ letterSpacing: '-0.37px' }}
            >
              تواصل معنا لأي استفسار أو اقتراح.
            </p>
          </div>

          {/* Contact links row */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <a
              href="mailto:info@momentumsup.com"
              className="flex items-center gap-3 text-[#2997ff] text-[17px] transition-transform active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              info@momentumsup.com
            </a>
            <a
              href="https://wa.me/966554460527"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#2997ff] text-[17px] transition-transform active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span dir="ltr">+966 55 446 0527</span>
            </a>
          </div>

          {/* Form — clean, no card wrapper */}
          <form
            action="https://formsubmit.co/info@momentumsup.com"
            method="POST"
            className="space-y-5 max-w-xl mx-auto"
          >
            <input type="hidden" name="_subject" value="رسالة جديدة من موقع Momentum" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://momentumsup.com/#contact" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[14px] text-[#cccccc] mb-2 font-normal" style={{ letterSpacing: '-0.22px' }}>الاسم</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="اسمك الكامل"
                  className="w-full bg-white/[0.04] text-white rounded-xl px-5 py-3.5 text-[17px] placeholder:text-[#555] focus:outline-none focus:ring-2 focus:ring-[#0066cc] transition-shadow"
                  style={{ letterSpacing: '-0.37px' }}
                />
              </div>
              <div>
                <label className="block text-[14px] text-[#cccccc] mb-2 font-normal" style={{ letterSpacing: '-0.22px' }}>البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  dir="ltr"
                  className="w-full bg-white/[0.04] text-white rounded-xl px-5 py-3.5 text-[17px] placeholder:text-[#555] focus:outline-none focus:ring-2 focus:ring-[#0066cc] transition-shadow text-right"
                  style={{ letterSpacing: '-0.37px' }}
                />
              </div>
            </div>
            <div>
              <label className="block text-[14px] text-[#cccccc] mb-2 font-normal" style={{ letterSpacing: '-0.22px' }}>الموضوع</label>
              <select
                name="subject"
                required
                className="w-full bg-white/[0.04] text-white rounded-xl px-5 py-3.5 text-[17px] focus:outline-none focus:ring-2 focus:ring-[#0066cc] transition-shadow appearance-none"
                style={{ letterSpacing: '-0.37px' }}
              >
                <option value="" className="bg-black">اختر الموضوع</option>
                <option value="استفسار تجاري" className="bg-black">استفسار تجاري</option>
                <option value="شراكة" className="bg-black">شراكة</option>
                <option value="دعم فني" className="bg-black">دعم فني</option>
                <option value="أخرى" className="bg-black">أخرى</option>
              </select>
            </div>
            <div>
              <label className="block text-[14px] text-[#cccccc] mb-2 font-normal" style={{ letterSpacing: '-0.22px' }}>الرسالة</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="اكتب رسالتك هنا..."
                className="w-full bg-white/[0.04] text-white rounded-xl px-5 py-3.5 text-[17px] placeholder:text-[#555] focus:outline-none focus:ring-2 focus:ring-[#0066cc] transition-shadow resize-none"
                style={{ letterSpacing: '-0.37px' }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0066cc] text-white font-normal rounded-full py-3.5 text-[17px] transition-transform active:scale-95"
            >
              أرسل الرسالة
            </button>
          </form>
        </div>
      </section>

      {/* ── CTA / Download ───────────────────────────────────── */}
      <section id="download" className="scroll-mt-20 bg-black py-24 md:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-[40px] font-semibold text-white leading-tight mb-5"
            style={{ letterSpacing: '-0.3px' }}
          >
            جاهز تبدأ رحلتك؟
          </h2>
          <p
            className="text-[17px] text-[#cccccc] mb-12 max-w-md mx-auto leading-relaxed"
            style={{ letterSpacing: '-0.37px' }}
          >
            حمّل Momentum الحين وابدأ رحلتك نحو أفضل نسخة منك. مجاني.
          </p>

          <div className="flex justify-center mb-8">
            <StoreButtons />
          </div>

          <p className="text-[14px] text-[#7a7a7a]" style={{ letterSpacing: '-0.22px' }}>
            متوفر على iOS و Android
          </p>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="bg-black py-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Links row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-10">
            <div className="flex items-center gap-2.5">
              <Image
                src="/Logo (2).png"
                alt="Momentum"
                width={22}
                height={22}
                className="rounded-md"
              />
              <span className="font-semibold text-white">Momentum</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <a href="#features" className="text-[14px] text-[#cccccc] transition-colors hover:text-white" style={{ letterSpacing: '-0.22px' }}>
                المميزات
              </a>
              <a href="#how-it-works" className="text-[14px] text-[#cccccc] transition-colors hover:text-white" style={{ letterSpacing: '-0.22px' }}>
                كيف يعمل
              </a>
              <a href="#contact" className="text-[14px] text-[#cccccc] transition-colors hover:text-white" style={{ letterSpacing: '-0.22px' }}>
                تواصل معنا
              </a>
              <a href="/privacy" className="text-[14px] text-[#cccccc] transition-colors hover:text-white" style={{ letterSpacing: '-0.22px' }}>
                سياسة الخصوصية
              </a>
              <a href="/terms" className="text-[14px] text-[#cccccc] transition-colors hover:text-white" style={{ letterSpacing: '-0.22px' }}>
                الشروط والأحكام
              </a>
            </div>
          </div>

          {/* Social + legal */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.06]">
            <div className="flex items-center gap-5">
              <a href="#" className="text-[#7a7a7a] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="text-[#7a7a7a] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="#" className="text-[#7a7a7a] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
              </a>
            </div>
            <p className="text-[12px] text-[#7a7a7a]" style={{ letterSpacing: '-0.12px' }}>
              &copy; 2026 Momentum. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
