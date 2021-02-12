import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchToppings } from '../actions/index'

function Flavours (props) {
  useEffect(() => {
    props.dispatch(fetchToppings())
  }, [])
  // console.log(props.)
  // const [flavours, setFlavours] = useState('')
  return (
    <div>
      <h1>Flavours.</h1>
      <ul>
        {props.toppings.map(topping => {
          return <li key={topping.id}><button>{topping.name}</button></li>
        })}
      </ul>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    toppings: state.toppings
  }
}

export default connect(mapStateToProps)(Flavours)
