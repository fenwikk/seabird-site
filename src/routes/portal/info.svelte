<script lang="ts">
    import { currentSite } from "$lib/stores/currentSite";
import { sites } from "$lib/stores/sites";
import { supabase } from "$lib/supabase/client";

    let loading = false
    let title = $currentSite?.site_info.title || ""
    let tagline = $currentSite?.site_info.tagline || ""

    currentSite.subscribe((site) => {
        title = site?.site_info.title || ""
        tagline = site?.site_info.tagline || ""
    })

    const handleSave = async () => {
        loading = true
        
        const currentSiteIndex = $sites.findIndex((value) => value.id == $currentSite?.id)
        
        let newSiteData = $currentSite
        let newSitesData = $sites
        
        if (!newSiteData)
        throw new Error("No current site selected")
        if (!newSitesData)
        throw new Error("No sites array found")
        
        newSiteData.site_info.title = title
        newSiteData.site_info.tagline = tagline
        
        currentSite.set(newSiteData)
        
        newSitesData[currentSiteIndex] = newSiteData
        sites.set(newSitesData)
        
        await supabase.from("sites").update(newSiteData).match({ id: newSiteData.id })
        
        loading = false
        location.reload()
    }
</script>

<form class="" on:submit|preventDefault={handleSave}>
    <div class="bg-gray-50/50 border-b">
        <div class="container flex justify-between items-center py-12 ">
            <h1 class="">Site Info</h1>
    
            <div class="pt-1">
                <input
                    type="submit"
                    class="hard-shadow active:shadow-none active:-mr-1 active:ml-1 active:-mb-1 active:mt-1 border-4 border-black px-4 py-2 bg-green-400 hover:bg-green-500 font-bold"
                    value={loading ? 'Saving...' : 'Save'}
                    disabled={loading}
                />
            </div>
        </div>
    </div>
    <div class="container p-6">
        <div>
            <label for="title">Title</label>
            <input id="title" class="field" placeholder={$currentSite?.site_info.title} bind:value={title} />
            <label for="tagline">Tagline</label>
            <input id="tagline" class="field" placeholder={$currentSite?.site_info.tagline} bind:value={tagline} />
        </div>
        <div>
        </div>
    </div>
</form>