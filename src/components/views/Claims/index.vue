<template>
    <section>
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <h3>Claims</h3>
                <DataTable
                    :data="formatClaims"
                    :fields="claimsResultsFields"
                />
            </div>
        </div>
    </section>
</template>

<script>
// Components
import DataTable from '../../ui/DataTable.vue'
// Mixins
import { dataHelpers } from '../../../mixins/dataHelpers.js'
export default {
  components: {
    DataTable
  },
  mixins: [ dataHelpers ],
  data () {
    return {
      claims: this.$store.state.claims,
      claimsResultsFields: [
        {
          label: 'Claim Number',
          field: 'ClaimNum'
        },
        {
          label: 'Patient Name',
          field: 'PTNameLastFirst'
        },
        {
          label: 'Service Date',
          field: 'DOSEnd'
        },
        {
          label: 'Total Charge',
          field: 'TotalChg'
        },
        {
          label: 'My Responsibility',
          field: 'EERespOn'
        },
        {
          label: 'Provider',
          field: 'ProvName'
        },
        {
          label: 'Claim Status',
          field: 'SystemClaimStatusDesc'
        }
      ]
    }
  },
  computed: {
    formatClaims () {
      let dataValues = []

      for (let obj of this.claims) {
        // Object that will hold the new values to be pushed to the array
        let data = {}

        for (let field of this.claimsResultsFields) {
          let currentKey = obj[field.field]

          // Capture dates and convert /Date()/ format to human readable
          if (typeof (currentKey) === 'string' && currentKey.substring(0, 5) === '/Date') {
            currentKey = this.convertJSONDateToDateString(currentKey)
          }

          if (field.field === 'TotalChg' || field.field === 'EERespOn') {
            currentKey = this.formatCurrency(currentKey)
          }
          // Avoid setting an empty row
          // if (currentKey !== '' && currentKey !== undefined) {
          //     data.push(currentKey);
          // }
          data[field.field] = currentKey
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
