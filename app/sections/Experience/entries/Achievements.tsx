import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import experience_data from "../../../../constants/informations/Experience"
import AchieveEntry from './AchieveEntry';

interface GoalProps {
  id: number,
  name: string,
  when: string,
  des: string,
}


const Achievements = () => {

  const [entry, setEntry ] = useState({
    id: -1,
    name: "",
    when: "",
    des: "",
  })

  const handleGoal = (goal : GoalProps) => {
      setEntry(goal);
  }
  useEffect(() => {
    setEntry(experience_data["achievements"][0]);
  }, [])

  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}

        className="w-full"
    >
      <div className='w-full flex flex-col lg:flex-row gap-16'>
          <ul className='md:min-w-[290px] flex flex-col'>
              {experience_data["achievements"].map(( goal ) => (
                  <li className={`${goal.id == entry.id ? "dark:border-l-pink-200 dark:text-pink-200 text-bodyColor selectedLi bg-opacity-40 experienceLi bg-red-100" : "experienceLi"} `} key={goal.id} onClick={() => handleGoal(goal)} >
                      {goal.name}
                  </li>
              ))}
          </ul>

          {
              <AchieveEntry  
                  name={entry.name}
                  when={entry.when}
                  des={entry.des}
              />
          }

      </div>
    </motion.div>
  )
}

export default Achievements