import React from 'react'
import ArchiveCard from './ArchiveCard'

import archive_data from "../../../constants/informations/ArchiveData"


const Archive = () => {
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
        <div className='w-full flex flex-col items-center'>
            <h2 className='text-3xl font-titleFont font-semibold'>Other Projects</h2>
            <p className='text-sm font-titleFont text-textGreen'>view the archive</p>
        </div>
        <div className='grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
            {archive_data.map((archive, i) => (
                <ArchiveCard 
                    key={i}
                    title = {archive.title}
                    des = {archive.des}
                    tags = {archive.tags}
                    link = {archive.git_link}
                />
            ))}
        </div>
    </div>
  )
}

export default Archive