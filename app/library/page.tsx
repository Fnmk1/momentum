"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Level = "beginner" | "intermediate" | "advanced";

const LEVEL_LABELS: Record<Level, string> = {
  beginner:     "مبتدئ",
  intermediate: "متوسط",
  advanced:     "متقدم",
};

const LEVEL_COLORS: Record<Level, { bg: string; text: string }> = {
  beginner:     { bg: "bg-emerald-500/10", text: "text-emerald-400" },
  intermediate: { bg: "bg-amber-500/10",   text: "text-amber-400"   },
  advanced:     { bg: "bg-red-500/10",     text: "text-red-400"     },
};

const PROGRAMS = [
  {
    id: "arnold-golden-six",
    name: "Arnold's Golden Six",
    nameAr: "الستة الذهبية - أرنولد",
    creator: "Arnold Schwarzenegger",
    desc: "روتين جسم كامل بسيط بـ٦ تمارين مركبة فقط. مثالي لبناء أساس قوي.",
    days: 3, weeks: 12, level: "beginner" as Level, routines: 1, color: "#f59e0b",
    image: "/explore/Arnold-Schwarzenegger.png",
  },
  {
    id: "arnold-split",
    name: "Arnold Split",
    nameAr: "تقسيم أرنولد",
    creator: "Arnold Schwarzenegger",
    desc: "تقسيم ٦ أيام بحجم عالي يستهدف كل مجموعة عضلية مرتين أسبوعياً.",
    days: 6, weeks: 8, level: "advanced" as Level, routines: 3, color: "#ef4444",
    image: "/explore/Arnold-Schwarzenegger2.png",
  },
  {
    id: "blood-and-guts",
    name: "Blood and Guts",
    nameAr: "دم وعرق",
    creator: "Dorian Yates",
    desc: "تدريب عالي الشدة. مجموعة واحدة لكل تمرين حتى الفشل التام..",
    days: 4, weeks: 6, level: "advanced" as Level, routines: 4, color: "#dc2626",
    image: "/explore/Dorian-Yates.png",
  },
  {
    id: "ronnie-coleman",
    name: "Ronnie Coleman Split",
    nameAr: "تقسيم روني كولمان",
    creator: "Ronnie Coleman",
    desc: "تمرّن مثل بطل مستر أولمبيا ٨ مرات. أوزان ثقيلة جداً مع حجم عالي.",
    days: 6, weeks: 12, level: "advanced" as Level, routines: 4, color: "#7c3aed",
    image: "/explore/ronnie.jpg",
  },
  {
    id: "stronglifts-5x5",
    name: "StrongLifts 5×5",
    nameAr: "سترونق لفتس ٥×٥",
    creator: "Mehdi Hadim",
    desc: "أشهر برنامج قوة للمبتدئين. ٥ تمارين فقط، ٣ أيام أسبوعياً. زد الوزن كل جلسة.",
    days: 3, weeks: 12, level: "beginner" as Level, routines: 2, color: "#3b82f6",
    gifId: "W9pFVv1",
  },
  {
    id: "starting-strength",
    name: "Starting Strength",
    nameAr: "بداية القوة",
    creator: "Mark Rippetoe",
    desc: "البرنامج الكلاسيكي للمبتدئين بالبار. ٣×٥ على التمارين الأساسية مع زيادة تدريجية.",
    days: 3, weeks: 12, level: "beginner" as Level, routines: 2, color: "#059669",
    image: "/explore/mark.jpg",
  },
  {
    id: "phul",
    name: "PHUL",
    nameAr: "قوة + تضخيم علوي/سفلي",
    creator: "Brandon Campbell",
    desc: "قوة وتضخيم علوي/سفلي. أوزان ثقيلة أيام القوة، تكرارات عالية أيام التضخيم.",
    days: 4, weeks: 8, level: "intermediate" as Level, routines: 4, color: "#f97316",
    gifId: "EIeI8Vf",
  },
  {
    id: "phat",
    name: "PHAT",
    nameAr: "فات - قوة وتضخيم",
    creator: "Dr. Layne Norton",
    desc: "تدريب تكيّفي للقوة والتضخيم. ٥ أيام مع مجموعات سريعة تربط بين القوة والتضخيم.",
    days: 5, weeks: 8, level: "intermediate" as Level, routines: 5, color: "#8b5cf6",
    gifId: "eZyBC3j",
  },
  {
    id: "reddit-ppl",
    name: "Reddit PPL",
    nameAr: "دفع سحب أرجل",
    creator: "u/Metallicadpa",
    desc: "أشهر برنامج دفع سحب أرجل على الإنترنت. ٦ أيام مع زيادة تدريجية. كل عضلة مرتين أسبوعياً.",
    days: 6, weeks: 12, level: "beginner" as Level, routines: 3, color: "#06b6d4",
    gifId: "ila4NZS",
  },
  {
    id: "bro-split",
    name: "Classic Bro Split",
    nameAr: "التقسيم الكلاسيكي",
    creator: "Traditional",
    desc: "مجموعة عضلية واحدة يومياً، ٥ أيام أسبوعياً. حجم عالي مع أسبوع كامل راحة لكل عضلة.",
    days: 5, weeks: 8, level: "intermediate" as Level, routines: 5, color: "#ec4899",
    gifId: "EIeI8Vf",
  },
];

