import { getAll } from '../api'

export const SET_ICECREAM = 'SET_ICECREAM'
export const FETCH_FLAVOURS = 'FETCH_FLAVOURS'
export const FETCH_TOPPINGS = 'FETCH_TOPPINGS'
export const FETCH_CONES = 'FETCH_CONES'

export function setIcecream (newIcecream) {
  return (dispatch) => {
    dispatch({
      type: SET_ICECREAM,
      icecream: newIcecream
    })
    return null
  }
}

export function fetchFlavours () {
  return (dispatch) => {
    return getAll()
      .then(products => {
        dispatch({
          type: FETCH_FLAVOURS,
          flavours: products.flavours
        })
        return null
      })
  }
}

export function fetchToppings () {
  return (dispatch) => {
    return getAll()
      .then(products => {
        dispatch({
          type: FETCH_TOPPINGS,
          toppings: products.toppings
        })
        return null
      })
  }
}

export function fetchCones () {
  return (dispatch) => {
    return getAll()
      .then(products => {
        dispatch({
          type: FETCH_CONES,
          cones: products.cones
        })
        return null
      })
  }
}
