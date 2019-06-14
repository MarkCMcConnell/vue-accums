/* eslint-disable */
import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import store from '@/store'

import Home from '@/components/views/Home'
import BaseModal from '@/components/ui/BaseModal.vue'

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
      }
    })
  })

  it('renders the component', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('has a header tag', () => {
    expect(wrapper.contains('h1')).toBe(true)
  })
  
  it('displays a modal on first load', () => {
    expect(wrapper.contains('.modalBackdrop')).toBe(true)
  })
})
