import React from 'react'

const Education = () => {
  return (
    <div className='flex items-center gap-10 bg-white hover:shadow-md border border-gray-300 rounded'>
        <img className='w-60 rounded' src="/collegeImage.gif" alt="" />
        <div className='flex flex-col gap-3'>
            <h1 className='text-3xl font-bold text-blue-950'> degree name </h1>
            <p className='font-semibold text-medium' >college name | board </p>
            <h2 className='text-green-300 sm:text-xl text-lg font-semibold'>2021-2024 | status</h2>
        </div>
    </div>
  )
}

export default Education