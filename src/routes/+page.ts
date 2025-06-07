import type { PageLoad } from './$types';

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

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/data/news.json');
	const news: NewsItem[] = await response.json();
	
	// Sort news by date (newest first)
	const sortedNews = news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	
	return {
		news: sortedNews
	};
}; 