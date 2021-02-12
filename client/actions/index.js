import { getAll } from '../api'

export const SET_ICECREAM = 'SET_ICECREAM'
export const FETCH_FLAVOURS = 'FETCH_FLAVOURS'

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
