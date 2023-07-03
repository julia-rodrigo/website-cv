import React from 'react'
import Lottie from "lottie-react";
import { hills } from '@/public/assets/index'

const Hills = () => {
  return (
    <div>
        <Lottie animationData={hills} className='overflow-hidden rounded-xl'/>
    </div>
  )
}

export default Hills