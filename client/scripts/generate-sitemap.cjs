const fs = require('fs');
const path = require('path');

const SITE_CONFIG = {
  baseUrl: 'https://www.centrodentariocolombo.com'
};

function normalizeUrl(urlPath) {
  const base = SITE_CONFIG.baseUrl.replace(/\/+$/, '');
  if (!urlPath || urlPath === '/') {
    return base;
  }
  const cleanPath = urlPath.replace(/\/+$/, '').replace(/^\/+/, '');
  return `${base}/${cleanPath}`;
}

// Páginas estáticas (sem noindex)
const STATIC_PAGES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/corpo-clinico', changefreq: 'monthly', priority: '0.8' },
  { path: '/faq', changefreq: 'monthly', priority: '0.6' },
  { path: '/politica-privacidade', changefreq: 'yearly', priority: '0.3' },
  { path: '/politica-cookies', changefreq: 'yearly', priority: '0.3' }
];

// Slugs dos tratamentos
const TREATMENT_SLUGS = [
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

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Páginas estáticas
  for (const page of STATIC_PAGES) {
    xml += '  <url>\n';
    xml += `    <loc>${normalizeUrl(page.path)}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  }
  
  // Páginas de tratamentos
  for (const slug of TREATMENT_SLUGS) {
    xml += '  <url>\n';
    xml += `    <loc>${normalizeUrl(`/tratamentos/${slug}`)}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
  }
  
  xml += '</urlset>';
  
  return xml;
}

// Gerar e guardar
const sitemap = generateSitemap();
const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap, 'utf-8');

console.log(`Sitemap gerado: ${outputPath}`);
console.log(`Total URLs: ${STATIC_PAGES.length + TREATMENT_SLUGS.length}`);
