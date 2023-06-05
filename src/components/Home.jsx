import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'
import profilePic from '../assets/profile_pic.png'
import profilePic2 from '../assets/profile_pic2.jpg'

const Home = () => {
  return (
    /* Home page */
    <div name='home' className='w-full h-screen bg-gradient-to-t from-gray-700 via-gray-900 to-black'>

      {/* Container */}
      <div className='max-w-screen-lg mx-auto px-8 flex flex-col md:flex-row items-center justify-center h-full'>
        <div className='flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Hi, I am David</h1>
            <h2 className=' font-bold text-white'>A passionate Junior Frontend Developer.</h2>
            <p className='text-white py-4 max-w-[44rem]'>I am Junior Frontend Developer teaching myself the wonders of frontend development in my free time.</p>

            <div>
              <Link
                to="about" 
                smooth
                duration={500}
              >
                <button 
                  className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white group py-2 px-4 flex items-center rounded  hover:scale-110 transition ease-in-out duration-300 cursor-pointer'
                >
                    View 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-2'/>
                    </span>
                </button>
              </Link>
            </div>
        </div>
        <div>
            <img src={profilePic} alt="my picture" className='rounded-2xl mx-auto w-2/3 md:w-4/5 place-self-end' />
        </div>
      </div>  
    </div>
  )
}

export default Home
