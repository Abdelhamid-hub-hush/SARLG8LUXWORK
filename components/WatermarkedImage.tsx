"use client";

import Image, { type ImageProps } from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { site } from "@/lib/site";

type Props = Omit<ImageProps, "alt"> & {
  alt?: string;
  watermarkOpacity?: number;
  watermarkSizePx?: number;
  watermarkText?: string;
  disableContextMenu?: boolean;
};

function svgDataUri(text: string) {
  const safe = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="420" height="220" viewBox="0 0 420 220">
  <defs>
    <style>
      .t{font-family:Arial, sans-serif;font-size:28px;font-weight:700;fill:#ffffff;}
      .s{font-family:Arial, sans-serif;font-size:14px;font-weight:600;fill:#ffffff;}
    </style>
  </defs>
  <g opacity="1" transform="rotate(-18 210 110)">
    <text x="20" y="110" class="t">${safe}</text>
    <text x="22" y="140" class="s">g8luxwork.com</text>
  </g>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function WatermarkedImage({
  watermarkOpacity = 0.1,
  watermarkSizePx = 220,
  watermarkText = site.name,
  disableContextMenu = true,
  style,
  className,
  alt,
  ...props
}: Props) {
  const pattern = useMemo(() => svgDataUri(watermarkText), [watermarkText]);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [rect, setRect] = useState<{ left: number; top: number; width: number; height: number } | null>(
    null
  );

  // Detect fit mode from className (tailwind)
  const isContain = (className ?? "").split(/\s+/).includes("object-contain");

  const srcRaw: any = (props as any).src;
  const normalizedSrc =
    typeof srcRaw === "object" && srcRaw && "src" in srcRaw ? (srcRaw as any).src : srcRaw;

  const { src: _ignored, ...restProps } = props as any;

  const computeContainRect = (naturalW: number, naturalH: number) => {
    const el = wrapRef.current;
    if (!el) return;

    const cw = el.clientWidth;
    const ch = el.clientHeight;

    if (!cw || !ch || !naturalW || !naturalH) return;

    // object-fit: contain math
    const scale = Math.min(cw / naturalW, ch / naturalH);
    const w = naturalW * scale;
    const h = naturalH * scale;
    const left = (cw - w) / 2;
    const top = (ch - h) / 2;

    setRect({ left, top, width: w, height: h });
  };

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !isContain) return;

    const ro = new ResizeObserver(() => {
      // we recompute when container changes; rect will be recomputed on next image load info if available
      // keep current rect if exists
      if (rect) setRect({ ...rect });
    });

    ro.observe(el);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isContain]);

  return (
    <div
      ref={wrapRef}
      style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
      onContextMenu={disableContextMenu ? (e) => e.preventDefault() : undefined}
    >
      <Image
        {...restProps}
        src={normalizedSrc}
        alt={alt ?? "Image"}
        draggable={false}
        fill
        className={className}
        style={style}
        onLoadingComplete={(img) => {
          if (isContain) computeContainRect(img.naturalWidth, img.naturalHeight);
          else setRect(null);
        }}
      />

      {/* Watermark overlay: full for cover, cropped to image box for contain */}
      <div
        aria-hidden="true"
        style={{
          pointerEvents: "none",
          position: "absolute",
          left: rect ? rect.left : 0,
          top: rect ? rect.top : 0,
          width: rect ? rect.width : "100%",
          height: rect ? rect.height : "100%",
          backgroundImage: `url("${pattern}")`,
          backgroundRepeat: "repeat",
          backgroundSize: `${watermarkSizePx}px`,
          opacity: watermarkOpacity,
        }}
      />
    </div>
  );
}