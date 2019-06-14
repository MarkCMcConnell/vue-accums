/* eslint-disable */
import Vuex from 'vuex'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import store from '@/store'

import Elig from '@/components/views/Eligibility/Index.vue'
import PersonalInfo from '@/components/views/Eligibility/PersonalInfo.vue'
import EmploymentInfo from '@/components/views/Eligibility/EmploymentInfo.vue'
import ContactInfo from '@/components/views/Eligibility/ContactInfo.vue'
import PlanInfo from '@/components/views/Eligibility/PlanInfo.vue'
import DataTable from '@/components/ui/DataTable.vue'

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
})
