import { X, Check, Shield, BarChart3, Megaphone, Settings } from 'lucide-react';
import type { CookieCategory } from '../../types/cookie';

interface CookieSettingsModalProps {
  categories: CookieCategory[];
  onSave: (categories: CookieCategory[]) => void;
  onClose: () => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  updateCategory: (categoryId: string, enabled: boolean) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  necessary: <Shield size={20} />,
  analytics: <BarChart3 size={20} />,
  marketing: <Megaphone size={20} />,
  preferences: <Settings size={20} />,
};

export default function CookieSettingsModal({
  categories,
  onSave,
  onClose,
  onAcceptAll,
  onRejectAll,
  updateCategory,
}: CookieSettingsModalProps) {
  const handleSave = () => {
    onSave(categories);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Definicoes de Cookies
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Personalize as suas preferencias de privacidade
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
            <p className="text-sm text-blue-800">
              De acordo com o Regulamento Geral de Protecao de Dados (RGPD) e a 
              legislacao portuguesa, utilizamos cookies para melhorar a sua 
              experiencia. Pode escolher quais categorias de cookies deseja permitir.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`border rounded-xl p-4 transition-colors ${
                  category.enabled 
                    ? 'border-blue-200 bg-blue-50/30' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`p-2 rounded-lg ${
                      category.enabled 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {categoryIcons[category.id]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">
                          {category.name}
                        </h3>
                        {category.required && (
                          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                            Obrigatorio
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Toggle */}
                  <button
                    onClick={() => !category.required && updateCategory(category.id, !category.enabled)}
                    disabled={category.required}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      category.enabled 
                        ? 'bg-blue-600' 
                        : 'bg-gray-300'
                    } ${category.required ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                    aria-label={`${category.enabled ? 'Desativar' : 'Ativar'} ${category.name}`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        category.enabled ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2">
              Mais Informacoes
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Para mais detalhes sobre como utilizamos os seus dados, consulte a nossa 
              Politica de Privacidade e a Politica de Cookies.
            </p>
            <div className="flex gap-4">
              <a 
                href="/politica-privacidade" 
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                Politica de Privacidade
              </a>
              <a 
                href="/politica-cookies" 
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                Politica de Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onRejectAll}
              className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Rejeitar Todos
            </button>
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2.5 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Check size={18} />
              Guardar Preferencias
            </button>
            <button
              onClick={onAcceptAll}
              className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Aceitar Todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}