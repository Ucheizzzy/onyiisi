import { ChevronLeft, ChevronRight, MoveDownRight } from 'lucide-react'
import Image from 'next/image'

export default function Categories() {
  return (
    <div className='pb-10'>
      <h1 className='text-2xl font-bold uppercase text-center mb-4'>
        top categories
      </h1>
      <div className='p-18 xl:p-20'>
        {/* Type of Orders  */}
        <div className='flex items-center justify-evenly mb-10 '>
          <div className='w-[352px] lg:w-[470px] xl:w-[628px] h-[267px] lg:h-[356px] xl:h-[475px] relative flex justify-center items-center'>
            <Image
              src='/Trending.jpg'
              alt='Trending'
              layout='fill'
              objectFit='cover'
            />
            <div className='absolute text-center'>
              <h3 className='capitalize text-white text-2xl font-thin pb-2'>
                trending
              </h3>
              <button className='text-white bg-orange-800 py-2 lg:py-3 w-[100px] lg:w-[150px] rounded-full uppercase font-thin text-xs flex items-center justify-center gap-1 lg:gap-2 '>
                learn more
                <span>
                  <MoveDownRight className='w-4 lg:w-5 h-4 lg:h-5 pt-1' />
                </span>
              </button>
            </div>
          </div>
          <div className='w-[352px] lg:w-[470px] xl:w-[628px] h-[267px] lg:h-[356px] xl:h-[475px] relative flex justify-center items-center'>
            <Image
              src='/Limited.jpg'
              alt='Limited'
              layout='fill'
              objectFit='cover'
            />
            <div className='absolute text-center'>
              <h3 className='capitalize text-white text-2xl font-thin pb-2'>
                limited
              </h3>
              <button className='text-white bg-orange-800 py-2 lg:py-3 w-[100px] lg:w-[150px] rounded-full uppercase font-thin text-xs flex items-center justify-center gap-1 lg:gap-2 '>
                learn more
                <span>
                  <MoveDownRight className='w-4 lg:w-5 h-4 lg:h-5 pt-1' />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className='flex justify-around items-center relative '>
          <div className=''>
            <div className='relative h-[300px] xl:h-[400px] w-[284px] xl:w-[379px] '>
              <Image
                src='/70.jpg'
                alt='percent cut'
                layout='fill'
                objectFit='cover'
                className='rounded-xl'
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
          <div className=''>
            <div className='relative h-[300px] xl:h-[400px] w-[284px] xl:w-[379px] '>
              <Image
                src='/trendingCarousel.jpg'
                alt='trending'
                layout='fill'
                objectFit='cover'
                className='rounded-xl'
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
          <div className=''>
            <div className='relative h-[300px] xl:h-[400px] w-[284px] xl:w-[379px]'>
              <Image
                src='/limitedCarousel.jpg'
                alt='limited'
                layout='fill'
                objectFit='cover'
                className='rounded-xl'
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
          <ChevronLeft className='absolute left-0 cursor-pointer hover:scale-150 ease-in-out duration-300' />
          <ChevronRight className='absolute right-0 cursor-pointer hover:scale-150 ease-in-out duration-300' />
        </div>
      </div>
    </div>
  )
}
