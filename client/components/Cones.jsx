import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCones } from '../actions'

function Cones ({ cones, dispatch }) {
  useEffect(() => {
    dispatch(fetchCones())
  }, [])

  return (
    <div>
      <ul>
        {
          cones.map(cone => (
            <li key={cone.id}>
              <button>{cone.name}</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    cones: state.cones
  }
}

export default connect(mapStateToProps)(Cones)
