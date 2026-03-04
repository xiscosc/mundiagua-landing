<script lang="ts">
	import { page } from "$app/state";
	import logo from "$lib/assets/logo_white.avif";
	import * as m from "$lib/paraglide/messages.js";
	import { getLocale, locales, localizeHref } from "$lib/paraglide/runtime.js";

	const currentPath = $derived(page.url.pathname);
	const isContact = $derived(currentPath.includes("/contact"));

	let langMenuOpen = $state(false);
	let mobileMenuOpen = $state(false);
</script>

<header class="fixed top-0 z-50 w-full bg-blue-900/80 backdrop-blur-sm">
	<nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
		<a href={localizeHref("/")} class="flex items-center">
			<img src={logo} alt="Mundiagua" class="w-40 md:w-52" />
		</a>

		<!-- Desktop nav -->
		<div class="hidden items-center gap-6 md:flex">
			<a
				href={localizeHref("/")}
				class="text-sm text-white transition-colors hover:text-white/80"
				class:font-semibold={!isContact}
			>
				{m.nav_home()}
			</a>
			<a
				href="https://www.facebook.com/mundiagua"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-white transition-colors hover:text-white/80"
			>
				Facebook
			</a>
			<a
				href="https://www.instagram.com/mundiaguabalear"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-white transition-colors hover:text-white/80"
			>
				Instagram
			</a>
			<a
				href={localizeHref("/contact")}
				class="text-sm text-white transition-colors hover:text-white/80"
				class:font-semibold={isContact}
			>
				{m.nav_contact()}
			</a>

			<div class="relative">
				<button
					onclick={() => (langMenuOpen = !langMenuOpen)}
					class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/30 transition-colors hover:border-white/60"
					aria-label="Change language"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<circle cx="12" cy="12" r="10" />
						<path d="M2 12h20" />
						<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
					</svg>
				</button>

				{#if langMenuOpen}
					<div class="absolute right-0 top-full mt-2 overflow-hidden rounded-lg bg-white shadow-lg">
						{#each locales as l}
							<a
								href={localizeHref("/", { locale: l })}
								data-sveltekit-reload
								onclick={() => (langMenuOpen = false)}
								class="block px-4 py-2 text-sm uppercase text-gray-700 transition-colors hover:bg-blue-50"
								class:bg-blue-100={l === getLocale()}
								class:font-semibold={l === getLocale()}
							>
								{l}
							</a>
						{/each}
					</div>
				{/if}
			</div>
		</div>

		<!-- Mobile hamburger -->
		<button
			class="flex items-center md:hidden"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileMenuOpen}
				<svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</nav>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="border-t border-white/10 bg-blue-900/95 px-6 pb-6 pt-4 md:hidden">
			<div class="flex flex-col gap-4">
				<a
					href={localizeHref("/")}
					onclick={() => (mobileMenuOpen = false)}
					class="text-base text-white"
					class:font-semibold={!isContact}
				>
					{m.nav_home()}
				</a>
				<a
					href="https://www.facebook.com/mundiagua"
					target="_blank"
					rel="noopener noreferrer"
					class="text-base text-white"
				>
					Facebook
				</a>
				<a
					href="https://www.instagram.com/mundiaguabalear"
					target="_blank"
					rel="noopener noreferrer"
					class="text-base text-white"
				>
					Instagram
				</a>
				<a
					href={localizeHref("/contact")}
					onclick={() => (mobileMenuOpen = false)}
					class="text-base text-white"
					class:font-semibold={isContact}
				>
					{m.nav_contact()}
				</a>

				<div class="flex gap-3 border-t border-white/10 pt-4">
					{#each locales as l}
						<a
							href={localizeHref("/", { locale: l })}
							data-sveltekit-reload
							onclick={() => (mobileMenuOpen = false)}
							class="rounded-md px-3 py-1 text-sm uppercase text-white transition-colors {l === getLocale() ? 'bg-white/20 font-semibold' : ''}"
						>
							{l}
						</a>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</header>
