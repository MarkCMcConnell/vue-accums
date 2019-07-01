<template>
  <div>
    <h3>Employment Info</h3>
    <dl class="row">
      <dt class="col-md-3">Date of Hire:</dt>
      <dd class="col-md-3">{{ this.convertJSONDateToDateString(memberData.HireDt) }}</dd>
      <dt class="col-md-3">Employee ID:</dt>
      <dd class="col-md-3">{{ memberData.EmployeeNum }}</dd>
    </dl>
    <dl class="row">
      <dt class="col-md-3">Original Date of Hire:</dt>
      <dd class="col-md-3">{{ this.convertJSONDateToDateString(memberData.OrigHireDt) }}</dd>
      <dt class="col-md-3">Employment Status:</dt>
      <dd class="col-md-3">{{ memberData.Status }}</dd>
    </dl>
  </div>
</template>

<script>
import { dataHelpers } from '../../../mixins/dataHelpers.js'

export default {
  props: {
    memberData: {
      type: Object,
      required: true
    }
  },
  mixins: [dataHelpers]
}
</script>

<style scoped>
dt {
  font-weight: bold;
}

dl {
  border-bottom: 1px solid rgb(204, 204, 204);
}
</style>
