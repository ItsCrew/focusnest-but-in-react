import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../../assets/Icons/focusnest-logo-web.png'

const AuthHeader = ({ title, subtitle }) => {
  return (
    <>
      <Link to='/' className='flex flex-col items-center group cursor-pointer'>
        <img
          src={LogoImage}
          alt='FocusNest'
          className='w-20 sm:w-22 h-auto object-contain group-hover:scale-105 transition-transform'
        />
      </Link>

      <h1 className='text-2xl sm:text-[27px] font-bold dark:text-white text-font-light tracking-tight mt-5 mb-2'>
        {title}
      </h1>
      <p className='text-sm sm:text-[15px] dark:text-[#9bb8a2] text-neutral-600 font-normal mb-7 max-w-xs'>
        {subtitle}
      </p>
    </>
  )
}

export default AuthHeader
