'use client'
import { CustomFormFields } from '@/components/forms/custom-form-field'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { SignUpFormSchema, type SignUpFormType } from '@/lib/types'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const SignUpPage = () => {
  const form = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: SignUpFormType) => {
    console.log(data)
  }
  return (
    <div
      className='bg-image py-20 flex items-center justify-center'
      style={{
        backgroundImage: 'url(loginImg.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <div className='bg-white m-[100px] rounded-lg p-16'>
        <h1 className='text-2xl font-bold text-center'>Sign up</h1>
        <p className='text-sm text-center'>
          Have an account?{' '}
          <span className='text-orange-800 underline'>
            <Link href='/sign-up'>Login</Link>
          </span>
        </p>

        <Form {...form}>
          <form
            className='flex flex-col justify-center pt-8 gap-6'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <CustomFormFields name='name' control={form.control} />
            <CustomFormFields name='email' control={form.control} />
            <CustomFormFields
              name='password'
              control={form.control}
              type='password'
            />
            <div className='flex justify-between py-4'>
              <div className=''>
                <input
                  type='checkbox'
                  id='remember'
                  className=' rounded-full'
                />{' '}
                <label htmlFor='remember' className='text-sm text-gray-500'>
                  Remember me
                </label>
              </div>
              <Link href='/login' className='text-sm text-blue-500 capitalize'>
                forgot password?
              </Link>
            </div>
            <div className='flex justify-center'>
              <Button className='text-white bg-orange-800 py-1 lg:py-2 w-[50%] rounded-full uppercase font-thin justify-center gap-1 lg:gap-2 '>
                Sign Up
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default SignUpPage
