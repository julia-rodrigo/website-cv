import SectionTitle from '@/app/components/SectionTitle'
import React, { useState } from 'react'
import ProjectCard from './ProjectCard';

import project_data from "../../../constants/informations/ProjectData"
import archive_data from '@/constants/informations/ArchiveData';
import ArchiveCard from './ArchiveCard';

import { motion } from 'framer-motion'
import StarField from '@/app/components/background/StarField';
import StarJumps from '@/app/components/background/StarJumps';


const Project = () => {
  const [ showMore, setShowMore ] = useState(false);
  return (
    <section
        id="projects"
        className='relative max-w-contentContainer mx-auto md:px-20 py-24 sm:px-10'
    >
      <div className='dark:hidden inline-block absolute w-full h-screen -z-10'>
          <StarField />
          <StarJumps />
      </div>

      <SectionTitle titleNo='03. ' title="Projects" />
        <div className='w-full flex flex-col items-center justify-center mt-10 gap-5 '>
          {project_data.map((project, i) => (
            <div className='pb-10' key={i}>
              <ProjectCard 
                  title = {project.title}
                  des = {project.des}
                  image_path = {project.image_path}
                  git_link = {project.git_link}
                  web_link = {project.web_link}
                  tags = {project.tags}
                  video_link = {project.video_link}
              />
            </div>
          ))}
        </div>

        <div className='dark:hidden inline-block absolute w-full h-screen -z-10'>
            <StarJumps />
        </div>

        {
            showMore && (
                <div className='relative mx-auto pt-20 md:pt-24'>

                  <div className='dark:hidden inline-block absolute w-full h-screen -z-10'>
                    <StarJumps />
                    <StarField />
                  </div>

                    <div className='w-full flex flex-col items-center'>
                        <h2 className='text-3xl font-titleFont font-semibold dark:hover:text-white dark:text-textLight text-bodyColor'>Other Projects</h2>
                        <p className='text-sm font-titleFont dark:text-textGreen underlineHover text-bodyColor'>view the archive</p>
                    </div>
                    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                        {archive_data.map((archive, i) => (
                        <motion.div
                          initial = {{ opacity: 0}}
                          whileInView={{ opacity: 1}}
                          transition={{ delay: ((i+1)/100)}}
                          key={i}
                        >
                            <ArchiveCard 
                              title = {archive.title}
                              des = {archive.des}
                              tags = {archive.tags}
                              link = {archive.git_link}
                            />
                        </motion.div>
                    ))}
                    </div>
                </div>
            )
        }

        <div className='relative mt-20 flex items-center justify-center'>
            <div className='dark:hidden inline-block absolute w-full h-screen -z-10'>
                <StarField />
            </div>

            <button
                onClick={() => showMore ? setShowMore(false) : setShowMore(true)}
                className='w-36 h-12 rounded-md buttonStyle text-[13px]'
            >{showMore ? "Show Less" : "Show More"}</button>
        </div>
    </section>
  )
}

export default Project