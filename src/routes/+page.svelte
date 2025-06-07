<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import type { PageData } from './$types';
    
    onMount(async () => {
        const { default: ScrollReveal } = await import('scrollreveal');
        ScrollReveal().reveal('.reveal-card', {
            delay: 50,
            duration: 1000,
            origin: 'bottom',
            distance: '80px',
            reset: true,
            });
    });

    import { mode } from "mode-watcher";
    import { Info } from 'lucide-svelte';

    import { ChevronDown } from 'lucide-svelte';
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import CountUp from '$lib/components/CountUp.svelte';
    import { Progress } from "$lib/components/ui/progress/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import NewsCarousel from '$lib/components/NewsCarousel.svelte';
    import SustainabilityFacts from '$lib/components/SustainabilityFacts.svelte';

    let { data }: { data: PageData } = $props();
    
    let count: number = $state(0);
    let progress: number = $state(0);
    let progressInterval: ReturnType<typeof setInterval>;
    let countInterval: ReturnType<typeof setInterval>;

    const child = $derived(count === 1 ? 'child' : 'children');
    const verb = $derived(count === 1 ? 'is' : 'are');

    onMount(() => {
        // Update progress every 1 second
        progressInterval = setInterval(() => {
        progress = (progress + 10) % 100; // Increment progress by 10%
        }, 1000);

        // Increment count every 10 seconds
        countInterval = setInterval(() => {
        count++;
        }, 10000);
    });

    onDestroy(() => {
        clearInterval(progressInterval);
        clearInterval(countInterval);
    });


</script>

<style>
    /* Default background for large screens - center and cover */
    .hero-background {
        background-image: url('/hero.jpg');
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
    }

    /* Medium screens and below - align left */
    @media only screen and (max-width: 1023px) {
        .hero-background {
            background-position: left center;
        }
    }

    /* Small screens - align left */
    @media only screen and (max-width: 767px) {
        .hero-background {
            background-position: left center;
        }
    }

    /* iOS Safari specific detection and fix - only target iOS devices */
    @supports (-webkit-touch-callout: none) and (not ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))) {
        @media only screen and (max-width: 767px) {
            .hero-background {
                background-attachment: scroll;
                background-size: auto;
                background-position: left top;
            }
        }
    }

    /* More specific iOS detection using device characteristics */
    @media only screen 
        and (max-width: 767px) 
        and (-webkit-min-device-pixel-ratio: 1)
        and (orientation: portrait)
        and (-webkit-touch-callout: none) {
        .hero-background {
            background-attachment: scroll;
            background-size: auto;
            background-position: left top;
        }
    }

    /* iOS landscape mode */
    @media only screen 
        and (max-width: 1024px) 
        and (-webkit-min-device-pixel-ratio: 1)
        and (orientation: landscape)
        and (-webkit-touch-callout: none) {
        .hero-background {
            background-attachment: scroll;
            background-size: auto;
            background-position: left top;
        }
    }

    /* High DPI iOS devices (iPhone 6+ and newer) */
    @media only screen 
        and (max-width: 767px) 
        and (-webkit-min-device-pixel-ratio: 2)
        and (-webkit-touch-callout: none) {
        .hero-background {
            background-attachment: scroll !important;
            background-size: auto !important;
            background-position: left top !important;
        }
    }

    /* Ensure Android devices maintain fixed background functionality */
    /* This overrides any iOS fixes for Android Chrome */
    @media only screen and (max-width: 767px) {
        .hero-background {
            /* Android Chrome supports background-attachment: fixed properly */
            background-attachment: fixed;
            background-size: cover;
            background-position: left center;
        }
    }

    /* Re-apply iOS fixes after Android reset - iOS has higher specificity */
    @supports (-webkit-touch-callout: none) {
        @media only screen and (max-width: 767px) {
            .hero-background {
                background-attachment: scroll !important;
                background-size: auto !important;
                background-position: left top !important;
            }
        }
    }
</style>

<svelte:head>
    <title>MaryaNutri - End Malnutrition, Save Lives</title>
    <meta name="description" content="MaryaNutri© creates highly nutritious innovative insect-fortified foods to treat severe acute malnutrition in children." />
</svelte:head>

<!-- Background image -->
<div class="hero-background">

