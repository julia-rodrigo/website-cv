import SectionTitle from '@/app/components/SectionTitle'
import React, { useEffect, useState } from 'react'

import Lottie from "lottie-react";
import { rocket, whale, city } from '@/public/assets'
import StarField from '@/app/components/background/StarField';
import StarJumps from '@/app/components/background/StarJumps';

const Contact = () => {

  const [ loop, setLoop ] = useState(true);
  
  function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}

  const handleLoop = async () => {
    await timeout(5500);
    setLoop(false)
  }

  useEffect(() => {
    handleLoop()
  }, [])

  return (
    <section
        id="contact"
        className='relative remax-w-containerSmall mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
    >

      <div className='dark:hidden inline-block absolute w-full h-screen -z-10'>
          <StarField />
          <StarJumps />
      </div>

      <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
        04. What's Next?
      </p>
      <h2 className='font-titleFont text-5xl font-semibold'>Get in Touch</h2>

      <div className='dark:hidden inline-block max-w-[200px] max-h-[200px] relative items-center justify-center mt-10 mb-5'>
        <Lottie className='absolute w-full overflow-hidden rounded-full' animationData={city} />
        <Lottie className={`relative w-full overflow-hidden rounded-full ${loop ? 'animate-spin-ease' : 'animate-none'}`} animationData={whale} loop={loop} onLoopComplete={handleLoop} onClick={() => setLoop(true)}/>
      </div>

      <a href='mailto:juliarodrigo2301@gmail.com' className='dark:pointer-events-auto pointer-events-none'>
        <div className='group/rocket items-center flex flex-col'>
          <Lottie className='dark:block hidden max-w-[100px] pt-10 pb-5 group-hover/rocket:-translate-y-20 duration-500' animationData={rocket} />
          <span className='text-textGreen font-medium text-sm upercase bg-hoverColor px-4 py-[1px] ml-6 rounded-xl -translate-y-3 group-hover/rocket:-translate-y-12 transition-all duration-300 opacity-0 group-hover/rocket:opacity-95'>
            juliarodrigo2301@gmail.com
          </span>
          <p className='max-w-[600px] text-center text-textDark group-hover/rocket:hoverParagraph'>
            I am currently searching for job opportunities that starts around September 2023 or earlier. 
            Please let me know if you interested through my Gmail or LinkedIn and I will get back to you :) thanks!
          </p>
        </div>
      </a>
        
      
      <a href='mailto:juliarodrigo2301@gmail.com'>
        <button className='w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300'>
            Say Hello
        </button>
      </a>      
    </section>
  )
}

export default Contact