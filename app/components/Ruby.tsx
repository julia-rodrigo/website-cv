import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ruby_images } from '@/public/assets/index'


const Ruby = () => {

    const [ ruby, setRuby ] = useState(ruby_images[Math.floor(Math.random() * ruby_images.length)]);
  const handleRuby = () => {
    setRuby(ruby_images[Math.floor(Math.random() * ruby_images.length)])
  }

  useEffect(() => {
    handleRuby()
  }, []);

  return (
    <div className='h-[70px] p-4'>
        <Image
        src={ruby}
        alt="ruby_images"
        className='mx-10 cursor-pointer'
        onClick={handleRuby}
        
    />
    </div>
  )
}

export default Ruby