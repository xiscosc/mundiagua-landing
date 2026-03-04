import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { paraglideMiddleware } from "$lib/paraglide/server";
import {
	baseLocale,
	cookieName,
	extractLocaleFromHeader,
	isLocale,
	localizeUrl,
} from "$lib/paraglide/runtime";

const browserLanguageHandle: Handle = async ({ event, resolve }) => {
	if (event.request.method !== "GET" && event.request.method !== "HEAD") {
		return resolve(event);
	}

	const url = new URL(event.request.url);
	if (url.pathname !== "/") {
		return resolve(event);
	}

	const cookieLocale = event.request.headers
		.get("cookie")
		?.split("; ")
		.find((entry) => entry.startsWith(`${cookieName}=`))
		?.split("=")[1];

	if (cookieLocale && isLocale(cookieLocale)) {
		return resolve(event);
	}

	const preferredLocale = extractLocaleFromHeader(event.request);
	if (!preferredLocale || preferredLocale === baseLocale) {
		return resolve(event);
	}

	const redirectUrl = localizeUrl(url, { locale: preferredLocale });
	if (redirectUrl.href === url.href) {
		return resolve(event);
	}

	return new Response(null, {
		status: 307,
		headers: {
			Location: redirectUrl.href,
			Vary: "Accept-Language",
		},
	});
};

const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		event.request = localizedRequest;
		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace("%lang%", locale),
		});
	});

export const handle: Handle = sequence(browserLanguageHandle, paraglideHandle);
