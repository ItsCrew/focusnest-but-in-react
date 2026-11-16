import React, { useState, useEffect } from 'react'
import { X, ChevronDown } from 'lucide-react';
import { useTasks } from '../../Context/TasksContext';

const AddTaskModal = ({ onClose }) => {
    const [priority, setPriority] = useState('P0')
    const [priorityOpen, setPriorityOpen] = useState(false)
    const [taskText, setTaskText] = useState('')

    const { addTasks } = useTasks();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && onClose) onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const priorityStyles = {
        P0: 'bg-red-500/20 border-red-400 text-red-400',
        P1: 'bg-amber-500/20 border-amber-400 text-amber-400',
        P2: 'bg-gray-500/20 border-gray-400 text-gray-400',
    }

    const handleSubmit = () => {
        if (!taskText.trim()) return;
        addTasks(taskText.trim(), priority);
        setTaskText('');
        onClose();
    }

    return (
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget && onClose) onClose();
            }}
            className='fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs'
        >
            <div className='w-full max-w-md border border-modal-border rounded-2xl shadow-2xl relative dark:bg-modal-bg bg-navbg-dark overflow-hidden'>
                <div className='p-4 sm:p-6 border-b border-modal-border/30 flex items-center justify-between'>
                    <h2 className='text-xl sm:text-2xl font-bold text-font-dark'>Add a Task</h2>
                    <span onClick={onClose} className='cursor-pointer p-0 m-0 text-font-dark/70 hover:text-font-dark transition-colors'><X size={22} /></span>
                </div>
                <div className='p-4 sm:p-6 border-b border-modal-border/30 flex justify-center items-center'>
                    <div className='flex items-center gap-2 sm:gap-2.5 w-full'>
                        <input className='px-3 h-11 sm:h-12 flex-1 min-w-0 rounded-xl sm:rounded-[15px] border-2 border-black dark:border-modal-border dark:bg-[#1e1e1e] dark:text-font-dark focus:outline-none text-sm sm:text-base' 
                        value={taskText}
                        onChange={(e) => setTaskText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSubmit();
                        }}
                        type="text" 
                        name="InputBox" 
                        id="InputBox" 
                        autoFocus
                        placeholder='Add a new task!' />
                        <div className='relative shrink-0'>
                            <div
                                onClick={() => setPriorityOpen(!priorityOpen)}
                                className={`flex items-center justify-between gap-1.5 sm:gap-2 h-11 sm:h-12 min-w-16 sm:min-w-20 px-2.5 sm:px-3.5 rounded-xl sm:rounded-[15px] border-2 cursor-pointer select-none font-semibold text-xs sm:text-sm transition-all ${priorityStyles[priority]}`}
                            >
                                <span>{priority}</span>
                                <ChevronDown size={14} className={`transition-transform duration-200 ${priorityOpen ? 'rotate-180' : ''}`} />
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
                <div className='p-4 sm:p-6 flex justify-center'>
                    <button
                        onClick={handleSubmit}
                        type='button'
                        className='h-11 w-24 sm:w-25 bg-headings-dark hover:bg-[#5e7f64] active:scale-95 hover:scale-105 text-white font-medium rounded-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-200 cursor-pointer flex items-center justify-center text-sm sm:text-base'>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal