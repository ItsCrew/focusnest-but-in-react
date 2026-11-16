import React from 'react'
import { useState } from 'react'
import { useTimer } from '../../Context/TimerContext';

const Timer = ({activeButton, handleMode}) => {

    const {mode, changeMode} = useTimer();

  return (
    <div className='flex justify-center items-center w-full px-2'>
      <div className='flex justify-center items-center gap-1.5 sm:gap-3 font-medium'>
        <button onClick={()=> { changeMode('pomodoro') }
        } className={`${mode === 'pomodoro' ? 'bg-buttonsfocus-bg' : 'bg-white'} text-black h-11 sm:h-13.75 px-3 sm:w-30 rounded-xl sm:rounded-2xl text-xs sm:text-base cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease`}>Deep Work</button>
        <button onClick={()=> { changeMode('shortBreak') }
        } className={`${mode === 'shortBreak' ? 'bg-buttonsfocus-bg' : 'bg-white'} text-black h-11 sm:h-13.75 px-3 sm:w-30 rounded-xl sm:rounded-2xl text-xs sm:text-base cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease`}>Short Break</button>
        <button onClick={()=> { changeMode('longBreak') }
        } className={`${mode === 'longBreak' ? 'bg-buttonsfocus-bg' : 'bg-white'} text-black h-11 sm:h-13.75 px-3 sm:w-30 rounded-xl sm:rounded-2xl text-xs sm:text-base cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease`}>Long Break</button>
      </div>
    </div>
  )
}

export default Timer