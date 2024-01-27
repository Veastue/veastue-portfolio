import React from 'react'
import { TbMap2, TbMail } from "react-icons/tb";

function Contact() {
  return (
    <section id='contact' className='bg-white max-w-4xl mx-auto flex justify-center items-center flex-col py-24'>
        <div className='flex flex-col items-center sm:items-start gap-2 px-5 w-full'>
            <h1 className='text-2xl font-black text-center sm:text-start'>Contact me!</h1>
            <p className='text-base text-gray-500 text-center lg:text-start font-mulish font-semibold max-w-[480px] lg:w-full'>Dont't be shy! hit me up!  📣</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-10 my-10  w-full px-10'>
            <div className='flex flex-col sm:flex-row items-center gap-3'>
                <TbMap2 className='w-14 h-14 p-3 shadow-md rounded-full text-blue-600'/>
                <div className='flex flex-col items-center sm:items-start'>
                    <h4>Location</h4>
                    <p className='text-sm text-gray-500 '>Cavite, Philippines 📍</p>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-3'>
                <TbMail className='w-14 h-14 p-3 shadow-md rounded-full text-blue-600'/>
                <div className='flex flex-col items-center sm:items-start'>
                    <h4>Email</h4>
                    <a href="mailto:your.email@example.com"><p className='text-sm hover:text-blue-600 delay-0 duration-200 text-gray-500 '>cantigaonduty@gmail.com</p></a>
                    
                </div>
            </div>
        </div>
        <form action="" className='flex flex-col items-center w-full px-4 gap-2'>
            <input type="text" placeholder='Name...' className='border rounded-lg p-3 w-full lg:max-w-4xl'/>
            <input type="email" placeholder='Email...' className='border rounded-lg p-3 w-full lg:max-w-4xl'/>
            <textarea name="message" placeholder='Message...' className='border rounded-lg p-3 w-full lg:max-w-4xl min-h-40'></textarea>
            <button type='button' className='px-4 py-2 border rounded-md bg-gray-200 hover:text-white hover:bg-black delay-0 duration-150 w-full sm:w-auto'>Submit</button>
        </form>
    </section>
  )
}

export default Contact