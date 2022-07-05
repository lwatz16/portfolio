import React from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  return(
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-300'>
      <div>
        <img className='w-12' src={Logo} alt='logo image' />
      </div>

      {/* Nav menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div className='md:hidden z-10'>
        <FaBars />
      </div>

      {/* Mobile menu */}
      <ul className='absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center'>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* Social icons */}
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar;