import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Movie from '../assets/movie.png';
import Store from '../assets/store.png';
import Weather from '../assets/weather.png';
import Gallery from '../assets/gall.png';
import Cheesecake from '../assets/cheesecake.jpg';
import Rentme from '../assets/Rentme.jpg'
import Coffee from '../assets/coffee.jpg'

const projects = [
  {
    title: 'Movie App',
    image: Movie,
    liveLink: 'https://moviee-git-main-ussyalfaks.vercel.app/',
    githubLink: 'https://github.com/ussyalfaks/Moviee',
  },
  {
    title: 'Store App',
    image: Store,
    liveLink: 'https://ussyalfaks.github.io/Store/',
    githubLink: 'https://github.com/ussyalfaks/Store',
  },
  {
    title: 'Coffee Site',
    image: Coffee,
    liveLink: 'https://coffeeborcelle-two.vercel.app/',
    githubLink: 'https://github.com/ussyalfaks/coffeesite ',
  },
  {
    title: 'Weather App',
    image: Weather,
    liveLink: 'https://ussyalfaks.github.io/WEATHER-APP/',
    githubLink: 'https://github.com/ussyalfaks/WEATHER-APP',
  },
  {
    title: 'Gallery App',
    image: Gallery,
    liveLink: 'https://drop-mu-nine.vercel.app/gallery',
    githubLink: 'https://github.com/ussyalfaks/drop',
  },
  {
    title: 'Cheesecake App',
    image: Cheesecake,
    liveLink: 'https://cheesecake-ecru.vercel.app/',
    githubLink: 'https://github.com/ussyalfaks/Cheesecake',
  },
  {
    title: 'Rent Home',
    image: Rentme,
    liveLink: 'https://rentals-rho.vercel.app/',
    githubLink: 'https://github.com/ussyalfaks/Rentals',
  },
];
export default function Project() {
  return (
    <div>
      <div className="flex justify-center flex-col items-center mb-5">
        <div className='flex max-md:self-start text-left max-md:ml-5 md:mt-10 mb-6'>
          <h1 className='font-bold text-2xl'>Project:</h1>
        </div>
        <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 mx-5 gap-5 w-92'>
          {projects.map((project, index) => (
            <div key={index} className='flex flex-col border-2 rounded-xl hover:shadow-2xl'>
              <img src={project.image} className='mb-6 rounded-xl' alt='' />
              <div className='flex items-center justify-start mb-2'>
                <button className='mx-2 py-2 px-4 bg-[#427D9D] hover:bg-blue-700 rounded-xl'>
                  <a href={project.liveLink} target='_blank' rel='noreferrer' className='text-white font-mono'>
                    Live
                  </a>
                </button>
                <a href={project.githubLink} target='_blank' rel='noreferrer'>
                  <FaGithub className='cursor-pointer' size={25} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
