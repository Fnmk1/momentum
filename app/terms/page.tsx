import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "شروط الاستخدام — Terms of Use",
  description: "شروط الاستخدام لتطبيق مومنتم — Momentum Terms of Use",
};

export default function TermsOfUse() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B0D14] mb-2">شروط الاستخدام</h1>
          <p className="text-[#6B5D4F] mb-10">آخر تحديث: 7 مارس 2026</p>

          <div className="space-y-8 text-[#4a3f35] leading-relaxed">
            <p>باستخدامك تطبيق مومنتم (Momentum)، فإنك توافق على الشروط والأحكام التالية. يرجى قراءتها بعناية.</p>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">١. وصف الخدمة</h2>
              <p>مومنتم هو تطبيق لتتبع التغذية والتمارين الرياضية بمساعدة الذكاء الاصطناعي. يوفر التطبيق أدوات لحساب السعرات الحرارية، تتبع التمارين، تحليل صور الوجبات، توليد خطط وجبات أسبوعية، ومجتمع لمشاركة الوصفات والمطاعم.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٢. الاشتراك والدفع</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li><strong>اسم الاشتراك:</strong> Momentum Pro</li>
                <li><strong>مدة الاشتراك:</strong> شهري (يتجدد تلقائياً كل شهر)</li>
                <li><strong>السعر:</strong> 34.99 ريال سعودي شهرياً</li>
                <li><strong>الفترة التجريبية:</strong> 3 أيام مجانية عند الاشتراك لأول مرة</li>
                <li><strong>الدفع:</strong> يتم خصم المبلغ من حساب Apple ID الخاص بك عند تأكيد الشراء</li>
                <li><strong>التجديد التلقائي:</strong> يتجدد الاشتراك تلقائياً ما لم يتم إلغاؤه قبل 24 ساعة على الأقل من نهاية الفترة الحالية</li>
                <li><strong>إدارة الاشتراك:</strong> يمكنك إدارة اشتراكك أو إلغاؤه من إعدادات حساب Apple ID الخاص بك في أي وقت</li>
                <li><strong>الفترة التجريبية:</strong> أي جزء غير مستخدم من الفترة التجريبية المجانية سيُلغى عند شراء اشتراك</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٣. حسابك</h2>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>أنت مسؤول عن الحفاظ على سرية معلومات حسابك</li>
                <li>يجب أن تكون المعلومات التي تقدمها دقيقة وحديثة</li>
                <li>يحق لنا تعليق أو إنهاء حسابك في حال انتهاك هذه الشروط</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٤. الاستخدام المقبول</h2>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>استخدام التطبيق للأغراض الشخصية فقط</li>
                <li>عدم إساءة استخدام خدمات الذكاء الاصطناعي</li>
                <li>عدم نشر محتوى مسيء أو غير لائق في المجتمع</li>
                <li>عدم محاولة اختراق أو الإضرار بالتطبيق أو خوادمه</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٥. إخلاء المسؤولية الصحية</h2>
              <p>مومنتم ليس بديلاً عن الاستشارة الطبية. المعلومات الغذائية والتوصيات المقدمة عبر الذكاء الاصطناعي هي للأغراض الإرشادية فقط. استشر طبيبك أو أخصائي التغذية قبل اتخاذ أي قرارات صحية جوهرية.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٦. المحتوى المقدم من المستخدمين</h2>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>أنت تحتفظ بملكية المحتوى الذي تنشره (وصفات، صور، تقييمات)</li>
                <li>بنشر محتوى عام، فإنك تمنحنا ترخيصاً لعرضه داخل التطبيق</li>
                <li>يحق لنا إزالة أي محتوى ينتهك هذه الشروط</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٧. تعديل الخدمة والشروط</h2>
              <p>يحق لنا تعديل أو إيقاف أي جزء من الخدمة في أي وقت. سننبهك بأي تغييرات جوهرية على هذه الشروط عبر التطبيق.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٨. إنهاء الاستخدام</h2>
              <p>يمكنك حذف حسابك في أي وقت من إعدادات التطبيق. عند الحذف، ستُزال جميع بياناتك الشخصية من خوادمنا.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">٩. التواصل</h2>
              <p>لأي استفسار حول هذه الشروط:</p>
              <p className="mt-2">البريد الإلكتروني: <a href="mailto:info@momentumsup.com" className="text-[#4D8AFF] hover:underline">info@momentumsup.com</a></p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-[#8B6E4E]/15 mb-20" />

        {/* English Section */}
        <section dir="ltr" className="text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B0D14] mb-2">Terms of Use</h1>
          <p className="text-[#6B5D4F] mb-10">Last updated: March 7, 2026</p>

          <div className="space-y-8 text-[#4a3f35] leading-relaxed">
            <p>By using the Momentum app, you agree to the following terms and conditions. Please read them carefully.</p>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">1. Service Description</h2>
              <p>Momentum is an AI-powered nutrition and fitness tracking application. The app provides tools for calorie counting, workout tracking, meal photo analysis, weekly meal plan generation, and a community for sharing recipes and restaurants.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">2. Subscription & Payment</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Subscription name:</strong> Momentum Pro</li>
                <li><strong>Subscription length:</strong> Monthly (auto-renews every month)</li>
                <li><strong>Price:</strong> 34.99 SAR per month</li>
                <li><strong>Free trial:</strong> 3-day free trial for first-time subscribers</li>
                <li><strong>Payment:</strong> Payment will be charged to your Apple ID account upon confirmation of purchase</li>
                <li><strong>Auto-renewal:</strong> Your subscription automatically renews unless it is cancelled at least 24 hours before the end of the current period</li>
                <li><strong>Manage subscription:</strong> You can manage or cancel your subscription from your Apple ID account settings at any time</li>
                <li><strong>Free trial:</strong> Any unused portion of a free trial period will be forfeited when you purchase a subscription</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">3. Your Account</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>You are responsible for maintaining the confidentiality of your account information</li>
                <li>The information you provide must be accurate and up to date</li>
                <li>We reserve the right to suspend or terminate your account if these terms are violated</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">4. Acceptable Use</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Use the app for personal purposes only</li>
                <li>Do not abuse AI services</li>
                <li>Do not post offensive or inappropriate content in the community</li>
                <li>Do not attempt to hack or harm the app or its servers</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">5. Health Disclaimer</h2>
              <p>Momentum is not a substitute for medical advice. Nutritional information and recommendations provided through AI are for guidance purposes only. Consult your doctor or nutritionist before making any significant health decisions.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">6. User-Generated Content</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>You retain ownership of content you publish (recipes, photos, ratings)</li>
                <li>By publishing public content, you grant us a license to display it within the app</li>
                <li>We reserve the right to remove any content that violates these terms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">7. Service & Terms Modifications</h2>
              <p>We reserve the right to modify or discontinue any part of the service at any time. We will notify you of any significant changes to these terms through the app.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">8. Termination</h2>
              <p>You can delete your account at any time from the app settings. Upon deletion, all your personal data will be removed from our servers.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2C2417] mb-3">9. Contact</h2>
              <p>For any questions about these terms:</p>
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