const PROGRAM_ROUTINES: Record<string, { name: string; exercises: { name: string; sets: number; reps: string }[] }[]> = {
  "arnold-golden-six": [
    { name: "Full Body", exercises: [
      { name: "Barbell Squat", sets: 4, reps: "10" },
      { name: "Barbell Bench Press", sets: 3, reps: "10" },
      { name: "Chin Up", sets: 3, reps: "10" },
      { name: "Overhead Press", sets: 4, reps: "10" },
      { name: "Barbell Curl", sets: 3, reps: "10" },
      { name: "Sit Up", sets: 3, reps: "20" },
    ]},
  ],
  "arnold-split": [
    { name: "Chest & Back", exercises: [
      { name: "Barbell Bench Press", sets: 5, reps: "8-12" },
      { name: "Incline Barbell Bench", sets: 5, reps: "8-12" },
      { name: "Dumbbell Fly", sets: 4, reps: "12" },
      { name: "Pull Up", sets: 5, reps: "10" },
      { name: "Bent Over Barbell Row", sets: 4, reps: "10" },
      { name: "Lat Pulldown", sets: 4, reps: "10" },
    ]},
    { name: "Shoulders & Arms", exercises: [
      { name: "Dumbbell Shoulder Press", sets: 5, reps: "10" },
      { name: "Lateral Raise", sets: 5, reps: "12" },
      { name: "Barbell Curl", sets: 5, reps: "10" },
      { name: "Close Grip Bench Press", sets: 5, reps: "10" },
      { name: "Skull Crusher", sets: 4, reps: "12" },
    ]},
    { name: "Legs", exercises: [
      { name: "Barbell Squat", sets: 6, reps: "10" },
      { name: "Barbell Deadlift", sets: 5, reps: "10" },
      { name: "Leg Extension", sets: 5, reps: "12" },
      { name: "Lying Leg Curl", sets: 5, reps: "12" },
      { name: "Standing Calf Raise", sets: 5, reps: "15" },
    ]},
  ],
  "blood-and-guts": [
    { name: "Chest & Biceps", exercises: [
      { name: "Decline Barbell Bench", sets: 3, reps: "8" },
      { name: "Incline Dumbbell Bench", sets: 2, reps: "8" },
      { name: "Dumbbell Fly", sets: 2, reps: "8" },
      { name: "Barbell Curl", sets: 2, reps: "8" },
      { name: "Concentration Curl", sets: 2, reps: "8" },
    ]},
    { name: "Back", exercises: [
      { name: "Dumbbell Pullover", sets: 3, reps: "10" },
      { name: "Lat Pulldown", sets: 2, reps: "10" },
      { name: "Bent Over Barbell Row", sets: 2, reps: "10" },
      { name: "Barbell Deadlift", sets: 2, reps: "8" },
    ]},
    { name: "Shoulders & Triceps", exercises: [
      { name: "Dumbbell Shoulder Press", sets: 3, reps: "8" },
      { name: "Lateral Raise", sets: 2, reps: "10" },
      { name: "Cable Tricep Pushdown", sets: 2, reps: "10" },
      { name: "Skull Crusher", sets: 2, reps: "10" },
    ]},
    { name: "Legs", exercises: [
      { name: "Leg Extension", sets: 3, reps: "12" },
      { name: "Leg Press", sets: 3, reps: "12" },
      { name: "Lying Leg Curl", sets: 2, reps: "12" },
      { name: "Standing Calf Raise", sets: 3, reps: "12" },
    ]},
  ],
  "ronnie-coleman": [
    { name: "Back & Biceps", exercises: [
      { name: "Barbell Deadlift", sets: 3, reps: "4" },
      { name: "Barbell Row", sets: 3, reps: "10" },
      { name: "One Arm Dumbbell Row", sets: 3, reps: "12" },
      { name: "EZ Bar Curl", sets: 3, reps: "12" },
      { name: "Hammer Curl", sets: 3, reps: "12" },
    ]},
    { name: "Chest & Triceps", exercises: [
      { name: "Dumbbell Bench Press", sets: 3, reps: "10" },
      { name: "Incline Dumbbell Bench", sets: 3, reps: "8" },
      { name: "Skull Crusher", sets: 3, reps: "12" },
      { name: "Tricep Kickback", sets: 3, reps: "15" },
    ]},
    { name: "Legs", exercises: [
      { name: "Barbell Squat", sets: 3, reps: "4" },
      { name: "Leg Press", sets: 3, reps: "12" },
      { name: "Lying Leg Curl", sets: 3, reps: "12" },
      { name: "Walking Lunge", sets: 3, reps: "20" },
    ]},
    { name: "Shoulders & Traps", exercises: [
      { name: "Seated Barbell Press", sets: 3, reps: "12" },
      { name: "Lateral Raise", sets: 3, reps: "12" },
      { name: "Front Raise", sets: 3, reps: "12" },
      { name: "Barbell Shrug", sets: 3, reps: "12" },
    ]},
  ],
  "stronglifts-5x5": [
    { name: "Workout A", exercises: [
      { name: "Barbell Squat", sets: 5, reps: "5" },
      { name: "Barbell Bench Press", sets: 5, reps: "5" },
      { name: "Barbell Row", sets: 5, reps: "5" },
    ]},
    { name: "Workout B", exercises: [
      { name: "Barbell Squat", sets: 5, reps: "5" },
      { name: "Overhead Press", sets: 5, reps: "5" },
      { name: "Barbell Deadlift", sets: 1, reps: "5" },
    ]},
  ],
  "starting-strength": [
    { name: "Workout A", exercises: [
      { name: "Barbell Squat", sets: 3, reps: "5" },
      { name: "Barbell Bench Press", sets: 3, reps: "5" },
      { name: "Barbell Deadlift", sets: 1, reps: "5" },
      { name: "Chin Up", sets: 3, reps: "10" },
    ]},
    { name: "Workout B", exercises: [
      { name: "Barbell Squat", sets: 3, reps: "5" },
      { name: "Overhead Press", sets: 3, reps: "5" },
      { name: "Power Clean", sets: 5, reps: "3" },
    ]},
  ],
  "phul": [
    { name: "Upper Power", exercises: [
      { name: "Barbell Bench Press", sets: 4, reps: "5" },
      { name: "Bent Over Barbell Row", sets: 4, reps: "5" },
      { name: "Overhead Press", sets: 3, reps: "6" },
      { name: "Barbell Curl", sets: 3, reps: "8" },
      { name: "Skull Crusher", sets: 3, reps: "8" },
    ]},
    { name: "Lower Power", exercises: [
      { name: "Barbell Squat", sets: 4, reps: "5" },
      { name: "Barbell Deadlift", sets: 4, reps: "5" },
      { name: "Leg Press", sets: 4, reps: "12" },
      { name: "Lying Leg Curl", sets: 4, reps: "8" },
    ]},
    { name: "Upper Hypertrophy", exercises: [
      { name: "Incline Barbell Bench", sets: 4, reps: "12" },
      { name: "Dumbbell Fly", sets: 4, reps: "12" },
      { name: "Seated Cable Row", sets: 4, reps: "12" },
      { name: "Lateral Raise", sets: 4, reps: "12" },
      { name: "Incline Dumbbell Curl", sets: 4, reps: "12" },
    ]},
    { name: "Lower Hypertrophy", exercises: [
      { name: "Front Squat", sets: 4, reps: "12" },
      { name: "Leg Extension", sets: 4, reps: "15" },
      { name: "Lying Leg Curl", sets: 4, reps: "12" },
      { name: "Seated Calf Raise", sets: 5, reps: "12" },
    ]},
  ],
  "phat": [
    { name: "Upper Power", exercises: [
      { name: "Barbell Row", sets: 3, reps: "3-5" },
      { name: "Weighted Pull Up", sets: 2, reps: "6-10" },
      { name: "Barbell Bench Press", sets: 3, reps: "3-5" },
      { name: "Incline Dumbbell Bench", sets: 2, reps: "6-10" },
      { name: "Overhead Press", sets: 3, reps: "6-10" },
    ]},
    { name: "Lower Power", exercises: [
      { name: "Barbell Squat", sets: 3, reps: "3-5" },
      { name: "Hack Squat", sets: 2, reps: "6-10" },
      { name: "Barbell Deadlift", sets: 3, reps: "3-5" },
      { name: "Leg Press", sets: 2, reps: "6-10" },
    ]},
    { name: "Back & Shoulders Hypertrophy", exercises: [
      { name: "Seated Cable Row", sets: 3, reps: "8-12" },
      { name: "Dumbbell Row", sets: 2, reps: "12-15" },
      { name: "Lat Pulldown", sets: 3, reps: "8-12" },
      { name: "Lateral Raise", sets: 4, reps: "12-15" },
    ]},
    { name: "Chest & Arms Hypertrophy", exercises: [
      { name: "Incline Barbell Bench", sets: 3, reps: "8-12" },
      { name: "Dumbbell Fly", sets: 3, reps: "12-15" },
      { name: "Barbell Curl", sets: 3, reps: "8-12" },
      { name: "Cable Tricep Pushdown", sets: 3, reps: "8-12" },
    ]},
    { name: "Leg Hypertrophy", exercises: [
      { name: "Leg Extension", sets: 4, reps: "10-15" },
      { name: "Barbell Squat", sets: 3, reps: "8-12" },
      { name: "Lying Leg Curl", sets: 4, reps: "10-15" },
      { name: "Standing Calf Raise", sets: 5, reps: "8-12" },
    ]},
  ],
  "reddit-ppl": [
    { name: "Push A", exercises: [
      { name: "Barbell Bench Press", sets: 4, reps: "5/3/1+" },
      { name: "Overhead Press", sets: 3, reps: "8-12" },
      { name: "Incline Dumbbell Bench", sets: 3, reps: "8-12" },
      { name: "Tricep Pushdown", sets: 3, reps: "15-20" },
    ]},
    { name: "Pull A", exercises: [
      { name: "Barbell Deadlift", sets: 1, reps: "5/3/1+" },
      { name: "Barbell Row", sets: 3, reps: "8-12" },
      { name: "Lat Pulldown", sets: 3, reps: "8-12" },
      { name: "Barbell Curl", sets: 4, reps: "8-12" },
    ]},
    { name: "Legs A", exercises: [
      { name: "Barbell Squat", sets: 4, reps: "5/3/1+" },
      { name: "Romanian Deadlift", sets: 3, reps: "8-12" },
      { name: "Leg Press", sets: 3, reps: "8-12" },
      { name: "Leg Curl", sets: 3, reps: "10-15" },
    ]},
  ],
  "bro-split": [
    { name: "Chest", exercises: [
      { name: "Barbell Bench Press", sets: 4, reps: "8" },
      { name: "Incline Dumbbell Bench", sets: 4, reps: "12" },
      { name: "Cable Crossover", sets: 4, reps: "15" },
      { name: "Cable Fly", sets: 3, reps: "15" },
    ]},
    { name: "Back", exercises: [
      { name: "Pull Up", sets: 4, reps: "8" },
      { name: "One Arm Dumbbell Row", sets: 4, reps: "12" },
      { name: "Seated Cable Row", sets: 4, reps: "12" },
    ]},
    { name: "Shoulders", exercises: [
      { name: "Overhead Press", sets: 4, reps: "8" },
      { name: "Lateral Raise", sets: 4, reps: "15" },
      { name: "Cable Face Pull", sets: 4, reps: "20" },
    ]},
    { name: "Arms", exercises: [
      { name: "EZ Bar Curl", sets: 3, reps: "10" },
      { name: "Close Grip Bench Press", sets: 3, reps: "10" },
      { name: "Hammer Curl", sets: 3, reps: "12" },
      { name: "Cable Tricep Pushdown", sets: 3, reps: "12" },
    ]},
    { name: "Legs", exercises: [
      { name: "Barbell Squat", sets: 4, reps: "8" },
      { name: "Leg Press", sets: 4, reps: "12" },
      { name: "Lying Leg Curl", sets: 3, reps: "12" },
      { name: "Standing Calf Raise", sets: 5, reps: "12" },
    ]},
  ],
};

