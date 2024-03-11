import { Mail, MoveDownRight } from 'lucide-react'
import FeedbackCarousel from './FeedbackCarousel'
import Image from 'next/image'

const blogs = [
  {
    id: '1',
    img: '/blog img.jpg',
    date: 'jan 24, 2024',
    title: 'blog header',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias fugit doloribus incidunt deserunt ipsum distinctio culpa labore aperiam, corporis repellendus quod enim id! Dolorem officia provident ab aspernatur pariatur.',
  },
  {
    id: '2',
    img: '/blog img.jpg',
    date: 'feb 14, 2024',
    title: 'blog header',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias fugit doloribus incidunt deserunt ipsum distinctio culpa labore aperiam, corporis repellendus quod enim id! Dolorem officia provident ab aspernatur pariatur.',
  },
  {
    id: '3',
    img: '/blog img.jpg',
    date: 'mar 10, 2024',
    title: 'blog header',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias fugit doloribus incidunt deserunt ipsum distinctio culpa labore aperiam, corporis repellendus quod enim id! Dolorem officia provident ab aspernatur pariatur.',
  },
]

export default function Blog() {
  return (
    <div className='p-10 lg:p-20'>
      <div className=''>
        {/* Header  */}
        <div className='flex justify-between'>
          <div className=''>
            <h3 className='uppercase text-xl font-semibold'>our blog</h3>
            <p className='text-xs font-thin text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, impedit.
            </p>
          </div>
          <button className='text-black py-2 lg:py-3 w-[120px] lg:w-[150px] rounded-full uppercase font-thin text-xs flex items-center justify-center gap-1 lg:gap-2 border-2 border-black '>
            learn more
            <span>
              <MoveDownRight className='w-4 lg:w-5 h-4 lg:h-5 pt-1' />
            </span>
          </button>
        </div>

        {/* Blog Carousel  */}
        <div className='flex justify-between mt-10 xl:mt-20'>
          {blogs.map((blog, idx) => (
            <div key={idx} className='w-[220px] lg:w-[250px] xl:w-[400px] '>
              <div className='relative w-[220px] lg:w-[250px] xl:w-[400px] h-[170px] lg:h-[200px] xl:h-[330px]'>
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
        <div className=' py-10 flex flex-col items-center justify-center w-[80%] lg:w-[50%]'>
          <h2 className='font-semibold py-3 text-xl text-center '>
            Subscribe to our newsletter to get updates on our <br />
            latest drops
          </h2>
          <p className='text-center text-xs font-thin text-gray-500 pb-2'>
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
              className=' right-6 text-white bg-orange-800 px-2 w-[100px] rounded-full uppercase font-thin text-xs'
            >
              Subscribe
            </button>
          </div>
          <p className='text-center text-xs font-thin text-gray-500'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
            eum!
          </p>
        </div>
      </div>
    </div>
  )
}
