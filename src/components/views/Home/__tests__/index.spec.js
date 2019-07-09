/* eslint-disable */
import Vuex from 'vuex'
import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'

import Home from '@/components/views/Home'
import BaseModal from '@/components/ui/BaseModal.vue'
import CoveragesDashboard from '@/components/layout/CoveragesDashboard.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Home.vue', () => {
    let mockStore
    let wrapper
    beforeEach(() => {
        mockStore = store
        wrapper = mount(Home, {
            store: mockStore,
            localVue,
            stubs: {
                BaseModal: '<div class="stubbed modalBackdrop" />'                
            },
            setData: {
                coverageDashboard: true
            }
        })
    })

    afterEach(() => {
        wrapper.destroy()
    })

    it('renders the component', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('has a header tag', () => {
        expect(wrapper.contains('h1')).toBe(true)
    })
    
    describe('specific behaviors', () => {
        it('displays a modal on first load', () => {
            expect(wrapper.contains('.modalBackdrop')).toBe(true)
        })

        it('should pass the "dashboard" prop to a dashboard component', () => {
            const dashboardWrapper = wrapper.find(CoveragesDashboard)
            expect(dashboardWrapper.props().isDashboardFormat).toEqual(true)
        })
    })
})
