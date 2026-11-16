import React from 'react'
import { Link, Links } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='sticky top-0.5 py-3 sm:py-4 px-3 sm:px-8 z-30'>
            <div className='flex gap-3 sm:gap-6 h-14 sm:h-16 items-center px-4 sm:px-6 text-sm sm:text-lg bg-navbg-dark rounded-2xl border-2 border-headings-dark overflow-x-auto whitespace-nowrap'>
                <Link className='me-auto cursor-pointer font-bold' to='/'>Focusnest</Link>
                <Link className='cursor-pointer hover:text-headings-dark transition-colors' to='/intro'>Intro</Link>
                <Link className='cursor-pointer hover:text-headings-dark transition-colors' to='/features'>Features</Link>
                <Link className='cursor-pointer hover:text-headings-dark transition-colors' to='/roadmap'>Roadmap</Link>
                <Link className='cursor-pointer hover:text-headings-dark transition-colors' to='/open-source'>Open Source</Link>
            </div>
        </div>
    )
}

export default Navbar