<template>
    <section>
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <PersonalInfo :memberData="this.memberData"/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <EmploymentInfo :memberData="this.memberData"/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <ContactInfo :memberData="this.memberData"/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <PlanInfo :memberData="this.memberData"/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <h3>Coverages</h3>
                <DataTable :data="formatCoverages" :fields="coveragesFields"/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <h3>Balances</h3>
                <DataTable :data="formatAccumulators" :fields="accumulatorFields"/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <h3>Gaps in Care</h3>
                <DataTable :data="formatGaps" :fields="gapsFields"/>
            </div>
        </div>
    </section>
</template>

<script>
// General UI Components
import DataTable from "../../ui/DataTable.vue";

// Eligibility-specific Components
import PersonalInfo from "./PersonalInfo.vue";
import EmploymentInfo from "./EmploymentInfo.vue";
import ContactInfo from "./ContactInfo.vue";
import PlanInfo from "./PlanInfo.vue";
// Mixins
import { dataHelpers } from "../../../mixins/dataHelpers.js";

export default {
    components: {
        DataTable,
        PersonalInfo,
        EmploymentInfo,
        ContactInfo,
        PlanInfo
    },
    mixins: [dataHelpers],
    data() {
        return {
            memberData: this.$store.state.memberData[0],
            /*
                This is where the configs for the table headers and fields can be edited.
                Info table (Personal, Employment, Plan, etc) take a title (String).
                Table headers and data will follow the order of the array, so make sure
                they are in the desired order for the view.
                Make certyain that the Headers and Fields are in the same index in the arrays.
                Exclusions are 2D array - [[FieldName, FieldValue]]
            */
            coverages: this.$store.state.memberData[0].Coverages,
            coveragesFields: [
                {
                    label: "Name",
                    field: "CoverageName"
                },
                {
                    label: "Type",
                    field: "CovPlan"
                },
                {
                    label: "Effective Date",
                    field: "EffectiveDate"
                },
                {
                    label: "Term Date",
                    field: "TermDate"
                }
            ],
            accumulators: this.$store.state.memberData[0].Accumulators,
            accumulatorFields: [
                {
                    label: "Name",
                    field: "Name"
                },
                {
                    label: "Type",
                    field: "IndividualAccum"
                },
                {
                    label: "Coverage",
                    field: "CoverageType"
                },
                {
                    label: "Plan Year",
                    field: "PlanYear"
                },
                {
                    label: "Amount Met",
                    field: "CurrentAmount"
                },
                {
                    label: "Max Amount",
                    field: "MaximumAmount"
                },
                {
                    label: "Percent Met",
                    field: "ProgressBar"
                }
            ],
            gaps: this.$store.state.memberData[0].Accumulators,
            gapsFields: [
                {
                    label: "Name",
                    field: "Name"
                },
                {
                    label: "Description",
                    field: "Accum_Desc"
                },
                {
                    label: "Recommended Frequency",
                    field: "RecFrequency"
                },
                {
                    label: "Status",
                    field: "ClaimSystemCode"
                },
                {
                    label: "Last Visit",
                    field: "Field1_Date"
                },
                {
                    label: "Covered Benefit",
                    field: "CovBenefit"
                }
            ]
        };
    },
    computed: {
        formatAccumulators() {
            const accums = this.accumulators.filter(accum => {
                return accum.SpecificType !== "GC";
            });
            // Array that will be pushed to the DataTables component
            let dataValues = [];

            for (let value of accums) {
                // Object that will hold the new values to be pushed to the array
                let data = {};

                for (let field of this.accumulatorFields) {
                    let currentKey = value[field.field];

                    if (field.field === "IndividualAccum") {
                        if (currentKey) {
                        currentKey = "Individual";
                        } else {
                        currentKey = "Family";
                        }
                    }
                    // Capture dates and convert /Date()/ format to human readable
                    if (
                        typeof currentKey === "string" &&
                        currentKey.substring(0, 5) === "/Date"
                    ) {
                        currentKey = this.convertJSONDateToDateString(currentKey);
                    }

                    if (field.field === "CoverageType") {
                        // Use this switch statement to customize or add values
                        switch (currentKey) {
                        case "M":
                            currentKey = "Medical";
                            break;
                        case "D":
                            currentKey = "Dental";
                            break;
                        default:
                            break;
                        }
                    }

                    if (field.field === "CurrentAmount") {
                        currentKey = this.formatCurrency(value.CurrentAmount);
                    }

                    if (field.field === "MaximumAmount") {
                        currentKey = this.formatCurrency(value.MaximumAmount);
                    }

                    if (field.field === "ProgressBar") {
                        currentKey = this.calculatePercent(
                            value.CurrentAmount,
                            value.MaximumAmount
                        );
                    }
                    // Avoid setting an empty row
                    if (currentKey !== "" && currentKey !== undefined) {
                        data[field.field] = currentKey;
                    }
                }
                // Push to the array that will be passed to the coverages table
                dataValues.push(data);
            }
            return dataValues;
        },
        formatCoverages() {
            let dataValues = [];
            for (let obj of this.coverages) {
                let data = {};

                for (let field of this.coveragesFields) {
                    let currentKey = obj[field.field];
                    // Capture dates and convert /Date()/ format to human readable
                    if (currentKey.substring(0, 5) === "/Date") {
                        currentKey = this.convertJSONDateToDateString(currentKey);
                    }
                    // Avoid setting an empty row
                    if (currentKey !== undefined) {
                        data[field.field] = currentKey;
                    }
                }
                // Push to the array that will be passed to the coverages table
                dataValues.push(data);
            }
            return dataValues;
        },
        formatGaps() {
            let gaps = this.gaps.filter(gap => {
                return gap.SpecificType === "GC";
            });

            let dataValues = [];
            for (let obj of gaps) {
                let data = {};

                for (let field of this.gapsFields) {
                    let currentKey = obj[field.field];
                    // Capture dates and convert /Date()/ format to human readable
                    if (currentKey.substring(0, 5) === "/Date") {
                        currentKey = this.convertJSONDateToDateString(currentKey);
                    }
                    // Avoid setting an empty row
                    if (currentKey !== undefined) {
                        data[field.field] = currentKey;
                    }
                }
                // Push to the array that will be passed to the coverages table
                dataValues.push(data);
            }
            return dataValues;
        }
    }
};
</script>

<style scoped lang="scss">
.row {
    padding: 10px 0;
}
</style>

<style>
</style>
