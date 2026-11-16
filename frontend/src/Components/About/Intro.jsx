import React from 'react'
import { MoveRight } from 'lucide-react'
import { Link, Links } from 'react-router-dom'

// TODO: Make the button go to sign up page instead of home later when i am done with making the signup page

const Intro = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-4 py-8 px-4'>
            <h1 className='text-headings-dark text-3xl sm:text-[45px] font-semibold text-center'>What is Focusnest?</h1>
            <div className='max-w-4xl px-4 sm:px-8 py-5 text-center flex flex-col gap-4'>
            <p className='text-base sm:text-xl leading-relaxed'>FocusNest is your ultimate productivity companion, built around the proven Pomodoro Technique. Whether you're studying for exams, coding your next project, or tackling important work tasks — FocusNest creates the perfect environment to maximize your focus and maintain sustainable productivity.</p>
            <p className='text-base sm:text-xl leading-relaxed'>Our intelligent timer automatically manages your work-break cycles, so you can stop watching the clock and start achieving your goals. With smart task management and personalized customization, FocusNest adapts to your unique workflow.</p>
            </div>
            <Link to='/Home'>
                <button className='bg-headings-dark flex justify-center gap-2 h-11 items-center text-base sm:text-lg px-6 py-5 rounded-xl text-background-dark hover:text-headings-dark hover:bg-navbg-dark cursor-pointer hover:border-2 hover:border-headings-dark transition-all duration-300 ease shadow-[0_4px_12px_rgba(107,143,113,0.3)] hover:shadow-[0_6px_20px_rgba(107,143,113,0.4)]' >Start Being Productive!<MoveRight size={20} /></button>
            </Link>
        </div>
    )
}

export default Intro