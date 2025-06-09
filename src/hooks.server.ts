import type { Handle } from '@sveltejs/kit';
import { loadTranslations } from '$lib/i18n';

export const handle: Handle = async ({ event, resolve }) => {
	const { url, request } = event;
	const { pathname } = url;

	// Try to get the locale from the `Accept-Language` header
	const acceptLanguageHeader = request.headers.get('accept-language');
	let locale = 'en';

	if (acceptLanguageHeader) {
		// Parse the Accept-Language header to get the preferred language
		const languages = acceptLanguageHeader.split(',').map(lang => {
			const [code, q = '1'] = lang.trim().split(';q=');
			return { code: code.split('-')[0], quality: parseFloat(q) };
		});
		
		// Sort by quality and find the first supported language
		languages.sort((a, b) => b.quality - a.quality);
		const supportedLocales = ['en', 'nl', 'fr', 'sw'];
		
		for (const lang of languages) {
			if (supportedLocales.includes(lang.code)) {
				locale = lang.code;
				break;
			}
		}
	}

	// Load translations for the detected locale
	await loadTranslations(locale, pathname);

	return resolve(event);
}; 