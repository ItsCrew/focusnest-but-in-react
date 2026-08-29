import React, { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../Context/ThemeContext'

const Theme = () => {

    const { theme, setTheme } = useTheme();

    const isDark = 
    theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    
  const toggleTheme = () => {

    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <div>
      <div onClick={toggleTheme} className='fixed top-5 right-5 cursor-pointer select-none z-50'>
        {isDark ? (
          <Sun color="#0f172a" size={50} className="bg-white rounded-full p-1.5 hover:rotate-180 transition-all duration-300 ease"/>
        ) : (
          <Moon color="#0f172a" size={50} className="bg-white rounded-full p-1.5 hover:scale-110 transition-all duration-200"/>
        )}
      </div>
    </div>
  )
}

export default Theme