import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "حذف الحساب — Delete your account",
  description: "كيف تحذف حسابك في مومنتم وبياناتك — How to delete your Momentum account and data",
};

const EMAIL = "info@momentumsup.com";

export default function DeleteAccount() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">حذف حسابك في مومنتم</h1>
          <p className="text-neutral-500 mb-10">تطبيق Momentum من MOMENTIFY ESTABLISHMENT</p>

          <div className="space-y-8 text-neutral-400 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">من داخل التطبيق (الأسرع)</h2>
              <ol className="list-decimal list-inside space-y-1 mr-4">
                <li>افتح تطبيق مومنتم وسجّل دخولك بالحساب اللي تبي تحذفه</li>
                <li>من الرئيسية اضغط أيقونة الإعدادات</li>
                <li>انزل لآخر الصفحة واضغط <strong className="text-neutral-200">حذف الحساب</strong></li>
                <li>أكّد بالضغط على <strong className="text-neutral-200">حذف</strong></li>
              </ol>
              <p className="mt-3">ينحذف حسابك وبياناتك فوراً، والحذف نهائي وما يمكن التراجع عنه.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">ما تقدر تفتح التطبيق؟</h2>
              <p>
                أرسل إيميل إلى{" "}
                <a href={`mailto:${EMAIL}?subject=Delete%20my%20account`} className="text-[#2997ff] hover:underline">{EMAIL}</a>{" "}
                من نفس البريد المسجّل في حسابك، بعنوان «حذف الحساب». نتحقق إن الطلب منك ونحذف الحساب خلال 30 يوم كحد أقصى، ونبلغك لما يخلص.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">وش ينحذف</h2>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>معلومات حسابك: الاسم والبريد وبيانات الدخول</li>
                <li>ملفك: الطول والوزن والعمر والأهداف والإعدادات</li>
                <li>كل سجلاتك: الأكل والماء والخطوات والكافيين والصيام والوزن والقياسات</li>
                <li>تمارينك وبرامجك وجلساتك وأرقامك القياسية</li>
                <li>محادثاتك مع الذكاء الاصطناعي ونتائج الباحث</li>
                <li>صورك: صور التقدّم وصورة الملف والبانر وصور وصفاتك</li>
                <li>وصفاتك المنشورة وتقييماتك، والمطاعم اللي أضفتها</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">وش يبقى</h2>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li><strong className="text-neutral-200">إحصائيات الاستخدام:</strong> تنفصل عن هويتك وتبقى مجهولة ما تدل عليك، لتحسين التطبيق.</li>
                <li><strong className="text-neutral-200">سجلات الأخطاء:</strong> تقارير الأعطال التقنية تنحذف تلقائياً خلال 90 يوم.</li>
                <li><strong className="text-neutral-200">سجلات الشراء:</strong> يحتفظ فيها Google Play و Apple حسب سياساتهم وما نقدر نحذفها.</li>
              </ul>
              <p className="mt-3">
                <strong className="text-neutral-200">مهم:</strong> حذف الحساب ما يلغي اشتراكك. ألغِ الاشتراك من Google Play (الملف الشخصي ← الدفعات والاشتراكات) أو من إعدادات Apple قبل الحذف.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">تبي تحذف بيانات معينة بس؟</h2>
              <p>تقدر تحذف أي شي بدون ما تحذف حسابك، من داخل التطبيق: أي أكلة أو كوب ماء أو قياس مسجل، أي تمرين، أي صورة تقدّم، أي وصفة نشرتها، وأي محادثة مع الذكاء الاصطناعي. أو أرسل لنا على الإيميل وش تبي ينحذف.</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-20" />

        {/* English Section */}
        <section dir="ltr" className="text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Delete your Momentum account</h1>
          <p className="text-neutral-500 mb-10">Momentum app by MOMENTIFY ESTABLISHMENT</p>

          <div className="space-y-8 text-neutral-400 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">In the app (fastest)</h2>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Open Momentum and sign in to the account you want to delete</li>
                <li>On the home screen, tap the settings icon</li>
                <li>Scroll to the bottom and tap <strong className="text-neutral-200">Delete Account</strong></li>
                <li>Confirm by tapping <strong className="text-neutral-200">Delete</strong></li>
              </ol>
              <p className="mt-3">Your account and data are deleted immediately. Deletion is permanent and cannot be undone.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Can&apos;t open the app?</h2>
              <p>
                Email{" "}
                <a href={`mailto:${EMAIL}?subject=Delete%20my%20account`} className="text-[#2997ff] hover:underline">{EMAIL}</a>{" "}
                from the address registered on your account, with the subject &quot;Delete my account&quot;. We verify the request is yours and delete the account within 30 days at most, then let you know.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">What is deleted</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Your account details: name, email and sign-in data</li>
                <li>Your profile: height, weight, age, goals and settings</li>
                <li>All your logs: food, water, steps, caffeine, fasting, weight and body measurements</li>
                <li>Your workouts, programs, sessions and personal records</li>
                <li>Your AI chats and Researcher results</li>
                <li>Your photos: progress photos, profile photo, banner and recipe photos</li>
                <li>Your published recipes and ratings, and the restaurants you added</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">What is kept</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong className="text-neutral-200">Usage statistics:</strong> detached from your identity and kept only in anonymous form that cannot be linked back to you, to improve the app.</li>
                <li><strong className="text-neutral-200">Error logs:</strong> technical crash reports are deleted automatically within 90 days.</li>
                <li><strong className="text-neutral-200">Purchase records:</strong> kept by Google Play and Apple under their own policies; we cannot delete them.</li>
              </ul>
              <p className="mt-3">
                <strong className="text-neutral-200">Important:</strong> deleting your account does not cancel your subscription. Cancel it in Google Play (Profile → Payments &amp; subscriptions) or in your Apple settings first.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Only want some data deleted?</h2>
              <p>You can delete anything without deleting your account, right in the app: any logged food, water or measurement, any workout, any progress photo, any recipe you published, and any AI chat. Or email us what you want deleted.</p>
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
