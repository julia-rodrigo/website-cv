import SectionTitle from '@/app/components/SectionTitle'
import Image from 'next/image'
import React, { useState } from 'react'
import { paper_hill, clock_bell, desk, jump } from "@/public/assets/index"

import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from 'react-icons/tb';
import { RxOpenInNewWindow } from "react-icons/rx"
import ProjectCard from './ProjectCard';

import project_data from "../../../constants/informations/ProjectData"
import archive_data from '@/constants/informations/ArchiveData';
import ArchiveCard from './ArchiveCard';

import { motion } from 'framer-motion'


const Project = () => {
  const [ showMore, setShowMore ] = useState(false);

  return (
    <section
        id="projects"
        className='max-w-contentContainer mx-auto md:px-20 py-24 sm:px-10'
    >
      <SectionTitle titleNo='03. ' title="Projects" />
        <div className='w-full flex flex-col items-center justify-center mt-10 gap-12'>
        {project_data.map((project, i) => (
          <ProjectCard 
              key = {i}
              id = {i}
              title = {project.title}
              des = {project.des}
              image_path = {project.image_path}
              git_link = {project.git_link}
              web_link = {project.web_link}
              tags = {project.tags}
              video_link = {project.video_link}
          />
        ))}
        </div>

        {
            showMore && (
                <div className='mx-auto pt-20 md:pt-24'>
                    <div className='w-full flex flex-col items-center'>
                        <h2 className='text-3xl font-titleFont font-semibold hover:text-white'>Other Projects</h2>
                        <p className='text-sm font-titleFont text-textGreen'>view the archive</p>
                    </div>
                    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                        {archive_data.map((archive, i) => (
                        <motion.div
                          initial = {{ opacity: 0}}
                          whileInView={{ opacity: 1}}
                          transition={{ delay: ((i+1)/100)}}
                        >
                            <ArchiveCard 
                              key={i}
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

        <div className='mt-20 flex items-center justify-center'>
            <button
                onClick={() => showMore ? setShowMore(false) : setShowMore(true)}
                className='w-36 h-12 rounded-md text-textGreen text-[13]px border border-textGreen hover:bg-hoverColor duration-300'
            >{showMore ? "Show Less" : "Show More"}</button>
        </div>
    </section>
  )
}

export default Project