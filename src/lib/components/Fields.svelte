<script lang="ts">
	import type { AnyField, DataObject, DataField } from "$lib/supabase/client";

	const instanceOfField = (object: any): object is DataField => {
		return "label" in object && "value" in object;
	};

	export let fields: (DataField | DataObject)[];
</script>

<div class="border p-2">
	{#each fields as field}
		{#if instanceOfField(field)}
				<label for={field.label}>{field.label}</label>
				<input type="text" class="field" value={field.value}>
		{:else}
			<h2>{field.title}</h2>
			<svelte:self fields={field.fields} />

			{#if field.meta?.fixedLength == false}
				Can create new
			{/if}
		{/if}
		{/each}
</div>
