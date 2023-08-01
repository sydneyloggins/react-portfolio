import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-center pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-400'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w[700px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold w-full '>
                        <p>Hi, I'm Sydney, nice to meet you.</p>
                            
                    </div>
                    <div>
                        <p>I am currently attending the University of Texas full-stack developer bootcamp. I graduated from the University of Texas at Austin with a degree in Kinesiology to then go on to get my Master degree in Occupational Therapy (OT). Working in healthcare provided opportunites to meet people from all walks of life, practice leadership skills, and cultivate an inclusive trusting environment. I'm looking forward to learning more about the world of web development and invite you to take a look at what I've been working on.</p>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default About