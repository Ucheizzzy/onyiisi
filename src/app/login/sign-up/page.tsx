import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignUpPage = () => {
  // Minimum Number Of Years
  const minYear = 1900
  const maxYear = new Date().getFullYear()

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
      <div className='bg-white w-full md:w-[80%] lg:w-[60%] xl:w-[50%] my-[80px] md:my-[150px] rounded-lg p-5 md:p-16'>
        <h1 className='text-2xl font-bold text-center'>
          Create your Onyiisi Account
        </h1>
        <p className='text-sm text-center'>
          Already have an account?
          <span className='text-[rgb(95,40,74)] pl-2 underline'>
            <Link href='/login'>Log In</Link>
          </span>
        </p>
        <form className='flex flex-col w-full justify-center pt-8 gap-6'>
          <div className='flex gap-2'>
            <div className='flex-1 relative py-[10px]'>
              <label
                htmlFor='firstName'
                className='font-semibold text-sm absolute bg-white left-6 top-0 px-2 rounded-full'
              >
                First Name
              </label>
              <input
                type='text'
                name='First Name'
                id='firstName'
                className='border-[1px] w-full border-gray-300 rounded-sm p-3'
              />
            </div>
            <div className='flex-1 relative py-[10px]'>
              <label
                htmlFor='lastName'
                className='font-semibold text-sm absolute bg-white left-6 top-0 px-2 rounded-full'
              >
                Last Name
              </label>
              <input
                type='text'
                name='Last Name'
                id='lastName'
                className='border-[1px] w-full border-gray-300 rounded-sm p-3'
              />
            </div>
          </div>
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
              className='border-[1px] w-full border-gray-300 rounded-sm p-3'
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
              className='border-[1px] w-full border-gray-300 rounded-sm p-3'
            />
          </div>
          <div className='relative py-[10px]'>
            <label
              htmlFor='confirmPassword'
              className='font-semibold text-sm absolute bg-white left-6 top-0 px-2 rounded-full'
            >
              Confirm Password
            </label>
            <input
              id='confirmPassword'
              type='password'
              required
              className='border-[1px] w-full border-gray-300 rounded-sm p-3'
            />
          </div>
          <div className=''>
            <p className='font-semibold text-sm'>
              Gender <span className='text-slate-400 px-1'>(optional)</span>
            </p>
            <div className='flex justify-between w-[50%] pt-2'>
              <div className='flex gap-2 items-center'>
                <input type='radio' name='male' id='male' className='h-5 w-5' />
                <label htmlFor='male' className='text-sm'>
                  Male
                </label>
              </div>
              <div className='flex gap-2 items-center'>
                <input
                  type='radio'
                  name='female'
                  id='female'
                  className='h-5 w-5'
                />
                <label htmlFor='female' className='text-sm'>
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <p className='capitalize font-semibold text-sm'>
              date of birth <span className='text-slate-400'>(optional)</span>
            </p>
            <div className='flex gap-3 pt-3'>
              <div className='relative py-[10px] w-1/3'>
                <label
                  htmlFor='month'
                  className='font-semibold text-sm absolute bg-white left-6 top-0 capitalize px-2 rounded-full'
                >
                  month
                </label>
                <input
                  type='number'
                  name='month'
                  id='month'
                  min={1}
                  max={12}
                  className='border-[1px] w-full border-gray-300 rounded-sm p-3'
                />
              </div>
              <div className='relative py-[10px] w-1/3'>
                <label
                  htmlFor='day'
                  className='font-semibold text-sm absolute bg-white left-6 top-0 capitalize px-2 rounded-full'
                >
                  day
                </label>
                <input
                  type='number'
                  name='day'
                  id='day'
                  min={1}
                  max={31}
                  className='border-[1px] w-full border-gray-300 rounded-sm p-3'
                />
              </div>
              <div className='relative py-[10px] w-1/3'>
                <label
                  htmlFor='year'
                  className='font-semibold text-sm absolute bg-white left-6 capitalize top-0 px-2 rounded-full'
                >
                  year
                </label>
                <input
                  type='number'
                  name='year'
                  id='year'
                  min={minYear}
                  max={maxYear}
                  className='border-[1px] w-full border-gray-300 rounded-sm p-3'
                />
              </div>
            </div>
          </div>
          <div className='py-4'>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='remember'
                name='remember'
                className='border-black'
              />
              <label htmlFor='remember' className='text-sm text-gray-600'>
                Please send <span className='font-semibold'>Onyiisi</span>{' '}
                updates directly to my inbox.
              </label>
            </div>
            <p className='text-sm text-gray-600 pt-3'>
              You may cancel your subscription at any time. By ticking here, you
              agree that you understand our{' '}
              <Link href='/' className='font-semibold text-[rgb(95,40,74)]'>
                Terms of Use
              </Link>{' '}
              and{' '}
              <Link href='/' className='font-semibold text-[rgb(95,40,74)]'>
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className='flex justify-center'>
            <input
              type='submit'
              value='Create Account'
              className='text-white bg-[rgb(95,40,74)] py-1 lg:py-2 w-[50%] rounded-full uppercase font-thin justify-center gap-1 lg:gap-2 cursor-pointer'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
