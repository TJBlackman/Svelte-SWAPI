<script>
	import { onMount, afterUpdate } from 'svelte'; 
	import { page, pageData } from '../stores/store.js'; 

	let nav;

	let route; 
	page.subscribe(value => {
		route = value.replace("https://swapi.co/api",""); 
	}); 

	let lvlTwo;
	let lvlTwoText = '';
	let lvlTwoLink = ''; 

	let lvlThree;
	let lvlThreeText = ''; 

	const setValues = () => {
		if (!$pageData){ return; }
		lvlTwo = route.length > 1; 
		lvlThree = isNaN(parseInt(route[route.length-2])) === false;

		if (route.includes("/films/")) { 
			lvlTwoText = 'Films';
			lvlTwoLink = 'https://swapi.co/api/films/'
			if (lvlThree){
				lvlThreeText = $pageData.title;
			}
		}
		if (route.includes("/people/")) { 
			lvlTwoText = 'People'; 
			lvlTwoLink = 'https://swapi.co/api/people/'
			if (lvlThree){
				lvlThreeText = $pageData.name;
			}	
		}
		if (route.includes("/planets/"))   { 
			lvlTwoText = 'Planets';   
			lvlTwoLink = 'https://swapi.co/api/planets/'
			if (lvlThree){
				lvlThreeText = $pageData.name;
			}	
		}
		if (route.includes("/species/"))   { 
			lvlTwoText = 'Species';   
			lvlTwoLink = 'https://swapi.co/api/species/'
			if (lvlThree){
				lvlThreeText = $pageData.name;
			}	
		}
		if (route.includes("/starships/")) { 
			lvlTwoText = 'Starships'; 
			lvlTwoLink = 'https://swapi.co/api/starships/'
			if (lvlThree){
				lvlThreeText = $pageData.name;
			}	
		}
		if (route.includes("/vehicles/"))  { 
			lvlTwoText = 'Vehicles';  
			lvlTwoLink = 'https://swapi.co/api/vehicles/'
			if (lvlThree){
				lvlThreeText = $pageData.name;
			}	
		}
	}

	onMount(setValues);
	afterUpdate(setValues);

</script>

<style>
	/* your styles go here */
</style>

<div>
	<button type="button" on:click={() => page.set('https://swapi.co/api/')}>Resources</button>

	{#if lvlTwo}
		> <button type="button" on:click={() => page.set(lvlTwoLink)}>{lvlTwoText}</button>
	{/if}

	{#if lvlThree}
		> <b>{$pageData.name || $pageData.title}</b>
	{/if}

</div>