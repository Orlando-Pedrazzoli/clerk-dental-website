import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Política de Privacidade | Centro Dentário Colombo</title>
        <meta 
          name="description" 
          content="Política de Privacidade do Centro Dentário Colombo. Saiba como recolhemos, utilizamos e protegemos os seus dados pessoais." 
        />
        <link rel="canonical" href="https://www.centrodentariocolombo.com/politica-privacidade" />
      </Helmet>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Política de Privacidade
          </h1>
          <p className="text-blue-100 text-lg">
            Última atualização: Janeiro 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* 1. Compromisso */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              O Nosso Compromisso de Privacidade
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              No Centro Dentário Colombo, compreendemos que a utilização dos seus dados pessoais requer a sua confiança. 
              A confidencialidade e a integridade dos seus dados pessoais é uma das nossas principais preocupações. 
              Estamos sujeitos aos mais elevados padrões de privacidade e apenas iremos utilizar os seus dados pessoais 
              para finalidades claramente identificadas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Política de Privacidade, bem como a recolha, o tratamento e/ou transmissão de Dados Pessoais do Titular, 
              são regidos de acordo com a legislação e regulamentação aplicáveis em Portugal, incluindo o disposto no 
              Regulamento (UE) 2016/679, do Parlamento Europeu e do Conselho, de 27 de abril de 2016 (RGPD).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Todas as suas informações pessoais recolhidas serão usadas para o ajudar a tornar a sua visita ao nosso 
              website ou à nossa clínica o mais agradável e personalizada possível, sendo ainda os estritamente 
              necessários para cumprir com obrigações legais e regulamentares.
            </p>
          </div>

          {/* 2. Informação Geral */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Informação Geral
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Centro Dentário Colombo é uma moderna clínica dentária que desenvolve a sua atividade através da 
              prestação de serviços em diferentes áreas médicas, nomeadamente: Implantologia, Ortodontia, 
              Periodontologia, Estética e Reabilitação Oral, Dentisteria, Endodontia, Oclusão, Odontopediatria, 
              Branqueamento Dentário, Próteses Dentárias e tratamento de Apneia do Sono.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl mb-4">
              <h3 className="font-bold text-gray-900 mb-3">Dados da Entidade Responsável:</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Denominação:</strong> D. Amaral Assistência e Prevenção Dentária LDA</li>
                <li><strong>NIPC:</strong> 505887533</li>
                <li><strong>Licença ERS:</strong> 3297/2011</li>
                <li><strong>Nº Registo ERS:</strong> E115139</li>
                <li><strong>Morada:</strong> Avenida Lusíada, Centro Comercial Colombo - Piso 1, Loja 507, 1500-392 Lisboa</li>
                <li><strong>Telefone:</strong> +351 21 604 13 55</li>
                <li><strong>Email:</strong> clinicadentaria.colombo@gmail.com</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              No acesso ao website da empresa, concorda com o uso que o Centro Dentário Colombo possa fazer da 
              informação pessoal que submeta ou que seja recolhida no âmbito e nos termos da presente política 
              de privacidade.
            </p>
          </div>

          {/* 3. Responsável pelos Dados */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Quem é o Responsável pelos Dados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A D. Amaral Assistência e Prevenção Dentária LDA é responsável pelo tratamento dos dados pessoais 
              que recolhe através (i) do website centrodentariocolombo.com (ii) no âmbito das atividades e serviços 
              desenvolvidos pela clínica (iii) bem como pelos dados recolhidos em eventos ou ações de divulgação 
              e promoção de serviços e produtos, mediante o seu consentimento prévio.
            </p>
          </div>

          {/* 4. Como Recolhemos */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              Como Recolhemos os Seus Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nesta Política de Privacidade, o termo "Dados Pessoais" significa o conjunto de informações que se 
              relacionam consigo e que nos permite identificá-lo(a), direta ou indiretamente. Os seus dados pessoais 
              serão recolhidos e tratados pelo Centro Dentário Colombo nas seguintes situações:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Caso nos contacte diretamente:</h3>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Através do nosso website, pelo preenchimento do formulário para agendamento de consultas</li>
                <li>Se nos enviar um pedido de contacto para resposta e outras questões</li>
                <li>Quando nos contacta por telefone</li>
                <li>Quando nos contacta através do nosso email de apoio ao cliente</li>
                <li>Quando se dirige à nossa clínica e se mostra interessado nos nossos serviços</li>
                <li>Quando nos contacta através das redes sociais ou WhatsApp</li>
              </ul>
            </div>
          </div>

          {/* 5. Dados Recolhidos */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              Dados que Podem Ser Recolhidos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Podem ser solicitadas informações pessoais, incluindo, mas não limitadas a:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Dados de Contacto</h4>
                <p className="text-gray-600 text-sm">Nome, morada, contacto telefónico e endereço de email</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Características Pessoais</h4>
                <p className="text-gray-600 text-sm">Género, idade, data de nascimento</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Dados de Saúde</h4>
                <p className="text-gray-600 text-sm">Historial de saúde, doenças, alergias e dados de saúde oral</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Dados de Transação</h4>
                <p className="text-gray-600 text-sm">Número de contribuinte, pedidos de informações e sugestões</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Dados de Consulta</h4>
                <p className="text-gray-600 text-sm">Tipo de tratamento, substâncias e materiais utilizados</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Dados de Website</h4>
                <p className="text-gray-600 text-sm">Informação sobre como utiliza o website (ver Política de Cookies)</p>
              </div>
            </div>
          </div>

          {/* 6. Finalidades */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
              Para que Finalidades Utilizamos os Seus Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Toda a informação que recolhemos é registada, utilizada e protegida em conformidade com a legislação 
              nacional e comunitária vigente em matéria de proteção de dados. Os seus dados serão processados para 
              as seguintes finalidades:
            </p>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Gestão dos serviços de saúde contratados, do processo clínico e de consultas (marcação, confirmação e/ou remarcação)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Identificação do estado geral de saúde e de eventuais alergias ou incompatibilidades</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Definição e acompanhamento do Plano de Tratamento personalizado</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Resposta a pedidos de marcação, informações e dúvidas</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Controlo de qualidade sobre os serviços prestados</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Cumprimento de obrigações legais (ex: emissão de faturas)</span>
              </li>
            </ul>
          </div>

          {/* 7. Privacidade de Menores */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
              Privacidade de Menores
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O Centro Dentário Colombo está empenhado na proteção da privacidade de crianças e jovens e apenas 
              recolhe dados pessoais de titulares com idade inferior a 18 anos mediante autorização por escrito 
              do seu responsável parental. Incentivamos os pais/tutores e responsáveis por menores com idade 
              inferior a 16 anos a supervisionarem regularmente a utilização do correio eletrónico e outras 
              atividades na internet das crianças.
            </p>
          </div>

          {/* 8. Direitos do Titular */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
              Direitos do Titular
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              De acordo com o regulamento RGPD (UE) 2016/679, poderá solicitar, em qualquer momento:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-bold text-gray-900">Direito de Acesso</h4>
                <p className="text-gray-600 text-sm">Aceder aos dados pessoais que lhe digam respeito</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-bold text-gray-900">Direito de Retificação</h4>
                <p className="text-gray-600 text-sm">Corrigir dados pessoais inexatos</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-bold text-gray-900">Direito ao Esquecimento</h4>
                <p className="text-gray-600 text-sm">Solicitar a eliminação dos seus dados</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-bold text-gray-900">Direito à Portabilidade</h4>
                <p className="text-gray-600 text-sm">Receber os seus dados em formato estruturado</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-bold text-gray-900">Direito de Oposição</h4>
                <p className="text-gray-600 text-sm">Opor-se ao tratamento dos seus dados</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-bold text-gray-900">Direito de Limitação</h4>
                <p className="text-gray-600 text-sm">Limitar o tratamento dos seus dados</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para o exercício de direitos enquanto titular de dados, deverá contactar-nos através de:
            </p>
            <div className="bg-gray-100 p-6 rounded-xl">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> clinicadentaria.colombo@gmail.com</p>
              <p className="text-gray-700 mb-2"><strong>Morada:</strong> Centro Comercial Colombo - Piso 1, Loja 507, 1500-392 Lisboa</p>
              <p className="text-gray-700"><strong>Telefone:</strong> +351 21 604 13 55</p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Autoridade de Controlo:</strong> Caso esteja insatisfeito com a nossa utilização dos seus dados 
              pessoais, assiste-lhe o direito a apresentar uma reclamação à CNPD – Comissão Nacional de Proteção de Dados.
            </p>
          </div>

          {/* 9. Segurança */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">9</span>
              Como Mantemos os Seus Dados Seguros
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos uma diversidade de medidas de segurança, incluindo encriptação e ferramentas de 
              autenticação, para ajudar a proteger e manter a segurança, integridade e disponibilidade dos 
              seus dados pessoais. Entre outras, implementámos as seguintes medidas:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>Todos os dados transmitidos no website utilizam a norma SSL (Secure Socket Layer)</li>
              <li>Acesso pessoal restrito aos seus dados pessoais com base no critério da necessidade</li>
              <li>Transferência de dados recolhidos apenas de forma encriptada</li>
              <li>Armazenamento de dados confidenciais apenas de forma encriptada</li>
              <li>Proteção dos sistemas de TI através de firewalls</li>
              <li>Monitorização permanente dos acessos aos sistemas de tecnologias da informação</li>
            </ul>
          </div>

          {/* 10. Período de Conservação */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">10</span>
              Período de Conservação de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              De acordo com o Art 5º (1) al. e) do RGPD, os seus dados pessoais serão guardados pelo período 
              de tempo necessário para os fins para os quais foram recolhidos ou pelo período de tempo 
              legalmente exigido por outras legislações em vigor no Estado Português.
            </p>
          </div>

          {/* 11. Contactos */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">11</span>
              Contactos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Caso tenha alguma dúvida, questão ou sugestão a apresentar sobre a presente Política de Privacidade, contacte-nos:
            </p>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4">Centro Dentário Colombo</h3>
              <div className="space-y-2">
                <p><strong>Morada:</strong> Centro Comercial Colombo - Piso 1, Loja 507, 1500-392 Lisboa</p>
                <p><strong>Telefone:</strong> +351 21 604 13 55</p>
                <p><strong>Email:</strong> clinicadentaria.colombo@gmail.com</p>
                <p><strong>Horário:</strong> Segunda a Domingo, 10:00 - 22:00</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-200">
            <Link 
              to="/politica-cookies" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Ver Política de Cookies
            </Link>
            <Link 
              to="/faq" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Perguntas Frequentes
            </Link>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}