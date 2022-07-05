import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SVELTE_APP_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SVELTE_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Profile = {
    id: string,
    updated_at: Date,
    username: string,
}

export type Site = {
    id: string,
    site_info: SiteData,
    admins: string[]
}

export type SiteData = {
    title: string,
    tagline: string,
    ico?: string,
    ico_url?: string
}