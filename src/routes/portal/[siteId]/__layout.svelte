<script lang="ts" context="module">
	import { page } from "$app/stores";
	import { currentSite } from "$lib/stores/currentSite";
import { dev_id } from "$lib/stores/env";

	import { sites } from "$lib/stores/sites";
import { supabase, type Profile, type Site } from "$lib/supabase/client";
import { profile } from "$lib/supabase/stores/profile";

	import type { LoadInput, LoadOutput } from "@sveltejs/kit";
	import { get } from "svelte/store";

	export const load = async ({ params }: LoadInput): Promise<LoadOutput> => {
		let { data } = await supabase.from("sites").select();

		const fetchedSites = data as Site[];

		const site = fetchedSites.find((value) => {
            return value.id == params.siteId
        });

		let status = 200;

		if (site) currentSite.set(site);
		else status = 404;

		return {
			status
		};
	};
</script>

<slot />
