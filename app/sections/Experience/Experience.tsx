import SectionTitle from '@/app/components/SectionTitle'
import React, { useState, useEffect } from 'react'

import Company from './entries/Company'
import Education from './entries/Education'
import Achievements from './entries/Achievements'

import experience_data from "../../../constants/informations/Experience"
import StarField from '@/app/components/background/StarField'

interface companyProps {
    "id": number,
    "name": string,
    "title": string,
    "where": string,
    "when": string,
    "des": string[],
}

interface educationProps {
    "id": number,
    "name": string,
    "title": string,
    "where": string,
    "when": string,
    "year": YearProps[],
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

const Experience = () => {

    const [ entry, setEntry ] = useState({
        "id": -1,
        "name": "",
        "title": "",
        "where": "",
        "when": "",
        "des": [ "" ],
        "year": [
            {
                "id": -1,
                "title": "",
                "grade": [
                    {
                        "id": -1,
                        "name":"", 
                        "marks": ""
                    }
                ]
            },
        ],
    });

    const [ company, setCompany ] = useState(true);
    const [ education, setEducation ] = useState(false);
    const [ achievements, setAchievements ] = useState(false);

    const turnOffAll = () => {
        setCompany(false);
        setEducation(false);
        setAchievements(false);
    }

    const handleCompany = ( comp: companyProps ) => {
        turnOffAll();
        setCompany(true);
        
        setEntry({
            "id": comp.id,
            "name": comp.name,
            "title": comp.title,
            "where": comp.where,
            "when": comp.when,
            "des": comp.des,
            "year": [],
        })
    }

    const handleEducation = ( institute: educationProps ) => {
        turnOffAll();
        setEducation(true);        
        setEntry({
            "id": institute.id,
            "name": institute.name,
            "title": institute.title,
            "where": institute.where,
            "when": institute.when,
            "des": [ "" ],
            "year": institute.year,
        })
    }

    const handleAchievements = () => {
        turnOffAll();
        setAchievements(true);

        console.log("achievment")

        setEntry({
            "id": -1,
            "name": "Achievements",
            "title": "",
            "where": "",
            "when": "",
            "des": [ "" ],
            "year": [],
        })
        
    }

    useEffect(() => {
        handleCompany(experience_data["experience"][0])
    }, [])
    
  return (
    <section
        id="resume"
        className='relative max-w-containerSmall mx-auto py-10 lgl:py-24 px-4'
    >
        <div className='dark:hidden inline-block absolute w-full h-screen -z-10'>
          <StarField />
        </div>
        <SectionTitle title='Resume' titleNo='02'/>
        <div className='w-full mt-10 flex flex-col md:flex-row lg:flex-row gap-16'>
            <ul className='md:w-80 flex flex-col '>

                {experience_data["experience"].map(( comp, i ) => (
                    <li className={`${comp.name == entry.name ? " dark:border-textGreen dark:text-textGreen text-bodyColor bg-opacity-40 selectedLi experienceLi bg-purple-100" : "experienceLi"} `} key={i} onClick={() => handleCompany(comp)} >
                        {comp.name}
                    </li>
                ))}

                {experience_data["education"].map((institute, i) => (
                    <li className={`${institute.name == entry.name ? " dark:border-textGreen dark:text-textGreen text-bodyColor bg-opacity-40 selectedLi experienceLi bg-purple-100" : "experienceLi"} `} key={i} onClick={() => handleEducation(institute)} >
                        {institute.name}
                    </li>
                ))}

                <li className={`${"Achievements" == entry.name ? " dark:border-textGreen dark:text-textGreen text-bodyColor selectedLi bg-opacity-40 experienceLi bg-purple-100" : "experienceLi"} `} onClick={() => handleAchievements()} >
                    Others
                </li>
            </ul>

            {
                company && 

                <Company  
                    title={entry.title}
                    when={entry.when}
                    where={entry.where}
                    des={entry.des}
                />
            }

            {
                education && 

                <Education 
                    id={entry.id}   
                    title={entry.title}
                    when={entry.when}
                    where={entry.where}
                    year={entry.year}
                />
            }

            {
                achievements && 
                <Achievements  
                />
            }

        </div>
    </section>
  )
}

export default Experience