import { ui, defaultLang } from './index';

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split('/');
  const maybeLang = parts[1];
  
  if (maybeLang in ui) {
    return parts.slice(2).join('/') || '/';
  }
  return pathname;
}

export function getLocalizedPath(path: string, locale: string): string {
  if (locale === defaultLang) {
    return path === '/' ? '/' : `/${path.replace(/^\//, '')}`;
  }
  return path === '/' ? `/${locale}` : `/${locale}/${path.replace(/^\//, '')}`;
}

export function getAlternateLinks(path: string) {
  return Object.keys(ui).map(lang => ({
    lang,
    href: getLocalizedPath(path, lang)
  }));
}

export function getStaticPaths() {
  const routes = ['', 'portfolio', 'services', 'about', 'contact', 'quote'];
  
  return routes.flatMap(route => 
    Object.keys(ui).map(lang => ({
      params: { 
        lang: lang === defaultLang ? undefined : lang,
        ...(route && { path: route })
      }
    }))
  );
}