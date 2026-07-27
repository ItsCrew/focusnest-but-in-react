import React, { useState } from 'react'
import EmptyState from './EmptyState'

const TasksBox = () => {
  const [tasks, setTasks] = useState([])

  const handleAddConditionalView = () => {
    console.log("Open input field or modal here")
  }

  return (
    <div className="space-y-2">
      <p className="text-3xl font-bold text-white tracking-tight">Tasks</p>
      <div className='dark:bg-tasksbox-bg h-auto min-h-137.5 w-[58vw] border-2 border-headings-dark rounded-[30px] p-6 flex flex-col justify-center'>
          {tasks.length === 0 ? (
            <EmptyState onAddClick={handleAddConditionalView} />
          ) : (
            <div>{/* Your TaskList component will go here later */}</div>
          )}

      </div>
    </div>
  )
}

export default TasksBox