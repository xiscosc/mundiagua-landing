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
	class={`relative flex items-center bg-blue-900 bg-cover bg-center bg-no-repeat ${minHeightClass}`}
	style={`background-image: url(${hero});`}
>
	<div class="absolute inset-0 bg-linear-to-br from-blue-900/80 via-blue-500/60 to-blue-600/70"></div>
	<div class={`relative z-10 mx-auto max-w-7xl px-6 lg:px-8 ${contentPaddingClass}`}>
		{@render children?.()}
	</div>
</section>
