"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useLang } from "@/components/lang/LanguageProvider";
import { useState } from "react";

export default function Header() {
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const t = {
    fr: {
      home: "Accueil",
      services: "Services",
      realisations: "Réalisations",
      about: "À propos",
      contact: "Contact",
      call: "Appeler",
      wa: "WhatsApp",
    },
    ar: {
      home: "الرئيسية",
      services: "الخدمات",
      realisations: "الأعمال",
      about: "من نحن",
      contact: "اتصال",
      call: "اتصل",
      wa: "واتساب",
    },
  }[lang];

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/60">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-gold/40 grid place-items-center">
            <span className="text-sm tracking-widest text-gold">G8</span>
          </div>

          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-gold">
              {site.name}
            </div>
            <div className="text-xs text-white/50">{site.tagline[lang]}</div>
          </div>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link className="text-sm text-white/70 hover:text-white" href="/">
            {t.home}
          </Link>
          <Link className="text-sm text-white/70 hover:text-white" href="/services">
            {t.services}
          </Link>
          <Link
            className="text-sm text-white/70 hover:text-white"
            href="/realisations"
          >
            {t.realisations}
          </Link>
          <Link className="text-sm text-white/70 hover:text-white" href="/a-propos">
            {t.about}
          </Link>
          <Link className="text-sm text-white/70 hover:text-white" href="/contact">
            {t.contact}
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Language (NOW visible on mobile) */}
          <button
            className="inline-flex rounded-full px-4 py-2 text-sm border border-white/15 text-white/80 hover:bg-white/5"
            onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
            type="button"
          >
            {lang === "fr" ? "AR" : "FR"}
          </button>

          {/* Call (hide on mobile) */}
          <a
            className="hidden sm:inline-flex rounded-full px-3 py-2 text-sm border border-white/15 text-white/80 hover:bg-white/5"
            href={`tel:${site.phoneE164}`}
          >
            {t.call}
          </a>

          {/* WhatsApp (hide on mobile) */}
          <a
            className="hidden sm:inline-flex rounded-full px-3 py-2 text-sm bg-gold text-black hover:bg-[#ffe1a2]"
            href={`https://wa.me/${site.phoneDigits}`}
            target="_blank"
            rel="noreferrer"
          >
            {t.wa}
          </a>

          {/* Mobile menu button (bigger + clearer) */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-3 text-white text-3xl leading-none hover:bg-white/10"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95">
          <nav className="flex flex-col px-4 py-3 gap-3 text-white">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              {t.home}
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>
              {t.services}
            </Link>
            <Link href="/realisations" onClick={() => setMenuOpen(false)}>
              {t.realisations}
            </Link>
            <Link href="/a-propos" onClick={() => setMenuOpen(false)}>
              {t.about}
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              {t.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}