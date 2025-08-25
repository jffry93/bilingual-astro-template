import { siteConfig } from '../config.js';

export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export const defaultLang = 'fr';
export const showDefaultLang = false;

export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.portfolio': 'Projets',
    'nav.services': 'Services',
    'nav.about': 'Notre histoire',
    'nav.contact': 'Contact',
    'nav.quote': 'Devis gratuit',

    'hero.title': siteConfig.hero.title.fr,
    'hero.subtitle': siteConfig.hero.subtitle.fr,
    'hero.cta': siteConfig.hero.cta.primary.fr,
    'hero.contact': siteConfig.hero.cta.secondary.fr,

    'services.title': 'Nos services',
    'services.subtitle': 'Une expertise complète pour tous vos projets de plâtrage',

    'portfolio.title': 'Nos réalisations',
    'portfolio.subtitle': 'Découvrez nos projets les plus récents',

    'about.title': 'Notre histoire',
    'about.subtitle': 'Une entreprise familiale québécoise',

    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Discutons de votre projet',
    'contact.name': 'Nom complet',
    'contact.email': 'Adresse courriel',
    'contact.phone': 'Téléphone',
    'contact.subject': 'Sujet',
    'contact.message': 'Message',
    'contact.submit': 'Envoyer le message',
    'contact.success': 'Message envoyé avec succès!',
    'contact.error': 'Erreur lors de l\'envoi. Veuillez réessayer.',

    'footer.tagline': siteConfig.tagline.fr,
    'footer.built': 'Conçu par',
    'footer.contact': 'Contact',
    'footer.services': 'Services',
    'footer.company': 'Entreprise',

    'quote.title': 'Devis gratuit',
    'quote.subtitle': 'Obtenez une estimation personnalisée pour votre projet',

    'meta.home.title': `${siteConfig.company.name.fr} - Maîtres plâtriers du Québec`,
    'meta.home.description': `Entreprise familiale québécoise spécialisée en plâtrage traditionnel et moderne. Plus de ${siteConfig.company.experience} ans d'expertise. Devis gratuit disponible.`,

    'seo.locale': 'fr_CA',
    'seo.siteName': siteConfig.company.name.fr,
  },
  en: {
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.about': 'Our Story',
    'nav.contact': 'Contact',
    'nav.quote': 'Free Quote',

    'hero.title': siteConfig.hero.title.en,
    'hero.subtitle': siteConfig.hero.subtitle.en,
    'hero.cta': siteConfig.hero.cta.primary.en,
    'hero.contact': siteConfig.hero.cta.secondary.en,

    'services.title': 'Our Services',
    'services.subtitle': 'Complete expertise for all your plastering projects',

    'portfolio.title': 'Our Work',
    'portfolio.subtitle': 'Discover our latest projects',

    'about.title': 'Our Story',
    'about.subtitle': 'A Quebec family business',

    'contact.title': 'Contact Us',
    'contact.subtitle': 'Let\'s discuss your project',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',

    'footer.tagline': siteConfig.tagline.en,
    'footer.built': 'Built by',
    'footer.contact': 'Contact',
    'footer.services': 'Services',
    'footer.company': 'Company',

    'quote.title': 'Free Quote',
    'quote.subtitle': 'Get a personalized estimate for your project',

    'meta.home.title': `${siteConfig.company.name.en} - Quebec Master Plasterers`,
    'meta.home.description': `Quebec family business specializing in traditional and modern plastering. Over ${siteConfig.company.experience} years of expertise. Free quotes available.`,

    'seo.locale': 'en_CA',
    'seo.siteName': siteConfig.company.name.en,
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
