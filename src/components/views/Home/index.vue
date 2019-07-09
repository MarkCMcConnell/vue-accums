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
    <CoveragesDashboard
      :coverageData="this.coverages"
      :isDashboardFormat="coverageDashboard"
      :yearRange="1"
    />
  </section>
</template>

<script>
// General UI Components
import BaseModal from '../../ui/BaseModal.vue'
// Layout components
import CoveragesDashboard from '../../layout/CoveragesDashboard.vue'

export default {
  components: {
    BaseModal,
    CoveragesDashboard
  },
  data () {
    return {
      member: this.$store.state.memberData[0],
      coverages: this.$store.state.memberData[0].Coverages,
      coverageDashboard: true
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
}
</style>
