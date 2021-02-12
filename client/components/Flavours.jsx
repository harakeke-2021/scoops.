import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchFlavours } from '../actions/index'

function Flavours (props) {
  useEffect(() => {
    props.dispatch(fetchFlavours())
  }, [])
  console.log(props.flavours)
  // const [flavours, setFlavours] = useState('')
  return (
    <div>
      <h1>Flavours.</h1>
      <ul>
        {props.flavours.map(flavour => {
          return <li key={flavour.id}><button>{flavour.name}</button></li>
        })}
      </ul>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    flavours: state.flavours
  }
}

export default connect(mapStateToProps)(Flavours)
