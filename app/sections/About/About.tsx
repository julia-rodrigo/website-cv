import SectionTitle from '@/app/components/SectionTitle'
import { me2, drawing } from '@/public/assets'
import Image from 'next/image'
import React from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'



import about_data from "../../../constants/informations/About"

const About = () => {
  return (
    <section
        id="about"
        className='max-w-containerSmall mx-auto py-10 flex flex-col gap-8'
    >
      <SectionTitle titleNo='01. ' title="About Me" />

      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
            <p className='hoverParagraph'>
                This is my fouth year programming, and I have touched on many programming languages throughout my years in University.
            </p>
            <p className='hoverParagraph'>
                In first year, I learnt <span className='text-textGreen'>Java</span> from fulfilling minor assignments. Later, I was exposed to 
                <span className='text-textGreen'> html and javascript</span>.
                I used <span className='text-textGreen'>React.js framework and Firebase Database</span> for making web applications for the next two years. 
            </p>
            <p className='hoverParagraph'>
                This year, I tried something new. I created a short <span className='text-textGreen'> 2.5D pixel RPG game on Godot</span>, 
                involving monster catching and character interaction, as part of my year-long project for university. 
                Now I moved back into web life, sharing you this CV made with <span className='text-textGreen'>typescript and using react-next-app</span> framework.
            </p>
            <p className='hoverParagraph'>
               Here are technologies I am familiar with:
            </p>
            <ul className='max-w-[420px] text-sm font-titleFont grid grid-cols-2 md:grid-cols-3 gap-2 mt-6'>
              {about_data.map(({ id, title, icon}) => (
                <li 
                  className='flex items-center gap-2 hoverParagraph'
                  key={id}
                >
                  <span 
                    className='text-textGreen'
                  >
                    {icon}
                  </span> 
                  {title}

                </li>
              ))}
            </ul>
        </div>
        <div className='w-full lgl:w-1/3 md:w-1/2 group'>
          <div className="w-full -left-6 -top-6 rounded-lg">
            <div className='relative w-full h-full lgl:h-full z-20 flex pl-10 lgl:pl-0 '>
              <Image 
                className='z-10 rounded-lg object-cover'
                src={me2}
                alt="profileImage"
              />
              <div className='absolute hidden lgl:inline-flex w-full h-full border-2 -right-4 -bottom-4 border-textGreen rounded-md group-hover:border-pink-200 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></div>

              <div className='absolute z-10 hidden lgl:inline-block w-full h-full bg-textLight/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'>
                <Image 
                    className='rounded-lg transition-opacity ease-in duration-500 opacity-100 group-hover:opacity-0'
                    src={drawing}
                    alt="profileImage"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About