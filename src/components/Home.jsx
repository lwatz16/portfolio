import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return(
    <div name='home' className='w-full h-screen'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-pink-300 font-bold'>Hi, my name is</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Lauralyn Watson</h2>
        <h3 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a software engineer</h3>
        <p className='text-gray-200 py-4 max-w-[700px]'>I am a software engineer specialized in building inclusive and responsive web applications.</p>
        <div>
          <Link to='work' smooth={true} offset={50} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                < HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home;