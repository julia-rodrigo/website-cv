import React from 'react'

import { TbBrandGithub, TbMail } from 'react-icons/tb'
import { 
    SlSocialLinkedin,
 } from 'react-icons/sl'

const Footer = () => {
  return (
    <div className='mdl:hidden inline-flex  items-center justify-center w-full py-6 gap-4'>
        <a href="https://github.com/julia-rodrigo" target="_blank">
            <span className='iconLink'>
                <TbBrandGithub />
            </span>
        </a>
        <a href="https://www.linkedin.com/in/julia-rodrigo-644362221/" target="_blank">
            <span className='iconLink'>
                <SlSocialLinkedin />
            </span>
        </a>
        <a href="mailto:juliarodrigo2301@gmail.com" target="_blank">
            <span className='iconLink'>
                <TbMail />
            </span>
        </a>
    </div>
  )
}

export default Footer