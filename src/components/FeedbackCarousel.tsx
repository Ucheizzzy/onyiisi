'use client'

import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from 'next/image'
import { feedbacks } from '@/constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useState } from 'react'

export default function FeedbackCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const goToImg = (idx: number) => {
    setCurrentIndex(idx)
  }

  const handleSlideChange = (swiper: Swiper) => {
    setCurrentIndex(swiper.activeIndex)
  }

  return (
    <div className='mb-10'>
      <div className='relative flex justify-center items-center w-full h-[400px] lg:h-[594px]'>
        <Image
          src='/Feedback bg.jpg'
          alt='Feedback BG'
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute flex items-center flex-col gap-8 w-[50%]'>
          <div className='absolute top-[-20px] left-[49%] p-2 rounded-full bg-yellow-700 w-fit '>
            <Quote color='white' size={15} />
          </div>
          {feedbacks.map((feedback, idx) => (
            <div
              key={idx}
              className={`text-center shadow-lg shadow-black bg-white rounded-lg p-6 ${
                idx === currentIndex ? 'opacity-100' : 'opacity-0 hidden'
              } `}
            >
              <p className='text-lg text-gray-500'>{feedback.comment}</p>
              <h3 className='font-semibold pt-3 text-xl capitalize'>
                {feedback.name}
              </h3>
              <p className='text-sm text-orange-800 capitalize'>
                {feedback.verified}
              </p>
            </div>
          ))}
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={5}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[EffectCoverflow, Navigation]}
            onSlideChange={(swiper: Swiper) => handleSlideChange(swiper)}
            className='swiper_container'
          >
            {feedbacks.map((feedback, idx) => (
              <SwiperSlide>
                <div
                  onClick={() => goToImg(idx)}
                  key={idx}
                  className='relative mx-3 h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-yellow-700'
                >
                  <Image
                    src={feedback.image}
                    alt={feedback.name}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </SwiperSlide>
            ))}

            <div className=''>
              <div className='swiper-button-prev hover:scale-150 ease-in-out duration-300'>
                <ChevronLeft size={10} />
              </div>
              <div className='swiper-button-next '>
                <ChevronRight />
              </div>
              <div className='swiper-pagination'></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
