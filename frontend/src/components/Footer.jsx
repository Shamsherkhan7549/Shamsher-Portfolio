import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex justify-between items-center text-center md:text-start md:flex-row flex-col gap-10 px-10 py-5 text-justify bg-blue-950 text-white '>
      <div className='w-80'>
        <h3 className='md:text-2xl text-xl font-bold'>Shamsher's Portfolio</h3>
        <p className='my-2 font-semibold'>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
        <p className='font-semibold'> Keep Rising 🚀. Connect with me via Contact!</p>
      </div>

      <div className='w-80'>
        <h3 className='md:text-2xl text-xl font-bold' >Quick Links</h3>
        <ul>
          <li className='my-2 font-semibold'> <PlayCircleIcon className='' fontSize='inherit' /> Home</li>
          <li className=' font-semibold'><PlayCircleIcon className='' fontSize='inherit' /> About</li>
          <li className='my-2 font-semibold'> <PlayCircleIcon className='' fontSize='inherit' /> Skills</li>
          <li className=' font-semibold'> <PlayCircleIcon className='' fontSize='inherit' /> Projects</li>
          <li className='my-2 font-semibold'> <PlayCircleIcon className='' fontSize='inherit' /> Education</li>
          <li className='font-semibold'> <PlayCircleIcon className='' fontSize='inherit' /> Contact</li>
        </ul>
      </div>
      <div className='w-80'>
        <h3 className='md:text-2xl text-xl font-bold' >Contact Info</h3>
        <p className='my-2 font-semibold'> <PhoneIcon fontSize='inherit' /> +91 XXX-XXX-XXXX</p>
        <p className='font-semibold'> <EmailIcon fontSize='inherit' /> shamsher.khan7515@gmail.com </p>
        <p className='my-2 font-semibold'> <LocationOnIcon /> Adarsh Nagar, Delhi</p>
        <div className='flex gap-5 items-center mt-5'>
          <p className='bg-blue-950 text-cyan-300 hover:bg-cyan-300 hover:text-white cursor-pointer h-[50px] w-[50px] rounded-full flex items-center justify-center'> <Link to={"https://www.linkedin.com/in/shamsher-khan-883107301/"}> <LinkedInIcon /> </Link> </p>
          <p className='bg-blue-950 text-cyan-300 hover:bg-cyan-300 hover:text-white cursor-pointer h-[50px] w-[50px] rounded-full flex items-center justify-center'> <Link to={"https://github.com/Shamsherkhan7549"}> <GitHubIcon /> </Link> </p>
          <p className='bg-blue-950 text-cyan-300 hover:bg-cyan-300 hover:text-white cursor-pointer h-[50px] w-[50px] rounded-full flex items-center justify-center'> <Link to={"https://x.com/Shamsher7549"}> <XIcon /> </Link> </p>
          <p className='bg-blue-950 text-cyan-300 hover:bg-cyan-300 hover:text-white cursor-pointer h-[50px] w-[50px] rounded-full flex items-center justify-center'>
            <a href="/shamsher.resume.pdf" download="Shamsher_Resume.png">
              <EditDocumentIcon />
            </a>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Footer