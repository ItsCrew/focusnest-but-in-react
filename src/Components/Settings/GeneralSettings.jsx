import { ToggleLeft } from 'lucide-react'
import React from 'react'

const GeneralSettings = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-2xl'>Custom Timer</h2>
      <hr />

      {/* TODO : See if i have to add data types or not */}
<div className='flex flex-col gap-5'>
      <div className='flex justify-between items-center'>
      <p>Pomodoro</p>
      <input className='h-10 w-20 bg-input-bg border border-headings-dark rounded-[10px] text-center no-spinner' type="number" min="1" max="360" />
      </div>

      <div className='flex justify-between items-center'>
      <p>Short Break</p>
      <input className='h-10 w-20 bg-input-bg border border-headings-dark rounded-[10px] text-center no-spinner' type="number" min="1" max="60" />
      </div>

      <div className='flex justify-between items-center'>
      <p>Long Break</p>
      <input className='h-10 w-20 bg-input-bg border border-headings-dark rounded-[10px] text-center no-spinner' type="number" min="1" max="60" />
      </div>
      
      <p> {/* <ToggleLeft/> */} Use the Pomodoro Mode:- Deep Work for 25 minutes - Short Break, repated for 4 times then One Long Break. Number of Pomodoros complete is indicated with dots under The Timer</p>
    </div>
</div>
  )
}

export default GeneralSettings