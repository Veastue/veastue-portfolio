import React from 'react'
import { TbBrandLinkedin, TbBrandGithub, TbBrandCss3, TbBrandHtml5, TbBrandReact, TbBrandTailwind, TbBrandFlutter, TbBrandJavascript } from "react-icons/tb";

function Hero() {

    return (
        <section className="bg-gray-100 w-full min-h-screen relative ">
            <div className='h-screen max-w-5xl mx-auto flex flex-col justify-center items-center gap-[30px] '>
            <div className='flex lg:flex-row-reverse flex-col items-center gap-10 px-4 lg:flex-nowrap mt-20 lg:mt-[-150px]'>
                <div className='overflow-hidden h-[250px] w-[250px] mt-24 lg:mt-0 lg:min-w-[300px] lg:min-h-[300px] rounded-full flex justify-center items-center border-[3px] border-black animate-[wiggle_4s_ease-in-out_infinite] transform transistion'>
                    <img src="src/assets/heropic.jpg" alt="pic" className='w-full h-full object-cover hover:scale-125 delay-0 duration-300' />
                </div>
                <div className='flex flex-col gap-10 justify-center items-center text-center lg:text-start lg:items-start'>
                    <h1 className='flex font-bold text-5xl sm:text-7xl '>
                        Front-End React Developer🖖
                    </h1>
                    <p className='max-w-[465px] text-lg font-mulish text-gray-600'>Hi, I'm Bartolome Cantiga. A passionate Front-End React Developer based in Cavite, Philippines. 📍</p>
                    <div className='flex gap-4 px-2'>
                        <TbBrandLinkedin className='text-4xl text-sky-700 hover:text-sky-500 cursor-pointer transition-none hover:transition-none delay-100 duration-700 hover:scale-125 0'/>
                        <TbBrandGithub className='text-4xl text-pink-700 hover:text-pink-500  cursor-pointer transition-none hover:transition-none delay-100 duration-0 hover:scale-125'/>
                    </div>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col gap-10 px-4 text-center w-full items-center lg:mb-0 mb-32'>
                <h4 className='text-xl py-3 font-semibold border-b-2 border-black lg:border-r-2 lg:border-b-0 lg:pr-5 transition-none'>Tech Stack</h4>
                <div className="flex gap-3">
                    <div className='flex '>
                        <TbBrandHtml5 className='text-5xl hover:text-orange-700 cursor-pointer hover:animate-bounce transition-none hover:transition-none' />
                        <TbBrandCss3 className='text-5xl hover:text-blue-700 cursor-pointer hover:animate-bounce transition-none hover:transition-none' />
                    </div>
                    <div className='flex'>
                        <TbBrandReact  className='text-5xl hover:text-cyan-700 cursor-pointer hover:animate-bounce transition-none hover:transition-none' />
                        <TbBrandTailwind  className='text-5xl hover:text-pink-700 cursor-pointer hover:animate-bounce transition-none hover:transition-none' />
                    </div>
                    <div className='flex'>
                        <TbBrandFlutter  className='text-5xl hover:text-sky-700 cursor-pointer hover:animate-bounce transition-none hover:transition-none' />
                        <TbBrandJavascript   className='text-5xl hover:text-yellow-700 cursor-pointer hover:animate-bounce transition-none hover:transition-none' />
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Hero