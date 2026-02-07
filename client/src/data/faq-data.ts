// ============================================
// FAQ Data Structure
// ============================================
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  items: FAQItem[];
}

// ============================================
// Portuguese FAQ Data
// ============================================
const faqDataPT: FAQCategory[] = [
  {
    id: 'implantes',
    title: 'Implante Dentário',
    icon: '🦷',
    items: [
      {
        question: 'O que é a implantologia?',
        answer: 'A Implantologia é a área da Dentária responsável pela reabilitação das carências dentárias através da colocação de implantes. É uma técnica que assegura a substituição dos dentes. Os implantes dentários são raízes artificiais compostos por titânio integrados no tecido ósseo dos maxilares. Estes permitem suportar dentes ou próteses totais ou parciais, devolvendo a função estética e mastigatória da dentição natural.'
      },
      {
        question: 'Quais as vantagens dos implantes dentários?',
        answer: 'A reabilitação com implantes dentários assegura a mastigação, o discurso e a função estética do sorriso. Aumenta consideravelmente a auto-estima por consequência de uma melhor aparência. Com os cuidados adequados e uma boa higiene oral, os implantes podem ter uma grande durabilidade, fornecendo estabilidade e conforto.'
      },
      {
        question: 'Quais os pacientes que podem colocar implantes dentários?',
        answer: 'A reabilitação com implantes dentários pode ser realizada em qualquer paciente que tenha gengivas saudáveis e osso suficiente para conter o implante. Pode ser realizada em: qualquer paciente que tenha perdido um dente, múltiplos ou todos os dentes; pacientes que usam prótese dentária parcial ou total (dentadura); pacientes que não se adaptam à prótese; pacientes que estão insatisfeitos com a estética da prótese que usam; pacientes que apresentam perda óssea avançada devido à perda de dentes e/ou uso de prótese ou que apresentam alterações faciais (envelhecimento precoce).'
      },
      {
        question: 'Por que razão não podemos ignorar a falta de dentes?',
        answer: 'A perda de dentes pode causar problemas se estes não forem substituídos. A falta de um dente pode ter um impacto negativo na qualidade de vida, bem como na saúde oral. Quando existe uma perda dentária, os dentes saudáveis tendem a mudar de posição ocupando o espaço vazio. Podem afectar a forma como os dentes superiores e inferiores se encontram. A falta de dentes pode influenciar a forma como fazemos pressão nos mesmos durante a mastigação e pode ter um impacto nos músculos e articulações envolventes. O resultado é dor, perda gengival, óssea e alteração da estrutura facial.'
      },
      {
        question: 'Os implantes dentários necessitam de manutenção?',
        answer: 'Os implantes dentários necessitam do mesmo cuidado que os dentes naturais: a escovagem regular dos dentes, o uso de fio dentário e as visitas regulares ao seu dentista.'
      }
    ]
  },
  {
    id: 'ortodontia',
    title: 'Ortodontia',
    icon: '😁',
    items: [
      {
        question: 'O que é a Ortodontia?',
        answer: 'A ortodontia é a área da Medicina Dentária que envolve o diagnóstico, prevenção e tratamento dos problemas causados por uma má posição dos dentes e maxilares.'
      },
      {
        question: 'Quais as consequências de uma má posição dos dentes?',
        answer: 'As consequências de uma má oclusão dentária não são apenas de carácter estético, mas também podem ser a origem de cáries e doenças periodentais. A origem desta alteração pode encontrar-se em factores genéticos ou maus hábitos como a sucção de chupetas ou polegares.'
      },
      {
        question: 'Qual a influência da má posição dos dentes na sua saúde oral?',
        answer: 'Quando a posição dentária não é a adequada torna a limpeza mais difícil, sobretudo nos espaços interdentários. Os restos alimentares acumulam-se em forma de placa bacteriana, as gengivas inflamam e sangram dando lugar a doenças periodontais. Mas esta não é a única consequência, já que a má posição dos dentes favorece a formação de cáries e problemas nas articulações das mandíbulas e rotura de dentes.'
      },
      {
        question: 'Qual é a solução adequada a este problema?',
        answer: 'A solução dos problemas de mau posicionamento é a Ortodontia, que pode ser fixa ou removível dependendo do caso.'
      },
      {
        question: 'Quais os benefícios do tratamento ortodôntico?',
        answer: 'Para além da visível melhoria e harmonia das feições do rosto, a correção estética dos dentes e consequentemente do sorriso, conduz ao aumento da auto-estima e expressão oral do paciente. O correto alinhamento dos dentes facilita a higienização e diminui o risco de cáries.'
      },
      {
        question: 'Qual o melhor momento para iniciar um tratamento de Ortodontia?',
        answer: 'Ainda que a fase ideal para começar um tratamento seja a infância, as últimas novidades em ortodontia permitem que em qualquer idade se possa iniciar o tratamento, sem que isso pressuponha um problema estético.'
      },
      {
        question: 'Qual a duração média de um tratamento de Ortodontia?',
        answer: 'É difícil dizer em concreto uma duração exata do tratamento já que depende da posição dos dentes, da idade e resposta do paciente.'
      },
      {
        question: 'Como posso saber se necessito de Ortodontia?',
        answer: 'Recomendamos sempre que se faça uma avaliação oral. O médico dentista determinará qual o melhor tratamento em função do diagnóstico. Poderão ser problemas de mordida ou de oclusão, e noutros casos, apinhamento dentário ou falta de espaço entre dentes.'
      },
      {
        question: 'A Ortodontia pode melhorar a minha aparência física?',
        answer: 'Claro que sim. Da mesma forma que a Ortodontia consegue uma posição perfeita dos dentes existem outros tratamentos estéticos que combinados ajudarão a conseguir um sorriso perfeito: Facetas (corrigem defeitos de tamanho, cor e forma dos dentes) e Branqueamento dentário (uma vez conseguida a posição adequada dos dentes é possível melhorar o seu aspeto, aclarando a cor de base ou eliminando manchas derivadas do tabaco, café, entre outros).'
      }
    ]
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatria',
    icon: '👶',
    items: [
      {
        question: 'O que é a Odontopediatria?',
        answer: 'A Odontopediatria é a área da medicina dentária que estuda e se dedica à saúde oral de bebés, crianças e adolescentes (até aos 15 anos). A Odontopediatria apresenta conhecimentos sobre as diversas fases do crescimento e desenvolvimento da criança, atuando em cada uma delas, de acordo com a individualidade de cada paciente. Esta área da medicina dentária tem uma forte componente preventiva, uma vez que tem como principal objetivo o acompanhamento do desenvolvimento dos chamados "dentes de leite" não só para assegurar corretas funções fonéticas e de mastigação, mas também e sobretudo, para diagnosticar e prevenir precocemente potenciais problemas, garantindo uma dentição saudável até que os pequenos pacientes cheguem à idade adulta.'
      },
      {
        question: 'Quais os possíveis tratamentos em Odontopediatria?',
        answer: 'Apesar de alguns tratamentos serem semelhantes aos dos adultos, a Odontopediatria oferece tratamentos exclusivos tendo em conta as especificidades das faixas etárias em questão: Acompanhamento Ortodôntico Preventivo, Tratamento de Cáries, Aplicação Tópica de Flúor, Aplicação Tópica de Selantes, Orientação Acerca de Saúde Oral e Controlo da Placa Bacteriana.'
      },
      {
        question: 'Qual o melhor momento para iniciar os tratamentos em crianças?',
        answer: 'Os problemas dentários podem surgir bastante cedo, pelo que se recomenda que a primeira consulta se realize a partir do momento em que nasçam os primeiros dentes, normalmente entre os 6 meses e 1 ano de idade. Sabemos que o medo e a ansiedade estão geralmente associados à ida ao dentista. No entanto, o Odontopediatra tem formação específica para lidar com os receios da criança, transformando a consulta numa experiência positiva e até mesmo divertida.'
      }
    ]
  },
  {
    id: 'branqueamento',
    title: 'Branqueamento Dentário',
    icon: '✨',
    items: [
      {
        question: 'Em que consiste o branqueamento dentário?',
        answer: 'O branqueamento dentário é um tratamento cada vez mais procurado por parte dos pacientes junto dos profissionais de saúde oral. Um sorriso com dentes brancos nos dias de hoje, não só significa uma melhoria na saúde oral de cada um de nós, como aumenta a autoconfiança e a auto-estima que temos pela nossa imagem. Com a idade os nossos dentes, de forma natural, tendem a escurecer. No entanto as principais causas do escurecimento dentário ainda se devem a hábitos alimentares: tais como o consumo de café, chá, refrigerantes, vinho tinto, etc. Hábitos tabágicos também são uma das principais causas de escurecimento dentário assim como uma higiene oral insuficiente. A identificação da causa do escurecimento dentário é fundamental para que se possa eleger a técnica mais adequada a cada caso.'
      },
      {
        question: 'Quais os procedimentos pós-tratamento de branqueamento?',
        answer: 'Após o tratamento de branqueamento dentário, ou durante o tratamento caso seja necessário mais do que uma sessão, é fundamental a participação do paciente, no que toca a uma correta higiene oral. A diminuição do consumo de alimentos ricos em corantes (café, chá, vinho tinto, ketchup) e a diminuição da frequência de hábitos tabágicos, são fundamentais para evitar um retrocesso do tratamento. O tratamento de branqueamento dentário não é definitivo, no entanto com as técnicas e meios utilizados por nós, permite-nos manter dentes mais brancos cada vez mais tempo, com uma duração média de 2 anos até novo procedimento.'
      },
      {
        question: 'Quanto tempo dura o efeito de um branqueamento?',
        answer: 'Depende da sua alimentação, higiene oral e se fuma ou não. Normalmente tem a duração de dois anos, mas ao fazer a conjugação de branqueamento no consultório com as moldeiras em casa, podemos sempre que necessário utilizar a moldeira em casa, mantendo assim a cor branca dos seus dentes.'
      }
    ]
  },
  {
    id: 'destartarizacao',
    title: 'Destartarização',
    icon: '🪥',
    items: [
      {
        question: 'O que é a Destartarização?',
        answer: 'Situações como sangramento ou dor gengival durante a escovagem, sensação de mau hálito ou sensibilidade dentária repetida não devem ser menosprezadas. As consultas de Higiene Oral são direcionadas para a educação e promoção de hábitos de higiene oral tendo em conta a individualidade de cada paciente. O objetivo destas consultas consiste na prevenção das doenças orais eliminando através de destartarização+polimento os resíduos alimentares, placa bacteriana e o tártaro acumulado, fatores determinantes para o aparecimento de doenças como a cárie dentária e a doença periodontal.'
      }
    ]
  },
  {
    id: 'periodontologia',
    title: 'Periodontologia',
    icon: '🩺',
    items: [
      {
        question: 'Em que consiste a Periodontologia?',
        answer: 'A Periodontologia tem como principal objetivo a promoção de saúde e prevenção de doenças orais, a manutenção dos tratamentos realizados e uma melhoria estética para um sorriso mais bonito e saudável a longo prazo. As doenças periodontais são um conjunto de doenças inflamatórias que afectam os tecidos que rodeiam e dão suporte aos dentes e podem ser divididas, de uma forma geral, em dois grandes grupos: as Gengivites e as Periodontites.'
      },
      {
        question: 'Qual a diferença entre Gengivite e Periodontite?',
        answer: 'A Gengivite é uma inflamação das gengivas, de carácter reversível. Ou seja, com o tratamento adequado e uma correcta manutenção pelo doente em casa, é possível recuperar totalmente uma situação de saúde. Por outro lado, se não for atempadamente tratada, pode evoluir para uma situação mais grave, a Periodontite. A Periodontite, ao contrário da Gengivite, é uma doença irreversível. Está associada à inflamação das gengivas mas também à perda dos tecidos que suportam os dentes, nomeadamente do osso alveolar. O tratamento não permite recuperar o osso perdido, mas consegue parar a progressão da doença. Assim sendo, quando mais cedo for diagnosticada e tratada a periodontite, menos sequelas existirão.'
      }
    ]
  },
  {
    id: 'proteses-fixas',
    title: 'Próteses Fixas',
    icon: '🔧',
    items: [
      {
        question: 'Quais os problemas da ausência de dentes?',
        answer: 'A perda de dentes tem um impacto significativo na qualidade de vida das pessoas, afetando a mastigação, a fala, o sorriso e a auto-estima. A perda parcial ou total de dentes traz graves consequências a nível de saúde física e emocional, como défices nutricionais, isolamento das pessoas, sintomas como dores de estômago, cabeça, ouvidos, tonturas e alterações posturais.'
      },
      {
        question: 'O que é uma coroa e uma ponte dentária?',
        answer: 'São dispositivos médicos feitos por medida no Laboratório de Próteses Dentárias. Quando um dente fica com a sua estrutura coronária muito danificada, é usada uma coroa para cobrir o dente a restaurar. Quando esta situação acontece em mais do que uma peça dentária, com ausência de dentes adjacentes, utiliza-se uma ponte que restaura os dentes destruturados e substitui os dentes ausentes. A estrutura das coroas pode ser de metal ou zircónio, coberta por cerâmica de cor idêntica à dos dentes naturais.'
      },
      {
        question: 'As coroas e pontes necessitam de cuidados especiais?',
        answer: 'O sucesso das coroas e pontes sobre implantes depende, em parte, do paciente que deverá adaptar-se à nova condição. Será necessário realizar consultas de controlo periódicas, de acordo com as recomendações do seu dentista. A higienização das coroas e pontes é extremamente importante e deve ser efetuada conforme as indicações do seu dentista.'
      },
      {
        question: 'Enquanto as coroas e pontes são feitas vou ficar sem dentes?',
        answer: 'Caso seja necessário, será colocada uma coroa ou ponte provisória durante o processo de confeção das definitivas. As provisórias são ideais por questões estéticas mas também para proteger a estrutura dentária entre consultas. Ajudam também a iniciar o processo de adaptação do paciente aos novos dentes.'
      }
    ]
  },
  {
    id: 'proteses-removiveis',
    title: 'Próteses Removíveis',
    icon: '🦷',
    items: [
      {
        question: 'O que são próteses removíveis?',
        answer: 'São dispositivos médicos feitos por medida no Laboratório de Próteses Dentárias. As próteses removíveis têm como objetivo substituir os dentes perdidos. Podem ser parciais ou totais, dependendo dos dentes necessários. As parciais e totais removíveis em acrílico apoiam-se diretamente na gengiva ou nos dentes existentes. As próteses removíveis parciais podem ser constituídas também por uma parte em material rígido e são suportadas por sistemas que encaixam nos dentes existentes.'
      },
      {
        question: 'Qual o período de adaptação a uma prótese removível?',
        answer: 'As próteses dentárias são dispositivos individuais e únicos. É comum a sensação de uma nova presença na sua boca, à qual se irá habituar gradualmente.'
      },
      {
        question: 'As próteses removíveis necessitam de cuidados especiais?',
        answer: 'O sucesso das próteses depende, em parte, do paciente que deverá adaptar-se à nova condição. Será necessário realizar consultas de controlo periódicas, de acordo com as recomendações do seu dentista. A higienização das próteses é extremamente importante e deve ser efetuada conforme as indicações do seu dentista.'
      }
    ]
  },
  {
    id: 'apneia',
    title: 'Apneia do Sono',
    icon: '😴',
    items: [
      {
        question: 'O que é a apneia do sono?',
        answer: 'Apneia do sono é o distúrbio no qual um indivíduo sofre breves e repetidas interrupções da respiração (apneias) enquanto dorme. As apneias são causadas por obstruções transitórias da passagem do ar pela garganta de pelo menos 10 segundos de duração. Quando ocorrem apneias com frequência maior que 5x/hora no sono dizemos que o indivíduo é portador de apneia do sono. Estima-se que o Síndrome de Apneia e Hipopneia do Sono (SAHS), afete 25% da população.'
      },
      {
        question: 'O que provoca a apneia do sono?',
        answer: 'As principais causas incluem: Aumento do peso (causa mais comum nos adultos) - o excesso de tecido mole na garganta dificulta mantê-la aberta; Os músculos da garganta e língua relaxam mais do que o normal - isso tende a agravar-se com a idade; Alterações do formato da cabeça e pescoço pode resultar em menor espaço para passagem de ar na boca e garganta; Amígdalas e adenoides grandes são causa comum de apneia do sono na Criança.'
      },
      {
        question: 'Quais as consequências da apneia do sono?',
        answer: 'Após cada microdespertar ocorre também uma descarga aguda de hormônios. Aliada à queda da oxigenação sanguínea, pode desencadear arritmias, infarto do miocárdio e AVC\'s durante o sono. Além disso, a apneia do sono não tratada, a longo prazo, ocasiona ou agrava várias doenças como: Diabetes, Obesidade, Hipertensão, Insuficiência Cardíaca, Arritmias Cardíacas e AVCs.'
      },
      {
        question: 'Quais os possíveis tratamentos para apneia do sono?',
        answer: 'Pacientes diagnosticados com Apneias graves são tratados em Unidades de Distúrbio do Sono. Os pacientes diagnosticados com Apneias moderadas e leves podem ser tratados com dispositivos intra-orais. Graças a este tratamento, os pacientes com apneias leves e moderadas podem ser tratados em clínicas dentárias, através de férulas personalizadas.'
      },
      {
        question: 'Porquê o tratamento de apneia numa clínica dentária?',
        answer: 'Estudos demonstram que há uma relação entre o bruxismo e o SAHS, pelo que os dentistas passam à detecção da apneia do sono.'
      }
    ]
  }
];

