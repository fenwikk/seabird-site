import { supabase, type Profile } from "$lib/supabase/client";
import type { PostgrestError } from "@supabase/supabase-js";
import type { RequestHandler } from "@sveltejs/kit";

export type ProfileInput = {
	eq?: EQ;
	single: boolean;
};

type EQ = {
	column: string | number | symbol;
	value: never;
};

export const get: RequestHandler = async ({ request }) => {
	const inputData = request.json() as Partial<ProfileInput>;

	let ProfileFetchBuilder = supabase.from("profiles").select();

	if (inputData.eq) {
		ProfileFetchBuilder = ProfileFetchBuilder.eq(inputData.eq.column, inputData.eq.value);
	}

	let profiles: Profile | Profile[];
	let error: PostgrestError | null;
	if (inputData.single) {
		const fetchedProfiles = await ProfileFetchBuilder.single();

		error = fetchedProfiles.error;
		profiles = fetchedProfiles.data;
	} else {
		const fetchedProfiles = await ProfileFetchBuilder;

		error = fetchedProfiles.error;
		profiles = fetchedProfiles.data || [];
	}

	if (error) {
		return {
			status: 502,
			body: { message: error.message } as EndpointOutput
		};
	}

	return {
		status: 302,
		body: { data: profiles } as EndpointOutput<Profile | Profile[]>
	};
};
