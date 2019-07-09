/* eslint-disable */
import Vuex from 'vuex'
import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils'
import store from '@/store'

import Elig from '@/components/views/Eligibility/Index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Eligibility.vue', () => {
    let mockStore
    let wrapper

    beforeEach(() => {
        mockStore = store
        wrapper = shallowMount(Elig, {
            store: mockStore,
            localVue,
            stubs: {
                PersonalInfo: '<div class="stubbed" />',
                EmploymentInfo: '<div class="stubbed" />',
                ContactInfo: '<div class="stubbed" />',
                PlanInfo: '<div class="stubbed" />',
                DataTable: '<div class="stubbed" />'
            }
        })
    })

    afterEach(() => {
        wrapper.destroy()
    })

    it('renders the component', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})