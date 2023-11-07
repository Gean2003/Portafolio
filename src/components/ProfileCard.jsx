import React from 'react'
import profile from '../assets/1661902913219.jfif'
import Typewriter from 'typewriter-effect'
import github from '../assets/icons8-github-100.svg'
import linkedin from '../assets/icons8-linkedin-100.svg'
import IconsPages from './IconsPages'
import cv from '../assets/Gean_FrancoSR.pdf'

const ProfileCard = () => {

    return (
    <section className='mx-5 lg:mx-0 bg-[#f8f9fa] relative pb-10  2xl:pb-0  z-10 lg:z-0 w-full h-[600px]  lg:w-[33%]  xl:w-[30%] 2xl:w-[23%] lg:h-[580px] rounded-2xl shadow-2xl'>
      <IconsPages />
        <figure className='w-full h-[30%] flex items-end justify-center  py-3'>
          <img className='w-[110px]  rounded-full' 
              src={profile} alt=""  />
        </figure>
      <div className='px-1 lg:h-[67%]  pt-2 text-gray-700'>
        <div >
          <h2 className='text-center text-lg md:text-2xl font-extrabold'>Hola, soy Gean Franco Saboya Rodriguez ✔</h2>
          <div className='flex w-full items-end gap-1 justify-center'>
            <p className='text-center mt-1 md:mt-3 text-xl font-medium'>Desarrollador Web</p>
            <Typewriter options={{ 
            autoStart: true,
            loop: true,
            delay: 40,
            strings: ["Full-Stack", "Frontend", "Backend" ],
            wrapperClassName: 'text-xl mt-1 md:mt-3 text-blue-600 font-medium' }}>
            
          </ Typewriter>
          </div>
          
        </div>
        <p className='text-center mt-2 px-2'>Me apasiona la programación, y todo lo relacionado a la tecnólogia, poseo
              las aptitudes y experiencia profesional necesarias para entrar en dicho
              mundo. Como profesional optimista, motivado y con excelentes habilidades
              comunicativas y de trabajo en equipo, espero un futuro brillante en esta industria. Explora mi sitio para 
              ver lo que puedo aportar.
        </p>
        <ul className='flex gap-5 items-center justify-center my-3'>
          <li className='lg:cursor-pointer hover:scale-105 lg:transition-all'> 
            <a target="_blank" href="https://github.com/Gean2003">
              <img src={github} className='w-[35px] ' alt="github_logo" />
            </a>
          </li>
          <li className='lg:cursor-pointer hover:scale-105 lg:transition-all z-10'>
            <a target="_blank" href="https://www.linkedin.com/in/gean-franco-saboya-rodriguez-57105724a/">
              <img src={linkedin} className='w-[35px]' alt="linkedin_logo" />
            </a>
          </li>
        </ul>
          <div className='text-center mt-1 lg:mt-0  xl:mb-0 md:mt-8 xl:mt-4 z-10 lg:z-0 mb-5 lg:mb-0 py-1 px-1 rounded border w-full shadow-2xl md:w-[200px] mx-auto lg:hover:bg-blue-500 transition-all '>
            <a href={cv} download="CV_Gean" className=' lg:hover:text-white text-blue-600 font-semibold text-lg  transition-all'>Descargar CV</a>
          </div>
      </div>
    </section>
  )
}

export default ProfileCard
