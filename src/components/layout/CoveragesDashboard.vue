<template>
  <section>
    <h3>Coverages</h3>
    <DataTable :data="formatCoverages" :fields="coveragesFields"/>
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
      coverages: this.coverageData,
      coveragesFields: [
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
      let dataValues = []
      for (let obj of this.coverages) {
        let data = {}

        for (let field of this.coveragesFields) {
          let currentKey = obj[field.field]
          // Capture dates and convert /Date()/ format to human readable
          if (currentKey.substring(0, 5) === '/Date') {
            currentKey = this.convertJSONDateToDateString(currentKey)
          }
          // Avoid setting an empty row
          if (currentKey !== undefined) {
            data[field.field] = currentKey
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
