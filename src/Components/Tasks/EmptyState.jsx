import React from 'react'

const EmptyState = ({ onAddClick }) => {
  return (
    <div className='flex flex-col items-center justify-center h-full space-y-4 py-20'>
      <p className='text-white text-[23px] font-bold tracking-wide'>
        Nothing here. Add a task
      </p>
      <button onClick={onAddClick} className='bg-[#62826B] hover:bg-[#4d6955] text-white font-medium px-8 py-3 rounded-xl transition-colors duration-200'>
        Add
      </button>
    </div>
  )
}

export default EmptyState