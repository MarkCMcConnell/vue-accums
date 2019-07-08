<template>
  <section>
    <h3>Coverages</h3>
    <DataTable :data="formatCoverages" :fields="coverageFields"/>
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
    coverageData: {
      type: Array,
      required: true
    }
  },
  mixins: [dataHelpers],
  data () {
    return {
      coverageFields: [
        {
          label: 'Name',
          field: 'CoverageName'
        },
        {
          label: 'Type',
          field: 'CovPlan'
        },
        {
          label: 'Effective Date',
          field: 'EffectiveDate'
        },
        {
          label: 'Term Date',
          field: 'TermDate'
        }
      ]
    }
  },
  computed: {
    formatCoverages () {
      const coverage = this.coverageData
      let dataValues = []

      for (let obj of coverage) {
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

<style>
</style>
