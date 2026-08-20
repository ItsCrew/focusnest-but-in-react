import React, { useState } from 'react'
import { X, ChevronDown } from 'lucide-react';

const AddTaskModal = () => {
    const [priority, setPriority] = useState('P0')
    const [priorityOpen, setPriorityOpen] = useState(false)

    const priorityStyles = {
        P0: 'bg-red-500/20 border-red-400 text-red-400',
        P1: 'bg-amber-500/20 border-amber-400 text-amber-400',
        P2: 'bg-gray-500/20 border-gray-400 text-gray-400',
    }

    return (
        <div className='flex justify-center dark:bg-modal-shadow-bg bg-black/60 fixed left-0 top-0 z-1200 w-screen h-screen overflow-auto'>
            <div className='max-w-[50vw] min-w-[25vw] w-[90%] border border-modal-border rounded-2xl box-border relative mx-0 my-auto dark:bg-modal-bg overflow-hidden'>
                <div className='p-6 border-b border-modal-border/30 flex items-center justify-between'>
                    <h2 className='text-2xl font-bold text-font-dark'>Add a Task</h2>
                    <span className='cursor-pointer p-0 m-0 text-font-dark/70 hover:text-font-dark transition-colors'><X size={24}/></span>
                </div>
                <div className='p-6 border-b border-modal-border/30 flex justify-center items-center'>
                    <div className='flex items-center gap-2.5 w-[80%] max-w-[70vw] min-w-[45vw] mx-0 my-auto'>
                        <input className='px-3 h-12 flex-1 rounded-[15px] border-2 border-black dark:border-modal-border dark:bg-[#1e1e1e] dark:text-font-dark focus:outline-none text-base' type="text" name="InputBox" id="InputBox" placeholder='Add a new task!' />
                        <div className='relative'>
                            <div 
                                onClick={() => setPriorityOpen(!priorityOpen)}
                                className={`flex items-center justify-between gap-2 h-12 min-w-20 px-3.5 rounded-[15px] border-2 cursor-pointer select-none font-semibold text-sm transition-all ${priorityStyles[priority]}`}
                            >
                                <span>{priority}</span>
                                <ChevronDown size={16} className={`transition-transform duration-200 ${priorityOpen ? 'rotate-180' : ''}`} />
                            </div>
                            {priorityOpen && (
                                <div className='absolute top-full right-0 mt-1.5 w-full bg-navbg-dark border border-headings-dark rounded-xl overflow-hidden shadow-xl z-20'>
                                    <div onClick={() => { setPriority('P0'); setPriorityOpen(false); }} className='px-3 py-2 text-center font-semibold text-sm text-red-400 hover:bg-white/10 cursor-pointer'>P0</div>
                                    <div onClick={() => { setPriority('P1'); setPriorityOpen(false); }} className='px-3 py-2 text-center font-semibold text-sm text-amber-400 hover:bg-white/10 cursor-pointer'>P1</div>
                                    <div onClick={() => { setPriority('P2'); setPriorityOpen(false); }} className='px-3 py-2 text-center font-semibold text-sm text-gray-400 hover:bg-white/10 cursor-pointer'>P2</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='p-6 flex justify-center'>
                    <button 
                        type='button'
                        className='h-11.25 w-25 bg-headings-dark hover:bg-[#5e7f64] active:scale-95 hover:scale-105 text-white font-medium rounded-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-200 cursor-pointer flex items-center justify-center text-base'
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal