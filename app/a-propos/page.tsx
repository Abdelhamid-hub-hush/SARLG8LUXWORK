"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useLang } from "@/components/lang/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLang();

  const t = {
    title: lang === "fr" ? "À propos de nous" : "من نحن",
    intro:
      lang === "fr"
        ? `${site.name} est une entreprise spécialisée dans la rénovation, la construction et l’aménagement intérieur et extérieur au Maroc. Notre équipe intervient sur différents types de chantiers : maisons, appartements, commerces et bureaux.`
        : `${site.name} شركة متخصصة في أعمال البناء، التجديد وتهيئة المنازل والمحلات في المغرب.`,

    missionTitle: lang === "fr" ? "Notre mission" : "مهمتنا",
    missionText:
      lang === "fr"
        ? "Offrir un travail propre, durable et professionnel. Nous accompagnons chaque client du premier contact jusqu’à la livraison finale avec un suivi sérieux."
        : "هدفنا تقديم خدمة نظيفة، احترافية ودائمة مع متابعة كل مشروع من البداية حتى التسليم.",

    stats: [
      {
        k: lang === "fr" ? "Projets réalisés" : "مشاريع منجزة",
        v: "120+",
      },
      {
        k: lang === "fr" ? "Clients satisfaits" : "زبناء راضين",
        v: "100+",
      },
      {
        k: lang === "fr" ? "Années d’expérience" : "سنوات الخبرة",
        v: "7+",
      },
    ],

    servicesTitle: lang === "fr" ? "Nos domaines d’intervention" : "مجالات عملنا",

    services: [
      lang === "fr" ? "Rénovation complète" : "تجديد المنازل",
      lang === "fr" ? "Plomberie & électricité" : "السباكة والكهرباء",
      lang === "fr" ? "Peinture & finitions" : "الصباغة والتشطيبات",
      lang === "fr" ? "Faux plafonds & plâtrerie" : "الجبس والأسقف المزخرفة",
      lang === "fr" ? "Aluminium & verre trempé" : "الألمنيوم والزجاج",
      lang === "fr" ? "Caméras & réseaux" : "الكاميرات والشبكات",
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

    cta:
      lang === "fr"
        ? "Vous avez un projet ?"
        : "عندك مشروع؟",

    ctaText:
      lang === "fr"
        ? "Contactez-nous pour un devis rapide."
        : "تواصل معنا للحصول على عرض ثمن سريع.",

    ctaBtn: lang === "fr" ? "Contact" : "تواصل معنا",
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">

      {/* HERO */}
      <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-10 shadow-soft">
        <p className="text-gold text-sm tracking-widest">{site.tagline[lang]}</p>

        <h1 className="mt-2 text-3xl md:text-4xl font-semibold">
          {t.title}
        </h1>

        <p className="mt-4 max-w-3xl text-white/70 leading-relaxed">
          {t.intro}
        </p>
      </div>

      {/* STATS */}
      <div className="mt-10 grid grid-cols-3 gap-4 text-center">
        {t.stats.map((s) => (
          <div
            key={s.k}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <div className="text-3xl font-semibold text-gold">{s.v}</div>
            <div className="mt-1 text-sm text-white/70">{s.k}</div>
          </div>
        ))}
      </div>

      {/* MISSION */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
        <h2 className="text-xl font-semibold">{t.missionTitle}</h2>
        <p className="mt-3 text-white/70 max-w-3xl">{t.missionText}</p>
      </div>

      {/* SERVICES */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">{t.servicesTitle}</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {t.services.map((s) => (
            <div
              key={s}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <span className="text-white/85">{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">{t.processTitle}</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {t.steps.map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className="font-medium text-gold">{s.k}</div>
              <div className="mt-2 text-sm text-white/70">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8 flex flex-col md:flex-row items-center justify-between gap-4">
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