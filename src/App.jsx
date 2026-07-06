import React from 'react'
import Navbar from './Components/About/Navbar'
import Page from './Components/About/Page'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Tasks from './Pages/Tasks'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-background-dark text-font-dark'>
    <Routes>
      <Route
            path="/"
            element={
              <>
                <Page />
              </>
            }
          />
      <Route path='/home' element={<Home/>}/>
      <Route path='/tasks' element={<Tasks/>}/>
    </Routes>
    </div>
  )
}

export default App