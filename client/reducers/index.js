import { combineReducers } from 'redux'

import toppings from './toppings'
import flavours from './flavours.js'
import cones from './cones'

export default combineReducers({
  toppings,
  flavours,
  cones
})
