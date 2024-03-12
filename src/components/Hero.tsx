import Image from 'next/image'
import { MoveDownRight } from 'lucide-react'
import HeroCarousel from './HeroCarousel'

export default function Hero() {
  return (
    <div className='py-0 lg:py-16 xl:py-20'>
      {/* Hero Header  */}
      <div className='px-14 lg:px-16 xl:px-20 uppercase text-3xl lg:text-5xl xl:text-7xl mt-8'>
        <h1 className='font-thin text-orange-800'>radiating Luxury</h1>
        <h1 className='font-extrabold'>one gleam at a time.</h1>
      </div>

      {/* Hero Image and Details */}
      <HeroCarousel />

      {/* Guarantees  */}
      <div className='flex items-center content-center gap-8 lg:gap-16 px-[25px] lg:px-[50px] xl:px-[100px] 2xl:px-[150px]'>
        <div className=' flex-1 text-center flex flex-col gap-5 content-center items-center'>
          <div className=' h-16 lg:h-20  w-16 lg:w-20 relative'>
            <Image
              src='/Weight.svg'
              alt='Metal Weight Valuation'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className=''>
            <h2 className='font-bold text-lg lg:text-xl capitalize pb-1'>
              metal-weight valuation
            </h2>
            <p className='text-xs lg:text-sm'>
              At Onnyiisi, our unique pricing strategy guarantees that the price
              of our exquisite jewelry is established by the weight of precious
              metals like gold and platinum.
            </p>
          </div>
        </div>
        <div className=' flex-1 text-center flex flex-col gap-5 content-center items-center'>
          <div className='h-16 lg:h-20  w-16 lg:w-20 relative'>
            <Image
              src='/Signature.svg'
              alt='Signature Custom Creations'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className=''>
            <h2 className='font-bold text-lg lg:text-xl capitalize pb-1'>
              Signature Custom Creations
            </h2>
            <p className='text-xs lg:text-sm'>
              Onnyiisi enables luxury jewelry customization, offering intricate
              designs and meaningful engravings for a uniquely personalized
              touch.
            </p>
          </div>
        </div>
        <div className=' flex-1 text-center flex flex-col gap-5 content-center items-center'>
          <div className='h-16 lg:h-20  w-16 lg:w-20 relative'>
            <Image
              src='/Package.svg'
              alt='Protected shipping guaranteed'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className=''>
            <h2 className='font-bold text-lg lg:text-xl capitalize pb-1'>
              Protected shipping guaranteed
            </h2>
            <p className='text-xs lg:text-sm'>
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
