import React from 'react'

const PortfolioCard = ({title, description, imgSrc, techStack, sourceCode, liveDemo}) => {
  return (
    <div className='border rounded-xl overflow-hidden bg-white shadow-md'>
      <div className='overflow-hidden flex items-center justify-centerc cursor-pointer'>
        <img src={imgSrc} alt="portfolio image" className='object-cover w-full h-full hover:scale-110 transition duration-300 delay-200'/>
      </div>
      <hr />
      <div className="min-h-16 p-3 line-clamp-3 text-sm">
        {description}
      </div>
      <hr />
      <div className='flex flex-row flex-wrap items-center gap-2 px-3 py-2'>
        {techStack.map((stack)=>(
          <div 
            key={stack}
            className="text-center px-2 py-1 rounded-md w-auto text-xs bg-black text-white">
            {stack}
          </div>
        ))}
      </div>
      <div className='flex px-3 gap-2 py-3'>
        <a href={sourceCode} target='_blank' className='text-center px-6 py-1 rounded-md w-auto text-sm bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500  flex justify-center items-center'>
          <span className='text-white font-mulish'>{'<Code/>'}</span>
        </a>
        <a href={liveDemo} target='_blank' className='text-center px-6 py-1 rounded-md w-auto text-sm bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
          <span className='text-white'>{'Demo >'}</span>
        </a>
      </div>
    </div>
  )
}

export default PortfolioCard