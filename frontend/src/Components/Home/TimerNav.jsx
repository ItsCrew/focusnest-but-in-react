import React from 'react'
import { useState } from 'react'

const Timer = ({activeButton, handleMode}) => {

  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center gap-3 font-medium'>
        <button onClick={()=> { handleMode(1)}
        } className={`${activeButton === 1 ? 'bg-buttonsfocus-bg' : 'bg-white'} text-black h-13.75 w-30 rounded-2xl cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease`}>Pomodoro</button>
        <button onClick={()=> { handleMode(2)}
        } className={`${activeButton === 2 ? 'bg-buttonsfocus-bg' : 'bg-white'} text-black h-13.75 w-30 rounded-2xl cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease`}>Short Break</button>
        <button onClick={()=> { handleMode(3)}
        } className={`${activeButton === 3 ? 'bg-buttonsfocus-bg' : 'bg-white'} text-black h-13.75 w-30 rounded-2xl cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease`}>Long Break</button>
      </div>
    </div>
  )
}

export default Timer