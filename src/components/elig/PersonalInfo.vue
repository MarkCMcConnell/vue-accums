<template>
    <div>
        <h3>Personal Info</h3>
        <dl class="row">
            <dt class="col-md-2">Member Name:</dt>
            <dd class="col-md-2">{{ memberData.FirstName }} {{ memberData.LastName }}</dd>
            <dt class="col-md-4">Relationship to Subscriber:</dt>
            <dd class="col-md-4">{{ memberData.Relation }}</dd>
        </dl>
        <dl class="row">
            <dt class="col-md-2">Member ID:</dt>
            <dd class="col-md-2" v-if="memberData.MemberID">{{ memberData.MemberID }}</dd>
            <dd class="col-md-2" v-else>{{ this.convertJSONDateToDateString(memberData.SSN) }}</dd>
            <dt class="col-md-4">Marital Status:</dt>
            <dd class="col-md-4">{{ memberData.MaritalStatus }}</dd>
        </dl>
        <dl class="row">
            <dt class="col-md-2">SSN:</dt>
            <dd class="col-md-2">{{ memberData.SSN }}</dd>
            <dt class="col-md-4">Preferred Spoken Language:</dt>
            <dd class="col-md-4">{{ memberData.LangCodeSpoken }}</dd>
        </dl>
        <dl class="row">
            <dt class="col-md-2">Date of Birth:</dt>
            <dd class="col-md-2">{{ this.convertJSONDateToDateString(memberData.DOB) }}</dd>
            <dt class="col-md-4">Preferred Written Language:</dt>
            <dd class="col-md-4">{{ memberData.LangCodeWritten }}</dd>
        </dl>
        <dl class="row">
            <dt class="col-md-2">Gender:</dt>
            <dd class="col-md-2">{{ memberData.GNDR.toUpperCase() == 'M' ? 'Male' : 'Female'}}</dd>
            <dt class="col-md-4">Disabled:</dt>
            <dd class="col-md-4">{{ memberData.DisabilityFlag }}</dd>
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
