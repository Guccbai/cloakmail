const en = {
	common: {
		copied: 'Copied!',
		copy: 'Copy',
		copyAddress: 'Copy Address',
		generate: 'Generate',
		github: 'GitHub',
		refresh: 'Refresh',
		delete: 'Delete',
		privacy: 'Privacy',
		terms: 'Terms',
		docs: 'Docs'
	},
	footer: {
		builtWith: 'Built with',
		by: 'by'
	},
	home: {
		title: 'Generate Address - {appName}',
		heading: 'Address Generator',
		step: 'Step 01/02',
		choosePrefix: 'Choose your prefix',
		placeholder: 'e.g. shadow.walker',
		submit: 'Initialize Inbox',
		disclaimer: 'By clicking initialize, you agree to our fair usage policy.'
	},
	confirm: {
		title: 'Address Ready - {appName}',
		badge: 'Generated Successfully',
		heading: 'Your Identity is Ready',
		description:
			'This address is active and ready to receive mail. It will automatically self-destruct in 60 minutes.',
		openInbox: 'Open Inbox',
		generateNew: 'Generate New',
		encrypted: 'End-to-End Encrypted',
		zeroLogs: 'Zero Logs Policy'
	},
	inbox: {
		deleteConfirm: 'Delete all emails for {address}?',
		heading: 'Inbox',
		email: 'EMAIL',
		emails: 'EMAILS',
		newestFirst: 'Newest first',
		oldestFirst: 'Oldest first',
		toggleSort: 'Toggle sort order',
		waiting: 'Waiting for incoming mail...'
	},
	identity: {
		active: 'Active',
		live: 'LIVE',
		yourIdentity: 'Your Identity'
	},
	sidebar: {
		newIdentity: 'New Identity',
		description:
			'Generate a fresh, anonymous email address in seconds. Use it to dodge spam, sign up for one-off trials, or protect your primary inbox from data breaches.',
		protocolRules: 'Protocol Rules',
		rule1: 'Addresses expire after 60 minutes of inactivity.',
		rule2: 'Unlimited incoming emails while active.',
		rule3: 'Custom prefixes allowed for personalization.',
		safetyTitle: 'Safety Notice:',
		safetyMessage:
			'{appName} is for temporary use only. Do not use for sensitive account recovery or long-term storage.'
	},
	address: {
		disposableEmail: 'Disposable Email'
	},
	countdown: {
		selfDestruct: 'Self-Destruct In'
	},
	safety: {
		warning: 'Warning:',
		message:
			"This inbox is public. Don't use for banking. Emails are incinerated after 1 hour."
	},
	email: {
		justNow: 'JUST NOW',
		minAgo: '{n} MIN AGO',
		hrAgo: '{n} HR AGO',
		dayAgo: '{n} DAY AGO',
		content: 'Email content',
		from: 'From:'
	},
	tips: {
		secure: 'Secure',
		secureText: 'Public inboxes are visible to anyone. Use with caution for private data.',
		expiring: 'Expiring',
		expiringText: 'Everything is deleted after 60 minutes. Extended time coming soon.',
		anonymous: 'Anonymous',
		anonymousText: "We don't track your IP or browser fingerprints. You are a ghost."
	},
	privacy: {
		title: 'Privacy Policy - {appName}',
		heading: 'Privacy Policy',
		lastUpdated: 'Last updated: January 2026',
		s1Title: '1. Overview',
		s1Text:
			'{appName} is a disposable email service designed with privacy at its core. We collect the absolute minimum data required to operate the service and automatically delete all information after a defined retention period.',
		s2Title: '2. Data We Collect',
		s2Intro: 'When you use {appName}, the following data is temporarily stored:',
		s2Item1Label: 'Email content',
		s2Item1Text:
			'Incoming emails (sender, subject, body, headers) sent to your generated address.',
		s2Item2Label: 'Generated addresses',
		s2Item2Text: 'The temporary email addresses you create.',
		s3Title: '3. Data We Do Not Collect',
		s3Item1: 'No personal identification information (name, real email, phone number)',
		s3Item2: 'No IP address logging',
		s3Item3: 'No analytics or tracking cookies',
		s3Item4: 'No third-party tracking scripts',
		s4Title: '4. Data Retention',
		s4Text:
			'All email data is automatically and permanently deleted after the configured time-to-live (TTL) period. Once expired, data cannot be recovered. There are no backups or archives of expired data.',
		s5Title: '5. Third Parties',
		s5Text:
			'We do not sell, share, or transfer any data to third parties. Email content is stored exclusively in our infrastructure and is never accessed for advertising, profiling, or any purpose other than displaying it to you.',
		s6Title: '6. Cookies',
		s6Text:
			'{appName} does not use cookies. No session cookies, no tracking cookies, no third-party cookies.',
		s7Title: '7. Changes to This Policy',
		s7Text:
			'We may update this policy from time to time. Changes will be reflected on this page with an updated revision date.'
	},
	terms: {
		title: 'Terms of Service - {appName}',
		heading: 'Terms of Service',
		lastUpdated: 'Last updated: January 2026',
		s1Title: '1. Service Description',
		s1Text:
			'{appName} provides temporary, disposable email addresses for short-term use. The service is provided "as is" without warranties of any kind. Email addresses and their associated data are automatically deleted after the configured expiration period.',
		s2Title: '2. Acceptable Use',
		s2Intro: 'By using {appName}, you agree not to:',
		s2Item1: 'Use the service for illegal activities, harassment, or fraud',
		s2Item2: 'Send spam or unsolicited emails through the service',
		s2Item3: 'Attempt to disrupt or overload the service infrastructure',
		s2Item4: 'Use the service to circumvent security measures of other services',
		s3Title: '3. No Guarantees',
		s3Text:
			'We do not guarantee the delivery of any email. Emails may be delayed, filtered, or lost. Do not rely on {appName} for critical communications, account recovery, or any use case requiring reliable long-term email access.',
		s4Title: '4. Data Expiration',
		s4Text:
			'All data associated with generated email addresses is automatically and permanently deleted after the configured time-to-live period. We are not responsible for any data loss resulting from this automatic expiration. You acknowledge that this is a core feature of the service.',
		s5Title: '5. Abuse Policy',
		s5Text:
			'We reserve the right to block or remove any email address or content that violates these terms. Repeated abuse may result in IP-level restrictions. We may cooperate with law enforcement if required by applicable law.',
		s6Title: '6. Limitation of Liability',
		s6Text:
			'{appName} and its operators shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the service. Use the service at your own risk.',
		s7Title: '7. Changes to Terms',
		s7Text:
			'We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the updated terms.'
	}
};

export default en;
