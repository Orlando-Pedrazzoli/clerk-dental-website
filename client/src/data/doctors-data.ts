export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  photo: string;
  bio: string;
  education?: string[];
  achievements?: string[];
  languages?: string[];
}

// ============================================
// Portuguese Doctors Data
// ============================================
const doctorsPT: Doctor[] = [
  {
    id: '1',
    name: 'Marcelo F. Natali',
    title: 'Dr.',
    specialties: ['Generalista', 'Reabilitação Oral'],
    photo: '/doctors/marcelo-natali.jpg',
    bio: 'Médico dentista formado há 33 anos, atuando como generalista com ênfase em reabilitação oral fixa e parcial. Atendimento humanizado, baseado na escuta, no respeito ao paciente e na busca por tratamentos seguros, funcionais e confortáveis, sempre focados no bem-estar e na qualidade de vida.',
    languages: ['Português']
  },
  {
    id: '2',
    name: 'Geane Mendes',
    title: 'Dra.',
    specialties: ['Endodontia', 'Prótese Dentária', 'Reabilitação Oral'],
    photo: '/doctors/geane-mendes.jpg',
    bio: 'Médica Dentista com mais de 25 anos de atuação, especialista em Endodontia, com experiência em Prótese Dentária, Reabilitação Oral e Cirurgia Oral Menor. Dedica-se a prestar cuidados de saúde com rigor clínico, ética e atenção individualizada.',
    languages: ['Português']
  },
  {
    id: '3',
    name: 'Christina Melo Hastenreiter',
    title: 'Dra.',
    specialties: ['Ortopedia Funcional dos Maxilares', 'Ortodontia Corretiva'],
    photo: '/doctors/christina-hastenreiter.jpg',
    bio: 'Atua na área de Ortopedia Funcional dos Maxilares e Ortodontia Corretiva. Trabalho focado no diagnóstico e tratamento das alterações dentofaciais, promovendo função, estética e equilíbrio do sistema estomatognático.',
    languages: ['Português']
  },
  {
    id: '4',
    name: 'Ana Paula Ribeiro Borges',
    title: 'Dra.',
    specialties: ['Ortodontia'],
    photo: '/doctors/ana-paula-borges.jpg',
    bio: 'Ortodontista com mais de 20 anos de experiência, dedicada a entregar com excelência sorrisos funcionais e harmoniosos, sempre com empatia e compromisso ao longo de toda a sua carreira.',
    languages: ['Português']
  },
  {
    id: '5',
    name: 'Camila F. Lameira',
    title: 'Dra.',
    specialties: ['Ortodontia', 'Ortopedia', 'Odontopediatria'],
    photo: '/doctors/camila-lameira.jpg',
    bio: 'Médica dentista com 20 anos de experiência. Especialista em Ortodontia, com atuação em Ortopedia e paixão pela Odontopediatria. Acredita que compreender cada paciente é essencial para transformar sorrisos com confiança.',
    languages: ['Português']
  },
  {
    id: '6',
    name: 'Marcelo Marques',
    title: 'Dr.',
    specialties: ['Dentisteria Estética', 'Implantes Dentários'],
    photo: '/doctors/marcelo-marques.jpg',
    bio: 'Especialista em Dentisteria Estética, com foco em facetas e coroas. Possui pós-graduações em Implantes Dentários, Oclusão, Reabilitação Oral, Periodontologia e Ortodontia, oferecendo um atendimento completo e multidisciplinar.',
    education: [
      'Pós-graduação em Implantes Dentários',
      'Pós-graduação em Oclusão',
      'Pós-graduação em Reabilitação Oral',
      'Pós-graduação em Periodontologia',
      'Pós-graduação em Ortodontia'
    ],
    achievements: ['OMD 11398'],
    languages: ['Português']
  },
  {
    id: '7',
    name: 'Orlando Cepa',
    title: 'Dr.',
    specialties: ['Reabilitação Oral', 'Dentisteria', 'Prótese Dentária'],
    photo: '/doctors/orlando-cepa.jpg',
    bio: 'Com uma carreira distinta que inclui formação em Medicina Dentária na FMDUP, experiência clínica e um foco em reabilitação oral, dentisteria e prótese dentária, trabalhando com uma equipa especializada na clínica.',
    education: ['Medicina Dentária - FMDUP (Faculdade de Medicina Dentária da Universidade do Porto)'],
    languages: ['Português']
  },
  {
    id: '8',
    name: 'Veridiana Fumio',
    title: 'Dra.',
    specialties: ['Implantologia', 'Cirurgia Oral', 'Dentisteria', 'Prostodontia'],
    photo: '/doctors/veridiana-fumio.jpeg',
    bio: 'Médica Dentista com atuação em Implantologia, Cirurgia Oral, Dentisteria e Prótese Dentária. Realiza desde tratamentos restauradores e reabilitações estéticas até cirurgias e colocação de implantes, sempre focando no conforto, funcionalidade e bem-estar do paciente.',
    languages: ['Português']
  },
  {
    id: '9',
    name: 'Andresa Fonseca M. da Silva',
    title: 'Dra.',
    specialties: ['Generalista', 'Endodontia'],
    photo: '/doctors/andrea-fonseca.jpg',
    bio: 'Atendimento humanizado para adultos e crianças. Possui pós-graduação em diversas áreas como Endodontia, Implantologia, Cirurgia Oral Menor e Prótese, garantindo um cuidado abrangente e de qualidade.',
    education: [
      'Pós-graduação em Endodontia',
      'Pós-graduação em Implantologia',
      'Pós-graduação em Cirurgia Oral Menor',
      'Pós-graduação em Prótese'
    ],
    languages: ['Português']
  },
  {
    id: '10',
    name: 'Flavia Paula Silva Cardoso',
    title: 'Dra.',
    specialties: ['Generalista', 'Odontopediatria', 'Cirurgia Oral'],
    photo: '/doctors/flavia-paula.jpg',
    bio: 'Médica Dentista Generalista com pós-graduação em cirurgia de dentes inclusos. Atua realizando atendimentos a pacientes de todas as idades, com foco especial em Odontopediatria.',
    education: ['Pós-graduação em Cirurgia de Dentes Inclusos'],
    languages: ['Português']
  },
  {
    id: '11',
    name: 'Andréa Romero Esteves Lima',
    title: 'Dra.',
    specialties: ['Reabilitação Oral', 'Dentisteria Estética', 'Periodontologia'],
    photo: '/doctors/andrea-romero.jpeg',
    bio: 'Especialista em Prótese e Dentisteria, executa tratamentos restauradores em geral como coroas e facetas em resina e porcelana, periodontologia e pequenas cirurgias. Formação em implantes e prótese sobre implantes.',
    education: [
      'Especialização em Prótese',
      'Especialização em Dentisteria',
      'Formação em Implantes e Prótese sobre Implantes',
      'Formação em Periodontologia'
    ],
    languages: ['Português']
  },
  {
    id: '12',
    name: 'Carolina Chaves',
    title: 'Dra.',
    specialties: ['Prostodontia', 'Implantes Dentários'],
    photo: '/doctors/carolina-chaves.JPG',
    bio: 'Especialista em Prostodontia com Doutoramento (PhD) e mais de 10 anos de experiência clínica e investigação. Formação avançada em Cirurgia de Implantes e Prótese sobre Implantes. Investigadora em biomateriais para reabilitação oral, com publicações em revistas científicas internacionais.',
    education: [
      'Doutoramento (PhD) em Prostodontia',
      'Formação em Cirurgia de Implantes',
      'Formação em Prótese sobre Implantes',
      'Investigação - São Paulo State University',
      'Investigação - University of Montreal'
    ],
    achievements: ['Publicações em revistas científicas internacionais'],
    languages: ['Português', 'Inglês', 'Francês']
  },
  {
    id: '13',
    name: 'Fernanda P. Patrício',
    title: 'Dra.',
    specialties: ['Generalista', 'Cirurgia Oral'],
    photo: '/doctors/fernanda-patricio.jpg',
    bio: 'Médica dentista formada há 18 anos, atuando como generalista com foco em cirurgia oral. Acredita num atendimento verdadeiramente humanizado, baseado na escuta atenta, na confiança e no cuidado individualizado de cada paciente.',
    languages: ['Português']
  },
  {
    id: '14',
    name: 'Sandra Rodriguez',
    title: 'Dra.',
    specialties: ['Clínica Geral'],
    photo: '/doctors/sandra-rodrigues.jpg',
    bio: 'Médica dentista formada há 20 anos. Apaixonada pelo trabalho clínico e pela aplicação da evidência científica para oferecer aos pacientes tratamentos de última geração com calidez humana.',
    languages: ['Português']
  },
  {
    id: '15',
    name: 'Eder Quedas Ferreira',
    title: 'Dr.',
    specialties: ['Generalista', 'Dentisteria Estética', 'Prótese Fixa', 'Prótese Removível', 'Cirurgia'],
    photo: '/doctors/eder-quedas.jpg',
    bio: 'Médico Dentista Generalista formado em Odontologia em São Paulo, Brasil. Atua em Portugal desde 1989, clinicando em Lisboa e Setúbal. Experiência em Dentisteria Estética, Próteses Fixa e Removível, e Cirurgia.',
    languages: ['Português']
  },
  {
    id: '16',
    name: 'Jessica Arcadier',
    title: 'Dra.',
    specialties: ['Periodontia', 'Prótese Fixa', 'Dentisteria Estética'],
    photo: '/doctors/jessica-arcadier.jpg',
    bio: 'Especialista em Periodontia, tratando doenças e realizando cirurgias nos tecidos de suporte dos dentes. Possui especialização em Odontologia Estética, com foco em restaurações e reabilitações fixas que unem função e harmonia do sorriso.',
    languages: ['Português']
  },
  {
    id: '17',
    name: 'Júlio Souza',
    title: 'Dr.',
    specialties: ['Cirurgia Oral'],
    photo: '/doctors/julio-souza.jpg',
    bio: 'Cirurgião-dentista com mais de 40 anos de experiência clínica, reconhecido pelo atendimento humanizado, bem-humorado e pela realização de extrações com conforto, tranquilidade e segurança.',
    languages: ['Português']
  },
  {
    id: '18',
    name: 'Patricia Octávio',
    title: 'Dra.',
    specialties: ['Implantes Dentários', 'Cirurgia', 'Prótese Fixa', 'Prótese Removível', 'Reabilitação Oral'],
    photo: '/doctors/patricia-octavio.jpg',
    bio: 'Com 28 anos de experiência, especialista em Cirurgia Oral Avançada, Implantes Avançados, Próteses sobre Implantes e Reabilitação Oral, devolvendo função mastigatória e estética ao paciente.',
    achievements: ['OMD 14405'],
    languages: ['Português']
  }
];

