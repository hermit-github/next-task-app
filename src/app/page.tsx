import { LoginButton } from '@/Components/auth/LoginButton'
import { Button } from '@/Components/ui/button'
import React from 'react'

type Props = {}

const AuthPage = (props: Props) => {
  return (
    <main className="flex h-screen flex-col items-center justify-center gradientBgColor">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          🔐 Taskify
        </h1>
        <p className="text-white text-lg">
          A simple todo application
        </p>
        <div className="">
        <LoginButton>
          <Button variant="secondary" size="lg">
                Sign in
          </Button>
        </LoginButton>
        </div>
      </div>
    </main>
  )
}

export default AuthPage