// ============================================
// English FAQ Data
// ============================================
const faqDataEN: FAQCategory[] = [
  {
    id: 'implantes',
    title: 'Dental Implants',
    icon: '🦷',
    items: [
      {
        question: 'What is implantology?',
        answer: 'Implantology is the area of dentistry responsible for rehabilitating missing teeth through the placement of implants. It is a technique that ensures tooth replacement. Dental implants are artificial roots made of titanium integrated into the jawbone tissue. They support teeth or total or partial prostheses, restoring the aesthetic and chewing function of natural dentition.'
      },
      {
        question: 'What are the advantages of dental implants?',
        answer: 'Rehabilitation with dental implants ensures chewing, speech, and the aesthetic function of your smile. It considerably increases self-esteem as a result of improved appearance. With proper care and good oral hygiene, implants can have great durability, providing stability and comfort.'
      },
      {
        question: 'Which patients can get dental implants?',
        answer: 'Rehabilitation with dental implants can be performed on any patient who has healthy gums and sufficient bone to hold the implant. It can be performed on: any patient who has lost one, multiple, or all teeth; patients wearing partial or total dental prostheses (dentures); patients who do not adapt to prostheses; patients who are dissatisfied with the aesthetics of their prosthesis; patients with advanced bone loss due to tooth loss and/or prosthesis use, or who show facial changes (premature aging).'
      },
      {
        question: 'Why can\'t we ignore missing teeth?',
        answer: 'Tooth loss can cause problems if teeth are not replaced. A missing tooth can have a negative impact on quality of life as well as oral health. When there is tooth loss, healthy teeth tend to shift position, occupying the empty space. This can affect how upper and lower teeth meet. Missing teeth can influence how we apply pressure during chewing and can impact surrounding muscles and joints. The result is pain, gum and bone loss, and changes in facial structure.'
      },
      {
        question: 'Do dental implants require maintenance?',
        answer: 'Dental implants require the same care as natural teeth: regular tooth brushing, flossing, and regular visits to your dentist.'
      }
    ]
  },
  {
    id: 'ortodontia',
    title: 'Orthodontics',
    icon: '😁',
    items: [
      {
        question: 'What is Orthodontics?',
        answer: 'Orthodontics is the area of dentistry that involves the diagnosis, prevention, and treatment of problems caused by misaligned teeth and jaws.'
      },
      {
        question: 'What are the consequences of misaligned teeth?',
        answer: 'The consequences of poor dental occlusion are not only aesthetic but can also be the source of cavities and periodontal diseases. The origin of this condition can be found in genetic factors or bad habits such as pacifier or thumb sucking.'
      },
      {
        question: 'How does tooth misalignment affect your oral health?',
        answer: 'When teeth are not properly positioned, cleaning becomes more difficult, especially in interdental spaces. Food residue accumulates as bacterial plaque, gums become inflamed and bleed, leading to periodontal diseases. But this is not the only consequence, as tooth misalignment promotes cavity formation and problems with jaw joints and tooth breakage.'
      },
      {
        question: 'What is the appropriate solution for this problem?',
        answer: 'The solution for misalignment problems is Orthodontics, which can be fixed or removable depending on the case.'
      },
      {
        question: 'What are the benefits of orthodontic treatment?',
        answer: 'Beyond the visible improvement and harmony of facial features, the aesthetic correction of teeth and consequently of the smile leads to increased self-esteem and oral expression. Proper tooth alignment facilitates hygiene and reduces the risk of cavities.'
      },
      {
        question: 'When is the best time to start Orthodontic treatment?',
        answer: 'Although the ideal phase to start treatment is childhood, the latest developments in orthodontics allow treatment to begin at any age, without it being an aesthetic concern.'
      },
      {
        question: 'What is the average duration of Orthodontic treatment?',
        answer: 'It is difficult to give an exact treatment duration as it depends on tooth position, age, and patient response.'
      },
      {
        question: 'How can I know if I need Orthodontics?',
        answer: 'We always recommend an oral evaluation. The dentist will determine the best treatment based on the diagnosis. These may be bite or occlusion problems, and in other cases, dental crowding or lack of space between teeth.'
      },
      {
        question: 'Can Orthodontics improve my physical appearance?',
        answer: 'Absolutely. Just as Orthodontics achieves perfect tooth positioning, there are other aesthetic treatments that combined will help achieve a perfect smile: Veneers (correct defects in size, color, and shape of teeth) and Teeth Whitening (once proper tooth positioning is achieved, it is possible to improve their appearance by lightening the base color or eliminating stains from tobacco, coffee, among others).'
      }
    ]
  },
  {
    id: 'odontopediatria',
    title: 'Pediatric Dentistry',
    icon: '👶',
    items: [
      {
        question: 'What is Pediatric Dentistry?',
        answer: 'Pediatric Dentistry is the area of dentistry that studies and is dedicated to the oral health of babies, children, and adolescents (up to 15 years old). Pediatric Dentistry has knowledge about the various phases of child growth and development, acting in each of them according to the individuality of each patient. This area of dentistry has a strong preventive component, as its main objective is to monitor the development of "baby teeth" not only to ensure correct phonetic and chewing functions, but also and above all, to diagnose and prevent potential problems early, ensuring healthy dentition until young patients reach adulthood.'
      },
      {
        question: 'What are the possible treatments in Pediatric Dentistry?',
        answer: 'Although some treatments are similar to those for adults, Pediatric Dentistry offers exclusive treatments considering the specificities of the age groups in question: Preventive Orthodontic Monitoring, Cavity Treatment, Topical Fluoride Application, Topical Sealant Application, Oral Health Guidance, and Bacterial Plaque Control.'
      },
      {
        question: 'When is the best time to start treatments for children?',
        answer: 'Dental problems can arise quite early, so it is recommended that the first appointment takes place when the first teeth appear, usually between 6 months and 1 year of age. We know that fear and anxiety are generally associated with going to the dentist. However, the Pediatric Dentist has specific training to deal with the child\'s fears, turning the appointment into a positive and even fun experience.'
      }
    ]
  },
  {
    id: 'branqueamento',
    title: 'Teeth Whitening',
    icon: '✨',
    items: [
      {
        question: 'What does teeth whitening consist of?',
        answer: 'Teeth whitening is an increasingly sought-after treatment by patients from oral health professionals. A smile with white teeth today not only means an improvement in each of our oral health but also increases the self-confidence and self-esteem we have in our image. With age, our teeth naturally tend to darken. However, the main causes of tooth darkening are still due to eating habits: such as consuming coffee, tea, soft drinks, red wine, etc. Smoking habits are also one of the main causes of tooth darkening as well as insufficient oral hygiene. Identifying the cause of tooth darkening is essential to choose the most appropriate technique for each case.'
      },
      {
        question: 'What are the post-whitening treatment procedures?',
        answer: 'After whitening treatment, or during treatment if more than one session is needed, patient participation regarding proper oral hygiene is essential. Reducing consumption of foods rich in colorants (coffee, tea, red wine, ketchup) and reducing smoking frequency are essential to avoid treatment regression. Whitening treatment is not permanent, however with the techniques and methods we use, we can keep teeth whiter for longer, with an average duration of 2 years until the next procedure.'
      },
      {
        question: 'How long does the whitening effect last?',
        answer: 'It depends on your diet, oral hygiene, and whether you smoke or not. It usually lasts two years, but by combining in-office whitening with at-home trays, we can always use the tray at home when necessary, thus maintaining the white color of your teeth.'
      }
    ]
  },
  {
    id: 'destartarizacao',
    title: 'Dental Scaling',
    icon: '🪥',
    items: [
      {
        question: 'What is Dental Scaling?',
        answer: 'Situations such as bleeding or gum pain during brushing, bad breath sensation, or repeated dental sensitivity should not be underestimated. Oral Hygiene appointments are directed towards education and promotion of oral hygiene habits considering the individuality of each patient. The objective of these appointments is to prevent oral diseases by eliminating through scaling and polishing food residue, bacterial plaque, and accumulated tartar — determining factors for the appearance of diseases such as dental cavities and periodontal disease.'
      }
    ]
  },
  {
    id: 'periodontologia',
    title: 'Periodontology',
    icon: '🩺',
    items: [
      {
        question: 'What does Periodontology consist of?',
        answer: 'Periodontology\'s main objective is health promotion and prevention of oral diseases, maintenance of treatments performed, and aesthetic improvement for a more beautiful and healthy smile in the long term. Periodontal diseases are a set of inflammatory diseases that affect the tissues that surround and support the teeth and can be divided, generally, into two large groups: Gingivitis and Periodontitis.'
      },
      {
        question: 'What is the difference between Gingivitis and Periodontitis?',
        answer: 'Gingivitis is an inflammation of the gums, of a reversible nature. That is, with adequate treatment and proper home maintenance by the patient, it is possible to fully recover a healthy condition. On the other hand, if not treated in time, it can evolve into a more serious condition, Periodontitis. Periodontitis, unlike Gingivitis, is an irreversible disease. It is associated with gum inflammation but also with loss of tissues that support the teeth, namely the alveolar bone. Treatment cannot recover lost bone, but it can stop disease progression. Therefore, the earlier periodontitis is diagnosed and treated, the fewer consequences there will be.'
      }
    ]
  },
  {
    id: 'proteses-fixas',
    title: 'Fixed Prosthetics',
    icon: '🔧',
    items: [
      {
        question: 'What are the problems of missing teeth?',
        answer: 'Tooth loss has a significant impact on people\'s quality of life, affecting chewing, speech, smile, and self-esteem. Partial or total tooth loss brings serious consequences to physical and emotional health, such as nutritional deficiencies, social isolation, symptoms like stomach aches, headaches, earaches, dizziness, and postural changes.'
      },
      {
        question: 'What is a crown and dental bridge?',
        answer: 'They are custom-made medical devices manufactured in the Dental Prosthetics Laboratory. When a tooth has its crown structure very damaged, a crown is used to cover the tooth to be restored. When this situation occurs in more than one tooth, with missing adjacent teeth, a bridge is used that restores damaged teeth and replaces missing ones. The structure of crowns can be made of metal or zirconium, covered with ceramic of a color identical to natural teeth.'
      },
      {
        question: 'Do crowns and bridges require special care?',
        answer: 'The success of crowns and bridges on implants depends partly on the patient who must adapt to the new condition. Periodic check-up appointments will be necessary, according to your dentist\'s recommendations. The hygiene of crowns and bridges is extremely important and must be performed according to your dentist\'s instructions.'
      },
      {
        question: 'Will I be without teeth while crowns and bridges are being made?',
        answer: 'If necessary, a temporary crown or bridge will be placed during the manufacturing process of the definitive ones. Temporary ones are ideal for aesthetic reasons but also to protect the dental structure between appointments. They also help to start the patient\'s adaptation process to the new teeth.'
      }
    ]
  },
  {
    id: 'proteses-removiveis',
    title: 'Removable Prosthetics',
    icon: '🦷',
    items: [
      {
        question: 'What are removable prosthetics?',
        answer: 'They are custom-made medical devices manufactured in the Dental Prosthetics Laboratory. Removable prosthetics aim to replace lost teeth. They can be partial or total, depending on the teeth needed. Partial and total removable acrylic prosthetics rest directly on the gum or existing teeth. Partial removable prosthetics can also consist of a part made of rigid material and are supported by systems that clip onto existing teeth.'
      },
      {
        question: 'What is the adaptation period for a removable prosthesis?',
        answer: 'Dental prosthetics are individual and unique devices. It is common to feel a new presence in your mouth, which you will gradually get used to.'
      },
      {
        question: 'Do removable prosthetics require special care?',
        answer: 'The success of prosthetics depends partly on the patient who must adapt to the new condition. Periodic check-up appointments will be necessary, according to your dentist\'s recommendations. Prosthetic hygiene is extremely important and must be performed according to your dentist\'s instructions.'
      }
    ]
  },
  {
    id: 'apneia',
    title: 'Sleep Apnea',
    icon: '😴',
    items: [
      {
        question: 'What is sleep apnea?',
        answer: 'Sleep apnea is a disorder in which an individual suffers brief and repeated breathing interruptions (apneas) while sleeping. Apneas are caused by transient obstructions of air passage through the throat lasting at least 10 seconds. When apneas occur more frequently than 5 times per hour during sleep, we say the individual has sleep apnea. It is estimated that Sleep Apnea and Hypopnea Syndrome (SAHS) affects 25% of the population.'
      },
      {
        question: 'What causes sleep apnea?',
        answer: 'The main causes include: Weight gain (most common cause in adults) — excess soft tissue in the throat makes it difficult to keep it open; Throat and tongue muscles relax more than normal — this tends to worsen with age; Changes in head and neck shape can result in less space for air passage in the mouth and throat; Large tonsils and adenoids are a common cause of sleep apnea in children.'
      },
      {
        question: 'What are the consequences of sleep apnea?',
        answer: 'After each micro-awakening, an acute hormone discharge also occurs. Combined with the drop in blood oxygenation, it can trigger arrhythmias, myocardial infarction, and strokes during sleep. Furthermore, untreated sleep apnea, in the long term, causes or worsens various diseases such as: Diabetes, Obesity, Hypertension, Heart Failure, Cardiac Arrhythmias, and Strokes.'
      },
      {
        question: 'What are the possible treatments for sleep apnea?',
        answer: 'Patients diagnosed with severe apneas are treated in Sleep Disorder Units. Patients diagnosed with moderate and mild apneas can be treated with intra-oral devices. Thanks to this treatment, patients with mild and moderate apneas can be treated in dental clinics through customized splints.'
      },
      {
        question: 'Why treat sleep apnea at a dental clinic?',
        answer: 'Studies show that there is a relationship between bruxism and SAHS, which is why dentists are involved in the detection of sleep apnea.'
      }
    ]
  }
];

// ============================================
// Export function to get FAQ data by language
// ============================================
export function getFaqData(language: string): FAQCategory[] {
  return language === 'en' ? faqDataEN : faqDataPT;
}