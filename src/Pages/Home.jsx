import React from 'react'
import Timer from '../Components/Home/TimerNav'
import TimerDisplay from '../Components/Home/TimerDisplay'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center'>
        <Timer/>
        <TimerDisplay/>
      </div>
    </div>
  )
}

export default Home