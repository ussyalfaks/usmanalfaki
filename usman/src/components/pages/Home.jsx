import React from 'react';
import { motion } from 'framer-motion';
import Usman from '../../assets/usm.jpeg';
import SocialMediaIcons from '../socialmedia';
import Skills from '../skills';
import Project from '../project';
import Hireme from '../Hireme';
import Footer from '../footer';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
    >
      <div className='container mx-auto mt-4 p-4 bg-f6f7fb'>
        <motion.div
          className="grid grid-rows-1 md:grid-rows-2 text-center gap-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 2}}
        >
          {/* First Div */}
          <motion.div
            className="p-2 flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 3 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-[#427D9D] mb-1">
              Usman Alfaki
            </h1>
            <h2 className='mb-1 text-base font-bold'>Frontend Developer</h2>
            <p className="text-gray-700 text-center lg:mx-48">
              Hello, I'm Usman Alfaki Abdulkadir, a passionate React developer with
              a strong foundation in HTML, CSS, and JavaScript. I thrive on turning
              innovative ideas into elegant, user-friendly web applications.
            </p>
          </motion.div>

          {/* Second Div */}
          <motion.div
            className="p-2 flex justify-center items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 4 }}
          >
            <img
              src={Usman}
              alt="Your Image"
              className="border-solid border-2 border-[#427D9D] w-52 h-auto bg-zinc-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
      <SocialMediaIcons />
      <Skills />
      <Project />
      <Hireme />
      <Footer />
    </motion.div>
  );
}
