<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { currentSite } from '$lib/stores/currentSite';
	import { sites } from '$lib/stores/sites';
	import { supabase, type Page } from '$lib/supabase/client';

	let loading = false;

	let unsavedPages = $currentSite?.pages || [];

	currentSite.subscribe((site) => {
		unsavedPages = site?.pages || [];
	});

	const handleOnInput = (pageIndex: number, property: 'title' | 'description', value: string) => {
		const page = unsavedPages[pageIndex];

		if (property == 'title') {
			page.title = value;
		} else if (property == 'description') {
			page.description = value;
		}
	};

	const handleOnSectionInput = (
		pageIndex: number,
		sectionIndex: number,
		property: 'heading' | 'body',
		value: string
	) => {
		const section = unsavedPages[pageIndex].sections[sectionIndex];

		if (property == 'heading') {
			section.heading = value;
		} else if (property == 'body') {
			section.body = value;
		}
	};

	const handleOnCTAInput = (
		pageIndex: number,
		sectionIndex: number,
		ctaIndex: number,
		property: 'text' | 'url',
		value: string
	) => {
		const ctas = unsavedPages[pageIndex].sections[sectionIndex].ctas;
        if (ctas == undefined)
        throw new Error("No CTAs");

        const cta = ctas[ctaIndex]
        

		if (property == 'text') {
			cta.text = value;
		} else if (property == 'url') {
			cta.url = value;
		}
	};

	const handleSave = async () => {
		loading = true;

		const currentSiteIndex = $sites.findIndex((value) => value.id == $currentSite?.id);

		let newSiteData = $currentSite;
		let newSitesData = $sites;

		if (!newSiteData) throw new Error('No current site selected');
		if (!newSitesData) throw new Error('No sites array found');

		newSiteData.pages = unsavedPages || [];

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
			<h1 class="">Pages</h1>

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
		{#each unsavedPages || [] as page, i}
			<div class="border p-2 my-2">
				<div>
					<h1>{page.slug}</h1>
				</div>
				<div>
					<label for="title">Title</label>
					<input
						id="title"
						class="field"
						placeholder={page.title}
						value={page.title}
						on:input={(e) => handleOnInput(i, 'title', e.currentTarget.value)}
					/>
					<label for="description">Description</label>
					<input
						id="description"
						class="field"
						placeholder={page.description}
						value={page.description}
						on:input={(e) => handleOnInput(i, 'description', e.currentTarget.value)}
					/>
				</div>

				<div class="border p-2 my-2">
					<h2>Sections</h2>

					{#each page.sections as section, sectionIndex}
						<div class="border p-2 my-2">
							<label for="heading">Heading</label>
							<input
								id="heading"
								class="field"
								placeholder={section.heading}
								value={section.heading}
								on:input={(e) =>
									handleOnSectionInput(i, sectionIndex, 'heading', e.currentTarget.value)}
							/>
							<label for="body">Body</label>
							<input
								id="body"
								class="field"
								placeholder={section.body}
								value={section.body}
								on:input={(e) =>
									handleOnSectionInput(i, sectionIndex, 'body', e.currentTarget.value)}
							/>

							{#if section.ctas != undefined && section.ctas != []}
								<div class="border p-2 my-2">
                                    <h3>Call To Actions</h3>

									{#each section.ctas as cta, ctaIndex}
										<div class="border p-2 my-2">
											<label for="text">Text</label>
											<input
												id="text"
												class="field"
												placeholder={cta.text}
												value={cta.text}
												on:input={(e) =>
													handleOnCTAInput(i, sectionIndex, ctaIndex, 'text', e.currentTarget.value)}
											/>
											<label for="url">Url</label>
											<input
												id="url"
												class="field"
												placeholder={cta.url}
												value={cta.url}
												on:input={(e) =>
													handleOnCTAInput(i, sectionIndex, ctaIndex, 'url', e.currentTarget.value)}
											/>
										</div>
									{/each}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</form>
