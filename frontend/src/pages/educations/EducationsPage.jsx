import React from 'react'
import Education from '../../components/Education'
import SchoolIcon from '@mui/icons-material/School';
const EducationsPage = () => {
  return (
    <div className=' text-center  px-50 py-20'>
      <h1 className='sm:text-4xl text-2xl font-bold flex items-center justify-center gap-3'>
        <SchoolIcon fontSize='inherit'/>
        My <span className='text-purple-500'>Education</span>
      </h1>
      <p className='font-semibold my-5'>Education is not the learning of facts, but the training of the mind to think.</p>

      <Education/>
    </div>
  )
}

export default EducationsPage