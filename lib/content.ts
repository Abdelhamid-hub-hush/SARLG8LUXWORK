import type { Lang } from "./site";

export type Service = {
  slug: string;
  title: Record<Lang, string>;
  short: Record<Lang, string>;
  bullets: Record<Lang, string[]>;
};

export const services: Service[] = [

{
  slug: "climatisation",
  title: {
    fr: "Climatisation & Froid",
    ar: "التكييف والتبريد",
  },
  short: {
    fr: "Installation et maintenance de systèmes de climatisation résidentiels et professionnels.",
    ar: "تركيب وصيانة أنظمة التكييف للمنازل والمساحات المهنية.",
  },
  bullets: {
    fr: [
      "Installation climatiseur",
      "Maintenance préventive",
      "Nettoyage & désinfection",
      "Réparation rapide",
      "Recharge gaz & contrôle"
    ],
    ar: [
      "تركيب المكيفات",
      "صيانة وقائية",
      "تنظيف وتعقيم",
      "إصلاح سريع",
      "شحن الغاز والفحص"
    ],
  },
},


{
  slug: "pergola-bioclimatique-bois-aluminium",
  title: { 
    fr: "Pergolas sur mesure", 
    ar: "برغولا عصرية حسب الطلب" 
  },
  short: { 
    fr: "Pergolas modernes pour jardin, terrasse et extérieur.", 
    ar: "برغولا عصرية للحدائق والتراسات والمساحات الخارجية." 
  },
  bullets: {
    fr: [
      "Pergola bioclimatique",
      "Structure bois ou aluminium",
      "Protection soleil & pluie",
      "Design élégant sur mesure"
    ],
    ar: [
      "برغولا بيوكليماتيك",
      "هيكل خشب أو ألمنيوم",
      "حماية من الشمس والمطر",
      "تصميم أنيق حسب الطلب"
    ],
  },
},


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
  slug: "cadres-muraux-decoratifs",
  title: { fr: "Cadres muraux décoratifs", ar: "إطارات حائطية ديكورية" },
  short: {
    fr: "Installation de cadres décoratifs pour sublimer vos murs avec élégance.",
    ar: "تركيب إطارات حائطية ديكورية لإضفاء لمسة جمالية أنيقة على الجدران.",
  },
  bullets: {
    fr: ["Décoration murale", "Composition harmonieuse", "Pose soignée", "Finition élégante"],
    ar: ["ديكور جداري", "تنسيق متناسق", "تركيب بعناية", "لمسة أنيقة"],
  },
},

