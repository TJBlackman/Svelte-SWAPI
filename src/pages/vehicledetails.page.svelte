<script>
	import { pageData } from '../stores/store.js'; 
</script>

<style>
	/* your styles go here */
</style>

<h2>{$pageData.name}</h2>
<p>Modal: {$pageData.model}</p>
<p>Manufacturer: {$pageData.manufacturer}</p>
<p>Class: {$pageData.vehicle_class}</p>
<p>Credit Price: {$pageData.cost_in_credits}</p>
<p>Length: {$pageData.length}</p>
<p>Minimum Crew: {$pageData.crew}</p>
<p>Max Passengers: {$pageData.passengers}</p>
<p>Cargo Capacity: {$pageData.cargo_capacity}</p>
