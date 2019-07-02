<template>
  <section>
    <h3>My Balances</h3>
    <DataTable :data="formatAccumulators" :fields="accumulatorFields"/>
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
    accumsData: {
      type: Array,
      required: true
    }
  },
  mixins: [dataHelpers],
  data () {
    return {
      accumulators: this.accumsData,
      accumulatorFields: [
        {
          label: 'Name',
          field: 'Name'
        },
        {
          label: 'Type',
          field: 'IndividualAccum'
        },
        {
          label: 'Coverage',
          field: 'CoverageType'
        },
        {
          label: 'Plan Year',
          field: 'PlanYear'
        },
        {
          label: 'Amount Met',
          field: 'CurrentAmount'
        },
        {
          label: 'Max Amount',
          field: 'MaximumAmount'
        },
        {
          label: 'Percent Met',
          field: 'ProgressBar'
        }
      ]
    }
  },
  computed: {
    formatAccumulators () {
      const accums = this.accumulators.filter(accum => {
        return accum.SpecificType !== '"GC'
      })
      // Array that will be pushed to the DataTables component
      let dataValues = []

      for (let value of accums) {
        // Object that will hold the new values to be pushed to the array
        let data = {}

        for (let field of this.accumulatorFields) {
          let currentKey = value[field.field]

          if (field.field === 'IndividualAccum') {
            if (currentKey) {
              currentKey = 'Individual'
            } else {
              currentKey = 'Family'
            }
          }
          // Capture dates and convert /Date()/ format to human readable
          if (
            typeof currentKey === 'string' &&
            currentKey.substring(0, 5) === '/Date'
          ) {
            currentKey = this.convertJSONDateToDateString(currentKey)
          }

          if (field.field === 'CoverageType') {
            // Use this switch statement to customize or add values
            switch (currentKey) {
              case 'M':
                currentKey = 'Medical'
                break
              case 'D':
                currentKey = 'Dental'
                break
              default:
                break
            }
          }

          if (field.field === 'CurrentAmount') {
            currentKey = this.formatCurrency(value.CurrentAmount)
          }

          if (field.field === 'MaximumAmount') {
            currentKey = this.formatCurrency(value.MaximumAmount)
          }

          if (field.field === 'ProgressBar') {
            currentKey = this.calculatePercent(
              value.CurrentAmount,
              value.MaximumAmount
            )
          }
          // Avoid setting an empty row
          if (currentKey !== '' && currentKey !== undefined) {
            data[field.field] = currentKey
          }
          // Push to the array that will be passed to the coverages table
        }
        dataValues.push(data)
      }
      return dataValues
    }
  }
}
</script>

<style>
</style>
