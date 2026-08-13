import React from 'react'
import Page from './Components/About/Page'
import AppShell from './Components/Global/AppShell'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Tasks from './Pages/Tasks'
import Soon from './Pages/Soon'
import Settings from './Pages/Settings'
import Appearance from './Pages/Appearance'

const App = () => {
  return (
    <div className='min-h-screen w-full dark:bg-background-dark bg-background-version-light dark:text-font-dark text-font-version-light font-sans'>
      <Routes>
        <Route path="/" element={<Page />}/>
        <Route element={<AppShell />}>
          <Route path='/home' element={<Home />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/notes' element={<Soon />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/appearance' element={<Appearance />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App