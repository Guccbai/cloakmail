import { env } from '$env/dynamic/public';

export const APP_NAME = env.PUBLIC_APP_NAME || 'CloakMail';

const rawDomains = env.PUBLIC_EMAIL_DOMAIN || 'cloakmail.com';
const parsed = rawDomains.split(',').map((d) => d.trim()).filter(Boolean);

const exactDomains: string[] = [];
const wildcardBases = new Set<string>();

for (const d of parsed) {
	if (d.startsWith('*.')) {
		wildcardBases.add(d.slice(2));
	} else {
		exactDomains.push(d);
	}
}

export const EMAIL_DOMAINS = [...new Set([...exactDomains, ...wildcardBases])];
export const EMAIL_DOMAIN = EMAIL_DOMAINS[0];
export const WILDCARD_DOMAINS = wildcardBases;
