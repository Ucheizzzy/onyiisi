import Image from 'next/image'
import Link from 'next/link'
import { categories, specials, collections } from '@/constants'

export default function DropdownShop() {
  return (
    <div className=''>
      <div
        // className={`${
        //   shopDropDown
        //     ? 'transition-all transform origin-top duration-500 z-10'
        //     : 'top-[-100%] transition-all transform origin-top duration-500'
        // } py-[50px] px-9 top-[80px] absolute w-full backdrop-blur-sm`}
        className='py-[50px] px-9 absolute lg:fixed z-20 w-full bg-white'
      >
        <div className='flex-1 flex items-center gap-6 lg:gap-10 '>
          <div className='w-[150px] lg:w-[202px] h-[108px] lg:h-[144px] relative rounded-md mr-14'>
            <Image
              src='/shop.png'
              layout='fill'
              objectFit='cover'
              alt='shop image'
            />
          </div>
          <div className='flex-4 flex gap-[60px] lg:gap-[120px]'>
            <div className=''>
              <h1 className='capitalize font-medium underline text-center pb-3'>
                categories
              </h1>
              <ul className='text-center uppercase flex flex-col gap-2'>
                {categories.map((category, idx) => (
                  <li key={idx}>
                    <Link href={category.href}>{category.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=''>
              <h1 className='capitalize font-medium underline text-center pb-3'>
                specials
              </h1>
              <ul className='text-center uppercase flex flex-col gap-2'>
                {specials.map((special, idx) => (
                  <li key={idx}>
                    <Link href={special.href}>{special.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=''>
              <h1 className='capitalize font-medium underline text-center pb-3'>
                collections
              </h1>
              <ul className='text-center uppercase flex flex-col gap-2'>
                {collections.map((collection, idx) => (
                  <li key={idx}>
                    <Link href={collection.href}>{collection.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
