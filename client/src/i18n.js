import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next, reactI18nextModule } from "react-i18next";

// the translations
const resources = {
  fr: {
    translation: {
      languageCode: "fr",
      direction: "ltr",
      getStarted: "Commencer",
      about: "A propos",
      contact: "Contact",
      search: "Rechercher",
      profile: "Profile",
      privacy: "Confidentialité",
      terms: "Conditions",
      admin: "Admin",
      dashboard: "Dashboard",
      landingTitle: "Votre passerelle vers une assistance juridique experte.",
      landingSubtitle:
        "Nous sommes là pour vous aider à prendre soin de votre légalité avec le meilleur service, spécialement pour vous.",
      lawyerName: "Nom de l'avocat",
      place: "Place",
      mainPlaces: "Les endroits principaux",
      mainCategories: "Les catégories principales",
      ourServices: "Nos services",
      ourServicesSubtitle: "Nous fournissons les meilleurs services pour vous.",
      advancedSearch: "Recherche avancée",
      advancedSearchSubtitle: "Trouvez le meilleur avocat pour vous.",
      verifiedProfessionals: "Professionnels vérifiés",
      verifiedProfessionalsSubtitle:
        "Nous vérifions tous les avocats pour vous.",
      seamlessExperience: "Expérience transparente",
      seamlessExperienceSubtitle:
        "Nous vous fournissons la meilleure expérience.",
      topRatedLawyers: "Avocats les mieux notés",
      seeAll: "Voir tout",
      footerText:
        "Tous droits réservés. © 2023 DZ-Mouhami. Votre source de confiance pour l'expertise juridique en Algérie.",
      getStartedText: "Vous voulez exceller votre carrière en tant qu'avocat?",
      getStartedTextSubtitle:
        "Maîtrisez les compétences essentielles, dominez la salle d'audience et propulsez votre succès dans le monde juridique avec détermination et stratégie.",
      filter: "Filtre",
      apply: "Appliquer",
      clear: "Effacer",
      categories: "Catégories",
      rating: "Évaluation",
      stars4: "4 étoiles et plus",
      stars3: "3 étoiles et plus",
      stars2: "2 étoiles et plus",
      stars1: "1 étoile et plus",
      editProfile: "Modifier le profil",
      changePicture: "Changer l'image",
      firstName: "Prénom",
      lastName: "Nom",
      save: "Enregistrer",
      appointments: "Rendez-vous",
      requests: "Demandes",
      signOut: "Déconnexion",
      description: "Description",
      availability: "Disponibilité",
      reviews: "Avis",
      leaveAReview: "Laisser un avis",
      scheduleAnAppointment: "Prendre un rendez-vous",
      sendEmail: "Envoyer un email",
      makeCall: "Appeler",
      address: "Adresse",
      contactDescription:
        "Prêt pour une assistance juridique? Connectez-vous avec cet avocat pour discuter de votre cas, poser des questions ou prendre rendez-vous.",
      chooseRole: "Choisissez votre rôle",
      experience: "Adaptons votre expérience à vos besoins.",
      lawyer:"je suis un avocat",
      policy:"En continuant, vous acceptez nos Conditions d'utilisation et notre Politique de confidentialité"
    },
  },
  ar: {
    translation: {
      languageCode: "ar",
      direction: "rtl",
      getStarted: "ابدأ الآن",
      about: "حول",
      contact: "اتصل",
      search: "بحث",
      profile: "الملف الشخصي",
      privacy: "الخصوصية",
      terms: "الشروط",
      admin: "مشرف",
      dashboard: "لوحة القيادة",
      landingTitle: "بوابتك إلى المساعدة القانونية المتخصصة.",
      landingSubtitle:
        "نحن هنا لمساعدتك في العناية بقانونيتك مع أفضل الخدمات ، خصيصًا لك.",
      lawyerName: "اسم المحامي",
      place: "مكان",
      mainPlaces: "الأماكن الرئيسية",
      mainCategories: "الفئات الرئيسية",
      ourServices: "خدماتنا",
      ourServicesSubtitle: "نحن نقدم أفضل الخدمات لك.",
      advancedSearch: "بحث متقدم",
      advancedSearchSubtitle: "العثور على أفضل محامي لك.",
      verifiedProfessionals: "محترفون معتمدون",
      verifiedProfessionalsSubtitle: "نحن نتحقق من جميع المحامين لك.",
      seamlessExperience: "تجربة سلسة",
      seamlessExperienceSubtitle: "نحن نقدم لك أفضل تجربة.",
      topRatedLawyers: "أفضل المحامين تقييما",
      seeAll: "عرض الكل",
      footerText:
        "جميع الحقوق محفوظة. © 2023 DZ-Mouhami. مصدرك الموثوق للخبرة القانونية في الجزائر.",
      getStartedText: "هل تريد تحسين مهنتك كمحامي؟",
      getStartedTextSubtitle:
        "اكتسب المهارات الأساسية ، وتفوق في قاعة المحكمة ، وقم بتعزيز نجاحك في العالم القانوني بالإصرار والاستراتيجية.",
      filter: "فلتر",
      apply: "تطبيق",
      clear: "مسح",
      categories: "التصنيفات",
      rating: "تقييم",
      stars4: "4 نجوم وأكثر",
      stars3: "3 نجوم وأكثر",
      stars2: "2 نجوم وأكثر",
      stars1: "1 نجمة وأكثر",
      editProfile: "تعديل الملف الشخصي",
      changePicture: "تغيير الصورة",
      firstName: "الاسم",
      lastName: "اللقب",
      save: "حفظ",
      appointments: "مواعيد",
      requests: "طلبات",
      signOut: "تسجيل الخروج",
      description: "وصف",
      availability: "توفر",
      reviews: "التعليقات",
      leaveAReview: "اترك تعليق",
      scheduleAnAppointment: "جدولة موعد",
      sendEmail: "ارسل بريد الكتروني",
      makeCall: "اتصل",
      address: "عنوان",
      contactDescription:
        "هل أنت مستعد للحصول على المساعدة القانونية؟ اتصل بمحاميك لمناقشة قضيتك أو طرح الأسئلة أو تحديد موعد.",
      chooseRole: "اختر دورك",
      experience:"لنكمل تجربتك وفقًا لاحتياجاتك",
      lawyer:"أنا محامٍ",
      policy:"من خلال المتابعة، أنت توافق على شروط الخدمة وسياسة الخصوصية لدينا",
    },
  },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(detector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    initReactI18next: {
      fallbackLng: "fr",
    },
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
