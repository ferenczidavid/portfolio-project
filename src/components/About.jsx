import React from 'react'
import stockPhoto from '../assets/about_stock.png'

const About = () => {
  return (
    /* About page */
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black'>

        {/* Container */}
      <div className='w-full flex flex-col items-center justify-center h-full'>
        <div className='max-w-[62.5rem] w-full md:grid grid-cols-2 gap-8 text-white'>
            <div className='pb-8 pl-4'>
                <h1 className='text-4xl sm:text-7xl font-bold border-b-4 border-gray-500 p-2 inline'>About</h1>
            </div>
            <div>
            </div>
            <div className='max-w-[62.5rem] items-center w-full grid gap-8 pb-8 pl-4'>
                <div className=''>
                    <p>
                        Hi I am David. I graduated at ELTE with a Computer Scientist degree. I am an aspiring self taught Junior Frontend Developer with entry-level experience.<br/>
                        Currently giving it my all to gain solid industrial experience and knowledge. I'm thrilled about opportunities and challenges that allow me to utilize my proficiency with logical thinking and leverage my existing learnings in Computer Science.
                    </p>
                </div>
            </div>
            <div className='p-10'>
                <img src={stockPhoto} alt="stock_photo" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
