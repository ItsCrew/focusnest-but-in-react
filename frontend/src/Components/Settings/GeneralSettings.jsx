import { Info } from 'lucide-react'
import React from 'react'
import ToggleSwitch from '../Global/ToggleSwitch'
import { useTimer } from '../../Context/TimerContext'

const GeneralSettings = () => {

  const {pomodoroMinutes, setPomodoroMinutes, shortBreakMinutes, setShortBreakMinutes, longBreakMinutes, setLongBreakMinutes, isPomodoroMode, setisPomodoroMode} = useTimer();

  return (
    <div className='flex flex-col gap-2 '>
      <h2 className='text-2xl'>Custom Timer</h2>
      <hr />

      {/* TODO : See if i have to add data types or not */}
      <div className='flex flex-col gap-3 py-2'>
        <div className='flex justify-between items-center'>
          <p>Pomodoro</p>
          <div className="flex items-center gap-2">
            <input
              type="number"
              disabled={isPomodoroMode}
              min="1"
              max="360"
              value={pomodoroMinutes || ''}
              onChange={(e) => setPomodoroMinutes(e.target.value === '' ? '' : Number(e.target.value))}
              onBlur={() => {
                const val = Number(pomodoroMinutes);
                if (val > 360) setPomodoroMinutes(360);
                else if (val < 1) setPomodoroMinutes(1);
              }}
              className='h-10 w-20 bg-input-bg border border-headings-dark rounded-[10px] text-center no-spinner disabled:opacity-50 disabled:cursor-not-allowed'
            />
            <span className="text-sm text-neutral-400 w-12">Minutes</span>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <p>Short Break</p>
          <div className="flex items-center gap-2">
            <input
              type="number"
              disabled={isPomodoroMode}
              min="1"
              max="60"
              value={shortBreakMinutes || ''}
              onChange={(e) => setShortBreakMinutes(e.target.value === '' ? '' : Number(e.target.value))}
              onBlur={() => {
                const val = Number(shortBreakMinutes);
                if (val > 60) setShortBreakMinutes(60);
                else if (val < 1) setShortBreakMinutes(1);
              }}
              className='h-10 w-20 bg-input-bg border border-headings-dark rounded-[10px] text-center no-spinner disabled:opacity-50 disabled:cursor-not-allowed'
            />
            <span className="text-sm text-neutral-400 w-12">Minutes</span>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <p>Long Break</p>
          <div className="flex items-center gap-2">
            <input
              type="number"
              disabled={isPomodoroMode}
              min="1"
              max="60"
              value={longBreakMinutes || ''}
              onChange={(e) => setLongBreakMinutes(e.target.value === '' ? '' : Number(e.target.value))}
              onBlur={() => {
                const val = Number(longBreakMinutes);
                if (val > 60) setLongBreakMinutes(60);
                else if (val < 1) setLongBreakMinutes(1);
              }}
              className='h-10 w-20 bg-input-bg border border-headings-dark rounded-[10px] text-center no-spinner disabled:opacity-50 disabled:cursor-not-allowed'
            />
            <span className="text-sm text-neutral-400 w-12">Minutes</span>
          </div>
        </div>

        <div className='flex justify-between items-center mt-2'>
          <div className="flex items-center gap-2">
            <p>Pomodoro Mode</p>
            <div className="group relative flex items-center">
              <Info size={18} className="text-neutral-400 hover:text-white transition-colors" />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 hidden w-64 p-3 bg-neutral-800 text-xs text-neutral-200 rounded-lg shadow-2xl group-hover:block z-10 text-center pointer-events-none border border-neutral-700">
                Deep Work for 25 minutes, followed by a Short Break. Repeated 4 times, then one Long Break. Dots under the timer indicate completed Pomodoros.
                <div className="absolute left-1/2 -translate-x-1/2 top-full border-[6px] border-transparent border-t-neutral-800" />
              </div>
            </div>
          </div>
          <ToggleSwitch
      checked={isPomodoroMode}
      onChange={(val) => {
        setisPomodoroMode(val);

        if (val === true) {
          setPomodoroMinutes(25);
          setShortBreakMinutes(5);
          setLongBreakMinutes(10);
        }
      }}
    />
        </div>

      </div>
    </div>
  )
}

export default GeneralSettings