import React from 'react'
import { Link, Links } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='sticky top-0.5 py-4 px-8'>
            <div className='flex gap-6 h-16 items-center p-6 text-lg bg-navbg-dark rounded-2xl border-2 border-headings-dark'>
                <Link className='me-auto cursor-pointer' to='/'>Focusnest</Link>
                <Link className=' cursor-pointer' to='/intro'>Intro</Link>
                <Link className=' cursor-pointer' to='/features'>Features</Link>
                <Link className=' cursor-pointer' to='/roadmap'>Roadmap</Link>
                <Link className=' cursor-pointer' to='/open-source'>Open Source</Link>


            </div>
        </div>
    )
}

export default Navbar