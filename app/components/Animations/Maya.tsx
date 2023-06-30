import React, { useEffect, useState } from 'react'

import { maya } from "@/public/assets";
import Image from 'next/image';

const Maya = () => {

    const speech_bubbles = [
        "Where is my croissant?",
        "I miss my potatoe",
        "French fries are quite a delicacy",
        "This is..",
        "Yori takaku...~",
        "I will cherish these gifts, thank you",
        "Top star. There is only one.",
        "Horror? ...Sorry, which do you refer to?",
        "The love of the stars",
        "... zutto anata wo ~",
        "I will show you my brilliance",
        "Baumkuchen... for me? I am grateful.",
        "Art class? Even the brightest of stars... hides.",
      ]
    
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
        <Image className="max-w-[100%]" src={maya} alt="logo" onClick={handleSpeech}/>
        <span className='absolute text-textGreen font-medium text-sm upercase bg-hoverColor px-4 py-[1px] ml-6 rounded-xl translate-x-2 group-hover/maya:translate-x-8 transition-all duration-300 opacity-0 group-hover/maya:opacity-95'>
            {speech}
        </span>
    </div>

    
  )
}

export default Maya