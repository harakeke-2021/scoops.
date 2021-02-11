import React from 'react'

import { Link } from 'react-router-dom'

import Flavours from './Flavours'
import ConesCups from './ConesCups'
import Toppings from './Toppings'

function Home () {
  return (

    <div className='home'>
      <div className='categories'>
        <Flavours />
        <ConesCups />
        <Toppings />
      </div>
      <Link>
      Create my Ice Cream
      </Link>
    </div>
  )
}

export default Home