function ProgramDetail({ program, onClose }: { program: typeof PROGRAMS[0]; onClose: () => void }) {
  const [openRoutine, setOpenRoutine] = useState<number | null>(0);
  const levelStyle = LEVEL_COLORS[program.level];
  const thumb = getThumbSrc(program);
  const routines = PROGRAM_ROUTINES[program.id] ?? [];

  return (
    <div className="max-w-7xl mx-auto px-6 mt-4">
      <div className="rounded-2xl border border-white/[0.08] overflow-hidden" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="md:flex">
          {/* Hero image */}
          <div className="relative md:w-72 shrink-0 h-56 md:h-auto bg-[#0f1420] overflow-hidden">
            {thumb && (
              <img src={thumb} alt={program.nameAr} className="w-full h-full object-cover opacity-80" />
            )}
            <div className="absolute inset-0 bg-gradient-to-l from-[#0c1018]/80 to-transparent hidden md:block" />
          </div>

          {/* Info */}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-4">
              <button
                onClick={onClose}
                className="text-neutral-500 hover:text-white transition-colors p-1"
                aria-label="close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="text-right">
                <h3 className="text-white font-bold text-xl mb-1">{program.nameAr}</h3>
                <div className="flex items-center gap-2 justify-end mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${levelStyle.bg} ${levelStyle.text}`}>
                    {LEVEL_LABELS[program.level]}
                  </span>
                </div>
                <p className="text-neutral-500 text-xs">{program.name} · {program.creator}</p>
              </div>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed mb-5 text-right">{program.desc}</p>

            {/* Stats */}
            <div className="flex items-center gap-5 mb-6 text-xs text-neutral-500 justify-end">
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
              <span>{routines.length} روتين</span>
            </div>

            {/* Routines accordion */}
            {routines.length > 0 && (
              <div className="space-y-2 mb-6">
                {routines.map((routine, i) => (
                  <div key={i} className="rounded-xl border border-white/[0.06] overflow-hidden">
                    <button
                      onClick={() => setOpenRoutine(openRoutine === i ? null : i)}
                      className="w-full flex items-center justify-between px-4 py-3 text-right hover:bg-white/[0.03] transition-colors"
                    >
                      <svg
                        className={`w-4 h-4 text-neutral-500 transition-transform ${openRoutine === i ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="text-white text-sm font-medium">{routine.name}</span>
                    </button>
                    {openRoutine === i && (
                      <div className="px-4 pb-3 space-y-1.5">
                        {routine.exercises.map((ex, j) => (
                          <div key={j} className="flex items-center justify-between text-xs py-1.5 border-t border-white/[0.04]">
                            <span className="text-neutral-500">{ex.sets}×{ex.reps}</span>
                            <span className="text-neutral-300">{ex.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Import button */}
            <a
              href={`momentum://gym/import?id=${program.id}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#4D8AFF] hover:bg-[#4D8AFF]/80 text-white text-sm font-semibold transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              استيراد البرنامج
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const POPULAR_IDS = ["arnold-golden-six", "arnold-split", "blood-and-guts", "ronnie-coleman"];

const SECTIONS = [
  { key: "popular",      label: "الأكثر شهرة",    programs: PROGRAMS.filter(p => POPULAR_IDS.includes(p.id)) },
  { key: "beginner",     label: "مناسب للمبتدئين", programs: PROGRAMS.filter(p => p.level === "beginner")     },
  { key: "intermediate", label: "المستوى المتوسط", programs: PROGRAMS.filter(p => p.level === "intermediate") },
  { key: "advanced",     label: "للمحترفين",        programs: PROGRAMS.filter(p => p.level === "advanced")     },
];

function getThumbSrc(p: typeof PROGRAMS[0]) {
  if (p.image) return p.image;
  if (p.gifId) return `https://static.exercisedb.dev/media/${p.gifId}.gif`;
  return null;
}

function ProgramCard({ program }: { program: typeof PROGRAMS[0] }) {
  const levelStyle = LEVEL_COLORS[program.level];
  const thumb = getThumbSrc(program);

  return (
    <div
      className="group shrink-0 relative rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all overflow-hidden flex flex-col"
      style={{ width: 300 }}
    >
      {/* Thumbnail */}
      <div className="relative h-52 bg-[#0f1420] overflow-hidden">
        {thumb && (
          <img
            src={thumb}
            alt={program.nameAr}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity group-hover:scale-105 duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-[#0B0D14]/30 to-transparent" />

        {/* Level badge */}
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold ${levelStyle.bg} ${levelStyle.text}`}>
          {LEVEL_LABELS[program.level]}
        </div>

        {/* Color dot */}
        <div className="absolute top-3 left-3 w-2 h-2 rounded-full" style={{ backgroundColor: program.color }} />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-white font-bold text-lg mb-1">{program.nameAr}</h3>
          <p className="text-neutral-500 text-xs">{program.name} · {program.creator}</p>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">{program.desc}</p>

        {/* Stats */}
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
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#4D8AFF] hover:bg-[#4D8AFF]/65 text-white text-sm font-semibold transition-all active:scale-[0.98]"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          استيراد البرنامج
        </a>
      </div>
    </div>
  );
}

export default function LibraryPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

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
          برامج من أشهر أبطال كمال الأجسام والمدربين في العالم. اضغط على أي برنامج لتعرف تفاصيله، ثم استورده مباشرة إلى التطبيق.
        </p>
      </section>

      {/* ── Sections ── */}
      <main className="pb-24 space-y-14">
        {SECTIONS.map((section) => {
          const sectionSelected = section.programs.find(p => p.id === selectedId) ?? null;
          return (
            <div key={section.key}>
              {/* Section header */}
              <div className="max-w-7xl mx-auto px-6 mb-5">
                <h2 className="text-xl font-bold text-white">{section.label}</h2>
              </div>

              {/* Horizontal scroll row */}
              <div style={{ overflowX: "auto", scrollbarWidth: "none" }}>
                <div className="max-w-7xl mx-auto px-6">
                  <div className="flex gap-4" style={{ width: "max-content", minWidth: "100%" }}>
                    {section.programs.map((program) => (
                      <div
                        key={program.id}
                        onClick={() => setSelectedId(selectedId === program.id ? null : program.id)}
                        className={`cursor-pointer transition-all ${selectedId === program.id ? "ring-2 ring-[#4D8AFF]/50 rounded-2xl" : ""}`}
                      >
                        <ProgramCard program={program} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Detail panel — shown below this section when a card in it is selected */}
              {sectionSelected && (
                <ProgramDetail
                  program={sectionSelected}
                  onClose={() => setSelectedId(null)}
                />
              )}
            </div>
          );
        })}

        <p className="text-center text-neutral-600 text-sm px-6">
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
