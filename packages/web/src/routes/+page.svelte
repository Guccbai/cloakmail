<script lang="ts">
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import SidebarInfo from '$lib/components/organisms/SidebarInfo.svelte';
	import { generateRandomPrefix } from '$lib/utils/generateAddress';
	import { APP_NAME, EMAIL_DOMAINS, WILDCARD_DOMAINS } from '$lib/config';
	import { t } from '$lib/i18n/index.svelte';

	let prefix = $state(generateRandomPrefix());
	let selectedDomain = $state(EMAIL_DOMAINS[0]);
	let subdomain = $state('');
	let multiDomain = EMAIL_DOMAINS.length > 1;

	let showSubdomain = $derived(WILDCARD_DOMAINS.has(selectedDomain));

	function regenerate() {
		prefix = generateRandomPrefix();
	}

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		const trimmed = prefix.trim();
		if (!trimmed) return;

		const sub = subdomain.trim().toLowerCase();
		if (sub && !/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/.test(sub)) return;

		const domain = sub ? `${sub}.${selectedDomain}` : selectedDomain;
		const address = `${trimmed}@${domain}`;
		goto(`/confirm/${encodeURIComponent(address)}`);
	}
</script>

<svelte:head>
	<title>{t('home.title', { appName: APP_NAME })}</title>
</svelte:head>

<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
	<SidebarInfo />

	<!-- Address Generator Form -->
	<div class="lg:col-span-8 bg-white neo-border neo-shadow flex flex-col grow">
		<div class="p-4 md:p-6 border-b-[3px] border-black flex justify-between items-center bg-zinc-50">
			<h2 class="text-xl font-black uppercase">{t('home.heading')}</h2>
			<div class="bg-yellow-400 border-2 border-black px-3 py-1 text-xs font-black uppercase">{t('home.step')}</div>
		</div>

		<div class="grow p-6 md:p-12 lg:p-16 flex flex-col justify-center items-center">
			<form onsubmit={handleSubmit} class="w-full max-w-xl space-y-8">
				<!-- Prefix Input -->
				<div>
					<label for="prefix-input" class="block text-xs font-black uppercase tracking-widest mb-3">
						{t('home.choosePrefix')}
					</label>
					<div class="flex gap-4">
						<div class="grow flex border-[3px] border-black bg-white neo-shadow-sm">
							<input
								id="prefix-input"
								type="text"
								bind:value={prefix}
								class="w-full p-4 font-bold text-xl outline-none bg-transparent placeholder:text-zinc-300"
								placeholder={t('home.placeholder')}
							/>
							<div class="flex items-center border-l-[3px] border-black bg-zinc-100">
								<span class="pl-3 font-black text-zinc-500">@</span>
								{#if showSubdomain}
									<input
										type="text"
										bind:value={subdomain}
										pattern="[a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?"
										maxlength="63"
										class="w-20 md:w-24 py-4 pl-1 bg-zinc-100 font-bold text-zinc-700 outline-none placeholder:text-zinc-300 placeholder:font-normal"
										placeholder={t('home.subdomainPlaceholder')}
									/>
									<span class="font-black text-zinc-400">.</span>
								{/if}
								{#if multiDomain}
									<select
										bind:value={selectedDomain}
										class="pr-3 pl-1 py-4 bg-zinc-100 font-black text-zinc-500 outline-none cursor-pointer appearance-auto"
									>
										{#each EMAIL_DOMAINS as domain}
											<option value={domain}>{domain}</option>
										{/each}
									</select>
								{:else}
									<span class="pr-4 pl-1 font-black text-zinc-500">{selectedDomain}</span>
								{/if}
							</div>
						</div>
						<button
							type="button"
							onclick={regenerate}
							class="aspect-square w-16 flex items-center justify-center bg-white border-[3px] border-black neo-shadow-sm neo-button hover:bg-yellow-400 transition-colors group"
						>
							<Icon icon="lucide:refresh-cw" class="text-2xl group-active:rotate-180 transition-transform duration-300" />
						</button>
					</div>
					{#if showSubdomain}
						<p class="mt-2 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
							{t('home.subdomainHint')}
						</p>
					{/if}
				</div>

				<!-- Submit -->
				<div class="pt-8">
					<button
						type="submit"
						class="w-full flex items-center justify-center gap-3 bg-yellow-400 border-[3px] border-black p-6 neo-shadow neo-button text-2xl font-black uppercase tracking-tighter hover:bg-yellow-300 transition-colors"
					>
						<span>{t('home.submit')}</span>
						<Icon icon="lucide:zap" class="text-3xl" />
					</button>
					<p class="text-center mt-6 text-[10px] font-black uppercase text-zinc-400 tracking-widest">
						{t('home.disclaimer')}
					</p>
				</div>
			</form>
		</div>
	</div>
</div>
