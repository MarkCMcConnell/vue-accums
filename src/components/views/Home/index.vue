<template>
    <section class="container">
        <BaseModal v-if="this.$store.state.modal.showModal">
            <h2 slot="modalTitle">Get Your Yearly Check-Up!</h2>
            <p slot="modalBody">It's that time of year!  Call your doctor and get scheduled for a check-up today!</p>
            <span slot="modalButton">Proceed</span>
        </BaseModal>
        <HeroBanner>
          <h3 slot="heroTagline">Fancy Company Words</h3>
          <div slot="heroBody" isFlexed="true">
            <h2>Welcome back, {{ member.FirstName }}!</h2>
          </div>
        </HeroBanner>
    </section>
</template>

<script>
// General UI Components
import BaseModal from '../../ui/BaseModal.vue'
import HeroBanner from '../../ui/HeroBanner.vue'

export default {
  components: {
    BaseModal,
    HeroBanner
  },
  data() {
    return {
      member: {}
    }
  },
  mounted() {
    this.member = this.$store.state.memberData[0]
  }
}
</script>

<style scoped>
.container {
  position: relative;
}
</style>
