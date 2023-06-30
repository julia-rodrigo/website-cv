import React from 'react'

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from "framer-motion"

import banner_data from "../../../constants/informations/Banner"
import Deer from '@/app/components/Animations/Deer';

const LeftBanner = () => {

    const [text] = useTypewriter ({
        words: ["Full-Stack Developer.", "Backend Game Developer.", "Future Guitarist.", "Flexible Programmer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 30,
        delaySpeed: 2000
      });

  return (
    <div className='pt-10 flex flex-col gap-20'>
          <div className='flex flex-col gap-3'>
            <motion.h4 
                
                initial={{ y: 10, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}
                transition={{  duration: 0.5, delay: 0.6 }}

                className='text-lg font-titleFont tracking-wide dark:text-textGreen text-textDarker'

            >
                Hi, my name is
            </motion.h4>

           <div className='flex md:flex-row sm:flex-col sm:items-start items-center justify-start'>
            <motion.h1 
                  initial={{ y: 10, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }}
                  transition={{  duration: 0.5, delay: 0.7 }}

                  className="text-5xl font-bold dark:text-white text-textDarker lgl:text-6xl flex flex-col"
              >
                <span className='text-designColor capitalize'>Julia Rodrigo</span>
              </motion.h1>
              <Deer />
           </div>
            <motion.h2 
                initial={{ y: 10, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}
                transition={{  duration: 0.5, delay: 0.8 }}

                className='text-4xl font-bold dark:text-white text-textDarker'
            >
              a {}
              <span className='dark:text-textGreen dark:hover:text-yellow-200 duration-300 text-[#a3471d] hover:text-[#eeeeee]'>{text}</span>
              <Cursor
                cursorStyle="|"
                cursorColor='pink'
              />
            </motion.h2>
            <motion.p 
            
                initial={{ y: 10, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}
                transition={{  duration: 0.5, delay: 0.9 }}

                className='text-base md:max-w-[650px] text-textLight font-medium tracking-wide hover:text-white'
            >
              I am a creative computer science student with 2 years experience in web development and 1 year experience in game development, 
              eager to improve my skills and building new projects with individuals (like you !).

            </motion.p>
          </div>
        <motion.div
            
                initial={{ y: 10, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}
                transition={{  duration: 0.5, delay: 1 }}

            className='flex flex-col md:flex-row gap-6 lgl:gap-0 justify-between md:max-w-[650px]'
            
        >
            <div>
              <h2 className="text-base uppercase font-titleFont mb-4 hoverParagraph">
                Find me on
              </h2>
              <div className="flex gap-4">
                  {banner_data["find_me"].map(({id, icon}) => (
                    <span 
                      className='bannerIcon'
                      key={id}
                    >
                      {icon}
                    </span>
                  ))}
                  
              </div>
            </div>
            <div>
              <h2 className="text-base uppercase font-titleFont mb-4 hoverParagraph">
                BEST SKILL ON
              </h2>
              <div className="flex gap-4">
                  {banner_data["best_skill"].map(({id, icon}) => (
                    <span 
                      className='bannerIcon'
                      key={id}
                    >
                      {icon}
                    </span>
                  ))}
              </div>
            </div>
          </motion.div>
          
        </div>
  )
}

export default LeftBanner