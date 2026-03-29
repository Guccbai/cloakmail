import { env } from '$env/dynamic/public';

export const APP_NAME = env.PUBLIC_APP_NAME || 'CloakMail';

const rawDomains = env.PUBLIC_EMAIL_DOMAIN || 'cloakmail.com';
export const EMAIL_DOMAINS = rawDomains.split(',').map((d) => d.trim()).filter(Boolean);
export const EMAIL_DOMAIN = EMAIL_DOMAINS[0];
