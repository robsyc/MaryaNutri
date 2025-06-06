<script lang="ts">
    import type { PageData } from './$types';
    import { Button } from '$lib/components/ui/button';
    import { ArrowLeft, Mail } from 'lucide-svelte';

    let { data }: { data: PageData } = $props();
    const { product } = data;
</script>

<svelte:head>
    <title>{product.title} - MaryaNutri</title>
    <meta name="description" content={product.description} />
</svelte:head>

<div class="container mb-12">
    <!-- Back button -->
    <div class="pt-14 md:pt-10 mb-6">
        <a href="/products" class="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft class="h-4 w-4 mr-2" />
            Back to Products
        </a>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Image -->
        <div class="space-y-4">
            <img 
                src={product.image} 
                alt={product.title}
                class="w-full rounded-lg shadow-lg"
            />
        </div>

        <!-- Product Details -->
        <div class="space-y-6">
            {#if product.category}
                <span class="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded">
                    {product.category}
                </span>
            {/if}

            <h1 class="text-3xl md:text-4xl font-bold">{product.title}</h1>
            
            <p class="text-lg text-muted-foreground">{product.description}</p>

            <!-- Nutritional Benefits -->
            {#if product.nutritionalBenefits && product.nutritionalBenefits.length > 0}
                <div>
                    <h3 class="text-xl font-semibold mb-3">Nutritional Benefits</h3>
                    <ul class="space-y-2">
                        {#each product.nutritionalBenefits as benefit}
                            <li class="flex items-start">
                                <span class="text-primary mr-2">•</span>
                                <span>{benefit}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}

            <!-- Ingredients -->
            {#if product.ingredients && product.ingredients.length > 0}
                <div>
                    <h3 class="text-xl font-semibold mb-3">Ingredients</h3>
                    <ul class="space-y-2">
                        {#each product.ingredients as ingredient}
                            <li class="flex items-start">
                                <span class="text-primary mr-2">•</span>
                                <span>{ingredient}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}

            <!-- Usage Instructions -->
            {#if product.usage}
                <div>
                    <h3 class="text-xl font-semibold mb-3">How to Use</h3>
                    <p class="bg-accent/20 p-4 rounded-lg">{product.usage}</p>
                </div>
            {/if}

            <!-- Additional Info -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {#if product.targetAge}
                    <div class="bg-accent/10 p-4 rounded-lg">
                        <h4 class="font-semibold mb-2">Target Age</h4>
                        <p class="text-sm">{product.targetAge}</p>
                    </div>
                {/if}
                
                {#if product.availability}
                    <div class="bg-accent/10 p-4 rounded-lg">
                        <h4 class="font-semibold mb-2">Availability</h4>
                        <p class="text-sm">{product.availability}</p>
                    </div>
                {/if}
            </div>

            <!-- Contact CTA -->
            <div class="bg-primary/5 border border-primary/20 p-6 rounded-lg">
                <h3 class="text-lg font-semibold mb-2">Interested in this product?</h3>
                <p class="text-muted-foreground mb-4">Contact us for pricing, availability, and bulk orders.</p>
                <a href="mailto:contact@maryanutri.com">
                    <Button class="inline-flex items-center">
                        <Mail class="h-4 w-4 mr-1" />
                        Contact Us
                    </Button>
                </a>
            </div>
        </div>
    </div>
</div> 