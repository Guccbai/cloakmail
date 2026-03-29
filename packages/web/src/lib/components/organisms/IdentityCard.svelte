<script lang="ts">
	import Icon from '@iconify/svelte';
	import Badge from '$lib/components/atoms/Badge.svelte';
	import CopyButton from '$lib/components/atoms/CopyButton.svelte';
	import { t } from '$lib/i18n/index.svelte';

	interface Props {
		address: string;
		onrefresh?: () => void;
		ondelete?: () => void;
	}

	let { address, onrefresh, ondelete }: Props = $props();

	let prefix = $derived(address.split('@')[0]);
	let domain = $derived('@' + (address.split('@')[1] || 'cloakmail.com'));
</script>

<div class="bg-white neo-border neo-shadow p-6 md:p-8 relative overflow-hidden">
	<div class="relative z-10">
		<div class="flex items-center justify-between mb-6">
			<Badge variant="yellow">{t('identity.active')}</Badge>
			<Badge variant="green">
				<span class="flex items-center gap-2">
					<span class="w-2 h-2 bg-black inline-block"></span>
					{t('identity.live')}
				</span>
			</Badge>
		</div>

		<h2 class="text-xs font-bold text-black uppercase tracking-widest mb-4">{t('identity.yourIdentity')}</h2>

		<div class="mb-8 border-b-4 border-black pb-4">
			<div class="break-all text-3xl font-black tracking-tight leading-none mb-1">{prefix}</div>
			<div class="text-xl font-bold text-zinc-500">{domain}</div>
		</div>

		<div class="flex flex-col gap-4">
			<CopyButton text={address} class="w-full py-4 px-4" />

			<div class="grid grid-cols-2 gap-4">
				<button
					onclick={onrefresh}
					class="py-3 px-4 bg-white neo-border neo-shadow-sm font-bold hover:bg-zinc-100 text-black neo-button flex items-center justify-center gap-2"
				>
					<Icon icon="lucide:refresh-cw" class="text-lg" />
					<span>{t('common.refresh')}</span>
				</button>
				<button
					onclick={ondelete}
					class="py-3 px-4 bg-white neo-border neo-shadow-sm font-bold hover:bg-red-500 hover:text-white text-black neo-button flex items-center justify-center gap-2 group"
				>
					<Icon icon="lucide:trash-2" class="text-lg" />
					<span>{t('common.delete')}</span>
				</button>
			</div>
		</div>
	</div>
</div>
