import Translations from '../translation/Translations';

interface LocalUser {
  username?: string | null;
  email?: string | null;
  roles?: Array<string> | null;
}

export function getUser(): LocalUser {
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const roles = localStorage.getItem('roles')?.split(';');
  return { username, email, roles };
}

export function logout(): void {
  localStorage.removeItem('username');
  localStorage.removeItem('email');
  localStorage.removeItem('roles');
  localStorage.removeItem('accessToken');
}

export const getNavigatorLanguage = (): string => {
  const supportedLanguages = ['pt', 'en'];
  const userLanguage = navigator.language.split(/[-_]/)[0];

  return supportedLanguages.includes(userLanguage) ? userLanguage : 'en';
};

export const getTranslations = (): Record<string, string> => {
  type T = 'en' | 'pt';
  const userLanguage: T = navigator.language.split(/[-_]/)[0] as T;
  const translations = {
    en: Translations.en,
    pt: Translations.pt,
    default: Translations.en,
  };
  return Object.keys(translations).includes(userLanguage)
    ? translations[userLanguage]
    : translations.default;
};
