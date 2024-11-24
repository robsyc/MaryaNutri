<script lang="ts">
	import '../app.css';
	import { ModeWatcher, toggleMode, mode } from "mode-watcher";
	import { Menu, Sun, Moon } from 'lucide-svelte';

	import { Button } from "$lib/components/ui/button";
	import { Sheet, SheetContent, SheetTrigger } from "$lib/components/ui/sheet";
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Textarea } from "$lib/components/ui/textarea";

	let { children } = $props();

	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "Products", href: "/products" },
		{ label: "About", href: "/about" },
	];
</script>

<ModeWatcher />

<nav class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
	<div class="container flex h-20 items-center justify-between">

		<div class="flex items-center gap-6">
			<a href="/" class="">
				<img 
				src={$mode === 'dark' ? '/maryaporr-logo-square_white.png' : '/maryaporr-logo-square.png'}
				alt="MaryaNutri" class="h-20 w-auto p-1" />
			</a>
			<ul class="hidden md:flex items-center gap-6">
				{#each navItems as item}
					<li><a href={item.href} class="text-lg font-medium transition-colors hover:text-primary">{item.label}</a></li>
				{/each}
			</ul>
		</div>

		<div class="flex items-center gap-4">
			<Dialog.Root>
				<Dialog.Trigger>
					<Button>Contact Us</Button>
				</Dialog.Trigger>
				<Dialog.Content>
					<Dialog.Header>
					  <Dialog.Title>Contact Us</Dialog.Title>
					  <Dialog.Description>
						Fill out the form below to get in touch with us.
					  </Dialog.Description>
					</Dialog.Header>
					<form class="space-y-4">
						<Input placeholder="Your Name" required />
						<Input type="email" placeholder="Your Email" required />
						<Textarea placeholder="Type your message here" required />
						<Button type="submit">Send Message</Button>
					</form>
				</Dialog.Content>
			</Dialog.Root>

			<Button onclick={toggleMode} variant="outline" size="icon">
				<Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
				<Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
				<span class="sr-only">Toggle theme</span>
			</Button>

			<Sheet>
				<SheetTrigger class="md:hidden">
					<Menu class="h-6 w-6" />
				</SheetTrigger>
				<SheetContent side="right">
					<nav class="flex flex-col gap-4">
						{#each navItems as item}
							<a href={item.href} class="text-sm font-medium transition-colors hover:text-primary">{item.label}</a>
						{/each}
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	</div>
</nav>

<main class="mt-20">
	{@render children()}
</main>

<footer class="bg-accent">
	<p>Footer</p>
</footer>