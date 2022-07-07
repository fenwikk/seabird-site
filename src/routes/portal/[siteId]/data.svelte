<script lang="ts">
	import { currentSite } from "$lib/stores/currentSite";
	import type { AnyField, DataObject, DataField, ObjectMeta } from "$lib/supabase/client";
	import Fields from "$lib/components/Fields.svelte";

	let data: AnyField[] = [];

	const anyToField = (key: string, variable: any, meta?: ObjectMeta): DataField | DataObject => {
		let field: DataField | DataObject;

		if (Array.isArray(variable)) {
			let fields = [] as AnyField[];

			for (let i = 0; i < variable.length; i++) {
				const element = variable[i];
				
				let newMeta: ObjectMeta | undefined;
				let fieldsMeta = meta?.fields;
				if (fieldsMeta && Array.isArray(fieldsMeta)) newMeta = fieldsMeta[i];

				fields.push(anyToField(key + " " + i, element, newMeta));
			}

			field = {
				title: key,
				fields,
				meta
			} as DataObject;
		} else if (typeof variable == "object") {
			field = { title: key, fields: [], meta } as DataObject;

			for (const propKey in variable) {
				const property = variable[propKey] as any;

				let newMeta: ObjectMeta | undefined;
				let fieldsMeta = meta?.fields;
				if (fieldsMeta && !Array.isArray(fieldsMeta)) newMeta = fieldsMeta[propKey];

				field.fields.push(anyToField(propKey, property, newMeta));
			}
		} else if (typeof variable == "string" || typeof variable == "number") {
			field = { label: key, value: variable } as DataField;
		} else throw new Error("Sum Ting Wong " + typeof variable);

		return field;
	};

	for (const key in $currentSite?.data?.data as any) {
		const meta = $currentSite?.data.dataMeta[key];
		const variable = $currentSite?.data.data[key] as any;

		console.log(meta)
		data.push(anyToField(key, variable, meta));
	}
</script>

<div class="container">
	<Fields fields={data} />
</div>
