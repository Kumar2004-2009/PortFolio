import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion";


const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()} className="mb-8">
        <p className={styles.sectionSubText}>Tech Stack</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="text-white text-[16px] mt-4 text-center">{technology.name}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")