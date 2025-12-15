import React, { useState } from 'react'
import axios from 'axios';


const url = import.meta.env.VITE_BACKEND_URL;

const AddSkills = () => {

    const [skill, setSkill] = useState("");
    const [imageUrl, setImageUrl] = useState("");  
    const [isImgUploaded, setIsImgUploaded] = useState(false)  

    const handleSkill = (e) => {
        setSkill(e.target.value)
    }

    const handleImg = async(e) => {
      try {
        const file = e.target.files[0];
      if(!file) return console.log("image not exist");
      const formData = new FormData();
        formData.append("image", file);

        const res = await axios.post(`${url}/api/upload`,formData)
        if(res.data.success){
            setImageUrl(res.data.data);
            setIsImgUploaded(true)
        }
      } catch (error) {
        console.log("add skill error: " , error.message); 
      }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            if(!imageUrl) return console.log("wait to upload image");
            const res = await axios.post(`${url}/api/add-skill`, {skill, image:imageUrl});
           
            if(res.data.success){
                console.log(res.data.message);
                setImageUrl("");
                setSkill("");
            }
        } catch (error) {
            console.log("submit error: ", error.message);
            
        }
    }

    return (

        <form onSubmit={handleSubmit} className=' pt-20 flex flex-col justify-center items-center'>
            <h1 className='text-start w-100 my-4 text-2xl font-bold wave'>Add Skills</h1>
            <div className='flex flex-col justify-center w-100'>
                <label className='mb-3' htmlFor="skill">Write Skill Name</label>
                <input onChange={handleSkill} value={skill} className='w-80 border-grey-50 border px-4 py-2 rounded' name='skill' id='skill' type="text" placeholder='Write Skill Name' />
            </div>

            <div className='flex flex-col justify-center w-100 my-5'>
                <label className='mb-3' htmlFor="img">Upload Emogi</label>
                <input onChange={handleImg} className='w-80 border-grey-50 border px-4 py-2 rounded cursor-pointer' name='img' id="img" type="file" placeholder='' />
                {isImgUploaded? <p className='text-green-400 font-semibold'>Image Uploaded</p> : <p className='text-red-400 font-semibold'>Wait.. to upload Image</p> }
                <button className='bg-blue-700 text-white py-2 px-5 rounded w-30 my-4 cursor-pointer'>Save</button>
            </div>
        </form>
    )

}

export default AddSkills