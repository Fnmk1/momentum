import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, getProgramsForCategory } from "@/app/lib/programs";

export const metadata: Metadata = {
  title: "مكتبة برامج التمارين — Workout Library",
  description: "أكثر من ١٠ برامج تمارين احترافية — Momentum Workout Library",
};

export default function LibraryPage() {
  return (
    <div className="bg-black text-white min-h-screen" dir="rtl">
      {/* ── Hero ── */}
      <section className="pt-40 pb-12 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight text-white" style={{ letterSpacing: "-0.3px" }}>
          مكتبة برامج التمارين
        </h1>
        <p className="text-[#cccccc] text-[17px] leading-relaxed max-w-xl mx-auto" style={{ letterSpacing: "-0.37px" }}>
          اختر التصنيف المناسب لهدفك، واستعرض برامج احترافية تقدر تستوردها مباشرة إلى التطبيق.
        </p>
      </section>

      {/* ── Category Grid ── */}
      <main className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((category) => {
            const programCount = getProgramsForCategory(category.tag).length;
            return (
              <Link
                key={category.tag}
                href={`/library/${category.tag}`}
                className="group relative overflow-hidden aspect-[3/4] transition-transform active:scale-[0.95]"
                style={{ borderRadius: 18 }}
              >
                <img
                  src={category.image}
                  alt={category.nameAr}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3
                    className="text-white font-semibold text-[17px] leading-snug"
                    style={{ letterSpacing: "-0.374px" }}
                  >
                    {category.nameAr}
                  </h3>
                  {programCount > 0 ? (
                    <p
                      className="text-[#2997ff] text-[14px] mt-1"
                      style={{ letterSpacing: "-0.224px" }}
                    >
                      {programCount} برنامج ›
                    </p>
                  ) : (
                    <p
                      className="text-[#86868b] text-[14px] mt-1"
                      style={{ letterSpacing: "-0.224px" }}
                    >
                      قريباً
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
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