// ============================================
// English Doctors Data
// ============================================
const doctorsEN: Doctor[] = [
  {
    id: '1',
    name: 'Marcelo F. Natali',
    title: 'Dr.',
    specialties: ['General Dentistry', 'Oral Rehabilitation'],
    photo: '/doctors/marcelo-natali.jpg',
    bio: 'Dentist with 33 years of experience, practicing as a general dentist with emphasis on fixed and partial oral rehabilitation. Humanized care based on listening, respect for the patient, and the pursuit of safe, functional, and comfortable treatments, always focused on well-being and quality of life.',
    languages: ['Portuguese']
  },
  {
    id: '2',
    name: 'Geane Mendes',
    title: 'Dr.',
    specialties: ['Endodontics', 'Dental Prosthetics', 'Oral Rehabilitation'],
    photo: '/doctors/geane-mendes.jpg',
    bio: 'Dentist with over 25 years of practice, specialist in Endodontics, with experience in Dental Prosthetics, Oral Rehabilitation, and Minor Oral Surgery. Dedicated to providing healthcare with clinical rigor, ethics, and individualized attention.',
    languages: ['Portuguese']
  },
  {
    id: '3',
    name: 'Christina Melo Hastenreiter',
    title: 'Dr.',
    specialties: ['Functional Jaw Orthopedics', 'Corrective Orthodontics'],
    photo: '/doctors/christina-hastenreiter.jpg',
    bio: 'Works in the area of Functional Jaw Orthopedics and Corrective Orthodontics. Focused on the diagnosis and treatment of dentofacial alterations, promoting function, aesthetics, and balance of the stomatognathic system.',
    languages: ['Portuguese']
  },
  {
    id: '4',
    name: 'Ana Paula Ribeiro Borges',
    title: 'Dr.',
    specialties: ['Orthodontics'],
    photo: '/doctors/ana-paula-borges.jpg',
    bio: 'Orthodontist with over 20 years of experience, dedicated to delivering functional and harmonious smiles with excellence, always with empathy and commitment throughout her career.',
    languages: ['Portuguese']
  },
  {
    id: '5',
    name: 'Camila F. Lameira',
    title: 'Dr.',
    specialties: ['Orthodontics', 'Orthopedics', 'Pediatric Dentistry'],
    photo: '/doctors/camila-lameira.jpg',
    bio: 'Dentist with 20 years of experience. Specialist in Orthodontics, with practice in Orthopedics and a passion for Pediatric Dentistry. Believes that understanding each patient is essential to transforming smiles with confidence.',
    languages: ['Portuguese']
  },
  {
    id: '6',
    name: 'Marcelo Marques',
    title: 'Dr.',
    specialties: ['Cosmetic Dentistry', 'Dental Implants'],
    photo: '/doctors/marcelo-marques.jpg',
    bio: 'Specialist in Cosmetic Dentistry, focusing on veneers and crowns. Holds postgraduate degrees in Dental Implants, Occlusion, Oral Rehabilitation, Periodontology, and Orthodontics, offering comprehensive and multidisciplinary care.',
    education: [
      'Postgraduate in Dental Implants',
      'Postgraduate in Occlusion',
      'Postgraduate in Oral Rehabilitation',
      'Postgraduate in Periodontology',
      'Postgraduate in Orthodontics'
    ],
    achievements: ['OMD 11398'],
    languages: ['Portuguese']
  },
  {
    id: '7',
    name: 'Orlando Cepa',
    title: 'Dr.',
    specialties: ['Oral Rehabilitation', 'Restorative Dentistry', 'Dental Prosthetics'],
    photo: '/doctors/orlando-cepa.jpg',
    bio: 'With a distinguished career including training in Dental Medicine at FMDUP, clinical experience and a focus on oral rehabilitation, restorative dentistry, and dental prosthetics, working with a specialized team at the clinic.',
    education: ['Dental Medicine - FMDUP (Faculty of Dental Medicine, University of Porto)'],
    languages: ['Portuguese']
  },
  {
    id: '8',
    name: 'Veridiana Fumio',
    title: 'Dr.',
    specialties: ['Implantology', 'Oral Surgery', 'Restorative Dentistry', 'Prosthodontics'],
    photo: '/doctors/veridiana-fumio.jpeg',
    bio: 'Dentist practicing in Implantology, Oral Surgery, Restorative Dentistry, and Dental Prosthetics. Performs everything from restorative treatments and aesthetic rehabilitations to surgeries and implant placement, always focusing on patient comfort, functionality, and well-being.',
    languages: ['Portuguese']
  },
  {
    id: '9',
    name: 'Andresa Fonseca M. da Silva',
    title: 'Dr.',
    specialties: ['General Dentistry', 'Endodontics'],
    photo: '/doctors/andrea-fonseca.jpg',
    bio: 'Humanized care for adults and children. Holds postgraduate degrees in various areas such as Endodontics, Implantology, Minor Oral Surgery, and Prosthetics, ensuring comprehensive and quality care.',
    education: [
      'Postgraduate in Endodontics',
      'Postgraduate in Implantology',
      'Postgraduate in Minor Oral Surgery',
      'Postgraduate in Prosthetics'
    ],
    languages: ['Portuguese']
  },
  {
    id: '10',
    name: 'Flavia Paula Silva Cardoso',
    title: 'Dr.',
    specialties: ['General Dentistry', 'Pediatric Dentistry', 'Oral Surgery'],
    photo: '/doctors/flavia-paula.jpg',
    bio: 'General Dentist with a postgraduate degree in impacted tooth surgery. Provides care to patients of all ages, with special focus on Pediatric Dentistry.',
    education: ['Postgraduate in Impacted Tooth Surgery'],
    languages: ['Portuguese']
  },
  {
    id: '11',
    name: 'Andréa Romero Esteves Lima',
    title: 'Dr.',
    specialties: ['Oral Rehabilitation', 'Cosmetic Dentistry', 'Periodontology'],
    photo: '/doctors/andrea-romero.jpeg',
    bio: 'Specialist in Prosthetics and Restorative Dentistry, performs general restorative treatments such as resin and porcelain crowns and veneers, periodontology, and minor surgeries. Trained in implants and implant-supported prosthetics.',
    education: [
      'Specialization in Prosthetics',
      'Specialization in Restorative Dentistry',
      'Training in Implants and Implant-Supported Prosthetics',
      'Training in Periodontology'
    ],
    languages: ['Portuguese']
  },
  {
    id: '12',
    name: 'Carolina Chaves',
    title: 'Dr.',
    specialties: ['Prosthodontics', 'Dental Implants'],
    photo: '/doctors/carolina-chaves.JPG',
    bio: 'Prosthodontics Specialist with a PhD and over 10 years of clinical experience and research. Advanced training in Implant Surgery and Implant-Supported Prosthetics. Researcher in biomaterials for oral rehabilitation, with publications in international scientific journals.',
    education: [
      'PhD in Prosthodontics',
      'Training in Implant Surgery',
      'Training in Implant-Supported Prosthetics',
      'Research - São Paulo State University',
      'Research - University of Montreal'
    ],
    achievements: ['Publications in international scientific journals'],
    languages: ['Portuguese', 'English', 'French']
  },
  {
    id: '13',
    name: 'Fernanda P. Patrício',
    title: 'Dr.',
    specialties: ['General Dentistry', 'Oral Surgery'],
    photo: '/doctors/fernanda-patricio.jpg',
    bio: 'Dentist with 18 years of experience, practicing as a general dentist with a focus on oral surgery. Believes in truly humanized care based on attentive listening, trust, and individualized care for each patient.',
    languages: ['Portuguese']
  },
  {
    id: '14',
    name: 'Sandra Rodriguez',
    title: 'Dr.',
    specialties: ['General Practice'],
    photo: '/doctors/sandra-rodrigues.jpg',
    bio: 'Dentist with 20 years of experience. Passionate about clinical work and applying scientific evidence to offer patients state-of-the-art treatments with human warmth.',
    languages: ['Portuguese']
  },
  {
    id: '15',
    name: 'Eder Quedas Ferreira',
    title: 'Dr.',
    specialties: ['General Dentistry', 'Cosmetic Dentistry', 'Fixed Prosthetics', 'Removable Prosthetics', 'Surgery'],
    photo: '/doctors/eder-quedas.jpg',
    bio: 'General Dentist trained in Dentistry in São Paulo, Brazil. Has been practicing in Portugal since 1989, working in Lisbon and Setúbal. Experience in Cosmetic Dentistry, Fixed and Removable Prosthetics, and Surgery.',
    languages: ['Portuguese']
  },
  {
    id: '16',
    name: 'Jessica Arcadier',
    title: 'Dr.',
    specialties: ['Periodontics', 'Fixed Prosthetics', 'Cosmetic Dentistry'],
    photo: '/doctors/jessica-arcadier.jpg',
    bio: 'Periodontics specialist, treating diseases and performing surgeries on tooth-supporting tissues. Holds a specialization in Cosmetic Dentistry, focusing on restorations and fixed rehabilitations that combine function and smile harmony.',
    languages: ['Portuguese']
  },
  {
    id: '17',
    name: 'Júlio Souza',
    title: 'Dr.',
    specialties: ['Oral Surgery'],
    photo: '/doctors/julio-souza.jpg',
    bio: 'Dental surgeon with over 40 years of clinical experience, recognized for humanized, good-humored care and performing extractions with comfort, tranquility, and safety.',
    languages: ['Portuguese']
  },
  {
    id: '18',
    name: 'Patricia Octávio',
    title: 'Dr.',
    specialties: ['Dental Implants', 'Surgery', 'Fixed Prosthetics', 'Removable Prosthetics', 'Oral Rehabilitation'],
    photo: '/doctors/patricia-octavio.jpg',
    bio: 'With 28 years of experience, specialist in Advanced Oral Surgery, Advanced Implants, Implant-Supported Prosthetics, and Oral Rehabilitation, restoring chewing function and aesthetics to patients.',
    achievements: ['OMD 14405'],
    languages: ['Portuguese']
  }
];

// ============================================
// Export function to get doctors by language
// ============================================
export function getDoctors(language: string): Doctor[] {
  return language === 'en' ? doctorsEN : doctorsPT;
}

// Default export for backward compatibility
export const doctors = doctorsPT;
export default doctors;