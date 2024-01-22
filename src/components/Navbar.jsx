import React, { useState } from 'react'
import { TbMenuDeep, TbX  } from "react-icons/tb";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const OpenSidebar = () => {
        setIsOpen(!isOpen)
    }
    console.log(isOpen)
    
  return (
    <nav className='fixed w-full shadow-md z-10 backdrop-blur'>
        <div className='flex max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className="flex relative h-[80px] items-center w-full justify-between ">
                {/* container for logo */}
                <div className='flex font-bold text-xl ml-3 cursor-pointer'>
                    <h3>Veastue.dev</h3>
                </div>
                {/* container for navs and gs bttn */}
                <div className='flex items-center mr-2'>
                    {/* navigation links */}
                    <div className="flex justify-between items-center ">
                        <ul className='gap-4 items-center mx-6 hidden sm:flex'>
                            <li className='hover:bg-black hover:text-white rounded-full px-3 py-1 font-semibold cursor-pointer delay-0 duration-200'>Home</li>
                            <li className='hover:bg-black hover:text-white rounded-full px-3 py-1 font-semibold cursor-pointer delay-0 duration-200'>About</li>
                            <li className='hover:bg-black hover:text-white rounded-full px-3 py-1 font-semibold cursor-pointer delay-0 duration-200'>Projects</li>
                            <li className='hover:bg-black hover:text-white rounded-full px-3 py-1 font-semibold cursor-pointer delay-0 duration-200'>Contacts</li>
                        </ul>
                        <div className="sm:hidden relative z-50">
                            <TbMenuDeep onClick={OpenSidebar} className='w-10 h-10 ml-10 cursor-pointer transition-none hover:text-sky-700 delay-0 duration-0'/>
                            <div className={`fixed top-0 left-0 h-screen w-full z-10 backdrop-blur bg-white bg-opacity-70 shadow-md transform transition-transform duration-300 delay-200 ${isOpen ? 'translate-x-0' : '-translate-x-[1000px]'}`}>
                                <div className='absolute top-5 right-2 z-20 cursor-pointer '>
                                    <TbX onClick={OpenSidebar}  className='w-10 h-10 hover:text-sky-700 transition-none delay-0 duration-0'/>
                                </div>
                                <ul className='backdrop-blur fixed top-0 left-0 h-full w-screen z-10 shadow-md flex flex-col items-center justify-center gap-10'>
                                    <li className='text-2xl cursor-pointer text-center'>Home</li>
                                    <li className='text-2xl cursor-pointer'>About</li>
                                    <li className='text-2xl cursor-pointer'>Projects</li>
                                    <li className='text-2xl cursor-pointer'>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar