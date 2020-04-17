<template>
  <section class="container">
    <CorePageTitle value="A Page Title" />
    <CoreButton value="I'm A Button" type="primary/secondary/naked" />
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
import { CorePageTitle } from  'core-ui-components';
import { CoreButton } from  'core-ui-components';
// General UI Components
import BaseModal from '../../ui/BaseModal.vue'
// Layout components
import CoveragesDashboard from '../../layout/CoveragesDashboard.vue'

export default {
  components: {
    BaseModal,
    CoveragesDashboard,
    CorePageTitle,
    CoreButton,
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
