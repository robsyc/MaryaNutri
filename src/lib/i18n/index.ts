import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		// English translations
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./locales/en/common.json')).default,
		},
		{
			locale: 'en',
			key: 'nav',
			loader: async () => (await import('./locales/en/nav.json')).default,
		},
		{
			locale: 'en',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./locales/en/home.json')).default,
		},
		{
			locale: 'en',
			key: 'products',
			routes: ['/products'],
			loader: async () => (await import('./locales/en/products.json')).default,
		},
		{
			locale: 'en',
			key: 'news',
			routes: ['/news'],
			loader: async () => (await import('./locales/en/news.json')).default,
		},
		{
			locale: 'en',
			key: 'about',
			routes: ['/about'],
			loader: async () => (await import('./locales/en/about.json')).default,
		},

		// Dutch translations
		{
			locale: 'nl',
			key: 'common',
			loader: async () => (await import('./locales/nl/common.json')).default,
		},
		{
			locale: 'nl',
			key: 'nav',
			loader: async () => (await import('./locales/nl/nav.json')).default,
		},
		{
			locale: 'nl',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./locales/nl/home.json')).default,
		},
		{
			locale: 'nl',
			key: 'products',
			routes: ['/products'],
			loader: async () => (await import('./locales/nl/products.json')).default,
		},
		{
			locale: 'nl',
			key: 'news',
			routes: ['/news'],
			loader: async () => (await import('./locales/nl/news.json')).default,
		},
		{
			locale: 'nl',
			key: 'about',
			routes: ['/about'],
			loader: async () => (await import('./locales/nl/about.json')).default,
		},

		// French translations
		{
			locale: 'fr',
			key: 'common',
			loader: async () => (await import('./locales/fr/common.json')).default,
		},
		{
			locale: 'fr',
			key: 'nav',
			loader: async () => (await import('./locales/fr/nav.json')).default,
		},
		{
			locale: 'fr',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./locales/fr/home.json')).default,
		},
		{
			locale: 'fr',
			key: 'products',
			routes: ['/products'],
			loader: async () => (await import('./locales/fr/products.json')).default,
		},
		{
			locale: 'fr',
			key: 'news',
			routes: ['/news'],
			loader: async () => (await import('./locales/fr/news.json')).default,
		},
		{
			locale: 'fr',
			key: 'about',
			routes: ['/about'],
			loader: async () => (await import('./locales/fr/about.json')).default,
		},

		// Swahili translations
		{
			locale: 'sw',
			key: 'common',
			loader: async () => (await import('./locales/sw/common.json')).default,
		},
		{
			locale: 'sw',
			key: 'nav',
			loader: async () => (await import('./locales/sw/nav.json')).default,
		},
		{
			locale: 'sw',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./locales/sw/home.json')).default,
		},
		{
			locale: 'sw',
			key: 'products',
			routes: ['/products'],
			loader: async () => (await import('./locales/sw/products.json')).default,
		},
		{
			locale: 'sw',
			key: 'news',
			routes: ['/news'],
			loader: async () => (await import('./locales/sw/news.json')).default,
		},
		{
			locale: 'sw',
			key: 'about',
			routes: ['/about'],
			loader: async () => (await import('./locales/sw/about.json')).default,
		},
	],
	fallbackLocale: 'en',
	initLocale: 'en'
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

// Debug logging
if (typeof window !== 'undefined') {
	locale.subscribe((value) => {
		console.log('Locale changed to:', value);
	});
} 