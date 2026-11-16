import { Pause, Play, RotateCw, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTimer } from '../../Context/TimerContext'


const TimerControls = () => {

    const { isRunning, toggleTimer, resetTimer } = useTimer();

    const toggleControls = () => {
        setIsPaused(!isPaused)
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center gap-3 font-medium'>
                <div className='flex justify-center items-center bg-white text-black h-11 sm:h-13.75 w-26 sm:w-30 rounded-xl sm:rounded-2xl cursor-pointer hover:-translate-y-1.25 transition-all duration-300 ease' onClick={toggleTimer}>
                    {isRunning ? <Pause /> : <Play />}
                </div>
                <button type="button" onClick={resetTimer} title='Reset Timer' aria-label='Reset Timer' className='cursor-pointer text-white hover:text-headings-dark transition-colors p-1'>
                    <RotateCw />
                </button>
                <Link className='cursor-pointer text-white hover:text-headings-dark transition-colors p-1' to='/settings' aria-label='Open settings' title='Settings'>
                    <Settings />
                </Link>
            </div>
        </div>
    )
}

export default TimerControls