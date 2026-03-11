import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Momentum - Keep Moving Forward | تطبيق مومنتم",
  description:
    "Your all-in-one Arabic fitness companion. Track nutrition, AI-powered meal logging, gym programs, and community recipes. 18,000+ foods, 1,500+ exercises.",
  keywords: [
    "fitness app",
    "nutrition tracker",
    "calorie counter",
    "gym workout",
    "Saudi Arabia",
    "Arabic fitness",
    "meal plan",
    "تطبيق لياقة",
    "تتبع السعرات",
  ],
  icons: {
    icon: "/Logo (2).png",
    apple: "/Logo (2).png",
  },
  openGraph: {
    title: "Momentum - Keep Moving Forward",
    description:
      "Your all-in-one Arabic fitness companion. Track nutrition, AI-powered meal logging, gym programs, and community recipes.",
    type: "website",
    url: "https://momentumsup.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${rubik.variable} antialiased`}>{children}</body>
    </html>
  );
}
