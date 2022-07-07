import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SVELTE_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SVELTE_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Profile {
	id: string;
	updated_at: Date;
	username: string;
}

export interface Site {
	id: string;
	site_info: SiteInfo;
	admins: string[];
	pages: Page[];
	data: SiteData;
}

export type SiteInfo = {
	title: string;
	tagline: string;
	ico?: string;
	ico_url?: string;
};

export interface Page {
	slug: string;
	title: string;
	description: string;
	use_tagline: boolean;
	sections: Section[];
}

export interface Section {
	heading: string;
	body: string;
	ctas?: CTA[];
}

export interface CTA {
	text: string;
	url: string;
}

export interface SiteData {
	dataMeta: { [key: string]: ObjectMeta };
	data: never;
}

export interface ObjectMeta {
	fixedLength?: boolean;

	fields?: { [key: string]: ObjectMeta } | ObjectMeta[];
}

export interface DataObject {
	meta?: ObjectMeta;
	title: string;
	fields: AnyField[];
}

export interface DataField {
	label: string;
	value: string | number;
}

export type AnyField = DataField | DataObject;
