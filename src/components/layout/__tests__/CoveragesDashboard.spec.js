/* eslint-disable */
import { mount } from '@vue/test-utils'

import CoveragesDashboard from '../CoveragesDashboard.vue'
import DataTable from '../../ui/DataTable.vue'

describe('CoveragesDashboard', () => {
	let wrapper

	beforeEach(() => {
		wrapper = mount(CoveragesDashboard, {
			propsData: {
				coverageData: [
					{
						CoverageName: 'DENTAL',
						CovPlan: 'Silver',
						EffectiveDate: '\/Date(1514782800000-0500)\/',
						TermDate: '\/Date(253402232400000-0500)\/'
					},
					{
						CoverageName: 'DENTAL',
						CovPlan: 'Silver',
						EffectiveDate: '\/Date(1483246800000-0500)\/',
						TermDate: '\/Date(1514696400000-0500)\/'
					}
				],
				isDashboardFormat: true,
				yearRange: 1
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('renders the component', () => {
		expect(wrapper.html()).toMatchSnapshot()
	})

	describe('dashboard format', () => {
		it('renders as a dashboard based on isDashboardFormat prop', () => {
			const dashboardWrapper = wrapper.find('section')
			expect(dashboardWrapper.classes()).toContain('dashboard')
		})
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

		it('renders the specified year range', () => {
			expect(wrapper.findAll('.dataRow').length).toBe(1)
		})
	})
})