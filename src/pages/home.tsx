import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import WhatsAppButton from '../components/WhatsAppButton';
import PatientIDModal from '../components/PatientIDModal';
import PatientUserMenu from '../components/PatientUserMenu';
import { usePatientAuth } from '../hooks/usePatientAuth';
import { treatments } from '../data/services-data';

export default function HomePage() {
  const { isAuthenticated } = usePatientAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'pt' | 'en'>('pt');

  // Detectar scroll para mudar navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Função para scroll suave ao topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dividir tratamentos em 2 colunas para o dropdown
  const halfLength = Math.ceil(treatments.length / 2);
  const column1 = treatments.slice(0, halfLength);
  const column2 = treatments.slice(halfLength);

  // Função para trocar idioma
  const handleLanguageChange = (lang: 'pt' | 'en') => {
    setCurrentLanguage(lang);
    setLanguageDropdownOpen(false);
  };

  const languages = {
    pt: { name: 'Português', flag: '🇵🇹' },
    en: { name: 'English', flag: '🇺🇸' }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Modal de Login do Paciente */}
      {showPatientModal && (
        <PatientIDModal onClose={() => setShowPatientModal(false)} />
      )}

      {/* Botão WhatsApp Flutuante */}
      <WhatsAppButton />

      {/* Navbar - Otimizada para Mobile */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo + Texto - Responsivo */}
            <div className="flex-shrink-0 min-w-0">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
              >
                <img 
                  src="/logo-colombo-nav.png" 
                  alt="Centro Dentário Colombo Logo" 
                  className="h-8 w-auto sm:h-12 md:h-14 transition-transform group-hover:scale-105 flex-shrink-0"
                />
                <span className={`text-xs sm:text-lg md:text-xl lg:text-2xl font-bold transition-all leading-tight ${
                  scrolled 
                    ? 'bg-gradient-to-r from-[#14489c] to-[#006bb3] bg-clip-text text-transparent' 
                    : 'text-white drop-shadow-lg'
                }`}>
                  Centro Dentário Colombo
                </span>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#sobre" 
                className={`transition-all font-medium ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
                }`}
              >
                Sobre Nós
              </a>
              
              {/* Dropdown Tratamentos */}
              <div
                className="relative"
                onMouseEnter={() => setTreatmentsDropdownOpen(true)}
                onMouseLeave={() => setTreatmentsDropdownOpen(false)}
              >
                <button
                  onClick={() => setTreatmentsDropdownOpen(!treatmentsDropdownOpen)}
                  className={`transition-all font-medium flex items-center gap-1 py-2 ${
                    scrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  Tratamentos
                  <svg
                    className={`w-4 h-4 transition-transform ${treatmentsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu - 2 Colunas */}
                {treatmentsDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-[600px] z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-6 px-4 animate-fadeIn">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                        {/* Coluna 1 */}
                        <div className="space-y-1">
                          {column1.map((treatment) => (
                            <Link
                              key={treatment.id}
                              to={`/tratamentos/${treatment.slug}`}
                              onClick={() => {
                                setTreatmentsDropdownOpen(false);
                                window.scrollTo(0, 0);
                              }}
                              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition group"
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition"></span>
                                <span className="font-medium">{treatment.title}</span>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Coluna 2 */}
                        <div className="space-y-1">
                          {column2.map((treatment) => (
                            <Link
                              key={treatment.id}
                              to={`/tratamentos/${treatment.slug}`}
                              onClick={() => {
                                setTreatmentsDropdownOpen(false);
                                window.scrollTo(0, 0);
                              }}
                              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition group"
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition"></span>
                                <span className="font-medium">{treatment.title}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Footer do Dropdown */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <a
                          href="#contacto"
                          onClick={() => setTreatmentsDropdownOpen(false)}
                          className="block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-semibold"
                        >
                          Agendar Consulta
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/corpo-clinico" 
                className={`transition-all font-medium ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
                }`}
              >
                Corpo Clínico
              </Link>

              <a 
                href="#contacto" 
                className={`transition-all font-medium ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
                }`}
              >
                Contacto
              </a>

              {/* Ícone Admin Discreto */}
              <Link
                to="/admin/login"
                className={`transition-all p-2 ${
                  scrolled 
                    ? 'text-gray-400 hover:text-blue-600' 
                    : 'text-white/70 hover:text-white'
                }`}
                title="Acesso Administrativo"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </Link>

              {/* Área do Cliente */}
              {isAuthenticated ? (
                <PatientUserMenu />
              ) : (
                <button
                  onClick={() => setShowPatientModal(true)}
                  className={`px-6 py-2.5 rounded-full transition-all font-semibold shadow-lg hover:scale-105 transform duration-300 ${
                    scrolled
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-white text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Área do Cliente
                </button>
              )}

              {/* Language Selector */}
              <div
                className="relative"
                onMouseEnter={() => setLanguageDropdownOpen(true)}
                onMouseLeave={() => setLanguageDropdownOpen(false)}
              >
                <button
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className={`transition-all flex items-center gap-1 py-2 px-2 rounded-lg ${
                    scrolled 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-white hover:bg-white/10'
                  }`}
                  title={`Idioma: ${languages[currentLanguage].name}`}
                >
                  <span className="text-2xl">{languages[currentLanguage].flag}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Language Dropdown */}
                {languageDropdownOpen && (
                  <div className="absolute top-full right-0 pt-2 w-48 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fadeIn">
                      <button
                        onClick={() => handleLanguageChange('pt')}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition ${
                          currentLanguage === 'pt' ? 'bg-blue-50' : ''
                        }`}
                      >
                        <span className="text-2xl">{languages.pt.flag}</span>
                        <span className={`font-medium ${
                          currentLanguage === 'pt' ? 'text-blue-600' : 'text-gray-700'
                        }`}>
                          {languages.pt.name}
                        </span>
                        {currentLanguage === 'pt' && (
                          <svg className="w-5 h-5 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                      <button
                        onClick={() => handleLanguageChange('en')}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition ${
                          currentLanguage === 'en' ? 'bg-blue-50' : ''
                        }`}
                      >
                        <span className="text-2xl">{languages.en.flag}</span>
                        <span className={`font-medium ${
                          currentLanguage === 'en' ? 'text-blue-600' : 'text-gray-700'
                        }`}>
                          {languages.en.name}
                        </span>
                        {currentLanguage === 'en' && (
                          <svg className="w-5 h-5 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              {/* Language selector mobile - compacto */}
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className={`transition-all p-1.5 rounded-lg ${
                  scrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <span className="text-xl">{languages[currentLanguage].flag}</span>
              </button>

              {/* Menu hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`transition-all p-1 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
                }`}
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
            <div className="md:hidden pb-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl">
              <div className="flex flex-col space-y-3 px-4">
                <a
                  href="#sobre"
                  className="text-gray-700 hover:text-blue-600 transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sobre Nós
                </a>
                <a
                  href="#tratamentos"
                  className="text-gray-700 hover:text-blue-600 transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tratamentos
                </a>
                <Link
                  to="/corpo-clinico"
                  className="text-gray-700 hover:text-blue-600 transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Corpo Clínico
                </Link>
                <a
                  href="#contacto"
                  className="text-gray-700 hover:text-blue-600 transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </a>

                {/* Language Selector Mobile */}
                <div className="border-t pt-3">
                  <div className="text-gray-500 text-sm font-medium mb-2 px-2">Idioma / Language</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        handleLanguageChange('pt');
                        setMobileMenuOpen(false);
                      }}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition ${
                        currentLanguage === 'pt' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      title="Português"
                    >
                      <span className="text-xl">{languages.pt.flag}</span>
                      <span className="text-sm font-medium"></span>
                    </button>
                    <button
                      onClick={() => {
                        handleLanguageChange('en');
                        setMobileMenuOpen(false);
                      }}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition ${
                        currentLanguage === 'en' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      title="English"
                    >
                      <span className="text-xl">{languages.en.flag}</span>
                      <span className="text-sm font-medium"></span>
                    </button>
                  </div>
                </div>

                {/* Ícone Admin Mobile */}
                <Link
                  to="/admin/login"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Acesso Admin
                </Link>

                {/* Área do Cliente Mobile */}
                {isAuthenticated ? (
                  <div className="border-t pt-4">
                    <PatientUserMenu />
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setShowPatientModal(true);
                    }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition text-center font-semibold w-full mt-2"
                  >
                    Área do Cliente
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Language Dropdown Mobile (quando clica na bandeira) */}
          {languageDropdownOpen && (
            <div className="md:hidden absolute top-full right-3 mt-1 w-40 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
              <button
                onClick={() => {
                  handleLanguageChange('pt');
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 hover:bg-blue-50 transition ${
                  currentLanguage === 'pt' ? 'bg-blue-50' : ''
                }`}
              >
                <span className="text-xl">{languages.pt.flag}</span>
                <span className={`text-sm font-medium ${
                  currentLanguage === 'pt' ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  {languages.pt.name}
                </span>
              </button>
              <button
                onClick={() => {
                  handleLanguageChange('en');
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 hover:bg-blue-50 transition ${
                  currentLanguage === 'en' ? 'bg-blue-50' : ''
                }`}
              >
                <span className="text-xl">{languages.en.flag}</span>
                <span className={`text-sm font-medium ${
                  currentLanguage === 'en' ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  {languages.en.name}
                </span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Otimizada para Mobile */}
      <section id="inicio" className="relative h-screen min-h-[600px] sm:min-h-[700px] flex items-center overflow-hidden">
        {/* Vídeo de fundo */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>

        {/* Conteúdo - Totalmente Responsivo */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 md:pt-32">
          <div className="max-w-3xl">
            {/* Badge - Mobile Otimizado */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-2 sm:px-5 sm:py-2.5 mb-6 sm:mb-8">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">Aberto 7 dias por semana</span>
            </div>

            {/* Título principal - Mobile Responsivo */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
              O Seu Sorriso é a<br />
              Nossa <span className="text-blue-400">Prioridade</span>
            </h1>

            {/* Descrição - Mobile Otimizada */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 md:mb-12 leading-relaxed max-w-2xl">
              Moderna clínica dentária no Centro Comercial Colombo. Tratamentos de excelência 
              com equipamentos de última geração num ambiente caloroso e atencioso.
            </p>

            {/* CTAs - Stack em Mobile, Row em Desktop */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16">
              <a
                href="#contacto"
                className="group bg-blue-600 text-white px-5 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full hover:bg-blue-700 transition-all text-sm sm:text-lg font-semibold text-center shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transform duration-300 inline-flex items-center justify-center gap-2"
              >
                Marcar Consulta
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="tel:+351216041355"
                className="group bg-white/15 backdrop-blur-sm border-2 border-white/30 text-white px-5 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full hover:bg-white hover:text-gray-900 hover:border-white transition-all text-sm sm:text-lg font-semibold text-center shadow-xl inline-flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Ligar Agora
              </a>
            </div>

            {/* Features - Mobile Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-white">
              <div className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2.5 sm:bg-transparent sm:px-0 sm:py-0">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-medium">Marcações Flexíveis</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2.5 sm:bg-transparent sm:px-0 sm:py-0">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-medium">Equipamentos Modernos</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2.5 sm:bg-transparent sm:px-0 sm:py-0">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-medium">Profissionais Qualificados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">7</div>
              <div className="text-base">Dias por Semana</div>
              <div className="text-xs opacity-80">10h - 22h</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-base">Licenciado ERS</div>
              <div className="text-xs opacity-80">Qualidade Garantida</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">✓</div>
              <div className="text-base">Equipamento Moderno</div>
              <div className="text-xs opacity-80">Última Geração</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">★★★★★</div>
              <div className="text-base">Atendimento</div>
              <div className="text-xs opacity-80">Personalizado</div>
            </div>
          </div>
        </div>
      </section>

    {/* Sobre Section - Nova versão com imagem + conteúdo */}
      <section id="sobre" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sobre Nós
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Grid 2 colunas */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Coluna Esquerda - Imagem */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/sobre-colombo.jpg"
                  alt="Equipa Centro Dentário Colombo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge decorativo */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-8 py-4 rounded-xl shadow-xl">
                <p className="text-3xl font-bold">12+</p>
                <p className="text-sm">Anos de Experiência</p>
              </div>
            </div>

            {/* Coluna Direita - Conteúdo */}
            <div className="space-y-6">
              {/* Introdução */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Excelência em Cuidados Dentários no Colombo
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  O <span className="font-semibold text-blue-600">Centro Dentário Colombo</span> é uma moderna clínica dentária 
                  localizada no coração do Centro Comercial Colombo. Oferecemos uma ampla gama de tratamentos 
                  dentários cosméticos e gerais com equipamentos de última geração.
                </p>
              </div>

              {/* Features em grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {/* Feature 1 */}
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Tecnologia Avançada</h4>
                    <p className="text-sm text-gray-600">Equipamentos modernos e técnicas inovadoras</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Equipa Especializada</h4>
                    <p className="text-sm text-gray-600">Profissionais experientes e certificados</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Horário Flexível</h4>
                    <p className="text-sm text-gray-600">Aberto 7 dias por semana</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Ambiente Confortável</h4>
                    <p className="text-sm text-gray-600">Espaço moderno e acolhedor</p>
                  </div>
                </div>
              </div>

              {/* Destaque especial */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl shadow-lg mt-8">
                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Licenciados pela ERS</h4>
                    <p className="text-blue-100">
                      Estabelecimento licenciado pela Entidade Reguladora da Saúde com a licença nº 3297/2011. 
                      Garantimos os mais altos padrões de qualidade e segurança.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamentos Section - 16 CARDS */}
      <section id="tratamentos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Tratamentos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de tratamentos dentários com a mais alta qualidade e tecnologia de ponta
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment) => (
              <Link
                key={treatment.id}
                to={`/tratamentos/${treatment.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Imagem do Tratamento */}
                <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-white relative">
                  <img
                    src={treatment.bannerImage}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Conteúdo */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {treatment.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2">
                    {treatment.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {treatment.description}
                  </p>
                  
                  {/* Link Saber Mais */}
                  <div className="inline-flex items-center mt-4 text-blue-600 text-sm font-semibold hover:text-blue-700 transition group/link">
                    Saber mais
                    <svg
                      className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Estatísticas dos Tratamentos */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">16+</div>
                <div className="text-gray-600">Especialidades</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
                <div className="text-gray-600">Dias/Semana</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">ERS</div>
                <div className="text-gray-600">Certificado</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Precisa de um tratamento específico? Temos a solução ideal para si!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contacto"
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition text-lg font-semibold inline-flex items-center shadow-lg hover:shadow-xl"
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
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition text-lg font-semibold inline-flex items-center"
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
                  <button onClick={scrollToTop} className="text-gray-400 hover:text-white transition">
                    Início
                  </button>
                </li>
                <li>
                  <a href="#sobre" className="text-gray-400 hover:text-white transition">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#tratamentos" className="text-gray-400 hover:text-white transition">
                    Tratamentos
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
              <h4 className="font-bold mb-4">Tratamentos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Implantes Dentários</li>
                <li>Branqueamento</li>
                <li>Ortodontia</li>
                <li>Estética Dentária</li>
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