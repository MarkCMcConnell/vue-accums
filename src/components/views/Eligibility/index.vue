<template>
  <section>
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <PersonalInfo :memberData="this.memberData"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <EmploymentInfo :memberData="this.memberData"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <ContactInfo :memberData="this.memberData"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <PlanInfo :memberData="this.memberData"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <Coverages :coverageData="coverages"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <Accums :accumsData="accumulators"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <Gaps :gapsData="gaps"/>
      </div>
    </div>
  </section>
</template>

<script>
// Layout Components
import Accums from '../../layout/AccumsDashboard.vue'
import Coverages from '../../layout/CoveragesDashboard.vue'
import Gaps from '../../layout/GapsDashboard.vue'
// Eligibility-specific Components
import PersonalInfo from './PersonalInfo.vue'
import EmploymentInfo from './EmploymentInfo.vue'
import ContactInfo from './ContactInfo.vue'
import PlanInfo from './PlanInfo.vue'

export default {
  components: {
    PersonalInfo,
    EmploymentInfo,
    ContactInfo,
    PlanInfo,
    Accums,
    Coverages,
    Gaps
  },
  data () {
    return {
      memberData: this.$store.state.memberData[0],
      coverages: this.$store.state.memberData[0].Coverages,
      accumulators: this.$store.state.memberData[0].Accumulators,
      gaps: this.$store.state.memberData[0].Accumulators
    }
  }
}
</script>

<style scoped lang="scss">
.row {
  padding: 10px 0;
}
</style>

<style>
</style>
