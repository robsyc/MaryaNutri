<script lang="ts">
    import type { PageData } from './$types';
    import ItemCard from '$lib/components/ItemCard.svelte';

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>Our products - MaryaNutri</title>
    <meta name="description" content="Our products are made from insects and are highly nutritious and sustainable food sources." />
</svelte:head>

<div class="container mb-12">
    <h1 class="text-4xl md:text-5xl font-bold pt-14 md:pt-10">Our products</h1>
    <p class="p-1 my-5">
        If you are interested in purchasing our products, please <a class="underline underline-offset-2 hover:text-primary duration-300" href="mailto:contact@maryanutri.com">contact us</a>.
        We will get back to you as soon as possible. 
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
        {#each data.products as product}
            <ItemCard 
                item={product} 
                type="product" 
                href="/products/{product.id}" 
            />
        {/each}
    </div>    
</div>