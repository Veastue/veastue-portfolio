import React from 'react'
import RotateComp from './RotateComp'

const About = () => {
  return (
    <section className='min-h-96 max-w-4xl mx-auto flex flex-col justify-center items-center gap-[80px] lg:flex-row md:my-32 mb-32 '>
        <div className="flex flex-col sm:flex-row">
            <div className='relative w-full'>
                <div className='overflow-hidden h-[250px] w-[350px] mt-20 sm:mt-0 sm:min-w-[300px] sm:min-h-[300px] rounded-[20px] flex justify-center items-center shadow-lg '>    
                    <img src="src/assets/me.jpg" alt="" className='bg-center h-auto w-full hover:scale-125 delay-0 duration-300 hover:cursor-pointer'/>
                </div>
                <div className="absolute right-[-4rem] bottom-[-5rem] hidden md:flex">
                    <RotateComp />
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center lg:items-start gap-8 px-5 min-w-[340px]'>
            <h3 className="uppercase text-blue-600 font-extrabold ">About me</h3>
            <h1 className='text-2xl font-black text-center lg:text-start w-[300px] lg:w-full'>Front-end Developer from the Cavite, Philippines 📍</h1>
            <p className='text-base text-gray-500 text-center lg:text-start font-mulish font-semibold max-w-[480px] lg:w-full'>Hey, my name is Bart, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</p>
            <p className='text-base text-gray-500 text-center lg:text-start font-mulish font-semibold max-w-[480px] lg:w-full'>My main stack currently is React.js in combination with Tailwind CSS. I can also do flutter App using Dart.</p>
        </div>
    </section>
  )
}

export default About