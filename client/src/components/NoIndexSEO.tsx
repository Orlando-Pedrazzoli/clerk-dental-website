import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../utils/seoConfig';

interface NoIndexSEOProps {
  title: string;
}

export function NoIndexSEO({ title }: NoIndexSEOProps) {
  return (
    <Helmet>
      <title>{title} | {SITE_CONFIG.siteName}</title>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex, nofollow" />
    </Helmet>
  );
}

export default NoIndexSEO;