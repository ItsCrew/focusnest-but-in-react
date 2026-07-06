import React from 'react'
import { Link, Links } from 'react-router-dom'
import { Menu } from 'lucide-react'


const Sidebar = () => {
    const navButtonClass = 'bg-navigation-buttons-dark text-black cursor-pointer w-50 h-9.5 rounded-full flex items-center justify-center hover:bg-navigation-hover-dark transition-all duration-300 ease hover:text-font-dark hover:-translate-y-1.25'

    return (
        <div className='flex py-4 px-4'>
            <div className='flex flex-col gap-6 h-[95vh] items-center px-8 py-6 text-lg bg-navbg-dark rounded-2xl border-2 border-headings-dark'>
                <div className='flex flex-col justify-center items-center font-semibold gap-0.5'>
                    <Link className=' cursor-pointer' to='/'>Focusnest</Link>
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
            <Menu size={32} className='m-2'/>
        </div>
    )
}

export default Sidebar