import React from 'react'
import Image from 'next/image';
import instagram from "../public/instagram.svg";
import twitter from "../public/twitter.svg";
import github from "../public/github.svg";
import linkedin from "../public/linkedin.svg";


const Footer = () => {
  return (
    <footer className='p-5 lg:p-10 bg-[#333333] flex justify-between'>
        <h1 className='text-xl font-bold text-white'>DEEPANSH</h1>
        <div className='h-5 w-max flex gap-5'>
            <a href='https://github.com/Deepansh0007'><Image src = {github} alt="github"/></a>
            <a href='https://www.instagram.com/d_pansh_'><Image src = {instagram} alt="instagram"/></a>
            <a href='https://lnkd.in/gPz3dD_x'><Image src = {linkedin} alt="linkedin"/></a>
            <a href='https://twitter.com/Deepansh_001'><Image src = {twitter} alt="twitter"/></a>
        </div>
        
    </footer>
  )
}

export default Footer