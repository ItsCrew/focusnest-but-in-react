import React from 'react'
import BoxLayout from '../Components/Global/BoxLayout'
import TasksBox from '../Components/Tasks/TasksBox'
import AppearanceBox from '../Components/Appearance/AppearanceBox'

const Tasks = () => {
      return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
          <div className='flex flex-col items-center'>
            <BoxLayout title="Appearance Settings">
               <AppearanceBox/>
            </BoxLayout>
          </div>
        </div>
      )
    }

export default Tasks