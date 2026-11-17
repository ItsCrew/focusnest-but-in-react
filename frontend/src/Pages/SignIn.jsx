import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import Theme from '../Components/Global/Theme'
import AuthCard from '../Components/Auth/AuthCard'
import AuthHeader from '../Components/Auth/AuthHeader'
import GoogleButton from '../Components/Auth/GoogleButton'
import AuthFeatures from '../Components/Auth/AuthFeatures'

const SignIn = () => {
  const { isAuthenticated, loading, login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate('/tasks', { replace: true })
    }
  }, [isAuthenticated, loading, navigate])

  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center p-4 relative dark:bg-[#1e2d24] bg-background-light'>
      <Theme />

      <AuthCard>
        <AuthHeader
          title="Sign in required"
          subtitle="Sign in to save, organize, and sync your tasks across devices"
        />

        <GoogleButton onClick={login} />

        <AuthFeatures />
      </AuthCard>
    </div>
  )
}

export default SignIn
