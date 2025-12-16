import React from 'react'
import * as motion from "motion/react-client";

const Project = ({project,link, description,image}) => {
    
  return (
     <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ backgroundImage: `url(${image})` }}
           className={`bg-cover bg-center h-60 w-60 cursor-pointer rounded relative overflow-y-hidden`}
        >
          
          <div className='bg-stone-100 h-50 w-60 absolute mt-49 hover:mt-10 duration-300 ease-in-out  '>
            <h2 className='text-xl text-white p-2 bg-orange-500 font-bold rounded'>{project}</h2>
            <p className='text-sm p-2'>{description.slice(0,100)}..</p>
          <motion.a href={link} className='bg-cyan-500 text-white font-sm px-2 py-1 ml-3 rounded cursor-pointer'>View</motion.a>

          </div>

        </motion.div>
  )
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
    // bg-[url(/express.png)] bg-contain bg-center
}

export default Project