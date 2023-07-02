import React from 'react'
import Lottie from "lottie-react";
import { stars } from '@/public/assets/index'

const Stars = () => {
  return (
    <div>
        <Lottie animationData={stars}/>
    </div>
  )
}

export default Stars