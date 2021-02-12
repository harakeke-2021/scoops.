import { FETCH_FLAVOURS } from '../actions/index'

function flavours (state = [], action) {
  switch (action.type) {
    case FETCH_FLAVOURS:
      return action.flavours

    default:
      return state
  }
}

export default flavours
