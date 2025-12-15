import React from 'react'

const AddSkills = () => {
    return (

        <form className=' pt-20 flex flex-col justify-center items-center'>
            <h1 className='text-start w-100 my-4 text-2xl font-bold wave'>Add Skills</h1>
            <div className='flex flex-col justify-center w-100'>
                <label className='mb-3' htmlFor="skill">Write Skill Name</label>
                <input className='w-80 border-grey-50 border px-4 py-2 rounded' name='skill' id='skill' type="text" placeholder='Write Skill Name' />
            </div>

            <div className='flex flex-col justify-center w-100 my-5'>
                <label className='mb-3' htmlFor="img">Upload Emogi</label>
                <input className='w-80 border-grey-50 border px-4 py-2 rounded' name='img' id="img" type="file" placeholder='' />

                <button className='bg-blue-700 text-white py-2 px-5 rounded w-30 my-4 cursor-pointer'>Save</button>
            </div>
        </form>
    )

}

export default AddSkills