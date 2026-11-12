import React, { useState } from 'react'
import BoxLayout from '../Components/Global/BoxLayout'
import TasksBox from '../Components/Tasks/TasksBox'
import AddTaskModal from '../Components/Tasks/AddTaskModal'
import { useTasks } from '../Context/TasksContext'
import { Plus } from 'lucide-react'
import TaskMenu from '../Components/Tasks/TaskMenu'

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {tasks} = useTasks();

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center'>
        <BoxLayout
      title="Tasks"
      headerAction={
        tasks.length > 0 && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-11 h-11 bg-white text-black rounded-full flex items-center justify-center cursor-pointer shadow-md"
            title="Add Task"
          >
            <Plus className='hover:rotate-180 transition-all duration-400 ease-in-out' size={31} strokeWidth={2.5} />
          </button>
        )
      }
      className=''
    >
          <TasksBox onOpenModal={() => setIsModalOpen(true)} />
          {isModalOpen && (
            <AddTaskModal onClose={() => setIsModalOpen(false)} />
          )}
        </BoxLayout>
      </div>
    </div>
  )
}

export default Tasks