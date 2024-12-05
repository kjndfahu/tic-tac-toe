'use client'

import { AuthFields } from '@/features/auth/ui/field'
import { SubmitButton } from '@/features/auth/ui/submit-button'
import { ErrorMessage } from '@/features/auth/ui/error-message'
import { BottomLink } from '@/features/auth/ui/bottom-link'
import { AuthFormLayout } from '@/features/auth/ui/auth-form-layout'
import { useActionState } from '@/shared/lib/react'
import { signInAction, SignInFormState } from '../actions/sign-in'
import { routes } from '@/kernel/routes'

export function SignInForm() {
  const [formState, action, isPending] = useActionState(signInAction, {} as SignInFormState)

  console.log('SignInForm', formState)
  return (
    <AuthFormLayout 
    title="Sign in" 
    description="Welcome back! Please sign in to your account" 
    action={action}
    fields={<AuthFields {...formState}/>}
    actions={<SubmitButton isPending={isPending}>Sign In</SubmitButton>} 
    error={<ErrorMessage error={formState.errors?._errors}/>}
    link={<BottomLink text="Don't have an account?" linkText="Sign Up" url={routes.signUp()}/>} 
    />);
      

}

