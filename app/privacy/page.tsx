import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سياسة الخصوصية — Privacy Policy",
  description: "سياسة الخصوصية لتطبيق مومنتم — Momentum Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FAF8F5] text-[#2C2417] min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#FAF8F5]/85 backdrop-blur-xl border-b border-[#8B6E4E]/10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/Logo (2).png" alt="Momentum" width={28} height={28} className="rounded-lg" />
            <span className="font-bold text-lg tracking-tight text-[#2C2417]">Momentum</span>
          </Link>
          <Link href="/" className="text-sm text-[#6B5D4F] hover:text-[#2C2417] transition-colors">
            الرئيسية
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        {/* Arabic Section */}
        <section className="mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B0D14] mb-2">سياسة الخصوصية</h1>
          <p className="text-[#6B5D4F] mb-10">آخر تحديث: 7 مارس 2026</p>

          <div className="space-y-8 text-[#4a3f35] leading-relaxed">
            <p>نحن في مومنتم نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضّح هذه السياسة كيف نجمع بياناتك ونستخدمها ونحميها.</p>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">١. البيانات التي نجمعها</h2>
              <p className="font-medium mb-2">معلومات الحساب:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>الاسم والبريد الإلكتروني عند التسجيل</li>
                <li>بيانات تسجيل الدخول عبر Google أو Apple (لا نحتفظ بكلمات المرور الخاصة بهم)</li>
              </ul>
              <p className="font-medium mb-2 mt-4">بيانات الصحة واللياقة:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>الوزن والطول والعمر والجنس</li>
                <li>السعرات الحرارية والوجبات المسجلة</li>
                <li>بيانات التمارين والأوزان</li>
                <li>قياسات الجسم</li>
                <li>أهداف الماء والخطوات</li>
                <li>بيانات الصيام المتقطع</li>
              </ul>
              <p className="font-medium mb-2 mt-4">صور الوجبات:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>الصور التي ترفعها لتحليل السعرات تُرسل إلى خوادم الذكاء الاصطناعي للتحليل فقط ولا تُخزّن بعد المعالجة</li>
              </ul>
              <p className="font-medium mb-2 mt-4">جهات الاتصال:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>التطبيق لا يصل إلى جهات الاتصال أو دفتر العناوين في جهازك ولا يجمع أي بيانات منها</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٢. كيف نستخدم بياناتك</h2>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>تقديم خدمات التطبيق (تتبع التغذية، التمارين، خطط الوجبات)</li>
                <li>تحسين تجربة الاستخدام واقتراح وجبات مناسبة لك</li>
                <li>تحليل الوجبات وتوليد خطط الأكل عبر الذكاء الاصطناعي (OpenAI)</li>
                <li>مزامنة بياناتك بين أجهزتك</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٣. تخزين البيانات وحمايتها</h2>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>نستخدم Supabase كقاعدة بيانات سحابية مع تشفير كامل</li>
                <li>جميع الاتصالات مشفرة عبر HTTPS</li>
                <li>سياسات أمان على مستوى الصفوف (Row Level Security) تضمن أن بياناتك لا يراها أحد غيرك</li>
                <li>لا نبيع أو نشارك بياناتك الشخصية مع أطراف ثالثة</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٤. خدمات الطرف الثالث</h2>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li><strong>OpenAI:</strong> لتحليل صور الوجبات، الدردشة الذكية، وتوليد خطط الوجبات. تُرسل البيانات الضرورية فقط ولا تُستخدم لتدريب نماذجهم.</li>
                <li><strong>Apple Health / Health Connect:</strong> لمزامنة الخطوات (اختياري، يتطلب إذنك)</li>
                <li><strong>RevenueCat:</strong> لإدارة الاشتراكات</li>
                <li><strong>Supabase:</strong> لتخزين البيانات والمصادقة</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٥. خدمات الذكاء الاصطناعي</h2>
              <p>خدمات الذكاء الاصطناعي في التطبيق (تحليل الصور، الدردشة الذكية، توليد خطط الوجبات) قد تتوقف مؤقتاً أو تنخفض جودتها في بعض الأحيان بسبب أعمال الصيانة، التحديث، أو ظروف تقنية خارجة عن إرادتنا. سنحرص على إبلاغك مسبقاً قدر الإمكان، وباقي مميزات التطبيق تبقى تعمل بشكل طبيعي خلال هذه الفترات.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٦. Apple Health</h2>
              <p>إذا فعّلت ربط Apple Health:</p>
              <ul className="list-disc list-inside space-y-1 mr-4 mt-2">
                <li>نقرأ بيانات الخطوات فقط</li>
                <li>لا نكتب أي بيانات في Apple Health</li>
                <li>يمكنك إلغاء الربط في أي وقت من إعدادات جهازك</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٧. حقوقك</h2>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>يمكنك حذف حسابك وجميع بياناتك في أي وقت من داخل التطبيق</li>
                <li>يمكنك تصدير بياناتك</li>
                <li>يمكنك تعديل معلوماتك الشخصية من الإعدادات</li>
                <li>يمكنك إلغاء تخزين بياناتك على خوادمنا بحذف حسابك</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٨. الأطفال</h2>
              <p>التطبيق غير موجّه للأطفال تحت سن 17 عاماً ولا نجمع بياناتهم عن قصد.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٩. التعديلات</h2>
              <p>قد نحدّث هذه السياسة من وقت لآخر. سننبّهك داخل التطبيق عند أي تغيير جوهري.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">١٠. التواصل</h2>
              <p>إذا عندك أي سؤال عن الخصوصية:</p>
              <p className="mt-2">البريد الإلكتروني: <a href="mailto:info@momentumsup.com" className="text-[#4D8AFF] hover:underline">info@momentumsup.com</a></p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-[#8B6E4E]/15 mb-20" />

        {/* English Section */}
        <section dir="ltr" className="text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B0D14] mb-2">Privacy Policy</h1>
          <p className="text-[#6B5D4F] mb-10">Last updated: March 7, 2026</p>

          <div className="space-y-8 text-[#4a3f35] leading-relaxed">
            <p>At Momentum, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect your data.</p>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">1. Data We Collect</h2>
              <p className="font-medium mb-2">Account Information:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Name and email address upon registration</li>
                <li>Google or Apple sign-in data (we do not store their passwords)</li>
              </ul>
              <p className="font-medium mb-2 mt-4">Health & Fitness Data:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Weight, height, age, and gender</li>
                <li>Calories and logged meals</li>
                <li>Exercise and weight data</li>
                <li>Body measurements</li>
                <li>Water and step goals</li>
                <li>Intermittent fasting data</li>
              </ul>
              <p className="font-medium mb-2 mt-4">Meal Photos:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Photos you upload for calorie analysis are sent to AI servers for processing only and are not stored after analysis</li>
              </ul>
              <p className="font-medium mb-2 mt-4">Contacts:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>This app does not access your device contacts or address book and does not collect any data from them</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">2. How We Use Your Data</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Providing app services (nutrition tracking, workouts, meal plans)</li>
                <li>Improving user experience and suggesting suitable meals</li>
                <li>Analyzing meals and generating meal plans via AI (OpenAI)</li>
                <li>Syncing your data across your devices</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">3. Data Storage & Security</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>We use Supabase as a cloud database with full encryption</li>
                <li>All connections are encrypted via HTTPS</li>
                <li>Row Level Security (RLS) policies ensure only you can access your data</li>
                <li>We do not sell or share your personal data with third parties</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">4. Third-Party Services</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>OpenAI:</strong> For meal photo analysis, AI chat, and meal plan generation. Only necessary data is sent and is not used to train their models.</li>
                <li><strong>Apple Health / Health Connect:</strong> For step syncing (optional, requires your permission)</li>
                <li><strong>RevenueCat:</strong> For subscription management</li>
                <li><strong>Supabase:</strong> For data storage and authentication</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">5. AI Services</h2>
              <p>AI services in the app (photo analysis, AI chat, meal plan generation) may be temporarily unavailable or experience degraded performance due to maintenance, updates, or technical circumstances beyond our control. We will notify you in advance when possible, and all other app features continue to work normally during these periods.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">6. Apple Health</h2>
              <p>If you enable Apple Health integration:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>We only read step data</li>
                <li>We do not write any data to Apple Health</li>
                <li>You can disable the integration at any time from your device settings</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">7. Your Rights</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>You can delete your account and all your data at any time from within the app</li>
                <li>You can export your data</li>
                <li>You can edit your personal information from Settings</li>
                <li>You can opt out of having your data stored on our servers by deleting your account</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">8. Children</h2>
              <p>This app is not intended for children under 17 years of age and we do not knowingly collect their data.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">9. Changes</h2>
              <p>We may update this policy from time to time. We will notify you within the app of any significant changes.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">10. Contact</h2>
              <p>If you have any questions about privacy:</p>
              <p className="mt-2">Email: <a href="mailto:info@momentumsup.com" className="text-[#4D8AFF] hover:underline">info@momentumsup.com</a></p>
            </div>
          </div>
        </section>

        <div className="text-center text-sm text-[#8B6E4E]/50 mt-16">
          &copy; 2026 Momentum. All rights reserved. جميع الحقوق محفوظة.
        </div>
      </main>
    </div>
  );
}
