import React from 'react'
import BoxLayout from '../Components/Global/BoxLayout'
import GeneralSettings from '../Components/Settings/GeneralSettings'
import OtherSettings from '../Components/Settings/OtherSettings'

const Settings = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center gap-5'>
        <BoxLayout className="min-h-75! w-[45vw]!" title="General Settings">
          <GeneralSettings />
        </BoxLayout>
        <BoxLayout className="min-h-75! w-[45vw]!">
          <OtherSettings />
        </BoxLayout>
      </div>
    </div>
  )
}

export default Settings