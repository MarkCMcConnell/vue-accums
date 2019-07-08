/* eslint-disable */
import { createLocalVue, shallowMount } from '@vue/test-utils'

import CoveragesDashboard from '../CoveragesDashboard.vue'

describe('CoveragesDashboard', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(CoveragesDashboard, {
			propsData: {
				coverageData: [{
					CoverageName: 'DENTAL',
					CovPlan: 'Silver',
					EffectiveDate: '\/Date(1514782800000-0500)\/',
					TermDate: '\/Date(253402232400000-0500)\/'
				}]
			}
		})
	})

	it('renders the component', () => {
		expect(wrapper.html()).toMatchSnapshot()
	})

	describe('formatCoverages', () => {
		it('converts Healthx Date string to human readable', () => {
			expect(wrapper.vm.formatCoverages).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						EffectiveDate: '1/1/2018'
					})
				])
			)
		})
	})
})