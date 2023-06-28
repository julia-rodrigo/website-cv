import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

import experience_data from "../../../constants/informations/Experience"

const ReactBD = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}

        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Software Developer Intern
            <span
                className="text-textGreen tracking-wide"
            >
                @f5_NGINX
            </span>
        </h3>

        <p 
            className="text-sm mt-1 font-medium text-textDark"
        >
            Feb 2022 - August 2022
        </p>

        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span
                    className="text-textGreen mt-1"
                >
                    <TiArrowForward />
                </span>
                As an intern, I worked on various tasks and coding areas as my team wanted to give me as much experiences as they could.
                I worked on making an app from scratch, including the UI and backend. I worked on Form submissions, CRUD system and error handling. 
                I even worked on further brief projects that included SQL database, pagination and Docker environments. 
                I used Emerald components and custom react components for further styling.
                I was exposed testing frameworks such as Jest, RestClient on VScode, and Postman.
            </li>
        </ul>
    </motion.div>
  )
}

export default ReactBD