<script lang="ts">
	import HeroSection from "$lib/components/HeroSection.svelte";
	import * as m from "$lib/paraglide/messages.js";
</script>

<svelte:head>
	<title>{m.contact_title()} - Mundiagua</title>
	<meta name="description" content={m.contact_heading()} />
</svelte:head>

<HeroSection minHeightClass="min-h-[32rem]" contentPaddingClass="pb-20 pt-36 md:pt-44">
	<div class="max-w-3xl">
		<p class="inline-flex items-center rounded-full border border-white/35 bg-white/12 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-white/95 uppercase">
			{m.contact_label()}
		</p>
		<h1 class="mt-5 text-4xl font-bold text-white md:text-6xl">{m.contact_title()}</h1>
		<p class="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">{m.contact_heading()}</p>
	</div>
</HeroSection>

<section class="relative z-10 -mt-10 px-6 lg:px-8">
	<div class="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1.25fr_1fr]">
		<div class="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-2 shadow-[0_28px_70px_-45px_rgba(10,37,64,0.58)] backdrop-blur-[6px]">
			<iframe
				title="Mundiagua location"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1537.2!2d2.7095721!3d39.5956742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979497409d9891%3A0xf15f90e8f17742f2!2sMundiagua!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
				width="100%"
				height="460"
				class="rounded-2xl"
				style="border:0;"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>

		<div class="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-[0_28px_70px_-45px_rgba(10,37,64,0.58)] backdrop-blur-[6px] md:p-10">
			<h2 class="text-2xl font-bold text-slate-900">{m.contact_heading()}</h2>
			<p class="mt-3 text-sm text-slate-600">{m.contact_hours()}</p>

			<ul class="mt-8 space-y-4">
				<li class="flex items-start gap-3 text-slate-700">
					<svg class="mt-0.5 h-5 w-5 shrink-0 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
					</svg>
					<a href="mailto:consultas@mundiaguabalear.com" class="break-all font-medium hover:text-sky-700 hover:underline">consultas@mundiaguabalear.com</a>
				</li>
				<li class="flex items-start gap-3 text-slate-700">
					<svg class="mt-0.5 h-5 w-5 shrink-0 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
					</svg>
					<a href="tel:+34971795177" class="font-medium hover:text-sky-700 hover:underline">971 795 177</a>
				</li>
				<li class="flex items-start gap-3 text-slate-700">
					<svg class="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
						<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
					</svg>
					<a href="https://wa.me/34663931426" target="_blank" rel="noopener noreferrer" class="font-medium hover:text-emerald-700 hover:underline">663 931 426</a>
				</li>
				<li class="flex items-start gap-3 text-slate-700">
					<svg class="mt-0.5 h-5 w-5 shrink-0 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
					</svg>
					<a href="https://maps.app.goo.gl/SdYfEGYYNbwLt32n7" target="_blank" rel="noopener noreferrer" class="font-medium hover:text-sky-700 hover:underline">Carrer de General Weyler, 58, 07141 Marratxi (Mallorca, Illes Balears)</a>
				</li>
			</ul>
		</div>
	</div>
</section>
