<script lang="ts">
	import { APP_NAME } from '$lib/config';
	import { t } from '$lib/i18n/index.svelte';
</script>

<svelte:head>
	<title>{t('terms.title', { appName: APP_NAME })}</title>
</svelte:head>

<div class="w-full max-w-4xl mx-auto">
	<div class="bg-white neo-border neo-shadow p-8 md:p-12">
		<div class="mb-10 border-b-[3px] border-black pb-6">
			<h1 class="text-3xl md:text-4xl font-black uppercase tracking-tighter">{t('terms.heading')}</h1>
			<p class="text-sm font-bold text-zinc-500 uppercase mt-2">{t('terms.lastUpdated')}</p>
		</div>

		<div class="space-y-8 text-sm font-medium leading-relaxed text-zinc-700">
			<section>
				<h2 class="text-lg font-black uppercase mb-3 text-black">{t('terms.s1Title')}</h2>
				<p>{t('terms.s1Text', { appName: APP_NAME })}</p>
			</section>

			<section>
				<h2 class="text-lg font-black uppercase mb-3 text-black">{t('terms.s2Title')}</h2>
				<p class="mb-3">{t('terms.s2Intro', { appName: APP_NAME })}</p>
				<ul class="list-none space-y-2">
					<li class="flex items-start gap-3">
						<span class="w-2 h-2 bg-red-400 border border-black mt-1.5 shrink-0"></span>
						<span>{t('terms.s2Item1')}</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="w-2 h-2 bg-red-400 border border-black mt-1.5 shrink-0"></span>
						<span>{t('terms.s2Item2')}</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="w-2 h-2 bg-red-400 border border-black mt-1.5 shrink-0"></span>
						<span>{t('terms.s2Item3')}</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="w-2 h-2 bg-red-400 border border-black mt-1.5 shrink-0"></span>
						<span>{t('terms.s2Item4')}</span>
					</li>
				</ul>
			</section>

			<section>
				<h2 class="text-lg font-black uppercase mb-3 text-black">{t('terms.s3Title')}</h2>
				<p>{t('terms.s3Text', { appName: APP_NAME })}</p>
			</section>

			<section>
				<h2 class="text-lg font-black uppercase mb-3 text-black">{t('terms.s4Title')}</h2>
				<p>{t('terms.s4Text')}</p>
			</section>

			<section>
				<h2 class="text-lg font-black uppercase mb-3 text-black">{t('terms.s5Title')}</h2>
				<p>{t('terms.s5Text')}</p>
			</section>

			<section>
				<h2 class="text-lg font-black uppercase mb-3 text-black">{t('terms.s6Title')}</h2>
				<p>{t('terms.s6Text', { appName: APP_NAME })}</p>
			</section>

			<section>
				<h2 class="text-lg font-black uppercase mb-3 text-black">{t('terms.s7Title')}</h2>
				<p>{t('terms.s7Text')}</p>
			</section>
		</div>
	</div>
</div>
