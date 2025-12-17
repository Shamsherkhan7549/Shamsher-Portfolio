import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const location = useLocation();
  let path = "";
  if (location.pathname === '/') {
    path = "home"
  } else {
    path = location.pathname.slice(1)
  }

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(path);
  
  const handleActive = (nav) => {
    setActive(nav);
  }


  return (
    <div className=' bg-blue-50 py-2 flex justify-between items-center px-10 sticky top-0 z-100'>

      <img className='w-12' src="/logo.svg" alt="logo" />

      <ul className='gap-6 hidden sm:flex'>
        <li className={` ${active === "home" ? "text-blue-500 underline  underline-offset-6 decoration-2" : ""} cursor-pointer font-bold`} onClick={() => handleActive("home")}> <Link to={'/'}> Home </Link> </li>
        <li className={`${active === "about" ? "text-blue-500 underline  underline-offset-6 decoration-2" : ""} cursor-pointer font-bold`} onClick={() => handleActive("about")}> <Link to={'/about'}> About </Link> </li>
        <li className={`${active === "skills" ? "text-blue-500 underline  underline-offset-6 decoration-2" : ""} cursor-pointer font-bold`} onClick={() => handleActive("skills")}> <Link to={'/skills'}> Skills </Link> </li>
        <li className={`${active === "projects" ? "text-blue-500 underline  underline-offset-6 decoration-2" : ""} cursor-pointer font-bold`} onClick={() => handleActive("projects")}> <Link to={'/projects'}> Projects </Link> </li>
        <li className={`${active === "educations" ? "text-blue-500 underline  underline-offset-6 decoration-2" : ""} cursor-pointer font-bold`} onClick={() => handleActive("educations")}> <Link to={'/educations'}> Eductions </Link> </li>
        <li className={`${active === "contact" ? "text-blue-500 underline  underline-offset-6 decoration-2" : ""} cursor-pointer font-bold`} onClick={() => handleActive("contact")}> <Link to={'/contact'}> Contact </Link> </li>
      </ul>
      <p className='sm:hidden duration-150 ease-in-out'>
        {
          isOpen ?
            <CloseIcon onClick={() => setIsOpen(false)} className='cursor-pointer' /> :
            <MenuIcon onClick={() => setIsOpen(true)} className='cursor-pointer' />
        }

      </p>
      <ul className={`${isOpen ? "right-0" : "right-[-140px]"} duration-200  delay-5 ease-in-out flex flex-col gap-3 sm:right-[-140px] bg-red-50 p-10 absolute top-16 `}>
        <li className={` ${active === "home" ? "text-blue-500 underline  underline-offset-6 decoration-2" : ""} cursor-pointer font-bold`} onClick={() => handleActive("home")}> <Link to={'/'}> Home </Link> </li>
        <li className={` ${active === "about" ? "text-blue-500 underline  underline-offset-6 decoration-2" : ""} cursor-pointer font-bold`} onClick={() => handleActive("about")}> <Link to={'/about'}> About </Link> </li>
        <li className={` ${active === "skills" ? "text-blue-500 underline  underline-offset-6 decoration-2" : ""} cursor-pointer font-bold`} onClick={() => handleActive("skills")}> <Link to={'/skills'}> Skills </Link> </li>
        <li className={` ${active === "projects" ? "text-blue-500 underline  underline-offset-6 decoration-2" : ""} cursor-pointer font-bold`} onClick={() => handleActive("projects")}> <Link to={'/projects'}> Projects </Link> </li>
        <li className={` ${active === "contact" ? "text-blue-500 underline  underline-offset-6 decoration-2" : ""} cursor-pointer font-bold`} onClick={() => handleActive("contact")}> <Link to={'/contact'}> Contact </Link> </li>
      </ul>
    </div>
  )
}

export default Navbar