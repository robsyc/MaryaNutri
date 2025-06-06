import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

interface NewsItem {
	id: string;
	title: string;
	excerpt: string;
	content: string;
	image: string;
	date: string;
	category: string;
	author: string;
	tags: string[];
	externalLink: string | null;
}

export const load: PageLoad = async ({ params, fetch }) => {
	const response = await fetch('/data/news.json');
	const news: NewsItem[] = await response.json();
	
	const article = news.find(n => n.id === params.id);
	
	if (!article) {
		throw error(404, 'Article not found');
	}
	
	return {
		article
	};
}; 