import React from 'react'
import { Circle } from 'lucide-react'

const TimerDisplay = () => {
  return (
    <div className='text-white font-medium'>
      <p className='text-[80px] text'>25:00</p>
      <div className='flex gap-2.5 justify-center mt-1 mb-2.5 min-h-5'>
        <div className='relative gap-2.5 flex justify-center items-center'>
          <Circle size={16} strokeWidth={2.5}/>
          {/* <Circle fill="currentColor" /> */}
          <Circle size={16} strokeWidth={2.5}/>
          {/* <Circle fill="currentColor" /> */}
          <Circle size={16} strokeWidth={2.5}/>
          {/* <Circle fill="currentColor" /> */}
          <Circle size={16} strokeWidth={2.5}/>
          {/* <Circle fill="currentColor" /> */}
          {/* <Circle size={24} className="text-blue-500" fill="currentColor" /> */}
        </div>
      </div>
    </div>
  )
}

export default TimerDisplay