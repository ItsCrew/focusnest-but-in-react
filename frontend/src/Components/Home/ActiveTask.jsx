import React from 'react'

const ActiveTask = () => {
  return (
    <div className='flex flex-col items-center rounded-2xl border border-activetask-border-dark bg-activetask-bg-dark backdrop-blur-sm max-w-[min(480px,92vw)] mt-2 mb-5.5 mx-4 pt-3.5 pb-4 px-5.5 '>
        <p className='uppercase text-[10px] font-semibold tracking-[0.14px] opacity-[0.9] text-font-version-dark pb-2'>Active Task</p>
        <p className='text-[clamp(15px,2.1vw,17px)] font-semibold leading-[1.4] max-w-full line-clamp-2 wrap-break-words opacity-[0.9]'>No Task Selected</p>
    </div>
  )
}

export default ActiveTask