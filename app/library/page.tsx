import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, getProgramsForCategory } from "@/app/lib/programs";

export const metadata: Metadata = {
  title: "مكتبة برامج التمارين — Workout Library",
  description: "أكثر من ١٠ برامج تمارين احترافية من أشهر أبطال كمال الأجسام — Momentum Workout Library",
};

export default function LibraryPage() {
  return (
    <div className="bg-black text-white min-h-screen" dir="rtl">
      {/* ── Nav ── */}
      <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-5xl bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
        <div className="px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image src="/Logo (2).png" alt="Momentum" width={28} height={28} className="rounded-lg" />
            <span className="font-semibold text-lg tracking-tight text-white">Momentum</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-sm text-neutral-400 hover:text-white transition-colors">المميزات</Link>
            <Link href="/#how-it-works" className="text-sm text-neutral-400 hover:text-white transition-colors">كيف يعمل</Link>
            <Link href="/library" className="text-sm text-white font-medium transition-colors">مكتبة البرامج</Link>
            <Link href="/#contact" className="text-sm text-neutral-400 hover:text-white transition-colors">تواصل معنا</Link>
          </div>
          <Link href="/#download" className="hidden sm:inline-flex bg-white text-black text-sm font-semibold rounded-full px-5 py-2.5 transition-transform active:scale-95">
            حمّل التطبيق
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-40 pb-16 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-5 leading-tight text-white" style={{ letterSpacing: "-0.3px" }}>
          مكتبة برامج التمارين
        </h1>
        <p className="text-[#cccccc] text-[17px] leading-relaxed max-w-xl mx-auto" style={{ letterSpacing: "-0.37px" }}>
          اختر التصنيف المناسب لهدفك، واستعرض برامج احترافية تقدر تستوردها مباشرة إلى التطبيق.
        </p>
      </section>

      {/* ── Category Grid ── */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((category) => {
            const programCount = getProgramsForCategory(category.tag).length;
            return (
              <Link
                key={category.tag}
                href={`/library/${category.tag}`}
                className="group relative rounded-2xl overflow-hidden transition-transform active:scale-[0.97]"
              >
                {/* Full-bleed image */}
                <div className="relative h-56">
                  <img
                    src={category.image}
                    alt={category.nameAr}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Scrim for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  {/* Text over image */}
                  <div className="absolute bottom-0 right-0 left-0 p-5">
                    <h3 className="text-white font-semibold text-xl mb-0.5" style={{ letterSpacing: "-0.2px" }}>
                      {category.nameAr}
                    </h3>
                    <p className="text-white/60 text-xs mb-2">{category.nameEn}</p>
                    <p className="text-[#cccccc] text-sm leading-relaxed line-clamp-2" style={{ letterSpacing: "-0.37px" }}>
                      {category.descAr}
                    </p>
                    {programCount > 0 && (
                      <span className="inline-block mt-3 text-[#2997ff] text-xs font-medium">
                        {programCount} برنامج
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="text-center text-neutral-600 text-sm mt-12">
          استورد أي برنامج مباشرة إلى تطبيق Momentum · يتطلب تنزيل التطبيق أولاً
        </p>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <div className="flex items-center gap-2">
            <Image src="/Logo (2).png" alt="Momentum" width={20} height={20} className="rounded-md" />
            <span className="text-white font-semibold">Momentum</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">الخصوصية</Link>
            <Link href="/terms" className="hover:text-white transition-colors">الشروط</Link>
          </div>
          <span>&copy; 2026 Momentum. جميع الحقوق محفوظة.</span>
        </div>
      </footer>
    </div>
  );
}
