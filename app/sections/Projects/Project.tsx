import SectionTitle from '@/app/components/SectionTitle'
import Image from 'next/image'
import React from 'react'
import { paper_hill, clock_bell, desk, jump } from "@/public/assets/index"

import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from 'react-icons/tb';
import { RxOpenInNewWindow } from "react-icons/rx"
import ProjectCard from './ProjectCard';

import project_data from "../../../constants/informations/ProjectData"


const Project = () => {
  return (
    <section
        id="about"
        className='max-w-contentContainer mx-auto md:px-20 py-24 sm:px-10'
    >
      <SectionTitle titleNo='03. ' title="Projects" />
        <div className='w-full flex flex-col items-center justify-center mt-10 gap-12'>
        {project_data.map((project) => (
        <ProjectCard 
            key = {project.id}
            id = {project.id}
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
    </section>
  )
}

export default Project