import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const url = import.meta.env.VITE_BACKEND_URL;

const AddProjects = () => {

    const [project, setProject] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");  
    const [isImgUploaded, setIsImgUploaded] = useState(false)  
    const navigate = useNavigate();

    const handleProject = (e) => {
        setProject(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
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
        console.log("add project error: " , error.message); 
      }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            if(!imageUrl) return console.log("wait to upload image");
            const res = await axios.post(`${url}/api/projects`, {project,description, image:imageUrl});
           
            if(res.data.success){
                console.log(res.data.message);
                setImageUrl("");
                setProject("");
                setDescription("");
                navigate("/projects")
            }
        } catch (error) {
            console.log("submit error: ", error.message);
            
        }
    }

    return (

        <form onSubmit={handleSubmit} className=' pt-10 flex flex-col justify-center items-center'>
            <h1 className='text-start sm:w-100 w-60 my-4 sm:text-2xl text-xl font-bold'>Add Projects</h1>
            <div className='flex flex-col justify-center sm:w-100 w-60'>
                <label className='mb-3' htmlFor="project">Write Project Name</label>
                <input onChange={handleProject} value={project} className='sm:w-80 w-60 border-grey-50 border px-4 py-2 rounded' name='project' id='project' type="text" placeholder='Write Project Name' />
            </div>

             <div className='flex flex-col justify-center sm:w-100 w-60 my-5'>
                <label className='mb-3' htmlFor="description">Write Project Desciption</label>
                <textarea onChange={handleDescription} value={description} className='sm:w-80 w-60 h-30 sm:h-20 border-grey-50 border px-4 py-2 rounded resize-none' name='description' id='description' type="text" placeholder='Write Project Description' />
            </div>

            <div className='flex flex-col justify-center sm:w-100 w-60 mb-5'>
                <label className='mb-3' htmlFor="img">Upload Project Image</label>
                <input onChange={handleImg} className='sm:w-80 w-60  border-grey-50 border px-4 py-2 rounded cursor-pointer' name='img' id="img" type="file" placeholder='' />
                {isImgUploaded? <p className='text-green-400 font-semibold'>Image Uploaded</p> : <p className='text-red-400 font-semibold'>Wait.. to upload Image</p> }
                <button className='bg-blue-700 text-white sm:py-2 py-1 sm:px-5 px-3 rounded w-30 my-4 cursor-pointer'>Save</button>
            </div>
        </form>
    )

}

export default AddProjects