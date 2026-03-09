"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useLang } from "@/components/lang/LanguageProvider";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function AboutPage() {
  const { lang } = useLang();

  const t = {
    title: lang === "fr" ? "À propos de nous" : "من نحن",
    intro:
      lang === "fr"
        ? `${site.name} est une entreprise spécialisée dans la rénovation, la construction et l’aménagement intérieur et extérieur au Maroc. Notre équipe intervient sur différents types de chantiers : maisons, appartements, commerces et bureaux.`
        : `${site.name} شركة متخصصة في أعمال البناء، التجديد وتهيئة المنازل والمحلات في المغرب.`,

    badge: lang === "fr" ? "Entreprise multi-services" : "شركة متعددة الخدمات",

    missionTitle: lang === "fr" ? "Notre mission" : "مهمتنا",
    missionText:
      lang === "fr"
        ? "Offrir un travail propre, durable et professionnel. Nous accompagnons chaque client du premier contact jusqu’à la livraison finale avec un suivi sérieux."
        : "هدفنا تقديم خدمة نظيفة، احترافية ودائمة مع متابعة كل مشروع من البداية حتى التسليم.",

    beforeAfterSectionTitle:
      lang === "fr" ? "Transformations Avant / Après" : "تحولات قبل / بعد",

    beforeAfterSectionText:
      lang === "fr"
        ? "Quelques exemples concrets de nos transformations sur chantier."
        : "بعض الأمثلة الحقيقية على التحولات اللي كننجزوها فالأوراش.",

    stats: [
      {
        k: lang === "fr" ? "Projets réalisés" : "مشاريع منجزة",
        v: "120+",
        icon: "🏗️",
      },
      {
        k: lang === "fr" ? "Clients satisfaits" : "زبناء راضين",
        v: "100+",
        icon: "🤝",
      },
      {
        k: lang === "fr" ? "Années d’expérience" : "سنوات الخبرة",
        v: "7+",
        icon: "⭐",
      },
    ],

    servicesTitle: lang === "fr" ? "Nos domaines d’intervention" : "مجالات عملنا",

    services: [
      {
        label: lang === "fr" ? "Rénovation complète" : "تجديد المنازل",
        icon: "🛠️",
      },
      {
        label: lang === "fr" ? "Plomberie & électricité" : "السباكة والكهرباء",
        icon: "⚡",
      },
      {
        label: lang === "fr" ? "Peinture & finitions" : "الصباغة والتشطيبات",
        icon: "🎨",
      },
      {
        label: lang === "fr" ? "Faux plafonds & plâtrerie" : "الجبس والأسقف المزخرفة",
        icon: "🏠",
      },
      {
        label: lang === "fr" ? "Aluminium & verre trempé" : "الألمنيوم والزجاج",
        icon: "🪟",
      },
      {
        label: lang === "fr" ? "Caméras & réseaux" : "الكاميرات والشبكات",
        icon: "📹",
      },
    ],

    processTitle: lang === "fr" ? "Comment on travaille" : "كيفاش كنخدمو",

    steps: [
      {
        k: lang === "fr" ? "1. Visite" : "1. زيارة",
        v:
          lang === "fr"
            ? "Analyse du projet et conseils techniques."
            : "فهم المشروع وتقديم النصائح.",
      },
      {
        k: lang === "fr" ? "2. Devis" : "2. عرض الثمن",
        v:
          lang === "fr"
            ? "Proposition claire et détaillée."
            : "عرض ثمن واضح ومفصل.",
      },
      {
        k: lang === "fr" ? "3. Travaux" : "3. الأشغال",
        v:
          lang === "fr"
            ? "Exécution organisée avec contrôle qualité."
            : "تنفيذ الأشغال بجودة وتنظيم.",
      },
      {
        k: lang === "fr" ? "4. Livraison" : "4. التسليم",
        v:
          lang === "fr"
            ? "Nettoyage et validation finale."
            : "تنظيف وتسليم المشروع.",
      },
    ],

    cta: lang === "fr" ? "Vous avez un projet ?" : "عندك مشروع؟",

    ctaText:
      lang === "fr"
        ? "Contactez-nous pour un devis rapide."
        : "تواصل معنا للحصول على عرض ثمن سريع.",

    ctaBtn: lang === "fr" ? "Contact" : "تواصل معنا",
  };

  const transformations = [
    {
      titleFr: "Rénovation cuisine",
      titleAr: "تجديد مطبخ",
      before: "/realisations/cuisine-before.jpeg",
      after: "/realisations/cuisine-after.jpeg",
    },
    {
      titleFr: "Travaux plâtrerie (Gabss)",
      titleAr: "أعمال الجبس",
      before: "/realisations/gabss-before.jpeg",
      after: "/realisations/gabss-after.jpeg",
    },
    {
      titleFr: "Installation électrique",
      titleAr: "تركيب الكهرباء",
      before: "/realisations/electricite-before.jpeg",
      after: "/realisations/electricite-after.jpeg",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:p-10 shadow-soft">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,214,133,0.20),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,214,133,0.10),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),transparent_40%)]" />
        </div>

        <div className="relative">
          <div className="inline-flex rounded-full border border-gold/20 bg-gold/10 px-4 py-1 text-xs text-gold tracking-wide">
            {t.badge}
          </div>

          <p className="mt-4 text-gold text-sm tracking-widest">{site.tagline[lang]}</p>

          <h1 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight">
            {t.title}
          </h1>

          <p className="mt-4 max-w-3xl text-white/70 leading-relaxed text-sm md:text-base">
            {t.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-gold px-6 py-3 text-black font-semibold hover:bg-[#ffe1a2]"
            >
              {t.ctaBtn}
            </Link>

            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 px-6 py-3 text-white/85 hover:bg-white/5"
            >
              {lang === "fr" ? "Voir localisation" : "شوف الموقع"}
            </a>
          </div>
        </div>
      </div>

      {/* BEFORE / AFTER MULTIPLE */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8 shadow-soft">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              {t.beforeAfterSectionTitle}
            </h2>
            <p className="mt-2 text-white/70">{t.beforeAfterSectionText}</p>
          </div>

          <div className="text-sm text-gold/80">
            {lang === "fr" ? "Avant / Après réels" : "قبل / بعد حقيقي"}
          </div>
        </div>

        <div className="mt-8 space-y-10">
          {transformations.map((item) => (
            <div
              key={item.titleFr}
              className="rounded-3xl border border-white/10 bg-black/20 p-4 md:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-3 flex-wrap">
                <h3 className="text-lg md:text-xl font-medium text-gold">
                  {lang === "fr" ? item.titleFr : item.titleAr}
                </h3>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  {lang === "fr" ? "Transformation" : "تحول"}
                </span>
              </div>

              <BeforeAfterSlider
                beforeSrc={item.before}
                afterSrc={item.after}
                beforeLabel={lang === "fr" ? "Avant" : "قبل"}
                afterLabel={lang === "fr" ? "Après" : "بعد"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {t.stats.map((s) => (
          <div
            key={s.k}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-soft"
          >
            <div className="text-2xl">{s.icon}</div>
            <div className="mt-2 text-3xl font-semibold text-gold">{s.v}</div>
            <div className="mt-1 text-sm text-white/70">{s.k}</div>
          </div>
        ))}
      </div>

      {/* MISSION */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-soft">
        <h2 className="text-xl font-semibold">{t.missionTitle}</h2>
        <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">{t.missionText}</p>
      </div>

      {/* SERVICES */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">{t.servicesTitle}</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {t.services.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 shadow-soft"
            >
              <div className="text-2xl">{s.icon}</div>
              <div className="mt-3 text-white/85 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">{t.processTitle}</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {t.steps.map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 shadow-soft"
            >
              <div className="font-medium text-gold">{s.k}</div>
              <div className="mt-2 text-sm text-white/70 leading-relaxed">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-soft">
        <div>
          <div className="text-gold font-medium">{t.cta}</div>
          <div className="text-sm text-white/70">{t.ctaText}</div>
        </div>

        <Link
          href="/contact"
          className="rounded-xl bg-gold px-6 py-3 text-black font-semibold hover:bg-[#ffe1a2]"
        >
          {t.ctaBtn}
        </Link>
      </div>
    </section>
  );
}