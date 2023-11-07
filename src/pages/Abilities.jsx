import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Abilities = () => {

  const navigate = useNavigate()

  const redirectTo = () => {
    navigate('/')
  }

  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className='h-full relative overflow-x-hidden overflow-y-scroll lg:h-full py-2 w-full bg-[#f8f9fa]  z-50 lg:z-0'>
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

        <section>
          <h3 className='text-center mt-5 text-2xl text-blue-400 font-extrabold'>Mis Habilidades</h3>
          <div className='w-full h-auto py-3 my-3'>
            <ul className='flex flex-col gap-5'>
              <li className='flex gap-7 lg:gap-7 2xl:gap-14 px-2 items-center'>
                <p className='w-[90px]  font-medium '>HTML</p>
                <div className='relative w-full h-[2px] bg-[#DAE3E5]  '>
                  <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className='absolute w-5/6 h-[4px]  -top-[1px] bg-blue-400'>
                  </motion.div>
                </div>
              </li>
              <li className='flex gap-7 lg:gap-7 2xl:gap-14 px-2 items-center'>
                <p className='w-[90px]  font-medium  '>CSS</p>
                <div className='relative w-full h-[2px] bg-[#DAE3E5]   '>
                  <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className='absolute w-4/5 h-[4px] rounded-r-sm -top-[1px] bg-blue-400 '>
                  </motion.div>
                </div>
              </li>
              <li className='flex gap-7 lg:gap-7 2xl:gap-14 px-2 items-center'>
                <p className='w-[90px]   font-medium '>TailwindCSS</p>
                <div className='relative w-full h-[2px] bg-[#DAE3E5]   '>
                  <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className='absolute w-4/5 h-[4px] rounded-r-sm -top-[1px] bg-blue-400'>
                  </motion.div>
                </div>
              </li>
              <li className='flex gap-7 lg:gap-7 2xl:gap-14 px-2 items-center'>
                <p className='w-[90px] font-medium '>Javascript</p>
                <div className='relative w-full h-[2px] bg-[#DAE3E5]   '>
                  <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className='absolute w-[70%] h-[4px] rounded-r-sm -top-[1px] bg-blue-400'>
                  </motion.div>
                </div>
              </li>
              <li className='flex gap-7 lg:gap-7 2xl:gap-14 px-2 items-center'>
                <p className='w-[90px]   font-medium '>Typescript</p>
                <div className='relative w-full h-[2px] bg-[#DAE3E5]   '>
                  <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className='absolute w-2/4 h-[4px] rounded-r-sm -top-[1px] bg-blue-400'>
                  </motion.div>
                </div>
              </li>
              <li className='flex gap-7 lg:gap-7 2xl:gap-14 px-2 items-center'>
                <p className='w-[90px]   font-medium '>Reactjs</p>
                <div className='relative w-full h-[2px] bg-[#DAE3E5]   '>
                  <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className='absolute w-[65%] h-[4px] rounded-r-sm -top-[1px] bg-blue-400'>
                  </motion.div>
                </div>
              </li>
              <li className='flex gap-7 lg:gap-7 2xl:gap-14 px-2 items-center'>
                <p className='w-[90px]   font-medium '>Nodejs</p>
                <div className='relative w-full h-[2px] bg-[#DAE3E5]   '>
                  <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className='absolute w-4/5 h-[4px] rounded-r-sm -top-[1px] bg-blue-400'>
                  </motion.div>
                </div>
              </li>
              <li className='flex gap-7 lg:gap-7 2xl:gap-14 px-2 items-center'>
                <p className='w-[90px]   font-medium '>Express</p>
                <div className='relative w-full h-[2px] bg-[#DAE3E5]   '>
                  <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className='absolute w-[63%] h-[4px] rounded-r-sm -top-[1px] bg-blue-400'>
                  </motion.div>
                </div>
              </li>
              <li className='flex gap-7 lg:gap-7 2xl:gap-14 px-2 items-center'>
                <p className='w-[90px]   font-medium '>Python</p>
                <div className='relative w-full h-[2px] bg-[#DAE3E5]   '>
                  <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className='absolute w-4/5 h-[4px] rounded-r-sm -top-[1px] bg-blue-400'>
                  </motion.div>
                </div>
              </li>
              <li className='flex gap-7 lg:gap-7 2xl:gap-14 px-2 items-center'>
                <p className='w-[90px]   font-medium '>Flask</p>
                <div className='relative w-full h-[2px] bg-[#DAE3E5]   '>
                  <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className='absolute w-2/4 h-[4px] rounded-r-sm -top-[1px] bg-blue-400'>
                  </motion.div>
                </div>
              </li>
              <li className='flex gap-7 lg:gap-7 2xl:gap-14 px-2 items-center'>
                <p className='w-[90px]   font-medium '>PostgreSQL</p>
                <div className='relative w-full h-[2px] bg-[#DAE3E5]   '>
                  <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className='absolute w-3/4 h-[4px] rounded-r-sm -top-[1px] bg-blue-400'>
                  </motion.div>
                </div>
              </li>
              <li className='flex gap-7 lg:gap-7 2xl:gap-14 px-2 items-center'>
                <p className='w-[90px]   font-medium '>MongoDB</p>
                <div className='relative w-full h-[2px] bg-[#DAE3E5]  '>
                  <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className='absolute w-4/5 h-[4px] rounded-r-sm -top-[1px] bg-blue-400'>
                  </motion.div>
                </div>
              </li>
              <li className='flex gap-7 lg:gap-7 2xl:gap-14 px-2 items-center'>
                <p className='w-[90px]   font-medium '>Git</p>
                <div className='relative w-full h-[2px] bg-[#DAE3E5]   '>
                  <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                    className='absolute w-3/5 h-[4px] rounded-r-sm -top-[1px] bg-blue-400'>
                  </motion.div>
                </div>
              </li>


            </ul>
          </div>
        </section>
      </ AnimatedPage >
    </motion.div>
  )
}

export default Abilities
