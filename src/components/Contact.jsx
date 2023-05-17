import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-t from-gray-700 via-gray-900 to-black p-4 text-white'>
    {/* Container */}
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl sm:text-7xl font-bold inline border-b-4 border-gray-500 '>Contact</p>
                <p className='py-6'>Submit the form to get in touch!</p>
            </div>
            
            {/* Form component */}
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/13a04b81-6e5e-4188-b906-57476a4a2d45" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input 
                        type="text" 
                        name='name' 
                        placeholder='Enter your name' 
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />

                    <input 
                        type="text" 
                        name='email' 
                        placeholder='Enter your e-mail address' 
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4'
                    />

                    <textarea 
                        name="message" 
                        id="" 
                        rows="10" 
                        placeholder='Enter your message'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
                        
                    </textarea>
                   
                    <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white group px-4 py-2 my-8 mx-auto flex items-center rounded  hover:scale-110 transition ease-in-out duration-300'>
                        Get in touch
                    </button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
