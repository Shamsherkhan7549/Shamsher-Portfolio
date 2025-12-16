import React, { useEffect, useState } from 'react'
import Project from '../../components/Project'
import ComputerIcon from '@mui/icons-material/Computer';
import AddBoxIcon from '@mui/icons-material/AddBox';
import * as motion from "motion/react-client";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const url = import.meta.env.VITE_BACKEND_URL;

const ProjectPage = () => {
  const navigate = useNavigate();
  const [projects , setProjects] = useState([]);

  const getAllProjects = async() => {
    try {
      const res = await axios.get(`${url}/projects`);      
      if(res.data.success){
        setProjects(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
      
    }
  }

  useEffect(()=>{
    getAllProjects()
  },[]);

  return (
    <div className='px-30 py-10'>

      <div className='flex items-center justify-center gap-2 mb-5'>
        <ComputerIcon fontSize='large' />
        <h1 className='text-4xl font-bold text-center' >Project <span className='text-yellow-400'>Made</span></h1>
      </div>

      {
        projects ? (
          projects.map(project=>(
            <Project key={project._id} project={project.project} link={project.link} description={project.description} image={project.image} />
          ))
        ):
        (
          <p>Loading...</p>
        )
      }

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="bg-purple-300 h-60 w-60 cursor-pointer rounded relative overflow-y-hidden mt-8"
      >

        <div className='bg-stone-100 h-50 w-60 absolute mt-49 hover:mt-10 duration-300 ease-in-out'>
          <h2 className='text-xl text-white p-2 bg-orange-500 font-bold rounded'>Add Projects</h2>
          <p className='text-4xl flex items-center justify-center h-40' onClick={()=> navigate("/add-projects")}> <AddBoxIcon fontSize='large'/> </p>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectPage