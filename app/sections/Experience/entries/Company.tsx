import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

interface companyProps {
    "title": string,
    "where": string,
    "when": string,
    "des": string[],
}


const Company = ({ title, where, when, des }: companyProps) => {
  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}

        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            {title}
            <span
                className="text-textGreen tracking-wide"
            >
                {where}
            </span>
        </h3>

        <p 
            className="text-sm mt-1 font-medium text-textDark"
        >
            {when}
        </p>

        <ul className="mt-6 flex flex-col gap-3">
            {
                des.map((sentence: string) => (
                <li className="text-base flex gap-2 text-textDark" key={des.indexOf(sentence)}>
                    <span
                        className="text-textGreen mt-1"
                    >
                        <TiArrowForward />
                    </span>
                    {sentence}
                </li>
            ))}
        </ul>
    </motion.div>
  )
}

export default Company