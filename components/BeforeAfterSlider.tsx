"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Avant",
  afterLabel = "Après",
}: Props) {
  const [position, setPosition] = useState(50);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-soft aspect-[16/10]">
        <Image src={beforeSrc} alt="Before" fill className="object-cover" />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image src={afterSrc} alt="After" fill className="object-cover" />
        </div>

        <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
          {beforeLabel}
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
          {afterLabel}
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-white/90"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/70 text-white grid place-items-center shadow-lg">
            ↔
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          aria-label="Before after slider"
        />
      </div>
    </div>
  );
}