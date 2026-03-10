"use client";

import { useLang } from "@/components/lang/LanguageProvider";
import { useEffect, useState } from "react";

type VideoItem = {
  src: string;
  titleFr: string;
  titleAr: string;
  badgeFr: string;
  badgeAr: string;
};

const videos: VideoItem[] = [
  {
    src: "/videos/cuisine.mp4",
    titleFr: "Rénovation complète d’une cuisine",
    titleAr: "تجديد كامل لمطبخ",
    badgeFr: "Cuisine",
    badgeAr: "مطبخ",
  },
  {
    src: "/videos/vid1.mp4",
    titleFr: "Plâtrerie & finitions intérieures",
    titleAr: "الجبس والتشطيبات الداخلية",
    badgeFr: "Plâtrerie / Gabss",
    badgeAr: "الجبس",
  },
  {
    src: "/videos/vid2.mp4",
    titleFr: "Traçage laser pour installation électrique",
    titleAr: "التخطيط بالليزر للتركيب الكهربائي",
    badgeFr: "Électricité / Laser",
    badgeAr: "كهرباء / ليزر",
  },
  {
    src: "/videos/vid4.mp4",
    titleFr:
      "Réalisation d’un placard de chambre en MDF sur mesure avec finition haut de gamme",
    titleAr:
      "تصميم وتركيب خزانة ملابس لغرفة النوم من MDF حسب المقاس بتشطيب عالي الجودة",
    badgeFr: "Placard sur mesure",
    badgeAr: "خزانة حسب المقاس",
  },
  {
    src: "/videos/vid3.mp4",
    titleFr:
      "Installation et câblage d’un tableau électrique avec finition soignée et sécurisée",
    titleAr: "تركيب وربط لوحة كهربائية بدقة عالية وتشطيب آمن واحترافي",
    badgeFr: "Tableau électrique",
    badgeAr: "لوحة كهربائية",
  },
];

const watermarkStyle = {
  backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='220' viewBox='0 0 420 220'%3E%3Cg opacity='1' transform='rotate(-18 210 110)'%3E%3Ctext x='20' y='110' fill='white' font-size='28' font-family='Arial' font-weight='700'%3EG8LuxWork%3C/text%3E%3Ctext x='22' y='140' fill='white' font-size='14' font-family='Arial' font-weight='600'%3Eg8luxwork.com%3C/text%3E%3C/g%3E%3C/svg%3E")`,
  backgroundRepeat: "repeat",
  backgroundSize: "220px",
  opacity: 0.12,
} as const;

export default function RealisationsShowcaseVideo() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videos[0]);

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

  const openVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setOpen(true);
  };

  return (
    <>
      <div className="mt-8">
        {/* Main featured video */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-soft">
          <div className="relative">
            <video
              className="w-full h-[260px] sm:h-[360px] lg:h-[520px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={videos[0].src} type="video/mp4" />
            </video>

            <div
              className="pointer-events-none absolute inset-0"
              style={watermarkStyle}
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
            <div className="max-w-3xl">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold/90">
                G8LuxWork
              </p>

              <h2 className="mt-2 text-xl sm:text-2xl lg:text-4xl font-semibold text-white">
                {lang === "fr" ? videos[0].titleFr : videos[0].titleAr}
              </h2>

              <p className="mt-2 text-sm sm:text-base text-white/75">
                {lang === "fr"
                  ? "Découvrez en images la précision de notre travail et la qualité des finitions réalisées sur nos chantiers."
                  : "اكتشف من خلال هذه الفيديوهات دقة عملنا وجودة التشطيبات التي نقوم بها في مختلف مشاريعنا."}
              </p>

              <button
                type="button"
                onClick={() => openVideo(videos[0])}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-sm text-white transition hover:bg-black/65"
              >
                <span className="text-base">▶</span>
                {lang === "fr" ? "Voir la vidéo" : "شاهد الفيديو"}
              </button>
            </div>
          </div>
        </div>

        {/* Small videos heading */}
        <div className="mt-6">
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              {lang === "fr"
                ? "Autres vidéos de nos chantiers"
                : "فيديوهات أخرى من أوراشنا"}
            </h3>
            <p className="mt-1 text-sm text-white/65">
              {lang === "fr"
                ? "Découvrez d'autres étapes et finitions de nos réalisations."
                : "اكتشف مراحل وتشطيبات أخرى من إنجازاتنا."}
            </p>
          </div>

          {/* Small videos */}
          <div className="grid gap-4 md:grid-cols-2">
            {videos.slice(1).map((video) => (
              <button
                key={video.src}
                type="button"
                onClick={() => openVideo(video)}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] text-left shadow-soft"
              >
                <div className="relative">
                  <video
                    className="w-full h-[220px] sm:h-[260px] object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>

                  <div
                    className="pointer-events-none absolute inset-0"
                    style={watermarkStyle}
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute inset-x-0 top-0 p-4">
                  <span className="inline-flex rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[11px] sm:text-xs text-gold/90">
                    {lang === "fr" ? video.badgeFr : video.badgeAr}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-base sm:text-lg font-medium text-white">
                    {lang === "fr" ? video.titleFr : video.titleAr}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-2 text-sm text-gold/90 group-hover:underline">
                    <span>▶</span>
                    {lang === "fr" ? "Voir la vidéo" : "شاهد الفيديو"}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
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

            <div className="relative">
              <video
                className="w-full h-auto max-h-[85vh] bg-black"
                controls
                autoPlay
                playsInline
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src={activeVideo.src} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>

              <div
                className="pointer-events-none absolute inset-0"
                style={watermarkStyle}
              />
            </div>

            <div className="border-t border-white/10 bg-black/90 px-4 py-3">
              <p className="text-sm text-white/85">
                {lang === "fr" ? activeVideo.titleFr : activeVideo.titleAr}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}