import { browser } from '$app/environment';

export const LOCALE_STORAGE_KEY = 'maryanutri-locale';

export function getStoredLocale(): string | null {
	if (!browser) return null;
	return localStorage.getItem(LOCALE_STORAGE_KEY);
}

export function setStoredLocale(locale: string): void {
	if (!browser) return;
	localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

export function detectBrowserLocale(): string {
	if (!browser) return 'en';
	
	const supportedLocales = ['en', 'nl', 'fr', 'sw'];
	const browserLang = navigator.language.split('-')[0];
	
	return supportedLocales.includes(browserLang) ? browserLang : 'en';
} 