<script lang="ts">
	import { t } from '$lib/i18n/index.svelte';

	interface Props {
		title?: string;
		message?: string;
		class?: string;
	}

	let {
		title = '',
		message = '',
		class: className = ''
	}: Props = $props();

	let displayTitle = $derived(title || t('safety.warning'));
	let displayMessage = $derived(message || t('safety.message'));
</script>

<div class="hidden lg:block p-6 bg-zinc-100 neo-border text-sm font-medium text-black leading-relaxed {className}">
	<p class="font-bold mb-2 uppercase text-red-600">{displayTitle}</p>
	<p>{displayMessage}</p>
</div>
