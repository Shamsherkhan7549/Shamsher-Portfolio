import React from 'react';
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Typewriter from "typewriter-effect";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import {Link} from "react-router-dom";

const Home = () => {
  const titles = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "MERN Stack Developer"]
  return (
    <div className='flex justify-between lg:flex-row flex-col-reverse items-center lg:pl-25 lg:pr-30 py-15'>
      <div className=' leading-17'>
        <h1 className='xl:text-5xl xl:leading-17 text-3xl leading-10 font-bold text-blue-950'>
          Hi There , <br />
          I'm Shamsher <span className='text-orange-400'>Khan</span>
        </h1>

        <div className="flex items-center  gap-1.5 w-70 md:w-100">
          <h2 className="text-lg md:text-2xl font-bold">
            I Am Into
          </h2>
          <Typewriter
            options={{
              strings: titles,
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 50,
              wrapperClassName: "text-violet-700 dark:text-violet-600 text-lg md:text-2xl font-medium",
              cursorClassName: "text-violet-700 dark:text-violet-600 text-lg md:text-2xl "
            }}
          />
        </div>



        <div className='flex gap-5 items-center'>
          <p className='bg-blue-950 text-cyan-300 hover:bg-cyan-300 hover:text-white cursor-pointer h-[50px] w-[50px] rounded-full flex items-center justify-center'> <Link to={"https://www.linkedin.com/in/shamsher-khan-883107301/"}> <LinkedInIcon/> </Link> </p>
          <p className='bg-blue-950 text-cyan-300 hover:bg-cyan-300 hover:text-white cursor-pointer h-[50px] w-[50px] rounded-full flex items-center justify-center'> <Link to={"https://github.com/Shamsherkhan7549"}> <GitHubIcon/> </Link> </p>
          <p className='bg-blue-950 text-cyan-300 hover:bg-cyan-300 hover:text-white cursor-pointer h-[50px] w-[50px] rounded-full flex items-center justify-center'> <Link to={"https://x.com/Shamsher7549"}> <XIcon/> </Link> </p>
          <p className='bg-blue-950 text-cyan-300 hover:bg-cyan-300 hover:text-white cursor-pointer h-[50px] w-[50px] rounded-full flex items-center justify-center'>
             <a href="/shamsher.resume.pdf"  download="Shamsher_Resume.png">
              <EditDocumentIcon/>
             </a>
          </p>
        </div>


      </div>

      <div className='container w-100'>
        <main className='flex justify-center align-center flex-1'>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img className='rounded-full w-60 md:w-80 lg:w-100 ' src="/portfolio.png" alt="shamsher_img" />

            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default Home