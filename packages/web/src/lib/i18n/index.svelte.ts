import en from './en';
import zh from './zh';

export type Locale = 'en' | 'zh';

const translations: Record<Locale, typeof en> = { en, zh };

let locale = $state<Locale>('en');

export function initLocale() {
	if (typeof window === 'undefined') return;
	const saved = localStorage.getItem('cloakmail-locale') as Locale | null;
	if (saved === 'en' || saved === 'zh') {
		locale = saved;
	} else if (navigator.language.startsWith('zh')) {
		locale = 'zh';
	}
	document.documentElement.lang = locale;
}

export function getLocale(): Locale {
	return locale;
}

export function setLocale(l: Locale) {
	locale = l;
	if (typeof window !== 'undefined') {
		localStorage.setItem('cloakmail-locale', l);
		document.documentElement.lang = l;
	}
}

export function t(key: string, params?: Record<string, string | number>): string {
	const keys = key.split('.');
	let value: unknown = translations[locale];
	for (const k of keys) {
		value = (value as Record<string, unknown>)?.[k];
	}
	if (typeof value !== 'string') return key;
	if (params) {
		return value.replace(/\{(\w+)\}/g, (_, name) => String(params[name] ?? `{${name}}`));
	}
	return value;
}
