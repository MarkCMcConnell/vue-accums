import { shallowMount } from '@vue/test-utils'
import Home from '@/components/views/Home'

describe('Home.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Home)
  })

  it('renders the component', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('has a header tag', () => {
    expect(wrapper.contains('h1')).toBe(true)
  })
})