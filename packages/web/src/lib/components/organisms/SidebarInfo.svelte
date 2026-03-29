<script lang="ts">
	import Icon from '@iconify/svelte';
	import ProtocolRule from '$lib/components/molecules/ProtocolRule.svelte';
	import SafetyNotice from '$lib/components/molecules/SafetyNotice.svelte';
	import { APP_NAME } from '$lib/config';
	import { t } from '$lib/i18n/index.svelte';
</script>

<div class="lg:col-span-4 flex flex-col gap-8">
	<!-- New Identity Card -->
	<div class="bg-black text-white neo-border neo-shadow p-6 md:p-8">
		<h2 class="text-xl font-black uppercase mb-4 text-yellow-400">{t('sidebar.newIdentity')}</h2>
		<p class="text-sm font-medium leading-relaxed opacity-80">
			{t('sidebar.description')}
		</p>
	</div>

	<!-- Protocol Rules -->
	<div class="bg-white neo-border neo-shadow p-6">
		<h3 class="text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
			<Icon icon="lucide:info" class="text-lg" />
			{t('sidebar.protocolRules')}
		</h3>
		<ul class="flex flex-col gap-4 text-sm font-bold">
			<ProtocolRule color="bg-yellow-400" text={t('sidebar.rule1')} />
			<ProtocolRule color="bg-green-400" text={t('sidebar.rule2')} />
			<ProtocolRule color="bg-indigo-500" text={t('sidebar.rule3')} />
		</ul>
	</div>

	<SafetyNotice
		title={t('sidebar.safetyTitle')}
		message={t('sidebar.safetyMessage', { appName: APP_NAME })}
	/>
</div>
