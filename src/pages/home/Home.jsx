import React from 'react'
import Hero from './Hero'
import ChooseUs from './ChooseUs'
import Products from '../shop/Products'
import Experiences from './Experiences'

const Home = () => {
  return (
    <div>
        <Hero/>
        <ChooseUs/>
        <Products title="Customer Favorites You'll Love Most"/>
        <Experiences/>
      
    </div>
  )
}

export default Home
