"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Level = "all" | "beginner" | "intermediate" | "advanced";

const LEVEL_LABELS: Record<Level, string> = {
  all: "الكل",
  beginner: "مبتدئ",
  intermediate: "متوسط",
  advanced: "متقدم",
};

const LEVEL_COLORS: Record<string, { bg: string; text: string }> = {
  beginner:     { bg: "bg-emerald-500/10", text: "text-emerald-400" },
  intermediate: { bg: "bg-amber-500/10",   text: "text-amber-400"   },
  advanced:     { bg: "bg-red-500/10",     text: "text-red-400"     },
};

const PROGRAMS = [
  {
    id: "arnold-golden-six",
    name: "Arnold's Golden Six",
    nameAr: "الستة الذهبية",
    creator: "Arnold Schwarzenegger",
    desc: "روتين جسم كامل بسيط بـ٦ تمارين مركبة فقط. مثالي لبناء أساس قوي.",
    days: 3, weeks: 12, level: "beginner", routines: 1, color: "#f59e0b",
    gifId: "W9pFVv1",
  },
  {
    id: "arnold-split",
    name: "Arnold Split",
    nameAr: "تقسيم أرنولد",
    creator: "Arnold Schwarzenegger",
    desc: "تقسيم ٦ أيام بحجم عالي يستهدف كل مجموعة عضلية مرتين أسبوعياً.",
    days: 6, weeks: 8, level: "advanced", routines: 3, color: "#ef4444",
    gifId: "EIeI8Vf",
  },
  {
    id: "blood-and-guts",
    name: "Blood and Guts",
    nameAr: "دم وعرق",
    creator: "Dorian Yates",
    desc: "تدريب عالي الشدة. مجموعة واحدة لكل تمرين حتى الفشل التام. جلسات قصيرة وقاسية.",
    days: 4, weeks: 6, level: "advanced", routines: 4, color: "#dc2626",
    gifId: "GrO65fd",
  },
  {
    id: "ronnie-coleman",
    name: "Ronnie Coleman Split",
    nameAr: "تقسيم روني كولمان",
    creator: "Ronnie Coleman",
    desc: "تمرّن مثل بطل مستر أولمبيا ٨ مرات. أوزان ثقيلة جداً مع حجم عالي.",
    days: 6, weeks: 12, level: "advanced", routines: 4, color: "#7c3aed",
    gifId: "ila4NZS",
  },
  {
    id: "stronglifts-5x5",
    name: "StrongLifts 5×5",
    nameAr: "سترونق لفتس ٥×٥",
    creator: "Mehdi Hadim",
    desc: "أشهر برنامج قوة للمبتدئين. ٥ تمارين فقط، ٣ أيام أسبوعياً. زد الوزن كل جلسة.",
    days: 3, weeks: 12, level: "beginner", routines: 2, color: "#3b82f6",
    gifId: "W9pFVv1",
  },
  {
    id: "starting-strength",
    name: "Starting Strength",
    nameAr: "بداية القوة",
    creator: "Mark Rippetoe",
    desc: "البرنامج الكلاسيكي للمبتدئين بالبار. ٣×٥ على التمارين الأساسية مع زيادة تدريجية.",
    days: 3, weeks: 12, level: "beginner", routines: 2, color: "#059669",
    gifId: "W9pFVv1",
  },
  {
    id: "phul",
    name: "PHUL",
    nameAr: "قوة + تضخيم علوي/سفلي",
    creator: "Brandon Campbell",
    desc: "قوة وتضخيم علوي/سفلي. أوزان ثقيلة أيام القوة، تكرارات عالية أيام التضخيم.",
    days: 4, weeks: 8, level: "intermediate", routines: 4, color: "#f97316",
    gifId: "EIeI8Vf",
  },
  {
    id: "phat",
    name: "PHAT",
    nameAr: "فات - قوة وتضخيم",
    creator: "Dr. Layne Norton",
    desc: "تدريب تكيّفي للقوة والتضخيم. ٥ أيام مع مجموعات سريعة تربط بين القوة والتضخيم.",
    days: 5, weeks: 8, level: "intermediate", routines: 5, color: "#8b5cf6",
    gifId: "eZyBC3j",
  },
  {
    id: "reddit-ppl",
    name: "Reddit PPL",
    nameAr: "دفع سحب أرجل",
    creator: "u/Metallicadpa",
    desc: "أشهر برنامج دفع سحب أرجل على الإنترنت. ٦ أيام مع زيادة تدريجية. كل عضلة مرتين أسبوعياً.",
    days: 6, weeks: 12, level: "beginner", routines: 3, color: "#06b6d4",
    gifId: "ila4NZS",
  },
  {
    id: "bro-split",
    name: "Classic Bro Split",
    nameAr: "التقسيم الكلاسيكي",
    creator: "Traditional",
    desc: "مجموعة عضلية واحدة يومياً، ٥ أيام أسبوعياً. حجم عالي مع أسبوع كامل راحة لكل عضلة.",
    days: 5, weeks: 8, level: "intermediate", routines: 5, color: "#ec4899",
    gifId: "EIeI8Vf",
  },
];

