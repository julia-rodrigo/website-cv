import React from 'react'
import { desk } from '@/public/assets/index'
import Image from 'next/image'
import Ruby from '@/app/components/Ruby'

const RightBanner = () => {
  return (
    // <div className='w-full lgl:w-1/3 h-1/3 relative group'>
    <div className='w-full lgl:w-1/3 h-1/3 relative group'>
        <div className="absolute w-full -left-6 -top-6 rounded-lg items-center pl-20">
          <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
            <Image 
              className='rounded-lg object-cover hidden lgl:block duration-300'
              src={desk}
              alt="profileImage"
            />
            <div className='hidden lgl:inline-block absolute w-full h-full bg-bodyColor rounded-md top-0 left-0 group-hover:bg-transparent duration-300'>
            </div>
          </div>
          <div className='hidden lgl:inline-block w-[0px] h-[1px] bg-textGreen rounded-md group-hover:w-full transition-all duration-900'></div>
          <div className='w-full h-full sm:my-10 mdl:pl-24'>
            
            <Ruby />
          </div>
        </div>
        
    </div>
  )
}

export default RightBanner