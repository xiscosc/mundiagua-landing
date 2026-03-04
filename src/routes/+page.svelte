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
	<title>Mundiagua</title>
	<meta name="description" content={m.hero_subtitle()} />
</svelte:head>

<HeroSection minHeightClass="min-h-[42rem]" contentPaddingClass="pb-24 pt-40 md:pb-28 md:pt-48">
	<div class="max-w-3xl">
		<h1 class="mt-5 text-4xl leading-tight font-bold text-white md:text-6xl">
			{m.hero_title()}
		</h1>
		<p class="mt-5 max-w-2xl text-lg text-white/90 md:text-xl">
			{m.hero_subtitle()}
		</p>
		<div class="mt-9 flex flex-wrap gap-3">
			<a
				href={localizeHref("/contact")}
				class="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
			>
				{m.nav_contact()}
			</a>
		</div>
	</div>
</HeroSection>

<section class="relative z-10 -mt-12 px-6 lg:px-8">
	<div class="mx-auto max-w-7xl rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-[0_28px_70px_-45px_rgba(10,37,64,0.58)] backdrop-blur-[6px] md:p-12">
		<div class="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
			<div>
				<p class="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase">{m.quote_label()}</p>
				<h2 class="mt-4 max-w-3xl text-2xl font-bold text-slate-900 md:text-4xl">{m.quote_title()}</h2>
			</div>
			<div class="flex items-center justify-center gap-3 md:justify-end">
				<a
					href="tel:+34971795177"
					aria-label="Call us"
					class="group inline-grid h-14 w-14 place-items-center rounded-full border border-slate-200 bg-white transition hover:border-sky-300 hover:shadow-lg"
				>
					<svg class="h-6 w-6 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
						<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 4.5c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 1.352A1.125 1.125 0 005.872.5H4.5A2.25 2.25 0 002.25 2.75V4.5z" />
					</svg>
				</a>
				<a
					href="https://wa.me/34663931426"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="WhatsApp"
					class="group inline-grid h-14 w-14 place-items-center rounded-full border border-slate-200 bg-white transition hover:border-emerald-300 hover:shadow-lg"
				>
					<svg class="h-6 w-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
						<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<section class="px-6 pt-18 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-8 max-w-3xl">
			<p class="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase">{m.brands_label()}</p>
			<h2 class="mt-3 text-2xl font-bold text-slate-900 md:text-4xl">{m.brands_title()}</h2>
		</div>
		<div class="grid gap-5 md:grid-cols-3">
			<div class="flex min-h-52 items-center justify-center overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-[0_28px_70px_-45px_rgba(10,37,64,0.58)] backdrop-blur-[6px]">
				<img src={idegis} alt="IDEGIS" class="h-28 w-full object-contain [transform:scale(2.8)]" />
			</div>
			<div class="flex min-h-52 items-center justify-center overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-[0_28px_70px_-45px_rgba(10,37,64,0.58)] backdrop-blur-[6px]">
				<img src={zodiac} alt="ZODIAC" class="h-28 w-full object-contain [transform:scale(2.1)]" />
			</div>
			<div class="flex min-h-52 items-center justify-center overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-[0_28px_70px_-45px_rgba(10,37,64,0.58)] backdrop-blur-[6px]">
				<img src={ath} alt="ATH" class="h-28 w-full object-contain [transform:scale(2.1)]" />
			</div>
		</div>
	</div>
</section>

<section class="px-6 pt-18 lg:px-8">
	<div class="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-linear-to-r from-[#0f3d69] via-[#14628f] to-[#1f8cc1] p-8 shadow-[0_30px_65px_-35px_rgba(11,42,74,0.9)] md:p-12">
		<div class="grid gap-8 md:grid-cols-[1.7fr_1fr] md:items-end">
			<div>
				<p class="text-xs font-semibold tracking-[0.14em] text-white/85 uppercase">{m.join_label()}</p>
				<h2 class="mt-4 max-w-2xl text-2xl font-bold text-white md:text-4xl">{m.join_title()}</h2>
			</div>
			<div class="md:text-right">
				<a
					href={localizeHref("/contact")}
					class="inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
				>
					{m.join_cta()}
				</a>
			</div>
		</div>
	</div>
</section>

<section class="px-6 pb-10 pt-18 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<p class="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase">{m.testimonials_label()}</p>
		<h2 class="mt-3 text-2xl font-bold text-slate-900 md:text-4xl">{m.testimonials_title()}</h2>
		<div class="mt-8 grid gap-5 md:grid-cols-3">
			{#each testimonials as testimonial, i}
				{@const tones = ["border-sky-200", "border-amber-300", "border-teal-200"]}
				<article class={`rounded-3xl border border-slate-200/70 border-t-4 bg-white/90 p-6 shadow-[0_28px_70px_-45px_rgba(10,37,64,0.58)] backdrop-blur-[6px] ${tones[i]}`}>
					<p class="text-base leading-relaxed text-slate-700">"{testimonial.text()}"</p>
					<p class="mt-5 text-sm font-bold tracking-wide text-slate-900 uppercase">{testimonial.author()}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
