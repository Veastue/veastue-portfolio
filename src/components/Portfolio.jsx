import React from 'react'
import PortfolioCard from './PortfolioCard'
import portfolio from '../data/portfolio' 

const Portfolio = () => {
  
  return (
    <section id='project' className='bg-gray-100 w-full h-full mx-auto flex flex-col items-center py-32'>
      <div className="flex max-w-7xl justify-center lg:justify-start">
        <div className=' text-xl font-bold text-blue-600 flex px-4 '>
          Projects
        </div>
      </div>
      <div className='max-w-7xl h-full items-center'>
        <div className='py-10 px-4  grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {portfolio.map(item=>
          (
            <PortfolioCard
              key={item.title}
              title={item.title}
              description={item.description}
              imgSrc={item.imgSrc}
              techStack={item.techStack}
              sourceCode={item.sourceCode}
              liveDemo={item.liveDemo}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio