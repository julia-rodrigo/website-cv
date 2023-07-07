import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import Link from 'next/link';

import { motion } from 'framer-motion';
import Menu from './Menu';
import Maya from './Animations/Maya';


function Navbar() {
    const [ showMenu, setShowMenu ] = useState(false);

    const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setShowMenu(false)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth"
        });

        // update the class name of the clicked linked
        const links = document.querySelectorAll(".nav-link")
        links.forEach((link) => {
            link.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
    }

    // #fffdef

  return (
    <div className="w-full dark:shadow-navbarShadow  h-20 lg:h-[12vh] sticky top-0 z-50 dark:bg-bodyColor  bg-bodyColorLight px-4 ">
        <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='w-full'
            >
                <Maya />
            </motion.div>
            <div className='hidden lg:inline-flex items-center gap-7 min-w-[560px]'>
                <ul className='flex flex-row text-[13px] gap-7'>
                    <Link 
                        href="#home"
                        onClick={handleScroll} 
                        className='navLink nav-link'
                    >
                        <motion.li
                            initial={{ y: -10, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.0 }}
                        >
                            Home
                        </motion.li>
                    </Link>

                    <Link 
                        href="#about" 
                        onClick={handleScroll}
                        className='navLink nav-link'
                    >
                        <motion.li
                            initial={{ y: -10, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.1 }}
                        >
                           <span className='text-textGreen'>01.</span> About

                        </motion.li>
                    </Link>

                    <Link 
                        href="#resume" 
                        onClick={handleScroll} 
                        className='navLink nav-link'
                    >
                        <motion.li
                            initial={{ y: -10, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.2 }}
                        >
                           <span className='text-textGreen'>02.</span> Resume

                        </motion.li>
                    </Link>

                    <Link 
                        href="#projects" 
                        onClick={handleScroll} 
                        className='navLink nav-link'
                    >
                        <motion.li
                            initial={{ y: -10, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.3 }}
                        >
                           <span className='text-textGreen'>03.</span> Projects

                        </motion.li>
                    </Link>

                    <Link 
                        href="#contact" 
                        onClick={handleScroll} 
                        className='navLink nav-link'
                    >
                        <motion.li
                            initial={{ y: -10, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.4 }}
                        >
                           <span className='text-textGreen'>04.</span> Contact

                        </motion.li>
                    </Link>
                    <a href="/assets/resume/julia_resume.pdf" target="_blank" >
                        <motion.button
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 z-10'
                        >
                            Resume
                        </motion.button>
                    </a>
                </ul>
                
            </div>
            {/* icon section */}
            <div 
                onClick={() => setShowMenu(true)}
                className='w-6 h-5 flex flex-col justify-between items-center lg:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group z-30'
            >
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
            </div>
            {
                showMenu && (
                    <Menu setShowMenu={setShowMenu} handleScroll={handleScroll}/>
                )
            }
        </div>
    </div>
  )
}

export default Navbar