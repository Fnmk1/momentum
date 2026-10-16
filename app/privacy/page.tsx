import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سياسة الخصوصية — Privacy Policy",
  description: "سياسة الخصوصية لتطبيق مومنتم — Momentum Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-black text-neutral-300 min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/Logo (2).png" alt="Momentum" width={28} height={28} className="rounded-lg" />
            <span className="font-bold text-lg tracking-tight text-white">Momentum</span>
          </Link>
          <Link href="/" className="text-sm text-neutral-500 hover:text-white transition-colors">
            الرئيسية
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        {/* Arabic Section */}
        <section className="mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">سياسة الخصوصية</h1>
          <p className="text-neutral-500 mb-10">آخر تحديث: 16 أكتوبر 2026</p>

          <div className="space-y-8 text-neutral-400 leading-relaxed">
            <p>نحن في مومنتم نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضّح هذه السياسة كيف نجمع بياناتك ونستخدمها ونحميها.</p>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">١. البيانات التي نجمعها</h2>
              <p className="font-medium mb-2 text-neutral-300">معلومات الحساب:</p>
              <ul className="list-disc list-inside space-y-1 mr-4 text-neutral-400">
                <li>الاسم والبريد الإلكتروني عند التسجيل</li>
                <li>بيانات تسجيل الدخول عبر Google أو Apple (لا نحتفظ بكلمات المرور الخاصة بهم)</li>
              </ul>
              <p className="font-medium mb-2 mt-4 text-neutral-300">بيانات الصحة واللياقة:</p>
              <ul className="list-disc list-inside space-y-1 mr-4 text-neutral-400">
                <li>الوزن والطول والعمر والجنس</li>
                <li>السعرات الحرارية والوجبات المسجلة</li>
                <li>بيانات التمارين والأوزان</li>
                <li>قياسات الجسم</li>
                <li>أهداف الماء والخطوات</li>
                <li>بيانات الصيام المتقطع</li>
              </ul>
              <p className="font-medium mb-2 mt-4 text-neutral-300">الصور والصوت:</p>
              <ul className="list-disc list-inside space-y-1 mr-4 text-neutral-400">
                <li>صور الوجبات اللي تصوّرها لتحليل السعرات تُرسل لخوادم الذكاء الاصطناعي للتحليل فقط ولا نخزّنها</li>
                <li>التسجيلات الصوتية (ميزة «قول») تُرسل لتحويلها إلى نص فقط ولا نخزّنها</li>
                <li>الصور اللي تحفظها بنفسك (صور التقدّم، صورة الملف، البانر، صور وصفاتك) تُخزّن في حسابك</li>
              </ul>
              <p className="font-medium mb-2 mt-4 text-neutral-300">المحتوى اللي تكتبه:</p>
              <ul className="list-disc list-inside space-y-1 mr-4 text-neutral-400">
                <li>محادثاتك مع الذكاء الاصطناعي وأسئلة الباحث، والوصفات والتقييمات اللي تنشرها</li>
              </ul>
              <p className="font-medium mb-2 mt-4 text-neutral-300">معرّفات الجهاز وبيانات الاستخدام:</p>
              <ul className="list-disc list-inside space-y-1 mr-4 text-neutral-400">
                <li>معرّف الإعلانات (Android Advertising ID) ومعرّف التثبيت، لمعرفة من وين جا التثبيت (مثلاً إعلان أو رابط)</li>
                <li>رمز الإشعارات لإرسال الإشعارات اللي فعّلتها</li>
                <li>طريقة استخدامك للتطبيق (الشاشات والأزرار) وتسجيلات للجلسات تُخفى فيها البيانات الحساسة مثل الخطوات وصور التقدّم وما تكتبه في الحقول</li>
                <li>تقارير الأعطال التقنية</li>
              </ul>
              <p className="font-medium mb-2 mt-4 text-neutral-300">المشتريات:</p>
              <ul className="list-disc list-inside space-y-1 mr-4 text-neutral-400">
                <li>حالة اشتراكك وسجل الشراء (الدفع نفسه يتم عند Google Play أو Apple ولا نشوف بيانات بطاقتك)</li>
              </ul>
              <p className="font-medium mb-2 mt-4 text-neutral-300">جهات الاتصال:</p>
              <ul className="list-disc list-inside space-y-1 mr-4 text-neutral-400">
                <li>التطبيق لا يصل إلى جهات الاتصال أو دفتر العناوين في جهازك ولا يجمع أي بيانات منها</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">٢. كيف نستخدم بياناتك</h2>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>تقديم خدمات التطبيق (تتبع التغذية، التمارين، المجتمع)</li>
                <li>تحسين تجربة الاستخدام واقتراح وجبات مناسبة لك</li>
                <li>تحليل الوجبات والدردشة والبحث عبر الذكاء الاصطناعي (OpenAI)</li>
                <li>مزامنة بياناتك بين أجهزتك وإرسال الإشعارات</li>
                <li>فهم استخدام التطبيق وإصلاح الأعطال، وقياس نتائج حملاتنا الإعلانية</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">٣. تخزين البيانات وحمايتها</h2>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>نستخدم Supabase كقاعدة بيانات سحابية مع تشفير كامل</li>
                <li>جميع الاتصالات مشفرة عبر HTTPS</li>
                <li>سياسات أمان على مستوى الصفوف (Row Level Security) تضمن أن بياناتك لا يراها أحد غيرك</li>
                <li>لا نبيع بياناتك الشخصية أبداً</li>
                <li>الجهة الوحيدة اللي نشارك معها بيانات هي AppsFlyer: معرّف الإعلانات وبيانات التثبيت، لقياس من وين جا التثبيت. بياناتك الصحية ما تنشارك مع أحد</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-5 mb-2">مدة الاحتفاظ بالبيانات</h3>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li><strong className="text-neutral-200">طول فترة نشاط حسابك:</strong> نحتفظ ببياناتك (الوجبات، التمارين، القياسات، الأهداف، المحادثات) طالما حسابك قائم، حتى نقدر نعرض لك تقدمك عبر الزمن.</li>
                <li><strong className="text-neutral-200">عند حذف الحساب:</strong> تُحذف جميع بياناتك الشخصية نهائياً وفوراً من خوادمنا بدون فترة انتظار، وتشمل سجلات الأكل والتمارين والقياسات والصور والمحادثات. الحذف نهائي ولا يمكن التراجع عنه.</li>
                <li><strong className="text-neutral-200">بيانات الاستخدام:</strong> إحصائيات استخدام التطبيق تُفصل عن هويتك عند حذف الحساب وتبقى بصيغة مجهولة لا تدل عليك، لأغراض تحسين التطبيق.</li>
                <li><strong className="text-neutral-200">البيانات على جهازك:</strong> تُمسح عند تسجيل الخروج أو حذف التطبيق.</li>
                <li><strong className="text-neutral-200">طلبات الذكاء الاصطناعي:</strong> لا تُستخدم لتدريب نماذج مزوّد الخدمة، ويحذفها من عنده خلال 30 يوم كحد أقصى.</li>
                <li><strong className="text-neutral-200">تقارير الأعطال:</strong> تُحذف تلقائياً خلال 90 يوم.</li>
                <li>تقدر تحذف حسابك في أي وقت من: الإعدادات ← حذف الحساب. الخطوات كاملة في <a href="/delete-account" className="text-[#2997ff] hover:underline">صفحة حذف الحساب</a>.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">٤. خدمات الطرف الثالث</h2>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li><strong className="text-neutral-200">OpenAI:</strong> لتحليل صور الوجبات والتسجيلات الصوتية، الدردشة الذكية، والباحث. تُرسل البيانات الضرورية فقط ولا تُستخدم لتدريب نماذجهم.</li>
                <li><strong className="text-neutral-200">Apple Health / Health Connect:</strong> لقراءة الخطوات (اختياري، يتطلب إذنك)</li>
                <li><strong className="text-neutral-200">RevenueCat:</strong> لإدارة الاشتراكات</li>
                <li><strong className="text-neutral-200">Supabase:</strong> لتخزين البيانات والمصادقة</li>
                <li><strong className="text-neutral-200">AppsFlyer:</strong> لقياس مصدر التثبيت (معرّف الإعلانات وبيانات التثبيت). تقدر توقفه من إعدادات جوالك: الخصوصية ← الإعلانات ← حذف معرّف الإعلانات.</li>
                <li><strong className="text-neutral-200">PostHog:</strong> لتحليل استخدام التطبيق وتسجيلات الجلسات (مع إخفاء البيانات الحساسة)</li>
                <li><strong className="text-neutral-200">Sentry:</strong> لتقارير الأعطال التقنية</li>
                <li><strong className="text-neutral-200">Expo:</strong> لإرسال الإشعارات</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">٥. خدمات الذكاء الاصطناعي</h2>
              <p>خدمات الذكاء الاصطناعي في التطبيق (تحليل الصور، الدردشة الذكية، الباحث) قد تتوقف مؤقتاً أو تنخفض جودتها في بعض الأحيان بسبب أعمال الصيانة، التحديث، أو ظروف تقنية خارجة عن إرادتنا. سنحرص على إبلاغك مسبقاً قدر الإمكان، وباقي مميزات التطبيق تبقى تعمل بشكل طبيعي خلال هذه الفترات.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">٦. Apple Health و Health Connect</h2>
              <p>إذا فعّلت ربط Apple Health أو Health Connect:</p>
              <ul className="list-disc list-inside space-y-1 mr-4 mt-2">
                <li>نقرأ بيانات الخطوات فقط</li>
                <li>لا نكتب أي بيانات فيها</li>
                <li>بياناتها ما تُستخدم للإعلانات ولا نبيعها ولا نشاركها مع أي جهة</li>
                <li>يمكنك إلغاء الربط في أي وقت من إعدادات جهازك</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">٧. حقوقك</h2>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>يمكنك حذف حسابك وجميع بياناتك في أي وقت من داخل التطبيق (<a href="/delete-account" className="text-[#2997ff] hover:underline">الخطوات</a>)</li>
                <li>يمكنك حذف أي بيانات معينة (أكلة، قياس، صورة، وصفة، محادثة) بدون حذف حسابك</li>
                <li>يمكنك تعديل معلوماتك الشخصية من الإعدادات</li>
                <li>يمكنك إلغاء تخزين بياناتك على خوادمنا بحذف حسابك</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">٨. الأطفال</h2>
              <p>التطبيق غير موجّه للأطفال تحت سن 17 عاماً ولا نجمع بياناتهم عن قصد.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">٩. التعديلات</h2>
              <p>قد نحدّث هذه السياسة من وقت لآخر. سننبّهك داخل التطبيق عند أي تغيير جوهري.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">١٠. التواصل</h2>
              <p>إذا عندك أي سؤال عن الخصوصية:</p>
              <p className="mt-2">البريد الإلكتروني: <a href="mailto:info@momentumsup.com" className="text-[#2997ff] hover:underline">info@momentumsup.com</a></p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-20" />

        {/* English Section */}
        <section dir="ltr" className="text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-neutral-500 mb-10">Last updated: October 16, 2026</p>

          <div className="space-y-8 text-neutral-400 leading-relaxed">
            <p>At Momentum, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect your data.</p>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">1. Data We Collect</h2>
              <p className="font-medium mb-2 text-neutral-300">Account Information:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-neutral-400">
                <li>Name and email address upon registration</li>
                <li>Google or Apple sign-in data (we do not store their passwords)</li>
              </ul>
              <p className="font-medium mb-2 mt-4 text-neutral-300">Health & Fitness Data:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-neutral-400">
                <li>Weight, height, age, and gender</li>
                <li>Calories and logged meals</li>
                <li>Exercise and weight data</li>
                <li>Body measurements</li>
                <li>Water and step goals</li>
                <li>Intermittent fasting data</li>
              </ul>
              <p className="font-medium mb-2 mt-4 text-neutral-300">Photos and Audio:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-neutral-400">
                <li>Meal photos you take for calorie analysis are sent to AI servers for analysis only and are not stored by us</li>
                <li>Voice recordings (the voice logging feature) are sent for transcription only and are not stored by us</li>
                <li>Photos you choose to save (progress photos, profile photo, banner, recipe photos) are stored in your account</li>
              </ul>
              <p className="font-medium mb-2 mt-4 text-neutral-300">Content You Write:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-neutral-400">
                <li>Your AI chats and Researcher questions, and the recipes and ratings you publish</li>
              </ul>
              <p className="font-medium mb-2 mt-4 text-neutral-300">Device Identifiers and Usage Data:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-neutral-400">
                <li>The advertising ID (Android Advertising ID) and an install ID, to learn where an install came from (for example an ad or a link)</li>
                <li>A push token, to send the notifications you turned on</li>
                <li>How you use the app (screens and taps) and session recordings in which sensitive data such as steps, progress photos and what you type into fields is masked</li>
                <li>Technical crash reports</li>
              </ul>
              <p className="font-medium mb-2 mt-4 text-neutral-300">Purchases:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-neutral-400">
                <li>Your subscription status and purchase history (payment happens in Google Play or Apple; we never see your card details)</li>
              </ul>
              <p className="font-medium mb-2 mt-4 text-neutral-300">Contacts:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-neutral-400">
                <li>This app does not access your device contacts or address book and does not collect any data from them</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Data</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Providing app services (nutrition tracking, workouts, community)</li>
                <li>Improving user experience and suggesting suitable meals</li>
                <li>Meal analysis, chat and research via AI (OpenAI)</li>
                <li>Syncing your data across your devices and sending notifications</li>
                <li>Understanding app usage, fixing crashes, and measuring our ad campaigns</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">3. Data Storage & Security</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>We use Supabase as a cloud database with full encryption</li>
                <li>All connections are encrypted via HTTPS</li>
                <li>Row Level Security (RLS) policies ensure only you can access your data</li>
                <li>We never sell your personal data</li>
                <li>The only party we share data with is AppsFlyer: the advertising ID and install data, to measure where installs come from. Your health data is never shared</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-5 mb-2">Data Retention</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong className="text-neutral-200">While your account is active:</strong> we retain your data (meals, workouts, measurements, goals, conversations) for as long as your account exists, so we can show you your progress over time.</li>
                <li><strong className="text-neutral-200">When you delete your account:</strong> all of your personal data is permanently and immediately erased from our servers, with no retention period. This includes food logs, workouts, measurements, photos and conversations. Deletion is irreversible.</li>
                <li><strong className="text-neutral-200">Usage analytics:</strong> app usage statistics are detached from your identity when you delete your account and remain only in anonymous form that cannot be linked back to you, for product improvement.</li>
                <li><strong className="text-neutral-200">Data on your device:</strong> cleared when you sign out or uninstall the app.</li>
                <li><strong className="text-neutral-200">AI requests:</strong> never used to train our AI provider&apos;s models, and deleted by them within 30 days at most.</li>
                <li><strong className="text-neutral-200">Crash reports:</strong> deleted automatically within 90 days.</li>
                <li>You can delete your account at any time from Settings → Delete Account. Full steps on the <a href="/delete-account" className="text-[#2997ff] hover:underline">account deletion page</a>.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong className="text-neutral-200">OpenAI:</strong> For meal photo and voice analysis, AI chat, and the Researcher. Only necessary data is sent and is not used to train their models.</li>
                <li><strong className="text-neutral-200">Apple Health / Health Connect:</strong> To read steps (optional, requires your permission)</li>
                <li><strong className="text-neutral-200">RevenueCat:</strong> For subscription management</li>
                <li><strong className="text-neutral-200">Supabase:</strong> For data storage and authentication</li>
                <li><strong className="text-neutral-200">AppsFlyer:</strong> To measure where installs come from (advertising ID and install data). You can turn it off in your phone settings: Privacy → Ads → Delete advertising ID.</li>
                <li><strong className="text-neutral-200">PostHog:</strong> For app usage analytics and session recordings (with sensitive data masked)</li>
                <li><strong className="text-neutral-200">Sentry:</strong> For technical crash reports</li>
                <li><strong className="text-neutral-200">Expo:</strong> For sending notifications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">5. AI Services</h2>
              <p>AI services in the app (photo analysis, AI chat, the Researcher) may be temporarily unavailable or experience degraded performance due to maintenance, updates, or technical circumstances beyond our control. We will notify you in advance when possible, and all other app features continue to work normally during these periods.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">6. Apple Health and Health Connect</h2>
              <p>If you enable Apple Health or Health Connect:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>We only read step data</li>
                <li>We do not write any data to them</li>
                <li>Their data is never used for advertising, never sold and never shared with anyone</li>
                <li>You can disable the integration at any time from your device settings</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>You can delete your account and all your data at any time from within the app (<a href="/delete-account" className="text-[#2997ff] hover:underline">steps</a>)</li>
                <li>You can delete specific data (a food entry, measurement, photo, recipe or chat) without deleting your account</li>
                <li>You can edit your personal information from Settings</li>
                <li>You can opt out of having your data stored on our servers by deleting your account</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">8. Children</h2>
              <p>This app is not intended for children under 17 years of age and we do not knowingly collect their data.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">9. Changes</h2>
              <p>We may update this policy from time to time. We will notify you within the app of any significant changes.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
              <p>If you have any questions about privacy:</p>
              <p className="mt-2">Email: <a href="mailto:info@momentumsup.com" className="text-[#2997ff] hover:underline">info@momentumsup.com</a></p>
            </div>
          </div>
        </section>

        <div className="text-center text-sm text-neutral-600 mt-16">
          <p>&copy; 2026 MOMENTIFY ESTABLISHMENT. All rights reserved.</p>
          <p className="text-xs text-neutral-700 mt-1">Momentum is developed and published by MOMENTIFY ESTABLISHMENT, Riyadh, Saudi Arabia.</p>
        </div>
      </main>
    </div>
  );
}
