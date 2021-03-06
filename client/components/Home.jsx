import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import Flavours from './Flavours'
import Cones from './Cones'
import Toppings from './Toppings'

function Home () {
  const [showFlavours, setShowFLavours] = useState(false)
  const [showToppings, setShowToppings] = useState(false)
  const [showCones, setShowCones] = useState(false)

  const toggleFlavours = () => {
    setShowFLavours(!showFlavours)
  }

  const toggleToppings = () => {
    setShowToppings(!showToppings)
  }

  const toggleCones = () => {
    setShowCones(!showCones)
  }

  return (

    <div className='home'>
      <h1>Scoops.</h1>
      <div className='categories'>
        <button onClick={toggleCones}>Cones</button>
        {showCones && <Cones /> }

        <button onClick={toggleFlavours}>Flavours</button>
        {showFlavours && <Flavours /> }

        <button onClick={toggleToppings}>Toppings</button>
        {showToppings && <Toppings /> }
      </div>
      <Link to='/'>
      Create my Ice Cream
      </Link>

    </div>
  )
}

export default Home
