import SectionTitle from '@/app/components/SectionTitle'
import React from 'react'

import Lottie from "lottie-react";
import { rocket } from '@/public/assets'

const Contact = () => {
  return (
    <section
        id="contact"
        className='max-w-containerSmall mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
    >
      <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
        04. What's Next?
      </p>
      <h2 className='font-titleFont text-5xl font-semibold'>Get in Touch</h2>

      <div className='group items-center flex flex-col'>
        <Lottie className='block max-w-[100px] pt-10 pb-5 group-hover:-translate-y-20 duration-500' animationData={rocket} />
        <p className='max-w-[600px] text-center text-textDark group-hover:hoverParagraph'>
          I am currently searching for a job starting from September 2023 or later. 
          Please let me know if you are interested through my Gmail or LinkedIn and I will get back to you :)
        </p>
      </div>
      <a href='mailto:juliarodrigo2301@gmail.com'>
        <button className='w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300'>
            Say Hello
        </button>
      </a>      
    </section>
  )
}

export default Contact