"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Lottie from "lottie-react";
import { deer } from '@/public/assets'

import { useTheme } from 'next-themes'

const Deer = () => {

    // const [ theme, setTheme ] = useState('Dark')

    const [ mounted, setMounted ] = useState(false);

    const { theme, setTheme } = useTheme();
    
    const handleTheme = () => {
        if (theme == 'dark')
            setTheme('light');
        else
            setTheme('dark')
        console.log(theme)
    }

    useEffect(() => {
        setMounted(true)
        setTheme('dark')
    }, []);

    if( !mounted ) {
        return null;
    }
    

  return (
    <div className='group/deer flex flex-row items-center relative'>
        <Lottie 
            animationData={deer} 
            className='max-w-[100px] md:ml-10 sm:ml-0' 
            onClick={handleTheme}
        />
        <span 
            className='absolute text-yellow-200 font-medium text-sm upercase bg-hoverColor px-4 py-[1px] ml-6 rounded-xl left-14 translate-x-6 group-hover/deer:translate-x-12 transition-all duration-300 opacity-0 group-hover/deer:opacity-95'
        >
            {theme == 'dark' ? 'baaa~' : 'zzZZ'}
        </span>
    </div>
  )
}

export default Deer