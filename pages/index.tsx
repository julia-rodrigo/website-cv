import LeftSide from '@/app/components/LeftSide'
import Navbar from '@/app/components/Navbar'
import RightSide from '@/app/components/RightSide'
import Head from 'next/head'

import { motion } from "framer-motion"
import Banner from '@/app/sections/Banner/Banner'
import About from '@/app/sections/About/About'
import Experience from '@/app/sections/Experience/Experience'
import Project from '@/app/sections/Projects/Project'
import Contact from '@/app/sections/Contact/Contact'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Julia Rodrigo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/canva-images/light_bulb.jpg" />
      </Head>
      <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60'>
        <Navbar />
        <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
          <motion.div
          
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}

            className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'
          >
            <LeftSide />
          </motion.div>
          <div className='h-[88vh] mx-auto p-4'>
            <Banner />
            <About />
            <Experience />
            <Project />
            <Contact />
            <Footer />

          </div>
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            
            className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  )
}
