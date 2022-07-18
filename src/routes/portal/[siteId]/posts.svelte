<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { currentSite } from '$lib/stores/currentSite';
	import { sites } from '$lib/stores/sites';
	import { supabase, type Post } from '$lib/supabase/client';

	let loading = false;

	let unsavedPosts = $currentSite?.blog_posts || [];

	currentSite.subscribe((site) => {
		unsavedPosts = site?.blog_posts || [];
	});

	const handleOnInput = (postIndex: number, property: 'title' | 'description' | 'body', value: string) => {
		const post = unsavedPosts[postIndex];

		if (property == 'title') {
			post.title = value;
		} else if (property == 'description') {
			post.description = value;
		} else if (property == 'body') {
			post.body = value;
		}
	};

	const handleOnSectionInput = (
		postIndex: number,
		sectionIndex: number,
		property: 'heading' | 'body',
		value: string
	) => {
		const section = unsavedPosts[postIndex].sections[sectionIndex];

		if (property == 'heading') {
			section.heading = value;
		} else if (property == 'body') {
			section.body = value;
		}
	};

	const handleSave = async () => {
		loading = true;

		const currentSiteIndex = $sites.findIndex((value) => value.id == $currentSite?.id);

		let newSiteData = $currentSite;
		let newSitesData = $sites;

		if (!newSiteData) throw new Error('No current site selected');
		if (!newSitesData) throw new Error('No sites array found');

		newSiteData.blog_posts = unsavedPosts || [];

		currentSite.set(newSiteData);

		newSitesData[currentSiteIndex] = newSiteData;
		sites.set(newSitesData);

		await supabase.from('sites').update(newSiteData).match({ id: newSiteData.id });

		loading = false;
		location.reload();
	};
</script>

<form class="" on:submit|preventDefault={handleSave}>
	<div class="bg-gray-50/50 border-b">
		<div class="container flex justify-between items-center py-12 ">
			<h1 class="">Posts</h1>

			<div class="pt-1">
				<input
					type="submit"
					class="hard-shadow active:shadow-none active:-mr-1 active:ml-1 active:-mb-1 active:mt-1 border-4 border-black px-4 py-2 bg-green-400 hover:bg-green-500 font-bold"
					value={loading ? 'Saving...' : 'Save'}
					disabled={loading}
				/>
			</div>
		</div>
	</div>
	<div class="container py-6">
		{#each unsavedPosts || [] as post, i}
			<div class="border p-2 my-2">
				<div>
					<h1>{post.slug}</h1>
				</div>
				<div>
					<label for="title">Title</label>
					<input
						id="title"
						class="field"
						placeholder={post.title}
						value={post.title}
						on:input={(e) => handleOnInput(i, 'title', e.currentTarget.value)}
					/>
					<label for="description">Description</label>
					<input
						id="description"
						class="field"
						placeholder={post.description}
						value={post.description}
						on:input={(e) => handleOnInput(i, 'description', e.currentTarget.value)}
					/>
					<label for="body">Body</label>
					<input
						id="body"
						class="field"
						placeholder={post.body}
						value={post.body}
						on:input={(e) => handleOnInput(i, 'body', e.currentTarget.value)}
					/>
				</div>
			</div>
		{/each}
	</div>
</form>
