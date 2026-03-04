<script lang="ts">
import ath from "$lib/assets/ath.avif";
import idegis from "$lib/assets/idegis.avif";
import zodiac from "$lib/assets/zodiac.avif";
import HeroSection from "$lib/components/HeroSection.svelte";
import * as m from "$lib/paraglide/messages.js";
import { localizeHref } from "$lib/paraglide/runtime.js";

const testimonials = [
	{ text: () => m.testimonials_item0_text(), author: () => m.testimonials_item0_author() },
	{ text: () => m.testimonials_item1_text(), author: () => m.testimonials_item1_author() },
	{ text: () => m.testimonials_item2_text(), author: () => m.testimonials_item2_author() },
];
</script>

<svelte:head>
	<title>Mundiagua Balear</title>
	<meta name="description" content={m.hero_subtitle()} />
</svelte:head>

<!-- Hero -->
<HeroSection minHeightClass="min-h-150" contentPaddingClass="py-32">
		<h1 class="max-w-2xl text-5xl font-bold leading-tight text-white md:text-6xl">
			{m.hero_title()}
		</h1>
		<p class="mt-4 text-lg text-white/90">{m.hero_subtitle()}</p>
</HeroSection>

<!-- Quote / CTA -->
<section class="bg-gray-100">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
		<p class="text-sm font-semibold text-blue-700">{m.quote_label()}</p>
		<div class="mt-2 h-0.5 w-10 bg-blue-700"></div>
		<h2 class="mt-4 max-w-2xl text-2xl font-bold text-gray-900 md:text-3xl">
			{m.quote_title()}
		</h2>
		<div class="mt-6 flex items-center gap-4">
			<a href="tel:+34971795177" aria-label="Call us">
				<svg class="h-10 w-10 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
				</svg>
			</a>
			<a href="https://wa.me/34663931426" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
				<svg class="h-10 w-10 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Brands -->
<section class="bg-white">
	<div class="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
		<p class="text-sm font-semibold text-gray-600">{m.brands_label()}</p>
		<h2 class="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">{m.brands_title()}</h2>
		<div class="mt-6 grid grid-cols-1 items-center gap-4 md:mt-10 md:grid-cols-3 md:gap-12">
			<img src={idegis} alt="IDEGIS" class="mx-auto w-full object-contain md:w-full" />
			<img src={zodiac} alt="ZODIAC" class="mx-auto w-full object-contain md:w-full" />
			<img src={ath} alt="ATH" class="mx-auto w-full object-contain md:w-full" />
		</div>
		<div class="mt-4 h-1 w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
	</div>
</section>

<!-- Join Team -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="rounded-lg bg-amber-500 px-8 py-12 md:px-12">
			<p class="text-sm font-semibold text-white">{m.join_label()}</p>
			<div class="mt-2 h-0.5 w-10 bg-white"></div>
			<h2 class="mt-4 max-w-xl text-2xl font-bold text-white md:text-3xl">
				{m.join_title()}
			</h2>
			<a
				href={localizeHref("/contact")}
				class="mt-8 inline-block rounded border-2 border-white px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-amber-500"
			>
				{m.join_cta()}
			</a>
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="bg-white">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
		<p class="text-sm font-semibold text-blue-700">{m.testimonials_label()}</p>
		<div class="mt-2 h-0.5 w-10 bg-blue-700"></div>
		<h2 class="mt-4 text-2xl font-bold text-gray-900 md:text-3xl">{m.testimonials_title()}</h2>
		<div class="mt-10 space-y-6">
			{#each testimonials as testimonial, i}
				{@const colors = [
					"border-blue-200 bg-blue-50",
					"border-amber-400 bg-amber-50",
					"border-blue-400 bg-blue-50",
				]}
				<div class="border-l-4 py-4 pl-6 {colors[i]}">
					<p class="text-lg text-gray-700">"{testimonial.text()}"</p>
					<p class="mt-2 text-sm font-bold text-gray-900">{testimonial.author()}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
