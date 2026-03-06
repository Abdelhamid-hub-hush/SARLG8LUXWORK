"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useLang } from "@/components/lang/LanguageProvider";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-10 shadow-soft">
        <p className="text-gold text-sm tracking-widest">{site.tagline[lang]}</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold">
          {lang === "fr" ? "À propos de nous" : "من نحن"}
        </h1>
        <p className="mt-4 max-w-3xl text-white/70 leading-relaxed">
          {lang === "fr"
            ? `${site.name} est une entreprise spécialisée dans la rénovation, la construction et l’aménagement intérieur et extérieur au Maroc.`
            : `${site.name} شركة متخصصة في أعمال البناء، التجديد وتهيئة المنازل والمحلات في المغرب.`}
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-soft">
        <h2 className="text-xl font-semibold">
          {lang === "fr" ? "Avant / Après : rénovation cuisine" : "قبل / بعد: تجديد مطبخ"}
        </h2>
        <p className="mt-2 text-white/70">
          {lang === "fr"
            ? "Un aperçu concret de la transformation avant et après travaux."
            : "نظرة واضحة على الفرق قبل وبعد الأشغال."}
        </p>

        <div className="mt-6">
          <BeforeAfterSlider
            beforeSrc="/realisations/cuisine-before.jpeg"
            afterSrc="/realisations/cuisine-after.jpeg"
            beforeLabel={lang === "fr" ? "Avant" : "قبل"}
            afterLabel={lang === "fr" ? "Après" : "بعد"}
          />
        </div>
      </div>

      <div className="mt-12">
        <Link
          href="/contact"
          className="rounded-xl bg-gold px-6 py-3 text-black font-semibold hover:bg-[#ffe1a2]"
        >
          {lang === "fr" ? "Contact" : "تواصل معنا"}
        </Link>
      </div>
    </section>
  );
}