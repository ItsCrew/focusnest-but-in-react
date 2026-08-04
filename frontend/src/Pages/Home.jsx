import React from 'react'
import Timer from '../Components/Home/TimerNav'
import TimerDisplay from '../Components/Home/TimerDisplay'
import ActiveTask from '../Components/Home/ActiveTask'
import TimerControls from '../Components/Home/TimerControls'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center'>
        <Timer/>
        <TimerDisplay/>
        <ActiveTask/>
        <TimerControls/>
      </div>
    </div>
  )
}

export default Home