import React from 'react'
import Page from './Components/About/Page'
import AppShell from './Components/Global/AppShell'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Tasks from './Pages/Tasks'
import Soon from './Pages/Soon'
import Settings from './Pages/Settings'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-background-dark text-font-dark font-sans'>
      <Routes>
        <Route path="/" element={<Page />}/>
        <Route element={<AppShell />}>
          <Route path='/home' element={<Home />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/notes' element={<Soon />} />
          <Route path='/settings' element={<Settings />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App