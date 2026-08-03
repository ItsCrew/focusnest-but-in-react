import { Info } from 'lucide-react'
import React from 'react'
import ToggleSwitch from '../Global/ToggleSwitch'

const GeneralSettings = () => {
  return (
    <div className='flex flex-col gap-2 '>
      <h2 className='text-2xl'>Custom Timer</h2>
      <hr />

      {/* TODO : See if i have to add data types or not */}
      <div className='flex flex-col gap-3 py-2'>
        <div className='flex justify-between items-center'>
          <p>Pomodoro</p>
          <div className="flex items-center gap-2">
            <input className='h-10 w-20 bg-input-bg border border-headings-dark rounded-[10px] text-center no-spinner' type="number" min="1" max="360" />
            <span className="text-sm text-neutral-400 w-12">Minutes</span>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <p>Short Break</p>
          <div className="flex items-center gap-2">
            <input className='h-10 w-20 bg-input-bg border border-headings-dark rounded-[10px] text-center no-spinner' type="number" min="1" max="60" />
            <span className="text-sm text-neutral-400 w-12">Minutes</span>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <p>Long Break</p>
          <div className="flex items-center gap-2">
            <input className='h-10 w-20 bg-input-bg border border-headings-dark rounded-[10px] text-center no-spinner' type="number" min="1" max="60" />
            <span className="text-sm text-neutral-400 w-12">Minutes</span>
          </div>
        </div>

        <div className='flex justify-between items-center mt-2'>
          <div className="flex items-center gap-2">
            <p>Pomodoro Mode</p>
            <div className="group relative flex items-center">
              <Info size={18} className="text-neutral-400 hover:text-white transition-colors" />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 hidden w-64 p-3 bg-neutral-800 text-xs text-neutral-200 rounded-lg shadow-2xl group-hover:block z-10 text-center pointer-events-none border border-neutral-700">
                Deep Work for 25 minutes, followed by a Short Break. Repeated 4 times, then one Long Break. Dots under the timer indicate completed Pomodoros.
                <div className="absolute left-1/2 -translate-x-1/2 top-full border-[6px] border-transparent border-t-neutral-800" />
              </div>
            </div>
          </div>
          <ToggleSwitch /> {/*onChange={(val) => console.log('Browser Notifications toggled:', val)} */}
        </div>

      </div>
    </div>
  )
}

export default GeneralSettings