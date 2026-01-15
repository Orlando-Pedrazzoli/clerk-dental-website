import { useState, useEffect, useCallback } from 'react';
import { 
  CookiePreferences, 
  CookieCategory, 
  defaultCookieCategories,
  COOKIE_STORAGE_KEY,
  COOKIE_CONSENT_VERSION 
} from '../types/cookie';

interface UseCookieConsentReturn {
  showBanner: boolean;
  showSettings: boolean;
  categories: CookieCategory[];
  preferences: CookiePreferences | null;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (categories: CookieCategory[]) => void;
  openSettings: () => void;
  closeSettings: () => void;
  closeBanner: () => void;
  updateCategory: (categoryId: string, enabled: boolean) => void;
}

export function useCookieConsent(): UseCookieConsentReturn {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [categories, setCategories] = useState<CookieCategory[]>(defaultCookieCategories);
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);

  // Carregar preferencias guardadas
  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
    
    if (stored) {
      try {
        const parsed: CookiePreferences = JSON.parse(stored);
        
        // Verificar se a versao do consentimento e atual
        if (parsed.consentVersion === COOKIE_CONSENT_VERSION) {
          setPreferences(parsed);
          
          // Atualizar categorias com as preferencias guardadas
          setCategories(prev => prev.map(cat => ({
            ...cat,
            enabled: cat.required || parsed[cat.id as keyof CookiePreferences] === true,
          })));
          
          setShowBanner(false);
        } else {
          // Versao diferente, pedir novo consentimento
          setShowBanner(true);
        }
      } catch {
        setShowBanner(true);
      }
    } else {
      // Sem consentimento guardado
      setShowBanner(true);
    }
  }, []);

  const saveToStorage = useCallback((prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
  }, []);

  const acceptAll = useCallback(() => {
    const newPreferences: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      consentDate: new Date().toISOString(),
      consentVersion: COOKIE_CONSENT_VERSION,
    };
    
    saveToStorage(newPreferences);
    setCategories(prev => prev.map(cat => ({ ...cat, enabled: true })));
    setShowBanner(false);
    setShowSettings(false);
    
    // Disparar evento para outros scripts
    window.dispatchEvent(new CustomEvent('cookieConsentUpdate', { detail: newPreferences }));
  }, [saveToStorage]);

  const rejectAll = useCallback(() => {
    const newPreferences: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
      consentDate: new Date().toISOString(),
      consentVersion: COOKIE_CONSENT_VERSION,
    };
    
    saveToStorage(newPreferences);
    setCategories(prev => prev.map(cat => ({ 
      ...cat, 
      enabled: cat.required 
    })));
    setShowBanner(false);
    setShowSettings(false);
    
    // Disparar evento para outros scripts
    window.dispatchEvent(new CustomEvent('cookieConsentUpdate', { detail: newPreferences }));
  }, [saveToStorage]);

  const savePreferences = useCallback((updatedCategories: CookieCategory[]) => {
    const newPreferences: CookiePreferences = {
      necessary: true,
      analytics: updatedCategories.find(c => c.id === 'analytics')?.enabled ?? false,
      marketing: updatedCategories.find(c => c.id === 'marketing')?.enabled ?? false,
      preferences: updatedCategories.find(c => c.id === 'preferences')?.enabled ?? false,
      consentDate: new Date().toISOString(),
      consentVersion: COOKIE_CONSENT_VERSION,
    };
    
    saveToStorage(newPreferences);
    setCategories(updatedCategories);
    setShowBanner(false);
    setShowSettings(false);
    
    // Disparar evento para outros scripts
    window.dispatchEvent(new CustomEvent('cookieConsentUpdate', { detail: newPreferences }));
  }, [saveToStorage]);

  const updateCategory = useCallback((categoryId: string, enabled: boolean) => {
    setCategories(prev => prev.map(cat => 
      cat.id === categoryId && !cat.required 
        ? { ...cat, enabled } 
        : cat
    ));
  }, []);

  const openSettings = useCallback(() => {
    setShowSettings(true);
  }, []);

  const closeSettings = useCallback(() => {
    setShowSettings(false);
  }, []);

  const closeBanner = useCallback(() => {
    setShowBanner(false);
  }, []);

  return {
    showBanner,
    showSettings,
    categories,
    preferences,
    acceptAll,
    rejectAll,
    savePreferences,
    openSettings,
    closeSettings,
    closeBanner,
    updateCategory,
  };
}