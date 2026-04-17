import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
        <div>
<div className="text-white/70">
  © 2022 - {new Date().getFullYear()} {site.name} (anciennement G8Work). Tous droits réservés.
</div>
          <div className="mt-2">
            {site.city} •{" "}
            <a
              className="text-gold hover:underline"
              href={`tel:${site.phoneE164}`}
            >
              {site.phoneE164}
            </a>{" "}
            •{" "}
            <a
              className="text-gold hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            className="text-white/70 transition hover:text-white"
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            className="text-white/70 transition hover:text-white"
            href={site.social.facebook}
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>

          <a
            className="text-white/70 transition hover:text-white"
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <Link
            className="rounded-full border border-white/15 px-4 py-2 text-white/80 transition hover:bg-white/5 hover:text-white"
            href="/contact"
          >
            Devis
          </Link>
        </div>
      </div>
    </footer>
  );
}