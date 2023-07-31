import About from '@/components/About'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import React from 'react'

const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default Home