import React from 'react'
import PortfolioCard from './PortfolioCard'
import portfolio from '../data/portfolio' 

const Portfolio = () => {
  
  return (
    <section id='project' className='bg-gray-100 max-w-full h-full mx-auto flex justify-center py-20'>
      <div className='max-w-4xl h-full items-center'>
        <div className='py-10 px-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12'>
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