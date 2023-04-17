import React from 'react'
import { NavLink } from 'react-router-dom'

const IconsPages = () => {
  return (
    <div className='absolute font-medium text-gray-500  mt-2 flex justify-center items-center w-full gap-7 z-10 lg:z-0'>
          <NavLink className={({isActive}) => (isActive? 'text-blue-400 scale-105' : 'lg:hover:text-blue-400  lg:transition-all lg:hover:scale-105') }to='/projects'>
            proyectos
          </ NavLink>
          <NavLink className={({isActive}) => (isActive? 'text-blue-400 scale-105' : 'lg:hover:text-blue-400  lg:transition-all lg:hover:scale-105') } to='/abilities'>
            habilidades
          </ NavLink>
          <NavLink  className={({isActive}) => (isActive? 'text-blue-400 scale-105' : 'lg:hover:text-blue-400  lg:transition-all lg:hover:scale-105') } to='/contact'>
            contacto
          </NavLink>
    </div>
  )
}

export default IconsPages
