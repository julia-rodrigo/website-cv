import React from 'react'
import Ruby from './Animations/Ruby';


interface Props {
    title: string;
    titleNo: string;
}

const SectionTitle = ({ titleNo, title }: Props) => {
  
  return (
    <div className='flex flex-row'>
      <h2 className='lg:w-full w-1/2 font-titleFont text-2xl font-semibold dark:text-textLight text-black flex items-center dark:hover:text-pink-200'>
          <span className='text-base md:text-lg dark:text-textGreen text-textPlant mr-2 '>{titleNo}</span> 
          <span className='underlineHover'>{title}</span>
          <span className='hidden mdl:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6'>
          </span>
      </h2>

      <div className='w-full'>
        <Ruby />
      </div>

    </div>
    
  )
}

export default SectionTitle