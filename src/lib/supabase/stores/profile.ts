import { writable } from 'svelte/store';
import type { Profile } from '../client';

export const profile = writable<Profile | undefined>();