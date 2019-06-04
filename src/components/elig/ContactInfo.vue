<template>
    <div>
        <h3>Contact Info</h3>
        <dl class="row">
            <dt class="col-md-3">Home Phone:</dt>
            <dd class="col-md-3">{{ this.formatPhoneNumber(memberData.HomePhone) }}</dd>
            <dt class="col-md-3">Work Phone:</dt>
            <dd class="col-md-3">{{ this.formatPhoneNumber(memberData.WorkPhone) }}</dd>
        </dl>
        <dl class="row">
            <dt class="col-md-3">Mobile Phone:</dt>
            <dd class="col-md-3">{{ this.formatPhoneNumber(memberData.MobilePhone) }}</dd>
            <dt class="col-md-3">Email Address:</dt>
            <dd class="col-md-3">{{ memberData.EMail }}</dd>
        </dl>
        <dl class="row">
            <dt class="col-md-3">Address 1:</dt>
            <dd>{{ memberData.Address }}</dd>
        </dl>
        <dl class="row">
            <dt class="col-md-3">Address 2:</dt>
            <dd>{{ memberData.Addr2 }}</dd>
        </dl>
        <dl class="row">
            <dt class="col-md-3">City:</dt>
            <dd>{{ memberData.City }}</dd>
        </dl>
        <dl class="row">
            <dt class="col-md-3">State:</dt>
            <dd>{{ memberData.State }}</dd>
        </dl>
        <dl class="row">
            <dt class="col-md-3">Zip:</dt>
            <dd>{{ memberData.Zip }}</dd>
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
