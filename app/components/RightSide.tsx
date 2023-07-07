import React from 'react'

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-8 pl-5 text-textLight '>
        <a href="mailto:juliarodrigo2301@gmail.com" className='h-[171px] w-[20px]'>
            <p
                className='text-sm rotate-90 tracking-wide dark:text-textGreen dark:hover:text-pink-200 text-textPlant hover:text-textBright'
            >
              @juliarodrigo_portfolio
            </p>
        </a>
        <span className='w-[2px] h-20 bg-textDark inline-flex'></span>

    </div>
  )
}

export default RightSide