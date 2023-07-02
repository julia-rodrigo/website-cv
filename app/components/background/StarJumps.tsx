import React from 'react'
import Stars from '../Animations/Stars'

const StarJumps = () => {
  return (
    <div className='w-[500px] h-[500px] absolute bottom-0 right-32'>
        <div className='w-full h-full relative top-50 -left-50 animate-spin-slow'>
            <div className='absolute w-52 h-52 top-12 left-16'><Stars /></div>
            <div className='absolute w-24 h-24 -bottom-20 left-40'><Stars /></div>
            <div className='absolute w-20 h-20 top-32 -right-20'><Stars /></div>
            <div className='absolute w-90 h-90 -bottom-40 left-20'><Stars /></div>
        </div>
    </div>
  )
}

export default StarJumps