import Blog from '@/components/Blog'
import Categories from '@/components/Categories'
import FeedbackCarousel from '@/components/FeedbackCarousel'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeedbackCarousel />
      <Blog />
      <Newsletter />
    </main>
  )
}
