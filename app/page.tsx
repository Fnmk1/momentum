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
import { Card, CardContent } from "@/components/ui/card";
import { Features } from "@/components/ui/features-8"
export const Demo = () => {
    return <Features />
}
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
        className="flex items-center gap-3 bg-white text-[#0B0D14] rounded-full px-7 py-3.5 transition-all hover:bg-white/90 shadow-[0_2px_16px_rgba(255,255,255,0.08)]"
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
          <div className="text-sm font-bold leading-tight">App Store</div>
        </div>
      </a>

      <a
        href="#"
        className="flex items-center gap-3 rounded-full border-2 border-white/20 px-7 py-3.5 text-white transition-colors hover:bg-white/[0.08] hover:border-white/40"
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
          <div className="text-sm font-bold leading-tight">Google Play</div>
        </div>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#0B0D14] text-white min-h-screen">
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
            className="hidden sm:inline-flex bg-white text-[#0B0D14] text-sm font-semibold rounded-full px-5 py-2.5 transition-all hover:bg-white/90"
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

      {/* ── Screenshots Banner ────────────────────────────── */}
      <section className="py-24 md:py-32 overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <p className="text-sm font-semibold text-[#4D8AFF] mb-3 tracking-wide">
            نظرة على التطبيق
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            تجربة مصممة بعناية
          </h2>
        </div>

        {/* Marquee wrapper with gradient edge fades */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0B0D14] to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0B0D14] to-transparent z-10 pointer-events-none" />

          {/* Infinite marquee — duplicated screenshots for seamless loop */}
          <div className="animate-marquee flex items-end gap-6 w-max" dir="ltr">
            {[...screenshots, ...screenshots].map((shot, i) => (
              <div
                key={`${shot.alt}-${i}`}
                className={`group/shot shrink-0 w-[220px] md:w-[270px] transition-transform duration-500 ease-out ${
                  i % 2 === 0 ? '-translate-y-4' : 'translate-y-4'
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/[0.06] transition-all duration-300 group-hover/shot:border-[#4D8AFF]/30 group-hover/shot:scale-105 group-hover/shot:-translate-y-2 group-hover/shot:shadow-[0_8px_40px_rgba(77,138,255,0.15)]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={600}
                    height={1300}
                    className="w-full h-auto"
                  />
                  {/* Hover label overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-10 translate-y-full transition-transform duration-300 group-hover/shot:translate-y-0">
                    <p className="text-white text-sm font-medium text-center">{shot.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works (Steps) ──────────────────────────── */}
      <section
        id="how-it-works"
        className="group/features scroll-mt-20 bg-white/[0.02] border-t border-white/[0.06] relative overflow-hidden"
        onMouseMove={(e) => {
          const el = e.currentTarget
          el.style.setProperty('--mouse-x', `${e.clientX - el.getBoundingClientRect().left}px`)
          el.style.setProperty('--mouse-y', `${e.clientY - el.getBoundingClientRect().top}px`)
        }}
      >
        {/* Section-level mouse glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover/features:opacity-100"
          style={{
            background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(77,138,255,0.04), transparent 40%)',
          }}
        />
        <div className="relative z-10">
          <Features />
        </div>
      </section>

      {/* ── AI Section ────────────────────────────────────── */}
      <section id="ai" className="scroll-mt-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#4D8AFF] mb-3 tracking-wide">
              المساعد الذكي
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              رفـــــيق الـــدرب، ٢٤/٧
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Features list card */}
            <div className="flex flex-col gap-6 ">
              <Card className="flex-1 relative flex items-center justify-center">
                <CardContent className="p-8 items-center" >
                  <p className="text-neutral-400 leading-relaxed mb-8 text-[15px]">
                    مساعد ذكي يفهم أهدافك ويساعدك توصل لها. اسأله أي شي عن
                    التغذية أو التمارين، صوّر وجبتك وخله يحللها، أو خله يبني لك
                    برنامج تمارين كامل.
                  </p>

                  <div className="space-y-4">
                    {aiPoints.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover/item:bg-[#4D8AFF]/20">
                          <svg
                            className="w-4 h-6 text-[#4D8AFF]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-neutral-400 leading-relaxed pt-1">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Screenshot card */}
            <Card className="relative flex items-center justify-center p-8 md:p-12 min-h-[400px]">
              <CardContent className="p-0">
                <div className="relative w-[200px] md:w-[240px] mx-auto">
                  <div className="absolute -inset-8 bg-[#4D8AFF]/10 rounded-full blur-3xl" />
                  <div className="relative aspect-[9/19.5] rounded-[2rem] overflow-hidden border-2 border-white/[0.08] shadow-[0_8px_40px_rgba(77,138,255,0.2)]">
                    <Image
                      src="/Screenshots/1291@3x.png"
                      alt="المساعد الذكي"
                      fill
                      className="object-cover"
                      sizes="240px"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Contact / Sales ──────────────────────────────── */}
      <section id="contact" className="scroll-mt-20 bg-white/[0.02] border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#4D8AFF] mb-3 tracking-wide">
              تواصل معنا
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              نحب نسمع منك
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {/* Contact info cards — left column */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <Card>
                <CardContent className="p-6">
                  <a href="mailto:info@momentumsup.com" className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-[#4D8AFF]/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#4D8AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 mb-0.5">البريد الإلكتروني</p>
                      <span className="text-sm text-white">info@momentumsup.com</span>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <a href="https://wa.me/966554460527" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 mb-0.5">واتساب</p>
                      <span className="text-sm text-white" dir="ltr">+966 55 446 0527</span>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <a href="tel:+966554460527" className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 mb-0.5">اتصل بنا</p>
                      <span className="text-sm text-white" dir="ltr">+966 55 446 0527</span>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Social links */}
              <div className="flex items-center gap-3 pt-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                </a>
              </div>
            </div>

            {/* Form card — right column (no mouse glow, plain div) */}
            <div className="md:col-span-3 relative rounded-2xl border-2 border-white/[0.06] bg-card text-card-foreground shadow-sm overflow-hidden">
              <div className="p-8 md:p-10">
                <form
                  action="https://formsubmit.co/info@momentumsup.com"
                  method="POST"
                  className="space-y-5"
                >
                  <input type="hidden" name="_subject" value="رسالة جديدة من موقع Momentum" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://momentumsup.com/#contact" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-neutral-400 text-sm mb-2">الاسم</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="اسمك الكامل"
                        className="w-full bg-white/[0.04] text-white rounded-xl px-5 py-3.5 text-sm placeholder:text-neutral-600 border border-white/[0.06] focus:border-[#4D8AFF]/50 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-400 text-sm mb-2">البريد الإلكتروني</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="email@example.com"
                        dir="ltr"
                        className="w-full bg-white/[0.04] text-white rounded-xl px-5 py-3.5 text-sm placeholder:text-neutral-600 border border-white/[0.06] focus:border-[#4D8AFF]/50 focus:outline-none transition-colors text-right"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-neutral-400 text-sm mb-2">الموضوع</label>
                    <select
                      name="subject"
                      required
                      className="w-full bg-white/[0.04] text-white rounded-xl px-5 py-3.5 text-sm border border-white/[0.06] focus:border-[#4D8AFF]/50 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#0B0D14]">اختر الموضوع</option>
                      <option value="استفسار تجاري" className="bg-[#0B0D14]">استفسار تجاري</option>
                      <option value="شراكة" className="bg-[#0B0D14]">شراكة</option>
                      <option value="دعم فني" className="bg-[#0B0D14]">دعم فني</option>
                      <option value="أخرى" className="bg-[#0B0D14]">أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-neutral-400 text-sm mb-2">الرسالة</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full bg-white/[0.04] text-white rounded-xl px-5 py-3.5 text-sm placeholder:text-neutral-600 border border-white/[0.06] focus:border-[#4D8AFF]/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#4D8AFF] text-white font-semibold rounded-xl py-3.5 text-sm transition-all hover:bg-[#3b72e6] active:scale-[0.98]"
                  >
                    أرسل الرسالة
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Download ────────────────────────────────── */}
      <section id="download" className="scroll-mt-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
            جاهز تبدأ رحلتك؟
          </h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-md mx-auto leading-relaxed">
            حمّل Momentum الحين وابدأ رحلتك نحو أفضل نسخة منك. مجاني.
          </p>

          <div className="flex justify-center mb-8">
            <StoreButtons />
          </div>

          <p className="text-sm text-neutral-600">
            متوفر على iOS و Android
          </p>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
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

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
              <a
                href="#features"
                className="transition-colors hover:text-white"
              >
                المميزات
              </a>
              <a
                href="#how-it-works"
                className="transition-colors hover:text-white"
              >
                كيف يعمل
              </a>
              <a href="#contact" className="transition-colors hover:text-white">
                تواصل معنا
              </a>
              <a href="/privacy" className="transition-colors hover:text-white">
                سياسة الخصوصية
              </a>
              <a href="/terms" className="transition-colors hover:text-white">
                الشروط والأحكام
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-neutral-600">
            &copy; 2026 Momentum. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
}
