<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th
                scope="col"
                @click.prevent="sortColumn(field.field)"
                v-for="field in fields"
                :key="field.label"
                >{{ field.label }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(obj, index) in sortedData" :key="index">
                <td v-for="field in fields" :key="field.field">
                <span v-if="field.field == 'ProgressBar'">
                    <ProgressBar :width="obj[field.field]"></ProgressBar>
                </span>
                <span
                    v-else-if="field.field == 'ClaimSystemCode'"
                    :class="{ 'gapSoon': obj[field.field] === 'Due Soon', 'gapRed': obj[field.field] === 'Overdue', 'gapNew': obj[field.field] === 'New' }"
                >{{ obj[field.field]}}</span>
                <span v-else>{{ obj[field.field] }}</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import ProgressBar from './ProgressBar.vue'

export default {
    components: {
        ProgressBar
    },
    props: {
        fields: Array,
        data: Array
    },
    data () {
        return {
            currentSort: this.fields[0].label,
            currentDirection: 'ascending',
            tableData: this.data
        }
    },
    computed: {
        sortedData: function () {
            const sortedData = this.tableData

            return sortedData.sort((a, b) => {
                let modifier = 1

                if (this.currentDirection === 'descending') {
                    modifier = -1
                }

                if (a[this.currentSort] < b[this.currentSort]) {
                    return -1 * modifier
                } else if (a[this.currentSort] > b[this.currentSort]) {
                    return 1 * modifier
                } else {
                    return 0
                }
            })
        }
    },
    methods: {
        sortColumn (column) {
            if (column === this.currentSort) {
                this.currentDirection =
                    this.currentDirection === 'ascending' ? 'descending' : 'ascending'
            }

            this.currentSort = column
        }
    }
}
</script>

<style scoped lang="scss">
.gapSoon {
    color: #c7b523;
}

.gapRed {
    color: #f00;
}

.gapNew {
    color: #2f9805;
}

th {
    cursor: pointer;
    text-decoration: underline;
    color: red;
}
</style>
