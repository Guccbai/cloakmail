<script lang="ts">
	import { getLocale, setLocale } from '$lib/i18n/index.svelte';

	function toggle() {
		setLocale(getLocale() === 'en' ? 'zh' : 'en');
	}
</script>

<button
	onclick={toggle}
	class="px-4 py-3 bg-white neo-border neo-shadow-sm text-sm font-bold hover:bg-yellow-400 transition-colors neo-button text-black"
>
	{getLocale() === 'en' ? '中文' : 'EN'}
</button>
