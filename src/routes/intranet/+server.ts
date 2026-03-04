import { redirect } from "@sveltejs/kit";

export const GET = () => {
	redirect(308, "https://datos-antiguos.mundiagua.cloud");
};
