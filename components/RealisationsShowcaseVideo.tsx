"use client";

import { useLang } from "@/components/lang/LanguageProvider";
import { useRef } from "react";

export default function RealisationsShowcaseVideo() {
  const { lang } = useLang();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayWithControls = () => {
    if (!videoRef.current) return;
    videoRef.current.controls = true;
    videoRef.current.play();
  };

  return (
    <div className="mt-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-soft">
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-[260px] sm:h-[360px] lg:h-[520px] object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/cuisine.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>

        {/* Luxury overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
          <div className="max-w-3xl">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold/90">
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

            <button
              type="button"
              onClick={handlePlayWithControls}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-sm text-white hover:bg-black/65 transition"
            >
              <span className="text-base">▶</span>
              {lang === "fr" ? "Voir la vidéo" : "شاهد الفيديو"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}