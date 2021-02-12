import { combineReducers } from 'redux'

import icecream from './iceCream'
// import products from './products'
import flavours from './flavours'
import cones from './cones'
import toppings from './toppings'

export default combineReducers({
  icecream,
  flavours,
  cones,
  toppings
})
