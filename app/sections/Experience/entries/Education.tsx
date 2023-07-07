import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import EducationResults from "./EducationResults";

interface educationProps {
    "id": number,
    "title": string,
    "where": string,
    "when": string,
    "year": YearProps[]
}

interface YearProps {
    "id": number,
    "title": string,
    "grade": GradeProps[]
}

interface GradeProps {
    id: number,
    name: string,
    marks: string
}

const Education = ({ id, title, where, when, year }: educationProps) => {

    console.log("in education")
    console.log(title)
    console.log(year)

    const [entry, setEntry ] = useState <Array <{ id: number, name: string, marks: string }> > ([])


    const handleResults = (grade : GradeProps[]) => {
        setEntry(grade)
    }

    useEffect(() => {
        handleResults(year[0]["grade"])
    }, [id])

  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}

        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont dark:text-textLight text-bodyColor">
            {title}
            <span
                className="dark:text-textGreen tracking-wide text-textPlant md:text-xl text-lg"
            >
                {where}
            </span>
        </h3>

        <p 
            className="text-sm mt-1 font-medium dark:text-textDark text-bodyColor dark:hover:text-white duration-300"
        >
            {when}
        </p>

        <div className='w-full mt-10 flex flex-col lg:flex-row gap-16'>
            <ul className='md:w-35 flex flex-row lg:flex-col'>

                {year.map(( results ) => (
                    <li className={`${results.grade == entry ? "dark:innerExperienceLi text-bodyColor selectedLi bg-opacity-40 experienceLi bg-red-100" : "innerExperienceLi unselectedInnerLi"} `} key={results.id} onClick={() => handleResults(results.grade)} >
                        {results.title}
                    </li>
                ))}
            </ul>

            {
                <EducationResults  
                    results={entry}
                />
            }

        </div>
    </motion.div>
  )
}

export default Education