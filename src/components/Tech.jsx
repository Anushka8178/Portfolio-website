import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const Tech = () => {
  return (
    <div className='flex flex-col gap-10'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I know</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        <motion.div
          variants={fadeIn('right', 'spring', 0.5, 0.75)}
          className='w-full sm:w-[250px] min-w-[250px]'
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
                alt='javascript'
                className='w-16 h-16 object-contain'
              />
              <h3 className='text-white text-[20px] font-bold text-center'>
                JavaScript
              </h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'spring', 0.5, 0.75)}
          className='w-full sm:w-[250px] min-w-[250px]'
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
                alt='react'
                className='w-16 h-16 object-contain'
              />
              <h3 className='text-white text-[20px] font-bold text-center'>
                React
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')