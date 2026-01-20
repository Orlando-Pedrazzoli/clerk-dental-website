import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { SEO } from '../components/SEO';
import { BreadcrumbJsonLd } from '../components/JsonLd';
import { doctors } from '../data/doctors-data';
import WhatsAppButton from '../components/WhatsAppButton';

export default function CorpoClinicoPage() {
  // Estado para controlar qual card está expandido
  const [expandedBio, setExpandedBio] = useState<string | null>(null);

  // Scroll to top quando a página carregar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Função para abrir WhatsApp com mensagem personalizada
  const openWhatsApp = (doctorName: string, doctorTitle: string, specialties: string[]) => {
    const phoneNumber = '351933522580';
    const specialtiesText = specialties.join(' | ');
    const message = encodeURIComponent(
      `Olá! Gostaria de marcar uma consulta com ${doctorTitle} ${doctorName} (${specialtiesText}).`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Scroll to top manual
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle bio expandida
  const toggleBio = (doctorId: string) => {
    setExpandedBio(expandedBio === doctorId ? null : doctorId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <SEO
        title="Corpo Clínico"
        description="Conheça a equipa de médicos dentistas do Centro Dentário Colombo. Profissionais especializados em implantologia, ortodontia, estética dentária e mais. Marque a sua consulta!"
        keywords="médicos dentistas lisboa, equipa dentária, especialistas dentários, dentistas centro colombo, implantologista, ortodontista, periodontista"
        path="/corpo-clinico"
      />
      
      {/* JSON-LD Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', path: '/' },
          { name: 'Corpo Clínico', path: '/corpo-clinico' }
        ]}
      />

      <WhatsAppButton />

      {/* Navbar Simplificada */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
              <img 
                src="/logo-colombo-nav.png" 
                alt="Centro Dentário Colombo Logo" 
                className="h-12 w-auto md:h-14"
              />
              <span className="hidden sm:block text-xl md:text-2xl font-bold bg-gradient-to-r from-[#14489c] to-[#006bb3] bg-clip-text text-transparent">
                Centro Dentário Colombo
              </span>
            </Link>

            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar
            </Link>
          </div>
        </div>
      </nav>

      {/* Banner Hero - Fullwidth com Imagem */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-20">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg"
            alt="Equipa médica Centro Dentário Colombo"
            className="w-full h-full object-cover"
          />
          {/* Overlay sutil apenas na parte inferior para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        {/* Conteúdo do Banner */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.5)' }}>
            Nosso Corpo Clínico
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8" style={{ textShadow: '1px 2px 6px rgba(0,0,0,0.6)' }}>
            Uma equipa de profissionais altamente qualificados e experientes, dedicados a 
            proporcionar os melhores cuidados dentários com tecnologia de ponta e atendimento humanizado.
          </p>
        </div>
      </section>

      {/* Doctors Grid - Cards com Avatar Circular */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Título da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Conheça Nossa Equipa
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profissionais dedicados ao seu sorriso e bem-estar
            </p>
          </div>

          {/* Grid de Médicos - 3 colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => {
              const isExpanded = expandedBio === doctor.id;
              const bioLength = doctor.bio.length;
              const needsExpand = bioLength > 150;

              return (
                <div
                  key={doctor.id}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden p-6 text-center border border-gray-100 flex flex-col"
                >
                  {/* Avatar Circular com Ring Azul */}
                  <div className="relative mx-auto mb-6 flex-shrink-0">
                    {/* Ring exterior */}
                    <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-1">
                      <div className="w-full h-full rounded-full bg-white p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-gray-100">
                          <img
                            src={doctor.photo}
                            alt={`${doctor.title} ${doctor.name}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Nome */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex-shrink-0">
                    {doctor.title} {doctor.name}
                  </h3>

                  {/* Especialidades */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4 flex-shrink-0 min-h-[60px] items-start">
                    {doctor.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Bio com "Ver mais" */}
                  <div className="flex-grow mb-4">
                    <p className={`text-gray-600 text-sm leading-relaxed ${!isExpanded && needsExpand ? 'line-clamp-3' : ''}`}>
                      {doctor.bio}
                    </p>
                    {needsExpand && (
                      <button
                        onClick={() => toggleBio(doctor.id)}
                        className="text-blue-600 text-sm font-medium mt-2 hover:text-blue-800 transition-colors"
                      >
                        {isExpanded ? 'Ver menos' : 'Ver mais'}
                      </button>
                    )}
                  </div>

                  {/* Idiomas */}
                  {doctor.languages && doctor.languages.length > 1 && (
                    <div className="flex items-center justify-center gap-2 mb-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-gray-500">
                        {doctor.languages.join(', ')}
                      </span>
                    </div>
                  )}

                  {/* Botão Marcar Consulta */}
                  <button
                    onClick={() => openWhatsApp(doctor.name, doctor.title, doctor.specialties)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-4 rounded-full flex items-center justify-center gap-2 shadow-md flex-shrink-0 mt-auto"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Marcar Consulta
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Agende Sua Consulta com Nossos Especialistas
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nossa equipa está pronta para cuidar do seu sorriso com excelência e dedicação
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+351216041355"
              className="bg-white text-blue-600 px-8 py-4 rounded-full transition text-lg font-semibold inline-flex items-center shadow-lg"
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
            <Link
              to="/#contacto"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full transition text-lg font-semibold inline-flex items-center"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Enviar Email
            </Link>
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