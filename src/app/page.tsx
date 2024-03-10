import Categories from '@/components/Categories'
import Hero from '@/components/Hero'
import PopularItems from '@/components/PopularItems'

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <PopularItems />
    </main>
  )
}
