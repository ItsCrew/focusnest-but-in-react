import React from 'react'
import TasksBox from '../Components/Tasks/TasksBox'

const Tasks = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center'>
        <TasksBox/>
      </div>
    </div>
  )
}

export default Tasks