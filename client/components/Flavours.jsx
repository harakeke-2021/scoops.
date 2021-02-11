import React from 'react'
const flavours = ['chocolate', 'chocolate', 'chocolate', 'chocolate', 'chocolate', 'chocolate', 'chocolate']

function Flavour () {
  return (
    <div>
      <h1>Flavours.</h1>
      <ul>
        {flavours.map(flavour => {
          return <li key={flavour}>{flavour}</li>
        })}
      </ul>
    </div>
  )
}

export default Flavour
