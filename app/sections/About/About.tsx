import SectionTitle from '@/app/components/SectionTitle'
import { me2, drawing } from '@/public/assets'
import Image from 'next/image'
import React from 'react'
import about_data from "../../../constants/informations/About"
import StarJumps from '@/app/components/background/StarJumps'

const About = () => {
  return (
    <section
        id="about"
        className='relative max-w-containerSmall px-3 mdl:px-16 xl:px-0 mx-auto py-10 flex flex-col gap-8'
    >

      <div className='dark:hidden inline-block absolute w-full h-screen -z-10'>
        <StarJumps />
      </div>

      <SectionTitle titleNo='01. ' title="About Me" />

      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
            <p className='hoverParagraph'>
                Thoughout my college years, I’ve adventured deep into honing my skills in <span className='spanTag'>JavaScript</span> and <span className='spanTag'>Typescript</span>. 
                I've experimented with <span className='spanTag'>Java</span> and <span className='spanTag'>SQL</span>, and eventually developed an appetite for learning <span className='spanTag'>C++, C# and python</span>.
            </p>
            <p className='hoverParagraph'>
                Exploring various techniques and technologies, such as databases manipulation, <span className='spanTag'>React frameworks, Next.js, Node</span> and applications testing, 
                university has granted me the privilege of collaborating on projects with like-minded individuals 
                and pushing the boundaries of my knowledge. 
            </p>
            <p className='hoverParagraph'>
                Now, as I step into the professional world, I am eager to apply my knowledge and creativity into the real world 
                and make meaningful impacts with an inspiring, talented and enthusiastic team.
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
                    className='spanTag'
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
                className='z-10 rounded-lg object-cover hidden lgl:inline-flex'
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