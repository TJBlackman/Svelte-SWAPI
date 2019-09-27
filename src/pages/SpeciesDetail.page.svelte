<script>
	import { pageData } from '../stores/store.js'; 
</script>

<style>
	/* your styles go here */
</style>

<h2>Species Type: {$pageData.name}</h2>
<p>Classication: {$pageData.classification}</p>
<p>Designation: {$pageData.designation}</p>
<p>Height: {$pageData.average_height}</p>
<p>Skin Colors: {$pageData.skin_colors}</p>
<p>Hair Colors: {$pageData.hair_colors}</p>
<p>Eye Colors: {$pageData.eye_colors}</p>
<p>Life Span: {$pageData.average_lifespan}</p>
<p>Language: {$pageData.language}</p>