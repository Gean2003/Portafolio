import { motion } from 'framer-motion'

  const variants = {
    open: { opacity:1, x: 0 },
    closed: { opacity:0, x: "-100%"},
  }

const CardInfoProject = ({isOpen, toggleCardInfo, item}) => {

  return (
    <motion.div animate={isOpen ?  "open" : "closed" }
                transition={{ delay: 0.1, duration: 0.5 }}
                variants={variants}
                className=' absolute w-full rounded-lg  h-full  backdrop-blur-sm bg-[#111111bd] top-0' >
      <div className='flex justify-end w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             width="25" height="25"
             viewBox="0 0 24 24"
             className='fill-white lg:cursor-pointer  mr-1 mt-1 mb-2'
             onClick={ toggleCardInfo } >
            <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"
             >
          </path>
        </svg> 
      </div>
      <div className='w-full h-full gap-3 flex items-center justify-center flex-col  px-2'>
        <p className='text-white text-center font-medium'>{item.description}</p>
        <section >
          <ul className='flex gap-5' >
            {
              item.technologies.map(e => (
                <li key={e.name}> <img  src={`${e.icon}`} alt={`${e.name}_icon`} /> </li>
              ))
            }
          </ul>
        </section>
        <section className='fill-white text-white flex justify-center'>
          <a href={`${item.url}`} target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                     className='cursor-pointer border-2 bg-white  rounded-full' >
                  <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
                  </path>
            </svg>
          </a>
        </section>
      </div>       
    </motion.div>
  )
}

export default CardInfoProject

