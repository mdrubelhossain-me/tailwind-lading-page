import React from 'react'
import Hero from './Hero'
import ChooseUs from './ChooseUs'
import Products from '../shop/Products'
import Experiences from './Experiences'
import Materials from './Materials'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
        <Hero/>
        <ChooseUs/>
        <Products title="Customer Favorites You'll Love Most"/>
        <Experiences/>
        <Materials/>
        <Testimonial/>
      
    </div>
  )
}

export default Home
