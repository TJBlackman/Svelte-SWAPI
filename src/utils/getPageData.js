import ResourcesPage from '../pages/resources.page.svelte'; 
import FilmsPage from '../pages/films.page.svelte'; 
import FilmsDetailPage from '../pages/filmdetails.page.svelte'

export let getCurrentPageElement = (page) => {
	if (page === 'https://swapi.co/api/')          { return ResourcesPage; }
	if (page === "https://swapi.co/api/films/")    { return FilmsPage;     }
	if (page === "https://swapi.co/api/people/")   { return FilmsPage;     }
	if (page === "https://swapi.co/api/planets/")  { return FilmsPage;     }
	if (page === "https://swapi.co/api/species/")  { return FilmsPage;     }
	if (page === "https://swapi.co/api/starships/"){ return FilmsPage;     }
	if (page === "https://swapi.co/api/vehicles/") { return FilmsPage;     }

	if (page.includes('https://swapi.co/api/films/')) { return FilmsDetailPage; }

	return null; 
};