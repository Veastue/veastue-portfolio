import React from 'react'
import RotateComp from './RotateComp'

const About = () => {
  return (
    <section id='about' className=' max-w-7xl mx-auto flex flex-col justify-between items-center gap-[80px] lg:flex-row py-32'>
        <div className="flex flex-col sm:flex-row mx-2">
            <div className='relative w-full'>
                <div className='overflow-hidden max-h-[250px] max-w-[350px] sm:min-w-[400px] sm:max-h-[300px] lg:min-h-[450px] lg:min-w-[450px] rounded-[20px] flex justify-center items-center shadow-lg '>    
                    <img src="/me.jpg" alt="" className='bg-center h-auto max-w-full hover:scale-110 delay-0 duration-300 hover:cursor-pointer'/>
                </div>
                <div className="absolute right-[-4rem] bottom-[-5rem] hidden md:flex">
                    <RotateComp />
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center lg:items-start gap-8 px-5 w-full'>
            <h3 className="uppercase text-blue-600 font-extrabold text-lg">About me</h3>
            <h1 className='text-2xl font-black text-center max-w-[400px] lg:text-start lg:w-full'>Front-End Developer from Cavite, Philippines 📍</h1>
            <p className='text-base text-gray-500 text-center lg:text-start font-mulish font-semibold w-full'>Hey, my name is Bart, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</p>
            <p className='text-base text-gray-500 text-center lg:text-start font-mulish font-semibold w-full'>My main stack currently is React.js in combination with Tailwind CSS. I can also do flutter App using Dart..</p>
        </div>
    </section>
  )
}

export default About