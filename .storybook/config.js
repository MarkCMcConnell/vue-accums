import { configure } from '@storybook/vue'

import '../src/assets/styles/vendor/bootstrap.min.css'

function loadStories() {
	require('../src/stories')
}

configure(loadStories, module);