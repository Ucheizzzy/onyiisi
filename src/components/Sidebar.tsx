import { Heart, Minus, Plus, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const Sidebar = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const [shop, setShop] = useState(false)
  const [sales, setSales] = useState(false)

  // const [sections, setSections] = useState({
  //   shop: false,
  //   sales: false,
  // })

  // Plus Shop function

  const handleShop = () => {
    setShop(!shop)
  }

  // Plus Sales function

  const handleSales = () => {
    setSales(!sales)
  }

  // const toggleSection = (sections) => {
  //   setSections((prevSections) => ({
  //     ...prevSections,
  //     [section]: !prevSections[section],
  //   }))
  // }

  return (
    <div className=' md:hidden h-[100vh] flex flex-col items-center w-full bg-[rgb(95,40,74)] text-2xl text-white uppercase font-semibold  '>
      <div className='flex flex-col mt-20 items-left gap-10 w-fit items-left '>
        <div className=''>
          <div
            onClick={handleShop}
            className='flex gap-2 items-center text-2xl'
          >
            {shop ? (
              <Minus className='h-8 w-8' />
            ) : (
              <Plus className='h-8 w-8' />
            )}
            shop
          </div>
          <div
            className={`${
              shop ? 'capitalize mt-4 pl-10 flex flex-col' : 'hidden'
            }`}
          >
            <Link
              onClick={() => {
                closeSidebar()
                handleShop()
              }}
              href='/'
            >
              Categories
            </Link>
            <Link
              onClick={() => {
                closeSidebar()
                handleShop()
              }}
              href='/'
            >
              Specials
            </Link>
            <Link
              onClick={() => {
                closeSidebar()
                handleShop()
              }}
              href='/'
            >
              Collections
            </Link>
          </div>
        </div>
        <Link
          onClick={closeSidebar}
          href='/about'
          className='flex gap-2 items-center hover:underline underline-offset-2 text-2xl pl-10'
        >
          about
        </Link>
        <div className=''>
          <div
            onClick={handleSales}
            className='flex gap-2 items-center text-2xl'
          >
            {sales ? (
              <Minus className='h-8 w-8' />
            ) : (
              <Plus className='h-8 w-8' />
            )}
            sales
          </div>
          <div
            className={`${
              sales ? 'capitalize mt-4 pl-10 flex flex-col' : 'hidden'
            }`}
          >
            <Link
              onClick={() => {
                closeSidebar()
                handleSales()
              }}
              href='/'
            >
              header
            </Link>
            <Link
              onClick={() => {
                closeSidebar()
                handleSales()
              }}
              href='/'
            >
              header
            </Link>
            <Link
              onClick={() => {
                closeSidebar()
                handleSales()
              }}
              href='/'
            >
              header
            </Link>
          </div>
        </div>
        <Link onClick={closeSidebar} href='/cart' className='flex gap-2'>
          <ShoppingCart className='h-8 w-8' />
          cart
        </Link>
        <Link onClick={closeSidebar} href='/wish-list' className='flex gap-2'>
          <Heart className='h-8 w-8' />
          wishlist
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
