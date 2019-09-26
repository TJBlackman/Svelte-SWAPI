

import { json, page, isLoading } from '../stores/store.js';
let p; 
page.subscribe(v => p = v); 

export const fetchPage = () => {
	console.log('fetching page...');

	isLoading.set(true);

	fetch(p, {
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(res => res.json())
		.then(res => {
			json.update(value => {
				value[p] = res; 
				return value; 
			});
			isLoading.set(false)
		})
		.catch(err => {
			console.log(err);
			isLoading.set(false)
		})
}; 