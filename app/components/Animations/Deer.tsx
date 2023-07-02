"use client";
import React, { useEffect, useState } from 'react'
import Lottie from "lottie-react";
import { deer } from '@/public/assets'

import { useTheme } from 'next-themes'

const Deer = () => {

    // const [ theme, setTheme ] = useState('Dark')

    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const [ mounted, setMounted ] = useState(false);

    const { theme, setTheme } = useTheme();

    const date = new Date();
    
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
        <div className='md:ml-10 sm:ml-0 relative h-[100px] w-[100px] items-center justify-center rounded-full dark:bg-transparent bg-[#e9e2a9]'>
            <Lottie 
                animationData={deer} 
                className='min-w-[100px] justify-center items-center animate-spin-slow dark:animate-none' 
                onClick={handleTheme}
            />
        </div>
        <span 
            className='absolute w-full dark:text-yellow-200 text-textWall font-medium text-sm upercase bg-textWall/10 dark:bg-hoverColor px-4 py-[1px] ml-6 rounded-xl left-14 translate-x-6 group-hover/deer:translate-x-12 transition-all duration-300 opacity-0 group-hover/deer:opacity-95'
        >
            {theme == 'dark' ? 'baaa~ ' : 'zzZZ... '} { week[date.getDay()] }, { date.getHours() }h:{ date.getMinutes() }m
        </span>
    </div>
  )
}

export default Deer