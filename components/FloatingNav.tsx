"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/#features", label: "المميزات" },
  { href: "/#how-it-works", label: "كيف يعمل" },
  { href: "/library", label: "مكتبة البرامج" },
  { href: "/#contact", label: "تواصل معنا" },
];

export default function FloatingNav() {
  const pathname = usePathname();
  const isLibrary = pathname.startsWith("/library");

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-5xl bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <div className="px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image src="/Logo (2).png" alt="Momentum" width={28} height={28} className="rounded-lg" />
          <Link href="/" className="font-semibold text-lg tracking-tight text-white">
            Momentum
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/library"
                ? isLibrary
                : pathname === "/" && link.href.startsWith("/#");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive ? "text-white font-medium" : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/#download"
          className="hidden sm:inline-flex bg-blue text-white text-sm font-semibold rounded-full px-5 py-2.5 transition-transform active:scale-95"
          style={{backgroundColor: '#0066cc'}}
        >
          حمّل التطبيق
        </Link>
      </div>
    </nav>
  );
}
