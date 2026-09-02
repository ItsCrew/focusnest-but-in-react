import React from 'react'
import { useState } from 'react'
import { useTimer } from '../../Context/TimerContext';

const Timer = ({activeButton, handleMode}) => {

    const {pomodoroMinutes, setPomodoroMinutes, shortBreakMinutes, setShortBreakMinutes, longBreakMinutes, setLongBreakMinutes, mode, timeLeft, isRunning, pomodoroCount, toggleTimer, resetTimer, changeMode} = useTimer();

  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center gap-3 font-medium'>
        <button onClick={()=> { changeMode('pomodoro') }
        } className={`${mode === 'pomodoro' ? 'bg-buttonsfocus-bg' : 'bg-white'} text-black h-13.75 w-30 rounded-2xl cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease`}>Deep Work</button>
        <button onClick={()=> { changeMode('shortBreak') }
        } className={`${mode === 'shortBreak' ? 'bg-buttonsfocus-bg' : 'bg-white'} text-black h-13.75 w-30 rounded-2xl cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease`}>Short Break</button>
        <button onClick={()=> { changeMode('longBreak') }
        } className={`${mode === 'longBreak' ? 'bg-buttonsfocus-bg' : 'bg-white'} text-black h-13.75 w-30 rounded-2xl cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease`}>Long Break</button>
      </div>
    </div>
  )
}

export default Timer