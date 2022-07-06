<script lang="ts" context="module">
	import type { Load, LoadOutput } from "@sveltejs/kit";
	import { profile } from "$lib/supabase/stores/profile";
	import { supabase, type Profile, type Site } from "$lib/supabase/client";

	export const load: Load = async ({ session, fetch }) => {
		let user: User | null
		

		if (browser) {
			user = supabase.auth.user()
		} else {
		}

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

			if (site.admins.find((value) => value == user?.id) || get(dev_id) == user?.id) {
				const fetchedData = supabase.storage
					.from("site-images")
					.getPublicUrl(site.site_info.ico || "favicon.png");

				site.site_info.ico_url = fetchedData.publicURL || "";

				userSites.push(site);
			}
		}

		sites.set(userSites);

		if (error && status !== 406) throw error;

		return {
			props: {}
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
	import { dev_id } from "$lib/stores/env";
	import { browser } from "$app/env";
	import { page } from "$app/stores";
	import Banner from "$lib/components/Banner.svelte";
	import { decrypt } from "$lib/crypto";
import type { Session, User } from "@supabase/supabase-js";

	let items = $sites.map((site, i) => {
		return { value: i, label: site.site_info.title };
	});

	function handleSelect(event: any) {
		const newSite = $sites[event.detail.value];
		goto("/portal/" + newSite?.id);
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
	{#if $user || !browser}
		{#if $profile || !browser}
			<div class="border-b">
				<div class="container">
					<div class="py-4 flex items-center justify-between">
						<div class="flex items-center">
							<img src={blob} class="w-12 h-12" alt="" />
							<div class="mx-5">
								<div class="w-[1px] h-8 rotate-12 bg-black/25" />
							</div>
							<div class="select w-52">
								<Select
									{items}
									value={$sites.findIndex((value) => $page.params.siteId == value.id)}
									Icon={SelectIcon}
									iconProps={{ ico: $currentSite?.site_info.ico_url }}
									isClearable={false}
									showIndicator={true}
									indicatorSvg="<img src={chevron} alt=''>"
									on:select={handleSelect}
								/>
							</div>
						</div>

						<div>
							<button on:click={() => supabase.auth.signOut()}>Log Out</button>
						</div>
					</div>
					{#if $currentSite}
						<ul class="flex">
							<li
								on:click={() => goto("/portal/" + $currentSite?.id)}
								class="border-b-2 border-transparent hover:border-black py-2 mx-3"
							>
								Home
							</li>
							<li
								on:click={() => goto("/portal/" + $currentSite?.id + "/info")}
								class="border-b-2 border-transparent hover:border-black py-2 mx-3"
							>
								Site Info
							</li>
							<li
								on:click={() => goto("/portal/" + $currentSite?.id + "/pages")}
								class="border-b-2 border-transparent hover:border-black py-2 mx-3"
							>
								Pages
							</li>
						</ul>
					{/if}
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
