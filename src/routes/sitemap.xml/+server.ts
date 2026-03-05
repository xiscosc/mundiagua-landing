import type { RequestHandler } from "./$types";

const localizedPages = ["/", "/contact", "/en", "/en/contact", "/de", "/de/contact"];

export const GET: RequestHandler = ({ url }) => {
	const urls = localizedPages
		.map(
			(path) => `
	<url>
		<loc>${url.origin}${path}</loc>
	</url>`,
		)
		.join("");

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(body, {
		headers: {
			"cache-control": "public, max-age=0, s-maxage=3600",
			"content-type": "application/xml; charset=utf-8",
		},
	});
};
