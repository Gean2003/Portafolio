import React from 'react'
import { motion } from 'framer-motion'
import AnimatedPage from '../components/AnimatedPage'
import { useNavigate } from 'react-router-dom'
import list from '../utils/project-list'
import ListProyect from "../components/ListProjects"

const Projects = () => {

  const navigate = useNavigate()
  const redirectTo = () => {
    navigate('/')
  }

  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className='h-full bg-[#f8f9fa] overflow-x-hidden overflow-y-scroll relative lg:h-full w-full  z-50 lg:z-0'>
      <AnimatedPage >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="30" height="30"
          viewBox="0 0 24 24"
          className='lg:hidden top-2 right-2 absolute'
          onClick={redirectTo}  >
          <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"
          >
          </path>
        </svg>
        <h3 className='text-center mt-5 text-2xl text-blue-400 font-extrabold'>Mis Proyectos</h3>
        <div className='flex w-full mt-5 items-center justify-center flex-wrap gap-5 h-full  py-2'>
          {
            list && list.map(item => (
              <ListProyect key={item.id}
                item={item}
              />
            ))
          }
        </div>
      </ AnimatedPage >
    </motion.div>
  )
}

export default Projects
