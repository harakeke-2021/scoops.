import { FETCH_CONES } from '../actions/index'

function cones (state = [], action) {
  switch (action.type) {
    case FETCH_CONES:
      return action.cones

    default:
      return state
  }
}

export default cones
