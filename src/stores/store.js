import { writable, derived } from 'svelte/store'; 
import { set_custom_element_data } from 'svelte/internal';

export const page      = writable('https://swapi.co/api/');
export const json      = writable({});
export const isLoading = writable(false);

export const pageData = derived([page, json], ([$page, $json]) => {
	return $json[$page] || null; 	
});
