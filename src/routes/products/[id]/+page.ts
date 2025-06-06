import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

interface Product {
	id: string;
	title: string;
	description: string;
	image: string;
	category: string;
	nutritionalBenefits: string[];
	ingredients: string[];
	usage: string;
	targetAge: string;
	availability: string;
}

export const load: PageLoad = async ({ params, fetch }) => {
	const response = await fetch('/data/products.json');
	const products: Product[] = await response.json();
	
	const product = products.find(p => p.id === params.id);
	
	if (!product) {
		throw error(404, 'Product not found');
	}
	
	return {
		product
	};
}; 