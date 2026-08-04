import { Palette } from 'lucide-react'
import React from 'react'

// TODO: Make dropdown menus and add arrows


const AppearanceBox = () => {
    return (
        <div className='flex flex-col gap-3'>
            <p className='flex items-center gap-1'> <Palette /> Choose a theme</p>
            <div className='py-1.5 '>
            <button className='h-15 w-[20vw] text-left px-3.75 bg-navbg-dark rounded-xl border border-headings-dark'>Sync with system</button>
            </div>
            <hr />
            <p className='flex items-center gap-1'> <Palette /> background Options</p>
            <div className='py-1.5 '>
            <button className='h-15 w-[20vw] text-left px-3.75 bg-navbg-dark rounded-xl border border-headings-dark'>None</button>
            </div>
            <hr />
            <p className='flex items-center gap-1'> <Palette /> UI Density</p>
            <div className='py-1.5 '>
            <button className='h-15 w-[20vw] text-left px-3.75 bg-navbg-dark rounded-xl border border-headings-dark'>Coming Soon</button>
            </div>
            <hr />
            <div className='flex justify-center items-center text-center py-2.5'>
            <button className='h-11.25 w-37.5 text-center bg-headings-dark rounded-xl'>Reset to Default</button>
            </div>
        </div>
    )
}

export default AppearanceBox