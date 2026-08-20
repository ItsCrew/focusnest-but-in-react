import React from 'react'

const EmptyState = ({ onAddClick }) => {
  return (
    <div className='flex flex-col items-center justify-center h-full space-y-4 py-20'>
      <p className='text-white text-[23px] font-bold tracking-wide'>
        Nothing here. Add a task
      </p>
      <button 
        type="button"
        onClick={onAddClick} 
        className='h-11.25 w-25 bg-headings-dark hover:bg-[#5e7f64] active:scale-95 hover:scale-105 text-white font-medium rounded-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-200 cursor-pointer flex items-center justify-center text-base'
      >
        Add
      </button>
    </div>
  )
}

export default EmptyState