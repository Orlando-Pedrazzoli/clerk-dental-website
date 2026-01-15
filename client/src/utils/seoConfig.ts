export const SITE_CONFIG = {
  baseUrl: 'https://www.centrodentariocolombo.com',
  siteName: 'Centro Dentário Colombo',
  defaultTitle: 'Centro Dentário Colombo | Clínica Dentária em Lisboa',
  defaultDescription: 'Centro Dentário Colombo - Clínica dentária de excelência em Lisboa. Tratamentos de implantologia, ortodontia, estética dentária e muito mais. Marque a sua consulta!',
  defaultKeywords: 'dentista lisboa, clínica dentária, implantes dentários, ortodontia, estética dentária, centro dentário colombo, dentista portugal',
  defaultImage: 'https://www.centrodentariocolombo.com/og-image-v2.jpg',
  locale: 'pt_PT',
  themeColor: '#0066cc',
  business: {
    telephone: '+351XXXXXXXXX',
    email: 'info@centrodentariocolombo.com',
    address: {
      street: 'Centro Comercial Colombo',
      locality: 'Lisboa',
      region: 'Lisboa',
      postalCode: '1500-392',
      country: 'PT'
    },
    geo: {
      latitude: 38.7223,
      longitude: -9.1393
    },
    priceRange: '€€',
    socialMedia: {
      facebook: 'https://www.facebook.com/centrodentariocolombo',
      instagram: 'https://www.instagram.com/centrodentariocolombo'
    }
  }
};

export function normalizeUrl(path: string): string {
  const base = SITE_CONFIG.baseUrl.replace(/\/+$/, '');
  if (!path || path === '/') {
    return base;
  }
  const cleanPath = path.replace(/\/+$/, '').replace(/^\/+/, '');
  return `${base}/${cleanPath}`;
}

export const TREATMENT_SLUGS = [
  'caries',
  'reabilitacao-oral',
  'aparelhos-dentarios',
  'criancas',
  'proteses-dentarias',
  'estetica-dentaria',
  'cirurgia-oral',
  'dentisteria',
  'endodontia',
  'implantologia',
  'medicina-oral',
  'oclusao',
  'odontopediatria',
  'ortodontia',
  'periodontologia',
  'prostodontia'
];

export const STATIC_PAGES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/corpo-clinico', changefreq: 'monthly', priority: '0.8' }
];

export const PRIVATE_PATHS = ['/admin', '/patient'];