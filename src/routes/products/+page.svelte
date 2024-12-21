<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<div class="container mb-12">
    <h1 class="text-4xl md:text-5xl font-bold pt-14 md:pt-10">Our products</h1>
    <p class="p-1 my-5">
        If you are interested in purchasing our products, please <a class="underline underline-offset-2 hover:text-primary duration-300" href="mailto:contact@maryanutri.com">contact us</a>.
        We will get back to you as soon as possible. 
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
        <div class="bg-accent/20 border border-accent rounded-lg shadow">
            <img class="rounded-t-lg" src="/products/xtra_boogie_porr.jpg" alt="porridge" />
            <div class="p-5">
                <h5 class="mb-2 text-xl font-bold text-accent-foreground">Mealworm-fortified porridge</h5>
                <p class="mb-3 font-normal text-accent-foreground">High-quality powder for making nutritious porridge. Fortified with mealworm extract to increase nutritional value. Simply add water and mix!</p>
            </div>
        </div>

        <div class="bg-accent/20 border border-accent rounded-lg shadow">
            <img class="rounded-t-lg" src="/products/porridge.jpg" alt="porridge" />
            <div class="p-5">
                <h5 class="mb-2 text-xl font-bold text-accent-foreground">Cricket-fortified porridge</h5>
                <p class="mb-3 font-normal text-accent-foreground">We also have a cricket-fortified porridge powder. We aim to price our products affordable to reach as many children as possible.</p>
            </div>
        </div>
    </div>    
</div>