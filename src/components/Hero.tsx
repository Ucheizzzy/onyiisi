import Image from 'next/image'
import { MoveDownRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className='py-20'>
      <div className='px-20 uppercase text-7xl mt-8'>
        <h1 className='font-thin text-orange-800'>radiating Luxury</h1>
        <h1 className='font-extrabold'>one gleam at a time.</h1>
      </div>
      <div className=''>
        <div className='w-full h-[729px] relative my-10 z-0'>
          <Image
            src='/Hero.png'
            alt='Hero Onyiisi'
            layout='fill'
            objectFit='cover'
          />
          <div className='absolute bottom-20 left-20 w-[500px] flex flex-col gap-5'>
            <p className='text-2xl'>
              Discover Exquisite Jewelry Crafted from Pure Gold and Platinum
            </p>
            <button className='text-white bg-orange-800 py-3 w-[150px] rounded-full uppercase font-thin text-xs flex items-center justify-center gap-2 '>
              shop now
              <span>
                <MoveDownRight className='w-5 h-5 pt-1' />
              </span>
            </button>
            <div className='flex gap-1 '>
              <button className='text-white text-[16px] bg-orange-800 py-[2px] w-[50px] border-none rounded-full'>
                {' '}
              </button>
              <button className='border-[1px] border-orange-800 py-[2px] w-[50px] rounded-full'>
                {' '}
              </button>
              <button className='border-[1px] border-orange-800 py-[2px] w-[50px] rounded-full'>
                {' '}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center content-center gap-16 px-[150px]'>
        <div className=' flex-1 text-center flex flex-col gap-5 content-center items-center'>
          <div className='h-20 w-20 relative'>
            <Image
              src='/Weight.svg'
              alt='Metal Weight Valuation'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className=''>
            <h2 className='font-bold text-xl capitalize pb-1'>
              metal-weight valuation
            </h2>
            <p className='text-sm'>
              At Onnyiisi, our unique pricing strategy guarantees that the price
              of our exquisite jewellery is established by the weight of
              precious metals like gold and platinum.
            </p>
          </div>
        </div>
        <div className=' flex-1 text-center flex flex-col gap-5 content-center items-center'>
          <div className='h-20 w-20 relative'>
            <Image
              src='/Signature.svg'
              alt='Signature Custom Creations'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className=''>
            <h2 className='font-bold text-xl capitalize pb-1'>
              Signature Custom Creations
            </h2>
            <p className='text-sm'>
              Onnyiisi enables luxury jewelry customization, offering intricate
              designs and meaningful engravings for a uniquely personalized
              touch.
            </p>
          </div>
        </div>
        <div className=' flex-1 text-center flex flex-col gap-5 content-center items-center'>
          <div className='h-20 w-20 relative'>
            <Image
              src='/Package.svg'
              alt='Protected shipping guaranteed'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className=''>
            <h2 className='font-bold text-xl capitalize pb-1'>
              Protected shipping guaranteed
            </h2>
            <p className='text-sm'>
              In addition to providing timely delivery notifications for peace
              of mind, our careful packaging guarantees that jewelry pieces are
              not damaged during transit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
