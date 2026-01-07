import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Rent from '../components/Rent'
import TellUs from '../components/TellUs'
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Rent/>
      <TellUs/>
      <WhyUs/>
    </div>
  )
}

export default Home
