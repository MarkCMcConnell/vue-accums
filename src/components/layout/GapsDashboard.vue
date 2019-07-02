<template>
  <section>
    <h3>Gaps in Care</h3>
    <DataTable :data="formatGaps" :fields="gapsFields"/>
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
    gapsData: {
      type: Array,
      required: true
    }
  },
  mixins: [dataHelpers],
  data () {
    return {
      gaps: this.gapsData,
      gapsFields: [
        {
          label: 'Name',
          field: 'Name'
        },
        {
          label: 'Description',
          field: 'Accum_Desc'
        },
        {
          label: 'Recommended Frequency',
          field: 'RecFrequency'
        },
        {
          label: 'Status',
          field: 'ClaimSystemCode'
        },
        {
          label: 'Last Visit',
          field: 'Field1_Date'
        },
        {
          label: 'Covered Benefit',
          field: 'CovBenefit'
        }
      ]
    }
  },
  computed: {
    formatGaps () {
      let gaps = this.gaps.filter(gap => {
        return gap.SpecificType === 'GC'
      })

      let dataValues = []
      for (let obj of gaps) {
        let data = {}

        for (let field of this.gapsFields) {
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
