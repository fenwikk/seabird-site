import type { GetSession } from "@sveltejs/kit";
import cookie from "cookie";

export const getSession: GetSession = ({ request }) => {
	return cookie.parse(request.headers.get("cookie") || "").session;
};
