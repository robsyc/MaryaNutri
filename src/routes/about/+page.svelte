<script lang="ts">
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Baby, Salad, Utensils, Users, Sprout, BookOpenCheck } from 'lucide-svelte';

	const commitments = [
		{
			icon: Baby,
			label: 'Child-safety',
			description: 'Our products are suitable for children of 6 months and older'
		},
		{
			icon: Salad,
			label: 'Highly Nutritious',
			description:
				"We're continuously doing research to ensure our products are of the highest quality. They are packed with quality proteins, essential amino acids, fatty acids, vitamins and minerals"
		},
		{
			icon: Utensils,
			label: 'Food-safety',
			description: "We're compliant with the highest European food-safety standards"
		},
		{
			icon: Users,
			label: 'Culturally informed partnerships',
			description:
				"We build on existing dietary practices from many parts of the world. We're also closely collaborating with NGOs and local communities to ensure our products are well-informed and well-received."
		},
		{
			icon: Sprout,
			label: 'Sustainability',
			description:
				'Insect farming has a significantly lower environmental impact. Across our wider product portfolio, we also work with alternative proteins including insect-derived ingredients, while our LNS is formulated with carefully selected non-GMO protein sources.'
		},
		{
			icon: BookOpenCheck,
			label: 'Accessible & Transparent',
			description:
				"Designed to be affordable, ready to use, and easy to serve, our LNS-SQ requires no cooking or dilution. Simply knead the sachet, open it, and feed directly or mix with the child's prepared food. We are also transparent about our ingredients and production process."
		}
	] as const;
</script>

<svelte:head>
	<title>About MaryaNutri</title>
	<meta
		name="description"
		content="MaryaNutri develops evidence-based nutrition products for children in high-burden settings."
	/>
</svelte:head>

<div class="container mb-12">
	<h1 class="text-4xl md:text-5xl font-bold pt-14 md:pt-10">About MaryaNutri</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-6">
		<img
			class="rounded-lg shadow"
			src="/maryam_DO.jpeg"
			alt="Maryam on stage at the Expedition DO! finals"
		/>
		<div>
			<p class="my-5 md:mt-4">
				MaryaNutri develops evidence-based nutrition products for children in high-burden settings.
				Our work focuses on practical, nutrient-dense products designed to be safe, acceptable, and
				suitable for real-world use.
			</p>
			<p class="my-5 md:mt-4">
				This work responds to an urgent need: 4.9 million children died before age 5 in 2024, and
				58% of global under-five deaths occurred in sub-Saharan Africa. Sub-Saharan Africa remains
				the only region where the number of stunted children continues to increase, with 62 million
				stunted children in the latest UNICEF data.
			</p>
		</div>
	</div>

	<div class="my-16">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Our Approach and Commitments</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				We translate research into practical nutrition solutions through product development,
				validation, and responsible scale-up.
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
			{#each commitments as { icon, label, description }}
				<Popover.Root>
					<Popover.Trigger>
						{#snippet child({ props })}
							<div
								{...props}
								class={`h-16 w-fit mx-auto ${buttonVariants({ variant: 'outline', size: 'lg' })}`}
							>
								<svelte:component this={icon} />
								{label}
							</div>
						{/snippet}
					</Popover.Trigger>
					<Popover.Content class="w-80">
						<p class="text-muted-foreground text-sm">{description}</p>
					</Popover.Content>
				</Popover.Root>
			{/each}
		</div>
	</div>

	<p class="text-lg text-muted-foreground max-w-2xl md:max-w-4xl mx-auto text-center">
		Our commitment is to develop nutrition products responsibly, with attention to safety, evidence,
		and local relevance.
	</p>
</div>
