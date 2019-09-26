<script>

	import { pageData, page } from '../stores/store.js'; 
	import ButtonList from '../components/ButtonList.svelte';

	let data = Object.entries($pageData).map(entry => {
		return {
			text: entry[0].substring(0,1).toUpperCase() + entry[0].substring(1),
			href: entry[1]
		};
	});
	
</script>

<style>

</style>

<h2>Resources Page</h2>
<ButtonList buttonArray={data} />
