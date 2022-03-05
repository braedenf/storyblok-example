<script>
	import getComponent from './index';

	export let blok;
</script>

<div class="grid">
	{#each blok.columns as blok}
		<svelte:component this={getComponent(blok.component)} {blok} />
	{/each}
</div>
