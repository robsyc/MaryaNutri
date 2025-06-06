<script lang="ts">
	import { page } from "$app/stores";
	import '../app.css';
	import { ModeWatcher, toggleMode, mode, resetMode, setMode } from "mode-watcher";
	import { CircleX, Menu, Sun, Moon, Languages, MonitorSmartphone, Mail } from 'lucide-svelte';

	import { Button, buttonVariants } from "$lib/components/ui/button";
	import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "$lib/components/ui/sheet";
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Textarea } from "$lib/components/ui/textarea";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import Card from "$lib/components/ui/card/card.svelte";

	let { children } = $props();

	let lang = $state("en");
	let showNotification = $state(true);

	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "Products", href: "/products" },
		{ label: "News & Events", href: "/news" },
		{ label: "About Us", href: "/about" },
	];

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let dialogOpen = $state(false);

	// Handle form submission
	// ...
</script>

<ModeWatcher />

<nav class="fixed top-0 left-0 right-0 z-50 shadow-md bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
	{#if showNotification}
	<div class="bg-primary/90">
		<div class="md:container md:mx-auto p-2 flex h-auto items-center justify-between text-primary-foreground">
			<p>MaryaNutri was featured in a Brussels Times article!
				<a href="https://www.brusselstimes.com/1313990/from-starvation-to-solution-kenyan-phd-student-in-belgium-fights-to-end-global-malnutrition-with-insect-fortified-foods" 
				class="underline hover:text-accent-foreground/60 duration-300" target="_blank" rel="noopener noreferrer">Read More</a>
			</p>
			<button onclick={() => showNotification = false}>
				<CircleX class="h-5 w-5 ml-3 hover:text-accent-foreground/60 duration-300" />
			</button>
		</div>
	</div>
	{/if}

	<div class="md:container md:mx-auto px-4 flex h-16 items-center justify-between">
		<div class="flex items-center gap-4">
			<!-- Logo -->
			<a href="/" class="md:px-1">
				<img 
				src={$mode === 'dark' ? '/logo_dark.png' : '/logo_light.png'}
				alt="MaryaNutri" class="h-16 w-auto py-2" />
			</a>

			<!-- Contact Us button -->
			<Dialog.Root bind:open={dialogOpen}>
				<Dialog.Trigger class="mx-1">
					<!-- <Button>Contact Us</Button> 
					This avoid "... cannot contain button" warning
					-->
					{#snippet child({ props })}
						<div {...props} class={`${buttonVariants({ variant: "default", size: "default" })}`}>
							<Mail class="h-4 w-4 mr-1" />
							Contact Us
						</div>
					{/snippet}
				</Dialog.Trigger>
				<Dialog.Content>
					<Dialog.Header>
					  <Dialog.Title>Contact Us</Dialog.Title>
					  <Dialog.Description>
						Fill out the form below to get in touch with us.
					  </Dialog.Description>
					</Dialog.Header>
					<form class="space-y-4">
						<Input bind:value={name} placeholder="Your Name" required />
						<Input type="email" bind:value={email} placeholder="Your Email" required />
						<Textarea bind:value={message} placeholder="Type your message here" required />
						<Button disabled onclick={() => dialogOpen = false} type="submit">Send Message</Button>
						<p class="text-destructive">WARNING: This form is not yet functional! Contact us through contact@maryanutri.com</p>
					</form>
				</Dialog.Content>
			</Dialog.Root>
		
			<!-- Socials -->
			<a href="https://www.facebook.com/maryanutri" class="hidden md:flex duration-300 hover:text-primary" aria-label="Facebook">
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" width="2rem" height="2rem" viewBox="0 0 24 24">
					<path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
				</svg>
			</a>
			<a href="https://www.linkedin.com/company/maryanutri" class="hidden md:flex duration-300 hover:text-primary" aria-label="Linkedin">
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" width="2rem" height="2rem" viewBox="0 0 24 24">
					<path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
				</svg>
			</a>
		</div>

		<!-- Navigation desktop -->
		<ul class="hidden md:flex items-center gap-8 justify-center lg:-ml-40">
			{#each navItems as item}
				<li>
				<div class="px-3">
					<a
					href={item.href}
					class="group text-lg font-medium transition duration-300 hover:text-primary relative overflow-hidden">
					{item.label}
					<span class="block w-full h-0.5 bg-primary/75 transform origin-center scale-x-0 transition-transform duration-500 group-hover:scale-x-125"
						class:scale-x-125={$page.url.pathname === item.href}></span>
					</a>
				</div>
				</li>
			{/each}
		</ul>
		

		<div class="flex items-center gap-4">
			<!-- Theme button desktop -->
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="hidden md:flex">
				  <!-- <Button variant="outline" size="icon">
					<Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
					<Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
					<span class="sr-only">Toggle theme</span>
				  </Button> FIX warning!!! -->
				  	{#snippet child({ props })}
						<div {...props} class={buttonVariants({ variant: "outline", size: "icon" })}>
							<Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
							<Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
							<span class="sr-only">Toggle theme</span>
						</div>
			  	  	{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.GroupHeading>Theme</DropdownMenu.GroupHeading>
						<DropdownMenu.Separator/>
						<DropdownMenu.Item onclick={() => setMode("light")}>
							<Sun class="h-6 w-6 mr-2" />
							Light</DropdownMenu.Item>
						<DropdownMenu.Item onclick={() => setMode("dark")}>
							<Moon class="h-6 w-6 mr-2" />
							Dark</DropdownMenu.Item>
						<DropdownMenu.Item onclick={() => resetMode()}>
							<MonitorSmartphone class="h-6 w-6 mr-2" />
							System</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>

			<!-- Language buttom -->
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<!-- <Button variant="outline" size="icon">
						<Languages class="h-6 w-6" />
					</Button> FIX warning!!! -->
					{#snippet child({ props })}
						<div {...props} class={buttonVariants({ variant: "outline", size: "icon" })}>
							<Languages class="h-6 w-6" />
						</div>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
				  <DropdownMenu.Group>
					<DropdownMenu.GroupHeading>Language</DropdownMenu.GroupHeading>
					<DropdownMenu.Separator />
					<DropdownMenu.Item><span class=mr-1>🇬🇧</span> English</DropdownMenu.Item>
					<DropdownMenu.Item><span class=mr-1>🇫🇷</span> French</DropdownMenu.Item>
					<DropdownMenu.Item><span class=mr-1>🇳🇱</span> Dutch</DropdownMenu.Item>
				  </DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>

			<!-- Navigation mobile -->
			<Sheet>
				<SheetTrigger class="md:hidden">
					<Menu class="h-6 w-6" />
				</SheetTrigger>
				<SheetContent side="right">
					<div class="flex space-x-6">
						<a href="/" class="md:px-1">
							<img 
							src={$mode === 'dark' ? '/logo_dark.png' : '/logo_light.png'}
							alt="MaryaNutri" class="h-16 w-auto py-2" />
						</a>
						<SheetHeader>
							<SheetTitle>Follow us!</SheetTitle>
							<SheetDescription class="flex items-center justify-center space-x-4">
								<a href="https://www.facebook.com/maryanutri" class="duration-300 hover:text-primary" aria-label="Facebook">
									<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" width="2rem" height="2rem" viewBox="0 0 24 24">
										<path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
									</svg>
								</a>
								<a href="https://www.linkedin.com/company/maryanutri" class="duration-300 hover:text-primary" aria-label="Linkedin">
									<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" width="2rem" height="2rem" viewBox="0 0 24 24">
										<path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
									</svg>
								</a>
							</SheetDescription>
						</SheetHeader>
					</div>
					<Separator class="my-8"/>
					<nav class="flex flex-col gap-6">
						{#each navItems as item}
							<a href={item.href} 
							class="text font-medium ml-3 transition-colors hover:text-primary"
							class:text-primary={$page.url.pathname === item.href}
							>{item.label}</a>
						{/each}
					</nav>
					<Separator class="my-8"/>
					<!-- Theme and language -->
					<div class="flex flex-col gap-4">
						<DropdownMenu.Root>
							<DropdownMenu.Trigger class="flex">
								<Button variant="outline" size="icon" class="mr-1">
									<Sun class="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
									<Moon class="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
								</Button>
								<span class="text-accent-foreground font-normal ml-3 my-auto">Switch theme</span>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content>
								<DropdownMenu.Item onclick={() => setMode("light")}>
									<Sun class="h-6 w-6 mr-2" />
									Light</DropdownMenu.Item>
								<DropdownMenu.Item onclick={() => setMode("dark")}>
									<Moon class="h-6 w-6 mr-2" />
									Dark</DropdownMenu.Item>
								<DropdownMenu.Item onclick={() => resetMode()}>
									<MonitorSmartphone class="h-6 w-6 mr-2" />
									System</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
						<DropdownMenu.Root>
							<DropdownMenu.Trigger class="flex">
								<Button variant="outline" size="icon" class="mr-1">
									<Languages class="h-6 w-6" />
								</Button>
								<span class="text-accent-foreground font-normal ml-3 my-auto">Switch language</span>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content>
								<DropdownMenu.Item><span class=mr-1>🇬🇧</span> English</DropdownMenu.Item>
								<DropdownMenu.Item><span class=mr-1>🇫🇷</span> French</DropdownMenu.Item>
								<DropdownMenu.Item><span class=mr-1>🇳🇱</span> Dutch</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	</div>
</nav>

<!-- more space when showNotification is true -->
<main 
	class:mt-24={showNotification}
	class:mt-16={!showNotification}
>
	{@render children()}
</main>

<footer class="bg-accent py-10 pb-8">
	<div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
	  
	  <!-- About Section -->
	  <div>
		<h3 class="text-xl font-semibold mb-4">About Us</h3>
		<p class="">
			Join us in our mission to end global malnutrition!
		</p>
	  </div>
	  
	  <!-- Links Section -->
	  <div>
		<h3 class="text-xl font-semibold mb-4">Quick Links</h3>
		<ul class="space-y-2">
		  <li><a href="/" class="duration-300 hover:text-primary">Home</a></li>
		  <li><a href="/products" class="duration-300 hover:text-primary">Products</a></li>
		  <li><a href="/news" class="duration-300 hover:text-primary">News & Events</a></li>
		  <li><a href="/about" class="duration-300 hover:text-primary">About</a></li>
		</ul>
	  </div>
	  
	  <!-- Contact Section -->
	  <div>
		<h3 class="text-xl font-semibold mb-4">Contact Us</h3>
		<p class="">contact@maryanutri.com</p>
		<p class="">Ghent, Belgium</p>
	  </div>
	  
	  <!-- Social Media Section -->
	  <div>
		<h3 class="text-xl font-semibold mb-4">Follow Us</h3>
		<div class="flex space-x-4">
			<a href="https://www.facebook.com/maryanutri" class="duration-300 hover:text-primary" aria-label="Facebook">
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" width="2rem" height="2rem" viewBox="0 0 24 24">
					<path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
				</svg>
			</a>
			<a href="https://www.linkedin.com/company/maryanutri" class="duration-300 hover:text-primary" aria-label="Linkedin">
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" width="2rem" height="2rem" viewBox="0 0 24 24">
					<path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
				</svg>
			</a>
		</div>
	  </div>
	  
	</div>
	<div class="px-8 my-8">
		<Separator/>
	</div>
	<div class="text-center">
	  &copy; {new Date().getFullYear()} MaryaNutri. All rights reserved.
	</div>
	<div class="text-center mt-8 text-sm">
	  Made with ❤️ by <a class="font-mono duration-300 hover:text-destructive" href="https://github.com/robsyc" target="_blank" rel="noopener noreferrer">robsyc</a>
	</div>
</footer>