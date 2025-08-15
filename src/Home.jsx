import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Images from './Images'
import Footer from './Footer'
import Button from './Button'
import Our from './Our'
import About from './About'
import Why from './Why'
import Contact from './Contact'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
      <About/>
        <Images/>
        <Button/>
        <Our />
        <Why/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home