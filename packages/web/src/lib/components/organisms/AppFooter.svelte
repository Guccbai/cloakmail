<script lang="ts">
	import { t } from '$lib/i18n/index.svelte';
</script>

<footer style="view-transition-name: main-footer" class="w-full max-w-6xl mt-12 py-6 border-t-4 border-black flex flex-col md:flex-row justify-between items-center text-sm font-bold text-black gap-4 uppercase tracking-wider">
	<div>{t('footer.builtWith')} <span class="text-red-600">&#9829;</span> {t('footer.by')} <a href="https://dreamshive.io" target="_blank" class="hover:bg-yellow-400 px-1 transition-colors" rel="dofollow">DreamsHive</a></div>
	<div class="flex gap-8">
		<a href="/privacy" class="hover:bg-yellow-400 px-1 transition-colors">{t('common.privacy')}</a>
		<a href="/terms" class="hover:bg-yellow-400 px-1 transition-colors">{t('common.terms')}</a>
		<a href="https://docs.cloakmail.dev" class="hover:bg-yellow-400 px-1 transition-colors">{t('common.docs')}</a>
	</div>
</footer>
