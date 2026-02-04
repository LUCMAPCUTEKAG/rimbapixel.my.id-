export const languages = {
  ar: 'العربية',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'ar';

export const ui = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.graphic': 'غرافيك ديزاين',
    'nav.motion': 'موشن غرافيك',
    'nav.about': 'عنّي',
    'nav.contact': 'التواصل',
    'theme.toggle': 'تبديل الثيم',
    'lang.toggle': 'التبديل للإنجليزية',
    'hero.title': 'داني ديزاين',
    'hero.subtitle': 'تصميم جرافيكي وموشن غرافيك احترافي',
    'hero.cta': 'استكشف الأعمال',
    'featured.title': 'أعمال مميزة',
    'featured.viewAll': 'عرض الكل',
    'projects.title': 'غرافيك ديزاين',
    'projects.all': 'الكل',
    'projects.viewDetails': 'عرض التفاصيل',
    'motion.title': 'موشن غرافيك',
    'motion.viewDetails': 'شاهد الفيديو',
    'about.title': 'عنّي',
    'about.name': 'داني البيطار',
    'about.experience': '3+ سنوات خبرة',
    'about.location': 'سوريا',
    'contact.title': 'تواصل معي',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال',
    'contact.whatsapp': 'واتساب',
    'contact.telegram': 'تلغرام',
    'year': 'السنة',
    'tags': 'الوسوم',
    'gallery': 'المعرض',
    'video': 'الفيديو',
    'back': 'رجوع',
  },
  en: {
    'nav.home': 'Home',
    'nav.graphic': 'Graphic Design',
    'nav.motion': 'Motion Graphics',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'theme.toggle': 'Toggle theme',
    'lang.toggle': 'Switch to Arabic',
    'hero.title': 'Dani Design',
    'hero.subtitle': 'Professional Graphic Design & Motion Graphics',
    'hero.cta': 'Explore Works',
    'featured.title': 'Featured Works',
    'featured.viewAll': 'View All',
    'projects.title': 'Graphic Design',
    'projects.all': 'All',
    'projects.viewDetails': 'View Details',
    'motion.title': 'Motion Graphics',
    'motion.viewDetails': 'Watch Video',
    'about.title': 'About Me',
    'about.name': 'Dani Albitar',
    'about.experience': '3+ Years Experience',
    'about.location': 'Syria',
    'contact.title': 'Get In Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.whatsapp': 'WhatsApp',
    'contact.telegram': 'Telegram',
    'year': 'Year',
    'tags': 'Tags',
    'gallery': 'Gallery',
    'video': 'Video',
    'back': 'Back',
  },
} as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
