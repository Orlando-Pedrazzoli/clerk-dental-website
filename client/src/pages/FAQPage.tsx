import { useState } from 'react';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// ============================================
// FAQ Data Structure
// ============================================
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
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
// FAQ Accordion Item Component
// ============================================
interface FAQAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQAccordionItem({ question, answer, isOpen, onClick }: FAQAccordionItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 px-4 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-gray-800 font-medium pr-4 text-base md:text-lg">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-4 pb-5 text-gray-600 leading-relaxed text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}

// ============================================
// FAQ Category Section Component
// ============================================
interface FAQCategorySectionProps {
  category: FAQCategory;
  openItems: Set<string>;
  toggleItem: (itemId: string) => void;
}

function FAQCategorySection({ category, openItems, toggleItem }: FAQCategorySectionProps) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl" role="img" aria-hidden="true">{category.icon}</span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          {category.title}
        </h2>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {category.items.map((item, index) => {
          const itemId = `${category.id}-${index}`;
          return (
            <FAQAccordionItem
              key={itemId}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.has(itemId)}
              onClick={() => toggleItem(itemId)}
            />
          );
        })}
      </div>
    </div>
  );
}

// ============================================
// Category Navigation Component
// ============================================
interface CategoryNavProps {
  categories: FAQCategory[];
  activeCategory: string | null;
  onCategoryClick: (categoryId: string) => void;
}

function CategoryNav({ categories, activeCategory, onCategoryClick }: CategoryNavProps) {
  return (
    <nav className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
      <div className="flex gap-2 min-w-max md:flex-wrap">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
            }`}
          >
            <span className="mr-1.5">{category.icon}</span>
            {category.title}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ============================================
// Schema.org FAQ Structured Data
// ============================================
function generateFAQSchema(categories: FAQCategory[]) {
  const allQuestions = categories.flatMap((category) =>
    category.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }))
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions,
  };
}

// ============================================
// Main FAQ Page Component
// ============================================
export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const faqSchema = generateFAQSchema(faqData);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Perguntas Frequentes | Centro Dentário Colombo</title>
        <meta 
          name="description" 
          content="Encontre respostas às perguntas mais frequentes sobre tratamentos dentários: implantes, ortodontia, branqueamento, próteses e muito mais. Centro Dentário Colombo em Lisboa." 
        />
        <meta 
          name="keywords" 
          content="perguntas frequentes dentista, FAQ dentário, implantes dentários, ortodontia, branqueamento dentário, próteses dentárias, Lisboa" 
        />
        <link rel="canonical" href="https://www.centrodentariocolombo.com/faq" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Perguntas Frequentes | Centro Dentário Colombo" />
        <meta property="og:description" content="Encontre respostas às perguntas mais frequentes sobre tratamentos dentários." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.centrodentariocolombo.com/faq" />
        
        {/* Schema.org FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
              Tire todas as suas dúvidas sobre os nossos tratamentos dentários
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          {/* Category Navigation */}
          <CategoryNav 
            categories={faqData} 
            activeCategory={activeCategory}
            onCategoryClick={scrollToCategory}
          />

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqData.map((category) => (
              <div key={category.id} id={category.id}>
                <FAQCategorySection
                  category={category}
                  openItems={openItems}
                  toggleItem={toggleItem}
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Não encontrou a resposta que procurava?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              A nossa equipa está disponível para esclarecer todas as suas dúvidas. 
              Entre em contacto connosco!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+351217711010"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </a>
              <a
                href="https://wa.me/351217711010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}