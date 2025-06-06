<script lang="ts">
    import * as Popover from "$lib/components/ui/popover/index.js";
    import Button from '$lib/components/ui/button/button.svelte';
    import { Baby, Salad, Utensils, Users, Sprout, BookOpenCheck } from 'lucide-svelte';
</script>

<svelte:head>
    <title>About MaryaNutri</title>
    <meta name="description" content="About MaryaNutri, our mission to end global malnutrition." />
</svelte:head>

<div class="container mb-12">
    <h1 class="text-4xl md:text-5xl font-bold pt-14 md:pt-10">About MaryaNutri</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-6">
        <img class="rounded-lg shadow" src="/maryam_DO.jpeg" alt="Maryam on stage at the Expedition DO! finals" />
        <div>
            <p class="my-5 md:mt-4">
                I'm <a href="https://www.linkedin.com/in/maryam-imbumi-11113b79/" target="_blank" class="underline"> Maryam Imbumi</a>, the founder of MaryaNutri. 
                As a Kenyan-born nutritionist and PhD student at Ghent University, 
                I'm on a mission to end childhood malnutrition. 
                I know this cause personally - I was born in Kenya and almost died twice as a child due to severe malnutrition...
            </p>
            <p class="my-5 md:mt-4">
                At MaryaNutri, we're creating unique, innovative insect-fortified foods that are nutritious and sustainable. Our goal is not just temporary relief, but lasting change to end poverty and hunger around the world. With roots in Kenya and our eyes on the global stage, we're working to make a real difference.
            </p>
        </div>
    </div>

    <div>
        <h2 class="text-4xl font-bold mt-10">Our Approach and Commitments</h2>
        <p class="my-5">
            We believe in turning research into real-world impact. 
            That's why MaryaNutri isn't just about innovative food products; 
            it's about bridging the gap between academic findings and practical solutions. 
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <Popover.Root>
                <Popover.Trigger>
                    <Button class="h-16" variant="outline" size="lg">
                        <Baby />
                        Child-safety
                    </Button>
                </Popover.Trigger>
                <Popover.Content class="w-80">
                    <p class="text-muted-foreground text-sm">
                        Our products are suitable for children of 6 month and older
                    </p>
                </Popover.Content>
            </Popover.Root>
            <Popover.Root>
                <Popover.Trigger>
                    <Button class="h-16" variant="outline" size="lg">
                        <Salad /> Highly Nutritious
                    </Button>
                </Popover.Trigger>
                <Popover.Content class="w-80">
                    <p class="text-muted-foreground text-sm">
                        We're continuously doing research to ensure our products are of the highest quality.
                        They are packed with quality proteins, essential amino acids, fatty acids, vitamins and minerals
                    </p>
                </Popover.Content>
            </Popover.Root>
            <Popover.Root>
                <Popover.Trigger>
                    <Button class="h-16" variant="outline" size="lg">
                        <Utensils />
                        Food-safety
                    </Button>
                </Popover.Trigger>
                <Popover.Content class="w-80">
                    <p class="text-muted-foreground text-sm">
                        We're compliant with the highest European food-safety standards
                    </p>
                </Popover.Content>
            </Popover.Root>
            <Popover.Root>
                <Popover.Trigger>
                    <Button class="h-16" variant="outline" size="lg">
                        <Users />
                        Culturally informed partnerships
                    </Button>
                </Popover.Trigger>
                <Popover.Content class="w-80">
                    <p class="text-muted-foreground text-sm">
                        We build on existing dietary practices from many parts of the world.
                        We're also closely collaborating with NGOs and local communities to ensure our products are well-informed and well-received.
                    </p>
                </Popover.Content>
            </Popover.Root>
            <Popover.Root>
                <Popover.Trigger>
                    <Button class="h-16" variant="outline" size="lg">
                        <Sprout />
                        Sustainability
                    </Button>
                </Popover.Trigger>
                <Popover.Content class="w-80">
                    <p class="text-muted-foreground text-sm">
                        Insect farming has a significantly lower environmental impact.
                        Additionally, we're working on a zero-waste production process through biodegradable packaging.
                    </p>
                </Popover.Content>
            </Popover.Root>
            <Popover.Root>
                <Popover.Trigger>
                    <Button class="h-16" variant="outline" size="lg">
                        <BookOpenCheck />
                        Accessible & Transparent
                    </Button>
                </Popover.Trigger>
                <Popover.Content class="w-80">
                    <p class="text-muted-foreground text-sm">
                        Designed to be affordable and easy to prepare, simply add water and mix!
                        We're also transparent about our ingredients, production process and the impact of our products.
                    </p>
                </Popover.Content>
            </Popover.Root>
        </div>
    </div>

    <p>
        Driving sustainable change to end structural poverty and hunger 
        is a core objective embedded in our company's structure, 
        ensuring that social impact remains integral to our business model. 
        Join us in our journey to nourish the future, one child at a time. 
        Together, we can make malnutrition a thing of the past! 
    </p>

</div>