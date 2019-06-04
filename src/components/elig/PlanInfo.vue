<template>
    <div>
        <h3>Plan Info</h3>
        <dl class="row">
            <dt class="col-md-3">Group Name:</dt>
            <dd class="col-md-3">{{ memberData.GroupName }}</dd>
            <dt class="col-md-3">Effective Date:</dt>
            <dd class="col-md-3">{{ this.convertJSONDateToDateString(memberData.OrigEffDte) }}</dd>
        </dl>
        <dl class="row">
            <dt class="col-md-3">Group Number:</dt>
            <dd class="col-md-3">{{ memberData.GroupNum }}</dd>
            <dt class="col-md-3">Termination Date:</dt>
            <dd class="col-md-3">{{ this.convertJSONDateToDateString(memberData.ToDt) }}</dd>
        </dl>
        <dl class="row">
            <dt class="col-md-3">Member Number:</dt>
            <dd class="col-md-3" v-if="memberData.MemberID">{{ memberData.MemberID }}</dd>
            <dd class="col-md-3" v-else>{{ memberData.SSN }}</dd>
            <dt class="col-md-3">Status:</dt>
            <dd class="col-md-3">{{ memberData.Status }}</dd>
        </dl>
        <dl class="row">
            <dt class="col-md-3">Plan Name:</dt>
            <dd class="col-md-3">{{ memberData.BnftPlan }}</dd>
            <dt class="col-md-3">Date of Birth:</dt>
            <dd class="col-md-3">{{ this.convertJSONDateToDateString(memberData.DOB) }}</dd>
        </dl>
        <dl class="row">
            <dt class="col-md-3">Relationship:</dt>
            <dd>{{ memberData.Relation }}</dd>
        </dl>
    </div>
</template>

<script>
import { dataHelpers } from '../../mixins/dataHelpers.js'

export default {
  props: {
    memberData: Object
  },
  mixins: [ dataHelpers ]
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
