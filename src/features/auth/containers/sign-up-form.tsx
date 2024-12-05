'use client'


import { AuthFields } from '@/features/auth/ui/field'
import { SubmitButton } from '@/features/auth/ui/submit-button'
import { ErrorMessage } from '@/features/auth/ui/error-message'
import { BottomLink } from '@/features/auth/ui/bottom-link'
import { AuthFormLayout } from '@/features/auth/ui/auth-form-layout'
import { useActionState } from '@/shared/lib/react'
import { signUpAction, SignUpFormState } from '../actions/sign-up'


export function SignUpForm() {
  const [formState, action, isPending] = useActionState(signUpAction, {} as SignUpFormState)

  console.log('SignUpForm', formState)
  return (
    <AuthFormLayout 
    title="Sign up" 
    description="Create an account to get started" 
    action={action}
    fields={<AuthFields {...formState}/>}
    actions={<SubmitButton isPending={isPending}>Sign Up</SubmitButton>} 
    error={<ErrorMessage error={formState.errors?._errors}/>}
    link={<BottomLink text="Already have an account?" linkText="Sign in" url="/sign-in"/>} 
    />);
      

}

