import React, { useState } from 'react'
import { Link, Links } from 'react-router-dom'
import { Menu } from 'lucide-react'


// TODO - Make is so the sidebar is actually hidden rather then just invisible. Since it can still be accessed by using tab. Not a big a deal though

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(() => {
        const savedState = localStorage.getItem('Sidebar');
        return savedState !== null ? savedState === 'true' : true;
    })

    const toggleSidebar = () => {
        setIsOpen((prev) => {
            const nextState = !prev;
            localStorage.setItem("Sidebar", String(nextState))
            return nextState;
        })
    }

    const navButtonClass = 'bg-navigation-buttons-dark text-black cursor-pointer w-50 h-9.5 rounded-full flex items-center justify-center hover:bg-navigation-hover-dark transition-all duration-300 ease hover:text-font-dark hover:-translate-y-1.25'

    return (
        <div className='flex py-4 px-4 items-start'>
            <div className={`flex flex-col gap-6 h-[95vh] items-center text-lg bg-navbg-dark rounded-2xl transition-all duration-300 ease-in-out overflow-hidden

                ${isOpen
                    ? 'w-64 px-8 py-6 border-2 border-headings-dark opacity-100'
                    : 'w-0 px-0 py-6 border-0 opacity-0 pointer-events-none'
                }`}
            >
                <div className='w-48 flex flex-col items-center gap-6'>
                    <div className='flex flex-col justify-center items-center font-semibold gap-0.5'>
                        <Link className='cursor-pointer' to='/'>Focusnest</Link>
                        <p className='text-xs bg-background-version-dark px-2.5 py-1 rounded-full text-font-version-dark border border-border-version-dark'>v2.2.1</p>
                        <hr className='w-26 mt-2 ' />
                    </div>
                    <div className='flex flex-col gap-7 justify-center items-center py-2 text-base font-semibold'>
                        <Link className={navButtonClass} to='/Home'>Home</Link>
                        <Link className={navButtonClass} to='/Tasks'>Tasks</Link>
                        <Link className={navButtonClass} to='/Notes'>Notes</Link>
                        <Link className={navButtonClass} to='/Appearance'>Appearance</Link>
                        <Link className={navButtonClass} to='/Settings'>Settings</Link>
                    </div>
                </div>
            </div>
            <Menu onClick={toggleSidebar} size={32} className='m-2 cursor-pointer shrink-0' />
        </div>
    )
}

export default Sidebar