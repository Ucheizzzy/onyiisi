import { Heart, Minus, Plus, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const Sidebar = ({ closeSidebar }: { closeSidebar: () => void }) => {
  return (
    <div className=' md:hidden h-[100vh] flex flex-col items-center w-full bg-[rgb(95,40,74)] text-2xl text-white uppercase font-semibold  '>
      <div className='flex flex-col mt-20 items-left gap-10 w-fit items-left '>
        <Link
          href='/shop'
          className='flex gap-2 items-center hover:underline underline-offset-2 text-2xl'
        >
          <Plus className='h-8 w-8' />
          shop
        </Link>
        <Link
          onClick={closeSidebar}
          href='/about'
          className='flex gap-2 items-center hover:underline underline-offset-2 text-2xl pl-10'
        >
          about
        </Link>
        <Link
          href='/sales'
          className='flex gap-2 items-center hover:underline underline-offset-2 text-2xl'
        >
          <Plus className='h-8 w-8' />
          sales
        </Link>
        <Link href='/cart' className='flex gap-2'>
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
