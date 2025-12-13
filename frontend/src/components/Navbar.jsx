import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  
  return (
    <div className=' bg-blue-50 py-2 flex justify-between items-center px-10'>

      <img className='w-12' src="/logo.svg" alt="logo" />

      <ul className='gap-6 hidden sm:flex'>
        <li className='cursor-pointer'> <Link to={'/'}> Home </Link> </li>
        <li className='cursor-pointer'> <Link to={'/about'}> About </Link> </li>
        <li className='cursor-pointer'> <Link to={'/projects'}> Projects </Link> </li>
        <li className='cursor-pointer'> <Link to={'/contact'}> Contact </Link> </li>
        <li className='cursor-pointer'> <Link to={'/skills'}> Skills </Link> </li>
      </ul>
       <p className='sm:hidden duration-150 ease-in-out'>
       { 
       isOpen?
        <CloseIcon onClick={() => setIsOpen(false)} className='cursor-pointer'/>:
        <MenuIcon onClick={() => setIsOpen(true)} className='cursor-pointer'/>
        }

      </p> 
      <ul className={`${isOpen ?"right-0":"right-[-140px]"} duration-200  delay-5 ease-in-out flex flex-col gap-3 sm:right-[-140px] bg-red-50 p-10 absolute top-16 `}>
        <li className='cursor-pointer'> <Link to={'/'}> Home </Link> </li>
        <li className='cursor-pointer'> <Link to={'/about'}> About </Link> </li>
        <li className='cursor-pointer'> <Link to={'/projects'}> Projects </Link> </li>
        <li className='cursor-pointer'> <Link to={'/contact'}> Contact </Link> </li>
        <li className='cursor-pointer'> <Link to={'/skills'}> Skills </Link> </li>
      </ul>
    </div>
  )
}

export default Navbar