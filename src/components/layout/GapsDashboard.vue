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
      const gaps = this.gapsData.filter(gap => {
        return gap.SpecificType === 'GC'
      })

      let dataValues = []
      
      for (let obj of gaps) {
        let data = {}
        // TODO: Handle null/undefined values more appropriately
        for (let value of this.gapsFields) {
          let currentKey = obj[value.field]
          // Capture dates and convert /Date()/ format to human readable
          if (currentKey.substring(0, 5) === '/Date') {
            currentKey = this.convertJSONDateToDateString(currentKey)
          }
          // Convert CovBenefit abbreviation to full word
          if (value.field === 'CovBenefit') {
            if (currentKey === 'Y') {
              currentKey = 'Yes'
            }
            if (currentKey === 'N') {
              currentKey === 'No'
            }
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
