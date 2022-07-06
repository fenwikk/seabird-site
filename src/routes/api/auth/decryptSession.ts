import { decrypt, encrypt } from "$lib/crypto";
import type { RequestHandler } from "@sveltejs/kit";
import { networkInterfaces } from "os";

export type UserAuthInput = {
	encryptedSession: string;
};

export const post: RequestHandler = async ({ request, clientAddress }) => {
	const input = (await request.json()) as UserAuthInput;
	let isLocal = false;

	const nets = networkInterfaces();

	for (const name of Object.keys(nets)) {
		const net = nets[name];

		if (net) {
			for (const n of net) {
				const familyV4Value = typeof n.family === "string" ? "IPv4" : 4;
				if (n.family === familyV4Value) {
					if (n.address == clientAddress) isLocal = true;
				}
			}
		}
	}

	if (isLocal) {
		return {
			body: { data: JSON.stringify(decrypt(input.encryptedSession)) }
		};
	} else {
		return {
			status: 403
		};
	}
};
