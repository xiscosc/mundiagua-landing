<script lang="ts">
import { page } from "$app/state";
import * as m from "$lib/paraglide/messages.js";
import { getLocale, locales, localizeHref } from "$lib/paraglide/runtime.js";

const currentPath = $derived(page.url.pathname);
const isContact = $derived(currentPath.includes("/contact"));

let langMenuOpen = $state(false);
let mobileMenuOpen = $state(false);
</script>

<header class="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<nav class="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/90 px-3 py-2 shadow-[0_30px_55px_-35px_rgba(6,25,46,0.35)] backdrop-blur-xl sm:px-4">
			<a href={localizeHref("/")} aria-label="Mundiagua home" class="-ml-1 flex shrink-0 items-center rounded-xl px-1 py-1">
				<enhanced:img src="../assets/logo_black.png" alt="Mundiagua" class="h-12 w-auto object-contain" />
			</a>

			<div class="hidden items-center gap-2 md:flex">
				<div class="flex items-center rounded-full border border-slate-200 bg-slate-50/80 p-1">
					<a
						href={localizeHref("/")}
						class={`rounded-full px-4 py-1.5 text-sm transition-colors ${
							!isContact
								? "bg-slate-900 font-semibold text-white"
								: "text-slate-700 hover:bg-white hover:text-slate-900"
						}`}
					>
						{m.nav_home()}
					</a>
					<a
						href={localizeHref("/contact")}
						class={`rounded-full px-4 py-1.5 text-sm transition-colors ${
							isContact
								? "bg-slate-900 font-semibold text-white"
								: "text-slate-700 hover:bg-white hover:text-slate-900"
						}`}
					>
						{m.nav_contact()}
					</a>
				</div>

				<div class="ml-1 flex items-center gap-1">
					<a
						href="https://www.facebook.com/mundiagua"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
						class="inline-grid h-8 w-8 place-items-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
					>
						<svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.6c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.8-.1-1.5-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3.2h2.7V21h2.8z" />
						</svg>
					</a>
					<a
						href="https://www.instagram.com/mundiaguabalear"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
						class="inline-grid h-8 w-8 place-items-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
					>
						<svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
							<rect x="3.5" y="3.5" width="17" height="17" rx="5" />
							<circle cx="12" cy="12" r="4" />
							<circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
						</svg>
					</a>
				</div>

				<div class="relative ml-1">
					<button
						onclick={() => (langMenuOpen = !langMenuOpen)}
						class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white transition-colors hover:bg-slate-100"
						aria-label="Change language"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<circle cx="12" cy="12" r="10" />
							<path d="M2 12h20" />
							<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
						</svg>
					</button>

					{#if langMenuOpen}
						<div class="absolute right-0 top-full mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
							{#each locales as l}
								<a
									href={localizeHref("/", { locale: l })}
									data-sveltekit-reload
									onclick={() => (langMenuOpen = false)}
									class="block px-4 py-2 text-sm uppercase text-slate-700 transition-colors hover:bg-sky-50"
									class:bg-sky-100={l === getLocale()}
									class:font-semibold={l === getLocale()}
								>
									{l}
								</a>
							{/each}
						</div>
					{/if}
				</div>
			</div>

			<button
				class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white md:hidden"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<svg class="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</nav>

		{#if mobileMenuOpen}
			<div class="mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur md:hidden">
				<div class="flex flex-col gap-2">
					<a
						href={localizeHref("/")}
						onclick={() => (mobileMenuOpen = false)}
						class={`rounded-xl px-4 py-2 text-base transition-colors ${
							!isContact
								? "bg-sky-100 font-semibold text-slate-900"
								: "text-slate-700 hover:bg-slate-100"
						}`}
					>
						{m.nav_home()}
					</a>
					<a
						href={localizeHref("/contact")}
						onclick={() => (mobileMenuOpen = false)}
						class={`rounded-xl px-4 py-2 text-base transition-colors ${
							isContact
								? "bg-sky-100 font-semibold text-slate-900"
								: "text-slate-700 hover:bg-slate-100"
						}`}
					>
						{m.nav_contact()}
					</a>
					<a
						href="https://www.facebook.com/mundiagua"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-xl px-4 py-2 text-base text-slate-700 transition-colors hover:bg-slate-100"
					>
						Facebook
					</a>
					<a
						href="https://www.instagram.com/mundiaguabalear"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-xl px-4 py-2 text-base text-slate-700 transition-colors hover:bg-slate-100"
					>
						Instagram
					</a>

					<div class="mt-3 flex gap-2 border-t border-slate-200 pt-4">
						{#each locales as l}
							<a
								href={localizeHref("/", { locale: l })}
								data-sveltekit-reload
								onclick={() => (mobileMenuOpen = false)}
								class="rounded-lg px-3 py-1.5 text-sm uppercase transition-colors"
								class:bg-sky-100={l === getLocale()}
								class:text-slate-900={l === getLocale()}
								class:font-semibold={l === getLocale()}
								class:text-slate-600={l !== getLocale()}
							>
								{l}
							</a>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
</header>
