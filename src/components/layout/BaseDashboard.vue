<template>
  <section
    :class="this.isDashboardFormat ? 'dashboard' : ''"
  >
  <!-- TODO: Slot or props for title -->
    <h3>{{ this.title }}</h3>
    <DataTable
      :data="formatCoverages"
      :fields="coverageFields"
    />
  </section>
</template>

<script>
// General UI Components
import DataTable from '../ui/DataTable.vue'
// Mixins
import { dataHelpers } from '../../mixins/dataHelpers.js'

export default {
  components: {
    DataTable
  },
  props: {
		title: {
			type: String,
			required: true
		},
    memberData: {
      type: Array,
      required: true
		},
		dashboardFields: {
			type: Array,
			required: true
		},
    isDashboardFormat: {
      type: Boolean
    },
    yearRange: {
      type: Number
    }
  },
  mixins: [dataHelpers],
  data () {
    return {
      
    }
  },
  computed: {
    formatCoverages () {
      let coverages
      let dataValues = []

      if (this.yearRange) {
        coverages = this.memberData.filter(coverage => {
          const currentYear = new Date().getFullYear()
          let date = this.convertJSONDateToDateString(coverage.EffectiveDate)
          
          return parseInt(date.substring(date.length - 4), 10) >= (currentYear - this.yearRange)
        })
      }

      for (let obj of coverages) {
        let data = {}

        for (let value of this.coverageFields) {
          let currentKey = obj[value.field]
          // Capture dates and convert /Date()/ format to human readable
          if (currentKey.substring(0, 5) === '/Date') {
            currentKey = this.convertJSONDateToDateString(currentKey)
          }
          // Avoid setting an empty row
          if (currentKey !== '' && currentKey !== undefined) {
            data[value.field] = currentKey
          }
        }
        // Push to the array that will be passed to the coverages table
        dataValues.push(data)
      }
      return dataValues
    }
  }
}
</script>

<style lang="scss">
  .dashboard {
    margin-top: 2rem;
    padding: 1.25rem;
    width: 60%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
</style>
