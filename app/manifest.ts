import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "G8LuxWork",
    short_name: "G8LuxWork",
    description: "Rénovation, Construction & Aménagement au Maroc",
    start_url: "/",
    display: "standalone",
    background_color: "#10141b",
    theme_color: "#10141b",
    icons: [
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
  };
}