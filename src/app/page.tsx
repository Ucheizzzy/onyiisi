import Blog from '@/components/Blog'
import Categories from '@/components/Categories'
import FeedbackCarousel from '@/components/FeedbackCarousel'
import Hero from '@/components/Hero'
export const revalidate = 10

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeedbackCarousel />
      <Blog />
    </main>
  )
}
