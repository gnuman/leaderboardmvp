import { NOT_FOUND } from 'redux-first-router'

const components = {
  HOME: 'Home',
  LEADERBORAD: 'Leaderboard',
  [NOT_FOUND]: 'NotFound'
}

// NOTES: this is the primary reducer demonstrating how RFR replaces the need
// for React Router's <Route /> component.
//

export default (state = 'HOME', action = {}) => components[action.type] || state

