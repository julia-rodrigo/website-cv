import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ruby_images } from '@/public/assets/index'
import speech_bubbles from "../../../constants/speech/Ruby"

const Ruby = () => {
  const [ speech, setSpeech ] = useState(speech_bubbles[0]);
  const [ ruby, setRuby ] = useState(ruby_images[0]);


  const handleClick = () => {
    setSpeech(speech_bubbles[Math.floor(Math.random() * speech_bubbles.length)])
    setRuby(ruby_images[Math.floor(Math.random() * ruby_images.length)])
  }

  useEffect(() => {
    handleClick()
  }, []);

  return (
      <div className='relative p-4'>
        <div className='h-[60px] relative flex flex-row '>
          <div className='group/ruby flex flex-row gap-6 items-center ' >
            <div className='flex items-center h-[40px] justify-center rounded-full dark:bg-transparent bg-[#e9e2a9] w-[40px]'>
              <Image
                src={ruby}
                alt="ruby_images"
                className='mx-10 sm:mx-0 cursor-pointer relative w-auto h-auto'
                onClick={handleClick}
                priority
              />
            </div>
            <span className='absolute dark:text-textGreen text-hoverDark font-medium sm:text-sm text-xs upercase  bg-textWall/10 dark:bg-hoverColor px-4 py-[1px] ml-6 rounded-xl sm:translate-x-3 sm:group-hover/ruby:translate-x-8 translate-x-3 group-hover/ruby:translate-x-12 transition-all duration-300 opacity-0 group-hover/ruby:opacity-95 mr-5'>
              {speech}
            </span>
          </div>
        </div>
      </div>
  )
}

export default Ruby