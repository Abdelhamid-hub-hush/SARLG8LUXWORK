"use client";

import { useLang } from "@/components/lang/LanguageProvider";

export default function RealisationsShowcaseVideo() {
  const { lang } = useLang();

  return (
    <div className="mt-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-soft">
        {/* Video */}
        <video
          className="w-full h-[260px] sm:h-[360px] lg:h-[520px] object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
        >
          <source src="/videos/cuisine.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Text on video */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold/90">
              G8LuxWork
            </p>
            <h2 className="mt-2 text-xl sm:text-2xl lg:text-4xl font-semibold text-white">
              {lang === "fr"
                ? "Rénovation complète d’une cuisine"
                : "تجديد كامل لمطبخ"}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/75">
              {lang === "fr"
                ? "Du début jusqu’au résultat final : un aperçu réel de notre savoir-faire."
                : "من البداية حتى النتيجة النهائية: نظرة حقيقية على جودة خدمتنا."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}