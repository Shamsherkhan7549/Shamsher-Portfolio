import React, { useState } from 'react'
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;
const Contact = () => {

  const [contactInfo, setContactInfo] = useState({});
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleContactInfo = (e) => {
    setContactInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(contactInfo);
      const res = await axios.post(`${url}/email`, contactInfo);

      if (res.success) {
        console.log(res.data.message);
        setIsMessageSent(true)
      } else {
        console.log(res.data.message);
      }

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
        <AnimatePresence mode="wait ">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
           


            <form onSubmit={handleSubmit} className='py-5 md:px-50 sm:px-30 px-10'>
              <h1 className='md:text-4xl text-3xl font-bold pb-5'>Get In <span className='text-purple-500'>Touch</span></h1>

              <div className='flex gap-2 items-center border border-gray-500 p-3 rounded '>
                <PersonIcon />
                <input onChange={handleContactInfo} name='name' type="text" placeholder='Name' className='outline-none leading-2 w-full bg-none  px-2 py-1 rounded' />
              </div>

              <div className='flex gap-2 items-center border border-gray-500 p-3 rounded my-3'>
                <EmailIcon />
                <input onChange={handleContactInfo} name='email' type="email" placeholder='Email' className='outline-none leading-2 w-full bg-none  px-2 py-1 rounded' />
              </div>

              <div className='flex gap-2 items-center border border-gray-500 p-3 rounded '>
                <PhoneIcon />
                <input onChange={handleContactInfo} name='phone' type="text" placeholder='Phone' className='outline-none leading-2 w-full px-2 py-1 rounded' />
              </div>

              <div className='flex gap-2 items-start border border-gray-500 p-3 rounded my-3'>
                <CommentIcon />
                <textarea onChange={handleContactInfo} name='message' type="text" placeholder='Message' className='outline-none leading-6 w-full resize-none' rows={6} />
              </div>
              {isMessageSent === true ? <p className='text-green-400 font-semibold py-2'>Message Sent</p> : <p className='text-red-400 font-semibold py-2 '>Wait a second for submission... </p>}
              <button className='bg-purple-500 text-white px-5 py-3 rounded font-semibold cursor-pointer'>
                Submit <SendIcon fontSize='small' />
              </button>

            </form>

          </motion.div>
        </AnimatePresence>

  )
}

export default Contact