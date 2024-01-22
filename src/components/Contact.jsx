import React from 'react'
import { TbMap2, TbMail } from "react-icons/tb";

function Contact() {
  return (
    <section className='bg-white w-full mx-auto flex justify-center items-center'>
        <div className='py-10 flex flex-col md:justify-between gap-10 min-w-7xl px-12'>
        <div className='flex flex-col  text-center xl:text-start justify-start py-7 md:py-0 gap-3'>
                    <h3 className='font-black text-2xl uppercase'>Contact me!</h3>
                    <p className='text-xl'>Don't be shy! Hit me up! 📣</p>
                </div>
            <div className='flex flex-col xl:flex-row gap-10'>
                
                <div className='flex flex-col md:flex-row gap-5 px-10 text-center items-center justify-center md:justify-start md:text-start md:items-start'>
                    <div className='flex justify-center items-center w-16 h-16 shadow-2xl rounded-full'>
                        <TbMap2 className='text-4xl text-blue-500 '/>
                    </div>
                    <div className='flex flex-col text-center items-center justify-center md:justify-start md:text-start md:items-start'>
                        <h3 className='font-black text-xl'>Location</h3>
                        <p className='text-base text-slate-500 min-w-[150px]'>Cavite, Philippines</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-5 px-10 text-center items-center justify-center md:justify-start md:text-start md:items-start'>
                    <div className='flex justify-center items-center w-16 h-16 shadow-2xl rounded-full'>
                        <TbMail className='text-4xl text-blue-500 '/>
                        
                    </div>
                    <div className='flex flex-col text-center items-center justify-center md:justify-start md:text-start md:items-start'>
                        <h3 className='font-black text-xl'>Email</h3>
                        <p className='text-base text-slate-500 hover:text-blue-500 transition-none hover:transition-none'>cantigaonduty@gmail.com</p>
                    </div>
                </div>
            </div>
            <form action="submit" className='flex flex-col gap-3 w-full items-center justify-center'>
                <input type="text" placeholder='Fullname...' className='border-2 rounded-lg p-2 min-w-[400px] '/>
                <input type="email" placeholder='Email...' className='border-2 rounded-lg p-2 min-w-[400px] '/>
                <textarea name="" id="" cols="40" rows="3" placeholder='Message....' className='border-2 rounded-lg p-2 min-w-[400px] '/>
                <button type='submit' className='shadow-md px-6 py-2 rounded-lg hover:text-white hover:bg-black duration-200 '>
                    submit
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact