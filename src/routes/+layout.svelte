<script lang="ts">
	import '$lib/styles/global.scss';
	import { themeStore } from '$lib/stores/theme';

	import cn from 'clsx';

	let className = '';
	export { className as class };

	let { children } = $props();
</script>

<main class={cn(`theme-${$themeStore}`, 'layout', className)}>{@render children()}</main>

<style lang="scss">
	.layout {
		background-color: var(--dark);
		color: var(--dark);
	}
</style>
