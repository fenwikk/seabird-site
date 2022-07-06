import { writable } from "svelte/store";

export const dev_id = writable(import.meta.env.VITE_SVELTE_APP_DEV_ID);
