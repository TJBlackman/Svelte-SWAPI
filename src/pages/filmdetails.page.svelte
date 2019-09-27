<script>
	import { pageData } from '../stores/store.js';
</script>

<style>
	/* your styles go here */
</style>

<h3>{$pageData.title}</h3>
<p>Directed By: {$pageData.director}</p>
<p>Realse Date: {$pageData.release_date}</p>

<p>{@html $pageData.opening_crawl}</p>