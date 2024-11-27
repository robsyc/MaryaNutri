<script lang="ts">
    import { onMount } from 'svelte';
    onMount(async () => {
        const { default: ScrollReveal } = await import('scrollreveal');
        ScrollReveal().reveal('.reveal-card', {
            delay: 200,
            duration: 1000,
            origin: 'bottom',
            distance: '80px',
            reset: true,
            });
    });

    import { mode } from "mode-watcher";
    
    import { ChevronDown } from 'lucide-svelte';
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import CountUp from '$lib/components/CountUp.svelte';
    
    let count = 0;
    setInterval(() => {
        count++;
    }, 10000);
    let child = "children";
    let verb = "are";
    $: if (count == 1) {
        child = "child";
        verb = "is";
    }
    $: if (count > 1) {
        child = "children";
        verb = "are";
    }
</script>

<!-- Hero page -->
<section class="h-screen flex items-center justify-center bg-background">
    <div class="container mx-auto px-5">
        <div class="flex flex-col items-center text-center md:max-w-xl mx-auto">
            <!-- Logo -->
            <a href="/">
                <img
                    src={$mode === 'dark' ? '/logo_dark.png' : '/logo_light.png'}
                    alt="MaryaNutri"
                    class="h-48 w-auto py-4"/>
            </a>
            <h1 class="text-5xl font-bold my-5">
                END MALNUTRITION, <span class="underline underline-offset-8">SAVE LIVES</span>
            </h1>
            <p class="font-light text-accent-foreground/80">
                MaryaNutri© creates highly nutritious innovative insect-fortified foods to treat severe acute malnutrition in children.
            </p>
            <Button class="mt-6 text-lg h-16 shadow-md">
                <div class="flex flex-col items-center">
                    <p>Scroll Down</p>
                    <ChevronDown class="animate-bounce w-6 h-6 mt-2" />
                </div>
            </Button>
        </div>
    </div>
</section>

<!-- Children are dying -->
<section class="min-h-screen flex items-center justify-center bg-background">
    <div class="text-center">
        <h1 class="text-6xl font-bold mb-4 px-4">
            CHILDREN ARE <span class="underline underline-offset-8">DYING</span> !
        </h1>

        <div class="my-16 lg:my-32 container mx-auto md:px-32 lg:px-64">
            <Card.Root class="mx-auto max-w-screen reveal-card">
                <Card.Header>
                <Card.Title class="text-3xl">
                    <span class="text-red-700 text-4xl">EVERY 10 SECONDS</span>, A CHILD DIES FROM MALNUTRITION
                </Card.Title>
                </Card.Header>
                <Card.Content>
                <p>That {verb} <span class="underline">{count} {child}</span> since you started reading this page!</p>
                </Card.Content>
            </Card.Root>
        </div>


        <div class="grid grid-cols-1 lg:grid-cols-3 gap-20 my-24 text-3xl">
            <div class=p-3>
                <p>OF DEATHS AMONG CHILDREN UNDER 5</p>
                <p class="text-7xl my-4 text-red-700">
                    <CountUp target={45} start={40} suffix="%" duration={1500} />
                </p>
                <p>ARE LINKED TO MALNUTRITION</p>
            </div>
            <div class=p-3>
                <p>IN 2022 ALONE</p>
                <p class="text-7xl my-4 text-red-700">
                    <CountUp target={149} start={100} duration={1500} />
                </p>
                <p>MILLION CHILDREN WERE STUNTED</p>
            </div>
            <div class=p-3>
                <p>AFRICAN PRE-SCHOOL CHILDREN</p>
                <p class="text-7xl my-4 text-red-700">
                    <CountUp target={50} start={40} suffix="%" duration={1500} />
                </p>
                <p>HAVE A MICRONUTRIENT DEFICIENCY</p>
            </div>
        </div>


        <Button variant="outline" class="mt-6 text-lg h-16 shadow-md">
            <div class="flex flex-col items-center">
              <p>How we can change this!</p>
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