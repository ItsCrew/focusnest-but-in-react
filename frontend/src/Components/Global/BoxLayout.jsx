import React from 'react'

const BoxLayout = ({ title, headerAction, children, className = "" }) => {
  return (
    <div className="space-y-0.5 text-lg">
      <div className='flex justify-between items-center'>
      {title && <p className="text-3xl font-bold text-white tracking-tight">{title}</p>}
      {headerAction}
      </div>

      <div className={`dark:bg-tasksbox-bg h-auto min-h-137.5 w-[92vw] sm:w-[85vw] md:w-[70vw] lg:w-[58vw] max-w-4xl border-2 border-headings-dark rounded-[30px] p-4 sm:p-6 flex flex-col text-lg ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default BoxLayout