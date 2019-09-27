import ResourcesPage from '../pages/resources.page.svelte'; 
import FilmListPage from '../pages/films.page.svelte'; 
import FilmsDetailPage from '../pages/filmdetails.page.svelte';
import PeopleListPage from '../pages/people.page.svelte';
import PeopleDetailsPage from '../pages/peopledetails.page.svelte';
import PlanetDetailPage from '../pages/planetdetail.page.svelte';
import SpeciesDetailPage from '../pages/SpeciesDetail.page.svelte';
import StarshipDetailsPage from '../pages/starshipdetails.page.svelte'; 
import VehicleDetailsPage from '../pages/vehicledetails.page.svelte';

export let getCurrentPageElement = (page) => {
	
	if (page === 'https://swapi.co/api/')           { return ResourcesPage; }
	

	if (page === "https://swapi.co/api/films/") { return FilmListPage; }
	if (page.includes('https://swapi.co/api/films/')) { return FilmsDetailPage; }


	if (page.includes('https://swapi.co/api/people/')) { 
		if (page === "https://swapi.co/api/people/" || page.includes('page=')) { return PeopleListPage; }
		return PeopleDetailsPage; 
	}


	if (page.includes('https://swapi.co/api/planets/')) { 
		if (page === "https://swapi.co/api/planets/" || page.includes('page=')) { return PeopleListPage; }
		return PlanetDetailPage; 
	}


	if (page.includes('https://swapi.co/api/species/')) { 
		if (page === "https://swapi.co/api/species/" || page.includes('page=')) { return PeopleListPage; }
		return SpeciesDetailPage; 
	}


	if (page.includes('https://swapi.co/api/starships/')) { 
		if (page === "https://swapi.co/api/starships/" || page.includes('page=')) { return PeopleListPage; }
		return StarshipDetailsPage; 
	}


	if (page.includes('https://swapi.co/api/vehicles/'))  { 
		if (page === "https://swapi.co/api/vehicles/" || page.includes('page='))  { return PeopleListPage; }
		return VehicleDetailsPage; 
	}
	return null; 
};