import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG, normalizeUrl } from '../utils/seoConfig';

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: SITE_CONFIG.siteName,
    description: SITE_CONFIG.defaultDescription,
    url: normalizeUrl(''),
    logo: normalizeUrl('/logo-colombo.svg'),
    image: SITE_CONFIG.defaultImage,
    telephone: SITE_CONFIG.business.telephone,
    email: SITE_CONFIG.business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.business.address.street,
      addressLocality: SITE_CONFIG.business.address.locality,
      addressRegion: SITE_CONFIG.business.address.region,
      postalCode: SITE_CONFIG.business.address.postalCode,
      addressCountry: SITE_CONFIG.business.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.business.geo.latitude,
      longitude: SITE_CONFIG.business.geo.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '18:00'
      }
    ],
    priceRange: SITE_CONFIG.business.priceRange,
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    areaServed: {
      '@type': 'City',
      name: 'Lisboa'
    },
    sameAs: [
      SITE_CONFIG.business.socialMedia.facebook,
      SITE_CONFIG.business.socialMedia.instagram
    ],
    medicalSpecialty: [
      'Implantology',
      'Orthodontics',
      'Cosmetic Dentistry',
      'Periodontics',
      'Endodontics'
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.siteName,
    url: normalizeUrl('')
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: normalizeUrl(item.path)
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface TreatmentJsonLdProps {
  name: string;
  description: string;
  path: string;
  image?: string;
}

export function TreatmentJsonLd({ name, description, path, image }: TreatmentJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: name,
    description: description,
    url: normalizeUrl(path),
    image: image || SITE_CONFIG.defaultImage,
    provider: {
      '@type': 'Dentist',
      name: SITE_CONFIG.siteName,
      url: normalizeUrl('')
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}