import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import PatientIDModal from './PatientIDModal';
import PatientUserMenu from './PatientUserMenu';
import { usePatientAuth } from '../hooks/usePatientAuth';
import { treatments } from '../data/services-data';

interface Language {
  name: string;
  flag: string;
}

interface Languages {
  pt: Language;
  en: Language;
}

const languages: Languages = {
  pt: { name: 'Português', flag: '🇵🇹' },
  en: { name: 'English', flag: '🇺🇸' }
};

export default function Navbar() {
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

  return (
    <>
      {/* Modal de Login do Paciente */}
      {showPatientModal && (
        <PatientIDModal onClose={() => setShowPatientModal(false)} />
      )}

      {/* Navbar */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo + Texto - Responsivo */}
            <div className="flex-shrink-0 min-w-0 max-w-[60%] sm:max-w-none">
              <Link
                to="/"
                onClick={scrollToTop}
                className="flex items-center gap-2.5 sm:gap-3 md:gap-4 group cursor-pointer"
              >
                <img 
                  src="/logo-colombo-nav.png" 
                  alt="Centro Dentário Colombo Logo" 
                  className="h-9 w-auto sm:h-11 md:h-12 lg:h-14 transition-transform group-hover:scale-105 flex-shrink-0"
                />
                <span className={`text-[10px] xs:text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold transition-all leading-tight ${
                  scrolled 
                    ? 'bg-gradient-to-r from-[#14489c] to-[#006bb3] bg-clip-text text-transparent' 
                    : 'text-white drop-shadow-lg'
                }`}>
                  <span className="hidden sm:inline">Centro Dentário Colombo</span>
                  <span className="sm:hidden">CD Colombo</span>
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {/* Dropdown Tratamentos */}
              <div
                className="relative"
                onMouseEnter={() => setTreatmentsDropdownOpen(true)}
                onMouseLeave={() => setTreatmentsDropdownOpen(false)}
              >
                <button
                  onClick={() => setTreatmentsDropdownOpen(!treatmentsDropdownOpen)}
                  className={`transition-all font-medium flex items-center gap-1 py-2 text-sm xl:text-base ${
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
                onClick={() => window.scrollTo(0, 0)}
                className={`transition-all font-medium text-sm xl:text-base whitespace-nowrap ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
                }`}
              >
                Corpo Clínico
              </Link>

              <a 
                href="#contacto" 
                className={`transition-all font-medium text-sm xl:text-base ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
                }`}
              >
                Contacto
              </a>

              <Link 
                to="/faq" 
                onClick={() => window.scrollTo(0, 0)}
                className={`transition-all font-medium text-sm xl:text-base ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
                }`}
              >
                FAQ
              </Link>

              {/* Ícone Admin Discreto */}
              <Link
                to="/admin/login"
                onClick={() => window.scrollTo(0, 0)}
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
                  className={`px-4 xl:px-6 py-2 xl:py-2.5 rounded-full transition-all font-semibold shadow-lg hover:scale-105 transform duration-300 text-sm xl:text-base whitespace-nowrap ${
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
                  <span className="text-xl xl:text-2xl">{languages[currentLanguage].flag}</span>
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
            <div className="lg:hidden flex items-center gap-2">
              {/* Language selector mobile - compacto */}
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className={`transition-all p-1.5 rounded-lg ${
                  scrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <span className="text-lg">{languages[currentLanguage].flag}</span>
              </button>

              {/* Menu hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`transition-all p-1.5 ${
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
            <div className="lg:hidden pb-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl">
              <div className="flex flex-col space-y-3 px-4">
                <a
                  href="#tratamentos"
                  className="text-gray-700 hover:text-blue-600 transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tratamentos
                </a>
                <Link
                  to="/corpo-clinico"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-700 hover:text-blue-600 transition py-2 font-medium"
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
                <Link
                  to="/faq"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-700 hover:text-blue-600 transition py-2 font-medium flex items-center gap-2"
                >
                  Perguntas Frequentes
                  <span className="text-[10px] text-white bg-blue-600 rounded px-1.5 py-0.5 font-medium">
                    Novo
                  </span>
                </Link>

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
                      <span className="text-sm font-medium">PT</span>
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
                      <span className="text-sm font-medium">EN</span>
                    </button>
                  </div>
                </div>

                {/* Ícone Admin Mobile */}
                <Link
                  to="/admin/login"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition py-2 font-medium"
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
            <div className="lg:hidden absolute top-full right-3 mt-1 w-40 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
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
    </>
  );
}