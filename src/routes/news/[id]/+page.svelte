<script lang="ts">
    import type { PageData } from './$types';
    import { Button } from '$lib/components/ui/button';
    import { ArrowLeft, ExternalLink, Calendar, User, Tag } from 'lucide-svelte';

    let { data }: { data: PageData } = $props();
    const { article } = data;
    
    const displayDate = new Date(article.date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
</script>

<svelte:head>
    <title>{article.title} - MaryaNutri</title>
    <meta name="description" content={article.excerpt} />
</svelte:head>

<div class="container mb-12">
    <!-- Back button -->
    <div class="pt-14 md:pt-10 mb-6">
        <a href="/news" class="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft class="h-4 w-4 mr-2" />
            Back to News
        </a>
    </div>

    <article class="max-w-4xl mx-auto">
        <!-- Article Header -->
        <header class="mb-8">
            {#if article.category}
                <span class="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded mb-4">
                    {article.category}
                </span>
            {/if}

            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{article.title}</h1>
            
            <p class="text-xl text-muted-foreground mb-6">{article.excerpt}</p>

            <!-- Article Meta -->
            <div class="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div class="flex items-center">
                    <Calendar class="h-4 w-4 mr-2" />
                    <span>{displayDate}</span>
                </div>
                
                <div class="flex items-center">
                    <User class="h-4 w-4 mr-2" />
                    <span>{article.author}</span>
                </div>
            </div>

            <!-- Tags -->
            {#if article.tags && article.tags.length > 0}
                <div class="flex flex-wrap gap-2 mb-6">
                    {#each article.tags as tag}
                        <span class="inline-flex items-center bg-accent/20 text-accent-foreground text-xs px-2 py-1 rounded">
                            <Tag class="h-3 w-3 mr-1" />
                            {tag}
                        </span>
                    {/each}
                </div>
            {/if}
        </header>

        <!-- Article Image -->
        <div class="mb-8">
            <img 
                src={article.image} 
                alt={article.title}
                class="w-full rounded-lg shadow-lg"
            />
        </div>

        <!-- Article Content -->
        <div class="prose prose-lg max-w-none mb-8">
            <div class="text-lg leading-relaxed whitespace-pre-line">
                {article.content}
            </div>
        </div>

        <!-- External Link -->
        {#if article.externalLink}
            <div class="bg-primary/5 border border-primary/20 p-6 rounded-lg">
                {#if article.category === 'Article'}
                    <h3 class="text-lg font-semibold mb-2">Read the full article</h3>
                    <p class="text-muted-foreground mb-4">This article was originally published externally. Click below to read the complete story.</p>
                    <a href={article.externalLink} target="_blank" rel="noopener noreferrer">
                        <Button class="inline-flex items-center">
                            <ExternalLink class="h-4 w-4 mr-1" />
                            Read Full Article
                        </Button>
                    </a>
                {:else if article.category === 'Media'}
                    <h3 class="text-lg font-semibold mb-2">Watch the video</h3>
                    <p class="text-muted-foreground mb-4">This video was originally published externally. Click below to watch the complete video.</p>
                    <a href={article.externalLink} target="_blank" rel="noopener noreferrer">
                        <Button class="inline-flex items-center">
                            <ExternalLink class="h-4 w-4 mr-1" />
                            Watch Video
                        </Button>
                    </a>
                {:else if article.category === 'Event'}
                    <h3 class="text-lg font-semibold mb-2">Join the event</h3>
                    <p class="text-muted-foreground mb-4">Register or get more information about this event.</p>
                    <a href={article.externalLink} target="_blank" rel="noopener noreferrer">
                        <Button class="inline-flex items-center">
                            <ExternalLink class="h-4 w-4 mr-1" />
                            Register Now
                        </Button>
                    </a>
                {:else}
                    <h3 class="text-lg font-semibold mb-2">Learn more</h3>
                    <p class="text-muted-foreground mb-4">Visit the external link for more information.</p>
                    <a href={article.externalLink} target="_blank" rel="noopener noreferrer">
                        <Button class="inline-flex items-center">
                            <ExternalLink class="h-4 w-4 mr-1" />
                            Learn More
                        </Button>
                    </a>
                {/if}
            </div>
        {/if}
    </article>
</div> 