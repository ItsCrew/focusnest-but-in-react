import { Pause, Play, RotateCw, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const TimerControls = () => {

    const [isPaused, setIsPaused] = useState(true)

    const toggleControls = () => {
        setIsPaused(!isPaused)
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center gap-3 font-medium'>
                <div onClick={toggleControls}>
                    {isPaused ? (
                        <button className='flex justify-center items-center bg-white text-black h-13.75 w-30 rounded-2xl cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease'><Play/></button>
                    ):(
                        <button className='flex justify-center items-center bg-white text-black h-13.75 w-30 rounded-2xl cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease'><Pause/></button>
                    )}
                </div>
                <p className='cursor-pointer'><RotateCw/></p> 
                <Link className='cursor-pointer' to='/settings' aria-label='Open settings'>
                    <Settings />
                </Link>
            </div>
         </div>
    )
}

export default TimerControls