import React, { useRef } from 'react'

import Link from 'next/link';

import { motion } from 'framer-motion';
import { MdOutlineClose } from "react-icons/md"
import { TbBrandGithub, TbMail } from 'react-icons/tb';
import { SlSocialLinkedin } from 'react-icons/sl';

interface menuProps {
    setShowMenu: any,
    handleScroll: React.MouseEventHandler<HTMLAnchorElement>
}

const Menu = ({ setShowMenu, handleScroll } : menuProps) => {
    const ref = useRef<string | any>("");

    const handleClick = (e:any) => {
        if(e.target.contains(ref.current)) {
            setShowMenu(false)
        }
    }

  return (
    <div
        ref={(node) => (ref.current = node)}
        onClick={handleClick}
        className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
    >
        <motion.div
            initial={{ x:20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative'
        >
            <MdOutlineClose 
                onClick={() => setShowMenu(false)}
                className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4'
            />
            <div className='flex flex-col items-center gap-7'>
                <ul className='flex text-base flex-col gap-7'>
                    <Link 
                        href="#home"
                        onClick={handleScroll} 
                        className='hover:text-textGreen duration-300 tracking-wide text-textLight font-medium nav-link'
                    >
                        <motion.li
                            initial={{ x: 20, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                        >
                            Home
                        </motion.li>
                    </Link>

                    <Link 
                        href="#about" 
                        onClick={handleScroll}
                        className='hover:text-textGreen duration-300 tracking-wide text-textLight font-medium nav-link'
                    >
                        <motion.li
                            initial={{ x: 20, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                        >
                        <span className='text-textGreen'>01.</span> About

                        </motion.li>
                    </Link>

                    <Link 
                        href="#resume" 
                        onClick={handleScroll} 
                        className='hover:text-textGreen duration-300 tracking-wide text-textLight font-medium nav-link'
                    >
                        <motion.li
                            initial={{ x: 20, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                        >
                        <span className='text-textGreen'>02.</span> Resume

                        </motion.li>
                    </Link>

                    <Link 
                        href="#projects" 
                        onClick={handleScroll} 
                        className='hover:text-textGreen duration-300 tracking-wide text-textLight font-sm nav-link'
                    >
                        <motion.li
                            initial={{ x: 20, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                        >
                        <span className='text-textGreen'>03.</span> Projects

                        </motion.li>
                    </Link>

                    <Link 
                        href="#contact" 
                        onClick={handleScroll} 
                        className='hover:text-textGreen duration-300 tracking-wide text-textLight font-medium nav-link'
                    >
                        <motion.li
                            initial={{ x: 20, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                        >
                        <span className='text-textGreen'>04.</span> Contact

                        </motion.li>
                    </Link>
                    <a href="/assets/resume/julia_resume.pdf" target="_blank" >
                        <motion.button
                            initial={{ y: -3, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.8 }}
                            className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 z-10'
                        >
                            Resume
                        </motion.button>
                    </a>
                </ul>
            </div>
            <div>
                <div className='inline-flex items-center justify-center w-full py-6 gap-4'>
                    <motion.div
                        initial={{ y: -3, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.9, ease: "easeIn" }}
                    >
                        <a href="https://github.com/julia-rodrigo" target="_blank">
                            <span className='iconLink'>
                                <TbBrandGithub />
                            </span>
                        </a>
                    </motion.div>
                    
                    <motion.div
                        initial={{ y: -3, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 1, ease: "easeIn" }}
                    >
                        <a href="https://www.linkedin.com/in/julia-rodrigo-644362221/" target="_blank">
                            <span className='iconLink'>
                                <SlSocialLinkedin />
                            </span>
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ y: -3, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 1.1, ease: "easeIn" }}
                    >
                        <a href="mailto:juliarodrigo2301@gmail.com" target="_blank">
                            <span className='iconLink'>
                                <TbMail />
                            </span>
                        </a>
                    </motion.div>
                </div>
                
            </div>
            <motion.a 
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className='text-sm tracking-widest w-72 text-textGreen text-center mt-4'
                href="mailto:juliarodrigo2301@gmail.com"
            >
                <p className='hover:text-pink-200'>
                    reactbd.proton.me
                </p>
            </motion.a>
        </motion.div>
    </div>
  )
}

export default Menu