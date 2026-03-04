import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(async () => ({
	plugins: [
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/lib/paraglide",
			strategy: ["url", "cookie", "preferredLanguage", "baseLocale"],
			disableAsyncLocalStorage: true,
		}),
		tailwindcss(),
		enhancedImages(),
		sveltekit(),
	],
}));
