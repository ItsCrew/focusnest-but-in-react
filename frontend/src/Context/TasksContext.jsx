import React, { createContext, useContext, useState, useEffect } from 'react'

const TasksContext = createContext()

export const TasksProvider = ({ children }) => {

    const [tasks, setTasks] = useState([])

    const addTasks = (task, priority) => {
        setTasks(prev => [...prev, {id: Date.now(), task, priority, completed:false, isActive:false, color: ''}])
    }

    const clearTasks = () => setTasks([])

    const toggleTask = (id) => {
        setTasks((prev) => 
            prev.map((t) => (t.id == id ? { ...t, completed: !t.completed } : t))
        )
    }

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((t) => t.id !== id ))
    }

    const toggleActiveTask = (id) => {
        setTasks((prev) => 
            prev.map((t) => (t.id == id ? { ...t, isActive: !t.isActive} : { ...t, isActive: false }))
        )
    }

    const editTask = (id, updatedText) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, task: updatedText } : t))
        )
    }

    const setTaskColor = (id, color) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, color } : t))
        )
    }

    const activeTask = tasks.find((t) => t.isActive) || null


    return (
        <TasksContext.Provider value={{tasks, setTasks, addTasks, clearTasks, toggleTask, deleteTask, toggleActiveTask, editTask, setTaskColor, activeTask}}>
            {children}
        </TasksContext.Provider>
    )
}

export const useTasks = () => {
    const context = useContext(TasksContext)
    if (!context) {
        throw new Error('useTasks must be used within a tasksprovider!')
    }
    return context
}