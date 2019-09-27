<script>
	import { pageData } from '../stores/store.js'; 
</script>

<style>
	/* your styles go here */
</style>

{#if pageData}
	 <!-- content here -->
{/if}
<h2>{$pageData.name}</h2>
<p>Height: {$pageData.height}</p>
<p>Mass: {$pageData.mass}</p>
<p>Hair: {$pageData.hair_color}</p>
<p>Skin: {$pageData.skin_color}</p>
<p>Eye: {$pageData.eye_color}</p>
<p>Gender: {$pageData.gender}</p>
<p>Height: {$pageData.height}</p>