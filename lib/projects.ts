// lib/projects.ts

export type Project = {
  slug: string;
  title: string;
  category: string;
  location?: string;
  description: string;
  cover: string;
  images: string[];
  videos?: string[]; // ✅ videos optional
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
      "/realisations/panneaux/9.jpeg",
      "/realisations/panneaux/10.jpeg",
      "/realisations/panneaux/7.jpeg",
      "/realisations/panneaux/8.jpeg",
      "/realisations/panneaux/6.jpeg",
    ],
  },

  {
    slug: "amenagement-maison-temara",
    title: "Aménagement maison",
    category: "Aménagement / Rénovation",
    location: "Témara",
    description:
      "Aménagement complet d’une maison à Témara : finitions, optimisation des espaces et détails de qualité.",
    cover: "/realisations/PROJET/photos/1.jpeg",
    images: [
      "/realisations/PROJET/photos/1.jpeg",
      "/realisations/PROJET/photos/01.jpeg",
      "/realisations/PROJET/photos/2.jpeg",
      "/realisations/PROJET/photos/02.jpeg",
      "/realisations/PROJET/photos/3.jpeg",
      "/realisations/PROJET/photos/03.jpeg",
      "/realisations/PROJET/photos/4.jpeg",
      "/realisations/PROJET/photos/04.jpeg",
      "/realisations/PROJET/photos/5.jpeg",
      "/realisations/PROJET/photos/05.jpeg",
      "/realisations/PROJET/photos/6.jpeg",
      "/realisations/PROJET/photos/7.jpeg",
      "/realisations/PROJET/photos/07.jpeg",
      "/realisations/PROJET/photos/8.jpeg",
      "/realisations/PROJET/photos/08.jpeg",
      "/realisations/PROJET/photos/9.jpeg",
      "/realisations/PROJET/photos/09.jpeg",
      "/realisations/PROJET/photos/10.jpeg",
      "/realisations/PROJET/photos/11.jpeg",
      "/realisations/PROJET/photos/011.jpeg",
      "/realisations/PROJET/photos/012.jpeg",
      "/realisations/PROJET/photos/013.jpeg",
      "/realisations/PROJET/photos/014.jpeg",
      "/realisations/PROJET/photos/015.jpeg",
      "/realisations/PROJET/photos/016.jpeg",
      "/realisations/PROJET/photos/22.jpeg",
      "/realisations/PROJET/photos/33.jpeg",
      "/realisations/PROJET/photos/44.jpeg",
      "/realisations/PROJET/photos/55.jpeg",
      "/realisations/PROJET/photos/66.jpeg",
      "/realisations/PROJET/photos/77.jpeg",
      "/realisations/PROJET/photos/88.jpeg",
      "/realisations/PROJET/photos/99.jpeg",
      "/realisations/PROJET/photos/1010.jpeg",
      "/realisations/PROJET/photos/1111.jpeg",
      "/realisations/PROJET/photos/1212.jpeg",
      "/realisations/PROJET/photos/1313.jpeg",
      "/realisations/PROJET/photos/1414.jpeg",
      "/realisations/PROJET/photos/1515.jpeg",
      "/realisations/PROJET/photos/1616.jpeg",
      "/realisations/PROJET/photos/1717.jpeg",
      "/realisations/PROJET/photos/1818.jpeg",
      "/realisations/PROJET/photos/1919.jpeg",
      "/realisations/PROJET/photos/2020.jpeg",
      "/realisations/PROJET/photos/2121.jpeg",
      "/realisations/PROJET/photos/2222.jpeg",
      "/realisations/PROJET/photos/2323.jpeg",
      "/realisations/PROJET/photos/2424.jpeg",
      "/realisations/PROJET/photos/2525.jpeg",
      "/realisations/PROJET/photos/2626.jpeg",
      "/realisations/PROJET/photos/2727.jpeg",
      "/realisations/PROJET/photos/2828.jpeg",
      "/realisations/PROJET/photos/2929.jpeg",
      "/realisations/PROJET/photos/3030.jpeg",
      "/realisations/PROJET/photos/3131.jpeg",
      "/realisations/PROJET/photos/3232.jpeg",
      "/realisations/PROJET/photos/3333.jpeg",
      "/realisations/PROJET/photos/3434.jpeg",
      "/realisations/PROJET/photos/3535.jpeg",
      "/realisations/PROJET/photos/3636.jpeg",
      "/realisations/PROJET/photos/3737.jpeg",
      "/realisations/PROJET/photos/3838.jpeg",
      "/realisations/PROJET/photos/3939.jpeg",
      "/realisations/PROJET/photos/4040.jpeg",
      "/realisations/PROJET/photos/4141.jpeg",
      "/realisations/PROJET/photos/4242.jpeg",
      "/realisations/PROJET/photos/4343.jpeg",

            "/realisations/PROJET/photos/4444.jpeg",
      "/realisations/PROJET/photos/4545.jpeg",
      "/realisations/PROJET/photos/4646.jpeg",
      "/realisations/PROJET/photos/4747.jpeg",
      "/realisations/PROJET/photos/4848.jpeg",
      "/realisations/PROJET/photos/4949.jpeg",
      "/realisations/PROJET/photos/5050.jpeg",
      "/realisations/PROJET/photos/5151.jpeg",
      "/realisations/PROJET/photos/5252.jpeg",
      "/realisations/PROJET/photos/5353.jpeg",
      "/realisations/PROJET/photos/5454.jpeg",
      "/realisations/PROJET/photos/5555.jpeg",
      "/realisations/PROJET/photos/5656.jpeg",
      "/realisations/PROJET/photos/5757.jpeg",
      "/realisations/PROJET/photos/5858.jpeg",
      "/realisations/PROJET/photos/5959.jpeg",
    ],
    // videos غير موجودين فـ type ديال Project دابا
      
   // videos: [
     // "/realisations//realisations/PROJET/videos/video1.mp4",
      //"/realisations//realisations/PROJET/videos/video2.mp4",
      //"/realisations//realisations/PROJET/videos/video3.mp4",
     // "/realisations//realisations/PROJET/videos/video4.mp4",
     // "/realisations//realisations/PROJET/videos/video5.mp4",
      // … باقي الفيديوهات
  //  ],
  },
  

  {
    slug: "appartement-casablanca-2025",
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