export interface GoogleTestimonial {
  id: number;
  name: string;
  initials: string;
  rating: 5;
  date: string;
  timeAgo: string;
  text: string;
  googleUrl: string;
  doctor?: string;
}

export const googleTestimonials: GoogleTestimonial[] = [
  {
    id: 1,
    name: 'Fernando Correia',
    initials: 'FC',
    rating: 5,
    date: '2024-12-20',
    timeAgo: 'Há 3 semanas',
    text: 'Depois de partir um dente da frente durante umas férias em Portugal, recebi um excelente atendimento das rececionistas e da Dra. Veridiana. Ela fez um trabalho de primeira classe a um preço justo.',
    googleUrl: 'https://share.google/zV4w8CnN0dTYuI5C1',
  },
  {
    id: 2,
    name: 'Márcia Xavier',
    initials: 'MX',
    rating: 5,
    date: '2024-09-15',
    timeAgo: 'Há 4 meses',
    text: 'Fiquei muito satisfeita com o atendimento, tanto da receção como da médica. Foi a minha primeira visita à clínica e fiquei completamente satisfeita!',
    googleUrl: 'https://share.google/9SJowQCqAq8EHoL5K',
  },
  {
    id: 3,
    name: 'Mia Mess',
    initials: 'MM',
    rating: 5,
    date: '2024-07-20',
    timeAgo: 'Há 6 meses',
    text: 'Experiência fantástica no Centro Dentário Colombo! Há poucos dias, fiquei totalmente surpreendida ao encontrar uma consulta disponível com o Dr. Orlando às 22h – e que surpresa agradável! Após uma pausa de dois anos, fui recebida com o mesmo cuidado e excelência de sempre. A receção foi impecável, e o Dr. Orlando superou as minhas expectativas: a sua limpeza dentária é meticulosa, delicada e adaptada a cada dente individual, dando atenção especial a cada um. Tal dedicação é rara nos dias de hoje!',
    googleUrl: 'https://share.google/zLWdqD2gfmqI92mHV',
  },
  {
    id: 4,
    name: 'C Soares',
    initials: 'CS',
    rating: 5,
    date: '2024-08-15',
    timeAgo: 'Há 5 meses',
    text: 'Gostaria de expressar a minha mais profunda gratidão à Dra. Rubenita. Ela é uma mulher maravilhosa que não só é uma profissional exemplar, como também possui uma empatia e sensibilidade extraordinárias. Graças aos seus cuidados, paciência e atenção, estou finalmente a superar o meu medo irracional de dentistas. O seu cuidado, a forma calma como explica cada passo, a sua escuta atenta e a sensação de segurança que transmite – tudo isto mudou fundamentalmente a minha vida.',
    googleUrl: 'https://share.google/wbOdakUR4dVMvpP4N',
  },
  {
    id: 5,
    name: 'Katia Lidiaque',
    initials: 'KL',
    rating: 5,
    date: '2024-08-20',
    timeAgo: 'Há 5 meses',
    text: 'Atendimento excelente! A Dra. Andresa foi muito simpática e resolveu o meu problema imediatamente.',
    googleUrl: 'https://share.google/iopQWZmAoEDFYf9Jc',
  },
  {
    id: 6,
    name: 'Daniel Jesus',
    initials: 'DJ',
    rating: 5,
    date: '2024-07-25',
    timeAgo: 'Há 6 meses',
    text: 'Fiquei muito satisfeito com o atendimento e profissionalismo da Dra. Roseli. A clínica é excelente, com uma equipa atenciosa e um ambiente agradável. Senti-me sempre bem cuidado e em boas mãos durante os tratamentos. A minha única crítica é que a clínica não coopera com seguradoras de saúde, o que facilitaria o acesso aos serviços e o pagamento. Tirando isso, posso recomendar de coração!',
    googleUrl: 'https://share.google/yqCF4Tpe9orDmcY3d',
  },
  {
    id: 7,
    name: 'Mariana Guimarães',
    initials: 'MG',
    rating: 5,
    date: '2024-08-10',
    timeAgo: 'Há 5 meses',
    text: 'Sou paciente do Dr. Orlando há muitos anos e só tenho coisas boas a dizer sobre ele! É uma pessoa incrivelmente amável e um excelente dentista! Muito obrigada, Dr. Orlando, por cuidar tão bem dos meus dentes!',
    googleUrl: 'https://share.google/W78ysFkJkZXdQslGU',
  },
  {
    id: 8,
    name: 'Guilherme Souza',
    initials: 'GS',
    rating: 5,
    date: '2024-07-18',
    timeAgo: 'Há 6 meses',
    text: 'Gostaria de expressar os meus sinceros agradecimentos a toda a equipa, e especialmente à Dra. Veridiana, pelo excelente atendimento. Vou recomendá-los com prazer aos meus amigos e conhecidos. Muito obrigado!',
    googleUrl: 'https://share.google/sE7B1rAksel7j15ES',
  },
  {
    id: 9,
    name: 'Ana Paula Rainha',
    initials: 'APR',
    rating: 5,
    date: '2024-10-15',
    timeAgo: 'Há 3 meses',
    text: 'A Dra. Andrea é muito competente! Estou muito satisfeita com a sua dedicação e profissionalismo!',
    googleUrl: 'https://share.google/Fct2e9Qu1CMnyQ9nk',
  },
  {
    id: 10,
    name: 'Rafaela Figueiredo',
    initials: 'RF',
    rating: 5,
    date: '2024-07-20',
    timeAgo: 'Há 6 meses',
    text: 'Atendimento excelente, desde a receção até ao tratamento em si, equipa muito simpática e prestável, preço justo e horários flexíveis, recomendo vivamente.',
    googleUrl: 'https://share.google/4PUGjFIlCAmspPTf9',
  },
];

// Google Business Profile URL (adicione o URL real quando disponível)
export const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?sca_esv=36c52ed8992032f9&sxsrf=ANbL-n5YZdsXtOyPXkq8N4d9k8qHs2Si1w:1768661056232&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-7RgOG8sBwQ7wwKnLxFUH8noAr4j5rXkCmfErNTAyMS2eidxfBj3gI6_nxHGh5tBHUZhxe6IhHeVtiOTywej4ck_g575iuOLLl4nrRXoT4zunW0t5m2hoM8-j-bHcclSFhRdIQA&q=Centro+Dent%C3%A1rio+Colombo+Cr%C3%ADticas&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVmMQsnrsdXfcsSiB2hDgR4qmnkjgqEdXZRhq5Pgkikc5-oovjhp5uTAAyFmWBsco6IaRnOqe1RY7u1bkOggtSqhChpSetyQER15iP2DyfYtkSz7ww%3D%3D&hl=pt-PT&sa=X&ved=2ahUKEwiWg_Dv55KSAxXDgf0HHWszI8oQ_4MLegQIOxAO&biw=1536&bih=738&dpr=1.25&aic=0';