

import { json, page, isLoading } from '../stores/store.js';
let p; 
page.subscribe(v => p = v); 

export const fetchPage = () => {

	isLoading.set(true);


	let doneLoading = false; 
	let minimumTimeout = false;
	setTimeout(() => { minimumTimeout = true; }, 4000)
	const interval = setInterval(() => {
		if (minimumTimeout && doneLoading){
			isLoading.set(false); 
			clearInterval(interval); 
		}
	}, 500);

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
			doneLoading = true;
		})
		.catch(err => {
			console.log(err);
			doneLoading = true;
		})
}; 