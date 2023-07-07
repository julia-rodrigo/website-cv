import React from 'react'
import { TiArrowForward } from "react-icons/ti";


interface ResultProps {
    results: Results[];
}

interface Results {
    id: number,
    name: string,
    marks: string
}

const EducationResults = (results: ResultProps) => {
  return (
    <div className='w-full lgl:w-2/3 pr-7 lg:pr-0 text-base dark:text-textDark text-bodyColor font-medium flex flex-col gap-4'>
        <ul className='max-w-[420px] text-sm font-titleFont grid grid-cols gap-2'>
            {results["results"].map(({ id, name, marks}: Results) => (
            <li 
                className='flex justify-between gap-2'
                key={id}
            >
                <div className='flex items-center gap-2'>
                    <span 
                    className='dark:text-textGreen text-textPlant md:text-lg text-md'
                    >
                    {<TiArrowForward />}
                    </span> 
                    {name}
                </div>
                <div className='dark:text-pink-200 hover:-translate-y-0.5 duration-300 text-textPlant dark:hover:font-medium hover:font-light'>
                    {marks}
                </div>

            </li>
            ))}
        </ul>
    </div>
  )
}

export default EducationResults