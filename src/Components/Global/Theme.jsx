import React, { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const Theme = () => {
  // 1. Change state to a boolean (false = light mode, true = dark mode)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // 2. Toggle the boolean state
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div>
      <div onClick={toggleTheme} className='fixed top-5 right-5 cursor-pointer'>
        {isDarkMode ? (
          <Moon color="#0f172a" size={50} className="bg-white rounded-full p-1.5 "/>
        ) : (
          <Sun  color="#0f172a" size={50} className="bg-white rounded-full p-1.5 hover:rotate-180 transition-all duration-300 ease"/>
        )}
      </div>
    </div>
  )
}

export default Theme