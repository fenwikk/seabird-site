import { encrypt } from "$lib/crypto";
import { supabase } from "$lib/supabase/client";
import type { RequestHandler } from "@sveltejs/kit";
import type { ResponseHeaders } from "@sveltejs/kit/types/private";

export const post: RequestHandler = async ({ request }) => {
	const data = await request.json();

	const email: string = data.email;
	const saveCookie: boolean = data.saveCookie;

	const { session, error } = await supabase.auth.signIn({ email });

	if (error) {
		return {
			status: error.status,
			body: error.message
		};
	}

	let headers: Partial<ResponseHeaders> | undefined;
	if (saveCookie) {
		headers = {
			"set-cookie": `session=${encrypt(
				JSON.stringify(session)
			)}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${new Date(
				(session?.expires_at || 1) * 1000
			).toUTCString()};`
		};
	}

	return {
		status: 200,
		body: "success",
		headers
	};
};
