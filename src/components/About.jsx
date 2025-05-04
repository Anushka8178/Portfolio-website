import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'

const About = () => {
  return (
    <div className='flex flex-col gap-10'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        <motion.div
          variants={fadeIn('right', 'spring', 0.5, 0.75)}
          className='w-full sm:w-[250px] min-w-[250px]'
        >
          <div
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            style={{
              transformStyle: 'preserve-3d',
              transform: 'perspective(1000px)',
              transition: 'transform 0.2s ease-out',
              cursor: 'pointer',
              '&:hover': {
                transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
              },
            }}
          >
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
                alt='web-development'
                className='w-16 h-16 object-contain'
              />
              <h3 className='text-white text-[20px] font-bold text-center'>
                Web Development
              </h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'spring', 0.5, 0.75)}
          className='w-full sm:w-[250px] min-w-[250px]'
        >
          <div
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            style={{
              transformStyle: 'preserve-3d',
              transform: 'perspective(1000px)',
              transition: 'transform 0.2s ease-out',
              cursor: 'pointer',
              '&:hover': {
                transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
              },
            }}
          >
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
                alt='mobile-development'
                className='w-16 h-16 object-contain'
              />
              <h3 className='text-white text-[20px] font-bold text-center'>
                Mobile Development
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about')