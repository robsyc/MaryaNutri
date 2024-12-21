<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
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
    import { Divide, Info } from 'lucide-svelte';

    import { ChevronDown } from 'lucide-svelte';
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import CountUp from '$lib/components/CountUp.svelte';
    import { Progress } from "$lib/components/ui/progress/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import BarChart from '$lib/components/BarChart.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
    
    let count: number = 0;
    let progress: number = 0;
    let progressInterval: ReturnType<typeof setInterval>;
    let countInterval: ReturnType<typeof setInterval>;

    $: child = count === 1 ? 'child' : 'children';
    $: verb = count === 1 ? 'is' : 'are';

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

    // Chart data
    const chart_labels = ['Cow', 'Pig', 'Chicken', 'Cricket', 'Mealworm'];
    const water_data = [
      { value: 22000, color: '#ff4c4c' },
      { value: 20000, color: '#ff7f00' },
      { value: 16000, color: '#ffe700' },
      { value: 10, color: '#8cff00' },
      { value: 9, color: '#00ffff' },
    ];
    const water_yTicks = [0, 5000, 10000, 15000, 20000, 25000];
    const land_data = [
      { value: 200, color: '#ff4c4c' },
      { value: 180, color: '#ff7f00' },
      { value: 110, color: '#ffe700' },
      { value: 15, color: '#8cff00' },
      { value: 14, color: '#00ffff' },
    ];
    const land_yTicks = [0, 50, 100, 150, 200, 250];
    const co2_data = [
      { value: 14.8, color: '#ff4c4c' },
      { value: 3.8, color: '#ff7f00' },
      { value: 1.1, color: '#ffe700' },
      { value: 0.15, color: '#8cff00' },
      { value: 0.10, color: '#00ffff' },
    ];
    const co2_yTicks = [0, 3, 6, 9, 12, 15, 18];
</script>

<!-- Hero page -->
<div class="bg-cover bg-no-repeat bg-fixed lg:bg-center"
style="background-image: url('/hero.jpg');"
>
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
        <h1 class="text-5xl md:text-6xl font-bold mb-4 px-4">
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


<section class="py-20 overflow-hidden bg-fixed flex items-center justify-center bg-background/50 lg:bg-gradient-to-r from-background/5 from-20% via-background to-background/5 to-80%">
    <div class="container-sm mx-auto md:px-4">
        <div class="my-16 lg:my-32 container mx-auto md:px-32 lg:px-64">
            <Card.Root class="mx-auto max-w-screen reveal-card">
                <div class="md:flex items-center">
                    <div class="my-auto mx-auto md:ml-4 pt-6 md:py-8 md:px-6">
                        <Avatar.Root class="w-20 h-20 mx-auto">
                            <Avatar.Image src="https://media.licdn.com/dms/image/v2/D4E03AQG5kJL-nrCClQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729943416940?e=1735171200&v=beta&t=o4Xe_lDjZngjohVdXr_w-JQVFq3Z1lh7dttWKBs_wbM" alt="Maryam Imbumi" />
                            <Avatar.Fallback>CN</Avatar.Fallback>
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


<section class="py-20 bg-background">
    <div class="container mx-auto md:px-4">
      <h2 class="text-4xl font-semibold mb-16">
        Insects are highly nutritious and sustainable food sources!
      </h2>
  
      <!-- Water Consumption Chart -->
      <div class="flex flex-col md:flex-row md:items-center mb-10">
        <div class="md:w-1/2 md:pl-6 text-center p-3">
            <h3 class="text-2xl font-semibold mb-4">Water Consumption</h3>
            <p class="text-lg mx-8">
                Insects require significantly less water than traditional livestock.
                You can barely see the water consumption of crickets and mealworms on the chart!
                It's that low!
            </p>
        </div>
        <div class="md:w-1/2 py-4">
            <BarChart data={water_data} labels={chart_labels} yTicks={water_yTicks} yLabel="Litres (L)" />
        </div>
      </div>

      <Separator class="my-10" />
  
      <!-- Land Use Chart -->
      <div class="flex flex-col md:flex-row md:items-center mb-10">
        <div class="md:w-1/2 md:pl-6 text-center p-3">
            <h3 class="text-2xl font-semibold mb-4">Land Use</h3>
            <p class="text-lg mx-8">
                Insect farming uses less land area compared to traditional farming.
                While beef requires 200m² - crickets only need 15m²
            </p>
        </div>
        <div class="md:w-1/2 py-4">
            <BarChart data={land_data} labels={chart_labels} yTicks={land_yTicks} yLabel="Square Metres (m²)" />
        </div>
      </div>

      <Separator class="my-10" />
  
      <!-- CO₂ Emissions Chart -->
      <div class="flex flex-col md:flex-row md:items-center">
        <div class="md:w-1/2 md:pl-6 text-center p-3">
            <h3 class="text-2xl font-semibold mb-4">CO₂ Emissions</h3>
            <p class="text-lg mx-8">
                Insect protein production emits fewer greenhouse gases.
                On average, insects emit 100 times less CO₂ than cattle.
            </p>
        </div>
        <div class="md:w-1/2 py-4">
            <BarChart data={co2_data} labels={chart_labels} yTicks={co2_yTicks} yLabel="CO₂ Emissions (kg) per 1kg of meat" />
        </div>
      </div>
    </div>
</section>

<section class="py-20 overflow-hidden bg-fixed flex items-center justify-center bg-background/50 lg:bg-gradient-to-r from-background/5 from-20% via-background to-background/5 to-80%">
    <div class="container-sm mx-auto md:px-4">
        <div class="my-16 lg:my-32 container mx-auto md:px-32 lg:px-64">
            <Card.Root class="mx-auto max-w-screen reveal-card">
                <div class="md:flex items-center">
                    <div class="my-auto mx-auto md:ml-4 pt-6 md:py-8 md:px-6">
                        <Avatar.Root class="w-20 h-20 mx-auto">
                            <Avatar.Image src="https://media.licdn.com/dms/image/v2/D4E03AQG5kJL-nrCClQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729943416940?e=1735171200&v=beta&t=o4Xe_lDjZngjohVdXr_w-JQVFq3Z1lh7dttWKBs_wbM" alt="Maryam Imbumi" />
                            <Avatar.Fallback>CN</Avatar.Fallback>
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

</div>