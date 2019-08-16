import { storiesOf } from '@storybook/vue'
import { action, linkTo } from '@storybook/addons'

import Btn from '../components/ui/Btn.vue'

storiesOf('Btn', module)
	.add('Primary', () => ({
		components: { Btn },
		template: '<Btn :primary="true" :ghost="false">Click Me</Btn>'
	}))
	.add('Secondary', () => ({
		components: { Btn },
		template: '<Btn :primary="false" :ghost="false">Click Me</Btn>'
	}))
	.add('Ghost', () => ({
		components: { Btn },
		template: '<Btn :primary="true" :ghost="false">Click Me</Btn>'
	}))
