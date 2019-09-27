<script>
	import { pageData, page } from '../stores/store.js'; 
	import ButtonList from '../components/ButtonList.svelte';

	let people; 
	pageData.subscribe(value => {
		if (!value || !value.results){ return []; }
		people = value.results.map(item => ({
			text: item.name,
			href: item.url
		})); 
	})
</script>

<style>
	.buttons {
		margin-top: 40px; 
		display: flex; 
		flex-flow: row wrap; 
		justify-content: space-between;
		align-items: center; 
	}
	.hidden {
		opacity: 0; 
	}
</style>

{#if $pageData}
	<ButtonList buttonArray={people} />

	<div class="buttons">
		{#if $pageData.previous}
			<button type="button" on:click={() => page.set($pageData.previous)}>Previous</button>
		{:else}
			<button class="hidden"></button>
		{/if}
		{#if $pageData.next}
			<button type="button" on:click={() => page.set($pageData.next)}>Next</button>
		{/if}
	</div>

{/if}