import React from 'react'
import ToggleSwitch from '../Global/ToggleSwitch'
import { useTimer } from '../../Context/TimerContext'

const OtherSettings = () => {

  const {autoStart, setAutoStart, notificationsEnabled, setnotificationsEnabled} = useTimer();


const handleNotificationToggle = (val) => {
  if (val) {
    if (!('Notification' in window)) {
      // TODO: Change this into a pop up on the website instead
      console.log('This browser does not support desktop notifications')
      return;
    }

    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission == 'granted') {
          setnotificationsEnabled(true)
        } else {
          setnotificationsEnabled(false)
        }
      })
      return;
    }
  }

  setnotificationsEnabled(val);
}
  

  return (
    <div className='flex flex-col gap-6 py-2'>
      <div className='flex justify-between items-center text-white'>
        <p>Browser Notifications</p>
        <ToggleSwitch checked={notificationsEnabled} onChange={handleNotificationToggle} />
      </div>

      <div className='flex justify-between items-center text-white'>
        <p>Auto-Start Next Session</p>
        <ToggleSwitch checked={autoStart} onChange={setAutoStart}/>
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