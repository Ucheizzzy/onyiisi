import Blog from '@/components/Blog'
import Categories from '@/components/Categories'
import FeedbackCarousel from '@/components/FeedbackCarousel'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeedbackCarousel />
      <Blog />
      <Footer />
    </main>
  )
}
