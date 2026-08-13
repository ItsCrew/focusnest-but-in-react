import React, { useState } from 'react'
import Timer from '../Components/Home/TimerNav'
import TimerDisplay from '../Components/Home/TimerDisplay'
import ActiveTask from '../Components/Home/ActiveTask'
import TimerControls from '../Components/Home/TimerControls'

const Home = () => {

  const [activeButton, setactiveButton] = useState(1)
  const [timeLeft, setTimeLeft] = useState(25 * 60);

const handleMode = (buttonid) => {
  setactiveButton(buttonid)
  
  if (buttonid === 1) {
    setTimeLeft(25*60)
  } else if (buttonid === 2) {
    setTimeLeft(5*60)
  } else if (buttonid === 3) {
    setTimeLeft(10*60)
  }
}


  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center'>
        <Timer activeButton={activeButton} handleMode={handleMode}/>
        <TimerDisplay timeLeft={timeLeft}/>
        <ActiveTask/>
        <TimerControls/>
      </div>
    </div>
  )
}

export default Home