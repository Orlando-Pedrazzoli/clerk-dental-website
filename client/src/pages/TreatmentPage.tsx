import { useParams, Link, Navigate } from 'react-router';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { treatments } from '../data/services-data';
import WhatsAppButton from '../components/WhatsAppButton';

export default function TreatmentPage() {
  const { slug } = useParams<{ slug: string }>();
  
  // Scroll para o topo quando a página carregar ou o slug mudar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // Encontrar o tratamento pelo slug
  const treatment = treatments.find(t => t.slug === slug);

  // Se não encontrar o tratamento, redirecionar para home
  if (!treatment) {
    return <Navigate to="/" replace />;
  }

  // URL canônica para este tratamento
  const canonicalUrl = `https://www.centrodentariocolombo.com/tratamentos/${treatment.slug}`;
  
  // Descrição SEO baseada no tratamento
  const seoDescription = `${treatment.title} no Centro Dentário Colombo em Lisboa. ${treatment.description.substring(0, 120)}... Marque a sua consulta!`;

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags Dinâmicas */}
      <Helmet>
        <title>{treatment.title} | Centro Dentário Colombo</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={`${treatment.title.toLowerCase()}, ${treatment.subtitle.toLowerCase()}, tratamento dentário lisboa, centro dentário colombo, dentista lisboa`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Centro Dentário Colombo" />
        <meta property="og:title" content={`${treatment.title} | Centro Dentário Colombo`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={treatment.bannerImage.startsWith('http') ? treatment.bannerImage : `https://www.centrodentariocolombo.com${treatment.bannerImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="pt_PT" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${treatment.title} | Centro Dentário Colombo`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={treatment.bannerImage.startsWith('http') ? treatment.bannerImage : `https://www.centrodentariocolombo.com${treatment.bannerImage}`} />
      </Helmet>

      <WhatsAppButton />

      {/* Navbar Simplificada */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/logo-colombo-nav.png" 
                alt="Centro Dentário Colombo Logo" 
                className="h-12 w-auto md:h-14 transition-transform group-hover:scale-105"
              />
              <span className="hidden sm:block text-xl md:text-2xl font-bold bg-gradient-to-r from-[#14489c] to-[#006bb3] bg-clip-text text-transparent">
                Centro Dentário Colombo
              </span>
            </Link>

            <Link
              to="/#tratamentos"
              className="text-gray-700 hover:text-blue-600 transition font-medium flex items-center gap-2"
              onClick={() => {
                // Pequeno delay para permitir navegação antes do scroll
                setTimeout(() => {
                  const tratamentosSection = document.getElementById('tratamentos');
                  if (tratamentosSection) {
                    tratamentosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar aos Tratamentos
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="pt-20">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={treatment.bannerImage}
            alt={treatment.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          {/* Título sobre o banner */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                {treatment.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                {treatment.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Descrição Inicial */}
          <div className="mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                {treatment.description}
              </p>
            </div>
          </div>

          {/* O que é? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded"></span>
              O que é?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {treatment.fullContent.whatIs}
              </p>
            </div>
          </div>

          {/* Imagem 1 */}
          <div className="mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={treatment.image1}
                alt={`${treatment.title} - Imagem 1`}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Vantagens */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded"></span>
              Quais as vantagens?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {treatment.fullContent.advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition"
                >
                  <svg
                    className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">{advantage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem 2 */}
          <div className="mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={treatment.image2}
                alt={`${treatment.title} - Imagem 2`}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Informação Adicional */}
          {treatment.fullContent.additionalInfo && (
            <div className="mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <div className="flex items-start gap-4">
                  <svg
                    className="w-8 h-8 text-blue-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Informação Importante</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {treatment.fullContent.additionalInfo}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Interessado neste tratamento?
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Agende a sua consulta e comece a transformação do seu sorriso hoje mesmo!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#contacto"
                className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition text-lg font-semibold inline-flex items-center shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Marcar Consulta
              </a>
              <a
                href="tel:+351216041355"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full hover:bg-white/20 transition text-lg font-semibold inline-flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamentos Relacionados */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Outros Tratamentos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments
              .filter(t => t.id !== treatment.id)
              .slice(0, 16)
              .map(relatedTreatment => (
                <Link
                  key={relatedTreatment.id}
                  to={`/tratamentos/${relatedTreatment.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relatedTreatment.bannerImage}
                      alt={relatedTreatment.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {relatedTreatment.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-semibold">
                      {relatedTreatment.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer Simplificado */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            &copy; 2025 Centro Dentário Colombo. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Estabelecimento licenciado pela ERS - Licença: 3297/2011
          </p>
        </div>
      </footer>
    </div>
  );
}