<template>
    <section class="container">
        <h1>Home</h1>
        <BaseModal v-if="this.$store.state.modal.showModal">
            <h2 slot="modal-title">Get Your Yearly Check-Up!</h2>
            <p slot="modal-body">It's that time of year!  Call your doctor and get scheduled for a check-up today!</p>
            <span slot="modal-button">Proceed</span>
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
