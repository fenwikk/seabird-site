import { supabase } from "$lib/supabase/client";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
	const { error } = await supabase.auth.signOut();

	if (error) {
		return {
			status: error.status,
			body: error.message
		};
	}

	return {
		status: 302,
		headers: {
			location: "/auth",
			"set-cookie": `session=; Path=/; HttpOnly; Secure; SameSite=Strict; expires=0;`
		}
	};
};
