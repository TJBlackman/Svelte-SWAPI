<script>
	import { onMount, afterUpdate } from 'svelte';
	import { page, isLoading, pageData } from '../stores/store.js'
	import { fetchPage } from '../utils/fetchPage.js';
	import { getCurrentPageElement } from '../utils/getPageData.js';

	import Spinner from './Spinner.svelte';

	let pageComponent;
	
	onMount(() => { 
		!$pageData && fetchPage();
		pageComponent = getCurrentPageElement($page)
	});

	afterUpdate(() => { 
		!$pageData && fetchPage();
		pageComponent = getCurrentPageElement($page)
	});
</script>

<style>
	/* your styles go here */
</style>

{#if $isLoading}
	<Spinner />
{:else}
	<svelte:component this={pageComponent}/>
{/if}
