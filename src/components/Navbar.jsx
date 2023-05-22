import React from 'react'
import { useState } from 'react'
import { FaGithub, FaLinkedin,  } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-scroll'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'skills'
        },
        {
            id: 4,
            link: 'projects'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

  return (
    /* Navbar */
    <div className='fixed w-full h-[5rem] flex justify-between items-center px-4 bg-transparent text-white'>

        {/* Logo image */}
        <div>
            <img src={logo} alt='logo image' style={{width:'5rem'}} />
        </div>

        {/* Menu */}
        {/* List of links */}
        <ul className='hidden lg:flex'>
            {
                links.map(({id,link}) => (
                    <li key={id} className='capitalize hover:scale-110 transition ease-in-out duration-300 active:scale-90'>
                        <Link 
                            to={link} 
                            smooth 
                            duration={500}
                        >
                                {link}
                        </Link>
                    </li>
                ))
            }
        </ul>

        {/* Hamburger */}
        <div /* onClick={handleClick} */ className='lg:hidden z-10'>
            {/* {!nav ? <FaBars className='transform transition duration-700 hover:scale-125'/> : <FaTimes className='transform transition duration-700 hover:scale-125'/>} */}
            <Hamburger 
                toggled={nav} 
                toggle={handleClick}
                duration={.4}
                distance='sm'
                easing='ease-in'
                direction="right"
                rounded
                />
        </div>

        {/* Mobile menu */}
        {nav && (
        <ul className={'absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-gray-700 via-gray-900 to-black flex flex-col justify-center items-center'}>
            {
                links.map(({id,link}) => (
                    <li key={id} className='capitalize hover:scale-110 transition ease-in-out duration-300 active:scale-90 px-4 py-6 text-4xl'>
                        <Link 
                            to={link} 
                            smooth 
                            duration={500}
                            onClick={() => setNav(!nav)}
                        >
                                {link}
                        </Link>
                    </li>
                ))
            }
        </ul>)}
        

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[10rem] h-[3.75rem] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 rounded-lg'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/ferenczi-david/">LinkedIn <FaLinkedin size={30}/> </a>
                </li>
                <li className='w-[10rem] h-[3.75rem] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-lg'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="">GitHub <FaGithub size={30}/> </a>
                </li>
                <li className='w-[10rem] h-[3.75rem] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-fuchsia-400 rounded-lg'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="mailto">E-Mail <HiOutlineMail size={30}/> </a>
                </li>
                <li className='w-[10rem] h-[3.75rem] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-lg'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="./CVenglish.pdf" download={true}>Resume <BsFillPersonLinesFill size={30}/> </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar