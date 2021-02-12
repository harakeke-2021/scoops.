import { FETCH_TOPPINGS } from '../actions/index'

function toppings (state = [], action) {
  switch (action.type) {
    case FETCH_TOPPINGS:
      return action.toppings

    default:
      return state
  }
}

export default toppings
