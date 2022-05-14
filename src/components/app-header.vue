<template>
    <section class="app-header">
        <router-link to="/">Logo</router-link>
        <div class="router-links">
            <router-link to="/catalog">Catalog</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </section>
</template>

<script>
export default {
  name: 'app-header',
}
</script>