<!-- Hero section -->
<section class="min-h-screen bg-scroll py-10 overflow-hidden flex items-center justify-center bg-background/50 lg:bg-gradient-to-r from-background/5 from-20% via-background to-background/5 to-80%">
    <div class="container mx-auto px-6 mt-4">
        <div class="flex flex-col items-center text-center md:max-w-xl mx-auto my-auto">
            <!-- Logo -->
            <a href="/">
                <img
                    src={$mode === 'dark' ? '/logo_dark.png' : '/logo_light.png'}
                    alt="MaryaNutri"
                    class="h-36 md:h-48 w-auto"/>
            </a>
            <h1 class="text-4xl md:text-5xl font-bold my-5">
                END MALNUTRITION, <br> <span class="underline underline-offset-8">SAVE LIVES</span>
            </h1>
            <p class="font-light text-accent-foreground/90 my-5">
                MaryaNutri© creates highly nutritious innovative insect-fortified foods to treat severe acute malnutrition in children.
            </p>
            <div class="mt-6 text-lg px-3 flex flex-col items-center">
                <div class="h-24 w-0 border-l-2 border-foreground mx-auto origin-top transform animate-scroll-line"></div>
                <ChevronDown class="w-6 h-6 -mt-2" />
            </div>
            <p class="pt-3 font-extralight">SCROLL DOWN</p>
        </div>
    </div>
</section>

<!-- Children are dying -->
<section class="min-h-screen flex items-center justify-center bg-background">
    <div class="text-center pt-8 md:pt-20 lg:pt-40">
        <h1 class="text-5xl md:text-6xl font-bold mb-4 px-4 mt-6">
            CHILDREN ARE <span class="underline underline-offset-8">DYING</span>!
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
                <Card.Footer>
                    <Progress value={progress}/>
                </Card.Footer>
            </Card.Root>
        </div>


        <div class="grid grid-cols-1 lg:grid-cols-3 gap-20 my-8 md:my-16 lg:my-20 text-3xl">
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

        <div class="mb-2 md:mx-4 md:mb-8" >
            <Popover.Root>
                <Popover.Trigger>
                    <Info size={48} />
                </Popover.Trigger>
                <Popover.Content>
                    These statistics are based on the latest data from the <a href="https://www.who.int/news-room/fact-sheets/detail/malnutrition" target="_blank" class="underline">World Health Organization (WHO)</a>
                </Popover.Content>
            </Popover.Root>
        </div>

        <div class="mt-6 text-lg px-3 pb-8 md:pb-16 flex flex-col items-center">
            <p class="mb-10 font-extralight">WE CAN CHANGE THIS!</p>
            <div class="h-24 w-0 border-l-2 border-foreground mx-auto origin-top transform animate-scroll-line"></div>
            <ChevronDown class="w-6 h-6 -mt-2" />
        </div>
    </div>
</section>

<!-- Maryam card -->
<section class="py-20 overflow-hidden bg-fixed flex items-center justify-center bg-background/50 lg:bg-gradient-to-r from-background/5 from-20% via-background to-background/5 to-80%">
    <div class="container-sm mx-auto md:px-4">
        <div class="my-16 lg:my-32 container mx-auto md:px-32 lg:px-64">
            <Card.Root class="mx-auto max-w-screen reveal-card">
                <div class="md:flex items-center">
                    <div class="my-auto mx-auto md:ml-4 pt-6 md:py-8 md:px-6">
                        <Avatar.Root class="w-20 h-20 mx-auto">
                            <Avatar.Image src="/maryam_pf.jpeg" alt="Maryam Imbumi" />
                        </Avatar.Root>
                    </div>
                    <div>
                        <Card.Header>
                            <Card.Title class="text-foreground/90 text-lg italic font-semibold text-justify">
                                Growing up in Kenya, twice I almost died because of hunger and malnutrition. It was at age 6 I decided I wanted to solve malnutrition.
                            </Card.Title>
                            <Card.Description class="text-accent-foreground/80">
                                Our Founder, <a href="https://www.linkedin.com/in/maryam-imbumi-11113b79/" target="_blank" class="underline"> Maryam Imbumi</a>
                            </Card.Description>
                        </Card.Header>
                        <Card.Content>
                            Learn more about MaryaNutri© and how we are working to end malnutrition.
                        </Card.Content>
                        <Card.Footer>
                            <Button href="/products" class="mx-auto md:mx-0 md:mr-4">Our Products</Button>
                            <Button href="/about" variant="secondary" class="mx-auto md:mx-0">About Us</Button>
                        </Card.Footer>
                    </div>
                </div>
            </Card.Root>
        </div>
    </div>
</section>

<!-- Sustainability Facts -->
<SustainabilityFacts />

<!-- News Carousel -->
<NewsCarousel news={data.news} />

</div>