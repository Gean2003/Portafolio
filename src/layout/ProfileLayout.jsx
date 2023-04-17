import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'

const ProfileLayout = () => {


  return (
    <main className='relative lg:static lg:flex flex w-max-[1920px] mx-auto h-screen w-full items-center justify-center '>
         <ProfileCard />
        <div className='w-full  lg:ml-5 h-full overflow-hidden absolute lg:static lg:inline-block 2xl:w-[70%] lg:w-[62%]  lg:h-[550px]  xl:h-[600px]  lg:rounded-[20px]'>
         <Outlet / >
        </div>
    </main>
  )
}

export default ProfileLayout
