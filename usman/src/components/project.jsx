import React from 'react'
import Movie from '../assets/movie.png'
import Store from '../assets/store.png'
import Weather from '../assets/weather.png'
import Gallery from '../assets/gall.png'
import { FaGithub} from 'react-icons/fa';

export default function Project() {
  return (
    <div>
      <div className=" flex justify-center flex-col items-center mb-5">
      <div className='flex max-md:self-start text-left max-md:ml-5 md:mt-10 mb-6'><h1 className='font-bold text-2xl'>Project:</h1></div>
        <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 mx-5 gap-5 w-92 '>
            <div className='flex flex-col border-2 rounded-xl hover:shadow-2xl '>
                <img src={Movie} className=' mb-6 rounded-xl' alt="" />
                <div className='flex items-center justify-start mb-2'>
                    <button className='mx-2 py-2 px-4 bg-[#427D9D] hover:bg-blue-700 rounded-xl '>
                        <a href="#" className='text-white font-mono'>Live</a></button>
                    <FaGithub className='cursor-pointer' size={25}/>
                </div>
            </div>

            <div className='flex flex-col border-2 rounded-xl hover:shadow-2xl'>
                <img src={Store} className='mb-6 rounded-xl' alt="" />
                <div className='flex items-center justify-start mb-2'>
                    <button className='mx-2 py-2 px-4 bg-[#427D9D] hover:bg-blue-700 rounded-xl '>
                        <a href="#" className='text-white font-mono'>Live</a></button>
                    <FaGithub className='cursor-pointer' size={25}/>
                </div>
            </div>


            <div className='flex flex-col border-2 rounded-xl hover:shadow-2xl'>
                <img src={Weather} className='mb-6 rounded-xl' alt="" />
                <div className='flex items-center justify-start mb-2'>
                    <button className='mx-2 py-2 px-4 bg-[#427D9D] hover:bg-blue-700 rounded-xl '>
                        <a href="#" className='text-white font-mono'>Live</a></button>
                    <FaGithub className='cursor-pointer' size={25}/>
                </div>
            </div>

            <div className='flex flex-col border-2 rounded-xl hover:shadow-2xl'>
                <img src={Gallery} className='mb-6 rounded-xl' alt="" />
                <div className='flex items-center justify-start mb-2'>
                    <button className='mx-2 py-2 px-4 bg-[#427D9D] hover:bg-blue-700 rounded-xl '>
                        <a href="#" className='text-white font-mono'>Live</a></button>
                    <FaGithub className='cursor-pointer' size={25}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
