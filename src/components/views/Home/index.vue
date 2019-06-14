<template>
    <section class="container">
        <h1>Home</h1>
        <BaseModal v-if="this.$store.state.modal.showModal">
            <h2 slot="modalTitle">Get Your Yearly Check-Up!</h2>
            <p slot="modalBody">It's that time of year!  Call your doctor and get scheduled for a check-up today!</p>
            <span slot="modalButton">Proceed</span>
        </BaseModal>
    </section>
</template>

<script>
// General UI Components
import BaseModal from '../../ui/BaseModal.vue'

export default {
  components: {
    BaseModal
  }
}
</script>

<style scoped>
.container {
  position: relative;
}
</style>
