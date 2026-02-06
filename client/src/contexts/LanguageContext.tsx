// src/contexts/LanguageContext.tsx

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Importar traduções
import pt from '../locales/pt.json';
import en from '../locales/en.json';

const translations: Record<Language, Record<string, any>> = { pt, en };

// Função para aceder a chaves nested tipo "navbar.treatments"
function getNestedValue(obj: Record<string, any>, path: string): string {
  const value = path.split('.').reduce((acc, key) => acc?.[key], obj);
  return typeof value === 'string' ? value : path; // retorna a key se não encontrar
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('lang');
    return (saved === 'en' ? 'en' : 'pt') as Language;
  });

  useEffect(() => {
    localStorage.setItem('lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return getNestedValue(translations[language], key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}