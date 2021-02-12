import React from 'react'

import { Link } from 'react-router-dom'

import Flavours from './Flavours'
import Cones from './Cone'
import Toppings from './Toppings'

function Home () {
  return (

    <div className='home'>
      <div className='categories'>
        <Flavours />
        {/* <Cones/>
        <Toppings /> */}
      </div>
      <Link to='/'>
      Create my Ice Cream
      </Link>

    </div>
  )
}

export default Home
