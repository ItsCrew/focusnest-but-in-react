import React, { useState } from 'react'
import EmptyState from '../Tasks/EmptyState'

const TasksBox = () => {
  const [tasks, setTasks] = useState([])

  const handleAddConditionalView = () => {
    console.log("Open input field or modal here")
  }

  return (
    <div className="space-y-2">
          {tasks.length === 0 ? (
            <EmptyState onAddClick={handleAddConditionalView} />
          ) : (
            <div>{/* Your TaskList component will go here later */}</div>
          )}

      </div>
  )
}

export default TasksBox