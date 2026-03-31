const rawDomains = process.env.DOMAIN || "localhost";
const parsedDomains = rawDomains.split(",").map((d) => d.trim()).filter(Boolean);

const exactDomains: string[] = [];
const wildcardBaseDomains: string[] = [];

for (const d of parsedDomains) {
  if (d.startsWith("*.")) {
    wildcardBaseDomains.push(d.slice(2));
  } else {
    exactDomains.push(d);
  }
}

export const config = {
  smtpPort: Number(process.env.SMTP_PORT) || 25,
  apiPort: Number(process.env.API_PORT) || 3000,
  redisUrl: process.env.REDIS_URL || "redis://localhost:6379",
  emailTtlSeconds: Number(process.env.EMAIL_TTL_SECONDS) || 86400,
  domain: exactDomains[0] ?? wildcardBaseDomains[0] ?? "localhost",
  domains: exactDomains,
  wildcardBaseDomains,
  maxEmailSizeMb: Number(process.env.MAX_EMAIL_SIZE_MB) || 10,
};

export function isDomainAllowed(domain: string): boolean {
  if (config.domains.includes(domain)) return true;
  for (const base of config.wildcardBaseDomains) {
    if (domain.endsWith("." + base)) {
      const sub = domain.slice(0, -(base.length + 1));
      if (sub && !sub.includes(".")) return true;
    }
  }
  return false;
}
