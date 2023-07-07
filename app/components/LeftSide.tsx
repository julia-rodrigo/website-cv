import React from 'react'

import { TbBrandGithub, TbMail } from 'react-icons/tb'
import { 
    SlSocialLinkedin,
 } from 'react-icons/sl'

const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <div className='flex flex-col gap-4'>
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
        <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  )
}

export default LeftSide