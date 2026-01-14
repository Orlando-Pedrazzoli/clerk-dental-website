import { Helmet } from 'react-helmet-async';

interface NoIndexSEOProps {
  title: string;
}

export function NoIndexSEO({ title }: NoIndexSEOProps) {
  return (
    <Helmet>
      <title>{title} | Centro Dentário Colombo</title>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex, nofollow" />
    </Helmet>
  );
}

export default NoIndexSEO;