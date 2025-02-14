<script lang="ts">
	import '$lib/styles/global.scss';

	let className = '';
	export { className as class };

	let { children } = $props();
</script>

{@render children()}
