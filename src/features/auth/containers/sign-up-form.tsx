'use client'


import { AuthFields } from '@/features/auth/ui/field'
import { SubmitButton } from '@/features/auth/ui/submit-button'
import { ErrorMessage } from '@/features/auth/ui/error-message'
import { BottomLink } from '@/features/auth/ui/bottom-link'
import { AuthFormLayout } from '@/features/auth/ui/auth-form-layout'
import { mapLeft, right } from '@/shared/lib/either'
import { useActionState } from '@/shared/lib/react'
import { signUpAction } from '../actions/sign-up'


export function SignUpForm() {
  const [formState, action, isPending] = useActionState(signUpAction, right(undefined))

  console.log('SignUpForm', formState)
  return (
    <AuthFormLayout 
    title="Sign up" 
    description="Create an account to get started" 
    action={action}
    fields={<AuthFields />}
    actions={<SubmitButton isPending={isPending}>Sign Up</SubmitButton>} 
    error={<ErrorMessage error={formState.error}/>}
    link={<BottomLink text="Already have an account?" linkText="Sign in" url="/sign-in"/>} 
    />);
      

}

