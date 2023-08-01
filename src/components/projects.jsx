import React from 'react'
import GrooveHub from '../assets/projects/groovehub.png'
import Marvel from '../assets/projects/marvel.png'
import NationalParks from '../assets/projects/nationalparks.jpeg'
import PlantTracker from '../assets/projects/planttracker.png'
import QuizApp from '../assets/projects/quizapp.jpg'
import SportsApi from '../assets/projects/sportsapi.jpg'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-cetner w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-400'>Projects</p>
                <p className='py-4'>Here are some of the projects I've worked on:</p>

            </div>

            {/* Projects */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Project Item */}
                <div style={{backgroundImage: `url(${GrooveHub})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Playlist Generator
                    </span>
                    <div>
                        <a href='https://sleepy-headland-80310-fcffdf3691bf.herokuapp.com/#'>
                            <button className='text-center rounded-ls px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/drozzy11/Group7-Project2'>
                            <button className='text-center rounded-ls px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Marvel})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Comic Book & Movie Search
                    </span>
                    <div>
                        <a href='https://sydneyloggins.github.io/Marvel-Comics/'>
                            <button className='text-center rounded-ls px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/sydneyloggins/Marvel-Comics'>
                            <button className='text-center rounded-ls px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${QuizApp})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Quiz App
                    </span>
                    <div>
                        <a href='https://sydneyloggins.github.io/JavaScript-Quiz/'>
                            <button className='text-center rounded-ls px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/sydneyloggins/JavaScript-Quiz'>
                            <button className='text-center rounded-ls px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${PlantTracker})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Track Your Plants
                    </span>
                    <div>
                        <a href='/'>
                            <button className='text-center rounded-ls px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-ls px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${NationalParks})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        National Park App
                    </span>
                    <div>
                        <a href='/'>
                            <button className='text-center rounded-ls px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-ls px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${SportsApi})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Women's Sports API
                    </span>
                    <div>
                        <a href='/'>
                            <button className='text-center rounded-ls px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-ls px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects