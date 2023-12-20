import React from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import Html from '../assets/html.svg';
import Css from '../assets/css.svg';
import Javascript from '../assets/javascript.svg';
import Reactlogo from '../assets/react.svg';
import Bootstrap from '../assets/bootstrap.svg';
import Tailwind from '../assets/tailwindcss.svg';
import Git from '../assets/git.svg';

function Skills() {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const imageTransition = {
    ease: 'linear',
    duration: 2,
    x: { duration: 1 },
  };

  const images = [
    { src: Html, alt: 'HTML' },
    { src: Css, alt: 'CSS' },
    { src: Javascript, alt: 'JavaScript' },
    { src: Reactlogo, alt: 'React' },
    { src: Bootstrap, alt: 'Bootstrap' },
    { src: Tailwind, alt: 'Tailwind CSS' },
    { src: Git, alt: 'Git' },
  ];

  return (
    <div>
      <div className='flex justify-center mt-10 flex-col items-center max-md:justify-between'>
        <div className='flex max-md:self-start text-left max-md:ml-5 md:mt-10'>
          <h1 className='font-bold text-2xl'>Skills:</h1>
        </div>
        <m.div
          className='grid grid-cols-5 max-md:grid-cols-3 my-7 max-sm:w-full max-md:pl-5'
          initial='hidden'
          animate='visible'
          transition={{ staggerChildren: 0.2 }}
        >
          <AnimatePresence>
            {images.map((image, index) => (
              <m.div
                key={index}
                variants={imageVariants}
                transition={imageTransition}
              >
                <img
                  src={image.src}
                  className='w-12 lg:mx-10 cursor-pointer md:mx-10 my-5'
                  alt={image.alt}
                />
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </div>
    </div>
  );
}

export default Skills;
