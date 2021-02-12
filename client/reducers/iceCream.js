import {
  SET_ICECREAM
} from '../actions'

function icecream (state = [], action) {
  switch (action.type) {
    case SET_ICECREAM:
      return [...state, action.icecream]

    default:
      return state
  }
}

export default icecream
