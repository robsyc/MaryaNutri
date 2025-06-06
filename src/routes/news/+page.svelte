<script lang="ts">
    import type { PageData } from './$types';
    import ItemCard from '$lib/components/ItemCard.svelte';

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>News & Events - MaryaNutri</title>
    <meta name="description" content="Stay updated with the latest news, events, and developments from MaryaNutri's mission to end global malnutrition." />
</svelte:head>

<div class="container mb-12">
    <h1 class="text-4xl md:text-5xl font-bold pt-14 md:pt-10">News & Events</h1>
    <p class="p-1 my-5">
        Stay updated with the latest developments, research breakthroughs, and partnerships in our mission to end global malnutrition.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
        {#each data.news as article}
            <ItemCard 
                item={article} 
                type="news" 
                href="/news/{article.id}" 
            />
        {/each}
    </div>    
</div> 