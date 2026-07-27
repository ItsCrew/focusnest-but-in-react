import React from 'react'
import BoxLayout from '../Components/Global/BoxLayout'
import SettingsBox from '../Components/Settings/SettingsBox'

const Settings = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center'>
        <BoxLayout title="Settings">
          <SettingsBox />
        </BoxLayout>
      </div>
    </div>
  )
}

export default Settings