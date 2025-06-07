<script lang="ts">
    import { onMount } from 'svelte';
    import Autoplay from "embla-carousel-autoplay";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import ItemCard from '$lib/components/ItemCard.svelte';

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

    let { news = [] }: { news: NewsItem[] } = $props();

    // Create autoplay plugin instance
    const plugin = Autoplay({ delay: 4000, stopOnInteraction: true });

    // Take only the first 6 news items for the carousel
    const carouselNews = news.slice(0, 6);
</script>

<section class="py-20 bg-background">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Latest News & Events</h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated with our latest developments, research breakthroughs, and partnerships in our mission to end global malnutrition.
            </p>
        </div>

        {#if carouselNews.length > 0}
            <Carousel.Root
                plugins={[plugin]}
                class="w-full max-w-7xl mx-auto"
                opts={{
                    align: "start",
                    loop: true,
                }}
                onmouseenter={plugin.stop}
                onmouseleave={plugin.reset}
            >
                <Carousel.Content class="-ml-2 md:-ml-4 mb-4">
                    {#each carouselNews as article}
                        <Carousel.Item class="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                            <div class="p-1">
                                <ItemCard 
                                    item={article} 
                                    type="news" 
                                    href="/news/{article.id}" 
                                />
                            </div>
                        </Carousel.Item>
                    {/each}
                </Carousel.Content>
                <Carousel.Previous class="left-3 lg:-left-12 top-[35%] md:top-[37%] lg:top-1/2" />
                <Carousel.Next class="right-3 lg:-right-12 top-[35%] md:top-[37%] lg:top-1/2" />
            </Carousel.Root>

            <div class="text-center mt-6">
                <a 
                    href="/news" 
                    class="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
                >
                    View All News & Events
                    <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        {:else}
            <div class="text-center py-12">
                <p class="text-muted-foreground">No news items available at the moment.</p>
            </div>
        {/if}
    </div>
</section> 