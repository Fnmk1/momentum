"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, use, useEffect, useRef, Fragment } from "react";
import {
  LEVEL_LABELS,
  getExerciseGif,
  getProgramsForCategory,
  getCategoryByTag,
  type Program,
  type CategoryTag,
  type TrainingLevel,
} from "@/app/lib/programs";

const SPLIT_LABELS: Record<string, string> = {
  full_body: "جسم كامل",
  upper_lower: "علوي / سفلي",
  push_pull_legs: "PPL",
  bro_split: "بروسبلت",
  "5x5": "5×5",
  circuit: "سيركت",
};

// ── Program Detail (expanded) ─────────────────────────────────────────────

function ProgramDetail({ program, onClose }: { program: Program; onClose: () => void }) {
  const [openDay, setOpenDay] = useState<number | null>(0);
  const [importing, setImporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"schedule" | "advices" | "supplements">("schedule");

  function handleImport() {
    if (importing) return;
    setImporting(true);
    window.location.href = `momentum://gym/import?id=${program.id}`;
    setTimeout(() => setImporting(false), 4000);
  }

  const TAB_LABELS = { schedule: "الجدول", advices: "نصائح", supplements: "مكملات" } as const;

  return (
    <div className="mt-6 pt-10 pb-10 border-t border-white/[0.06]">
      {/* Header */}
      <div className="flex items-start justify-between">
        <button
          onClick={onClose}
          className="text-[#86868b] hover:text-white transition-colors p-1 mt-1 active:scale-95"
          aria-label="close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-right">
          <h3
            className="text-white font-semibold text-[28px] leading-tight"
            style={{ letterSpacing: "-0.3px" }}
          >
            {program.nameAr}
          </h3>
          <p className="text-[#86868b] text-[14px] mt-1" style={{ letterSpacing: "-0.224px" }}>
            {program.name}
          </p>
        </div>
      </div>

      {/* Description */}
      <p
        className="text-[#cccccc] text-[17px] leading-relaxed text-right mt-5 max-w-2xl mr-0 ml-auto"
        style={{ letterSpacing: "-0.374px" }}
      >
        {program.descAr}
      </p>

      {/* Stats — plain text, no pills */}
      <p
        className="text-[#86868b] text-[14px] mt-4 text-right"
        style={{ letterSpacing: "-0.224px" }}
      >
        {program.daysPerWeek} أيام بالأسبوع · {program.durationWeeks} أسبوع · {program.timePerWorkout} دقيقة · {SPLIT_LABELS[program.workoutSplit] ?? program.workoutSplit}
      </p>

      {/* Tabs — text-only, underline active */}
      <div className="flex gap-6 mt-8 border-b border-white/[0.06] pb-0">
        {(["schedule", "advices", "supplements"] as const).map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-[14px] font-medium transition-colors relative ${
                isActive ? "text-white" : "text-[#86868b] hover:text-white"
              }`}
              style={{ letterSpacing: "-0.224px" }}
            >
              {TAB_LABELS[tab]}
              {isActive && (
                <span className="absolute bottom-0 inset-x-0 h-[2px] bg-white rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="mt-6">
        {activeTab === "schedule" && (
          <div>
            {program.schedule.map((day, i) => {
              const isOpen = openDay === i;
              return (
                <div key={i} className="border-t border-white/[0.06] first:border-0">
                  <button
                    onClick={() => setOpenDay(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-4 transition-colors group/day"
                  >
                    <svg
                      className={`w-4 h-4 text-[#86868b] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    <div className="flex items-center gap-3">
                      <span className="text-[#86868b] text-[12px]" style={{ letterSpacing: "-0.12px" }}>
                        {day.exercises.length} تمارين
                      </span>
                      <span
                        className="text-white text-[17px] font-semibold"
                        style={{ letterSpacing: "-0.374px" }}
                      >
                        {day.labelAr}
                      </span>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="pb-5">
                      {day.exercises.map((ex, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-4 py-2.5"
                        >
                          <img
                            src={getExerciseGif(ex.exerciseId)}
                            alt={ex.nameAr}
                            className="w-11 h-11 rounded-xl object-cover bg-[#1d1d1f] shrink-0"
                          />
                          <div className="flex-1 min-w-0 text-right">
                            <span
                              className="text-white text-[14px] font-medium block truncate"
                              style={{ letterSpacing: "-0.224px" }}
                            >
                              {ex.nameAr}
                            </span>
                            <span className="text-[#86868b] text-[12px]" style={{ letterSpacing: "-0.12px" }}>
                              {ex.nameEn}
                            </span>
                          </div>
                          <span
                            className="text-[#86868b] text-[14px] shrink-0 tabular-nums"
                            style={{ letterSpacing: "-0.224px" }}
                          >
                            {ex.sets} × {ex.reps}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "advices" && (
          <div>
            {program.advices.map((advice, i) => (
              <div key={i} className="py-5 border-t border-white/[0.06] first:border-0">
                <h4
                  className="text-white text-[17px] font-semibold text-right"
                  style={{ letterSpacing: "-0.374px" }}
                >
                  {advice.titleAr}
                </h4>
                <p
                  className="text-[#86868b] text-[14px] leading-relaxed mt-2 text-right"
                  style={{ letterSpacing: "-0.224px" }}
                >
                  {advice.bodyAr}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "supplements" && (
          <div>
            {program.supplements.map((supp, i) => (
              <div key={i} className="py-5 border-t border-white/[0.06] first:border-0 text-right">
                <div className="flex items-center gap-2 justify-end">
                  <span
                    className="text-white text-[17px] font-semibold"
                    style={{ letterSpacing: "-0.374px" }}
                  >
                    {supp.nameAr}
                  </span>
                </div>
                <p
                  className="text-white text-[14px] mt-1.5"
                  style={{ letterSpacing: "-0.224px" }}
                >
                  {supp.dosageAr}
                </p>
                <p
                  className="text-[#86868b] text-[14px] leading-relaxed mt-1"
                  style={{ letterSpacing: "-0.224px" }}
                >
                  {supp.notesAr}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Import CTA — Apple primary button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={handleImport}
          disabled={importing}
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-[17px] font-normal text-white transition-transform active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#0066cc", letterSpacing: "-0.374px" }}
        >
          {importing ? "جارٍ الاستيراد..." : "استيراد إلى Momentum"}
        </button>
      </div>
    </div>
  );
}

// ── Detail Inline (wraps ProgramDetail with col-span + scroll-into-view) ──

function DetailInline({ program, onClose }: { program: Program; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);
  return (
    <div ref={ref} className="col-span-full">
      <ProgramDetail program={program} onClose={onClose} />
    </div>
  );
}

// ── Program Card ─────────────────────────────────────────────────────────────

function ProgramCard({ program, onClick }: { program: Program; onClick: () => void }) {
  const heroExerciseId = program.schedule[0]?.exercises[0]?.exerciseId;
  const fallbackGif = heroExerciseId ? getExerciseGif(heroExerciseId) : undefined;
  const heroImage = program.image ?? `/programs/${program.id}.jpg`;

  return (
    <div
      onClick={onClick}
      className="cursor-pointer group transition-transform active:scale-[0.97]"
    >
      {/* Image — photography speaks, no overlays */}
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[#1d1d1f]">
        <img
          src={heroImage}
          alt={program.nameAr}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(e) => { if (fallbackGif) e.currentTarget.src = fallbackGif; }}
        />
      </div>

      {/* Content — clean typography, no chrome */}
      <div className="pt-4 pr-0.5">
        <h3
          className="text-white font-semibold text-[17px] leading-snug text-right"
          style={{ letterSpacing: "-0.374px" }}
        >
          {program.nameAr}
        </h3>

        <p
          className="text-[#86868b] text-[14px] mt-1.5 text-right"
          style={{ letterSpacing: "-0.224px" }}
        >
          {LEVEL_LABELS[program.trainingLevel]} · {program.daysPerWeek} أيام · {program.durationWeeks} أسبوع
        </p>

        <span
          className="inline-block mt-3 text-[#2997ff] text-[14px] font-medium"
          style={{ letterSpacing: "-0.224px" }}
        >
          عرض البرنامج ›
        </span>
      </div>
    </div>
  );
}

// ── Filter Chip ─────────────────────────────────────────────────────────────

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all active:scale-95 ${
        active
          ? "bg-white text-black"
          : "bg-white/[0.06] text-neutral-400 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryTag } = use(params);
  const category = getCategoryByTag(categoryTag);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [levelFilter, setLevelFilter] = useState<TrainingLevel | null>(null);
  const [daysFilter, setDaysFilter] = useState<number | null>(null);

  if (!category) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">الصفحة غير موجودة</h1>
          <Link href="/library" className="text-[#2997ff] hover:underline">العودة للمكتبة</Link>
        </div>
      </div>
    );
  }

  const allPrograms = getProgramsForCategory(category.tag as CategoryTag);
  const filteredPrograms = allPrograms.filter((p) => {
    if (levelFilter && p.trainingLevel !== levelFilter) return false;
    if (daysFilter && p.daysPerWeek !== daysFilter) return false;
    return true;
  });

  return (
    <div className="bg-black text-white min-h-screen" dir="rtl">
      {/* Hero */}
      <section className="pt-36 pb-10 px-6 max-w-5xl mx-auto">
        <Link href="/library" className="inline-flex items-center gap-2 text-[#2997ff] text-sm mb-6 hover:underline transition-colors">
          <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          مكتبة البرامج
        </Link>
        <h1 className="text-3xl md:text-[44px] font-semibold text-white leading-tight" style={{ letterSpacing: "-0.3px" }}>
          {category.nameAr}
        </h1>
        <p className="text-[17px] text-[#cccccc] mt-3 leading-relaxed max-w-xl" style={{ letterSpacing: "-0.37px" }}>
          {category.descAr}
        </p>
      </section>

      {/* Filters + count */}
      {allPrograms.length > 0 && (
        <section className="px-6 max-w-5xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-neutral-500 text-sm">{filteredPrograms.length} برنامج</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
            <span className="text-xs text-neutral-600 shrink-0">المستوى</span>
            {(["beginner", "intermediate", "advanced"] as TrainingLevel[]).map((level) => (
              <FilterChip
                key={level}
                label={LEVEL_LABELS[level]}
                active={levelFilter === level}
                onClick={() => setLevelFilter(levelFilter === level ? null : level)}
              />
            ))}
            <span className="w-px h-4 bg-white/[0.08] mx-1 shrink-0" />
            <span className="text-xs text-neutral-600 shrink-0">أيام</span>
            {[3, 4, 5, 6].map((days) => (
              <FilterChip
                key={days}
                label={`${days}`}
                active={daysFilter === days}
                onClick={() => setDaysFilter(daysFilter === days ? null : days)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Programs Grid */}
      <main className="px-6 max-w-5xl mx-auto pb-24">
        {filteredPrograms.length === 0 ? (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/[0.04] mb-6">
              <svg className="w-7 h-7 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {allPrograms.length === 0 ? "قريباً" : "لا توجد نتائج"}
            </h3>
            <p className="text-[17px] text-neutral-500" style={{ letterSpacing: "-0.37px" }}>
              {allPrograms.length === 0
                ? "نجهز برامج جديدة لهذا القسم. ترقّبوا التحديثات."
                : "جرّب تغيير الفلاتر."}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5 grid-flow-dense">
            {filteredPrograms.map((program) => (
              <Fragment key={program.id}>
                <ProgramCard
                  program={program}
                  onClick={() => setSelectedId(selectedId === program.id ? null : program.id)}
                />
                {selectedId === program.id && (
                  <DetailInline program={program} onClose={() => setSelectedId(null)} />
                )}
              </Fragment>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <div className="flex items-center gap-2">
            <Image src="/Logo (2).png" alt="Momentum" width={20} height={20} className="rounded-md" />
            <span className="text-white font-semibold">Momentum</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <Link href="/library" className="hover:text-white transition-colors">المكتبة</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">الخصوصية</Link>
            <Link href="/terms" className="hover:text-white transition-colors">الشروط</Link>
          </div>
          <span>&copy; 2026 Momentum. جميع الحقوق محفوظة.</span>
        </div>
      </footer>
    </div>
  );
}
