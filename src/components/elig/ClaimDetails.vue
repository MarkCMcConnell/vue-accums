<template>
    <div>
        <h3>Claim #{{ClaimNum}}</h3>
        <div class="row">
            <div class="col-md-6">
                <dl class="row">
                    <dt class="col-md-3">Member:</dt>
                    <dd class="col-md-3">{{ this.formatPhoneNumber(memberData.HomePhone) }}</dd>
                    <dt class="col-md-3">Date of Service:</dt>
                    <dd class="col-md-3">{{ this.formatPhoneNumber(memberData.WorkPhone) }}</dd>
                </dl>
                <dl class="row">
                    <dt class="col-md-3">Member ID:</dt>
                    <dd class="col-md-3">{{ this.formatPhoneNumber(memberData.HomePhone) }}</dd>
                    <dt class="col-md-3">Service Provider:</dt>
                    <dd class="col-md-3">{{ this.formatPhoneNumber(memberData.WorkPhone) }}</dd>
                </dl>
                <dl class="row">
                    <dt class="col-md-3">Claim Status:</dt>
                    <dd class="col-md-3">{{ this.formatPhoneNumber(memberData.HomePhone) }}</dd>
                </dl>
            </div>
            <div class="col-md-6">
                <DataTables />
            </div>
        </div>
        <h3>Claim Details</h3>
        <div class="row">
            <div class="col-12">
                <DataTables />
            </div>
        </div>
        <h3>Reason Code Descriptions</h3>
        <div class="row">
            <div class="col-12">
                <!-- Reason Code loop -->
            </div>
        </div>
        <h3>Disclaimer</h3>
        <div class="row">
            <div class="col-12">
                <!-- Disclaimer -->
            </div>
        </div>
    </div>
</template>

<script>
import { dataHelpers } from '../../mixins/dataHelpers.js'
import DataTables from '../shard/DataTables.vue'

export default {
    props: {
        memberData: {
            type: Object,
            required: true,
        },
    },
    mixins: [ dataHelpers ],
    components: {
        DataTables
    },
    data () {
        return {
            claimTotalsFields: [
                {
                label: 'TOTAL CHARGES',
                field: ''
                },
                {
                label: ' ',
                field: '-'
                },
                {
                label: 'DISCOUNT',
                field: ''
                },
                {
                label: ' ',
                field: '-'
                },
                {
                label: 'PLAN PAID',
                field: ''
                },
                {
                label: ' ',
                field: '='
                },
                {
                label: 'YOU OWE',
                field: ''
                }
            ]
        }
    }
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
