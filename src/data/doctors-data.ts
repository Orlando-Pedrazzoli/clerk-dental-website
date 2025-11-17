export interface Doctor {
  id: string;
  name: string;
  title: string; // Dr. ou Dra.
  specialties: string[];
  photo: string;
  bio: string;
  education: string[];
  achievements?: string[];
  languages?: string[];
}

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Andreia Façanha',
    title: 'Dra.',
    specialties: ['Odontopediatria', 'Dentisteria'],
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&h=800&fit=crop',
    bio: 'Especialista em Odontopediatria com vasta experiência no atendimento infantil, criando um ambiente acolhedor e de confiança para os mais pequenos.',
    education: [
      'Mestrado em Medicina Dentária - ISCSEM Universidade Católica Portuguesa de Viseu',
      'Pós-Graduação em Endodontia Mecanizada - Endoacademy',
      'Formação Avançada em Odontopediatria - Instituto Superior de Ciências da Saúde'
    ],
    achievements: [
      'Autora de artigos publicados em revistas nacionais de Dentisteria',
      'Apresentação de posters em congressos de Odontopediatria',
      'Participação regular em seminários e congressos nacionais e internacionais'
    ],
    languages: ['Português', 'Inglês', 'Espanhol']
  },
  {
    id: '2',
    name: 'Ricardo Tavares',
    title: 'Dr.',
    specialties: ['Implantologia', 'Cirurgia Oral'],
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=800&fit=crop',
    bio: 'Cirurgião oral especializado em implantologia avançada, com formação internacional e técnicas de última geração para reabilitação oral.',
    education: [
      'Mestrado Integrado em Medicina Dentária - Faculdade de Medicina Dentária da Universidade de Lisboa',
      'Pós-Graduação em Implantologia - NYU College of Dentistry, Nova Iorque',
      'Curso Avançado em Regeneração Óssea - Universidade de Berna, Suíça'
    ],
    achievements: [
      'Certificação Internacional em Implantologia pelo ITI (International Team for Implantology)',
      'Mais de 2000 implantes colocados com sucesso',
      'Palestrante em congressos nacionais de Implantologia'
    ],
    languages: ['Português', 'Inglês', 'Francês']
  },
  {
    id: '3',
    name: 'Sofia Mendes',
    title: 'Dra.',
    specialties: ['Ortodontia', 'Estética Dentária'],
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=800&fit=crop',
    bio: 'Ortodontista dedicada à criação de sorrisos harmoniosos através de técnicas modernas, incluindo aparelhos invisíveis e ortodontia estética.',
    education: [
      'Licenciatura em Medicina Dentária - Instituto Superior de Ciências da Saúde Egas Moniz',
      'Mestrado em Ortodontia - Universidade Complutense de Madrid',
      'Certificação Invisalign Diamond Provider'
    ],
    achievements: [
      'Especialista certificada em Invisalign e sistemas de alinhadores',
      'Formação em Ortodontia Lingual - Incognito System',
      'Membro da Sociedade Portuguesa de Ortodontia'
    ],
    languages: ['Português', 'Inglês', 'Espanhol']
  },
  {
    id: '4',
    name: 'Miguel Santos',
    title: 'Dr.',
    specialties: ['Periodontologia', 'Medicina Oral'],
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&h=800&fit=crop',
    bio: 'Periodontista com foco na prevenção e tratamento de doenças gengivais, promovendo a saúde dos tecidos de suporte dentário.',
    education: [
      'Mestrado em Medicina Dentária - Faculdade de Medicina Dentária da Universidade do Porto',
      'Pós-Graduação em Periodontologia - Universidade de Valência, Espanha',
      'Curso de Cirurgia Plástica Periodontal - Universidad Europea de Madrid'
    ],
    achievements: [
      'Membro da Sociedade Portuguesa de Periodontologia',
      'Investigador em regeneração de tecidos periodontais',
      'Publicação de artigos científicos em revistas indexadas'
    ],
    languages: ['Português', 'Inglês']
  },
  {
    id: '5',
    name: 'Mariana Costa',
    title: 'Dra.',
    specialties: ['Endodontia', 'Dentisteria'],
    photo: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&h=800&fit=crop',
    bio: 'Endodontista especializada em tratamentos de canal com microscopia, utilizando tecnologia de ponta para preservar dentes naturais.',
    education: [
      'Mestrado Integrado em Medicina Dentária - Universidade de Coimbra',
      'Pós-Graduação em Endodontia Mecanizada - Portuguese Institute of Endodontics',
      'Formação em Endodontia sob Microscopia - Boston University'
    ],
    achievements: [
      'Certificada em Endodontia com Microscópio Operatório',
      'Especialista em casos complexos de retratamento endodôntico',
      'Formadora em cursos de Endodontia Moderna'
    ],
    languages: ['Português', 'Inglês']
  },
  {
    id: '6',
    name: 'João Pereira',
    title: 'Dr.',
    specialties: ['Prostodontia', 'Reabilitação Oral'],
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&h=800&fit=crop',
    bio: 'Prostodontista com expertise em reabilitações orais complexas, devolvendo função, estética e qualidade de vida aos pacientes.',
    education: [
      'Mestrado em Medicina Dentária - Instituto Superior de Ciências da Saúde do Sul',
      'Pós-Graduação em Prostodontia Fixa - Universidade de São Paulo, Brasil',
      'Especialização em Prótese sobre Implantes - Universidade de Gotemburgo, Suécia'
    ],
    achievements: [
      'Especialista em casos de reabilitação oral total',
      'Certificação em sistemas CAD/CAM para prótese dentária',
      'Colaboração com laboratórios internacionais de prótese'
    ],
    languages: ['Português', 'Inglês', 'Espanhol']
  },
  {
    id: '7',
    name: 'Catarina Rodrigues',
    title: 'Dra.',
    specialties: ['Dentisteria', 'Estética Dentária'],
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&h=800&fit=crop&flip=h',
    bio: 'Dentista estética apaixonada por transformar sorrisos através de técnicas minimamente invasivas e materiais de última geração.',
    education: [
      'Licenciatura em Medicina Dentária - Universidade Fernando Pessoa',
      'Pós-Graduação em Estética Dentária - Instituto Superior de Ciências da Saúde',
      'Certificação em Facetas de Cerâmica - DSD (Digital Smile Design) Academy'
    ],
    achievements: [
      'Especialista em DSD - Digital Smile Design',
      'Formação avançada em facetas de porcelana ultra-finas',
      'Participação em showcases internacionais de estética dentária'
    ],
    languages: ['Português', 'Inglês', 'Italiano']
  },
  {
    id: '8',
    name: 'Pedro Almeida',
    title: 'Dr.',
    specialties: ['Cirurgia Oral', 'Cirurgia Maxilofacial'],
    photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=800&fit=crop',
    bio: 'Cirurgião maxilofacial com vasta experiência em cirurgias complexas, traumatologia facial e correções ortognáticas.',
    education: [
      'Mestrado Integrado em Medicina Dentária - Faculdade de Medicina Dentária da Universidade de Lisboa',
      'Especialização em Cirurgia Oral - Hospital de Santa Maria, Lisboa',
      'Fellowship em Cirurgia Maxilofacial - King\'s College Hospital, Londres'
    ],
    achievements: [
      'Cirurgião certificado em Cirurgia Ortognática',
      'Especialista em extrações de sisos complexos',
      'Formação avançada em Cirurgia Pré-Implante'
    ],
    languages: ['Português', 'Inglês']
  },
  {
    id: '9',
    name: 'Ana Martins',
    title: 'Dra.',
    specialties: ['Odontopediatria', 'Ortodontia Preventiva'],
    photo: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&h=800&fit=crop',
    bio: 'Odontopediatra dedicada ao cuidado oral infantil, com abordagem lúdica e preventiva para criar experiências positivas.',
    education: [
      'Mestrado em Medicina Dentária - Universidade Católica Portuguesa',
      'Pós-Graduação em Odontopediatria - Sociedade Portuguesa de Odontopediatria',
      'Formação em Ortodontia Interceptiva - Universidade de Barcelona'
    ],
    achievements: [
      'Certificada em Sedação Consciente para Crianças',
      'Formadora em workshops de Odontopediatria',
      'Voluntária em programas de saúde oral infantil'
    ],
    languages: ['Português', 'Inglês', 'Francês']
  },
  {
    id: '10',
    name: 'Tiago Ferreira',
    title: 'Dr.',
    specialties: ['Implantologia', 'Periodontologia'],
    photo: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=800&fit=crop',
    bio: 'Especialista em implantologia e regeneração óssea, oferecendo soluções avançadas para casos complexos de perda dentária.',
    education: [
      'Mestrado Integrado em Medicina Dentária - Instituto Superior de Ciências da Saúde Egas Moniz',
      'Pós-Graduação em Implantologia Avançada - Malo Clinic, Lisboa',
      'Mestrado em Periodontologia - Universidade de Salamanca, Espanha'
    ],
    achievements: [
      'Certificação em All-on-4® e técnicas de carga imediata',
      'Especialista em regeneração óssea guiada (GBR)',
      'Membro da European Association for Osseointegration'
    ],
    languages: ['Português', 'Inglês', 'Espanhol']
  },
  {
    id: '11',
    name: 'Beatriz Sousa',
    title: 'Dra.',
    specialties: ['Ortodontia', 'Ortopedia Funcional'],
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=800&fit=crop&flip=h',
    bio: 'Ortodontista especializada em tratamentos interceptivos e ortopedia funcional dos maxilares em crianças e adolescentes.',
    education: [
      'Licenciatura em Medicina Dentária - Universidade do Porto',
      'Mestrado em Ortodontia - Universidade de Santiago de Compostela',
      'Pós-Graduação em Ortopedia Funcional - Instituto Português de Ortodontia'
    ],
    achievements: [
      'Especialista em aparelhos ortopédicos funcionais',
      'Certificação em sistemas Damon e autoligáveis',
      'Membro da World Federation of Orthodontists'
    ],
    languages: ['Português', 'Inglês']
  },
  {
    id: '12',
    name: 'Gonçalo Silva',
    title: 'Dr.',
    specialties: ['Prostodontia', 'Oclusão'],
    photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=800&h=800&fit=crop',
    bio: 'Prostodontista com foco em oclusão e DTM, especializado em reabilitações funcionais e tratamento de disfunções temporomandibulares.',
    education: [
      'Mestrado em Medicina Dentária - Faculdade de Medicina Dentária da Universidade de Lisboa',
      'Pós-Graduação em Oclusão e DTM - New York University',
      'Curso de Especialização em Prostodontia - Universidade de Michigan'
    ],
    achievements: [
      'Especialista certificado em Disfunções Temporomandibulares',
      'Formação avançada em Análise Oclusal Computorizada',
      'Colaborador em estudos sobre bruxismo e parafunções'
    ],
    languages: ['Português', 'Inglês']
  }
];

export default doctors;