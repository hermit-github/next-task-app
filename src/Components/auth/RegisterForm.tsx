import React from 'react'
import { CardWrapper } from './CardWrapper'

type Props = {}

const RegisterForm = (props: Props) => {
  return (
    <CardWrapper
      headerLabel="Register"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial
    >
      Register Form
    </CardWrapper>
  )
}

export default RegisterForm