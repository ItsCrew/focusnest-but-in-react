import React from 'react'
import Sidebar from '../Components/Global/Sidebar'
import Theme from '../Components/Global/Theme'
import Timer from '../Components/Home/Timer'

const Home = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex-1'>
          <Theme/>
          <Timer/>
        </div>
    </div>
  )
}

export default Home