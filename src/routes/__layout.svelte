<script>
    import "../app.css"
    import Favicon from "$lib/assets/fav.ico"
</script>

<svelte:head>
    <link rel="icon" type="image/x-icon" href={Favicon}>
</svelte:head>

<slot></slot>