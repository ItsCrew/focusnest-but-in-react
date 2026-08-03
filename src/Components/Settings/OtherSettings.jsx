import React from 'react'
import ToggleSwitch from '../Global/ToggleSwitch'

const OtherSettings = () => {
  return (
    <div className='flex flex-col gap-6 py-2'>
      <div className='flex justify-between items-center text-white'>
        <p>Browser Notifications</p>
        <ToggleSwitch/> {/*onChange={(val) => console.log('Browser Notifications toggled:', val)} */}
      </div>

      <div className='flex justify-between items-center text-white'>
        <p>Auto-Start Next Session</p>
        <ToggleSwitch />
      </div>

      <div className='flex justify-between items-center text-white'>
        <p>Sounds</p>
        {/* <ToggleSwitch onChange={(val) => console.log('Sounds toggled:', val)} /> */}
        <p>Coming Soon!</p>
      </div>
    </div>
  )
}

export default OtherSettings