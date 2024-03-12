import Image from 'next/image'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className=' pt-20'>
      <div className=''>
        <div className='relative w-full h-[550px]'>
          <Image
            src='/Earrings Page.jpg'
            alt='Earrings'
            layout='fill'
            objectFit='cover'
          />
          <h2 className=' absolute top-10 left-10 uppercase text-3xl font-thin text-white'>
            earrings
          </h2>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
