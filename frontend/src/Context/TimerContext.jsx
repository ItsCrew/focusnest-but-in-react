import React, { createContext, useContext, useState, useEffect } from 'react'

const TimerContext = createContext()

export const TimerProvider = ({ children }) => {

    const [pomodoroMinutes, setPomodoroMinutes] = useState(() => {
      return Number(localStorage.getItem('PomodoroDuration')) || 25;
    });

    const [shortBreakMinutes, setShortBreakMinutes] = useState(() => {
      return Number(localStorage.getItem('ShortBreakDuration')) || 5;
    });

    const [longBreakMinutes, setLongBreakMinutes] = useState(() => {
      return Number(localStorage.getItem('LongBreakDuration')) || 10;
    });

    const [mode, setMode] = useState('pomodoro')
    const [timeLeft, settimeLeft] = useState(() => {
      return (Number(localStorage.getItem('PomodoroDuration')) || 25) * 60;
    });
    const [isRunning, setisRunning] = useState(false)
    const [pomodoroCount, setpomodoroCount] = useState(0)

    const getDurations = (currentmode) => {
        if(currentmode == 'shortBreak') return shortBreakMinutes * 60
        if(currentmode == 'longBreak') return longBreakMinutes * 60
        return pomodoroMinutes * 60
    }

    const toggleTimer = () => {
        setisRunning((prev) => !prev)
    }

    const resetTimer = () => {
        setisRunning(false)
        settimeLeft(getDurations(mode))
        setpomodoroCount(0)
    }

    const changeMode = (newMode) => {
        setisRunning(false)
        setMode(newMode)
        settimeLeft(getDurations(newMode))
    }

    useEffect(() => {
        localStorage.setItem('PomodoroDuration', String(pomodoroMinutes))
        localStorage.setItem('ShortBreakDuration', String(shortBreakMinutes))
        localStorage.setItem('LongBreakDuration', String(longBreakMinutes))
    }, [pomodoroMinutes, shortBreakMinutes, longBreakMinutes])

    const handleTimeCompletetion = () => {
        setisRunning(true)

        if (mode === 'pomodoro') {
        const nextCount = pomodoroCount + 1;
        if (nextCount >= 4) {
          setpomodoroCount(4);
          setMode('longBreak');
          settimeLeft(getDurations('longBreak'));
        } else {
          setpomodoroCount(nextCount);
          setMode('shortBreak');
          settimeLeft(getDurations('shortBreak'));
        }
      } else {
        if (mode === 'longBreak') {
          setpomodoroCount(0);
          setisRunning(false)
          // TODO: Later make it so if in settings the auto start new session is enabled it continues automatically
        }
        setMode('pomodoro');
        settimeLeft(getDurations('pomodoro'));
      }
    }

    useEffect(() => {
        if (!isRunning) return

        const timer = setInterval(() => {
            settimeLeft((prev)=> {
                if (prev <= 1) {
                    if (mode == 'pomodoro') {
                    }
                    handleTimeCompletetion()
                    return 0;
                }
                return prev - 1;
            })
        }, 10);

        return () => clearInterval(timer);
    }, [isRunning, mode, pomodoroCount])

    useEffect(() => {
      if (!isRunning) {
        settimeLeft(getDurations(mode));
      }
    }, [pomodoroMinutes, shortBreakMinutes, longBreakMinutes]);

    return (
        <TimerContext.Provider value={{pomodoroMinutes, setPomodoroMinutes, shortBreakMinutes, setShortBreakMinutes, longBreakMinutes, setLongBreakMinutes,  mode, timeLeft, isRunning, pomodoroCount, toggleTimer, resetTimer, changeMode}}>
            {children}
        </TimerContext.Provider>
    )
    
}

export const useTimer = () => {
    const context = useContext(TimerContext)
    if (!context) {
        throw new Error('useTimer must be used within a timeprovider')
    }
    return context
}