import type { Site } from '$lib/supabase/client';
import { writable } from 'svelte/store';

export const sites = writable<Site[]>([]);