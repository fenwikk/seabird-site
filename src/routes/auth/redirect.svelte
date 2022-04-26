<script context="module" lang="ts">
    import type { LoadInput, LoadOutput } from "@sveltejs/kit/types/internal";

    export const load = ({ url }: LoadInput): LoadOutput => {
        const redirect = url.searchParams.get('url');

        return {
            status: 302,
            redirect: redirect || "/"
        }
    }
</script>