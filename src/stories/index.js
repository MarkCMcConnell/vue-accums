import { storiesOf } from '@storybook/vue'
import { action, linkTo } from '@storybook/addons'

import Btn from '../components/ui/Btn.vue'
import ProgressBar from '../components/ui/ProgressBar.vue'

export const userData = {
	width: 70
}

storiesOf('Btn', module)
	.add('Styles', () => ({
		components: { Btn },
		template: `
			<div>
				<Btn btnStyle="primary">Click Me</Btn>
				<Btn btnStyle="secondary">Click Me</Btn>
				<Btn btnStyle="ghost">Click Me</Btn>
			</div>
		`
	}))

storiesOf('Progress Bar', module)
	.add('Style', () => ({
		components: { ProgressBar },
		template: '<ProgressBar :width="width" />',
		data () {
			return {
				width: 35
			}
		} 
	}))
