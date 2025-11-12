import { useState } from 'react';
import { UserButton, useUser } from '@clerk/react-router';
import { Link } from 'react-router';

export default function HomePage() {
  const { isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3 group">
                {/* Logo Image */}
                <img 
                  src="/logo-colombo-nav.png" 
                  alt="Centro Dentário Colombo Logo" 
                  className="h-12 w-auto md:h-14 transition-transform group-hover:scale-105"
                />
                {/* Text - Hidden on mobile, visible on tablet+ */}
                <span className="hidden sm:block text-xl md:text-2xl font-bold bg-gradient-to-r from-[#14489c] to-[#006bb3] bg-clip-text text-transparent transition-all ">
  Centro Dentário Colombo
</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition">
                Início
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition">
                Sobre Nós
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition">
                Serviços
              </a>
              <a href="#testemunhos" className="text-gray-700 hover:text-blue-600 transition">
                Testemunhos
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition">
                Contacto
              </a>
              
              {/* Área do Cliente */}
              {isSignedIn ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Área do Cliente</span>
                  <UserButton />
                </div>
              ) : (
                <Link
                  to="/sign-in"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  Área do Cliente
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#inicio"
                  className="text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Início
                </a>
                <a
                  href="#sobre"
                  className="text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sobre Nós
                </a>
                <a
                  href="#servicos"
                  className="text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Serviços
                </a>
                <a
                  href="#testemunhos"
                  className="text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testemunhos
                </a>
                <a
                  href="#contacto"
                  className="text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </a>
                {isSignedIn ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Área do Cliente</span>
                    <UserButton />
                  </div>
                ) : (
                  <Link
                    to="/sign-in"
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Área do Cliente
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                O Seu Sorriso é a Nossa Prioridade
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Moderna clínica dentária no Centro Comercial Colombo. Oferecemos tratamentos 
                dentários cosméticos e gerais com materiais e equipamentos de última geração 
                num ambiente caloroso e atencioso. Marcações flexíveis 7 dias por semana.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition text-lg font-semibold"
                >
                  Marcar Consulta
                </a>
                <a
                  href="tel:+351216041355"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition text-lg font-semibold"
                >
                  📞 Ligar Agora
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-96">
                <img
                  src="/hero-colombo.jpg"
                  alt="Dentista profissional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
<section className="py-10 bg-blue-600 text-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="text-4xl font-bold mb-2">7</div>
        <div className="text-lg">Dias por Semana</div>
        <div className="text-sm opacity-80 mt-1">10h - 22h</div>
      </div>
      <div>
        <div className="text-4xl font-bold mb-2">100%</div>
        <div className="text-lg">Licenciado ERS</div>
        <div className="text-sm opacity-80 mt-1">Qualidade Garantida</div>
      </div>
      <div>
        <div className="text-4xl font-bold mb-2">✓</div>
        <div className="text-lg">Equipamento Moderno</div>
        <div className="text-sm opacity-80 mt-1">Última Geração</div>
      </div>
      <div>
        <div className="text-4xl font-bold mb-2">★★★★★</div>
        <div className="text-lg">Atendimento</div>
        <div className="text-sm opacity-80 mt-1">Personalizado</div>
      </div>
    </div>
  </div>
</section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O Centro Dentário Colombo é uma moderna clínica dentária localizada no Centro Comercial Colombo. 
              Prestamos uma variedade de tratamentos dentários cosméticos e gerais, incluindo branqueamento de 
              dentes, coroas e implantes, usando os materiais e equipamentos mais recentes num ambiente caloroso 
              e atencioso. Disponibilizamos marcações flexíveis que se adaptam às necessidades do cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=300&fit=crop"
                  alt="Tecnologia dentária avançada"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Tecnologia Avançada
                </h3>
                <p className="text-gray-600">
                  Trabalhamos com as melhores tecnologias do mercado para garantir 
                  tratamentos de excelência e resultados duradouros.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=300&fit=crop"
                  alt="Equipa médica especializada"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Equipa Especializada
                </h3>
                <p className="text-gray-600">
                  Médicos dentistas e cirurgião maxilo-facial com vasta experiência 
                  e formação contínua nas melhores técnicas.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=500&h=300&fit=crop"
                  alt="Ambiente confortável"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Conforto Garantido
                </h3>
                <p className="text-gray-600">
                  Ambiente agradável, tranquilo e acolhedor. Durante a consulta pode 
                  ver televisão ou ouvir música.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de tratamentos dentários com a mais alta qualidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Implantes Dentários',
                description: 'Soluções permanentes e duradouras com materiais de última geração para substituir dentes perdidos.',
                icon: '🦷',
              },
              {
                title: 'Branqueamento Dentário',
                description: 'Tratamento cosmético para um sorriso mais branco e radiante com técnicas modernas e seguras.',
                icon: '✨',
              },
              {
                title: 'Coroas Dentárias',
                description: 'Restauração de dentes danificados com coroas de alta qualidade e aparência natural.',
                icon: '👑',
              },
              {
                title: 'Tratamentos Cosméticos',
                description: 'Melhore a estética do seu sorriso com facetas, lentes de contacto dentárias e mais.',
                icon: '😁',
              },
              {
                title: 'Dentisteria Geral',
                description: 'Tratamentos preventivos e curativos para manter a saúde oral de toda a família.',
                icon: '🏥',
              },
              {
                title: 'Urgências Dentárias',
                description: 'Atendimento rápido para situações urgentes. Aberto 7 dias por semana.',
                icon: '⚕️',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por Que Escolher o Centro Dentário Colombo?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Comprometidos com a excelência no atendimento e tratamento dentário
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Aberto 7 Dias</h3>
              <p>Segunda a Domingo das 10h às 22h. Marcações flexíveis adaptadas a si.</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Equipamentos Modernos</h3>
              <p>Materiais e equipamentos de última geração para tratamentos de excelência.</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Ambiente Acolhedor</h3>
              <p>Atmosfera calorosa e atenciosa para seu conforto e tranquilidade.</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Licenciado pela ERS</h3>
              <p>Estabelecimento registado e licenciado pela Entidade Reguladora da Saúde.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testemunhos Section */}
      <section id="testemunhos" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O Que Dizem Nossos Pacientes
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de transformação e satisfação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                  alt="Henriqueta Martins"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="font-bold text-gray-900">Henriqueta Martins</div>
                  <div className="text-gray-600 text-sm">Almada</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Além da parte técnica que correu muito bem, quero salientar o aspecto financeiro. 
                A clínica foi sensível à minha situação económica e através de um plano de tratamento 
                faseado, consegui em 3 meses ficar com uma boca completamente nova."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                  alt="António Silva"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="font-bold text-gray-900">António Silva</div>
                  <div className="text-gray-600 text-sm">Odivelas</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "A Dra. conseguiu resolver-me um problema que há muito me atormentava. 
                Já tinha passado por 2 consultórios e nunca tinha conseguido adaptar-me às próteses. 
                Foi impecável e agora ando muito mais apresentável."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Ricardo Costa"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="font-bold text-gray-900">Ricardo Costa</div>
                  <div className="text-gray-600 text-sm">Lisboa</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Com 29 anos ainda tinha um medo incontrolável do dentista. 
                A equipa compreendeu o meu medo e conseguiu que encarasse as idas ao dentista 
                de um modo muito menos stressante. Recomendo a todos os meus amigos."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Entre em Contacto</h2>
              <p className="text-xl text-gray-600 mb-8">
                Estamos prontos para cuidar do seu sorriso. Agende já a sua consulta!
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mt-1 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <div className="font-bold text-gray-900">Morada</div>
                    <div className="text-gray-600">Avenida Lusíada</div>
                    <div className="text-gray-600">Centro Comercial Colombo - Piso 1, Loja 507</div>
                    <div className="text-gray-600">1500-392 Lisboa, Portugal</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mt-1 mr-4"
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
                  <div>
                    <div className="font-bold text-gray-900">Telefone</div>
                    <a href="tel:+351216041355" className="text-blue-600 hover:underline">
                      +351 21 604 13 55
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mt-1 mr-4"
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
                  <div>
                    <div className="font-bold text-gray-900">Email</div>
                    <a href="mailto:clinicadentaria.colombo@gmail.com" className="text-blue-600 hover:underline">
                      clinicadentaria.colombo@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mt-1 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <div className="font-bold text-gray-900">Horário</div>
                    <div className="text-gray-600">Segunda a Domingo: 10:00 - 22:00</div>
                    <div className="text-green-600 font-semibold mt-1">✓ Aberto 7 dias por semana</div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                  <div className="font-bold text-gray-900 mb-2">Informação Legal</div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>D. Amaral Assistência e Prevenção Dentária LDA</div>
                    <div>NIPC: 505887533</div>
                    <div>Licença ERS: 3297/2011</div>
                    <div>Nº Registo ERS: E115139</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="O seu nome"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Telefone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="+351 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Centro Dentário Colombo</h3>
              <p className="text-gray-400 mb-4">
                Moderna clínica dentária no Centro Comercial Colombo
              </p>
              <div className="text-sm text-gray-400">
                <div>NIPC: 505887533</div>
                <div>Licença ERS: 3297/2011</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-gray-400 hover:text-white transition">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-gray-400 hover:text-white transition">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-gray-400 hover:text-white transition">
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#testemunhos"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Testemunhos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Implantes Dentários</li>
                <li>Branqueamento</li>
                <li>Coroas Dentárias</li>
                <li>Tratamentos Cosméticos</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>C.C. Colombo - Piso 1, Loja 507</li>
                <li>1500-392 Lisboa</li>
                <li>
                  <a href="tel:+351216041355" className="hover:text-white transition">
                    +351 21 604 13 55
                  </a>
                </li>
                <li>
                  <a href="mailto:clinicadentaria.colombo@gmail.com" className="hover:text-white transition break-all">
                    clinicadentaria.colombo@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Centro Dentário Colombo - D. Amaral Assistência e Prevenção Dentária LDA. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">
              Estabelecimento licenciado pela ERS - Entidade Reguladora da Saúde
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}