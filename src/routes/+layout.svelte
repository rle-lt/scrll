<script lang="ts">
	import '$lib/styles/global.scss';
	import cn from 'clsx';
	import { themeStore } from '$lib/stores/theme';
	import Lenis from 'lenis';
	import { onMount } from 'svelte';
	import CustomHead from '$lib/components/CustomHead.svelte';
	let { children } = $props();

	onMount(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
		});
		lenis.on('scroll', (e) => {});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	});
</script>

<CustomHead
	title="scroll and other sveltekit boilerplate"
	keywords={['boilerplate', 'sveltekit', 'scroll', 'smooth scroll']}
/>
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
