import React from 'react'
import Lottie from "lottie-react";
import { book } from '@/public/assets/index'

const Book = () => {
  return (
    <div>
        <Lottie animationData={book} className='overflow-hidden rounded-xl w-[200px]'/>
    </div>
  )
}

export default Book