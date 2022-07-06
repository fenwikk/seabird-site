<script lang="ts" context="module">
	import type { LoadOutput } from "@sveltejs/kit";
	import { profile } from "$lib/supabase/stores/profile";
	import { supabase, type Profile, type Site } from "$lib/supabase/client";

	export const load = async (): Promise<LoadOutput> => {
		const user = supabase.auth.user();

		if (user) {
			let { data, error, status } = await supabase
				.from("profiles")
				.select()
				.eq("id", user.id)
				.single();

			if (error && status !== 406) throw error;

			console.log("data");
			profile.set(data as Profile);
		}

		let { data, error, status } = await supabase.from("sites").select();

		const fetchedSites = data as Site[];
		let userSites: Site[] = [];

		for (let i = 0; i < fetchedSites.length; i++) {
			const site = fetchedSites[i];

			if (site.admins.find((value) => value == user?.id)) {
				const fetchedData = supabase.storage
					.from("site-images")
					.getPublicUrl(site.site_info.ico || "favicon.png");

				site.site_info.ico_url = fetchedData.publicURL || "";

                userSites.push(site)
			}
		}

		currentSite.set(userSites[0]);
        sites.set(userSites)

		if (error && status !== 406) throw error;

		return {
			props: {
			}
		};
	};
</script>

<script lang="ts">
	import { user } from "$lib/supabase/stores/user";
	import Select from "svelte-select";
	import { currentSite } from "$lib/stores/currentSite";
	import { sites } from "$lib/stores/sites";

	import blob from "$lib/assets/blob.png";
	import chevron from "$lib/assets/chevron.png";
	import SelectIcon from "$lib/components/SelectIcon.svelte";
	import { goto } from "$app/navigation";
	import Auth from "$lib/components/Auth.svelte";
import { get } from "svelte/store";

	let items = $sites.map((site, i) => {
		return { value: i, label: site.site_info.title };
	});

	function handleSelect(event: any) {
		currentSite.set($sites[event.detail.value]);
	}

	const authUser = supabase.auth.user();
	if (authUser) user.set(authUser);

	supabase.auth.onAuthStateChange(async (_, session) => {
		if (session && session.user) {
            user.set(session.user);
    
            let { data, error, status } = await supabase
                .from("profiles")
                .select()
                .eq("id", session?.user?.id)
                .single();
    
            if (error && status !== 406) throw error;
    
            profile.set(data as Profile);
        }
	});
</script>

<svelte:head>
	<title>Sea Portal | {$currentSite?.site_info.title}</title>
</svelte:head>

<div>
	{#if $user}
		{#if $profile}
			<div class="border-b">
				<div class="container">
					<div class="py-4 flex items-center">
						<div class="flex items-center">
							<img src={blob} class="w-12 h-12" alt="" />
							<div class="mx-5">
								<div class="w-[1px] h-8 rotate-12 bg-black/25" />
							</div>
							<div class="select w-52">
								<Select
									bind:items
									Icon={SelectIcon}
									iconProps={{ ico: $currentSite?.site_info.ico_url }}
									value={items[0]}
									isClearable={false}
									showIndicator={true}
									indicatorSvg="<img src={chevron} alt=''>"
									on:select={handleSelect}
								/>
							</div>
						</div>
					</div>
					<ul class="flex">
						<li
							on:click={() => goto("/portal/")}
							class="border-b-2 border-transparent hover:border-black py-2 mx-3"
						>
							Home
						</li>
						<li
							on:click={() => goto("/portal/info")}
							class="border-b-2 border-transparent hover:border-black py-2 mx-3"
						>
							Site Info
						</li>
						<li
							on:click={() => goto("/portal/pages")}
							class="border-b-2 border-transparent hover:border-black py-2 mx-3"
						>
							Pages
						</li>
					</ul>
				</div>
			</div>
			<div>
				<slot />
			</div>
		{:else}
			No Profile
		{/if}
	{:else}
		<Auth />
	{/if}
</div>
