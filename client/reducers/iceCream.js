import {
  SET_FLAVOUR,
  SET_CONE,
  SET_TOPPING
} from '../actions'

function icecream (state = [], action) {
  switch (action.type) {
    case SET_FLAVOUR:
      return [...state, action.flavour]
  }
}
