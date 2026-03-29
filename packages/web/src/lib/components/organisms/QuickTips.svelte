<script lang="ts">
	import { t } from '$lib/i18n/index.svelte';

	let tips = $derived([
		{ title: t('tips.secure'), text: t('tips.secureText') },
		{ title: t('tips.expiring'), text: t('tips.expiringText') },
		{ title: t('tips.anonymous'), text: t('tips.anonymousText') }
	]);
</script>

<div class="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
	{#each tips as tip}
		<div class="bg-zinc-100 p-6 neo-border border-zinc-300">
			<h4 class="font-black uppercase text-xs mb-2">{tip.title}</h4>
			<p class="text-sm font-medium">{tip.text}</p>
		</div>
	{/each}
</div>
