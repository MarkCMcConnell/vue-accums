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
    dataType: {
      type: String,
      required: true
    },
		dataFields: {
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
    formatData () {
      let data
      let dataValues = []

      if (this.dataType === 'gaps') {
        data = this.memberData.filter(gap => {
          return gap.SpecificType === 'GC'
        })  
      }

      if (this.dataType === 'accums') {
        data = this.memberData.filter(accum => {
          return accum.SpecificType !== 'GC'
        })
      }

      if (this.yearRange) {
        data = this.memberData.filter(coverage => {
          const currentYear = new Date().getFullYear()
          let date = this.convertJSONDateToDateString(coverage.EffectiveDate)
          
          return parseInt(date.substring(date.length - 4), 10) >= (currentYear - this.yearRange)
        })
      }

      for (let obj of coverages) {
        let data = {}

        for (let value of this.dataFields) {
          let currentKey = obj[value.field]
          // General conversion
          // Capture dates and convert /Date()/ format to human readable
          if (currentKey.substring(0, 5) === '/Date') {
            currentKey = this.convertJSONDateToDateString(currentKey)
          }
          // ACCUMS conversions
          if (value.field === 'IndividualAccum') {
            if (currentKey) {
              currentKey = 'Individual'
            } else {
              currentKey = 'Family'
            }
          }

          if (value.field === 'CoverageType') {
            // Use this switch statement to customize or add values
            switch (currentKey) {
              case 'M':
                currentKey = 'Medical'
                break
              case 'D':
                currentKey = 'Dental'
                break
              default:
                currentKey = 'Unknown'
                break
            }
          }

          if (field.field === 'CurrentAmount') {
            currentKey = this.formatCurrency(obj.CurrentAmount)
          }

          if (field.field === 'MaximumAmount') {
            currentKey = this.formatCurrency(obj.MaximumAmount)
          }

          if (field.field === 'ProgressBar') {
            currentKey = this.calculatePercent(
              obj.CurrentAmount,
              obj.MaximumAmount
            )
          }
          // GAPS specific - Convert CovBenefit abbreviation to full word
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

<style lang="scss">
  .dashboard {
    margin-top: 2rem;
    padding: 1.25rem;
    width: 60%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
</style>
