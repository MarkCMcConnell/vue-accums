// Import mock data
import memberData from '../../../data/SampleElig.js'
import claims from '../../../data/SampleClaims.js'

const state = {
  memberData,
  claims,
  currentView: 'Home'
}

export default function createStoreConfig (custom = { state: {} }) {
  const mockState = Object.assign({}, state, custom.state)

  return {
    state: mockState
  }
}
