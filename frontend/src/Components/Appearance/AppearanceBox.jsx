import React, { useState, useRef } from 'react'
import { Palette, ChevronDown } from 'lucide-react'
import { useTheme } from '../../Context/ThemeContext'
import GradientModal from './GradientModal';

const AppearanceBox = () => {
    const [themeOpen, setThemeOpen] = useState(false)
    const { theme, setTheme, bgType, setbgType, setSolidColor, setGradient } = useTheme();

    const [bgOpen, setBgOpen] = useState(false)
    const [selectedBg, setSelectedBg] = useState('None')

    const [uiOpen, setUiOpen] = useState(false)
    const [selectedUi, setSelectedUi] = useState('Coming Soon')
    const [isGradientModalOpen, setIsGradientModalOpen] = useState(false);
    const colorInputRef = useRef(null);

    const themeLabels = {
        dark: 'Dark Mode',
        light: 'Light Mode',
        system: 'Sync with system'
    }

    const backgroundLabels = {
        none: "None",
        solid: "Solid Colour",
        gradient: "Gradient Background"
    }

    return (
        <div className='flex flex-col gap-2 py-2 text-font-dark'>
            {/* Theme Selector */}
            <label className='flex items-center gap-2 text-lg font-medium'>
                <Palette size={20} className='text-headings-dark' /> Choose a Theme
            </label>
            <div className='relative w-[20vw] min-w-55'>
                <div
                    onClick={() => setThemeOpen(!themeOpen)}
                    className='flex items-center justify-between h-12 px-4 bg-navbg-dark rounded-xl border border-headings-dark cursor-pointer select-none text-base'
                >
                    <span>{themeLabels[theme] || 'Sync with system'}</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${themeOpen ? 'rotate-180' : ''}`} />
                </div>
                {themeOpen && (
                    <>
                        <div
                            onClick={() => setThemeOpen(false)}
                            className="fixed inset-0 z-10"
                        />
                        <div className='absolute top-full left-0 right-0 mt-1 bg-background-dark border border-headings-dark rounded-xl z-20 overflow-hidden shadow-xl text-base'>
                            <div
                                onClick={() => { setTheme('dark'); setThemeOpen(false); }}
                                className='px-4 py-2.5 hover:bg-navigation-hover-dark transition-colors cursor-pointer'
                            >
                                Dark Mode
                            </div>
                            <div
                                onClick={() => { setTheme('light'); setThemeOpen(false); }}
                                className='px-4 py-2.5 hover:bg-navigation-hover-dark transition-colors cursor-pointer'
                            >
                                Light Mode
                            </div>
                            <div
                                onClick={() => { setTheme('system'); setThemeOpen(false); }}
                                className='px-4 py-2.5 hover:bg-navigation-hover-dark transition-colors cursor-pointer'
                            >
                                Sync with system
                            </div>
                        </div>
                    </>
                )}
            </div>

            <hr className='my-3 border-border-version-dark/30' />

            {/* Background Options */}
            <label className='flex items-center gap-2 text-lg font-medium'>
                <Palette size={20} className='text-headings-dark' /> Background Options
            </label>
            <div className='relative w-[20vw] min-w-55'>
                <input type="color" className='hidden' ref={colorInputRef} onChange={(e) => { setSolidColor(e.target.value); setbgType('solid') }} />
                <div
                    onClick={() => setBgOpen(!bgOpen)}
                    className='flex items-center justify-between h-12 px-4 bg-navbg-dark rounded-xl border border-headings-dark cursor-pointer select-none text-base'
                >
                    <span>{backgroundLabels[bgType] || 'None'}</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${bgOpen ? 'rotate-180' : ''}`} />
                </div>
                {bgOpen && (
                    <>
                        <div
                            onClick={() => setBgOpen(false)}
                            className="fixed inset-0 z-10"
                        />
                        <div className='absolute top-full left-0 right-0 mt-1 bg-background-dark border border-headings-dark rounded-xl z-20 overflow-hidden shadow-xl text-base'>
                            <div
                                onClick={() => { setbgType('none'); setBgOpen(false); }}
                                className='px-4 py-2.5 hover:bg-navigation-hover-dark transition-colors cursor-pointer'
                            >
                                None
                            </div>
                            <div
                                onClick={() => { setbgType('solid'); setBgOpen(false); colorInputRef.current.click(); }}
                                className='px-4 py-2.5 hover:bg-navigation-hover-dark transition-colors cursor-pointer'
                            >
                                Solid Colour
                            </div>
                            <div
                                onClick={() => { setIsGradientModalOpen(true); setBgOpen(false); }}
                                className='px-4 py-2.5 hover:bg-navigation-hover-dark transition-colors cursor-pointer'
                            >
                                Gradient Background
                            </div>
                        </div>
                    </>
                )}
            </div>

            <hr className='my-3 border-border-version-dark/30' />

            {/* UI Density */}
            <label className='flex items-center gap-2 text-lg font-medium'>
                <Palette size={20} className='text-headings-dark' /> UI Density
            </label>
            <div className='relative w-[20vw] min-w-55'>
                <div
                    onClick={() => setUiOpen(!uiOpen)}
                    className='flex items-center justify-between h-12 px-4 bg-navbg-dark rounded-xl border border-headings-dark select-none text-base'
                >
                    <span>{selectedUi}</span>
                    {/* <ChevronDown size={18} className={`transition-transform duration-300 ${uiOpen ? 'rotate-180' : ''}`} /> */}
                </div>
                {uiOpen && (
                    <>
                        {/* <div className='absolute top-full left-0 right-0 mt-1 bg-background-dark border border-headings-dark rounded-xl z-20 overflow-hidden shadow-xl text-base'>
                            <div
                                onClick={() => { setSelectedUi('Compact Mode'); setUiOpen(false); }}
                                className='px-4 py-2.5 hover:bg-navigation-hover-dark transition-colors cursor-pointer'
                            >
                                Compact Mode
                            </div>
                            <div
                                onClick={() => { setSelectedUi('Comfy Mode'); setUiOpen(false); }}
                                className='px-4 py-2.5 hover:bg-navigation-hover-dark transition-colors cursor-pointer'
                            >
                                Comfy Mode
                            </div>
                        </div> */}
                    </>
                )}
            </div>

            <hr className='my-3 border-border-version-dark/30' />

            {/* Reset Button */}
            <div className='flex justify-center items-center pt-2 pb-1'>
                <button
                    type='button'
                    onClick={() => {
                        setTheme('system')
                        setbgType('none')
                    }}
                    className='h-11.25 w-37.5 bg-headings-dark hover:bg-[#5e7f64] active:scale-95 hover:scale-105 text-white font-medium rounded-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-200 cursor-pointer flex items-center justify-center text-base'
                >
                    Reset to Default
                </button>
            </div>

            <GradientModal
                isOpen={isGradientModalOpen}
                onClose={() => setIsGradientModalOpen(false)}
                onApply={(gradientString) => {
                    setGradient(gradientString);
                    setbgType('gradient');
                }}
            />
        </div>
    )
}

export default AppearanceBox