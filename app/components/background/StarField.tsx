import React from 'react'
import Stars from '../Animations/Stars'

const StarField = () => {
  return (
    <div className='w-full h-full absolute top-0 left-0'>
        <div className='w-96 h-96 relative top-50 -left-50 animate-spin-slow'>
            <div className='absolute w-38 h-38 top-12 left-16'><Stars /></div>
            <div className='absolute w-40 h-40 -bottom-20 left-40'><Stars /></div>
            <div className='absolute w-20 h-20 top-32 -right-20'><Stars /></div>
            <div className='absolute w-20 h-20 -bottom-40 left-20'><Stars /></div>
        </div>
    </div>
  )
}

export default StarField