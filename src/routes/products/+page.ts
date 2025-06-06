import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/data/products.json');
	const products = await response.json();
	
	return {
		products
	};
}; 