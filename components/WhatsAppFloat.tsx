"use client";

import { site } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${site.phoneDigits}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      title="WhatsApp"
      className="
        fixed bottom-5 right-5 z-[9999]
        h-14 w-14 md:hidden
        rounded-full
        bg-[#25D366] text-black
        border border-white/10
        shadow-lg shadow-black/30
        grid place-items-center
        hover:scale-[1.05] active:scale-[0.98]
        transition
      "
    >
      <span className="text-2xl">💬</span>
    </a>
  );
}