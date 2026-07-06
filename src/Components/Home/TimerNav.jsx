import React from 'react'

const Timer = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center gap-3 font-medium'>
        <button className='bg-white text-black h-13.75 w-30 rounded-2xl cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease'>Pomodoro</button>
        <button className='bg-white text-black h-13.75 w-30 rounded-2xl cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease'>Short Break</button>
        <button className='bg-white text-black h-13.75 w-30 rounded-2xl cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease'>Long Break</button>
      </div>
    </div>
  )
}

export default Timer