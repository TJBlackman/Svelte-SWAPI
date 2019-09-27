<script>
	import { pageData } from '../stores/store.js'; 
</script>

<style>
	/* your styles go here */
</style>

<h2>{$pageData.name}</h2>
<p>Rotation Period: {$pageData.rotation_period}</p>
<p>Orbital Period: {$pageData.orbital_period}</p>
<p>Diameter: {$pageData.diameter}</p>
<p>Climate: {$pageData.climate}</p>
<p>Gravity: {$pageData.gravity}</p>
<p>Terrain: {$pageData.terrain}</p>
<p>Surface Water: {$pageData.surface_water}</p>
<p>Population: {$pageData.population}</p>