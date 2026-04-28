"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";
import {
  LEVEL_LABELS,
  LEVEL_COLORS,
  getExerciseGif,
  getProgramsForCategory,
  getCategoryByTag,
  type Program,
  type CategoryTag,
  type TrainingLevel,
  type ScheduleDay,
} from "@/app/lib/programs";

// ── Schedule Day Accordion ──────────────────────────────────────────────────

function DayAccordion({ day, isOpen, onToggle }: { day: ScheduleDay; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-t border-white/[0.04]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-0 py-3.5 text-right transition-colors"
      >
        <svg
          className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <div className="text-right">
          <span className="text-white text-sm font-medium">{day.labelAr}</span>
          <span className="text-neutral-500 text-xs mr-3">{day.exercises.length} تمارين</span>
        </div>
      </button>
      {isOpen && (
        <div className="pb-4 space-y-1">
          {day.exercises.map((ex, j) => (
            <div key={j} className="flex items-center gap-3 py-2">
              <img
                src={getExerciseGif(ex.exerciseId)}
                alt={ex.nameAr}
                className="w-10 h-10 rounded-lg object-cover bg-neutral-900 shrink-0"
              />
              <div className="flex-1 text-right">
                <span className="text-neutral-200 text-sm block">{ex.nameAr}</span>
                <span className="text-neutral-500 text-xs">{ex.nameEn}</span>
              </div>
              <span className="text-neutral-400 text-xs shrink-0 tabular-nums">
                {ex.sets}×{ex.reps}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Program Detail ──────────────────────────────────────────────────────────

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

  const heroExerciseId = program.schedule[0]?.exercises[0]?.exerciseId;

  return (
    <div className="mt-6 rounded-2xl overflow-hidden bg-white/[0.02]">
      <div className="md:flex">
        {/* Hero GIF */}
        <div className="relative md:w-72 shrink-0 h-56 md:h-auto bg-neutral-950 overflow-hidden">
          {heroExerciseId && (
            <img
              src={getExerciseGif(heroExerciseId)}
              alt={program.nameAr}
              className="w-full h-full object-cover opacity-80"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
        </div>

        {/* Info */}
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between mb-4">
            <button onClick={onClose} className="text-neutral-500 hover:text-white transition-colors p-1" aria-label="close">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-right">
              <h3 className="text-white font-semibold text-xl mb-1" style={{ letterSpacing: "-0.2px" }}>
                {program.nameAr}
              </h3>
              <div className="flex items-center gap-2 justify-end mb-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${LEVEL_COLORS[program.trainingLevel].bg} ${LEVEL_COLORS[program.trainingLevel].text}`}>
                  {LEVEL_LABELS[program.trainingLevel]}
                </span>
              </div>
              <p className="text-neutral-500 text-xs">{program.name}</p>
            </div>
          </div>

          <p className="text-[#cccccc] text-sm leading-relaxed mb-5 text-right" style={{ letterSpacing: "-0.37px" }}>
            {program.descAr}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-5 mb-6 text-xs text-neutral-500 justify-end">
            <span>{program.daysPerWeek} أيام / أسبوع</span>
            <span className="w-px h-3 bg-white/10" />
            <span>{program.durationWeeks} أسبوع</span>
            <span className="w-px h-3 bg-white/10" />
            <span>{program.timePerWorkout} دقيقة</span>
            <span className="w-px h-3 bg-white/10" />
            <span>{program.schedule.length} أيام</span>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-5">
            {(["schedule", "advices", "supplements"] as const).map((tab) => {
              const labels = { schedule: "الجدول", advices: "نصائح", supplements: "مكملات" };
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all active:scale-95 ${
                    activeTab === tab
                      ? "bg-[#2997ff]/15 text-[#2997ff]"
                      : "bg-white/[0.04] text-neutral-400 hover:bg-white/[0.06]"
                  }`}
                >
                  {labels[tab]}
                </button>
              );
            })}
          </div>

          {/* Schedule tab */}
          {activeTab === "schedule" && (
            <div className="mb-6">
              {program.schedule.map((day, i) => (
                <DayAccordion
                  key={i}
                  day={day}
                  isOpen={openDay === i}
                  onToggle={() => setOpenDay(openDay === i ? null : i)}
                />
              ))}
            </div>
          )}

          {/* Advices tab */}
          {activeTab === "advices" && (
            <div className="space-y-4 mb-6">
              {program.advices.map((advice, i) => (
                <div key={i}>
                  <h4 className="text-white text-sm font-medium mb-1">{advice.titleAr}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{advice.bodyAr}</p>
                </div>
              ))}
            </div>
          )}

          {/* Supplements tab */}
          {activeTab === "supplements" && (
            <div className="space-y-3 mb-6">
              {program.supplements.map((supp, i) => {
                const priorityColors = {
                  essential: "text-emerald-400",
                  highly_recommended: "text-amber-400",
                  optional: "text-neutral-400",
                };
                const priorityLabels = {
                  essential: "أساسي",
                  highly_recommended: "مهم",
                  optional: "اختياري",
                };
                return (
                  <div key={i} className="py-2 border-t border-white/[0.04] first:border-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs ${priorityColors[supp.priority]}`}>
                        {priorityLabels[supp.priority]}
                      </span>
                      <span className="text-white text-sm font-medium">{supp.nameAr}</span>
                    </div>
                    <p className="text-neutral-500 text-xs text-right">{supp.dosageAr}</p>
                    <p className="text-neutral-400 text-xs text-right mt-1">{supp.notesAr}</p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Import button */}
          <button
            onClick={handleImport}
            disabled={importing}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#0066cc] text-white text-sm font-medium transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {importing ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                جارٍ الاستيراد...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                استيراد البرنامج
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Program Card ────────────────────────────────────────────────────────────

function ProgramCard({ program, isSelected, onClick }: { program: Program; isSelected: boolean; onClick: () => void }) {
  const heroExerciseId = program.schedule[0]?.exercises[0]?.exerciseId;

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer group relative rounded-2xl overflow-hidden flex flex-col transition-transform active:scale-[0.97] ${
        isSelected ? "ring-2 ring-[#2997ff]/50" : ""
      }`}
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-neutral-950 overflow-hidden">
        {heroExerciseId && (
          <img
            src={getExerciseGif(heroExerciseId)}
            alt={program.nameAr}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium ${LEVEL_COLORS[program.trainingLevel].bg} ${LEVEL_COLORS[program.trainingLevel].text}`}>
          {LEVEL_LABELS[program.trainingLevel]}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 bg-white/[0.02] flex flex-col flex-1">
        <h3 className="text-white font-semibold text-lg mb-1" style={{ letterSpacing: "-0.2px" }}>
          {program.nameAr}
        </h3>
        <p className="text-neutral-500 text-xs mb-3">{program.name}</p>
        <p className="text-[#cccccc] text-sm leading-relaxed mb-4 flex-1 line-clamp-2" style={{ letterSpacing: "-0.37px" }}>
          {program.descAr}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-neutral-500">
          <span>{program.daysPerWeek} أيام</span>
          <span className="w-px h-3 bg-white/10" />
          <span>{program.durationWeeks} أسبوع</span>
          <span className="w-px h-3 bg-white/10" />
          <span>{program.timePerWorkout} د</span>
        </div>
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
          ? "bg-[#2997ff]/15 text-[#2997ff]"
          : "bg-white/[0.04] text-neutral-400 hover:bg-white/[0.06]"
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

  const selectedProgram = filteredPrograms.find((p) => p.id === selectedId) ?? null;

  return (
    <div className="bg-black text-white min-h-screen" dir="rtl">
      {/* Nav */}
      <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-5xl bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
        <div className="px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image src="/Logo (2).png" alt="Momentum" width={28} height={28} className="rounded-lg" />
            <span className="font-semibold text-lg tracking-tight text-white">Momentum</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-neutral-400 hover:text-white transition-colors">الرئيسية</Link>
            <Link href="/library" className="text-sm text-white font-medium transition-colors">مكتبة البرامج</Link>
          </div>
          <Link href="/#download" className="hidden sm:inline-flex bg-white text-black text-sm font-semibold rounded-full px-5 py-2.5 transition-transform active:scale-95">
            حمّل التطبيق
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-12 px-6 max-w-5xl mx-auto">
        <Link href="/library" className="inline-flex items-center gap-2 text-[#2997ff] text-sm mb-6 hover:underline transition-colors">
          <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          مكتبة البرامج
        </Link>
        <h1 className="text-3xl md:text-[40px] font-semibold text-white leading-tight" style={{ letterSpacing: "-0.3px" }}>
          {category.nameAr}
        </h1>
        <p className="text-[17px] text-[#cccccc] mt-3 leading-relaxed max-w-xl" style={{ letterSpacing: "-0.37px" }}>
          {category.descAr}
        </p>
      </section>

      {/* Filters */}
      {allPrograms.length > 0 && (
        <section className="px-6 max-w-5xl mx-auto mb-10">
          <div className="flex items-center gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
            <span className="text-xs text-neutral-500 shrink-0">المستوى:</span>
            {(["beginner", "intermediate", "advanced"] as TrainingLevel[]).map((level) => (
              <FilterChip
                key={level}
                label={LEVEL_LABELS[level]}
                active={levelFilter === level}
                onClick={() => setLevelFilter(levelFilter === level ? null : level)}
              />
            ))}
            <span className="w-px h-5 bg-white/10 mx-2 shrink-0" />
            <span className="text-xs text-neutral-500 shrink-0">أيام/أسبوع:</span>
            {[3, 4, 5, 6].map((days) => (
              <FilterChip
                key={days}
                label={`${days} أيام`}
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
            <h3 className="text-xl font-semibold text-white mb-2">قريباً</h3>
            <p className="text-[17px] text-neutral-500" style={{ letterSpacing: "-0.37px" }}>
              نجهز برامج جديدة لهذا القسم. ترقّبوا التحديثات.
            </p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPrograms.map((program) => (
                <ProgramCard
                  key={program.id}
                  program={program}
                  isSelected={selectedId === program.id}
                  onClick={() => setSelectedId(selectedId === program.id ? null : program.id)}
                />
              ))}
            </div>

            {selectedProgram && (
              <ProgramDetail
                program={selectedProgram}
                onClose={() => setSelectedId(null)}
              />
            )}
          </>
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
