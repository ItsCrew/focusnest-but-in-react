import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import Theme from '../Components/Global/Theme'
import AuthCard from '../Components/Auth/AuthCard'
import AuthHeader from '../Components/Auth/AuthHeader'
import GoogleButton from '../Components/Auth/GoogleButton'
import AuthDivider from '../Components/Auth/AuthDivider'
import AuthFeatures from '../Components/Auth/AuthFeatures'
import { User } from 'lucide-react'

const Welcome = () => {
  const { isAuthenticated, loading, login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate('/home')
    }
  }, [isAuthenticated, loading, navigate])

  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center p-4 relative dark:bg-[#1e2d24] bg-background-light transition-colors'>
      <Theme />

      <AuthCard>
        <AuthHeader
          title="Welcome to FocusNest"
          subtitle="Your productivity companion for focused work"
        />

        <GoogleButton onClick={login} />

        <AuthDivider />

        <Link
          to='/home'
          className='w-full h-12 rounded-xl border dark:border-[#4c6b54] border-black/20 dark:hover:bg-[#4c6b54]/20 hover:bg-black/5 dark:text-[#c7dfcd] text-font-light font-medium text-[15px] flex items-center justify-center gap-1 transition-all'
        >
          <User size={18} className='dark:text-[#9bb8a2] text-neutral-600' />
          <span>Continue as Guest</span>
        </Link>

        <AuthFeatures />
      </AuthCard>
    </div>
  )
}

export default Welcome