export default function LibraryPage() {
  const [filter, setFilter] = useState<Level>("all");

  const filtered = filter === "all"
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.level === filter);

  return (
    <div className="bg-[#0B0D14] text-white min-h-screen" dir="rtl">
      {/* ── Nav ── */}
      <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-5xl bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
        <div className="px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image src="/Logo (2).png" alt="Momentum" width={28} height={28} className="rounded-lg" />
            <span className="font-bold text-lg tracking-tight text-white">Momentum</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features"     className="text-sm text-neutral-400 hover:text-white transition-colors">المميزات</Link>
            <Link href="/#how-it-works" className="text-sm text-neutral-400 hover:text-white transition-colors">كيف يعمل</Link>
            <Link href="/library"       className="text-sm text-white font-medium transition-colors">مكتبة البرامج</Link>
            <Link href="/#contact"      className="text-sm text-neutral-400 hover:text-white transition-colors">تواصل معنا</Link>
          </div>
          <Link href="/#download" className="hidden sm:inline-flex bg-white text-[#0B0D14] text-sm font-semibold rounded-full px-5 py-2.5 transition-all hover:bg-white/90">
            حمّل التطبيق
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-40 pb-16 px-6 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#4D8AFF]/10 border border-[#4D8AFF]/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-[#4D8AFF] text-sm font-medium">١٠ برنامج احترافي</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            مكتبة برامج التمارين
          </span>
        </h1>
        <p className="text-neutral-400 text-lg leading-relaxed max-w-xl mx-auto">
          برامج من أشهر أبطال كمال الأجسام والمدربين في العالم. استورد أي برنامج مباشرة إلى التطبيق بضغطة واحدة.
        </p>
      </section>

      {/* ── Filter ── */}
      <div className="flex items-center justify-center gap-2 px-6 pb-12">
        {(Object.keys(LEVEL_LABELS) as Level[]).map((lvl) => (
          <button
            key={lvl}
            onClick={() => setFilter(lvl)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === lvl
                ? "bg-[#4D8AFF] text-white"
                : "bg-white/[0.04] text-neutral-400 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]"
            }`}
          >
            {LEVEL_LABELS[lvl]}
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((program) => {
            const levelStyle = LEVEL_COLORS[program.level] ?? LEVEL_COLORS.beginner;
            return (
              <div
                key={program.id}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all overflow-hidden flex flex-col"
              >
                {/* GIF thumbnail */}
                <div className="relative h-52 bg-[#0f1420] overflow-hidden">
                  <img
                    src={`https://static.exercisedb.dev/media/${program.gifId}.gif`}
                    alt={program.nameAr}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity group-hover:scale-105 duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-[#0B0D14]/30 to-transparent" />

                  {/* Level badge */}
                  <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold ${levelStyle.bg} ${levelStyle.text}`}>
                    {LEVEL_LABELS[program.level as Level]}
                  </div>

                  {/* Color accent dot */}
                  <div
                    className="absolute top-3 left-3 w-2 h-2 rounded-full"
                    style={{ backgroundColor: program.color }}
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="text-white font-bold text-lg mb-1">{program.nameAr}</h3>
                    <p className="text-neutral-500 text-xs">{program.name} · {program.creator}</p>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">
                    {program.desc}
                  </p>

                  {/* Stats row */}
                  <div className="flex items-center gap-4 mb-4 text-xs text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {program.days} أيام / أسبوع
                    </span>
                    <span className="w-px h-3 bg-white/10" />
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {program.weeks} أسبوع
                    </span>
                    <span className="w-px h-3 bg-white/10" />
                    <span>{program.routines} روتين</span>
                  </div>

                  {/* Import button */}
                  <a
                    href={`momentum://gym/import?id=${program.id}`}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#4D8AFF]/15 hover:bg-[#4D8AFF]/25 border border-[#4D8AFF]/20 hover:border-[#4D8AFF]/40 text-[#4D8AFF] text-sm font-semibold transition-all active:scale-[0.98]"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    استيراد البرنامج
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* App note */}
        <p className="text-center text-neutral-600 text-sm mt-12">
          زر الاستيراد يفتح تطبيق Momentum مباشرة · يتطلب تنزيل التطبيق أولاً
        </p>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <div className="flex items-center gap-2">
            <Image src="/Logo (2).png" alt="Momentum" width={20} height={20} className="rounded-md" />
            <span className="text-white font-semibold">Momentum</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">الخصوصية</Link>
            <Link href="/terms"   className="hover:text-white transition-colors">الشروط</Link>
          </div>
          <span>&copy; 2026 Momentum. جميع الحقوق محفوظة.</span>
        </div>
      </footer>
    </div>
  );
}
