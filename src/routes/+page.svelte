<script lang="ts">
    import { ChevronDown } from 'lucide-svelte';
    import { Button } from "$lib/components/ui/button/index.js";
</script>

<section class="h-screen flex items-center justify-center bg-background">
    <div class="text-center">
        <h1 class="text-6xl font-bold mb-4 font-mono">
            CHILDREN ARE <span class="underline underline-offset-8">DYING</span>
        </h1>
        <p class="text-lg">Every 10 seconds, a chield dies from malnutrition.</p>
        <Button variant="destructive" class="mt-6 text-lg h-16 shadow-md">
            <div class="flex flex-col items-center">
              <p>We can change this!</p>
              <ChevronDown class="animate-bounce w-6 h-6 mt-2" />
            </div>
        </Button>
    </div>
</section>

<section class="py-20 bg-accent">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold mb-6">Our Services</h2>
        <p class="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.
        </p>
    </div>
</section>

<section class="py-20 bg-background">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold mb-6">About Us</h2>
        <p class="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.
        </p>
    </div>
</section>