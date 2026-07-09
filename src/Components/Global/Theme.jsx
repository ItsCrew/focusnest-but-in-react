import React, { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
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