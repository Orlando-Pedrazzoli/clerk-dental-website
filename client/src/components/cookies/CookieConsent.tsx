import { useState, useEffect } from 'react';
import { Cookie, Settings } from 'lucide-react';
import { useCookieConsent } from '../../hooks/useCookieConsent';
import CookieSettingsModal from './CookieSettingsModal';

export default function CookieConsent() {
  const {
    showBanner,
    showSettings,
    categories,
    acceptAll,
    rejectAll,
    savePreferences,
    openSettings,
    closeSettings,
    updateCategory,
  } = useCookieConsent();

  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Animacao de entrada
  useEffect(() => {
    if (showBanner) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, [showBanner]);

  // Animacao de saida
  const handleClose = (action: () => void) => {
    setIsExiting(true);
    setTimeout(() => {
      action();
      setIsExiting(false);
      setIsVisible(false);
    }, 300);
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Banner Principal */}
      {showBanner && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-[9998] p-4 transition-all duration-300 ${
            isVisible && !isExiting
              ? 'translate-y-0 opacity-100'
              : 'translate-y-full opacity-0'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Barra superior com gradiente */}
              <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700" />
              
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icone e Texto */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="hidden sm:flex bg-blue-100 p-3 rounded-xl">
                      <Cookie className="text-blue-600" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Este site utiliza cookies
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Utilizamos cookies e tecnologias semelhantes para melhorar a sua 
                        experiencia de navegacao, personalizar conteudo e anuncios, fornecer 
                        funcionalidades de redes sociais e analisar o nosso trafego. Ao clicar 
                        em "Aceitar Todos", consente a utilizacao de todos os cookies. Pode 
                        personalizar as suas preferencias clicando em "Definicoes".
                      </p>
                      <button
                        onClick={openSettings}
                        className="mt-2 text-sm text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                      >
                        Saber mais sobre a nossa politica de cookies
                      </button>
                    </div>
                  </div>

                  {/* Botoes */}
                  <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                    <button
                      onClick={() => handleClose(rejectAll)}
                      className="px-5 py-2.5 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all font-medium text-sm whitespace-nowrap"
                    >
                      Rejeitar Todos
                    </button>
                    <button
                      onClick={openSettings}
                      className="px-5 py-2.5 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all font-medium text-sm flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <Settings size={16} />
                      Definicoes
                    </button>
                    <button
                      onClick={() => handleClose(acceptAll)}
                      className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium text-sm whitespace-nowrap shadow-lg shadow-blue-600/20"
                    >
                      Aceitar Todos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Definicoes */}
      {showSettings && (
        <CookieSettingsModal
          categories={categories}
          onSave={savePreferences}
          onClose={closeSettings}
          onAcceptAll={acceptAll}
          onRejectAll={rejectAll}
          updateCategory={updateCategory}
        />
      )}
    </>
  );
}