import type { User } from '@supabase/gotrue-js';
import { writable } from 'svelte/store';

export const user = writable<User | undefined | null>();