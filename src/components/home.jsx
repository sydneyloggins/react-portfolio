import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-blue-400'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sydney Loggins</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] '>Hello! I'm Sydney, a junior web developer based in Austin, TX currently attending the University of Texas full-stack developer bootcamp. I graduated from the University of Texas at Austin with a degree in Kinesiology to then go on to get my Master degree in Occupational Therapy (OT). Working in healthcare provided opportunites to meet people from all walks of life, practice leadership skills, and cultivate an inclusive trusting environment. I'm looking forward to learning more about the world of web development and invite you to take a look at what I've been working on.</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400 hover:border-blue-400'>View Work 
            <span className='group-hover:rotate-90 duration-300'> 
            <HiArrowNarrowRight className='ml-3'/> 
            </span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Home