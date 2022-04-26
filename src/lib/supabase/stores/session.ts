import { writable, type Writable } from "svelte/store";
import type { Session } from "@supabase/gotrue-js";

export const session: Writable<Session | null> = writable(null)