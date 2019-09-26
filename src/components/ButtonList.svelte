<script>
	import { page } from '../stores/store.js';
	export let buttonArray = []; 
</script>

<style>
	button {
		cursor: pointer;
		display: block; 
		width: 100%; 
		padding: 10px; 
		text-align: left;
	}
</style>

<div>
	{#each buttonArray as {text, href}}
		<button type="button" on:click={() => page.set(href)}>
			<span>{text}</span>
		</button>
	{/each}
</div>