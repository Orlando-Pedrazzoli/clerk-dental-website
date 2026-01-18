import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG, normalizeUrl } from '../utils/seoConfig';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  path?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export function SEO({
  title,
  description = SITE_CONFIG.defaultDescription,
  keywords = SITE_CONFIG.defaultKeywords,
  image = SITE_CONFIG.defaultImage,
  path = '',
  type = 'website',
  noindex = false
}: SEOProps) {
  const fullTitle = title 
    ? `${title} | ${SITE_CONFIG.siteName}` 
    : SITE_CONFIG.defaultTitle;
  
  const canonicalUrl = normalizeUrl(path);

  return (
    <Helmet prioritizeSeoTags>
      {/* Title */}
      <title>{fullTitle}</title>
      
      {/* Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_CONFIG.siteName} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_CONFIG.siteName} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="PT-11" />
      <meta name="geo.placename" content="Lisboa" />
      <meta name="geo.position" content={`${SITE_CONFIG.business.geo.latitude};${SITE_CONFIG.business.geo.longitude}`} />
      <meta name="ICBM" content={`${SITE_CONFIG.business.geo.latitude}, ${SITE_CONFIG.business.geo.longitude}`} />
    </Helmet>
  );
}

export default SEO;