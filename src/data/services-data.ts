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

export const treatments: Treatment[] = [
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
    image1: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop',
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
    image1: 'https://images.unsplash.com/photo-1609840114035-3c981183b5cf?w=800&h=500&fit=crop',
    image2: 'https://images.unsplash.com/photo-1588776813397-5c4d5c9e149f?w=800&h=500&fit=crop',
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
    image2: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop',
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

export default treatments;