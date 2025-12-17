import React from 'react'

const Education = ({image,degree,college,board,batch,status}) => {
  return (
    <div className='flex items-center flex-col sm:flex-row text-start gap-10 mb-4 bg-white hover:shadow-md border border-gray-300 rounded'>
        <img className='w-60 h-50  rounded' src={image} alt="institute-img" />
        <div className='flex flex-col sm:gap-3 gap-1 p-4'>
            <h1 className='xl:text-3xl lg:text-2xl sm:text-xl text-lg font-bold text-blue-950'> {degree} </h1>
            <p className='font-semibold text-medium' >{college} | {board} </p>
            <h2 className='text-green-300 lg:text-xl sm:text-lg  font-semibold'>{batch} | {status}</h2>
        </div>
    </div>
  )
}

export default Education