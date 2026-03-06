"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/components/lang/LanguageProvider";
import { projects } from "@/lib/projects";
import RealisationsShowcaseVideo from "@/components/RealisationsShowcaseVideo";

export default function RealisationsPage() {
  const { lang } = useLang();

  const title = lang === "fr" ? "Réalisations" : "الإنجازات";
  const subtitle =
    lang === "fr"
      ? "Découvrez quelques projets réalisés."
      : "اكتشف بعض المشاريع المنجزة.";

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="mt-2 text-white/70">{subtitle}</p>

      {/* Featured cinematic video */}
      <RealisationsShowcaseVideo />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/realisations/${p.slug}`}
            className="group rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden shadow-soft"
          >
            <div className="relative aspect-[4/3] w-full bg-white/5">
              <Image
                src={p.cover}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={false}
              />
            </div>

            <div className="p-5">
              <h3 className="font-medium text-gold">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">
                {p.category}
                {p.location ? ` — ${p.location}` : ""}
              </p>

              <span className="mt-3 inline-block text-sm text-gold/90 group-hover:underline">
                {lang === "fr" ? "Voir le projet →" : "شاهد المشروع →"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}