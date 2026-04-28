// ── Types ─────────────────────────────────────────────────────────────────────

export type CategoryTag =
  | "muscle_building"
  | "fat_loss"
  | "strength"
  | "full_body"
  | "abs"
  | "bodyweight"
  | "at_home"
  | "beginner"
  | "sports_performance"
  | "women";

export type MainGoal =
  | "muscle_building"
  | "fat_loss"
  | "strength"
  | "general_fitness"
  | "sports_performance";

export type TrainingLevel = "beginner" | "intermediate" | "advanced";

export type WorkoutSplit =
  | "full_body"
  | "upper_lower"
  | "push_pull_legs"
  | "bro_split"
  | "5x5"
  | "circuit";

export interface Category {
  tag: CategoryTag;
  nameAr: string;
  nameEn: string;
  descAr: string;
  image: string;
}

export interface ScheduleExercise {
  exerciseId: string;
  nameEn: string;
  nameAr: string;
  sets: number;
  reps: string;
  restSeconds: number;
  notesEn?: string;
  notesAr?: string;
}

export interface ScheduleDay {
  dayNumber: number;
  labelEn: string;
  labelAr: string;
  focus: string;
  exercises: ScheduleExercise[];
}

export interface Advice {
  titleEn: string;
  titleAr: string;
  bodyEn: string;
  bodyAr: string;
}

export interface Supplement {
  nameEn: string;
  nameAr: string;
  dosageEn: string;
  dosageAr: string;
  priority: "essential" | "highly_recommended" | "optional";
  notesEn: string;
  notesAr: string;
}

export interface Program {
  id: string;
  name: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  primaryCategory: CategoryTag;
  tags: CategoryTag[];
  mainGoal: MainGoal;
  trainingLevel: TrainingLevel;
  durationWeeks: number;
  daysPerWeek: number;
  timePerWorkout: string;
  equipment: string[];
  targetGender: "male" | "female" | "unisex";
  workoutSplit: WorkoutSplit;
  schedule: ScheduleDay[];
  advices: Advice[];
  supplements: Supplement[];
}

// ── Categories ────────────────────────────────────────────────────────────────

export const CATEGORIES: Category[] = [
  { tag: "muscle_building", nameAr: "بناء عضل", nameEn: "Muscle Building", descAr: "برامج مصممة لزيادة الكتلة العضلية والحجم", image: "/explore/Arnold-Schwarzenegger2.png" },
  { tag: "fat_loss", nameAr: "حرق دهون", nameEn: "Fat Loss", descAr: "برامج تركز على خسارة الدهون مع الحفاظ على العضلات", image: "/explore/ronnie.jpg" },
  { tag: "strength", nameAr: "زيادة قوة", nameEn: "Increase Strength", descAr: "برامج أوزان ثقيلة لبناء قوة حقيقية", image: "/explore/mark.jpg" },
  { tag: "full_body", nameAr: "جسم كامل", nameEn: "Full Body", descAr: "تمارين تستهدف جميع العضلات في جلسة واحدة", image: "/explore/Arnold-Schwarzenegger.png" },
  { tag: "abs", nameAr: "تمارين كور", nameEn: "Ab Workouts", descAr: "تمارين مركزة على عضلات البطن والكور", image: "/explore/Dorian-Yates.png" },
  { tag: "bodyweight", nameAr: "وزن الجسم", nameEn: "Bodyweight", descAr: "تمارين بدون معدات — وزن جسمك فقط", image: "/explore/mark.jpg" },
  { tag: "at_home", nameAr: "تمارين البيت", nameEn: "At Home", descAr: "تمارين تقدر تسويها من بيتك بدون نادي", image: "/explore/Arnold-Schwarzenegger.png" },
  { tag: "beginner", nameAr: "للمبتدئين", nameEn: "Beginner", descAr: "برامج بسيطة وفعالة لبناء أساس قوي", image: "/explore/mark.jpg" },
  { tag: "sports_performance", nameAr: "الأداء الرياضي", nameEn: "Sports Performance", descAr: "برامج تحسين الأداء الرياضي والقدرات البدنية", image: "/explore/Dorian-Yates.png" },
  { tag: "women", nameAr: "تمارين النساء", nameEn: "Workouts For Women", descAr: "برامج مصممة خصيصاً للنساء", image: "/explore/ronnie.jpg" },
];

// ── Level Display Helpers ─────────────────────────────────────────────────────

export const LEVEL_LABELS: Record<TrainingLevel, string> = {
  beginner: "مبتدئ",
  intermediate: "متوسط",
  advanced: "متقدم",
};

export const LEVEL_COLORS: Record<TrainingLevel, { bg: string; text: string }> = {
  beginner: { bg: "bg-emerald-500/10", text: "text-emerald-400" },
  intermediate: { bg: "bg-amber-500/10", text: "text-amber-400" },
  advanced: { bg: "bg-red-500/10", text: "text-red-400" },
};

// ── Programs ──────────────────────────────────────────────────────────────────

