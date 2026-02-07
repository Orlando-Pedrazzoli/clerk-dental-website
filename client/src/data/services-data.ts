export interface Treatment {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  fullContent: {
    whatIs: string;
    advantages: string[];
    additionalInfo?: string;
  };
  bannerImage: string;
  image1: string;
  image2: string;
  keywords: string[];
}

// ============================================
// Portuguese Treatments Data
// ============================================
const treatmentsPT: Treatment[] = [
  {
    id: '1',
    title: 'Cáries',
    slug: 'caries',
    subtitle: 'Tratamento e Prevenção',
    description: 'Recupere a saúde dos seus dentes afetados por cáries ou traumatismos através de tratamentos modernos e eficazes.',
    fullContent: {
      whatIs: 'A Dentisteria é frequentemente a primeira área da Medicina Dentária com a qual os pacientes têm contacto, estando associada ao conhecido "Check-up Dentário". Esta especialidade dedica-se ao tratamento de lesões dentárias causadas por cáries ou traumatismos, restaurando a aparência natural, textura e função dos dentes. Quando os dentes são afetados, a Dentisteria permite recuperar as funções estéticas, anatómicas e mastigatórias, devolvendo ao paciente conforto, bem-estar e autoconfiança. O tratamento imediato é fundamental para evitar que lesões pequenas evoluam para problemas mais graves que possam requerer intervenções mais complexas.',
      advantages: [
        'Evita a destruição progressiva da estrutura dentária e possível perda total do dente',
        'Intervenção precoce resulta em restaurações menores e menos invasivas',
        'Preserva a estrutura natural do dente e sua função mastigatória',
        'Restaura a estética do sorriso e a autoconfiança do paciente',
        'Previne complicações que poderiam necessitar de tratamentos mais complexos'
      ],
      additionalInfo: 'Quando uma lesão se torna muito extensa, pode ser necessária a intervenção de outras especialidades como Endodontia, Prótese Fixa, Prótese Removível ou Implantologia para garantir o melhor resultado.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1743767587921-473b6d079137?q=80&w=1355&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    keywords: ['cáries', 'dentisteria', 'restauração dentária', 'check-up dentário', 'saúde oral']
  },
  {
    id: '2',
    title: 'Reabilitação Oral',
    slug: 'reabilitacao-oral',
    subtitle: 'Recupere o seu Sorriso Completo',
    description: 'Recupere o seu sorriso, bem-estar e função mastigatória através das técnicas e tecnologias mais avançadas em reabilitação oral.',
    fullContent: {
      whatIs: 'A Reabilitação Oral é uma abordagem multidisciplinar que visa restaurar completamente a função mastigatória, estética e estabilidade da cavidade oral. Esta especialidade é responsável pela substituição de dentes perdidos e recuperação de casos complexos que afetam múltiplos dentes. Cada tratamento é cuidadosamente avaliado caso-a-caso, envolvendo a integração de diversas áreas da Medicina Dentária como Implantologia, Ortodontia, Prótese Fixa e Removível, Estética Dentária e Periodontologia. O objetivo é criar um plano de tratamento personalizado que devolva não apenas a função, mas também a autoestima e qualidade de vida do paciente.',
      advantages: [
        'Recuperação completa da função mastigatória e digestiva',
        'Restauração da estética facial e do sorriso',
        'Melhoria da fonética e capacidade de comunicação',
        'Recuperação da autoestima e confiança pessoal',
        'Tratamento integrado com corpo clínico de excelência',
        'Utilização de tecnologias e materiais de última geração'
      ],
      additionalInfo: 'No Centro Dentário Colombo, desenvolvemos planos de tratamento personalizados que combinam as mais modernas técnicas para garantir resultados duradouros e naturais.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&h=600&fit=crop',
    image1: 'https://images.unsplash.com/photo-1660732205525-eb180e4d29f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2: 'https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: ['reabilitação oral', 'restauração dentária', 'implantes', 'prótese', 'multidisciplinar']
  },
  {
    id: '3',
    title: 'Aparelhos Dentários',
    slug: 'aparelhos-dentarios',
    subtitle: 'Sorriso Alinhado e Harmonioso',
    description: 'Aparelhos dentários convencionais ou transparentes invisíveis - encontre a solução ideal para o alinhamento do seu sorriso.',
    fullContent: {
      whatIs: 'A Ortodontia é a especialidade que corrige o posicionamento dos dentes e maxilares, promovendo harmonia facial e funcional. Através de uma avaliação rigorosa e detalhada, o Ortodontista elabora um plano de tratamento personalizado para melhorar a oclusão dentária (forma como os dentes se encaixam) e distribuir adequadamente as forças mastigatórias. O tratamento ortodôntico não é apenas estético - ele protege os dentes, gengivas, osso e ligamentos de traumas e desgastes prematuros. Hoje em dia, oferecemos tanto aparelhos convencionais quanto opções mais modernas como os aparelhos transparentes invisíveis, adequando o tratamento às necessidades e preferências de cada paciente.',
      advantages: [
        'Melhora significativa do aspecto estético e da expressão facial',
        'Aumento da autoestima e confiança pessoal',
        'Facilita a higiene oral adequada, reduzindo risco de cáries',
        'Diminui problemas gengivais e periodontais',
        'Melhora a função mastigatória e digestão',
        'Previne desgaste prematuro dos dentes',
        'Reduz dores musculares e problemas na articulação temporomandibular',
        'Benefícios duradouros para saúde e bem-estar geral'
      ]
    },
    bannerImage: 'https://images.pexels.com/photos/28407749/pexels-photo-28407749.jpeg',
    image1: 'https://oralblu.com.br/wp-content/uploads/2018/12/aparelho-estetico.jpg',
    image2: 'https://www.santander.pt/images/particulares/blogue/artigos/topo/desktop/aparelho-dentario_2048x768_desktop.jpg',
    keywords: ['ortodontia', 'aparelhos dentários', 'alinhadores transparentes', 'correção dentária', 'aparelho invisível']
  },
  {
    id: '4',
    title: 'Odontopediatria',
    slug: 'criancas',
    subtitle: 'Cuidado Especializado para Crianças',
    description: 'Médicos especialistas em Odontopediatria e tecnologia avançada para cuidar da saúde oral dos seus filhos com carinho e profissionalismo.',
    fullContent: {
      whatIs: 'A Odontopediatria é a especialidade dedicada ao cuidado da saúde oral de bebês, crianças e adolescentes, desde o primeiro ano de vida. O primeiro contacto com o dentista é fundamental para estabelecer uma relação positiva e prevenir problemas futuros. Durante as consultas, avaliamos o desenvolvimento da dentição, o estado de saúde oral e realizamos tratamentos preventivos quando necessário. Além do tratamento clínico, a Odontopediatria tem um forte componente educacional, ensinando às crianças e aos pais técnicas corretas de escovagem, uso do fio dentário e flúor. Este acompanhamento regular desde cedo é essencial para garantir dentes saudáveis na vida adulta e criar hábitos positivos de higiene oral.',
      advantages: [
        'Prevenção eficaz do aparecimento de cáries',
        'Criação de hábitos saudáveis de higiene oral desde cedo',
        'Estabelecimento de relação positiva com o dentista',
        'Acompanhamento do desenvolvimento da dentição',
        'Deteção precoce de problemas ortodônticos',
        'Educação sobre alimentação e saúde oral',
        'Tratamentos preventivos como selantes e aplicação de flúor',
        'Manutenção de uma boa saúde oral ao longo da vida'
      ],
      additionalInfo: 'No Centro Dentário Colombo, criamos um ambiente acolhedor e divertido para que as crianças se sintam confortáveis e seguras durante as consultas.'
    },
    bannerImage: 'https://facilitaseguros.com.br/wp-content/uploads/2020/02/odontopediatria-saiba-quando-levar-o-seu-filho-ao-dentista-1160x560.jpg',
    image1: 'https://images.unsplash.com/photo-1758205308106-5760d0227cc7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2: 'https://www.atelierdosorriso.pt/wp-content/uploads/2020/02/odontopediatria-dentista-criancas-1.jpg',
    keywords: ['odontopediatria', 'dentista infantil', 'crianças', 'bebês', 'saúde oral infantil', 'prevenção']
  },
  {
    id: '5',
    title: 'Próteses Dentárias',
    slug: 'proteses-dentarias',
    subtitle: 'Reabilitação e Conforto',
    description: 'Substitua dentes perdidos e recupere o seu sorriso, função mastigatória e conforto com próteses modernas e personalizadas.',
    fullContent: {
      whatIs: 'A Prostodontia dedica-se à substituição de dentes perdidos através de próteses que reproduzem ao máximo a dentição natural. O objetivo é restabelecer integralmente a função mastigatória, fonética (capacidade de falar corretamente) e estética do paciente. As próteses são fabricadas de forma personalizada e podem ser fixas ou removíveis, totais ou parciais, dependendo das necessidades específicas de cada caso. Com os avanços tecnológicos atuais, as próteses modernas oferecem excelente estética, conforto e durabilidade. Em alguns casos, as próteses podem ser suportadas por implantes dentários, oferecendo maior estabilidade e conforto.',
      advantages: [
        'Restauração completa da capacidade mastigatória',
        'Melhoria da fonética e clareza na fala',
        'Recuperação da estética facial e do sorriso',
        'Prevenção de problemas digestivos causados por má mastigação',
        'Aumento da autoestima e confiança social',
        'Suporte aos tecidos faciais, prevenindo envelhecimento precoce',
        'Diversas opções adaptadas às necessidades individuais'
      ],
      additionalInfo: 'Oferecemos próteses fixas (coroas e pontes) que protegem e recobrem dentes danificados, e próteses removíveis (acrílicas ou esqueléticas) que facilitam a higiene oral.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1612283105859-6e2585710acd?q=80&w=1224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1: 'https://images.unsplash.com/photo-1660737217837-95f00b9eae53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2: 'https://images.unsplash.com/photo-1633690015214-462c5b6809cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: ['próteses dentárias', 'prostodontia', 'coroas', 'pontes', 'dentadura', 'reabilitação oral']
  },
  {
    id: '6',
    title: 'Estética Dentária',
    slug: 'estetica-dentaria',
    subtitle: 'Sorriso Bonito e Natural',
    description: 'Transforme o seu sorriso através de tratamentos estéticos modernos que devolvem beleza, naturalidade e confiança.',
    fullContent: {
      whatIs: 'A Estética Dentária é a especialidade que transforma sorrisos através de diversos tratamentos cosméticos avançados. Utilizando técnicas e materiais de última geração, conseguimos realizar alterações subtis mas impactantes nos dentes, corrigindo imperfeições e criando sorrisos harmoniosos e naturais. Esta área atua na correção de dentes fraturados, lesionados por cárie, manchados ou descoloridos, no fechamento de espaços entre dentes (diastemas), e na realização de branqueamentos dentários. Cada tratamento é cuidadosamente planeado para respeitar as características faciais únicas de cada paciente, garantindo resultados que parecem completamente naturais e que contribuem significativamente para a melhoria da autoestima.',
      advantages: [
        'Correção de dentes fraturados, lascados ou desgastados',
        'Tratamento de dentes manchados ou descoloridos',
        'Fechamento de espaços inestéticos entre dentes (diastemas)',
        'Branqueamento dentário profissional e seguro',
        'Melhoria da forma, tamanho e proporção dos dentes',
        'Resultados naturais que respeitam a harmonia facial',
        'Aumento significativo da autoestima e confiança',
        'Tratamentos minimamente invasivos com materiais de excelência'
      ]
    },
    bannerImage: 'https://images.unsplash.com/photo-1681939283065-011297ba26eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1655807946138-811bb2340d34?q=80&w=1571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: ['estética dentária', 'branqueamento', 'facetas', 'sorriso perfeito', 'cosmética dentária']
  },
  {
    id: '7',
    title: 'Cirurgia Oral',
    slug: 'cirurgia-oral',
    subtitle: 'Tratamentos Cirúrgicos Especializados',
    description: 'Prevenção, diagnóstico e tratamento cirúrgico de alterações, lesões e patologias da cavidade oral com segurança e precisão.',
    fullContent: {
      whatIs: 'A Cirurgia Oral é uma das áreas mais abrangentes da Medicina Dentária, responsável por todos os procedimentos cirúrgicos relacionados com a cavidade oral e estruturas anexas. Esta especialidade realiza extrações de dentes que não podem ser mantidos na boca, incluindo a famosa extração de sisos (dentes do siso), bem como dentes com cáries muito extensas, dentes sem suporte ósseo adequado, dentes inclusos (que não nasceram) ou supranumerários (dentes a mais). A Cirurgia Oral também diagnostica e remove quistos e tumores gengivais, e trabalha em estreita colaboração com outras especialidades como Implantologia, Ortodontia, Prótese e Periodontologia para garantir tratamentos integrados e resultados ótimos.',
      advantages: [
        'Resolução de problemas que requerem intervenção cirúrgica',
        'Prevenção de complicações futuras',
        'Diagnóstico e remoção de quistos e tumores',
        'Preparação adequada para colocação de implantes',
        'Criação de espaço necessário para tratamentos ortodônticos',
        'Alívio de dor e desconforto causados por dentes problemáticos',
        'Tratamento integrado e multidisciplinar',
        'Utilização de técnicas modernas e minimamente invasivas'
      ],
      additionalInfo: 'Todos os procedimentos cirúrgicos são realizados com máximo conforto e segurança, utilizando técnicas modernas de anestesia e controlo de dor.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=1200&h=600&fit=crop',
    image1: 'https://images.unsplash.com/photo-1598531228433-d9f0bdc5ab26?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1588776813397-5c4d5c9e149f?w=800&h=500&fit=crop',
    keywords: ['cirurgia oral', 'extração', 'sisos', 'cirurgia dentária', 'quistos', 'tumores orais']
  },
  {
    id: '8',
    title: 'Dentisteria',
    slug: 'dentisteria',
    subtitle: 'Restauração e Preservação Dentária',
    description: 'Tratamento especializado de cáries e traumatismos, restaurando a função, estética e saúde dos seus dentes.',
    fullContent: {
      whatIs: 'A Dentisteria é frequentemente o primeiro contacto do paciente com a Medicina Dentária, sendo fundamental para a manutenção da saúde oral. Esta especialidade dedica-se ao tratamento de lesões dentárias causadas por cáries ou traumatismos, restaurando não apenas a estrutura do dente, mas também sua aparência original, textura e funcionalidade. A Dentisteria restitui ao dente todas as suas características naturais, melhorando a mastigação, hálito, bem-estar geral e autoconfiança do paciente. O tratamento precoce é essencial - quanto mais cedo uma lesão for tratada, menor será a intervenção necessária e melhor será o prognóstico a longo prazo. Muitas vezes, a Dentisteria trabalha em conjunto com outras especialidades para garantir os melhores resultados.',
      advantages: [
        'Prevenção da destruição progressiva da estrutura dentária',
        'Evita a perda total do dente afetado',
        'Tratamento precoce resulta em restaurações menores',
        'Preservação máxima da estrutura dentária natural',
        'Restauração da função mastigatória adequada',
        'Melhoria do hálito e saúde oral geral',
        'Recuperação da estética do sorriso',
        'Aumento da autoconfiança e qualidade de vida'
      ],
      additionalInfo: 'Utilizamos materiais estéticos de última geração que reproduzem perfeitamente a cor e textura natural dos dentes, tornando as restaurações praticamente invisíveis.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop',
    image1: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    keywords: ['dentisteria', 'restauração dentária', 'cáries', 'obturação', 'tratamento dentário']
  },
  {
    id: '9',
    title: 'Endodontia',
    slug: 'endodontia',
    subtitle: 'Desvitalização e Preservação',
    description: 'Tratamento de canal radicular (desvitalização) - a solução conservadora para salvar dentes severamente afetados.',
    fullContent: {
      whatIs: 'A Endodontia, popularmente conhecida como "desvitalização" ou "tratamento de canal", é a especialidade que preserva dentes que de outra forma teriam que ser extraídos. Este tratamento conservador visa salvar dentes severamente cariados, infetados ou traumatizados, tratando a polpa dentária (parte interna do dente que contém nervos e vasos sanguíneos). O procedimento consiste na limpeza cuidadosa do espaço da polpa, preparação dos canais radiculares e preenchimento com material biocompatível que sela os canais e impede a entrada de bactérias. Após a desvitalização, o dente deve ser restaurado com uma coroa ou outra restauração adequada para recuperar sua função e protegê-lo de futuras fraturas.',
      advantages: [
        'Preserva o dente natural evitando a extração',
        'Última alternativa para salvar dentes severamente comprometidos',
        'Elimina a dor causada por infeções dentárias',
        'Mantém a estrutura dentária para reabilitação posterior',
        'Previne a propagação de infeções para outros dentes',
        'Impede nova entrada de bactérias nos canais tratados',
        'Mantém o espaço natural na arcada dentária',
        'Solução mais económica que a extração e substituição do dente'
      ],
      additionalInfo: 'Após o tratamento endodôntico, é fundamental restaurar o dente com uma coroa ou reconstrução adequada para garantir sua longevidade e função.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1658847075814-bf9a341c91e5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=500&fit=crop',
    keywords: ['endodontia', 'desvitalização', 'tratamento de canal', 'dor de dente', 'infeção dentária']
  },
  {
    id: '10',
    title: 'Implantologia',
    slug: 'implantologia',
    subtitle: 'Dentes Fixos para Sempre',
    description: 'Restabeleça o seu sorriso com dentes fixos usando tecnologia de implantes avançada. Possibilidade de dentes no próprio dia!',
    fullContent: {
      whatIs: 'A Implantologia representa a solução mais moderna e eficaz para substituição de dentes perdidos, sendo a reabilitação oral que mais se aproxima da dentição natural em termos de funcionalidade, estética e conforto. Os implantes dentários são pequenos parafusos de titânio (material biocompatível) que funcionam como raízes artificiais, sendo colocados cirurgicamente no osso do maxilar. Após a integração com o osso (osseointegração), os implantes servem de suporte para coroas de cerâmica que reproduzem perfeitamente os dentes naturais. O resultado final é tão natural que se torna praticamente impossível distinguir o dente implantado de um dente natural. Os implantes podem ser utilizados para substituir um único dente, vários dentes (pontes sobre implantes) ou até mesmo todos os dentes (próteses totais sobre implantes).',
      advantages: [
        'Solução mais próxima dos dentes naturais',
        'Excelente conforto e estabilidade',
        'Maior longevidade comparado a outras soluções',
        'Preserva o osso maxilar prevenindo reabsorção',
        'Não compromete dentes adjacentes saudáveis',
        'Restauração completa da capacidade mastigatória',
        'Recuperação total da estética facial e do sorriso',
        'Melhoria da fonética e autoestima',
        'Possibilidade de dentes no próprio dia em casos selecionados'
      ],
      additionalInfo: 'No Centro Dentário Colombo, utilizamos tecnologia de ponta que permite, em casos selecionados, a colocação de dentes no mesmo dia da cirurgia de implantes!'
    },
    bannerImage: 'https://images.unsplash.com/photo-1660732205497-f284ab0be4e9?q=80&w=1125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1588776813397-5c4d5c9e149f?w=800&h=500&fit=crop',
    keywords: ['implantes dentários', 'implantologia', 'dentes fixos', 'osseointegração', 'reabilitação oral']
  },
  {
    id: '11',
    title: 'Medicina Oral',
    slug: 'medicina-oral',
    subtitle: 'Diagnóstico e Prevenção',
    description: 'Observação, diagnóstico e tratamento especializado de lesões e patologias dos tecidos moles e duros da cavidade oral.',
    fullContent: {
      whatIs: 'A Medicina Oral é a especialidade dedicada à prevenção, diagnóstico precoce e tratamento de patologias que afetam os tecidos moles (gengivas, mucosas, língua, lábios) e duros (dentes e ossos) da cavidade oral. Esta área tem papel fundamental na deteção de lesões suspeitas, sendo que quando necessário, pode ser realizada biópsia para obtenção de diagnóstico histológico preciso e avaliação do potencial maligno da lesão. A Medicina Oral também trata doenças das glândulas salivares, diagnostica e trata quistos e tumores da região maxilofacial, bem como lesões mais comuns como aftas, herpes labial, candidíase oral, entre outras. A vigilância regular e a atuação precoce são essenciais para prevenir o desenvolvimento de patologias graves.',
      advantages: [
        'Deteção precoce de lesões potencialmente graves',
        'Vigilância sistemática da saúde oral',
        'Diagnóstico preciso através de exames especializados',
        'Prevenção da progressão de patologias',
        'Tratamento atempado evita complicações',
        'Identificação de sinais de doenças sistémicas',
        'Acompanhamento de lesões pré-malignas',
        'Tranquilidade através de check-ups regulares'
      ],
      additionalInfo: 'Qualquer lesão na boca que não cicatrize em 2 semanas, ou alteração persistente na cor ou textura dos tecidos orais, deve ser avaliada por um especialista em Medicina Oral.'
    },
    bannerImage: 'https://distintasaude.pt/wp-content/uploads/2023/08/acordos-1024x566.jpg',
    image1: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    keywords: ['medicina oral', 'patologia oral', 'lesões orais', 'biópsia', 'diagnóstico oral', 'aftas']
  },
  {
    id: '12',
    title: 'Oclusão',
    slug: 'oclusao',
    subtitle: 'Equilíbrio e Função',
    description: 'Diagnóstico e tratamento de problemas de mordida, disfunções da ATM, dores faciais, bruxismo e ronco.',
    fullContent: {
      whatIs: 'A Oclusão é a especialidade que trata dos problemas relacionados com a forma como os dentes superiores e inferiores se encaixam (oclusão dentária) e com as disfunções da articulação temporomandibular (ATM) - a articulação que conecta a mandíbula ao crânio. Problemas oclusais podem manifestar-se através de diversos sintomas como estalidos ao abrir/fechar a boca, dores faciais, dores nos músculos mastigatórios, dores de cabeça e pescoço, zumbidos nos ouvidos, vertigens, limitação na abertura da boca, desvio da mandíbula e até cefaleias frequentes. O tratamento oclusal é personalizado e pode incluir ajustes dentários, uso de goteiras de relaxamento muscular, fisioterapia e outras terapias. Uma oclusão equilibrada é fundamental para o sucesso de outros tratamentos dentários.',
      advantages: [
        'Alívio de dores faciais, de cabeça e pescoço',
        'Eliminação ou redução de zumbidos e vertigens',
        'Melhoria da função mastigatória',
        'Redução do desgaste dentário por bruxismo',
        'Relaxamento muscular e melhor qualidade de sono',
        'Prevenção de danos permanentes na articulação',
        'Fundamental para sucesso de tratamentos restauradores',
        'Melhoria significativa do bem-estar geral'
      ],
      additionalInfo: 'O tratamento oclusal frequentemente envolve o uso de goteiras (placas oclusais) personalizadas que protegem os dentes e relaxam a musculatura.'
    },
    bannerImage: 'https://images.pexels.com/photos/5794074/pexels-photo-5794074.jpeg',
    image1: 'https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2: 'https://brdental.com.br/wp-content/uploads/2022/07/O_que__a_ocluso_dentria_Saiba_como_cuidar.webp',
    keywords: ['oclusão', 'ATM', 'bruxismo', 'dor facial', 'goteira oclusal', 'disfunção temporomandibular']
  },
  {
    id: '13',
    title: 'Odontopediatria',
    slug: 'odontopediatria',
    subtitle: 'Sorrisos Saudáveis desde a Infância',
    description: 'Cuidado especializado e preventivo para a saúde oral de bebês, crianças e adolescentes num ambiente acolhedor.',
    fullContent: {
      whatIs: 'A Odontopediatria é a especialidade da Medicina Dentária dedicada exclusivamente ao cuidado da saúde oral de bebês, crianças e adolescentes, desde o nascimento até à adolescência. O primeiro contacto com o dentista pediátrico deve acontecer ainda no primeiro ano de vida da criança, estabelecendo desde cedo uma relação positiva com a Medicina Dentária. Durante as consultas, avaliamos o estado de saúde oral, monitorizamos a erupção dentária (nascimento dos dentes), realizamos tratamentos preventivos como aplicação de flúor e selantes, e tratamos cáries quando necessário. Um aspeto fundamental da Odontopediatria é a educação - ensinamos às crianças e aos pais técnicas corretas de escovagem, uso do fio dentário e a importância de uma alimentação saudável para a saúde oral.',
      advantages: [
        'Prevenção eficaz do aparecimento de cáries',
        'Criação de hábitos saudáveis de higiene oral',
        'Estabelecimento de relação positiva com o dentista',
        'Eliminação do medo do dentista',
        'Acompanhamento do desenvolvimento dentário',
        'Deteção precoce de problemas ortodônticos',
        'Orientação nutricional para saúde oral',
        'Aplicação de tratamentos preventivos (flúor, selantes)',
        'Garantia de saúde oral duradoura'
      ],
      additionalInfo: 'Criamos um ambiente lúdico e acolhedor onde as crianças se sentem seguras e confortáveis, tornando as visitas ao dentista uma experiência positiva.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&h=600&fit=crop',
    image1: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    keywords: ['odontopediatria', 'dentista infantil', 'crianças', 'bebês', 'saúde oral infantil', 'pediatria dentária']
  },
  {
    id: '14',
    title: 'Ortodontia',
    slug: 'ortodontia',
    subtitle: 'Correção e Alinhamento Dentário',
    description: 'Corrija o posicionamento dos seus dentes com aparelhos convencionais ou transparentes invisíveis para um sorriso harmonioso.',
    fullContent: {
      whatIs: 'A Ortodontia é a especialidade da Medicina Dentária responsável pelo diagnóstico, prevenção e tratamento de problemas relacionados com o mau posicionamento dos dentes e maxilares. Dentes mal posicionados não se encaixam corretamente, dificultando a higiene oral, aumentando o risco de cáries e doenças gengivais, podendo também causar desgaste prematuro, dores musculares e problemas na articulação temporomandibular. Através de uma avaliação completa que inclui análise facial, radiografias e modelos de estudo, o Ortodontista desenvolve um plano de tratamento personalizado. Hoje oferecemos tanto aparelhos fixos convencionais quanto opções mais discretas como os alinhadores transparentes invisíveis, adaptando a solução às necessidades estéticas e funcionais de cada paciente.',
      advantages: [
        'Melhoria significativa da estética facial e do sorriso',
        'Aumento da autoestima e confiança',
        'Facilitação da higiene oral adequada',
        'Redução do risco de cáries e doenças gengivais',
        'Melhoria da função mastigatória e digestão',
        'Prevenção de desgaste prematuro dos dentes',
        'Alívio de dores musculares e da ATM',
        'Melhoria da fonética e respiração',
        'Benefícios duradouros para saúde geral'
      ],
      additionalInfo: 'O tratamento ortodôntico pode ser realizado em qualquer idade, sendo cada vez mais comum em adultos que buscam melhorar seu sorriso e saúde oral.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1720685193942-5a1c5ac7fd80?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=500&fit=crop',
    keywords: ['ortodontia', 'aparelhos dentários', 'alinhadores', 'brackets', 'correção dentária', 'invisalign']
  },
  {
    id: '15',
    title: 'Periodontologia',
    slug: 'periodontologia',
    subtitle: 'Saúde Gengival',
    description: 'Previna e trate doenças das gengivas. Evite sangramento, dor, mau hálito e a perda prematura de dentes.',
    fullContent: {
      whatIs: 'A Periodontologia é a especialidade que cuida dos tecidos de suporte dos dentes: gengivas, osso alveolar e ligamento periodontal (que conecta o dente ao osso). As doenças periodontais são extremamente comuns e iniciam-se com a gengivite - inflamação das gengivas causada por acumulação de placa bacteriana. Os sinais incluem gengivas vermelhas, inchadas e que sangram facilmente durante a escovagem. Se não tratada, a gengivite pode evoluir para periodontite, uma condição mais grave onde a inflamação atinge o osso, causando sua destruição progressiva. Isto leva à formação de "bolsas" periodontais, mobilidade dentária e eventualmente à perda dos dentes. O tratamento periodontal remove a placa e tártaro acumulados, controla a infeção bacteriana e estabiliza a doença, preservando os dentes.',
      advantages: [
        'Prevenção da perda prematura de dentes',
        'Eliminação de sangramento gengival',
        'Alívio de dor e desconforto',
        'Melhoria significativa do hálito',
        'Controlo de infeções bacterianas',
        'Preservação do osso de suporte dos dentes',
        'Redução do risco de doenças sistémicas associadas',
        'Melhoria da estética do sorriso',
        'Manutenção da saúde oral a longo prazo'
      ],
      additionalInfo: 'Estudos científicos demonstram que doenças periodontais não tratadas podem estar associadas a problemas cardíacos, diabetes e outras condições sistémicas, tornando o tratamento ainda mais importante.'
    },
    bannerImage: 'https://d2k1crfmot9vtj.cloudfront.net/media/ae42b22c5fe2137f34c929204328b4ef_TZjkGkL.jpg',
    image1: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
    keywords: ['periodontologia', 'gengivas', 'gengivite', 'periodontite', 'sangramento gengival', 'saúde gengival']
  },
  {
    id: '16',
    title: 'Prostodontia',
    slug: 'prostodontia',
    subtitle: 'Reconstrução e Reabilitação',
    description: 'Recupere dentes perdidos através de próteses personalizadas que restauram função, estética e qualidade de vida.',
    fullContent: {
      whatIs: 'A Prostodontia é a especialidade da Medicina Dentária focada na substituição de dentes perdidos e na reconstrução de dentes severamente danificados. O objetivo é reproduzir ao máximo a dentição natural, restaurando não apenas a estética do sorriso, mas também a capacidade de mastigar adequadamente e de falar claramente. As próteses dentárias são planeadas e executadas de forma personalizada, podendo ser fixas (coroas, pontes) ou removíveis (parciais ou totais), dependendo da situação clínica de cada paciente. Com os avanços tecnológicos atuais em materiais e técnicas, as próteses modernas oferecem excelente durabilidade, conforto e aparência natural. Em muitos casos, as próteses podem ser suportadas por implantes dentários, proporcionando ainda maior estabilidade e conforto.',
      advantages: [
        'Recuperação completa da capacidade mastigatória',
        'Melhoria da digestão e nutrição',
        'Restauração da fonética e clareza na fala',
        'Recuperação da estética facial e do sorriso',
        'Suporte aos tecidos faciais prevenindo envelhecimento',
        'Aumento da autoestima e confiança social',
        'Prevenção de problemas na ATM',
        'Diversas opções adaptadas às necessidades individuais',
        'Possibilidade de fixação sobre implantes para maior conforto'
      ],
      additionalInfo: 'Oferecemos tanto próteses fixas (que não podem ser removidas pelo paciente) quanto próteses removíveis, sempre utilizando materiais de última geração para garantir durabilidade e naturalidade.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1562330743-fbc6ef07ca78?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1: 'https://images.unsplash.com/photo-1653667767792-9b057ef090fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2: 'https://images.unsplash.com/photo-1655807946138-811bb2340d34?q=80&w=1271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: ['prostodontia', 'próteses', 'coroas', 'pontes', 'dentaduras', 'reabilitação protética']
  }
];

// ============================================
// English Treatments Data
// ============================================
const treatmentsEN: Treatment[] = [
  {
    id: '1',
    title: 'Cavities',
    slug: 'caries',
    subtitle: 'Treatment and Prevention',
    description: 'Restore the health of your teeth affected by cavities or trauma through modern and effective treatments.',
    fullContent: {
      whatIs: 'Restorative Dentistry is often the first area of Dental Medicine that patients encounter, being associated with the well-known "Dental Check-up". This specialty is dedicated to treating dental lesions caused by cavities or trauma, restoring the natural appearance, texture, and function of teeth. When teeth are affected, Restorative Dentistry allows the recovery of aesthetic, anatomical, and chewing functions, giving the patient comfort, well-being, and self-confidence. Immediate treatment is essential to prevent small lesions from evolving into more serious problems that may require more complex interventions.',
      advantages: [
        'Prevents progressive destruction of tooth structure and possible total tooth loss',
        'Early intervention results in smaller and less invasive restorations',
        'Preserves the natural tooth structure and its chewing function',
        'Restores smile aesthetics and patient self-confidence',
        'Prevents complications that could require more complex treatments'
      ],
      additionalInfo: 'When a lesion becomes too extensive, intervention from other specialties such as Endodontics, Fixed Prosthetics, Removable Prosthetics, or Implantology may be necessary to ensure the best outcome.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1743767587921-473b6d079137?q=80&w=1355&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    keywords: ['cavities', 'restorative dentistry', 'dental restoration', 'dental check-up', 'oral health']
  },
  {
    id: '2',
    title: 'Oral Rehabilitation',
    slug: 'reabilitacao-oral',
    subtitle: 'Recover Your Complete Smile',
    description: 'Recover your smile, well-being, and chewing function through the most advanced techniques and technologies in oral rehabilitation.',
    fullContent: {
      whatIs: 'Oral Rehabilitation is a multidisciplinary approach aimed at completely restoring chewing function, aesthetics, and stability of the oral cavity. This specialty is responsible for replacing lost teeth and recovering complex cases affecting multiple teeth. Each treatment is carefully evaluated on a case-by-case basis, involving the integration of various areas of Dental Medicine such as Implantology, Orthodontics, Fixed and Removable Prosthetics, Cosmetic Dentistry, and Periodontology. The goal is to create a personalized treatment plan that restores not only function but also the patient\'s self-esteem and quality of life.',
      advantages: [
        'Complete recovery of chewing and digestive function',
        'Restoration of facial aesthetics and smile',
        'Improvement of phonetics and communication ability',
        'Recovery of self-esteem and personal confidence',
        'Integrated treatment with an excellent clinical team',
        'Use of state-of-the-art technologies and materials'
      ],
      additionalInfo: 'At Centro Dentário Colombo, we develop personalized treatment plans that combine the most modern techniques to ensure lasting and natural results.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&h=600&fit=crop',
    image1: 'https://images.unsplash.com/photo-1660732205525-eb180e4d29f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2: 'https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: ['oral rehabilitation', 'dental restoration', 'implants', 'prosthetics', 'multidisciplinary']
  },
  {
    id: '3',
    title: 'Dental Braces',
    slug: 'aparelhos-dentarios',
    subtitle: 'Aligned and Harmonious Smile',
    description: 'Conventional or invisible clear braces - find the ideal solution for aligning your smile.',
    fullContent: {
      whatIs: 'Orthodontics is the specialty that corrects the positioning of teeth and jaws, promoting facial and functional harmony. Through a rigorous and detailed evaluation, the Orthodontist creates a personalized treatment plan to improve dental occlusion (how teeth fit together) and properly distribute chewing forces. Orthodontic treatment is not just aesthetic - it protects teeth, gums, bone, and ligaments from trauma and premature wear. Today, we offer both conventional braces and more modern options such as invisible clear aligners, adapting treatment to each patient\'s needs and preferences.',
      advantages: [
        'Significant improvement in aesthetic appearance and facial expression',
        'Increased self-esteem and personal confidence',
        'Facilitates proper oral hygiene, reducing risk of cavities',
        'Reduces gum and periodontal problems',
        'Improves chewing function and digestion',
        'Prevents premature tooth wear',
        'Reduces muscle pain and temporomandibular joint problems',
        'Long-lasting benefits for overall health and well-being'
      ]
    },
    bannerImage: 'https://images.pexels.com/photos/28407749/pexels-photo-28407749.jpeg',
    image1: 'https://oralblu.com.br/wp-content/uploads/2018/12/aparelho-estetico.jpg',
    image2: 'https://www.santander.pt/images/particulares/blogue/artigos/topo/desktop/aparelho-dentario_2048x768_desktop.jpg',
    keywords: ['orthodontics', 'dental braces', 'clear aligners', 'dental correction', 'invisible braces']
  },
  {
    id: '4',
    title: 'Pediatric Dentistry',
    slug: 'criancas',
    subtitle: 'Specialized Care for Children',
    description: 'Specialist Pediatric Dentistry doctors and advanced technology to care for your children\'s oral health with care and professionalism.',
    fullContent: {
      whatIs: 'Pediatric Dentistry is the specialty dedicated to caring for the oral health of babies, children, and adolescents from the first year of life. The first contact with the dentist is essential to establish a positive relationship and prevent future problems. During appointments, we evaluate the development of dentition, oral health status, and perform preventive treatments when necessary. In addition to clinical treatment, Pediatric Dentistry has a strong educational component, teaching children and parents correct brushing techniques, flossing, and fluoride use. This regular follow-up from an early age is essential to ensure healthy teeth in adulthood and create positive oral hygiene habits.',
      advantages: [
        'Effective prevention of cavities',
        'Creating healthy oral hygiene habits from an early age',
        'Establishing a positive relationship with the dentist',
        'Monitoring the development of dentition',
        'Early detection of orthodontic problems',
        'Education about nutrition and oral health',
        'Preventive treatments such as sealants and fluoride application',
        'Maintaining good oral health throughout life'
      ],
      additionalInfo: 'At Centro Dentário Colombo, we create a welcoming and fun environment so that children feel comfortable and safe during their appointments.'
    },
    bannerImage: 'https://facilitaseguros.com.br/wp-content/uploads/2020/02/odontopediatria-saiba-quando-levar-o-seu-filho-ao-dentista-1160x560.jpg',
    image1: 'https://images.unsplash.com/photo-1758205308106-5760d0227cc7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2: 'https://www.atelierdosorriso.pt/wp-content/uploads/2020/02/odontopediatria-dentista-criancas-1.jpg',
    keywords: ['pediatric dentistry', 'children dentist', 'children', 'babies', 'children oral health', 'prevention']
  },
  {
    id: '5',
    title: 'Dental Prosthetics',
    slug: 'proteses-dentarias',
    subtitle: 'Rehabilitation and Comfort',
    description: 'Replace missing teeth and recover your smile, chewing function, and comfort with modern and personalized prosthetics.',
    fullContent: {
      whatIs: 'Prosthodontics is dedicated to replacing lost teeth through prosthetics that reproduce natural dentition as closely as possible. The goal is to fully restore chewing function, phonetics (ability to speak correctly), and patient aesthetics. Prosthetics are custom-made and can be fixed or removable, total or partial, depending on the specific needs of each case. With current technological advances, modern prosthetics offer excellent aesthetics, comfort, and durability. In some cases, prosthetics can be supported by dental implants, offering greater stability and comfort.',
      advantages: [
        'Complete restoration of chewing ability',
        'Improvement of phonetics and speech clarity',
        'Recovery of facial aesthetics and smile',
        'Prevention of digestive problems caused by poor chewing',
        'Increased self-esteem and social confidence',
        'Support for facial tissues, preventing premature aging',
        'Various options adapted to individual needs'
      ],
      additionalInfo: 'We offer fixed prosthetics (crowns and bridges) that protect and cover damaged teeth, and removable prosthetics (acrylic or skeletal) that facilitate oral hygiene.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1612283105859-6e2585710acd?q=80&w=1224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1: 'https://images.unsplash.com/photo-1660737217837-95f00b9eae53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2: 'https://images.unsplash.com/photo-1633690015214-462c5b6809cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: ['dental prosthetics', 'prosthodontics', 'crowns', 'bridges', 'dentures', 'oral rehabilitation']
  },
  {
    id: '6',
    title: 'Cosmetic Dentistry',
    slug: 'estetica-dentaria',
    subtitle: 'Beautiful and Natural Smile',
    description: 'Transform your smile through modern cosmetic treatments that restore beauty, naturalness, and confidence.',
    fullContent: {
      whatIs: 'Cosmetic Dentistry is the specialty that transforms smiles through various advanced cosmetic treatments. Using state-of-the-art techniques and materials, we can make subtle but impactful changes to teeth, correcting imperfections and creating harmonious and natural smiles. This area works on correcting fractured teeth, teeth damaged by decay, stained or discolored teeth, closing gaps between teeth (diastemas), and performing teeth whitening. Each treatment is carefully planned to respect each patient\'s unique facial characteristics, ensuring results that look completely natural and significantly contribute to improved self-esteem.',
      advantages: [
        'Correction of fractured, chipped, or worn teeth',
        'Treatment of stained or discolored teeth',
        'Closing unsightly gaps between teeth (diastemas)',
        'Professional and safe teeth whitening',
        'Improvement of tooth shape, size, and proportion',
        'Natural results that respect facial harmony',
        'Significant increase in self-esteem and confidence',
        'Minimally invasive treatments with excellent materials'
      ]
    },
    bannerImage: 'https://images.unsplash.com/photo-1681939283065-011297ba26eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1655807946138-811bb2340d34?q=80&w=1571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: ['cosmetic dentistry', 'whitening', 'veneers', 'perfect smile', 'dental cosmetics']
  },
  {
    id: '7',
    title: 'Oral Surgery',
    slug: 'cirurgia-oral',
    subtitle: 'Specialized Surgical Treatments',
    description: 'Prevention, diagnosis, and surgical treatment of changes, lesions, and pathologies of the oral cavity with safety and precision.',
    fullContent: {
      whatIs: 'Oral Surgery is one of the most comprehensive areas of Dental Medicine, responsible for all surgical procedures related to the oral cavity and adjacent structures. This specialty performs extractions of teeth that cannot be kept in the mouth, including the well-known wisdom tooth extraction, as well as teeth with very extensive cavities, teeth without adequate bone support, impacted teeth (that haven\'t erupted), or supernumerary teeth (extra teeth). Oral Surgery also diagnoses and removes cysts and gingival tumors, and works closely with other specialties such as Implantology, Orthodontics, Prosthetics, and Periodontology to ensure integrated treatments and optimal results.',
      advantages: [
        'Resolution of problems requiring surgical intervention',
        'Prevention of future complications',
        'Diagnosis and removal of cysts and tumors',
        'Adequate preparation for implant placement',
        'Creating necessary space for orthodontic treatments',
        'Relief of pain and discomfort caused by problematic teeth',
        'Integrated and multidisciplinary treatment',
        'Use of modern and minimally invasive techniques'
      ],
      additionalInfo: 'All surgical procedures are performed with maximum comfort and safety, using modern anesthesia and pain control techniques.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=1200&h=600&fit=crop',
    image1: 'https://images.unsplash.com/photo-1598531228433-d9f0bdc5ab26?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1588776813397-5c4d5c9e149f?w=800&h=500&fit=crop',
    keywords: ['oral surgery', 'extraction', 'wisdom teeth', 'dental surgery', 'cysts', 'oral tumors']
  },
  {
    id: '8',
    title: 'Restorative Dentistry',
    slug: 'dentisteria',
    subtitle: 'Dental Restoration and Preservation',
    description: 'Specialized treatment of cavities and trauma, restoring the function, aesthetics, and health of your teeth.',
    fullContent: {
      whatIs: 'Restorative Dentistry is often the patient\'s first contact with Dental Medicine, being fundamental for maintaining oral health. This specialty is dedicated to treating dental lesions caused by cavities or trauma, restoring not only the tooth structure but also its original appearance, texture, and functionality. Restorative Dentistry restores all natural characteristics to the tooth, improving chewing, breath, overall well-being, and the patient\'s self-confidence. Early treatment is essential - the sooner a lesion is treated, the smaller the intervention needed and the better the long-term prognosis. Often, Restorative Dentistry works together with other specialties to ensure the best results.',
      advantages: [
        'Prevention of progressive tooth structure destruction',
        'Avoids total loss of the affected tooth',
        'Early treatment results in smaller restorations',
        'Maximum preservation of natural tooth structure',
        'Restoration of adequate chewing function',
        'Improvement of breath and overall oral health',
        'Recovery of smile aesthetics',
        'Increased self-confidence and quality of life'
      ],
      additionalInfo: 'We use state-of-the-art aesthetic materials that perfectly reproduce the natural color and texture of teeth, making restorations virtually invisible.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop',
    image1: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    keywords: ['restorative dentistry', 'dental restoration', 'cavities', 'filling', 'dental treatment']
  },
  {
    id: '9',
    title: 'Endodontics',
    slug: 'endodontia',
    subtitle: 'Root Canal Treatment and Preservation',
    description: 'Root canal treatment - the conservative solution to save severely affected teeth.',
    fullContent: {
      whatIs: 'Endodontics, popularly known as "root canal treatment", is the specialty that preserves teeth that would otherwise have to be extracted. This conservative treatment aims to save severely decayed, infected, or traumatized teeth by treating the dental pulp (the inner part of the tooth containing nerves and blood vessels). The procedure consists of careful cleaning of the pulp space, preparation of root canals, and filling with biocompatible material that seals the canals and prevents bacteria from entering. After root canal treatment, the tooth must be restored with a crown or other suitable restoration to recover its function and protect it from future fractures.',
      advantages: [
        'Preserves the natural tooth avoiding extraction',
        'Last alternative to save severely compromised teeth',
        'Eliminates pain caused by dental infections',
        'Maintains tooth structure for subsequent rehabilitation',
        'Prevents the spread of infections to other teeth',
        'Prevents new bacteria from entering treated canals',
        'Maintains natural space in the dental arch',
        'More economical solution than tooth extraction and replacement'
      ],
      additionalInfo: 'After endodontic treatment, it is essential to restore the tooth with an appropriate crown or reconstruction to ensure its longevity and function.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1658847075814-bf9a341c91e5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=500&fit=crop',
    keywords: ['endodontics', 'root canal', 'root canal treatment', 'toothache', 'dental infection']
  },
  {
    id: '10',
    title: 'Implantology',
    slug: 'implantologia',
    subtitle: 'Fixed Teeth Forever',
    description: 'Restore your smile with fixed teeth using advanced implant technology. Same-day teeth possibility!',
    fullContent: {
      whatIs: 'Implantology represents the most modern and effective solution for replacing lost teeth, being the oral rehabilitation that most closely resembles natural dentition in terms of functionality, aesthetics, and comfort. Dental implants are small titanium screws (biocompatible material) that function as artificial roots, surgically placed in the jawbone. After integration with the bone (osseointegration), implants serve as support for ceramic crowns that perfectly reproduce natural teeth. The final result is so natural that it becomes practically impossible to distinguish the implanted tooth from a natural tooth. Implants can be used to replace a single tooth, multiple teeth (bridges on implants), or even all teeth (full prostheses on implants).',
      advantages: [
        'Closest solution to natural teeth',
        'Excellent comfort and stability',
        'Greater longevity compared to other solutions',
        'Preserves jawbone preventing resorption',
        'Does not compromise adjacent healthy teeth',
        'Complete restoration of chewing ability',
        'Total recovery of facial aesthetics and smile',
        'Improvement of phonetics and self-esteem',
        'Same-day teeth possibility in selected cases'
      ],
      additionalInfo: 'At Centro Dentário Colombo, we use cutting-edge technology that allows, in selected cases, teeth placement on the same day as implant surgery!'
    },
    bannerImage: 'https://images.unsplash.com/photo-1660732205497-f284ab0be4e9?q=80&w=1125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1588776813397-5c4d5c9e149f?w=800&h=500&fit=crop',
    keywords: ['dental implants', 'implantology', 'fixed teeth', 'osseointegration', 'oral rehabilitation']
  },
  {
    id: '11',
    title: 'Oral Medicine',
    slug: 'medicina-oral',
    subtitle: 'Diagnosis and Prevention',
    description: 'Observation, diagnosis, and specialized treatment of lesions and pathologies of the soft and hard tissues of the oral cavity.',
    fullContent: {
      whatIs: 'Oral Medicine is the specialty dedicated to prevention, early diagnosis, and treatment of pathologies affecting the soft tissues (gums, mucous membranes, tongue, lips) and hard tissues (teeth and bones) of the oral cavity. This area plays a fundamental role in detecting suspicious lesions, and when necessary, a biopsy can be performed for accurate histological diagnosis and assessment of the malignant potential of the lesion. Oral Medicine also treats diseases of the salivary glands, diagnoses and treats cysts and tumors of the maxillofacial region, as well as more common lesions such as canker sores, cold sores, oral candidiasis, among others. Regular surveillance and early action are essential to prevent the development of serious pathologies.',
      advantages: [
        'Early detection of potentially serious lesions',
        'Systematic surveillance of oral health',
        'Accurate diagnosis through specialized exams',
        'Prevention of pathology progression',
        'Timely treatment avoids complications',
        'Identification of signs of systemic diseases',
        'Monitoring of pre-malignant lesions',
        'Peace of mind through regular check-ups'
      ],
      additionalInfo: 'Any mouth lesion that does not heal within 2 weeks, or persistent changes in the color or texture of oral tissues, should be evaluated by an Oral Medicine specialist.'
    },
    bannerImage: 'https://distintasaude.pt/wp-content/uploads/2023/08/acordos-1024x566.jpg',
    image1: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    keywords: ['oral medicine', 'oral pathology', 'oral lesions', 'biopsy', 'oral diagnosis', 'canker sores']
  },
  {
    id: '12',
    title: 'Occlusion',
    slug: 'oclusao',
    subtitle: 'Balance and Function',
    description: 'Diagnosis and treatment of bite problems, TMJ disorders, facial pain, bruxism, and snoring.',
    fullContent: {
      whatIs: 'Occlusion is the specialty that deals with problems related to how upper and lower teeth fit together (dental occlusion) and with temporomandibular joint (TMJ) dysfunctions - the joint that connects the jaw to the skull. Occlusal problems can manifest through various symptoms such as clicking when opening/closing the mouth, facial pain, pain in the masticatory muscles, head and neck pain, ear ringing, vertigo, limited mouth opening, jaw deviation, and even frequent headaches. Occlusal treatment is personalized and may include dental adjustments, use of muscle relaxation splints, physiotherapy, and other therapies. A balanced occlusion is fundamental for the success of other dental treatments.',
      advantages: [
        'Relief of facial, head, and neck pain',
        'Elimination or reduction of ringing and vertigo',
        'Improvement of chewing function',
        'Reduction of dental wear from bruxism',
        'Muscle relaxation and better sleep quality',
        'Prevention of permanent joint damage',
        'Essential for the success of restorative treatments',
        'Significant improvement in overall well-being'
      ],
      additionalInfo: 'Occlusal treatment often involves the use of personalized splints (occlusal plates) that protect teeth and relax the muscles.'
    },
    bannerImage: 'https://images.pexels.com/photos/5794074/pexels-photo-5794074.jpeg',
    image1: 'https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2: 'https://brdental.com.br/wp-content/uploads/2022/07/O_que__a_ocluso_dentria_Saiba_como_cuidar.webp',
    keywords: ['occlusion', 'TMJ', 'bruxism', 'facial pain', 'occlusal splint', 'temporomandibular dysfunction']
  },
  {
    id: '13',
    title: 'Pediatric Dentistry',
    slug: 'odontopediatria',
    subtitle: 'Healthy Smiles from Childhood',
    description: 'Specialized and preventive care for the oral health of babies, children, and adolescents in a welcoming environment.',
    fullContent: {
      whatIs: 'Pediatric Dentistry is the specialty of Dental Medicine exclusively dedicated to caring for the oral health of babies, children, and adolescents, from birth to adolescence. The first contact with the pediatric dentist should happen within the child\'s first year of life, establishing a positive relationship with Dental Medicine from an early age. During appointments, we evaluate oral health status, monitor dental eruption (tooth emergence), perform preventive treatments such as fluoride application and sealants, and treat cavities when necessary. A fundamental aspect of Pediatric Dentistry is education - we teach children and parents correct brushing techniques, flossing, and the importance of a healthy diet for oral health.',
      advantages: [
        'Effective prevention of cavities',
        'Creating healthy oral hygiene habits',
        'Establishing a positive relationship with the dentist',
        'Eliminating fear of the dentist',
        'Monitoring dental development',
        'Early detection of orthodontic problems',
        'Nutritional guidance for oral health',
        'Application of preventive treatments (fluoride, sealants)',
        'Ensuring lasting oral health'
      ],
      additionalInfo: 'We create a playful and welcoming environment where children feel safe and comfortable, making dental visits a positive experience.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&h=600&fit=crop',
    image1: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    keywords: ['pediatric dentistry', 'children dentist', 'children', 'babies', 'children oral health', 'dental pediatrics']
  },
  {
    id: '14',
    title: 'Orthodontics',
    slug: 'ortodontia',
    subtitle: 'Dental Correction and Alignment',
    description: 'Correct the positioning of your teeth with conventional or invisible clear braces for a harmonious smile.',
    fullContent: {
      whatIs: 'Orthodontics is the specialty of Dental Medicine responsible for the diagnosis, prevention, and treatment of problems related to the poor positioning of teeth and jaws. Misaligned teeth do not fit together correctly, making oral hygiene difficult, increasing the risk of cavities and gum disease, and can also cause premature wear, muscle pain, and temporomandibular joint problems. Through a comprehensive evaluation that includes facial analysis, X-rays, and study models, the Orthodontist develops a personalized treatment plan. Today we offer both conventional fixed braces and more discreet options such as invisible clear aligners, adapting the solution to each patient\'s aesthetic and functional needs.',
      advantages: [
        'Significant improvement of facial aesthetics and smile',
        'Increased self-esteem and confidence',
        'Facilitation of proper oral hygiene',
        'Reduction of the risk of cavities and gum disease',
        'Improvement of chewing function and digestion',
        'Prevention of premature tooth wear',
        'Relief of muscle pain and TMJ issues',
        'Improvement of phonetics and breathing',
        'Long-lasting benefits for overall health'
      ],
      additionalInfo: 'Orthodontic treatment can be performed at any age, being increasingly common in adults seeking to improve their smile and oral health.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1720685193942-5a1c5ac7fd80?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=500&fit=crop',
    keywords: ['orthodontics', 'dental braces', 'aligners', 'brackets', 'dental correction', 'invisalign']
  },
  {
    id: '15',
    title: 'Periodontology',
    slug: 'periodontologia',
    subtitle: 'Gum Health',
    description: 'Prevent and treat gum diseases. Avoid bleeding, pain, bad breath, and premature tooth loss.',
    fullContent: {
      whatIs: 'Periodontology is the specialty that cares for the supporting tissues of teeth: gums, alveolar bone, and periodontal ligament (which connects the tooth to the bone). Periodontal diseases are extremely common and begin with gingivitis - inflammation of the gums caused by bacterial plaque buildup. Signs include red, swollen gums that bleed easily during brushing. If untreated, gingivitis can progress to periodontitis, a more serious condition where inflammation reaches the bone, causing its progressive destruction. This leads to the formation of periodontal "pockets", tooth mobility, and eventually tooth loss. Periodontal treatment removes accumulated plaque and tartar, controls bacterial infection, and stabilizes the disease, preserving teeth.',
      advantages: [
        'Prevention of premature tooth loss',
        'Elimination of gum bleeding',
        'Relief of pain and discomfort',
        'Significant improvement of breath',
        'Control of bacterial infections',
        'Preservation of tooth-supporting bone',
        'Reduction of associated systemic disease risk',
        'Improvement of smile aesthetics',
        'Long-term oral health maintenance'
      ],
      additionalInfo: 'Scientific studies demonstrate that untreated periodontal diseases may be associated with heart problems, diabetes, and other systemic conditions, making treatment even more important.'
    },
    bannerImage: 'https://d2k1crfmot9vtj.cloudfront.net/media/ae42b22c5fe2137f34c929204328b4ef_TZjkGkL.jpg',
    image1: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
    keywords: ['periodontology', 'gums', 'gingivitis', 'periodontitis', 'gum bleeding', 'gum health']
  },
  {
    id: '16',
    title: 'Prosthodontics',
    slug: 'prostodontia',
    subtitle: 'Reconstruction and Rehabilitation',
    description: 'Recover lost teeth through personalized prosthetics that restore function, aesthetics, and quality of life.',
    fullContent: {
      whatIs: 'Prosthodontics is the specialty of Dental Medicine focused on replacing lost teeth and reconstructing severely damaged teeth. The goal is to reproduce natural dentition as closely as possible, restoring not only the smile\'s aesthetics but also the ability to chew properly and speak clearly. Dental prosthetics are planned and executed in a personalized manner, and can be fixed (crowns, bridges) or removable (partial or total), depending on each patient\'s clinical situation. With current technological advances in materials and techniques, modern prosthetics offer excellent durability, comfort, and natural appearance. In many cases, prosthetics can be supported by dental implants, providing even greater stability and comfort.',
      advantages: [
        'Complete recovery of chewing ability',
        'Improvement of digestion and nutrition',
        'Restoration of phonetics and speech clarity',
        'Recovery of facial aesthetics and smile',
        'Support for facial tissues preventing aging',
        'Increased self-esteem and social confidence',
        'Prevention of TMJ problems',
        'Various options adapted to individual needs',
        'Possibility of implant fixation for greater comfort'
      ],
      additionalInfo: 'We offer both fixed prosthetics (which cannot be removed by the patient) and removable prosthetics, always using state-of-the-art materials to ensure durability and naturalness.'
    },
    bannerImage: 'https://images.unsplash.com/photo-1562330743-fbc6ef07ca78?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1: 'https://images.unsplash.com/photo-1653667767792-9b057ef090fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2: 'https://images.unsplash.com/photo-1655807946138-811bb2340d34?q=80&w=1271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: ['prosthodontics', 'prosthetics', 'crowns', 'bridges', 'dentures', 'prosthetic rehabilitation']
  }
];

// ============================================
// Export functions
// ============================================
export function getTreatments(language: string): Treatment[] {
  return language === 'en' ? treatmentsEN : treatmentsPT;
}

// Default export for backward compatibility
export const treatments = treatmentsPT;
export default treatments;