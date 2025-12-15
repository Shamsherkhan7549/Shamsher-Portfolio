import React, { useEffect, useState } from 'react'
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import AddIcon from '@mui/icons-material/Add';
import TerminalIcon from '@mui/icons-material/Terminal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const url = import.meta.env.VITE_BACKEND_URL
const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState();

  const getAllSkills = async () => {
    try {
      const res = await axios.get(`${url}/api/skills`);
      console.log(res);
      
      if (res.data.success) {
        setSkills(res.data.data)
      }
    } catch (error) {
      console.log(" get skills error: ", error.message);
    }
  }

  useEffect(() => {
    getAllSkills();
  }, [])
  return (
    <div className='text-center py-20'>
      <h1 className='text-4xl font-bold flex justify-center items-center'>
        <TerminalIcon fontSize='inherit mr-4' />
        Skills & <span className='text-yellow-400 mx-2'>Abilities</span>
      </h1>

      <div className='py-10 px-30'>

        {
          skills ? (
            skills.map((skill) => (
              <main className='flex justify-center items-center bg-blue-950 w-30 h-30 gap-3 p-3 text-white rounded'>
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img className='rounded-full w-15 ' src={skill.image} alt="shamsher_img" />
                    <p className='text-2xl font-semibold'>{skill.skill}</p>
                  </motion.div>
                </AnimatePresence>
              </main>
            ))
          ) : (
            <p>loading....</p>
          )
        }

        <main onClick={() => (navigate("/add-skill"))} className='flex justify-center align-center bg-blue-950 text-white w-30 h-30 flex items-center gap-3 rounded cursor-pointer'>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AddIcon fontSize='large' />
              <p className='text-xl font-semibold'>Add Skills</p>
            </motion.div>
          </AnimatePresence>
        </main>



      </div>
    </div>
  )
}

export default Skills