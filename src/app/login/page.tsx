import Image from 'next/image'
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
      <div className='bg-white md:m-[50px] xl:m-[100px] w-full md:w-[80%] lg:w-[60%] rounded-lg p-5 md:p-16'>
        <h1 className='text-xl md:text-2xl font-bold text-center'>
          Log into your Onyiisi Account
        </h1>
        <p className='text-sm text-center'>
          Don&apos;t have an account?
          <span className='text-[rgb(95,40,74)] underline pl-2 underline-offset-2'>
            <Link href='/login/sign-up'>Create Account</Link>
          </span>
        </p>
        <form className='flex flex-col justify-center pt-8 gap-6'>
          <div className='relative py-[10px]'>
            <label
              htmlFor='email'
              className='font-semibold text-sm absolute bg-white left-6 top-0 px-2 rounded-full'
            >
              Email Address
            </label>
            <input
              id='email'
              type='email'
              required
              className='border-[1px] border-gray-300 rounded-sm p-3 w-full'
            />
          </div>
          <div className='relative py-[10px]'>
            <label
              htmlFor='password'
              className='font-semibold text-sm absolute bg-white left-6 top-0 px-2 rounded-full'
            >
              Password
            </label>
            <input
              id='password'
              type='password'
              required
              className='border-[1px]  border-gray-300 rounded-sm p-3 w-full'
            />
          </div>
          <div className='flex justify-between py-4'>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='remember'
                name='remember'
                className='border-black'
              />
              <label htmlFor='remember' className='text-sm text-gray-500'>
                Remember me
              </label>
            </div>
            <Link
              href='/login/forgot-password'
              className='text-sm text-blue-500 capitalize'
            >
              forgot password?
            </Link>
          </div>
          <div className='flex justify-center'>
            <input
              type='submit'
              value='login'
              className='text-white bg-[rgb(95,40,74)] py-1 lg:py-2 w-[50%] rounded-full uppercase font-thin justify-center gap-1 lg:gap-2 cursor-pointer'
            />
          </div>
        </form>
        <div className='mt-8 relative flex flex-col justify-center'>
          <hr className='border-1 border-slate-800' />
          <p className='absolute bg-white text-xl p-2 left-[47%]'>or</p>
        </div>
        <div className='flex justify-center'>
          <button className='mt-8 flex justify-center items-center gap-2 border-black border-[1px] text-2xl py-2 rounded-full font-semibold w-[80%]'>
            <Image
              src='/google logo.png'
              alt='google logo'
              height={20}
              width={20}
            />
            use Google
          </button>{' '}
        </div>
      </div>
    </div>
  )
}

export default LoginPage
