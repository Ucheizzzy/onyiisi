import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Carousel() {
  return (
    <div className='flex flex-col md:flex-row justify-around content-center items-center relative '>
      <div className='flex flex-col items-center'>
        <div className='relative h-[225px] lg:h-[300px] xl:h-[400px] w-[213px] lg:w-[284px] xl:w-[379px] overflow-hidden'>
          <Image
            src='/70.jpg'
            alt='percent cut'
            layout='fill'
            objectFit='cover'
            className='rounded-xl transform hover:scale-110 transition-transform ease-in-out duration-500'
          />
          <div className='bg-white absolute left-3 top-6'>
            <p className='px-3 py-[2px]'>-70%</p>
          </div>
        </div>
        <div className='flex flex-col gap-1 w-[75%] mt-2'>
          <p className=' font-semibold text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className='text-xs font-thin'>Platinum</p>
          <p className=' text-yellow-600 '>$674</p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='relative h-[225px] lg:h-[300px] xl:h-[400px] w-[213px] lg:w-[284px] xl:w-[379px] overflow-hidden'>
          <Image
            src='/trendingCarousel.jpg'
            alt='trending'
            layout='fill'
            objectFit='cover'
            className='rounded-xl transform hover:scale-110 transition-transform ease-in-out duration-500'
          />
          <div className='bg-white absolute left-3 top-6'>
            <p className='px-3 py-[2px] uppercase'>trending</p>
          </div>
        </div>
        <div className='flex flex-col gap-1 w-[75%] mt-2'>
          <p className=' font-semibold text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className='text-xs font-thin'>Platinum</p>
          <p className=' text-yellow-600 '>$674</p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='relative h-[225px] lg:h-[300px] xl:h-[400px] w-[213px] lg:w-[284px] xl:w-[379px] overflow-hidden'>
          <Image
            src='/limitedCarousel.jpg'
            alt='limited'
            layout='fill'
            objectFit='cover'
            className='rounded-xl transform hover:scale-110 transition-transform ease-in-out duration-500'
          />
          <div className='bg-white absolute left-3 top-6'>
            <p className='px-3 py-[2px] uppercase'>Limited</p>
          </div>
        </div>
        <div className='flex flex-col gap-1 w-[75%] mt-2'>
          <p className=' font-semibold text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className='text-xs font-thin'>Platinum</p>
          <p className=' text-yellow-600 '>$674</p>
        </div>
      </div>
      {/* <ChevronLeft className='absolute left-0 cursor-pointer hover:scale-150 ease-in-out duration-300' />
      <ChevronRight className='absolute right-0 cursor-pointer hover:scale-150 ease-in-out duration-300' /> */}
    </div>
  )
}
