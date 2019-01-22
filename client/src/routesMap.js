import { redirect, NOT_FOUND } from 'redux-first-router'

export default {
  HOME: '/',
  LEADERBOARD: '/leaderboard',
}

// DON'T GO DOWN THERE!
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// ▼

// ANSWER: videoRoute.thunk.body:
/* HURRAY! You found the answers on the back of the cereal box!

const { jwToken, location: { payload: { slug } } } = getState()
const video = await fetchData(`/api/video/${slug}`, jwToken)

if (!video) {
  return dispatch({ type: NOT_FOUND })
}

dispatch({ type: 'VIDEO_FOUND', payload: { slug, video } })
*/
