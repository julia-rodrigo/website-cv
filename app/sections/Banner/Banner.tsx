import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'

const Banner = () => {
    
  return (
    <section
        id="home"
        className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 lgl:flex-row'
    >
      <LeftBanner />
      <RightBanner />
    </section>
  )
}

export default Banner