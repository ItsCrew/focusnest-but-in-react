import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Theme from './Theme'

const SIDEBAR_WIDTH = '18rem'

const AppShell = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const savedState = localStorage.getItem('Sidebar')
    return savedState !== null ? savedState === 'true' : true
  })

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      const nextState = !prev
      localStorage.setItem('Sidebar', String(nextState))
      return nextState
    })
  }

  return (
    <div className='relative min-h-screen w-full'>
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <Theme />
      <main
        className='min-h-screen transition-all duration-300'
        style={{
          marginLeft: isSidebarOpen ? SIDEBAR_WIDTH : '0',
          width: isSidebarOpen ? `calc(100% - ${SIDEBAR_WIDTH})` : '100%'
        }}
      >
        <Outlet />
      </main>
    </div>
  )
}

export default AppShell 
