import SectionTitle from '@/app/components/SectionTitle'
import React, { useState, useEffect } from 'react'

import Company from './entries/Company'
import Education from './entries/Education'
import Achievements from './entries/Achievements'

// id love to get in touch with you in the contacts
// make ruby my logo

// {experience_data["experience"].map(({ id, company, title, where, when, des }) => (

import experience_data from "../../../constants/informations/Experience"

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

        console.log(comp.name)
        
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

        // console.log("HERE IN EXPERIENCE")

        
        setEntry({
            "id": institute.id,
            "name": institute.name,
            "title": institute.title,
            "where": institute.where,
            "when": institute.when,
            "des": [ "" ],
            "year": institute.year,
        })

        // console.log(entry)


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
        className='max-w-containerSmall mx-auto py-10 lgl:py-24 px-4'
    >
        <SectionTitle title='Resume' titleNo='02'/>
        <div className='w-full mt-10 flex flex-col md:flex-row lg:flex-row gap-16'>
            <ul className='md:w-80 flex flex-col'>

                {experience_data["experience"].map(( comp ) => (
                    <li className={`${comp.name == entry.name ? "border-l-textGreen text-textGreen experienceLi" : "experienceLi"} `} key={comp.id} onClick={() => handleCompany(comp)} >
                        {comp.name}
                    </li>
                ))}

                {experience_data["education"].map((institute) => (
                    <li className={`${institute.name == entry.name ? "border-l-textGreen text-textGreen experienceLi" : "experienceLi"} `} key={institute.id} onClick={() => handleEducation(institute)} >
                        {institute.name}
                    </li>
                ))}

                <li className={`${"Achievements" == entry.name ? "border-l-textGreen text-textGreen experienceLi" : "experienceLi"} `} onClick={() => handleAchievements()} >
                    Achievements
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