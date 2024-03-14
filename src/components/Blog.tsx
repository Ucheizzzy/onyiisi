import { Mail, MoveDownRight } from 'lucide-react'
import Image from 'next/image'
import { blogs } from '@/constants'

export default function Blog() {
  return (
    <div className='p-10 lg:p-20'>
      <div className=''>
        {/* Header  */}
        <div className='flex justify-between'>
          <div className='text-center md:text-start'>
            <h3 className='uppercase text-2xl md:text-xl font-semibold'>
              our blog
            </h3>
            <p className='text-sm font-thin text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, impedit.
            </p>
          </div>
          <button className='text-black py-2 lg:py-3 w-[120px] lg:w-[150px] rounded-full uppercase font-thin text-xs hidden md:flex items-center justify-center gap-1 lg:gap-2 border-2 border-black '>
            learn more
            <span>
              <MoveDownRight className='w-4 lg:w-5 h-4 lg:h-5 pt-1' />
            </span>
          </button>
        </div>

        {/* Blog Carousel  */}
        <div className='flex flex-col md:flex-row items-center gap-6 md:justify-between mt-10 xl:mt-20'>
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className='w-[360px] md:w-[220px] lg:w-[250px] xl:w-[400px] '
            >
              <div className='relative w-[360px] md:w-[220px] lg:w-[250px] xl:w-[400px] h-[290px] md:h-[170px] lg:h-[200px] xl:h-[330px]'>
                <Image
                  className=' rounded-md pb-5  '
                  src={blog.img}
                  alt={blog.title}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className=''>
                <p className='font-thin text-sm text-gray-500'>{blog.date}</p>
                <h3 className='font-bold capitalize '>{blog.title}</h3>
                <p className='text-xs font-thin text-gray-500'>
                  {blog.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Letter  */}
      <div className='flex items-center justify-center'>
        <div className=' py-10 flex flex-col items-center justify-center w-full md:w-[80%] lg:w-[50%]'>
          <h2 className='font-semibold py-2 text-xl text-center '>
            Subscribe to our newsletter to get updates on our{' '}
            <br className='hidden md:flex ' />
            latest drops
          </h2>
          <p className='text-center text-xs font-thin text-gray-500 py-3'>
            Sign-up to receive 10% off your next purchase. Plus hear about new
            arrivals and offers
          </p>
          <div className='relative flex justify-between bg-gray-200 p-1 rounded-full w-[100%]'>
            <input
              type='email'
              name='subscribe email'
              id='email'
              placeholder='Enter your email'
              className=' p-2 rounded-full bg-transparent border-none focus:border-none outline-none w-full'
            />
            <button
              type='submit'
              className=' hidden md:flex items-center right-6 text-white bg-orange-800 px-2 w-[100px] rounded-full uppercase font-thin text-xs'
            >
              Subscribe
            </button>
          </div>
          <button
            type='submit'
            className='md:hidden right-6 text-white bg-orange-800 py-3 w-[200px] rounded-full uppercase font-semibold text-lg mt-5'
          >
            Subscribe
          </button>
          <p className='hidden md:flex text-center text-xs font-thin text-gray-500'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
            eum!
          </p>
        </div>
      </div>
    </div>
  )
}
