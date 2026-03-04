"use client";

import { site } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${site.phoneDigits}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="
        fixed bottom-5 right-5 z-[9999]
        inline-flex items-center gap-2
        rounded-full px-4 py-3
        bg-[#25D366] text-black
        shadow-lg shadow-black/30
        border border-white/10
        hover:scale-[1.03] active:scale-[0.98]
        transition
        md:hidden
      "
    >
      <span className="text-lg">💬</span>
      <span className="text-sm font-semibold">WhatsApp</span>
    </a>
  );
}