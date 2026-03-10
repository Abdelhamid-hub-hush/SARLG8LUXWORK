"use client";

import Link from "next/link";
import { useLang } from "@/components/lang/LanguageProvider";
import WatermarkedImage from "@/components/WatermarkedImage";
import ServiceCards from "@/components/ServiceCards";

export default function HomePage() {
  const { lang } = useLang();

  const t = {
    fr: {
      badge: "Témara • Rénovation & travaux à domicile",
      h1a: "Rénovation & Construction",
      h1b: "haut de gamme",
      p: "Des travaux de rénovation fiables, soignés et réalisés avec précision : électricité, plomberie, climatisation, plâtrerie, peinture, aluminium, verre trempé, réseaux et caméras.",
      cta1: "Demander un devis",
      cta2: "Découvrir nos services",
      services: "Nos services",
      featuredTitle: "Réseaux & Caméras",
      featuredSub:
        "Installation, configuration, maintenance — caméras de surveillance & câblage réseau.",
      featuredBtn: "En savoir plus →",
      gallery: "Réalisations",
      //gallerySub: "Ajoutez vos photos pour renforcer la confiance.",
      viewAll: "Voir la galerie →",
    },
    ar: {
      badge: "تمارة • ترميم وأشغال منزلية",
      h1a: "ترميم وبناء",
      h1b: "بمعايير عالية",
      p: "ننجز أشغال الترميم والبناء بعناية ودقة، من الكهرباء والسباكة والتكييف إلى الجبس والصباغة والألمنيوم والزجاج المقوّى والشبكات والكاميرات.",
      cta1: "طلب عرض سعر",
      cta2: "اكتشف خدماتنا",
      services: "الخدمات",
      featuredTitle: "شبكات وكاميرات مراقبة",
      featuredSub: "تركيب، إعداد، وصيانة — كاميرات مراقبة وتوصيلات الشبكة.",
      featuredBtn: "المزيد →",
      gallery: "الأعمال",
      gallerySub: "أضف صور المشاريع لتعزيز الثقة.",
      viewAll: "عرض المعرض →",
    },
  }[lang];

  const cameraPhotos = [
    "/services/camera_01.jpeg",
    "/services/camera_02.jpeg",
    "/services/camera_03.jpeg",
    "/services/camera_04.jpeg",
  ];

  const miniGallery = [
    "/realisations/page_acceuil.jpeg",
    "/realisations/camera_01.jpeg",
    "/realisations/camera_02.jpeg",
  ];

  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
          {t.badge}
        </span>

        <div className="mt-4 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {t.h1a}
              <span className="mt-2 block text-gold/90">{t.h1b}</span>
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-white/70">{t.p}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black hover:bg-[#ffe1a2]"
              >
                {t.cta1}
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/90 hover:bg-white/5"
              >
                {t.cta2}
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-soft">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <WatermarkedImage
                src="/realisations/page_acceuil.jpeg"
                alt="G8LuxWork — réalisation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <p className="mt-4 text-xs text-white/50">
              “Quality • Precision • Commitment”
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold md:text-3xl">{t.services}</h2>
        <ServiceCards lang={lang} />
      </section>

      {/* FEATURED CAMERAS SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">{t.featuredTitle}</h2>
            <p className="mt-2 text-white/70">{t.featuredSub}</p>
          </div>
          <Link
            className="text-sm text-gold hover:underline"
            href="/services/cameras-reseaux"
          >
            {t.featuredBtn}
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-soft">
            <div className="text-sm text-white/70">
              {lang === "fr" ? "Inclus" : "الخدمات"}
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-white/75">
              <li className="flex gap-2">
                <span className="text-gold">•</span>
                {lang === "fr" ? "Caméras de surveillance" : "كاميرات مراقبة"}
              </li>
              <li className="flex gap-2">
                <span className="text-gold">•</span>
                {lang === "fr" ? "Câblage & réseau" : "توصيلات وشبكة"}
              </li>
              <li className="flex gap-2">
                <span className="text-gold">•</span>
                {lang === "fr" ? "Configuration" : "إعداد"}
              </li>
              <li className="flex gap-2">
                <span className="text-gold">•</span>
                {lang === "fr" ? "Maintenance" : "صيانة"}
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 md:col-span-2">
            {cameraPhotos.map((src) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <WatermarkedImage
                  src={src}
                  alt="Caméra de surveillance"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REALISATIONS */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold md:text-3xl">{t.gallery}</h2>
        <p className="mt-2 text-white/70">{t.gallerySub}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {miniGallery.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <WatermarkedImage
                src={src}
                alt="Réalisation"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link className="text-sm text-gold hover:underline" href="/realisations">
            {t.viewAll}
          </Link>
        </div>
      </section>
    </>
  );
}