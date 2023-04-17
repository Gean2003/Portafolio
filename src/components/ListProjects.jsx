import React, { useState } from 'react'
import web_logo from '../assets/icons8-web-500.svg'
import repository_logo from '../assets/icons8-repository-500.svg'
import { motion } from 'framer-motion'
import CardInfoProject from './CardInfoProject'

const ListProjects = ({item}) => {
  const [isOpen, setIsOpen] = useState(false) 

  const toggleCardInfo = () => {
    setIsOpen(!isOpen)
  }

  return (
      <motion.section initial={{ opacity:0 }}
                      animate={{ opacity:1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      exit={{ opacity:0}}
                      className='w-[350px] shadow-xl relative 2xl:w-[400px] rounded-lg overflow-hidden'>
        <figure className='w-full flex h-[200px] justify-center'>
          <img src={ item.type == 'application' ? web_logo  : repository_logo } alt="" 
               className=' object-cover lg:cursor-pointer hover:rotate-12 '
               onClick={ toggleCardInfo } />
        </figure> 
          <h4 className='text-center font-bold text-white py-1 px-1 bg-blue-400'>{ item.title }</h4>
        <CardInfoProject isOpen={isOpen}
                         toggleCardInfo={toggleCardInfo}
                         item={item} />
      </motion.section>
  )
}

export default ListProjects
