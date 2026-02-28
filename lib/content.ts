import type { Lang } from "./site";

export type Service = {
  slug: string;
  title: Record<Lang, string>;
  short: Record<Lang, string>;
  bullets: Record<Lang, string[]>;
};

export const services: Service[] = [

{
  slug: "plafond-lumineux-sky",
  title: {
    fr: "Plafond lumineux Sky",
    ar: "سقف مضيء بتصميم السماء",
  },
  short: {
    fr: "Installation de plafonds LED imprimés effet ciel pour espaces modernes.",
    ar: "تركيب أسقف LED مطبوعة بتأثير السماء لإضفاء لمسة عصرية.",
  },
  bullets: {
    fr: [
      "Impression haute résolution effet ciel",
      "Éclairage LED intégré",
      "Installation sur faux plafond",
      "Solution esthétique & moderne",
    ],
    ar: [
      "طباعة عالية الدقة بتأثير السماء",
      "إضاءة LED مدمجة",
      "تركيب على سقف مستعار",
      "حل جمالي وعصري",
    ],
  },
},


{
  slug: "panneaux-publicitaires",
  title: { fr: "Panneaux publicitaires", ar: "اللوحات الإعلانية" },
  short: {
    fr: "Conception, fabrication et pose de panneaux pour votre activité.",
    ar: "تصميم وصناعة وتركيب اللوحات الإعلانية لنشاطك.",
  },
  bullets: {
    fr: [
      "Panneaux enseigne (façade, vitrine)",
      "Panneaux PVC / Dibond / aluminium",
      "Pose, fixation et finition propre",
      "Personnalisation (logo, couleurs, dimensions)",
    ],
    ar: [
      "لوحات واجهة المحل والواجهات الزجاجية",
      "PVC / ديبوند / ألمنيوم",
      "تركيب وتثبيت وتشطيب احترافي",
      "تصميم حسب الشعار والألوان والمقاسات",
    ],
  },
},

  {
    slug: "electricite",
    title: { fr: "Électricité", ar: "كهرباء" },
    short: { fr: "Installation, dépannage, mise aux normes.", ar: "تركيب، إصلاح، وصيانة بمعايير السلامة." },
    bullets: {
      fr: ["Tableau électrique", "Éclairage", "Prises & câblage", "Dépannage rapide"],
      ar: ["لوحة كهرباء", "إنارة", "مآخذ وأسلاك", "تدخل سريع"],
    },
  },

  // ✅ Nouveau service
  {
    slug: "climatisation",
    title: { fr: "Climatisation", ar: "تكييف" },
    short: { fr: "Installation, entretien, réparation, recharge gaz.", ar: "تركيب، صيانة، إصلاح، وشحن الغاز." },
    bullets: {
      fr: ["Installation climatiseur", "Nettoyage & entretien", "Réparation", "Recharge gaz / contrôle"],
      ar: ["تركيب المكيف", "تنظيف وصيانة", "إصلاح", "شحن غاز وفحص"],
    },
  },

  {
    slug: "plomberie",
    title: { fr: "Plomberie", ar: "سباكة" },
    short: { fr: "Fuites, robinetterie, sanitaires, chauffe-eau.", ar: "تسربات، صنابير، تجهيزات صحية، سخان." },
    bullets: {
      fr: ["Réparation de fuites", "Installation sanitaire", "Chauffe-eau", "Entretien & conseils"],
      ar: ["إصلاح التسربات", "تركيب صحي", "سخان الماء", "صيانة ونصائح"],
    },
  },

  {
    slug: "cameras-reseaux",
    title: { fr: "Réseaux & Caméras", ar: "شبكات وكاميرات مراقبة" },
    short: { fr: "Installation, configuration, maintenance.", ar: "تركيب، إعداد، وصيانة." },
    bullets: {
      fr: ["Caméras de surveillance", "Câblage & réseau", "Configuration", "Maintenance"],
      ar: ["كاميرات مراقبة", "توصيلات وشبكة", "إعداد", "صيانة"],
    },
  },

  {
    slug: "faux-plafonds-drywall",
    title: { fr: "Faux plafonds & Drywall", ar: "أسقف مستعارة ودروايل" },
    short: { fr: "Cloisons, plafonds, design moderne.", ar: "قواطع وأسقف بتشطيب عصري." },
    bullets: {
      fr: ["Faux plafonds", "Cloisons (placo)", "Design moderne", "Finition soignée"],
      ar: ["سقف مستعار", "قواطع (بلاكو)", "تصميم عصري", "تشطيب متقن"],
    },
  },

  // ✅ Nouveau service: Gabss
  {
    slug: "platrerie-placo",
    title: { fr: "Plâtrerie & Placo", ar: "جبس وبلاكو" },
    short: { fr: "Cloisons, habillage, staff, finitions (Gabss).", ar: "قواطع، تغليف، ستاف، وتشطيب (جبس)." },
    bullets: {
      fr: ["Cloisons & doublage", "Staff & corniches", "Isolation (option)", "Finition propre"],
      ar: ["قواطع وتغليف", "ستاف وكرانيش", "عزل (اختياري)", "تشطيب نظيف"],
    },
  },

  {
    slug: "aluminium-verre",
    title: { fr: "Aluminium & Verre trempé", ar: "ألمنيوم وزجاج مقوّى" },
    short: { fr: "Portes, séparations, vitrages.", ar: "أبواب، فواصل، واجهات زجاجية." },
    bullets: {
      fr: ["Menuiserie aluminium", "Verre trempé", "Portes & séparations", "Pose & ajustements"],
      ar: ["نجارة الألمنيوم", "زجاج مقوّى", "أبواب وفواصل", "تركيب وضبط"],
    },
  },

  {
    slug: "peinture-finitions",
    title: { fr: "Peinture & Finitions", ar: "صباغة وتشطيبات" },
    short: { fr: "Enduit, peinture, retouches, finition premium.", ar: "معجون، صباغة، رتوشات، تشطيب ممتاز." },
    bullets: {
      fr: ["Préparation des murs", "Peinture intérieure/extérieure", "Finition nette", "Nettoyage après travaux"],
      ar: ["تحضير الجدران", "صباغة داخلية/خارجية", "تشطيب نظيف", "تنظيف بعد الأشغال"],
    },
  },

  {
    slug: "renovation-generale",
    title: { fr: "Rénovation générale", ar: "ترميم عام" },
    short: { fr: "Rénovation complète, coordination multi-services.", ar: "ترميم شامل وتنسيق متعدد الخدمات." },
    bullets: {
      fr: ["Étude du besoin", "Planification", "Suivi chantier", "Finition & livraison propre"],
      ar: ["دراسة الحاجة", "تخطيط", "تتبع الأشغال", "تشطيب وتسليم نظيف"],
    },
  },



];
