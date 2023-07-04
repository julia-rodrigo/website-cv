import React from 'react'

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-6 pl-5 text-textLight '>
        <a href="mailto:juliarodrigo2301@gmail.com">
            <p
                className='text-sm rotate-90 w-72 tracking-wide dark:text-textGreen dark:hover:text-pink-200 text-textPlant hover:text-textBright'
            >
              @juliarodrigo_portfolio
            </p>
        </a>
        <span className='w-[2px] h-32 bg-textDark inline-flex'></span>

    </div>
  )
}

export default RightSide