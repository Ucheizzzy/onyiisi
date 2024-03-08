import Image from 'next/image'

export default function Hero() {
  return (
    <div className='py-20'>
      <div className='px-20 uppercase text-7xl'>
        <h1 className='font-thin text-orange-800'>radiating Luxury</h1>
        <h1 className='font-extrabold'>one gleam at a time.</h1>
      </div>
      <div className='w-full h-[729px] relative my-10'>
        <Image
          src='/Hero.png'
          alt='Hero Onyiisi'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  )
}
