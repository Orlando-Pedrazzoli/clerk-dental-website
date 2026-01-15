import { useState } from 'react';
import { Cookie } from 'lucide-react';
import CookieSettingsModal from './CookieSettingsModal';
import { useCookieConsent } from '../../hooks/useCookieConsent';

interface CookieSettingsButtonProps {
  className?: string;
  variant?: 'text' | 'button' | 'icon';
}

export default function CookieSettingsButton({ 
  className = '', 
  variant = 'text' 
}: CookieSettingsButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const { 
    categories, 
    acceptAll, 
    rejectAll, 
    savePreferences,
    updateCategory 
  } = useCookieConsent();

  const handleSave = (cats: typeof categories) => {
    savePreferences(cats);
    setShowModal(false);
  };

  if (variant === 'icon') {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          className={`p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors ${className}`}
          aria-label="Gerir cookies"
          title="Gerir cookies"
        >
          <Cookie size={20} />
        </button>
        
        {showModal && (
          <CookieSettingsModal
            categories={categories}
            onSave={handleSave}
            onClose={() => setShowModal(false)}
            onAcceptAll={() => { acceptAll(); setShowModal(false); }}
            onRejectAll={() => { rejectAll(); setShowModal(false); }}
            updateCategory={updateCategory}
          />
        )}
      </>
    );
  }

  if (variant === 'button') {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          className={`inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors ${className}`}
        >
          <Cookie size={16} />
          Gerir Cookies
        </button>
        
        {showModal && (
          <CookieSettingsModal
            categories={categories}
            onSave={handleSave}
            onClose={() => setShowModal(false)}
            onAcceptAll={() => { acceptAll(); setShowModal(false); }}
            onRejectAll={() => { rejectAll(); setShowModal(false); }}
            updateCategory={updateCategory}
          />
        )}
      </>
    );
  }

  // Default: text variant
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`text-sm text-gray-500 hover:text-gray-700 hover:underline transition-colors ${className}`}
      >
        Gerir Cookies
      </button>
      
      {showModal && (
        <CookieSettingsModal
          categories={categories}
          onSave={handleSave}
          onClose={() => setShowModal(false)}
          onAcceptAll={() => { acceptAll(); setShowModal(false); }}
          onRejectAll={() => { rejectAll(); setShowModal(false); }}
          updateCategory={updateCategory}
        />
      )}
    </>
  );
}