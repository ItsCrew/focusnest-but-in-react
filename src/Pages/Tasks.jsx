import React from 'react'
import Sidebar from '../Components/Global/Sidebar'
import Theme from '../Components/Global/Theme'

const Tasks = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex-1'>
          <Theme/>
        </div>
    </div>
  )
}

export default Tasks