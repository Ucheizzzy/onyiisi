import Image from 'next/image'

export default function FeedbackCarousel() {
  return (
    <div className='mb-10'>
      <div className='relative w-full h-[594px]'>
        <Image
          src='/Feedback bg.jpg'
          alt='Feedback BG'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  )
}
