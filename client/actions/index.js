export const SET_ICECREAM = 'SET_ICECREAM'

export function setIcecream(newIcecream) {
  return (dispatch) => {
    dispatch({
      type: SET_ICECREAM,
      icecream: newIcecream
    })
    return null
  }
}
