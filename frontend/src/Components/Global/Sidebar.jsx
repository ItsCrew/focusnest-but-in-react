import React from 'react'
import { Link, Links } from 'react-router-dom'
import { Menu, LogOut } from 'lucide-react'
import { useAuth } from '../../Context/AuthContext'
import GoogleLogo from '../../assets/google.svg'


// TODO - Make is so the sidebar is actually hidden rather then just invisible. Since it can still be accessed by using tab. Not a big a deal though

const Sidebar = ({ isOpen, onToggle }) => {
    const { user, isAuthenticated, loading, login, logout } = useAuth()

    const navButtonClass = 'bg-navigation-buttons-dark text-black cursor-pointer w-50 h-9.5 rounded-full flex items-center justify-center hover:bg-navigation-hover-dark transition-all duration-300 ease hover:text-font-dark hover:-translate-y-1.25'

    const handleNavClick = () => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            onToggle()
        }
    }

    return (
        <>
            {isOpen && (
                <div
                    onClick={onToggle}
                    className='fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-xs transition-opacity cursor-pointer'
                />
            )}
            <div className='fixed top-0 left-0 z-50 flex py-4 px-4 items-start pointer-events-none'>
                <div className={`flex flex-col gap-6 h-[95vh] items-center text-lg bg-navbg-dark rounded-2xl transition-all duration-300 ease-in-out overflow-hidden shadow-2xl pointer-events-auto

                    ${isOpen
                        ? 'w-64 px-8 py-6 border-2 border-headings-dark opacity-100'
                        : 'w-0 px-0 py-6 border-0 opacity-0 pointer-events-none'
                    }`}
                >
                    <div className='h-full justify-between w-48 flex flex-col items-center gap-6'>
                        <div>
                            <div className='flex flex-col justify-center items-center font-semibold gap-0.5'>
                                <Link onClick={handleNavClick} className='cursor-pointer' to='/'>Focusnest</Link>
                                <p className='text-xs bg-background-version-dark px-2.5 py-1 rounded-full text-font-version-dark border border-border-version-dark'>v2.2.1</p>
                                <hr className='w-26 mt-2 ' />
                            </div>
                            <div className='flex flex-col gap-7 justify-center items-center py-2 text-base font-semibold'>
                                <Link onClick={handleNavClick} className={navButtonClass} to='/Home'>Home</Link>
                                <Link onClick={handleNavClick} className={navButtonClass} to='/Tasks'>Tasks</Link>
                                <Link onClick={handleNavClick} className={navButtonClass} to='/Notes'>Notes</Link>
                                <Link onClick={handleNavClick} className={navButtonClass} to='/Appearance'>Appearance</Link>
                                <Link onClick={handleNavClick} className={navButtonClass} to='/Settings'>Settings</Link>
                            </div>
                        </div>
                    <div className='flex flex-col justify-center items-center py-2 text-base font-semibold'>
                        {isAuthenticated ? (
                            <div className='flex flex-col items-center w-50 gap-2.5'>
                                <div className='flex items-center gap-2.5 w-full px-2.5 py-2 rounded-xl bg-background-version-dark border border-border-version-dark/50'>
                                    {user?.profilePicture ? (
                                        <img
                                            src={user.profilePicture}
                                            alt={user.displayName || 'Avatar'}
                                            className='w-9 h-9 rounded-full border border-headings-dark shrink-0 object-cover'
                                            referrerPolicy='no-referrer'
                                        />
                                    ) : (
                                        <div className='w-9 h-9 rounded-full bg-headings-dark text-background-dark flex items-center justify-center font-bold text-sm shrink-0'>
                                            {user?.displayName ? user.displayName[0].toUpperCase() : 'U'}
                                        </div>
                                    )}
                                    <div className='flex flex-col min-w-0 flex-1 leading-tight text-left'>
                                        <p className='text-sm font-semibold text-font-dark truncate'>{user?.displayName || 'User'}</p>
                                        <p className='text-xs text-font-version-dark truncate'>{user?.email || ''}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={logout}
                                    className='cursor-pointer w-full h-9 rounded-full flex items-center justify-center gap-2 text-sm font-semibold border border-red-400/40 text-red-300 hover:bg-red-500/15 hover:border-red-400 transition-all duration-300 ease hover:-translate-y-0.5'
                                >
                                    <LogOut size={15} />
                                    Log out
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={login}
                                className={`bg-white text-black cursor-pointer w-50 h-9.5 gap-1 rounded-full flex items-center justify-center transition-all hover:bg-gray-100 duration-300 ease hover:-translate-y-1.25`}>
                                <img src={GoogleLogo} alt="Logo" width={30} height={30} />
                                Sign in with Google
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <button
                type='button'
                onClick={onToggle}
                aria-label='Toggle navigation menu'
                className='m-2 cursor-pointer shrink-0 text-white hover:text-headings-dark transition-colors pointer-events-auto'
            >
                <Menu size={32} />
            </button>
        </div>
        </>
    )
}

export default Sidebar