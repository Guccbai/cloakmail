const zh = {
	common: {
		copied: '已复制！',
		copy: '复制',
		copyAddress: '复制地址',
		generate: '生成',
		github: 'GitHub',
		refresh: '刷新',
		delete: '删除',
		privacy: '隐私政策',
		terms: '服务条款',
		docs: '文档'
	},
	footer: {
		builtWith: '用心构建',
		by: '来自'
	},
	home: {
		title: '生成地址 - {appName}',
		heading: '地址生成器',
		step: '步骤 01/02',
		choosePrefix: '选择你的前缀',
		placeholder: '例如 shadow.walker',
		subdomainPlaceholder: '自定义',
		subdomainHint: '可选：添加自定义子域名以个性化地址',
		submit: '初始化收件箱',
		disclaimer: '点击初始化即表示您同意我们的使用规范。'
	},
	confirm: {
		title: '地址就绪 - {appName}',
		badge: '生成成功',
		heading: '你的身份已就绪',
		description: '该地址已激活，可以接收邮件。它将在 60 分钟后自动销毁。',
		openInbox: '打开收件箱',
		generateNew: '生成新地址',
		encrypted: '端到端加密',
		zeroLogs: '零日志策略'
	},
	inbox: {
		deleteConfirm: '删除 {address} 的所有邮件？',
		heading: '收件箱',
		email: '封邮件',
		emails: '封邮件',
		newestFirst: '最新优先',
		oldestFirst: '最旧优先',
		toggleSort: '切换排序',
		waiting: '等待接收邮件...'
	},
	identity: {
		active: '活跃',
		live: '在线',
		yourIdentity: '你的身份'
	},
	sidebar: {
		newIdentity: '新身份',
		description:
			'几秒内生成一个全新的匿名邮箱地址。用它来屏蔽垃圾邮件、注册一次性试用，或保护你的主邮箱免受数据泄露。',
		protocolRules: '使用规则',
		rule1: '地址在 60 分钟无活动后过期。',
		rule2: '活跃期间可接收无限邮件。',
		rule3: '支持自定义前缀和子域名以个性化地址。',
		safetyTitle: '安全提示：',
		safetyMessage: '{appName} 仅供临时使用。请勿用于敏感账户恢复或长期存储。'
	},
	address: {
		disposableEmail: '临时邮箱'
	},
	countdown: {
		selfDestruct: '自动销毁倒计时'
	},
	safety: {
		warning: '警告：',
		message: '此收件箱是公开的。请勿用于银行业务。邮件将在 1 小时后销毁。'
	},
	email: {
		justNow: '刚刚',
		minAgo: '{n} 分钟前',
		hrAgo: '{n} 小时前',
		dayAgo: '{n} 天前',
		content: '邮件内容',
		from: '发件人：'
	},
	tips: {
		secure: '安全',
		secureText: '公共收件箱对所有人可见。处理私密数据时请谨慎使用。',
		expiring: '限时',
		expiringText: '所有内容将在 60 分钟后删除。延长时间功能即将推出。',
		anonymous: '匿名',
		anonymousText: '我们不追踪你的 IP 或浏览器指纹。你是一个幽灵。'
	},
	privacy: {
		title: '隐私政策 - {appName}',
		heading: '隐私政策',
		lastUpdated: '最后更新：2026 年 1 月',
		s1Title: '1. 概述',
		s1Text:
			'{appName} 是一项以隐私为核心设计的一次性邮件服务。我们仅收集运营服务所需的最少数据，并在设定的保留期限后自动删除所有信息。',
		s2Title: '2. 我们收集的数据',
		s2Intro: '当您使用 {appName} 时，以下数据将被临时存储：',
		s2Item1Label: '邮件内容',
		s2Item1Text: '发送到您生成地址的邮件（发件人、主题、正文、邮件头）。',
		s2Item2Label: '生成的地址',
		s2Item2Text: '您创建的临时邮箱地址。',
		s3Title: '3. 我们不收集的数据',
		s3Item1: '不收集个人身份信息（姓名、真实邮箱、电话号码）',
		s3Item2: '不记录 IP 地址',
		s3Item3: '不使用分析或追踪 Cookie',
		s3Item4: '不使用第三方追踪脚本',
		s4Title: '4. 数据保留',
		s4Text:
			'所有邮件数据在配置的生存时间（TTL）到期后将被自动永久删除。过期后数据无法恢复。我们不对过期数据进行备份或存档。',
		s5Title: '5. 第三方',
		s5Text:
			'我们不会向第三方出售、共享或转让任何数据。邮件内容仅存储在我们的基础设施中，除向您展示外不会用于广告、画像或任何其他目的。',
		s6Title: '6. Cookie',
		s6Text: '{appName} 不使用 Cookie。没有会话 Cookie、没有追踪 Cookie、没有第三方 Cookie。',
		s7Title: '7. 政策变更',
		s7Text: '我们可能会不时更新此政策。变更将反映在此页面上，并附有更新的修订日期。'
	},
	terms: {
		title: '服务条款 - {appName}',
		heading: '服务条款',
		lastUpdated: '最后更新：2026 年 1 月',
		s1Title: '1. 服务描述',
		s1Text:
			'{appName} 提供用于短期使用的临时一次性邮箱地址。服务按"现状"提供，不附带任何形式的保证。邮箱地址及其关联数据将在配置的过期时间后自动删除。',
		s2Title: '2. 可接受的使用',
		s2Intro: '使用 {appName} 即表示您同意不会：',
		s2Item1: '将服务用于非法活动、骚扰或欺诈',
		s2Item2: '通过服务发送垃圾邮件或未经请求的邮件',
		s2Item3: '试图破坏或使服务基础设施过载',
		s2Item4: '使用服务绕过其他服务的安全措施',
		s3Title: '3. 不保证',
		s3Text:
			'我们不保证任何邮件的送达。邮件可能会延迟、被过滤或丢失。请勿依赖 {appName} 进行关键通信、账户恢复或任何需要可靠长期邮箱访问的用途。',
		s4Title: '4. 数据过期',
		s4Text:
			'与生成的邮箱地址关联的所有数据将在配置的生存时间到期后自动永久删除。我们不对此自动过期导致的任何数据丢失负责。您确认这是服务的核心功能。',
		s5Title: '5. 滥用政策',
		s5Text:
			'我们保留阻止或删除任何违反这些条款的邮箱地址或内容的权利。反复滥用可能导致 IP 级别的限制。如适用法律要求，我们可能与执法部门合作。',
		s6Title: '6. 责任限制',
		s6Text:
			'{appName} 及其运营者不对因使用或无法使用服务而产生的任何直接、间接、附带或后果性损害承担责任。使用服务的风险由您自行承担。',
		s7Title: '7. 条款变更',
		s7Text: '我们保留随时修改这些条款的权利。在变更后继续使用服务即表示接受更新后的条款。'
	}
};

export default zh;
