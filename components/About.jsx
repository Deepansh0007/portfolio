import React from 'react'

const Card = ({text}) =>{
    return(
        <div className='card card_bg px-5 py-3 font-semibold text-md rounded-md'>{text}</div>
    )
}
const About = () => {
  return (
    <div id='about' className='min-h-screen'>
    <div className='flex items-center justify-center flex-col'>
        <h1 className='text-3xl font-bold heading-sec__main'>ABOUT ME</h1>
        <p className='mt-10 text-lg md:px-10 px-5'>Here you will find more information about me, what I do, and my current skills<br/> mostly in terms of programming and technology</p>
    </div>
    <div className='grid md:grid-cols-2 md:gap-y-5 md:px-10 px-5'>
        <div className='mt-10'>
        <h2 className='text-2xl font-bold'>Get to know me!</h2>
        <p className='text-md mt-10 leading-7'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className='font-bold text-lg'>Projects</span> section.I'm open to Job opportunities where I can contribute, learn and grow. <br/>If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
        <button className="btn bg-primary text-white hover:bg-[#6d38f3] mt-5 px-8 text-md">Contact</button>
        </div>
        <div className='md:pl-10 mt-10'>
        <h2 className='text-2xl font-bold'>My skills</h2>
        <div className='flex mt-10 gap-3 flex-wrap'>
            <Card text = "HTML"/>
            <Card text = "CSS"/>
            <Card text = "JAVASCRIPT"/>
            <Card text = "REACT"/>
            <Card text = "RESPONSIVE DESIGN"/>
            <Card text = "SQL"/>
            <Card text = "NODEJS"/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default About