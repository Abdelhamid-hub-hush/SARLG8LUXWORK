// lib/projects.ts

export type Project = {
  slug: string;
  title: string;
  category: string;
  location?: string;
  description: string;
  cover: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "villa-rabat-2024",
    title: "Rénovation Villa Moderne",
    category: "Rénovation",
    location: "Rabat",
    description:
      "Rénovation complète avec faux plafond, électricité et peinture premium.",
    cover: "/realisations/villa1/cover.jpg",
    images: [
      "/realisations/villa1/1.jpg",
      "/realisations/villa1/2.jpg",
      "/realisations/villa1/3.jpg",
    ],
  },
  
  //// ha fin nzido ahbeba l code dyalna dyalna labghina nzido chi projet
  {
  slug: "panneaux-publicitaires-2026",
  title: "Panneaux publicitaires",
  category: "Signalétique",
  location: "Témara",
  description: "Conception, fabrication et pose de panneaux publicitaires.",
  cover: "/realisations/panneaux/cover.jpeg",
  images: [
    "/realisations/panneaux/6.jpeg",
   "/realisations/panneaux/5.jpeg",
     "/realisations/panneaux/1.jpeg",
   // "/realisations/panneaux/3.jpeg",
     "/realisations/panneaux/9.jpeg",
    "/realisations/panneaux/10.jpeg",
    "/realisations/panneaux/7.jpeg",
    "/realisations/panneaux/8.jpeg",
    "/realisations/panneaux/6.jpeg",
  ],
},
  
///// wast had classe ndiro les projets as object
  {
    slug: "appartement-casablanca-2025", // خاصو يكون unique
    title: "Aménagement Appartement",
    category: "Aménagement",
    location: "Casablanca",
    description:
      "Aménagement intérieur moderne avec éclairage LED et faux plafond design.",
    cover: "/realisations/appartement1/cover.jpg",
    images: [
      "/realisations/appartement1/1.jpg",
      "/realisations/appartement1/2.jpg",
      "/realisations/appartement1/3.jpg",
    ],
  },
];