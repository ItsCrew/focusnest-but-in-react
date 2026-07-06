import React from 'react'
import Sidebar from '../Components/Global/Sidebar'
import Theme from '../Components/Global/Theme'
import Timer from '../Components/Home/TimerNav'
import TimerDisplay from '../Components/Home/TimerDisplay'

const Home = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex-1 flex flex-col justify-center items-center'>
          <Theme/>
          <div className='flex flex-col gap-4 items-center'>
            <Timer/>
            <TimerDisplay/>
          </div>
        </div>
    </div>
  )
}

export default Home