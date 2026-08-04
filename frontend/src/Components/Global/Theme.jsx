import React, { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })
  
  useEffect(() => {
    const root = document.documentElement
    
    if (isDarkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div>
      <div onClick={toggleTheme} className='fixed top-5 right-5 cursor-pointer select-nonez-50'>
        {isDarkMode ? (
          <Sun color="#0f172a" size={50} className="bg-white rounded-full p-1.5 hover:rotate-180 transition-all duration-300 ease"/>
        ) : (
          <Moon color="#0f172a" size={50} className="bg-white rounded-full p-1.5 hover:scale-110 transition-all duration-200"/>
        )}
      </div>
    </div>
  )
}

export default Theme