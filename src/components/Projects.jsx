import React from 'react'
import tictactoe from '../assets/tictactoe.png'

const Projects = () => {

  const projects = [
    {
      id:1,
      src: tictactoe
    }
  ]

  return (
    <div name='projects' className='w-full bg-gradient-to-b from-gray-700 via-gray-900 to-black md:h-screen'>
      {/* Container */}
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='pb-8'>
        <h1 className='text-4xl sm:text-7xl font-bold border-b-4 border-gray-500 p-2 inline'>My Projects</h1>
            <p className='py-6'>Here are a few of my projects.</p>
        </div>

        {
          projects.map(({id,src}) => (
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
              <div className='shadow-md shadow-white rounded-lg'>
                <img key={id} src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center space-x-4'>
                  <a href="https://github.com/ferenczidavid/tictactoe" target='_blank' rel='noopener noreferrer' >
                    <button className='bg-slate-800 border border-gray-500 rounded-lg w-28 px-4 py-3 m-2 duration-200 hover:scale-105'>&lt;Code/&gt;</button>
                  </a>
                  <a href="https://jazzy-griffin-17f300.netlify.app" target='_blank' rel='noopener noreferrer' >
                    <button className='bg-slate-800 border border-gray-500 rounded-lg w-28 px-4 py-3 m-2 duration-200 hover:scale-105'>&lt;Demo/&gt;</button>
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
