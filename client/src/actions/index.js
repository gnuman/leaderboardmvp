import { NOT_FOUND } from 'redux-first-router'

// try dispatching these from the redux devTools

export const goToPage = (type) => ({
  type
})

export const goHome = () => ({
  type: 'HOME'
})

export const notFound = () => ({
  type: NOT_FOUND
})

