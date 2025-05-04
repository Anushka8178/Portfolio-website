import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-col gap-10'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I know</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I've worked with a range of technologies in the web development world.
          From Back-end To Design
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className='w-full sm:w-[250px] min-w-[250px]'
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
              <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className='w-16 h-16 object-contain'
                />
                <h3 className='text-white text-[20px] font-bold text-center'>
                  {technology.name}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')