/* eslint-disable */
import Vuex from 'vuex'
import {
    mount,
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
        wrapper = mount(Elig, {
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

    it('renders the component', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    describe('formatAccumulators', () => {
        describe('the return value', () => {
            it('should return an array', () => {
                expect(Array.isArray(wrapper.vm.formatAccumulators)).toBeTruthy()
            })

            it('should have an object in the array', () => {
                expect.arrayContaining([{}])
            })
        })

        it('converts IndividualAccum to Individual', () => {
            expect.arrayContaining([
                expect.objectContaining({
                    IndividualAccum: 'Individual'
                })
            ])
        })

        it('converts to CoverageType to full word', () => {
            expect.arrayContaining([
                expect.objectContaining({
                    CoverageType: 'Medical'
                })
            ])
        })

        it('converts values to currency amounts', () => {
            expect.arrayContaining([
                expect.objectContaining({
                    CurrentAmount: '$12323'
                })
            ])
        })
    })
})