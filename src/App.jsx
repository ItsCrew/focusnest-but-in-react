import React from 'react'
import Navbar from './Components/About/Navbar'
import Page from './Components/About/Page'
import AppShell from './Components/Global/AppShell'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Tasks from './Pages/Tasks'
import Soon from './Pages/Soon'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-background-dark text-font-dark'>
      <Routes>
        <Route path="/" element={<Page />}/>
        <Route element={<AppShell />}>
          <Route path='/home' element={<Home />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/notes' element={<Soon />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App