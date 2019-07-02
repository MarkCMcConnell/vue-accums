<template>
  <section class="container">
    <BaseModal v-if="this.$store.state.modal.showModal">
      <h2 slot="modalTitle">Get Your Yearly Check-Up!</h2>
      <p
        slot="modalBody"
      >It's that time of year! Call your doctor and get scheduled for a check-up today!</p>
      <span slot="modalButton">Proceed</span>
    </BaseModal>
    <h1>Home</h1>
  </section>
</template>

<script>
// General UI Components
import BaseModal from '../../ui/BaseModal.vue'

export default {
  components: {
    BaseModal
  },
  data () {
    return {
      member: {}
    }
  },
  mounted () {
    this.member = this.$store.state.memberData[0]
  }
}
</script>

<style scoped>
.container {
  position: relative;
}
</style>
