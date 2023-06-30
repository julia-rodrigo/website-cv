import React from 'react'
import Ruby from './Animations/Ruby';


interface Props {
    title: string;
    titleNo: string;
}

const SectionTitle = ({ titleNo, title }: Props) => {
  
  return (
    <div className='flex flex-row'>
      <h2 className='w-full font-titleFont text-2xl font-semibold flex items-center hover:text-pink-200'>
          <span className='text-base md:text-lg text-textGreen mr-2'>{titleNo}</span> 
          {title}
          <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6'>
          </span>
      </h2>

      <div className='w-full'>
        <Ruby />
      </div>

    </div>
    
  )
}

export default SectionTitle