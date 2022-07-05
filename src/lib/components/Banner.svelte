<script lang="ts">
    export let bannerType: "success" | "warning" | "error"
</script>

<div class="text-xs border-[1px] p-3 duration-200 mb-3 rounded-md {bannerType == "success" ? "bg-green-100 border-green-300 text-green-700" : (bannerType == "warning" ? "bg-yellow-100 border-yellow-300 text-yellow-700" : "bg-red-100 border-red-300 text-red-700")}"><slot></slot></div>