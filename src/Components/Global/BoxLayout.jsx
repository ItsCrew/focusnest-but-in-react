import React from 'react'

const BoxLayout = ({ title, children, className = "" }) => {
  return (
    <div className="space-y-2">
      {title && <p className="text-3xl font-bold text-white tracking-
  tight">{title}</p>}

      <div className={`dark:bg-tasksbox-bg h-auto min-h-137.5 w-[58vw] border-2
  border-headings-dark rounded-[30px] p-6 flex flex-col justify-center ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default BoxLayout