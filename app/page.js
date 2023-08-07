import dynamic from 'next/dynamic'
import React from 'react'

const Header = dynamic(() => import('@/components/Header'));
const Hero = dynamic(() => import('@/components/Hero'));
const About = dynamic(() => import('@/components/About'));
const Projects = dynamic(() => import('@/components/Projects'));
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));

const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home