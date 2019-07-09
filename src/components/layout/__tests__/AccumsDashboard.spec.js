/* eslint-disable */
import { createLocalVue, shallowMount } from '@vue/test-utils'

import AccumsDashboard from '../AccumsDashboard.vue'

const localVue = createLocalVue()

describe('AccumsDashboard', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(AccumsDashboard, {
			localVue,
			propsData: {
				accumsData: [{
					Name: 'Dental',
					IndividualAccum: true,
					CoverageType: 'D',
					PlanYear: 2019,
					CurrentAmount: 1,
					MaximumAmount: 1000,
					AddDateTime: '\/Date(1528978573953-0400)\/'
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

	describe('formatAccumulators', () => {
		it('converts IndividualAccum to Individual or Family', () => {
			expect(wrapper.vm.formatAccumulators).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						IndividualAccum: 'Individual'
					})
				])
			)
		})

		it('converts coverage types to full words', () => {
			expect(wrapper.vm.formatAccumulators).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						CoverageType: 'Dental'
					})
				])
			)
		})

		it('converts CurrentAmount to currency format', () => {
			expect(wrapper.vm.formatAccumulators).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						CurrentAmount: '$1.00'
					})
				])
			)
		})

		it('converts MaximumAmount to currency format', () => {
			expect(wrapper.vm.formatAccumulators).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						MaximumAmount: '$1000.00'
					})
				])
			)
		})
	})
})