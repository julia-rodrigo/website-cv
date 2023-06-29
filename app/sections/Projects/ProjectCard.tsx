import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { AiOutlineYoutube } from 'react-icons/ai'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { TbBrandGithub } from 'react-icons/tb'

interface projectData {
    "id": number,
    "title": string,
    "des": any,
    "image_path": StaticImageData,
    "git_link": string,
    "web_link": string,
    "tags": string[],
    "video_link": string
}

const ProjectCard = ({id, title, des, image_path, git_link, web_link, tags, video_link}: projectData) => {
  return (
    
        <div className='overflow-hidden flex flex-col mdl:flex-row gap-6'>
            {web_link? <a 
                className='sml:w-5/6 w-full xl:px-0 xl:w-1/2 h-auto relative group'
                href={web_link}
                target="_blank"
            >
                <div className='object-cover overflow-hidden rounded-lg'>
                    <Image 
                        className='w-full h-full object-contain group-hover:scale-110 duration-500'
                        src={image_path}
                        alt={"image_path"}
                    /> 
                </div>
            </a> : <div 
                className='sml:w-5/6 w-full xl:px-0 xl:w-1/2 h-auto realtive group'
            >
                <div className='object-cover overflow-hidden rounded-lg'>
                    <Image 
                        className='w-full h-full object-contain group-hover:scale-110 duration-500'
                        src={image_path}
                        alt={"image_path"}
                    /> 
                </div>
            </div>}
            <div className='w-full xl:w-1/2 flex flex-col gap-3 items-end xl:-ml-16 z-10 mdl:pt-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide hoverTitle'>
                    {title}
                </p>
                <h3 className='text-2xl font-bold'></h3>
                <div className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md hover:bg-[#1a2b49] hover:text-white'>
                    {des}
                </div>
                <ul className='text-xs md-text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark '>
                    {tags.map((tag) => (
                        <li key={id} className='hover:text-yellow-200' >{tag}</li>
                    ))}
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a 
                        className='hover:text-pink-200 hover:-translate-y-2 duration-300'
                        href={git_link}
                        target='_blank'
                    >
                        <TbBrandGithub />
                    </a>

                    {video_link ? <a 
                        className='hover:text-pink-200 hover:-translate-y-2 duration-300'
                        href={video_link}
                        target='_blank'
                    >
                        <AiOutlineYoutube />
                    </a> : <></>}

                    {web_link ? <a 
                        className='hover:text-pink-200 hover:-translate-y-2 duration-300'
                        href={web_link}
                        target='_blank'
                    >
                        <RxOpenInNewWindow />
                    </a> : <></>}
                </div>
            </div>
        </div>
        

  )
}

export default ProjectCard