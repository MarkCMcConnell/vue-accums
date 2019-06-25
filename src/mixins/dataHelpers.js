export const dataHelpers = {
    methods: {
        calculatePercent(current, max) {
            return Math.floor(current / max * 100)
        },
        convertJSONDateToDateString(dateVal) {
            if (dateVal) {
                let dtint = parseInt(dateVal.substr(6))
                let dt = new Date(dtint)
                let dtoff = dt.getTimezoneOffset() * 60 * 1000
                let date = new Date(dtint + dtoff)

                return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
            }
            return ''
        },
        formatCurrency(val) {
            if (val !== null) {
                return `$${val.toFixed(2)}`
            }
        },
        formatPhoneNumber(val) {
            if (val !== null) {
                return `(${val.substring(0, 3)})${val.substring(3, 6)}-${val.substring(6)}`
            }
        },
        formatSocial(val) {

        }
    }
}
