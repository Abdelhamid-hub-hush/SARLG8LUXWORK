"use client";

import { useLang } from "@/components/lang/LanguageProvider";
import { useEffect, useState } from "react";

export default function RealisationsShowcaseVideo() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="mt-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-soft">
          {/* Preview video */}
          <video
            className="w-full h-[260px] sm:h-[360px] lg:h-[520px] object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/cuisine.mp4" type="video/mp4" />
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
                onClick={() => setOpen(true)}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-sm text-white hover:bg-black/65 transition"
              >
                <span className="text-base">▶</span>
                {lang === "fr" ? "Voir la vidéo" : "شاهد الفيديو"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white hover:bg-black/80"
              aria-label="Close video"
            >
              ✕
            </button>

            <video
              className="w-full h-auto max-h-[85vh] bg-black"
              controls
              autoPlay
              playsInline
            >
              <source src="/videos/cuisine.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </div>
      )}
    </>
  );
}