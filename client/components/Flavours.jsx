import React, { useEffect, useState } from 'react'

import { getFlavours } from '../api'

const [flavours, setFlavours] = useState('')



function Flavour () {
  return (
    <div>
      <h1>Flavours.</h1>
      <ul>
        {flavours.map(flavour => {
          return <li key={flavour.id}><button>{flavour.name}</button></li>
        })}
      </ul>
    </div>
  )
}

export default Flavour
