// SEO Constants for all pages
// Use these with the SEO component

export const SEO_CONFIG = {
  baseUrl: 'https://www.centrodentariocolombo.com',
  siteName: 'Centro Dentário Colombo',
  defaultImage: 'https://www.centrodentariocolombo.com/og-image.jpg',
};

export const PAGE_SEO = {
  home: {
    title: 'Clínica Dentária em Lisboa',
    description: 'Centro Dentário Colombo - Clínica dentária de excelência em Lisboa. Tratamentos de implantologia, ortodontia, estética dentária e muito mais. Marque a sua consulta!',
    keywords: 'dentista lisboa, clínica dentária, implantes dentários, ortodontia, estética dentária, centro dentário colombo',
    url: SEO_CONFIG.baseUrl,
  },
  corpoClinico: {
    title: 'Corpo Clínico',
    description: 'Conheça a equipa de médicos dentistas do Centro Dentário Colombo. Profissionais especializados em diversas áreas da medicina dentária.',
    keywords: 'médicos dentistas lisboa, equipa dentária, especialistas dentários, dentistas centro colombo',
    url: `${SEO_CONFIG.baseUrl}/corpo-clinico`,
  },
  tratamentos: {
    title: 'Tratamentos Dentários',
    description: 'Descubra todos os tratamentos dentários disponíveis no Centro Dentário Colombo. Implantes, ortodontia, estética, branqueamento e muito mais.',
    keywords: 'tratamentos dentários, serviços dentários lisboa, implantes, ortodontia, branqueamento',
    url: `${SEO_CONFIG.baseUrl}/tratamentos`,
  },
  implantologia: {
    title: 'Implantologia Dentária',
    description: 'Implantes dentários de última geração no Centro Dentário Colombo. Recupere o seu sorriso com técnicas avançadas e profissionais especializados.',
    keywords: 'implantes dentários lisboa, implantologia, prótese sobre implante, carga imediata',
    url: `${SEO_CONFIG.baseUrl}/tratamentos/implantologia`,
    image: `${SEO_CONFIG.baseUrl}/images/implantologia-og.jpg`,
  },
  ortodontia: {
    title: 'Ortodontia',
    description: 'Tratamentos de ortodontia no Centro Dentário Colombo. Aparelhos fixos, invisalign e ortodontia para adultos e crianças em Lisboa.',
    keywords: 'ortodontia lisboa, aparelho dentário, invisalign, alinhadores invisíveis, correção dentária',
    url: `${SEO_CONFIG.baseUrl}/tratamentos/ortodontia`,
    image: `${SEO_CONFIG.baseUrl}/images/ortodontia-og.jpg`,
  },
  esteticaDentaria: {
    title: 'Estética Dentária',
    description: 'Tratamentos de estética dentária no Centro Dentário Colombo. Facetas, branqueamento, lentes de contacto dentárias para um sorriso perfeito.',
    keywords: 'estética dentária lisboa, facetas dentárias, lentes de contacto dentárias, sorriso perfeito',
    url: `${SEO_CONFIG.baseUrl}/tratamentos/estetica-dentaria`,
    image: `${SEO_CONFIG.baseUrl}/images/estetica-og.jpg`,
  },
  branqueamento: {
    title: 'Branqueamento Dentário',
    description: 'Branqueamento dentário profissional no Centro Dentário Colombo. Dentes mais brancos de forma segura e eficaz.',
    keywords: 'branqueamento dentário lisboa, clareamento dental, dentes brancos, branqueamento profissional',
    url: `${SEO_CONFIG.baseUrl}/tratamentos/branqueamento`,
    image: `${SEO_CONFIG.baseUrl}/images/branqueamento-og.jpg`,
  },
  periodontia: {
    title: 'Periodontia',
    description: 'Tratamento de gengivas no Centro Dentário Colombo. Prevenção e tratamento de doenças periodontais com especialistas.',
    keywords: 'periodontia lisboa, tratamento gengivas, doença periodontal, periodontite, gengivite',
    url: `${SEO_CONFIG.baseUrl}/tratamentos/periodontia`,
  },
  endodontia: {
    title: 'Endodontia',
    description: 'Tratamento de canal no Centro Dentário Colombo. Endodontia avançada para salvar os seus dentes naturais.',
    keywords: 'endodontia lisboa, tratamento de canal, desvitalização, dor de dente',
    url: `${SEO_CONFIG.baseUrl}/tratamentos/endodontia`,
  },
  proteseDentaria: {
    title: 'Prótese Dentária',
    description: 'Próteses dentárias no Centro Dentário Colombo. Próteses fixas, removíveis e sobre implantes de alta qualidade.',
    keywords: 'prótese dentária lisboa, dentadura, prótese fixa, prótese removível',
    url: `${SEO_CONFIG.baseUrl}/tratamentos/protese-dentaria`,
  },
};

// Treatment structured data generator
export function generateTreatmentSchema(treatment: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: treatment.name,
    description: treatment.description,
    url: treatment.url,
    procedureType: 'https://schema.org/TherapeuticProcedure',
    howPerformed: 'Centro Dentário Colombo',
    status: 'https://schema.org/ActiveActionStatus',
    bodyLocation: 'Mouth',
    preparation: 'Consultation required',
  };
}

// FAQ structured data generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}