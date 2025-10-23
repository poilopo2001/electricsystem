// Générateurs de métadonnées SEO et JSON-LD

import { Metadata } from 'next';
import { BUSINESS, BRANDING, SEO_DATA } from './constants';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.electricsystem.lu';

/**
 * Métadonnées par défaut du site
 */
export function getDefaultMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${BUSINESS.name} - ${BUSINESS.tagline}`,
      template: `%s | ${BUSINESS.shortName}`
    },
    description: SEO_DATA.metaDescription,
    keywords: SEO_DATA.keywords,
    authors: [{ name: BUSINESS.name }],
    creator: BUSINESS.name,
    publisher: BUSINESS.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: 'fr_LU',
      url: SITE_URL,
      siteName: BUSINESS.name,
      title: `${BUSINESS.name} - ${BUSINESS.tagline}`,
      description: SEO_DATA.metaDescription,
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: BUSINESS.name,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${BUSINESS.name} - ${BUSINESS.tagline}`,
      description: SEO_DATA.metaDescription,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: SITE_URL,
    },
  };
}

/**
 * Génère les métadonnées pour une page spécifique
 */
export function generatePageMetadata(params: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
}): Metadata {
  const { title, description, keywords = [], path = '', image } = params;
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/og-image.jpg`;

  return {
    title,
    description,
    keywords: [...SEO_DATA.keywords, ...keywords],
    openGraph: {
      title,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'website',
      locale: 'fr_LU',
      siteName: BUSINESS.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Génère le schéma JSON-LD LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE_URL,
    telephone: BUSINESS.contact.phone,
    email: BUSINESS.contact.email,
    foundingDate: BUSINESS.founded.toString(),
    taxID: BUSINESS.tva,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.contact.address.city,
      addressCountry: BUSINESS.contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '49.6116',
      longitude: '6.1319',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '49.6116',
        longitude: '6.1319',
      },
      geoRadius: '50000',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagram,
      BUSINESS.social.linkedin,
    ].filter(Boolean),
    priceRange: '€€-€€€',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

/**
 * Génère le schéma JSON-LD Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: BUSINESS.description,
    email: BUSINESS.contact.email,
    telephone: BUSINESS.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.contact.address.city,
      addressCountry: BUSINESS.contact.address.country,
    },
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagram,
      BUSINESS.social.linkedin,
    ].filter(Boolean),
    founder: {
      '@type': 'Person',
      name: BUSINESS.manager.name,
      jobTitle: BUSINESS.manager.role,
    },
  };
}

/**
 * Génère les métadonnées pour une page de service
 */
export function generateServiceMetadata(service: {
  name: string;
  slug: string;
  shortDescription: string;
  priceRange?: string;
}): Metadata {
  const title = `${service.name} | ${BUSINESS.shortName}`;
  const description = service.shortDescription;
  const url = `${SITE_URL}/${service.slug}`;
  const keywords = [
    service.name.toLowerCase(),
    ...SEO_DATA.keywords
  ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'fr_LU',
      siteName: BUSINESS.name,
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: service.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Génère le schéma JSON-LD Service
 */
export function generateServiceSchema(service: {
  name: string;
  slug: string;
  shortDescription: string;
  priceRange?: string;
}) {
  const url = `${SITE_URL}/${service.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.name,
    description: service.shortDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Luxembourg',
    },
    ...(service.priceRange && { priceRange: service.priceRange }),
    url: url,
  };
}

/**
 * Génère le schéma JSON-LD FAQPage
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}#faq`,
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Génère le schéma JSON-LD BreadcrumbList
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}#breadcrumb`,
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Génère le schéma JSON-LD Review
 */
export function generateReviewSchema(review: {
  author: string;
  rating: number;
  text: string;
  date: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.text,
    datePublished: review.date,
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      url: SITE_URL,
    },
  };
}

/**
 * Génère le schéma JSON-LD WebSite
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    description: BUSINESS.description,
    publisher: {
      '@id': `${SITE_URL}#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
