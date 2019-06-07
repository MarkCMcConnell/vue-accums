import Vuex from 'vuex'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import store from '../../../store'

import Elig from './Index.vue'
import PersonalInfo from './PersonalInfo.vue'
import EmploymentInfo from './EmploymentInfo.vue'
import ContactInfo from './ContactInfo.vue'
import PlanInfo from './PlanInfo.vue'
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
