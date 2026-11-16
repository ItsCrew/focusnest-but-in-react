import React from 'react'

const EverythingYouNeed = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-4 py-8 px-4'>
            <h1 className='text-headings-dark text-3xl sm:text-[45px] font-semibold text-center'>Everything you need to stay focused</h1>
            <div className='max-w-4xl px-4 sm:px-8 py-5 text-center flex flex-col gap-4'>
                <p className='text-base sm:text-xl leading-relaxed'>FocusNest is your ultimate productivity companion, built around the proven Pomodoro Technique. Whether you're studying for exams, coding your next project, or tackling important work tasks — FocusNest creates the perfect environment to maximize your focus and maintain sustainable productivity.</p>
                <p className='text-base sm:text-xl leading-relaxed'>Our intelligent timer automatically manages your work-break cycles, so you can stop watching the clock and start achieving your goals. With smart task management and personalized customization, FocusNest adapts to your unique workflow.</p>
            </div>
        </div>
    )
}

export default EverythingYouNeed