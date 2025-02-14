<script lang="ts">
	import '$lib/styles/global.scss';
	import { themeStore } from '$lib/stores/theme';

	import cn from 'clsx';

	let { children } = $props();
</script>

<main class={cn(`theme-${$themeStore}`, 'layout')}>{@render children()}</main>

<style lang="scss">
	.layout {
		display: flex;
		flex-direction: column;
		width: 100%;

		background-color: var(--theme-primary);
		color: var(--theme-secondary);
		
	}
</style>
