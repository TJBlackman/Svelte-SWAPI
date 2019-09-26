<script>
	import { pageData } from '../stores/store';
	import ButtonList from '../components/ButtonList.svelte'; 
	console.log($pageData);

	let info = $pageData.results.map(i => ({
		href: i.url,
		text: i.title,
		id: i.episode_id
	})).sort((a, b) => {
		return a < b ? -1 : 1;
	}); 
</script>

<style>
	/* your styles go here */
</style>

<h2>Films Page</h2>
<ButtonList buttonArray={info} />