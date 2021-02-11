export const SET_FLAVOUR = 'SET_FLAVOUR'
export const SET_CONE = 'SET_CONE'
export const SET_TOPPING = 'SET_TOPPING'

export function setFlavour (flavour) {
  return (dispatch) => {
    dispatch({
      type: SET_FLAVOUR,
      flavour: flavour
    })
    return null
  }
}

export function setCone (cone) {
  return (dispatch) => {
    dispatch({
      type: SET_CONE,
      cone: cone
    })
    return null
  }
}

export function setTopping (topping) {
  return (dispatch) => {
    dispatch({
      type: SET_TOPPING,
      topping: topping
    })
    return null
  }
}
