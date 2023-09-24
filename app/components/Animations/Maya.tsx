import React, { useEffect, useState } from 'react'
import speech_bubbles from "../../../constants/speech/Maya"
import { maya } from "@/public/assets";
import Image from 'next/image';

const Maya = () => {
      const [ speech, setSpeech ] = useState("Ma claudine oof");
      const handleSpeech = () => {
        setSpeech(speech_bubbles[Math.floor(Math.random() * speech_bubbles.length)])
      }

      useEffect(() => {
        handleSpeech()
      }, [setSpeech]);
    

  return (

    <div 
        className='flex flex-row group/maya relative items-center'
    >
        <Image 
          // className='w-auto h-auto'
          className='w-auto sm:h-[26px] min-h-auto'
          src={maya} alt="logo" onClick={handleSpeech} priority
        />
        {/* <Image className="max-w-[100%]" src={maya} alt="logo" onClick={handleSpeech} priority/> */}
        <span className='absolute text-textGreen font-medium sm:text-sm text-xs bg-hoverColor px-4 py-[1px] ml-6 rounded-xl translate-x-2 group-hover/maya:translate-x-8 transition-all duration-300 opacity-0 group-hover/maya:opacity-95'>
            {speech}
        </span>
    </div>    
  )
}

export default Maya