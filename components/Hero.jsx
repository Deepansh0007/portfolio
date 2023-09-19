import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center place-items-center flex-col min-h-screen px-10 bg text-center text-white'>
        <h1 className="text-5xl font-extrabold tracking-wider">HEY I'AM DEEPANSH</h1>
        <h1 className="text-5xl font-extrabold tracking-wide mt-5">I'AM A FULL STACK DEVELOPER</h1>
        
        <a href='#projects'><button className="btn bg-[#2B84EA] text-white hover:bg-[#3870f3] mt-12 px-12 text-xl border-none">PROJECTS</button></a>

    </div>
  )
}

export default Hero