{
  slug: "placards-lits-sur-mesure",
  title: { 
    fr: "Placards et lits sur mesure", 
    ar: "خزائن وأسِرّة مصممة حسب الطلب" 
  },
  short: {
    fr: "Conception et réalisation de placards et lits en bois sur mesure pour optimiser vos espaces avec style et fonctionnalité.",
    ar: "تصميم وتنفيذ خزائن وأسِرّة خشبية حسب الطلب لتحسين استغلال المساحات بأسلوب عصري وعملي.",
  },
  bullets: {
    fr: [
      "Fabrication sur mesure",
      "Optimisation de l’espace",
      "Design moderne",
      "Finition soignée"
    ],
    ar: [
      "تصميم حسب الطلب",
      "استغلال أمثل للمساحة",
      "تصميم عصري",
      "تشطيب متقن"
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
  slug: "peinture-batiment",
  title: { 
    fr: "Peinture bâtiment", 
    ar: "أشغال الصباغة" 
  },
  short: {
    fr: "Travaux de peinture intérieure et extérieure pour un rendu moderne et soigné.",
    ar: "أشغال الصباغة الداخلية والخارجية للحصول على مظهر عصري واحترافي.",
  },
  bullets: {
    fr: [
      "Peinture intérieure & extérieure",
      "Finition lisse et durable",
      "Choix de couleurs modernes",
      "Travail propre et rapide"
    ],
    ar: [
      "صباغة داخلية وخارجية",
      "تشطيب ناعم ومتين",
      "اختيار ألوان عصرية",
      "عمل نظيف وسريع"
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




{
  slug: "plomberie",
  title: { 
    fr: "Plomberie professionnelle", 
    ar: "خدمات السباكة الاحترافية" 
  },
  short: {
    fr: "Réalisation complète de travaux de plomberie : installation, réparation et maintenance pour garantir un système fiable et durable.",
    ar: "تنفيذ جميع أعمال السباكة من تركيب وصيانة وإصلاح لضمان نظام مياه متكامل وموثوق.",
  },
  bullets: {
    fr: [
      "Installation complète",
      "Réparation rapide",
      "Maintenance durable",
      "Finition soignée"
    ],
    ar: [
      "تركيب متكامل",
      "إصلاح سريع",
      "صيانة مستمرة",
      "تشطيب متقن"
    ],
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


 // {
  //  slug: "faux-plafonds-drywall",
    //title: { fr: "Faux plafonds & Drywall", ar: "أسقف مستعارة ودروايل" },
    //short: { fr: "Cloisons, plafonds, design moderne.", ar: "قواطع وأسقف بتشطيب عصري." },
    //bullets: {
      //fr: ["Faux plafonds", "Cloisons (placo)", "Design moderne", "Finition soignée"],
      //ar: ["سقف مستعار", "قواطع (بلاكو)", "تصميم عصري", "تشطيب متقن"],
    //},
  //},

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

  //{
   // slug: "aluminium-verre",
   // title: { fr: "Aluminium & Verre trempé", ar: "ألمنيوم وزجاج مقوّى" },
   // short: { fr: "Portes, séparations, vitrages.", ar: "أبواب، فواصل، واجهات زجاجية." },
   // bullets: {
     // fr: ["Menuiserie aluminium", "Verre trempé", "Portes & séparations", "Pose & ajustements"],
     // ar: ["نجارة الألمنيوم", "زجاج مقوّى", "أبواب وفواصل", "تركيب وضبط"],
   // },
  //},

  {
  slug: "aluminium-verre",
  title: {
    fr: "Aluminium & Verre trempé",
    ar: "ألمنيوم وزجاج مقوّى",
  },
  short: {
    fr: "Portes, séparations et vitrages modernes.",
    ar: "أبواب، فواصل وواجهات زجاجية عصرية.",
  },
  bullets: {
    fr: [
      "Menuiserie aluminium",
      "Verre trempé sécurisé",
      "Portes & séparations",
      "Escaliers & garde-corps",
      "Pose & ajustements"
    ],
    ar: [
      "نجارة الألمنيوم",
      "زجاج مقوّى آمن",
      "أبواب وفواصل",
      "سلالم ودرابزين زجاجي",
      "تركيب وضبط"
    ],
  },
},

 // {
  //  slug: "peinture-finitions",
   // title: { fr: "Peinture & Finitions", ar: "صباغة وتشطيبات" },
   // short: { fr: "Enduit, peinture, retouches, finition premium.", ar: "معجون، صباغة، رتوشات، تشطيب ممتاز." },
   // bullets: {
    //  fr: ["Préparation des murs", "Peinture intérieure/extérieure", "Finition nette", "Nettoyage après travaux"],
     // ar: ["تحضير الجدران", "صباغة داخلية/خارجية", "تشطيب نظيف", "تنظيف بعد الأشغال"],
    //},
  //},

{
  slug: "cuisines-modernes",
  title: {
    fr: "Cuisines modernes",
    ar: "مطابخ عصرية",
  },
  short: {
    fr: "Conception et installation de cuisines modernes sur mesure.",
    ar: "تصميم وتركيب مطابخ عصرية حسب الطلب.",
  },
  bullets: {
    fr: [
      "Cuisine sur mesure",
      "Design moderne",
      "Meubles & rangements",
      "Éclairage LED",
      "Finition haut de gamme"
    ],
    ar: [
      "مطابخ حسب الطلب",
      "تصميم عصري",
      "خزائن ومساحات تخزين",
      "إضاءة LED",
      "تشطيبات عالية الجودة"
    ],
  },
},


];
