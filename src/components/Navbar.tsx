'use client'

import { ShoppingCart, Heart, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Noto_Sans_Georgian } from 'next/font/google'
import DropdownShop from './dropdown/Dropdownshop'
import DropdownSales from './dropdown/DropdownSales'

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
    <header className=''>
      <div className='px-[60px] h-20 border-b-[1px] border-black flex justify-around items-center z-20 fixed w-full'>
        <div className='flex gap-10 flex-1 capitalize'>
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
        <div className='flex-1'>
          <h1
            style={{ fontStyle: 'italic' }}
            className={`font-semibold georgia italic text-center ${georgia.className}`}
          >
            Onyiisi
          </h1>
        </div>
        <div className='flex-1 flex gap-5 justify-end'>
          <ShoppingCart />
          <Heart />
          <UserRound />
        </div>
      </div>
      {shopDropDown ? <DropdownShop /> : ''}
      {salesDropDown ? <DropdownSales /> : ''}
    </header>
  )
}
