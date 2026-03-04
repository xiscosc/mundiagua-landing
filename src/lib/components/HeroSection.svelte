<script lang="ts">
	import type { Snippet } from "svelte";
	import hero from "$lib/assets/hero.avif";

	let {
		minHeightClass = "min-h-150",
		contentPaddingClass = "py-32",
		children,
	}: {
		minHeightClass?: string;
		contentPaddingClass?: string;
		children?: Snippet;
	} = $props();
</script>

<section
	class={`relative flex items-center overflow-hidden bg-slate-900 bg-cover bg-center bg-no-repeat ${minHeightClass}`}
	style={`background-image: url(${hero});`}
>
	<div class="absolute inset-0 bg-linear-to-br from-[#0b2a4a]/90 via-[#165d86]/78 to-[#2d92c6]/76"></div>
	<div class="absolute -left-20 top-12 h-64 w-64 rounded-full bg-white/14 blur-3xl"></div>
	<div class="absolute -right-24 bottom-2 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl"></div>

	<div class={`relative z-10 mx-auto max-w-7xl px-6 lg:px-8 ${contentPaddingClass}`}>
		{@render children?.()}
	</div>
</section>
