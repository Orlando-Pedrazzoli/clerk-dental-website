export interface Doctor {
  id: string;
  name: string;
  title: string; // Dr. ou Dra.
  specialties: string[];
  photo: string;
  bio: string;
  education?: string[];
  achievements?: string[];
  languages?: string[];
}

export const doctors: Doctor[] = [
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
    name: 'Rubenita de Sousa',
    title: 'Dra.',
    specialties: ['Generalista', 'Endodontia', 'Prostodontia', 'Odontopediatria'],
    photo: '/doctors/rubenita-souza.jpeg',
    bio: 'Médica dentista generalista, com experiência clínica nas áreas de Endodontia, Prostodontia e Odontopediatria, prestando cuidados de saúde oral abrangentes a pacientes de diferentes faixas etárias.',
    languages: ['Português']
  },
  {
    id: '14',
    name: 'Fernanda P. Patrício',
    title: 'Dra.',
    specialties: ['Generalista', 'Cirurgia Oral'],
    photo: '/doctors/fernanda-patricio.jpg',
    bio: 'Médica dentista formada há 18 anos, atuando como generalista com foco em cirurgia oral. Acredita num atendimento verdadeiramente humanizado, baseado na escuta atenta, na confiança e no cuidado individualizado de cada paciente.',
    languages: ['Português']
  },
  {
    id: '15',
    name: 'Sandra Rodriguez',
    title: 'Dra.',
    specialties: ['Clínica Geral'],
    photo: '/doctors/sandra-rodrigues.jpg',
    bio: 'Médica dentista formada há 20 anos. Apaixonada pelo trabalho clínico e pela aplicação da evidência científica para oferecer aos pacientes tratamentos de última geração com calidez humana.',
    languages: ['Português']
  }
];

export default doctors;