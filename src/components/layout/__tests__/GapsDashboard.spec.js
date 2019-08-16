/* eslint-disable */
import { shallowMount } from '@vue/test-utils'

import GapsDashboard from '../GapsDashboard.vue'

describe('GapsDashboard', () => {
	let wrapper
	// TODO: Move props/state changes into the individual test
	beforeEach(() => {
		wrapper = shallowMount(GapsDashboard, {
			propsData: {
				gapsData: [{
					Name: 'Diabetes Check',
					Accum_Desc: 'Blood Sugar Testing',
					RecFrequency: 'Weekly',
					ClaimSystemCode: 'Due Soon',
					Field1_Date: '\/Date(1528978573953-0400)\/',
					CovBenefit: 'Y',
					SpecificType: 'GC'
				}]
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('renders the component', () => {
		expect(wrapper.html()).toMatchSnapshot()
	})
	
	describe('formatGaps', () => {
		it('converts Y to Yes', () => {
			expect(wrapper.vm.formatGaps).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						CovBenefit: 'Yes'
					})
				])
			)
		})
	
		it('converts Healthx Date string to human readable', () => {
			expect(wrapper.vm.formatGaps).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						Field1_Date: '6/14/2018'
					})
				])
			)
		})
	})
})
