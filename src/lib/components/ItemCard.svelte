<script lang="ts">
	interface Item {
		id: string;
		title: string;
		description?: string;
		excerpt?: string;
		image: string;
		category?: string;
		date?: string;
		author?: string;
	}

	let { item, type = 'product', href }: { item: Item; type?: 'product' | 'news'; href: string } = $props();
	
	const displayText = item.description || item.excerpt || '';
	const displayDate = item.date ? new Date(item.date).toLocaleDateString('en-US', { 
		year: 'numeric', 
		month: 'long', 
		day: 'numeric' 
	}) : '';
</script>

<a {href} class="block group">
	<div class="bg-accent/20 border border-accent rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group-hover:border-primary/50">
		<img class="rounded-t-lg w-full h-48 object-cover" src={item.image} alt={item.title} />
		<div class="p-5">
			{#if item.category}
				<span class="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded mb-2">
					{item.category}
				</span>
			{/if}
			
			<h5 class="mb-2 text-xl font-bold text-accent-foreground group-hover:text-primary transition-colors duration-300">
				{item.title}
			</h5>
			
			{#if displayText}
				<p class="mb-3 font-normal text-accent-foreground line-clamp-3">
					{displayText}
				</p>
			{/if}
			
			{#if type === 'news' && (displayDate || item.author)}
				<div class="text-sm text-muted-foreground mt-4 flex flex-wrap gap-2">
					{#if displayDate}
						<span>{displayDate}</span>
					{/if}
					{#if displayDate && item.author}
						<span>•</span>
					{/if}
					{#if item.author}
						<span>by {item.author}</span>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</a> 