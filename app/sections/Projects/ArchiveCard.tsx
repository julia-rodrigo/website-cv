import React from 'react'
import { RxOpenInNewWindow } from "react-icons/rx"
import { FaRegFolder } from "react-icons/fa"

interface Props {
    title: string,
    des: string,
    tags: string[],
    link: string,
}

const ArchiveCard = ({ title, des, tags, link} : Props) => {
  return (
    <a href={link} target="_blank">
        <div className='w-full rounded-lg dark:bg-[#112240] p-7 flex flex-col gap-7 dark:hover:-translate-y-2 transition-transform duration-300 group dark:hover:bg-[#1a2b49] bg-[#eeeeee]/30 '>
            <div className='flex justify-between items-center'>
                <FaRegFolder className='text-4xl dark:text-textGreen text-bodyColor dark:group-hover:text-pink-200 ' />
                <RxOpenInNewWindow className='text-4xl dark:hover:text-yellow-200 text-bodyColor/40 dark:text-textLight hover:-translate-y-1 duration-300' />
            </div>
            <div>
                <h2
                    className='text-xl font-titleFont font-semibold tracking-wide underlineHover dark:group-hover:text-textGreen hover:-translate-y-1 duration-300 dark:text-textLight text-bodyColor'
                >
                    {title}
                </h2>
                <p className='text-sm mt-3 dark:group-hover:text-white text-bodyColor group-hover:md:text-[15px] group-hover:text-[14px] hoverParagraph dark:text-textLight'>
                    {des}
                </p>
                <ul className='text-xs mdl:text-sm text-textDark flex items-center gap-5 justify-between flex-wrap pt-5 '>
                    {tags.map((tag, i) => (
                        <li key={i} className='dark:hover:text-yellow-200 hover:-translate-y-1 duration-300 hoverParagraph'>{tag}</li>
                    ))}
                </ul>
            </div>
        </div>
    </a>
  )
}

export default ArchiveCard