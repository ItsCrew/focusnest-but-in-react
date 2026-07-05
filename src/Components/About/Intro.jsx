import React from 'react'
import { MoveRight } from 'lucide-react'

const Intro = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-4'>
            <h1 className='text-headings-dark text-[45px] font-semibold'>What is Focusnest?</h1>
            <div className='px-89 py-5'>
            <p className=' text-xl'>FocusNest is your ultimate productivity companion, built around the proven Pomodoro Technique. Whether you're studying for exams, coding your next project, or tackling important work tasks — FocusNest creates the perfect environment to maximize your focus and maintain sustainable productivity.</p>
            <p className=' text-xl'>Our intelligent timer automatically manages your work-break cycles, so you can stop watching the clock and start achieving your goals. With smart task management and personalized customization, FocusNest adapts to your unique workflow.</p>
            </div>
            <button className='bg-headings-dark flex justify-center gap-1 h-11 items-center text-lg p-5 rounded-xl text-background-dark hover:text-headings-dark hover:bg-navbg-dark cursor-pointer hover:border-2 hover:border-headings-dark transition-all duration-300 ease shadow-[0_4px_12px_rgba(107,143,113,0.3)] hover:shadow-[0_6px_20px_rgba(107,143,113,0.4)]' >Start Being Productive!<MoveRight /></button>
        </div>
    )
}

export default Intro