import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://momentumsup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Momentum | تطبيق مومنتم — تتبع التغذية والتمارين بالذكاء الاصطناعي",
    template: "%s | Momentum",
  },
  description:
    "تطبيق عربي شامل لتتبع التغذية والتمارين. أكثر من 18,000 أكلة، 1,500 تمرين، مساعد ذكي 24/7، باركود، خطط وجبات، ومجتمع وصفات. حمّله مجاناً.",
  keywords: [
    "تطبيق لياقة",
    "تتبع السعرات",
    "حساب السعرات الحرارية",
    "تطبيق تمارين",
    "تطبيق دايت",
    "تطبيق تغذية",
    "حساب الماكروز",
    "خطة وجبات",
    "تمارين رياضية",
    "مومنتم",
    "Momentum app",
    "fitness app Saudi Arabia",
    "Arabic calorie counter",
    "nutrition tracker",
    "gym workout tracker",
    "AI meal plan",
    "barcode food scanner",
    "Saudi fitness app",
    "calorie counter Arabic",
    "macro tracker",
  ],
  authors: [{ name: "Momentum", url: siteUrl }],
  creator: "Momentum",
  publisher: "Momentum",
  icons: {
    icon: [
      { url: "/Logo (2).png", sizes: "any" },
      { url: "/Logo (2).png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/Logo (2).png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Momentum | مومنتم — رفيق لياقتك الذكي",
    description:
      "تطبيق عربي شامل لتتبع التغذية والتمارين. أكثر من 18,000 أكلة، 1,500 تمرين، مساعد ذكي 24/7. حمّله مجاناً.",
    type: "website",
    url: siteUrl,
    siteName: "Momentum",
    locale: "ar_SA",
    images: [
      {
        url: "/Screenshots/1288@3x.png",
        width: 1290,
        height: 2796,
        alt: "تطبيق مومنتم — لوحة التحكم",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Momentum | مومنتم — رفيق لياقتك الذكي",
    description:
      "تطبيق عربي شامل لتتبع التغذية والتمارين بالذكاء الاصطناعي. حمّله مجاناً.",
    images: ["/Screenshots/1288@3x.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Health & Fitness",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Momentum",
  alternateName: "مومنتم",
  description:
    "تطبيق عربي شامل لتتبع التغذية والتمارين بالذكاء الاصطناعي. أكثر من 18,000 أكلة و1,500 تمرين.",
  url: siteUrl,
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "SAR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "120",
  },
  inLanguage: ["ar", "en"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${rubik.variable} antialiased`}>{children}</body>
    </html>
  );
}
