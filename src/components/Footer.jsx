import React from 'react'
import { TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";

const Footer = () => {
    return (
        <footer className='w-full mx-auto h-48  bg-gray-800 flex justify-center'>
            <div className="max-w-4xl py-5 px-10 text-center flex justify-center gap-10 items-center h-full flex-col md:flex-row md:justify-between">
                <p className="text-lg text-white mt-2 font-bold">
                    &copy; {new Date().getFullYear()} Veastue. All rights reserved.
                </p>
                <div className='flex items-center text-center gap-6'>
                    <TbBrandLinkedin className='text-4xl text-white cursor-pointer hover:scale-125 '/>
                    <TbBrandGithub className='text-4xl text-white cursor-pointer hover:scale-125'/>
                </div>
            </div>
        </footer>
    )
}

export default Footer