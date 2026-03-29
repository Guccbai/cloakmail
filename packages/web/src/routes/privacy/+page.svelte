<script lang="ts">
	import { APP_NAME } from '$lib/config';
	import { t } from '$lib/i18n/index.svelte';
</script>

<svelte:head>
	<title>{t('privacy.title', { appName: APP_NAME })}</title>
</svelte:head>

<div class="w-full max-w-4xl mx-auto">
	<div class="bg-white neo-border neo-shadow p-8 md:p-12">
		<div class="mb-10 border-b-[3px] border-black pb-6">
			<h1 class="text-3xl md:text-4xl font-black uppercase tracking-tighter">{t('privacy.heading')}</h1>
			<p class="text-sm font-bold text-zinc-500 uppercase mt-2">{t('privacy.lastUpdated')}</p>
		</div>

		<div class="space-y-8 text-sm font-medium leading-relaxed text-zinc-700">
			<section>
				<h2 class="text-lg font-black uppercase mb-3 text-black">{t('privacy.s1Title')}</h2>
				<p>{t('privacy.s1Text', { appName: APP_NAME })}</p>
			</section>

			<section>
				<h2 class="text-lg font-black uppercase mb-3 text-black">{t('privacy.s2Title')}</h2>
				<p class="mb-3">{t('privacy.s2Intro', { appName: APP_NAME })}</p>
				<ul class="list-none space-y-2">
					<li class="flex items-start gap-3">
						<span class="w-2 h-2 bg-yellow-400 border border-black mt-1.5 shrink-0"></span>
						<span><strong class="text-black">{t('privacy.s2Item1Label')}</strong> — {t('privacy.s2Item1Text')}</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="w-2 h-2 bg-yellow-400 border border-black mt-1.5 shrink-0"></span>
						<span><strong class="text-black">{t('privacy.s2Item2Label')}</strong> — {t('privacy.s2Item2Text')}</span>
					</li>
				</ul>
			</section>

			<section>
				<h2 class="text-lg font-black uppercase mb-3 text-black">{t('privacy.s3Title')}</h2>
				<ul class="list-none space-y-2">
					<li class="flex items-start gap-3">
						<span class="w-2 h-2 bg-green-400 border border-black mt-1.5 shrink-0"></span>
						<span>{t('privacy.s3Item1')}</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="w-2 h-2 bg-green-400 border border-black mt-1.5 shrink-0"></span>
						<span>{t('privacy.s3Item2')}</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="w-2 h-2 bg-green-400 border border-black mt-1.5 shrink-0"></span>
						<span>{t('privacy.s3Item3')}</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="w-2 h-2 bg-green-400 border border-black mt-1.5 shrink-0"></span>
						<span>{t('privacy.s3Item4')}</span>
					</li>
				</ul>
			</section>

			<section>
				<h2 class="text-lg font-black uppercase mb-3 text-black">{t('privacy.s4Title')}</h2>
				<p>{t('privacy.s4Text')}</p>
			</section>

			<section>
				<h2 class="text-lg font-black uppercase mb-3 text-black">{t('privacy.s5Title')}</h2>
				<p>{t('privacy.s5Text')}</p>
			</section>

			<section>
				<h2 class="text-lg font-black uppercase mb-3 text-black">{t('privacy.s6Title')}</h2>
				<p>{t('privacy.s6Text', { appName: APP_NAME })}</p>
			</section>

			<section>
				<h2 class="text-lg font-black uppercase mb-3 text-black">{t('privacy.s7Title')}</h2>
				<p>{t('privacy.s7Text')}</p>
			</section>
		</div>
	</div>
</div>
