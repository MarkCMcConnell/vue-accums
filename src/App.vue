<template>
    <div class="container">
        <NavBar />
        <router-view />
    </div>
</template>

<script>
// TODO: Dynamic component for the views??
import NavBar from './components/layout/NavBar.vue'

export default {
    name: 'App',
    components: {
        NavBar
    }
}
</script>

<style>
</style>
