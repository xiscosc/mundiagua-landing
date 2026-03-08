import { redirect } from "@sveltejs/kit";
import { localizeHref } from "$lib/paraglide/runtime.js";

export function load() {
	redirect(307, localizeHref("/"));
}
