<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import '$lib/styles/hero-background.css';

	onMount(async () => {
		const { default: ScrollReveal } = await import('scrollreveal');
		ScrollReveal().reveal('.reveal-card', {
			delay: 50,
			duration: 1000,
			origin: 'bottom',
			distance: '80px',
			reset: true
		});
	});

	import { mode } from 'mode-watcher';
	import { Info } from 'lucide-svelte';

	import { ChevronDown } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import CountUp from '$lib/components/CountUp.svelte';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import NewsCarousel from '$lib/components/NewsCarousel.svelte';
	import SustainabilityFacts from '$lib/components/SustainabilityFacts.svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>MaryaNutri - Evidence-Based Nutrition for Children</title>
	<meta
		name="description"
		content="MaryaNutri develops evidence-based nutrition products for children in high-burden settings."
	/>
</svelte:head>

<!-- Background image -->
<div class="hero-background">
	<!-- Hero section -->
	<section
		class="min-h-screen bg-scroll py-10 overflow-hidden flex items-center justify-center bg-background/50 lg:bg-gradient-to-r from-background/5 from-20% via-background to-background/5 to-80%"
	>
		<div class="container mx-auto px-6 mt-4">
			<div class="flex flex-col items-center text-center md:max-w-xl mx-auto my-auto">
				<!-- Logo -->
				<a href="/">
					<img
						src={mode.current === 'dark' ? '/logo_dark.png' : '/logo_light.png'}
						alt="MaryaNutri"
						class="h-36 md:h-48 w-auto"
					/>
				</a>
				<h1 class="text-4xl md:text-5xl font-bold my-5">
					EVIDENCE-BASED <br /> <span class="underline underline-offset-8">NUTRITION</span>
				</h1>
				<p class="font-light text-accent-foreground/90 my-5">
					MaryaNutri develops evidence-based nutrition products for children in high-burden
					settings.
				</p>
				<div class="mt-6 text-lg px-3 flex flex-col items-center">
					<div
						class="h-24 w-0 border-l-2 border-foreground mx-auto origin-top transform animate-scroll-line"
					></div>
					<ChevronDown class="w-6 h-6 -mt-2" />
				</div>
				<p class="pt-3 font-extralight">SCROLL DOWN</p>
			</div>
		</div>
	</section>

	<!-- Children at risk -->
	<section class="min-h-screen flex items-center justify-center bg-background">
		<div class="text-center pt-8 md:pt-20 lg:pt-40">
			<h1 class="text-5xl md:text-6xl font-bold mb-4 px-4 mt-6">
				CHILDREN REMAIN <span class="underline underline-offset-8">AT RISK</span>
			</h1>

			<div class="my-16 lg:my-32 container mx-auto md:px-32 lg:px-64">
				<Card.Root class="mx-auto max-w-screen reveal-card">
					<Card.Header>
						<Card.Title class="text-3xl">
							<span class="text-red-700 text-4xl">4.9 MILLION</span> CHILDREN DIED BEFORE AGE 5 IN 2024
						</Card.Title>
					</Card.Header>
					<Card.Content class="space-y-3 text-left">
						<p>58% of global under-five deaths occurred in sub-Saharan Africa.</p>
						<p>
							Severe acute malnutrition remained a direct cause of child death, with more than
							100,000 deaths among children aged 1-59 months in 2024.
						</p>
					</Card.Content>
				</Card.Root>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-3 gap-20 my-8 md:my-16 lg:my-20 text-3xl">
				<div class="p-3">
					<p>ANEMIA</p>
					<p class="text-7xl my-4 text-red-700">
						<CountUp target={39.8} start={25} decimals={1} suffix="%" duration={1500} />
					</p>
					<p class="text-xl md:text-2xl lg:text-3xl px-2">
						CHILDREN AGED 6-59 MONTHS AFFECTED WORLDWIDE (WHO)
					</p>
				</div>
				<div class="p-3">
					<p>CHILDREN UNDER 5 STUNTED IN 2024</p>
					<p class="text-7xl my-4 text-red-700">
						<CountUp target={150.2} start={100} decimals={1} duration={1500} />
					</p>
				</div>
				<div class="p-3">
					<p>CHILDREN WITH WASTING</p>
					<p class="text-7xl my-4 text-red-700">
						<CountUp target={42.8} start={30} decimals={1} duration={1500} />
					</p>
					<p>MILLION IN 2024</p>
				</div>
			</div>

			<div class="mb-2 md:mx-4 md:mb-8">
				<Popover.Root>
					<Popover.Trigger>
						<Info size={48} />
					</Popover.Trigger>
					<Popover.Content>
						Child mortality figures are from <a
							href="https://data.unicef.org/resources/levels-and-trends-in-child-mortality-2025/"
							target="_blank"
							class="underline">UNICEF</a
						>. Stunting and wasting estimates are from
						<a
							href="https://www.who.int/teams/nutrition-and-food-safety/monitoring-nutritional-status-and-food-safety-and-events/joint-child-malnutrition-estimates/latest-estimates"
							target="_blank"
							class="underline">WHO joint malnutrition estimates</a
						>. The anaemia prevalence figure is from
						<a
							href="https://www.who.int/news-room/fact-sheets/detail/anaemia"
							target="_blank"
							class="underline">WHO</a
						>.
					</Popover.Content>
				</Popover.Root>
			</div>

			<div class="mt-6 text-lg px-3 pb-8 md:pb-16 flex flex-col items-center">
				<p class="mb-10 font-extralight">WE CAN CHANGE THIS!</p>
				<div
					class="h-24 w-0 border-l-2 border-foreground mx-auto origin-top transform animate-scroll-line"
				></div>
				<ChevronDown class="w-6 h-6 -mt-2" />
			</div>
		</div>
	</section>

	<!-- Maryam card -->
	<section
		class="py-20 overflow-hidden bg-fixed flex items-center justify-center bg-background/50 lg:bg-gradient-to-r from-background/5 from-20% via-background to-background/5 to-80%"
	>
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
									Growing up in Kenya, twice I almost died because of hunger and malnutrition. It
									was at age 6 I decided I wanted to solve malnutrition.
								</Card.Title>
								<Card.Description class="text-accent-foreground/80">
									Our Founder, <a
										href="https://www.linkedin.com/in/maryam-imbumi-11113b79/"
										target="_blank"
										class="underline"
									>
										Maryam Imbumi</a
									>
								</Card.Description>
							</Card.Header>
							<Card.Content class="py-4 space-y-3">
								<p>
									MaryaNutri is a Belgium-based nutrition venture with roots in Kenya, focused on
									practical child nutrition solutions.
								</p>
								<p class="text-sm text-muted-foreground">
									Learn more about our products and approach.
								</p>
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

	<!-- Founder's Story Video -->
	<section class="py-20 bg-background">
		<div class="container mx-auto px-4">
			<div class="text-center mb-12">
				<h2 class="text-4xl md:text-5xl font-bold mb-4">Our Founder's Journey</h2>
				<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
					Watch the inspiring story of Maryam Imbumi and her mission to end malnutrition,
					beautifully captured by the Wintercircus collective.
				</p>
			</div>

			<div class="max-w-4xl mx-auto">
				<div
					class="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-accent/10 reveal-card"
				>
					<iframe
						src="https://www.youtube.com/embed/j2mXKbDZHf0"
						title="Maryam Imbumi's Story - MaryaNutri Founder"
						class="absolute inset-0 w-full h-full"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>

				<div class="text-center mt-8">
					<p class="text-sm text-muted-foreground mb-4">
						Video by <a
							href="https://wintercircus.be/"
							target="_blank"
							rel="noopener noreferrer"
							class="underline hover:text-primary transition-colors">Wintercircus</a
						>
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<Button href="/about" class="inline-flex items-center">
							Learn More About Our Mission
							<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								></path>
							</svg>
						</Button>
						<Button href="/products" variant="secondary" class="inline-flex items-center">
							Explore Our Products
							<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								></path>
							</svg>
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
<!-- End of hero-background -->
