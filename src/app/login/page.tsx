import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
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
        <h1 className='text-2xl font-bold text-center'>
          Log into your Onyiisi Account
        </h1>
        <p className='text-sm text-center'>
          Don&apos;t have an account?
          <span className='text-orange-800 underline'>
            <Link href='/sign-up'>Create Account</Link>
          </span>
        </p>
        <form className='flex flex-col justify-center pt-8 gap-6'>
          <input
            type='email'
            placeholder='Email Address'
            required
            className='border-[1px] border-gray-300 rounded-sm p-3 w-[500px]'
          />
          <input
            type='password'
            placeholder='Password'
            required
            className='border-[1px] border-gray-300 rounded-sm p-3 w-[500px]'
          />
        </form>
        <div className='flex justify-between py-4'>
          <div className=''>
            <input type='checkbox' id='remember' className=' rounded-full' />{' '}
            <label htmlFor='remember' className='text-sm text-gray-500'>
              Remember me
            </label>
          </div>
          <Link href='/login' className='text-sm text-blue-500 capitalize'>
            forgot password?
          </Link>
        </div>
        <div className='flex justify-center'>
          <button className='text-white bg-orange-800 py-1 lg:py-2 w-[50%] rounded-full uppercase font-thin justify-center gap-1 lg:gap-2 '>
            login
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
