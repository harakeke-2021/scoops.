import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchFlavours } from '../actions/index'

function Flavours (props) {
  useEffect(() => {
    props.dispatch(fetchFlavours())
  }, [])

  // const [flavour, setFlavour] = useState('')

  // function handleClick (value) {
  //   setFlavour(value)
  // }

  return (
    <div>
      {/* <img src="images/hazelnut.png" alt='hello'/> */}
      <ul className='container-flavour'>
        {props.flavours.map(flavour => {
          console.log(flavour.image)
          return <li key={flavour.id}>
            <div onClick={(value) => handleClick(value)} value={flavour.name}>
              <img src={flavour.image} alt={flavour.name}/> {flavour.name}</div></li>
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
