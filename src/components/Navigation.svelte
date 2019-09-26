<script>
	import { page } from '../stores/store.js'; 

	let nav; 
	
	switch($page){
		case 'https://swapi.co/api/': {
			nav = 'Resources';
			break;
		}
		default: nav = 'Poop';  
	}
</script>

<style>
	/* your styles go here */
</style>

<div>Navigation: {nav}</div>