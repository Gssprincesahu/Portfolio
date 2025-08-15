import React from 'react'
import logo from '../../public/logo.jpg';
import git from '../../public/git.png';
import linkedin from '../../public/linkedin.png';

export default function About() {
  return (
    <section  id="about" className='py-20 scroll-mt-16 w-auto scroll-smooth  min-h-screen m-4 auto md:px-2 px-4 dark:bg-black flex-col md:flex-row dark:text-white'>

      <div className='flex items-center  justify-center   md:flex-row flex-col  self-center   bg-blue-50 dark:bg-black   dark:text-white rounded-lg shadow-lg'>
        <div className='flex flex-col md:order-1 order-2 m-25 px-10 w-full transform hover:scale-105 transition duration-300  dark:text-white  md:w-1/2 space-y-4 left-0'>
          <h1 className='font-semibold text-5xl dark:text-white text-blue-800'>Prince Sahu</h1>
          <p className='text-xl dark:text-white text-blue-900'>Full Stack Developer</p>
          <p className=' dark:text-white text-blue-900'>I am passionate Full-stack developer skilled in the  <span className='font-bold'>MERN stack</span> , with strong JavaScript, React, Node.js, and MongoDB expertise.
            Passionate about building clean, efficient web apps and solving complex problems through competitive programming and data structures & algorithms in Java.
            Always eager to learn and create impactful digital experiences.</p>
          <a
            href="/cv.pdf"      // path to PDF
            target="_blank"         // open in new tab
            rel="noopener noreferrer"
          // download triggers download instead of open (optional)

          >
            <button className='text-white rounded-lg cursor-pointer w-30 transition h-10 bg-blue-900'>
              Resume
            </button>
          </a>
          <div className='flex space-x-4'>
            <a href= 'https://www.linkedin.com/in/prince-sahu-552382326/' 
            target="_blank" 
             className=' h-10 w-10 transform hover:scale-105 transition duration-300'>
              <img src ={linkedin} /></a>
            <a href=' https://github.com/Gssprincesahu ' 
            target="_blank" 
            className=' h-10 w-10 transform hover:scale-105 transition duration-300'>
              <img src={git} /></a>
            
          </div>
        </div>
        <div className='w-full md:w-1/2 order-1 flex items-center justify-center pb-10 md:pb-0'>
          <img src={logo} className='h-80 shadow-gray-700 transform hover:scale-105 transition duration-300 dark:shadow-amber-50 shadow-2xl  rounded-2xl' />
        </div>
      </div>
    </section>
  )
}
