import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

const About = () => {
  return (
    <AnimatePresence mode="wait ">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >


        <div className='md:py-15 md:px-50 px-5 py-5 font-semibold text-justify'>
          <h1 className='pb-7 sm:text-4xl text-2xl font-bold'>
            <PersonIcon className='mr-3' fontSize="inherit" />
            About <span className='text-purple-800'>Me</span>
          </h1>
          <h2 className='font-bold sm:text-3xl text-xl '>I'm Shamsher Khan</h2>
          <p className='font-bold sm:text-lg text-md pt-2'>Mern Stack Developer</p>

          <p className='py-5'>
            I am a Full-Stack developer based in Pune, India. I am an Information Technology undergraduate from SPPU. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.
          </p>

          <p><span className='text-blue-600'>Email : </span> shamsher.khan7515@gmail.com </p>
          <p className='pt-3'><span className='text-blue-600'>Place : </span> Adarsh Nagar, Delhi, 110033 </p>

          <button className='mt-8 py-4 px-8 cursor-pointer rounded text-lg bg-blue-800 text-white'> <a href="/shamsher.resume.pdf" download="Shamsher_Resume.png">Resume</a></button>

        </div>

      </motion.div>
    </AnimatePresence>
  )
}

export default About