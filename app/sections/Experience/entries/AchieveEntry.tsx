import React from 'react'
import { TiArrowForward } from 'react-icons/ti'
import { motion } from "framer-motion";

interface EntryProps {
    name: string,
    when: string,
    des: string
}

const AchieveEntry = ({ name, when, des } : EntryProps) => {
  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}

        className="w-full min-w-[300px]"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            {name}
        </h3>

        <p 
            className="text-sm mt-1 font-medium text-textGreen"
        >
            {when}
        </p>

        <p className="text-sm mt-7 text-textDark w-full flex flex-col lg:flex-row gap-16" >{des}</p>

    </motion.div>
    
  )
}

export default AchieveEntry