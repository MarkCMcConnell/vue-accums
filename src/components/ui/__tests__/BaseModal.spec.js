import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import BaseModal from '@/components/ui/BaseModal.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Modal component', () => {
  describe('Modal rendering', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallowMount(BaseModal, {
        slots: {
          modalHeader: '<h2>Title</h2>',
          modalBody: '<p>Some Content</p>',
          modalFooter: '<p>More Content</p>',
          modalButton: 'Close'
        }
      })
    })

    it('renders correctly', () => {
      expect(wrapper.find('.modalBackdrop')).toBeTruthy()
    })

    it('renders slot content', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('Modal behavior', () => {
    let wrapper
    let store
    let mutations

    beforeEach(() => {
      mutations = {
        HIDE_MODAL: jest.fn()
      }
      store = new Vuex.Store({
        modules: {
          modal: {
            state: {
              showModal: true
            },
            mutations
          }
        }
      })

      wrapper = shallowMount(BaseModal, {
        store,
        localVue
      })
    })

    it('commits a HIDE_MODAL mutation when clicked', () => {
      wrapper.find('.modal-button').trigger('click')
      expect(mutations.HIDE_MODAL).toHaveBeenCalled()
    })
  })
})
