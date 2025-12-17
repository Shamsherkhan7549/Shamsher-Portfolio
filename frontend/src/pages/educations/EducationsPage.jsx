import React from 'react'
import Education from '../../components/Education'
import SchoolIcon from '@mui/icons-material/School';
const EducationsPage = () => {
  return (
    <div className=' text-center  xl:px-50 lg:px-30  md:px-20  px-10 py-20'>
      <h1 className='sm:text-4xl text-2xl font-bold flex items-center justify-center gap-3'>
        <SchoolIcon fontSize='inherit'/>
        My <span className='text-purple-500'>Education</span>
      </h1>
      <p className='font-semibold my-5'>Education is not the learning of facts, but the training of the mind to think.</p>

      <Education image={"/collegeImage.gif"} degree={"Bachelor Engineering in Computer Scieince"} college={"RKDF College of Technology and Research"} board={"RKDF"} batch={"2021-2025"} status={"Completed"} />
      <Education image={"/apnaCollege.png"} degree={"Mern Stack Web Developement"} college={"Apna College"} board={"Online"} batch={"2023-2024"} status={"Completed"} />
    </div>
  )
}

export default EducationsPage