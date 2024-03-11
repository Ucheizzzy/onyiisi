'use client'

import { ShoppingCart, Heart, UserRound } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Noto_Sans_Georgian } from 'next/font/google'
import DropdownSales from './dropdown/DropdownSales'
import DropdownShop from './dropdown/DropdownShop'

const georgia = Noto_Sans_Georgian({ subsets: ['latin'] })

export default function Navbar() {
  const [shopDropDown, setShopDropDown] = useState(false)

  const [salesDropDown, setSalesDropDown] = useState(false)

  const toggleShopDropdown = () => {
    setShopDropDown(!shopDropDown)
    setSalesDropDown(false)
  }
  const toggleSalesDropdown = () => {
    setSalesDropDown(!salesDropDown)
    setShopDropDown(false)
  }

  return (
    <header className='relative'>
      <div className='px-[40px] lg:px-[60px] h-20 border-b-[1px] border-black flex justify-around items-center z-20 lg:fixed w-full bg-white'>
        {/* Links  */}
        <div className='flex gap-5 lg:gap-10 flex-1 capitalize'>
          <h3 onClick={toggleShopDropdown} className='cursor-pointer'>
            shop
          </h3>
          <Link href={'/'} className='cursor-pointer'>
            About Us
          </Link>
          <h3 className='cursor-pointer' onClick={toggleSalesDropdown}>
            sales
          </h3>
        </div>

        {/* Logo  */}
        <div className='flex-1'>
          <Link href='/'>
            <h1
              style={{ fontStyle: 'italic' }}
              className={`font-bold text-2xl italic text-center ${georgia.className}`}
            >
              Onyiisi
            </h1>
          </Link>
        </div>

        {/* Navbar Icons  */}
        <div className='flex-1 flex gap-5 scale-75 lg:scale-100 justify-end'>
          <ShoppingCart className='cursor-pointer' />
          <Heart className='cursor-pointer' />
          <UserRound className='cursor-pointer' />
        </div>
      </div>

      {/* Dropdown */}
      {/* {shopDropDown ? <DropdownShop /> : ''}
      {salesDropDown ? <DropdownSales /> : ''} */}
      <div
        className={`transition-height duration-700 ${
          shopDropDown ? ' block' : 'hidden'
        }  absolute top-20 left-0 right-0`}
      >
        <DropdownShop />
      </div>
      <div
        className={`transition-height duration-700 ${
          salesDropDown ? ' block' : 'hidden'
        }  absolute top-20 left-0 right-0`}
      >
        <DropdownSales />
      </div>
    </header>
  )
}
