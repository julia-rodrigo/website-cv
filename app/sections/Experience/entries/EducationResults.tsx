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
    // console.log("in here educationResults:")

    // console.log(results)
  return (
    <div className='w-full lgl:w-2/3 pr-7 lg:pr-0 text-base text-textDark font-medium flex flex-col gap-4'>
        <ul className='max-w-[420px] text-sm font-titleFont grid grid-cols gap-2'>
            {results["results"].map(({ id, name, marks}: Results) => (
            <li 
                className='flex justify-between gap-2'
                key={id}
            >
                <div className='flex items-center gap-2'>
                    <span 
                    className='text-textGreen'
                    >
                    {<TiArrowForward />}
                    </span> 
                    {name}
                </div>
                <div className='text-pink-200'>
                    {marks}
                </div>

            </li>
            ))}
        </ul>
    </div>
  )
}

export default EducationResults