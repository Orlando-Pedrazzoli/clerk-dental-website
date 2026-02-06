import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import CookieSettingsButton from '../components/cookies/CookieSettingsButton';

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Política de Cookies | Centro Dentário Colombo</title>
        <meta 
          name="description" 
          content="Política de Cookies e Redes Sociais do Centro Dentário Colombo. Saiba como utilizamos cookies para melhorar a sua experiência." 
        />
        <link rel="canonical" href="https://www.centrodentariocolombo.com/politica-cookies" />
      </Helmet>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Política de Cookies e Redes Sociais
          </h1>
          <p className="text-blue-100 text-lg">
            Última atualização: Janeiro 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Introdução */}
          <div className="mb-10">
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <p className="text-gray-700 leading-relaxed">
                A presente Política de Cookies faz parte integrante da{' '}
                <Link to="/politica-privacidade" className="text-blue-600 hover:underline">
                  Política de Privacidade
                </Link>{' '}
                do website <strong>centrodentariocolombo.com</strong>, propriedade da D. Amaral Assistência 
                e Prevenção Dentária LDA (doravante designada por "Centro Dentário Colombo").
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              No Centro Dentário Colombo, compreendemos que a segurança dos dados recolhidos junto dos 
              visitantes do nosso website é muito importante, pelo que respeitamos as regras e regulações 
              em vigor em matéria de proteção de dados.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Esta Política de Cookies visa informá-lo, enquanto utilizador do nosso website, que utilizamos 
              cookies, em combinação com pixels, objetos de arquivo local e outros dispositivos. Estes 
              ajudam-nos a proporcionar-lhe uma experiência de navegação otimizada, fluída e adaptada às 
              suas necessidades.
            </p>
          </div>

          {/* 1. Definição de Cookie */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              O que são Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Cookie é um pequeno ficheiro de arquivo de texto, por vezes encriptado, que armazena 
              definições da Internet. É transferido para o seu navegador na primeira vez que visita um 
              website. Na próxima vez que o visitar, através do mesmo dispositivo, o cookie e as informações 
              nele contidas serão reenviados para o website de origem.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🔵 Cookies Primários</h4>
                <p className="text-gray-600 text-sm">
                  São aqueles que são colocados pelo website que está a ser visitado pelo utilizador 
                  (colocados pelo domínio do nosso website).
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🔴 Cookies de Terceiros</h4>
                <p className="text-gray-600 text-sm">
                  São cookies colocados no seu navegador por um domínio que não o do website que está 
                  a ser visitado pelo utilizador.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Tipos de Cookies */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Tipos de Cookies
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-2">Cookies Persistentes</h4>
                <p className="text-gray-600 text-sm">
                  Ficam retidos pelo site e são utilizados sempre que o volta a visitar. Geralmente são 
                  utilizados para direcionar a navegação de acordo com os interesses do utilizador.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-2">Cookies de Sessão</h4>
                <p className="text-gray-600 text-sm">
                  São utilizados apenas durante uma sessão online e são eliminados assim que deixa o site. 
                  São temporários, sendo eliminados assim que fecha o navegador.
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 italic">
              Nota: Quer os cookies de sessão quer os persistentes podem ser apagados por si a qualquer 
              momento através das definições do seu navegador.
            </p>
          </div>

          {/* 3. Que Cookies Utilizamos */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Que Cookies Utilizamos e Com Que Finalidade?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Dependendo da sua função e finalidade, os cookies podem ser divididos em quatro categorias:
            </p>

            {/* Cookies Essenciais */}
            <div className="mb-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-blue-600 text-white px-6 py-3">
                <h3 className="font-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Cookies Essenciais (Necessários)
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  São necessários para que consiga navegar no website e utilizar as suas funcionalidades. 
                  Sem estes cookies, as funcionalidades do website não podem ser asseguradas.
                </p>
                <p className="text-gray-600 text-sm mb-3"><strong>O seu consentimento não é exigido para esta categoria.</strong></p>
                <p className="text-gray-600 text-sm">Utilizamos cookies essenciais para:</p>
                <ul className="text-gray-600 text-sm list-disc list-inside mt-2 space-y-1">
                  <li>O identificar e autenticar no nosso website</li>
                  <li>Garantir que se liga ao serviço correto</li>
                  <li>Por questões de segurança</li>
                  <li>Guardar as suas preferências de cookies</li>
                </ul>
              </div>
            </div>

            {/* Cookies de Performance */}
            <div className="mb-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-3">
                <h3 className="font-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cookies de Performance (Analíticos)
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Recolhem informação sobre como o website é utilizado. A informação recolhida é agregada 
                  e anónima, sendo utilizada exclusivamente para melhorar o desempenho do website.
                </p>
                <p className="text-gray-600 text-sm">Utilizamos cookies de performance para:</p>
                <ul className="text-gray-600 text-sm list-disc list-inside mt-2 space-y-1">
                  <li>Análise estatística do website</li>
                  <li>Obter dados sobre o número de utilizadores</li>
                  <li>Melhorar o website identificando erros</li>
                  <li>Testar diferentes designs do website</li>
                </ul>
              </div>
            </div>

            {/* Cookies de Funcionalidade */}
            <div className="mb-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-purple-600 text-white px-6 py-3">
                <h3 className="font-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  Cookies de Funcionalidade
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Permitem relembrar as suas preferências. Guardam as suas preferências relativamente 
                  à utilização do website, de forma que não seja necessário voltar a configurá-lo.
                </p>
                <p className="text-gray-600 text-sm">Utilizamos cookies de funcionalidade para:</p>
                <ul className="text-gray-600 text-sm list-disc list-inside mt-2 space-y-1">
                  <li>Relembrar os seus settings e preferências (layout, cores, idioma)</li>
                  <li>Mostrar quando está registado no website</li>
                  <li>Mostrar conteúdos de vídeo (quando disponibilizados)</li>
                </ul>
              </div>
            </div>

            {/* Cookies de Marketing */}
            <div className="mb-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-orange-600 text-white px-6 py-3">
                <h3 className="font-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  Cookies de Marketing/Targeting
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Servem para direcionar a publicidade em função dos interesses de cada utilizador. 
                  Ajudam a medir a eficácia da publicidade, mas não identificam o utilizador.
                </p>
                <p className="text-gray-600 text-sm">Poderemos utilizar os cookies de marketing para:</p>
                <ul className="text-gray-600 text-sm list-disc list-inside mt-2 space-y-1">
                  <li>Personalizar publicidade em função dos seus interesses</li>
                  <li>Melhorar a forma como entregamos publicidade</li>
                  <li>Medir o sucesso das nossas campanhas online</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Consentimento */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              Quando Necessitamos do Seu Consentimento
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pediremos o seu consentimento antes de colocar qualquer cookie no seu dispositivo, sempre 
              que tal seja necessário. Pode dar-nos o seu consentimento clicando na opção que surge no 
              banner no canto inferior do seu ecrã.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-gray-700">
                <strong>Importante:</strong> Se decidir não nos dar o seu consentimento ou se pretender 
                retirá-lo, ser-lhe-ão apenas disponibilizadas as funcionalidades do nosso website que 
                consigamos garantir sem a utilização de cookies não essenciais.
              </p>
            </div>
          </div>

          {/* 5. Como Gerir */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              Como Gerir os Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A maioria dos navegadores permitem algum controlo sobre os cookies através da gestão das 
              configurações do navegador. Os seguintes links ajudam-no a entender as configurações 
              disponíveis para alguns navegadores:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <a 
                href="https://support.microsoft.com/pt-pt/help/17442/windows-internet-explorer-delete-manage-cookies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition"
              >
                <span className="text-2xl">🌐</span>
                <span className="text-gray-700">Internet Explorer</span>
              </a>
              <a 
                href="https://support.mozilla.org/pt-PT/kb/ativar-desativar-cookies-websites-utilizam-rastrear-preferencias" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition"
              >
                <span className="text-2xl">🦊</span>
                <span className="text-gray-700">Firefox</span>
              </a>
              <a 
                href="https://support.google.com/chrome/answer/95647?hl=pt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition"
              >
                <span className="text-2xl">🔵</span>
                <span className="text-gray-700">Google Chrome</span>
              </a>
              <a 
                href="https://support.apple.com/pt-pt/guide/safari/sfri11471/mac" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition"
              >
                <span className="text-2xl">🧭</span>
                <span className="text-gray-700">Safari</span>
              </a>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                <strong>Gerir as suas preferências de cookies neste website:</strong>
              </p>
              <CookieSettingsButton className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold" />
            </div>
          </div>

          {/* 6. Redes Sociais */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
              Redes Sociais e Links de Terceiros
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O presente website também integra conteúdos de terceiros. Estes terceiros, cujas práticas de 
              privacidade podem ser diferentes das praticadas pelo Centro Dentário Colombo, poderão 
              eventualmente instalar cookies enquanto visita este website.
            </p>
            
            {/* Links para políticas de terceiros */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <a 
                href="https://www.facebook.com/policies/cookies/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition"
              >
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-gray-700">Política de Cookies do Facebook</span>
              </a>
              <a 
                href="https://help.instagram.com/1896641480634370" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-pink-50 p-4 rounded-lg hover:bg-pink-100 transition"
              >
                <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-gray-700">Política de Dados do Instagram</span>
              </a>
              <a 
                href="https://policies.google.com/technologies/cookies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-red-50 p-4 rounded-lg hover:bg-red-100 transition"
              >
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
                <span className="text-gray-700">Google Analytics</span>
              </a>
              <a 
                href="https://www.whatsapp.com/legal/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-50 p-4 rounded-lg hover:bg-green-100 transition"
              >
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-gray-700">Política de Privacidade WhatsApp</span>
              </a>
            </div>

            {/* Redes Sociais do Centro Dentário */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Redes Sociais do Centro Dentário Colombo</h3>
              <p className="text-gray-700 mb-4">
                O acesso às nossas páginas nas redes sociais (Facebook, Instagram) é livre e gratuito. 
                A utilização destas páginas permite ao utilizador interagir através de comentários e 
                partilha de experiências.
              </p>
              <p className="text-gray-700 mb-4">
                O utilizador compromete-se a exercer uma utilização adequada e lícita das páginas do 
                Centro Dentário Colombo nas redes sociais, mantendo uma conduta apropriada para com os 
                restantes utilizadores.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/centrodentariocolombo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/centrodentariocolombo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* 7. Contactos */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
              Contactos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se tiver alguma questão sobre a nossa Política de Cookies, contacte-nos:
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
              to="/politica-privacidade" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Ver Política de Privacidade
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

     
    </div>
  );
}