export const PROGRAMS: Program[] = [
  {
    id: "beginner_full_body_3day",
    name: "Beginner Full Body",
    nameAr: "جدول المبتدئين - جسم كامل",
    descEn: "A 3-day full body routine designed for beginners to build a solid foundation in strength training. Focuses on compound movements with manageable volume to teach proper form and create gradual progression.",
    descAr: "جدول 3 أيام بالأسبوع للمبتدئين لبناء أساس قوي في رفع الأثقال. يركز على التمارين المركبة مع حجم تدريبي مناسب لتعلم الفورم الصحيح والتدرج التدريجي.",
    primaryCategory: "beginner",
    tags: ["beginner", "full_body", "muscle_building"],
    mainGoal: "muscle_building",
    trainingLevel: "beginner",
    durationWeeks: 8,
    daysPerWeek: 3,
    timePerWorkout: "45-60",
    equipment: ["barbell", "dumbbell", "bench"],
    targetGender: "unisex",
    workoutSplit: "full_body",
    supplements: [
      { nameEn: "Whey Protein", nameAr: "بروتين واي", dosageEn: "1 scoop (25g) post-workout", dosageAr: "سكوب واحد (25 جرام) بعد التمرين", priority: "essential", notesEn: "Helps you reach daily protein target (1.6–2.2g per kg of bodyweight).", notesAr: "يساعدك توصل لهدفك اليومي من البروتين (1.6–2.2 جرام لكل كيلو من وزنك)." },
      { nameEn: "Creatine Monohydrate", nameAr: "كرياتين مونوهيدرات", dosageEn: "5g daily, any time", dosageAr: "5 جرام يومياً، بأي وقت", priority: "highly_recommended", notesEn: "Most researched supplement. Improves strength and muscle gain.", notesAr: "أكثر مكمل عليه دراسات. يحسّن القوة والتضخيم." },
      { nameEn: "Multivitamin", nameAr: "فيتامينات متعددة", dosageEn: "1 tablet daily with breakfast", dosageAr: "حبة واحدة يومياً مع الفطور", priority: "optional", notesEn: "Useful as a safety net if your diet lacks variety.", notesAr: "مفيد كأمان لو أكلك ما يشمل تنوع كافي." },
    ],
    advices: [
      { titleEn: "Form before weight", titleAr: "الفورم قبل الوزن", bodyEn: "In the first 4 weeks, focus on perfecting your technique with light weights. Bad habits formed early are very hard to fix later.", bodyAr: "في أول 4 أسابيع ركّز على إتقان الحركة بأوزان خفيفة. العادات الخاطئة تتعلمها بداية صعب تصلحها بعدين." },
      { titleEn: "Progressive Overload", titleAr: "زيادة الحمل التدريجي", bodyEn: "Add 2.5kg to compound lifts each week if you can complete all sets with good form. For dumbbells, increase 1–2kg every 2 weeks.", bodyAr: "زِد 2.5 كيلو على التمارين المركبة كل أسبوع إذا قدرت تكمل كل السيتات بفورم سليم. للدمبلز، زِد 1–2 كيلو كل أسبوعين." },
      { titleEn: "Rest & Recovery", titleAr: "الراحة والاستشفاء", bodyEn: "Sleep 7–9 hours nightly. Muscles grow during rest, not in the gym. Take at least one full rest day between sessions.", bodyAr: "نام 7–9 ساعات يومياً. العضلات تنمو وقت الراحة مو في الجيم. خلي بين كل تمرين ويوم بعده يوم راحة على الأقل." },
      { titleEn: "Daily Protein", titleAr: "البروتين اليومي", bodyEn: "Aim for 1.6–2.2g of protein per kg of bodyweight. For a 70kg person, that's 112–154g daily spread across 3–5 meals.", bodyAr: "اهدف لـ1.6–2.2 جرام بروتين لكل كيلو من وزنك. لشخص 70 كيلو، يعني 112–154 جرام يومياً موزعة على 3–5 وجبات." },
      { titleEn: "Warm-up matters", titleAr: "الإحماء مهم", bodyEn: "Start each session with 5 minutes of light cardio + 2 warm-up sets with lighter weight before working sets.", bodyAr: "ابدأ كل تمرين بـ5 دقائق كارديو خفيف + سيتين إحماء بوزن أخف قبل السيتات الأساسية." },
    ],
    schedule: [
      {
        dayNumber: 1, labelEn: "Day A — Squat Focus", labelAr: "اليوم الأول — تركيز على السكوات", focus: "full_body",
        exercises: [
          { exerciseId: "qXTaZnJ", nameEn: "Barbell Back Squat", nameAr: "سكوات بار", sets: 3, reps: "8-10", restSeconds: 120, notesEn: "Keep chest up, knees tracking over toes, descend to parallel.", notesAr: "خلي صدرك مرفوع، الركب باتجاه الأصابع، انزل لين الفخذ موازي للأرض." },
          { exerciseId: "EIeI8Vf", nameEn: "Barbell Bench Press", nameAr: "بنش بريس بار", sets: 3, reps: "8-10", restSeconds: 120, notesEn: "Retract scapula, light arch, bar touches mid-chest.", notesAr: "اقفل الأكتاف للخلف، قوس بسيط، البار يلامس وسط الصدر." },
          { exerciseId: "BJ0Hz5L", nameEn: "Dumbbell Bent Over Row", nameAr: "تجديف دمبل منحني", sets: 3, reps: "10-12", restSeconds: 90, notesEn: "Hinge at hips, keep back flat, pull elbows past torso.", notesAr: "انحنِ من الورك، خلي ظهرك مستقيم، اسحب الكوع لخلف الجذع." },
          { exerciseId: "DsgkuIt", nameEn: "Dumbbell Lateral Raise", nameAr: "رفرفة جانبية دمبل", sets: 3, reps: "12-15", restSeconds: 60, notesEn: "Slight bend in elbow, raise to shoulder height, control the descent.", notesAr: "ثني خفيف في الكوع، ارفع لين مستوى الكتف، تحكم بالنزول." },
          { exerciseId: "h1ezqSu", nameEn: "Plank", nameAr: "بلانك", sets: 3, reps: "30-45s", restSeconds: 60, notesEn: "Tight core, neutral spine, no sagging hips.", notesAr: "اشدّ الكور، ظهر مستقيم، الورك ما ينزل." },
        ],
      },
      {
        dayNumber: 2, labelEn: "Day B — Hinge Focus", labelAr: "اليوم الثاني — تركيز على الديدلفت", focus: "full_body",
        exercises: [
          { exerciseId: "wQ2c4XD", nameEn: "Romanian Deadlift", nameAr: "ديدلفت روماني", sets: 3, reps: "8-10", restSeconds: 120, notesEn: "Slight knee bend, push hips back, feel stretch in hamstrings.", notesAr: "ثني خفيف في الركب، ارجع الورك للخلف، حس بشد الهامسترنق." },
          { exerciseId: "fUBheHs", nameEn: "Seated Cable Row", nameAr: "تجديف كيبل جالس", sets: 3, reps: "10-12", restSeconds: 90, notesEn: "Squeeze shoulder blades together, pull to lower chest.", notesAr: "اضغط الأكتاف لبعض، اسحب للجزء السفلي من الصدر." },
          { exerciseId: "SpYC0Kp", nameEn: "Dumbbell Bench Press", nameAr: "بنش بريس دمبل", sets: 3, reps: "10-12", restSeconds: 90, notesEn: "Greater range of motion than barbell, control the descent.", notesAr: "مدى حركة أكبر من البار، تحكم بالنزول." },
          { exerciseId: "NbVPDMW", nameEn: "Dumbbell Biceps Curl", nameAr: "بايسبس كيرل دمبل", sets: 3, reps: "10-12", restSeconds: 60, notesEn: "No swinging, control both directions.", notesAr: "بدون استخدام الزخم، تحكم بالحركتين." },
          { exerciseId: "X6C6i5Y", nameEn: "Triceps Dip", nameAr: "ديبس ترايسبس", sets: 3, reps: "8-12", restSeconds: 90, notesEn: "If too hard, use bench dips. Keep elbows close to body.", notesAr: "لو صعب، استخدم بنش ديب. خلي الكوع قريب من الجسم." },
        ],
      },
      {
        dayNumber: 3, labelEn: "Day C — Mixed", labelAr: "اليوم الثالث — متنوع", focus: "full_body",
        exercises: [
          { exerciseId: "yn8yg1r", nameEn: "Dumbbell Goblet Squat", nameAr: "سكوات قوبلت دمبل", sets: 3, reps: "10-12", restSeconds: 90, notesEn: "Hold dumbbell at chest, elbows tucked, deep squat.", notesAr: "امسك الدمبل عند الصدر، الكوع داخل، انزل عميق." },
          { exerciseId: "3TZduzM", nameEn: "Barbell Incline Bench Press", nameAr: "بنش بريس مائل بار", sets: 3, reps: "8-10", restSeconds: 120, notesEn: "Bench at 30°, bar touches upper chest.", notesAr: "البنش بزاوية 30°، البار يلامس أعلى الصدر." },
          { exerciseId: "lBDjFxJ", nameEn: "Pull-up", nameAr: "بول أب", sets: 3, reps: "AMRAP (up to 10)", restSeconds: 120, notesEn: "If you can't do 5, use band assistance or replace with lat pulldown.", notesAr: "لو ما تقدر تسوي 5، استخدم مطاط مساعد أو بدّلها بـlat pulldown." },
          { exerciseId: "DsgkuIt", nameEn: "Dumbbell Lateral Raise", nameAr: "رفرفة جانبية دمبل", sets: 3, reps: "12-15", restSeconds: 60 },
          { exerciseId: "TFqbd8t", nameEn: "Crunch", nameAr: "كرنش", sets: 3, reps: "15-20", restSeconds: 45, notesEn: "Slow controlled movement, exhale at top.", notesAr: "حركة بطيئة وتحكم، ازفر في الأعلى." },
        ],
      },
    ],
  },
  {
    id: "ppl_6day_intermediate",
    name: "Push Pull Legs (PPL) — 6 Day",
    nameAr: "بوش بُل ليقز (PPL) — 6 أيام",
    descEn: "The most popular muscle building split. Train each muscle group twice per week with high volume. Designed for intermediate lifters who can train 6 days a week.",
    descAr: "أشهر تقسيم لبناء العضل. تدرّب كل مجموعة عضلية مرتين بالأسبوع بحجم تدريبي عالي. للمستويات المتوسطة اللي يقدرون يتمرنون 6 أيام بالأسبوع.",
    primaryCategory: "muscle_building",
    tags: ["muscle_building", "strength"],
    mainGoal: "muscle_building",
    trainingLevel: "intermediate",
    durationWeeks: 12,
    daysPerWeek: 6,
    timePerWorkout: "60-75",
    equipment: ["barbell", "dumbbell", "bench", "cable", "pull-up bar", "leg press machine"],
    targetGender: "unisex",
    workoutSplit: "push_pull_legs",
    supplements: [
      { nameEn: "Whey Protein", nameAr: "بروتين واي", dosageEn: "1-2 scoops (25-50g) daily", dosageAr: "1-2 سكوب (25-50 جرام) يومياً", priority: "essential", notesEn: "Critical for hitting daily protein target with this volume of training.", notesAr: "ضروري للوصول لهدف البروتين اليومي مع حجم التدريب هذا." },
      { nameEn: "Creatine Monohydrate", nameAr: "كرياتين مونوهيدرات", dosageEn: "5g daily, any time", dosageAr: "5 جرام يومياً، بأي وقت", priority: "essential", notesEn: "Boosts strength, muscle volume, and recovery between sessions.", notesAr: "يزيد القوة وحجم العضل والاستشفاء بين الجلسات." },
      { nameEn: "Caffeine (pre-workout)", nameAr: "كافيين (قبل التمرين)", dosageEn: "200-400mg, 30-45 min before workout", dosageAr: "200-400 ملغ قبل التمرين بـ30-45 دقيقة", priority: "highly_recommended", notesEn: "Improves focus, output, and reduces perceived exertion.", notesAr: "يحسّن التركيز والأداء ويقلل الإحساس بالتعب." },
      { nameEn: "Omega-3 (Fish Oil)", nameAr: "أوميقا 3 (زيت السمك)", dosageEn: "2-3g EPA+DHA daily", dosageAr: "2-3 جرام EPA+DHA يومياً", priority: "highly_recommended", notesEn: "Reduces inflammation and supports recovery from heavy training.", notesAr: "يقلل الالتهابات ويدعم الاستشفاء من التدريب الثقيل." },
      { nameEn: "Vitamin D3", nameAr: "فيتامين د3", dosageEn: "2000-4000 IU daily", dosageAr: "2000-4000 وحدة يومياً", priority: "highly_recommended", notesEn: "Most people are deficient. Critical for hormones and recovery.", notesAr: "أغلب الناس عندهم نقص. مهم للهرمونات والاستشفاء." },
    ],
    advices: [
      { titleEn: "Schedule template", titleAr: "جدول الأسبوع المقترح", bodyEn: "Push - Pull - Legs - Rest - Push - Pull - Legs. Don't do more than 3 days in a row.", bodyAr: "بوش - بُل - ليقز - راحة - بوش - بُل - ليقز. لا تتمرّن أكثر من 3 أيام متتالية." },
      { titleEn: "Train with intensity", titleAr: "تمرّن بكثافة", bodyEn: "Each working set should leave 1-3 reps in reserve (RIR). Save failure for the last set of isolation movements.", bodyAr: "كل سيت أساسي يلازم تخلّي 1-3 تكرارات احتياط (RIR). خلّي الفشل للسيت الأخير في تمارين العزل." },
      { titleEn: "Volume is king", titleAr: "الحجم التدريبي هو الأساس", bodyEn: "12-20 working sets per muscle per week is the optimal range for hypertrophy.", bodyAr: "12-20 سيت أسبوعياً لكل عضلة هو المدى الأمثل للتضخيم." },
      { titleEn: "Caloric surplus", titleAr: "السعرات الزائدة", bodyEn: "To build muscle, eat 250-500 calories above maintenance. Track for at least 2 weeks before adjusting.", bodyAr: "لبناء العضل، كُل 250-500 سعرة فوق سعرات الثبات. تابع لمدة أسبوعين على الأقل قبل أي تعديل." },
      { titleEn: "Deload every 6-8 weeks", titleAr: "ديلود كل 6-8 أسابيع", bodyEn: "Reduce volume by 40-50% for one week to allow full recovery. Prevents burnout and injury.", bodyAr: "قلّل الحجم 40-50% لمدة أسبوع لتسمح بالاستشفاء الكامل. يمنع الإنهاك والإصابات." },
      { titleEn: "Don't skip warm-ups", titleAr: "لا تتجاهل الإحماء", bodyEn: "On heavy compounds, do 3-4 warm-up sets pyramiding up to your working weight.", bodyAr: "في التمارين المركبة الثقيلة، سوّ 3-4 سيتات إحماء صاعدة لين توصل لوزن العمل." },
    ],
    schedule: [
      {
        dayNumber: 1, labelEn: "Push Day A — Chest Focus", labelAr: "يوم الدفع أ — تركيز صدر", focus: "chest_shoulders_triceps",
        exercises: [
          { exerciseId: "EIeI8Vf", nameEn: "Barbell Bench Press", nameAr: "بنش بريس بار", sets: 4, reps: "6-8", restSeconds: 150, notesEn: "Heavy compound. Use spotter on top sets.", notesAr: "تمرين مركّب ثقيل. استخدم spotter في السيتات الثقيلة." },
          { exerciseId: "3TZduzM", nameEn: "Barbell Incline Bench Press", nameAr: "بنش بريس مائل بار", sets: 3, reps: "8-10", restSeconds: 120, notesEn: "Targets upper chest. 30° incline is optimal.", notesAr: "يستهدف أعلى الصدر. الزاوية المثالية 30°." },
          { exerciseId: "znQUdHY", nameEn: "Dumbbell Seated Shoulder Press", nameAr: "ضغط أكتاف دمبل جالس", sets: 3, reps: "8-10", restSeconds: 120 },
          { exerciseId: "DsgkuIt", nameEn: "Dumbbell Lateral Raise", nameAr: "رفرفة جانبية دمبل", sets: 4, reps: "12-15", restSeconds: 60, notesEn: "Pause at the top. Use light weight, focus on contraction.", notesAr: "وقفة في الأعلى. استخدم وزن خفيف وركّز على الانقباض." },
          { exerciseId: "dU605di", nameEn: "Cable Tricep Pushdown (Rope)", nameAr: "تراي بوشداون كيبل (حبل)", sets: 3, reps: "10-12", restSeconds: 75, notesEn: "Spread the rope at the bottom for full contraction.", notesAr: "افتح الحبل في الأسفل عشان انقباض كامل." },
          { exerciseId: "X6C6i5Y", nameEn: "Triceps Dip", nameAr: "ديبس ترايسبس", sets: 3, reps: "AMRAP", restSeconds: 90, notesEn: "Keep torso upright. Add weight if you can do 12+ reps.", notesAr: "خلّي جسمك عمودي. ضيف وزن لو تقدر تسوّي 12+ تكرار." },
        ],
      },
      {
        dayNumber: 2, labelEn: "Pull Day A — Back Width", labelAr: "يوم السحب أ — عرض الظهر", focus: "back_biceps",
        exercises: [
          { exerciseId: "ila4NZS", nameEn: "Barbell Deadlift", nameAr: "ديدلفت بار", sets: 3, reps: "5", restSeconds: 180, notesEn: "Heavy compound. Brace core, neutral spine throughout.", notesAr: "تمرين مركّب ثقيل. شدّ الكور، ظهر مستقيم طول الحركة." },
          { exerciseId: "lBDjFxJ", nameEn: "Pull-up", nameAr: "بول أب", sets: 4, reps: "6-10", restSeconds: 120 },
          { exerciseId: "eZyBC3j", nameEn: "Barbell Bent Over Row", nameAr: "تجديف بار منحني", sets: 4, reps: "8-10", restSeconds: 120, notesEn: "Hinge to ~45°, pull bar to lower chest.", notesAr: "انحنِ بزاوية ~45°، اسحب البار للجزء السفلي من الصدر." },
          { exerciseId: "fUBheHs", nameEn: "Seated Cable Row", nameAr: "تجديف كيبل جالس", sets: 3, reps: "10-12", restSeconds: 90, notesEn: "Focus on squeezing shoulder blades.", notesAr: "ركّز على ضغط الأكتاف لبعض." },
          { exerciseId: "mu5Guxt", nameEn: "Dumbbell Rear Delt Raise", nameAr: "رفرفة خلفية دمبل", sets: 3, reps: "12-15", restSeconds: 60 },
          { exerciseId: "NbVPDMW", nameEn: "Dumbbell Biceps Curl", nameAr: "بايسبس كيرل دمبل", sets: 3, reps: "10-12", restSeconds: 75 },
          { exerciseId: "slDvUAU", nameEn: "Dumbbell Hammer Curl", nameAr: "هامر كيرل دمبل", sets: 3, reps: "10-12", restSeconds: 60, notesEn: "Targets brachialis. Neutral grip throughout.", notesAr: "يستهدف عضلة البراكياليس. قبضة محايدة طول الحركة." },
        ],
      },
      {
        dayNumber: 3, labelEn: "Legs Day A — Quad Focus", labelAr: "يوم الأرجل أ — تركيز فخذ أمامي", focus: "quads_hamstrings_glutes_calves",
        exercises: [
          { exerciseId: "qXTaZnJ", nameEn: "Barbell Back Squat", nameAr: "سكوات بار", sets: 4, reps: "6-8", restSeconds: 180, notesEn: "Foundation lift. Depth to parallel or below.", notesAr: "تمرين أساسي. النزول لمستوى الموازاة أو أعمق." },
          { exerciseId: "10Z2DXU", nameEn: "Sled 45° Leg Press", nameAr: "ليق بريس 45°", sets: 3, reps: "10-12", restSeconds: 120 },
          { exerciseId: "my33uHU", nameEn: "Lever Leg Extension", nameAr: "ليق إكستنشن آلة", sets: 3, reps: "12-15", restSeconds: 75, notesEn: "Pause at top, slow descent.", notesAr: "وقفة في الأعلى، نزول بطيء." },
          { exerciseId: "17lJ1kr", nameEn: "Lever Lying Leg Curl", nameAr: "ليق كيرل آلة (راقد)", sets: 3, reps: "10-12", restSeconds: 75 },
          { exerciseId: "yl2IYyy", nameEn: "Standing Calf Raise", nameAr: "رفع كعبين واقف", sets: 4, reps: "12-15", restSeconds: 60, notesEn: "Full range, pause at top.", notesAr: "مدى حركة كامل، وقفة في الأعلى." },
          { exerciseId: "h1ezqSu", nameEn: "Plank", nameAr: "بلانك", sets: 3, reps: "45-60s", restSeconds: 60 },
        ],
      },
      {
        dayNumber: 4, labelEn: "Push Day B — Shoulder Focus", labelAr: "يوم الدفع ب — تركيز كتف", focus: "chest_shoulders_triceps",
        exercises: [
          { exerciseId: "kTbSH9h", nameEn: "Barbell Overhead Press", nameAr: "ضغط أكتاف بار", sets: 4, reps: "6-8", restSeconds: 150, notesEn: "Press straight up. Tight core, glutes squeezed.", notesAr: "اضغط لفوق مستقيم. شدّ الكور والمؤخرة." },
          { exerciseId: "SpYC0Kp", nameEn: "Dumbbell Bench Press", nameAr: "بنش بريس دمبل", sets: 3, reps: "8-10", restSeconds: 120 },
          { exerciseId: "DsgkuIt", nameEn: "Dumbbell Lateral Raise", nameAr: "رفرفة جانبية دمبل", sets: 4, reps: "12-15", restSeconds: 60, notesEn: "Drop sets recommended on last set.", notesAr: "ينصح بـdrop set على السيت الأخير." },
          { exerciseId: "X6C6i5Y", nameEn: "Triceps Dip", nameAr: "ديبس ترايسبس", sets: 3, reps: "AMRAP", restSeconds: 90 },
          { exerciseId: "dU605di", nameEn: "Cable Tricep Pushdown (Rope)", nameAr: "تراي بوشداون كيبل (حبل)", sets: 3, reps: "12-15", restSeconds: 60 },
        ],
      },
      {
        dayNumber: 5, labelEn: "Pull Day B — Back Thickness", labelAr: "يوم السحب ب — سماكة الظهر", focus: "back_biceps",
        exercises: [
          { exerciseId: "wQ2c4XD", nameEn: "Romanian Deadlift", nameAr: "ديدلفت روماني", sets: 4, reps: "8-10", restSeconds: 150, notesEn: "Hits hams and lower back. Light knee bend, hinge from hips.", notesAr: "يستهدف الهامسترنق والظهر السفلي. ثني خفيف بالركب، انحنِ من الورك." },
          { exerciseId: "RVwzP10", nameEn: "Cable Lat Pulldown", nameAr: "لات بولداون كيبل", sets: 4, reps: "8-10", restSeconds: 90, notesEn: "Wide grip, pull to upper chest, squeeze lats.", notesAr: "قبضة واسعة، اسحب لأعلى الصدر، اضغط اللات." },
          { exerciseId: "BJ0Hz5L", nameEn: "Dumbbell Bent Over Row", nameAr: "تجديف دمبل منحني", sets: 3, reps: "10-12", restSeconds: 90 },
          { exerciseId: "fUBheHs", nameEn: "Seated Cable Row", nameAr: "تجديف كيبل جالس", sets: 3, reps: "12-15", restSeconds: 75 },
          { exerciseId: "mu5Guxt", nameEn: "Dumbbell Rear Delt Raise", nameAr: "رفرفة خلفية دمبل", sets: 3, reps: "12-15", restSeconds: 60 },
          { exerciseId: "slDvUAU", nameEn: "Dumbbell Hammer Curl", nameAr: "هامر كيرل دمبل", sets: 3, reps: "10-12", restSeconds: 60 },
          { exerciseId: "NbVPDMW", nameEn: "Dumbbell Biceps Curl", nameAr: "بايسبس كيرل دمبل", sets: 3, reps: "12-15", restSeconds: 60, notesEn: "Higher reps for arm pump.", notesAr: "تكرارات أعلى لضخ الذراع." },
        ],
      },
      {
        dayNumber: 6, labelEn: "Legs Day B — Posterior Focus", labelAr: "يوم الأرجل ب — تركيز خلفي", focus: "quads_hamstrings_glutes_calves",
        exercises: [
          { exerciseId: "zG0zs85", nameEn: "Barbell Front Squat", nameAr: "سكوات أمامي بار", sets: 4, reps: "8-10", restSeconds: 150, notesEn: "Targets quads more. Elbows up high, upright torso.", notesAr: "يركّز على الفخذ الأمامي أكثر. ارفع المرفق، خلّي جسمك مستقيم." },
          { exerciseId: "9E25EOx", nameEn: "Bulgarian Split Squat", nameAr: "سكوات بلغاري", sets: 3, reps: "10-12 each leg", restSeconds: 90, notesEn: "Rear foot elevated, descend deep. Use dumbbells.", notesAr: "القدم الخلفية مرفوعة، انزل عميق. استخدم دمبلز." },
          { exerciseId: "17lJ1kr", nameEn: "Lever Lying Leg Curl", nameAr: "ليق كيرل آلة (راقد)", sets: 4, reps: "10-12", restSeconds: 75 },
          { exerciseId: "10Z2DXU", nameEn: "Sled 45° Leg Press", nameAr: "ليق بريس 45°", sets: 3, reps: "12-15", restSeconds: 90, notesEn: "High and wide foot placement targets glutes/hams.", notesAr: "وقوف القدم عالي وواسع يستهدف المؤخرة والهامسترنق." },
          { exerciseId: "yl2IYyy", nameEn: "Standing Calf Raise", nameAr: "رفع كعبين واقف", sets: 5, reps: "10-12", restSeconds: 60 },
          { exerciseId: "I3tsCnC", nameEn: "Hanging Leg Raise", nameAr: "رفع رجلين معلّق", sets: 3, reps: "10-15", restSeconds: 60, notesEn: "Control descent, no swinging.", notesAr: "تحكم بالنزول، بدون تأرجح." },
        ],
      },
    ],
  },
  {
    id: "5x5_strength_3day",
    name: "5x5 Strength Program",
    nameAr: "برنامج 5x5 للقوة",
    descEn: "Classic linear progression program based on 5 fundamental compound lifts. Add weight every workout. Two alternating workouts (A/B) performed 3 times per week.",
    descAr: "برنامج قوة كلاسيكي بنظام التدرج الخطي مبني على 5 تمارين مركّبة أساسية. تضيف وزن كل تمرين. تمرينين يتبادلان (أ/ب) 3 مرات بالأسبوع.",
    primaryCategory: "strength",
    tags: ["strength", "beginner", "full_body"],
    mainGoal: "strength",
    trainingLevel: "beginner",
    durationWeeks: 12,
    daysPerWeek: 3,
    timePerWorkout: "45-60",
    equipment: ["barbell", "bench", "squat rack"],
    targetGender: "unisex",
    workoutSplit: "5x5",
    supplements: [
      { nameEn: "Creatine Monohydrate", nameAr: "كرياتين مونوهيدرات", dosageEn: "5g daily, any time", dosageAr: "5 جرام يومياً، بأي وقت", priority: "essential", notesEn: "Most effective supplement for strength gains. Non-negotiable for this program.", notesAr: "أفضل مكمل لزيادة القوة. أساسي لهذا البرنامج." },
      { nameEn: "Whey Protein", nameAr: "بروتين واي", dosageEn: "1 scoop (25g) post-workout + 1 in the morning", dosageAr: "سكوب (25 جرام) بعد التمرين + سكوب صباحاً", priority: "essential", notesEn: "Strength training breaks down muscle. Protein rebuilds it stronger.", notesAr: "تدريب القوة يكسر العضل. البروتين يعيد بناءه أقوى." },
      { nameEn: "Caffeine", nameAr: "كافيين", dosageEn: "200mg, 30-45 min pre-workout", dosageAr: "200 ملغ قبل التمرين بـ30-45 دقيقة", priority: "highly_recommended", notesEn: "Heavy lifts demand max focus. Caffeine helps before working sets.", notesAr: "الرفعات الثقيلة تتطلب تركيز كامل. الكافيين يساعد قبل السيتات الأساسية." },
      { nameEn: "Vitamin D3 + Magnesium", nameAr: "فيتامين د3 + مغنيسيوم", dosageEn: "D3: 4000 IU / Mg: 400mg daily", dosageAr: "د3: 4000 وحدة / مغنيسيوم: 400 ملغ يومياً", priority: "highly_recommended", notesEn: "Both critical for testosterone, recovery, and sleep quality.", notesAr: "الاثنين مهمين للتستوستيرون والاستشفاء وجودة النوم." },
    ],
    advices: [
      { titleEn: "Linear progression rule", titleAr: "قاعدة التدرج الخطي", bodyEn: "Add 2.5kg to upper body lifts and 5kg to lower body lifts every workout you successfully complete all sets.", bodyAr: "زِد 2.5 كيلو على تمارين الجزء العلوي و5 كيلو على تمارين الجزء السفلي كل مرة تكمل كل السيتات بنجاح." },
      { titleEn: "When to deload", titleAr: "متى تسوّي ديلود", bodyEn: "If you fail 3 workouts in a row on a lift, deload 10% on that lift and work back up.", bodyAr: "لو فشلت 3 تمارين متتالية على نفس الحركة، ارجع 10% على ذاك التمرين وارجع تتدرج." },
      { titleEn: "Form check", titleAr: "تحقق من الفورم", bodyEn: "Record your top set every workout. Watch it back. Bad form on heavy weight is the fastest way to injury.", bodyAr: "صوّر السيت الأخير لك كل تمرين. شوفه. فورم سيء على وزن ثقيل = إصابة مؤكدة." },
      { titleEn: "Eat to grow", titleAr: "كُل عشان تكبر", bodyEn: "This program assumes a slight caloric surplus. If you're not gaining weight, you won't gain strength as fast as possible.", bodyAr: "هذا البرنامج يفترض سعرات زائدة بسيطة. لو ما تكتسب وزن، ما رح تكتسب قوة بأقصى سرعة." },
      { titleEn: "Schedule", titleAr: "جدول الأيام", bodyEn: "Mon/Wed/Fri pattern works best. Week 1: A/B/A. Week 2: B/A/B. Continue alternating.", bodyAr: "نمط أحد/ثلاثاء/خميس هو الأفضل. الأسبوع 1: أ/ب/أ. الأسبوع 2: ب/أ/ب. واصل التبادل." },
      { titleEn: "Sleep is your supplement", titleAr: "النوم هو مكمّلك الأهم", bodyEn: "Strength gains happen during sleep. 8+ hours every night, no exceptions.", bodyAr: "اكتساب القوة يحصل أثناء النوم. 8+ ساعات كل ليلة، بدون استثناء." },
    ],
    schedule: [
      {
        dayNumber: 1, labelEn: "Workout A", labelAr: "تمرين أ", focus: "full_body_strength",
        exercises: [
          { exerciseId: "qXTaZnJ", nameEn: "Barbell Back Squat", nameAr: "سكوات بار", sets: 5, reps: "5", restSeconds: 180, notesEn: "All 5 sets at working weight.", notesAr: "كل الـ5 سيتات بنفس وزن العمل." },
          { exerciseId: "EIeI8Vf", nameEn: "Barbell Bench Press", nameAr: "بنش بريس بار", sets: 5, reps: "5", restSeconds: 180, notesEn: "Same weight all 5 sets. Use spotter.", notesAr: "نفس الوزن في الـ5 سيتات. استخدم spotter." },
          { exerciseId: "eZyBC3j", nameEn: "Barbell Bent Over Row", nameAr: "تجديف بار منحني", sets: 5, reps: "5", restSeconds: 180, notesEn: "Strict form. Don't use too much momentum.", notesAr: "فورم صارم. لا تستخدم زخم كثير." },
        ],
      },
      {
        dayNumber: 2, labelEn: "Workout B", labelAr: "تمرين ب", focus: "full_body_strength",
        exercises: [
          { exerciseId: "qXTaZnJ", nameEn: "Barbell Back Squat", nameAr: "سكوات بار", sets: 5, reps: "5", restSeconds: 180, notesEn: "Squat is in every workout. That's the program.", notesAr: "السكوات في كل تمرين. هذا أساس البرنامج." },
          { exerciseId: "kTbSH9h", nameEn: "Barbell Overhead Press", nameAr: "ضغط أكتاف بار", sets: 5, reps: "5", restSeconds: 180, notesEn: "Hardest of the 5 lifts. Progress is slow—be patient.", notesAr: "أصعب الحركات الـ5. التقدّم بطيء—خذ راحتك." },
          { exerciseId: "ila4NZS", nameEn: "Barbell Deadlift", nameAr: "ديدلفت بار", sets: 1, reps: "5", restSeconds: 240, notesEn: "Only 1 working set. Heavy and intense.", notesAr: "سيت واحد بس. ثقيل ومكثف." },
        ],
      },
    ],
  },
];

// ── Utilities ─────────────────────────────────────────────────────────────────

export function getExerciseGif(exerciseId: string): string {
  return `https://static.exercisedb.dev/media/${exerciseId}.gif`;
}

export function getProgramsForCategory(tag: CategoryTag): Program[] {
  return PROGRAMS.filter(
    (p) => p.primaryCategory === tag || p.tags.includes(tag as CategoryTag)
  );
}

export function getCategoryByTag(tag: string): Category | undefined {
  return CATEGORIES.find((c) => c.tag === tag);
}
