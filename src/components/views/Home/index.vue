<template>
    <section :class="{ modalContainer: this.hasModal }">
        <component :is="showModal" />
        <h1>Home</h1>
    </section>
</template>

<script>
// General UI Components
import BaseModal from '../../ui/BaseModal.vue'

export default {
    computed: {
        showModal () {
            return this.state.showModal
        }
    }
}
</script>

<style>

</style>
