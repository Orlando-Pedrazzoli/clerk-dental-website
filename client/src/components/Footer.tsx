import { Link } from 'react-router';
import CookieSettingsButton from './cookies/CookieSettingsButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Logo & Info Column */}
          <div className="lg:col-span-2">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-block">
              <img 
                src="/logo-colombo-nav.png" 
                alt="Centro Dentário Colombo" 
                className="h-14 w-auto"
                style={{ 
                  filter: 'grayscale(100%) brightness(200%) contrast(100%)',
                  mixBlendMode: 'screen'
                }}
              />
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-sm">
              Moderna clínica dentária no Centro Comercial Colombo. 
              Tratamentos de excelência com equipamentos de última geração.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://www.facebook.com/centrodentariocolombo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/centrodentariocolombo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/351216041355" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <a href="/#sobre" className="hover:text-blue-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/#tratamentos" className="hover:text-blue-400 transition-colors">
                  Tratamentos
                </a>
              </li>
              <li>
                <Link to="/corpo-clinico" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">
                  Corpo Clínico
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  Perguntas Frequentes
                  <span className="text-[10px] text-white bg-blue-600 rounded px-1.5 py-0.5 font-medium">
                    Novo
                  </span>
                </Link>
              </li>
              <li>
                <a href="/#contacto" className="hover:text-blue-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Tratamentos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tratamentos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/tratamentos/implantes-dentarios" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">
                  Implantes Dentários
                </Link>
              </li>
              <li>
                <Link to="/tratamentos/branqueamento-dentario" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">
                  Branqueamento
                </Link>
              </li>
              <li>
                <Link to="/tratamentos/ortodontia" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">
                  Ortodontia
                </Link>
              </li>
              <li>
                <Link to="/tratamentos/estetica-dentaria" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">
                  Estética Dentária
                </Link>
              </li>
              <li>
                <Link to="/tratamentos/proteses-dentarias" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">
                  Próteses Dentárias
                </Link>
              </li>
              <li>
                <a href="/#tratamentos" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  Ver todos →
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  C.C. Colombo<br />
                  Piso 1, Loja 507<br />
                  1500-392 Lisboa
                </span>
              </li>
              <li>
                <a href="tel:+351216041355" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +351 21 604 13 55
                </a>
              </li>
              <li>
                <a href="mailto:clinicadentaria.colombo@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors break-all">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">clinicadentaria.colombo@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  <span className="text-white font-medium">7 dias/semana</span><br />
                  10:00 - 22:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright & Legal Info */}
            <div className="text-center md:text-left">
              <p className="text-gray-500">
                © {currentYear} Centro Dentário Colombo - D. Amaral Assistência e Prevenção Dentária LDA
              </p>
              <p className="text-xs text-gray-600 mt-1">
                NIPC: 505887533 | Licença ERS: 3297/2011 | Registo ERS: E115139
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-500">
              <Link 
                to="/politica-privacidade" 
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-blue-400 transition-colors"
              >
                Política de Privacidade
              </Link>
              <span className="text-gray-700">|</span>
              <Link 
                to="/politica-cookies" 
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-blue-400 transition-colors"
              >
                Política de Cookies
              </Link>
              <span className="text-gray-700">|</span>
              <CookieSettingsButton className="text-gray-500 hover:text-blue-400 transition-colors" />
            </div>
          </div>

          {/* ERS Badge */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-lg">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-gray-400">
                Estabelecimento licenciado pela <span className="text-white font-medium">ERS - Entidade Reguladora da Saúde</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}