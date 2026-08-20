import React from 'react'
import BoxLayout from '../Components/Global/BoxLayout'
import TasksBox from '../Components/Tasks/TasksBox'
import AddTaskModal from '../Components/Tasks/AddTaskModal'

const Tasks = () => {
      return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
          <div className='flex flex-col items-center'>
            <BoxLayout title="Tasks" className='justify-center'>
               <TasksBox/>
               <AddTaskModal/>
            </BoxLayout>
          </div>
        </div>
      )
    }

export default Tasks