import React from 'react'
import { motion } from 'framer-motion'
import AnimatedPage from '../components/AnimatedPage'
import { useNavigate } from 'react-router-dom'
import { useForm, ValidationError } from '@formspree/react'


const ContactMe = () => {

  const navigate = useNavigate()

  const [state, handleSubmit] = useForm("mzbqjbob")

  const redirectTo = () => {
    navigate('/')
  }

  if (state.succeeded) {
    return <p>Thanks fro joining </p>
  }

  return (
    <motion.div initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity:0 }}
                className='h-full relative lg:h-full w-full py-2 bg-[#f8f9fa] z-50 lg:z-0'>
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
        <h3 className='text-center mt-5 text-2xl text-blue-400 font-extrabold'>Contactame</h3>
        <motion.form  initial={{ opacity:0 }}
               animate={{ opacity:1 }}
               transition={{ delay: 0.8, duration: 0.5 }}
               exit={{ opacity:0}}
              onSubmit={handleSubmit}
              className='shadow-2xl bg-[#F5F3F5] rounded-md lg:w-[600px] flex flex-col flex-wrap gap-5 items-center mx-auto h-auto justify-center  py-4 mt-3'>
          <div className="flex flex-col">
            <label htmlFor="name" className=" after:content-['*'] after:text-red-400 ml:1 text-gray-500 font-medium" >Nombre</label>
            <input type="text" id='name' required name='name' className='py-1 px-1 w-[300px] rounded-md' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="lastName" className="after:content-['*'] after:text-red-400 ml:1 text-gray-500 font-medium">Apellido</label>
            <input type="text" id='lastName' required name='lastName'  className='py-1 px-1 w-[300px] rounded-md'/>
          </div>
          <div className='flex flex-col' >
            <label htmlFor="email" className="after:content-['*'] after:text-red-400 ml:1 text-gray-500 font-medium">Correo</label>
            <input type="email" id='email' name='email' required  className='py-1 px-1 w-[300px] rounded-md'/>
            <ValidationError 
             prefix='Email'
             field='email'
             errors={state.errors}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="message" className="after:content-['*'] after:text-red-400 ml:1 text-gray-500 font-medium">Mensaje</label>
            <textarea rows="5" cols="33" id='message' required name='message' className='py-1 px-1 w-[300px] rounded-md' ></textarea>
            <ValidationError 
             prefix='Message'
             field='message'
             errors={state.errors}
            />
          </div>
          <button type="submit" 
                  disabled={ state.submitting } 
                  className='py-1 px-1 w-[300px] rounded-md bg-blue-500 text-white text-lg font-medium lg:hover:scale-105 lg:transition-all' >
            Enviar
          </button>
        </motion.form>
      </ AnimatedPage >
    </motion.div>
  )
}

export default ContactMe
