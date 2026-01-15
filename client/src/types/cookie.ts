export interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
}

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  consentDate: string;
  consentVersion: string;
}

export const COOKIE_CONSENT_VERSION = '1.0';
export const COOKIE_STORAGE_KEY = 'cdc_cookie_consent';

export const defaultCookieCategories: CookieCategory[] = [
  {
    id: 'necessary',
    name: 'Cookies Essenciais',
    description: 'Necessarios para o funcionamento basico do site. Incluem cookies de sessao, seguranca e preferencias de consentimento. Nao podem ser desativados.',
    required: true,
    enabled: true,
  },
  {
    id: 'analytics',
    name: 'Cookies de Analise',
    description: 'Permitem-nos analisar como os visitantes utilizam o site, ajudando a melhorar a experiencia. Recolhem dados anonimos sobre paginas visitadas e tempo de navegacao.',
    required: false,
    enabled: false,
  },
  {
    id: 'marketing',
    name: 'Cookies de Marketing',
    description: 'Utilizados para apresentar anuncios relevantes com base nos seus interesses. Podem ser partilhados com parceiros de publicidade.',
    required: false,
    enabled: false,
  },
  {
    id: 'preferences',
    name: 'Cookies de Preferencias',
    description: 'Guardam as suas preferencias de navegacao, como idioma e regiao, para personalizar a sua experiencia no site.',
    required: false,
    enabled: false,
  },
];