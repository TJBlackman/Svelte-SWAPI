<script>
	import { sayings } from '../assets/sayings.js'; 
	import { onMount } from 'svelte';

	let quote = '';
	let author = '';

	onMount(() => {
		let id = Math.floor(Math.random() * (sayings.length - 0 + 1) + 0);
		if (!sayings[id]){
			id = 0;
		}
		const saying = sayings[id].split(' — ');  
		quote = saying[0];
		author = saying[1];
	});

</script>

<style>
	p {
		width: 60%; 
		margin: 0 auto; 
		color: gray;
		margin-top: 20px; 
		min-width: 300px;
	}
	p:nth-child(2){
		text-align: right;
	}
</style>

<div>
	<p>{quote}</p>
	<p> — {author}</p>
</div>