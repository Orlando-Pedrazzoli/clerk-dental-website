import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
}

const DEFAULT_SEO = {
  siteName: 'Centro Dentário Colombo',
  title: 'Centro Dentário Colombo | Clínica Dentária em Lisboa',
  description: 'Centro Dentário Colombo - Clínica dentária de excelência em Lisboa. Tratamentos de implantologia, ortodontia, estética dentária e muito mais. Marque a sua consulta!',
  keywords: 'dentista lisboa, clínica dentária, implantes dentários, ortodontia, estética dentária, centro dentário colombo, dentista portugal',
  image: 'https://www.centrodentariocolombo.com/og-image.jpg',
  url: 'https://www.centrodentariocolombo.com',
  locale: 'pt_PT',
  twitterHandle: '@centrodentariocolombo',
};

export function SEO({
  title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  image = DEFAULT_SEO.image,
  url = DEFAULT_SEO.url,
  type = 'website',
  noindex = false,
}: SEOProps) {
  const fullTitle = title 
    ? `${title} | ${DEFAULT_SEO.siteName}` 
    : DEFAULT_SEO.title;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={DEFAULT_SEO.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={DEFAULT_SEO.locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="author" content={DEFAULT_SEO.siteName} />
      <meta name="geo.region" content="PT-11" />
      <meta name="geo.placename" content="Lisboa" />
      <meta name="geo.position" content="38.7223;-9.1393" />
      <meta name="ICBM" content="38.7223, -9.1393" />
    </Helmet>
  );
}

export default SEO;