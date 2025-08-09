import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Images from './Images'
import Footer from './Footer'
import Button from './Button'
import Our from './Our'
import Why from './Why'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        
        <Images/>
        <Button/>
        <Our />
        <Why/>
        <Footer/>
    </div>
  )
}

export default Home