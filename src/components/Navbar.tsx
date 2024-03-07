'use client'

import { ShoppingCart, Heart, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { name: 'Shop', href: '/' },
  { name: 'About Us', href: '/' },
  { name: 'Sales', href: '/' },
]

const jewels = [
  { name: 'Earings', href: '/' },
  { name: 'nav button1', href: '/' },
  { name: 'nav button2', href: '/' },
  { name: 'nav button3', href: '/' },
  { name: 'nav button4', href: '/' },
]

const dropdown = [
  { name: 'nav button', href: '/' },
  { name: 'nav button1', href: '/' },
  { name: 'nav button2', href: '/' },
  { name: 'nav button3', href: '/' },
  { name: 'nav button4', href: '/' },
]

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
    <header>
      <div className='px-[60px] h-20 border-b-[1px] border-black flex justify-around items-center z-20'>
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
          <h1 className='font-semibold italic text-center'>Onyiisi</h1>
        </div>
        <div className='flex-1 flex gap-5 justify-end'>
          <ShoppingCart />
          <Heart />
          <UserRound />
        </div>
      </div>
      <div
        className={`${
          shopDropDown
            ? 'transition-all transform origin-top duration-500 z-10'
            : 'top-[-300px] transition-all transform origin-top duration-500'
        } py-[50px] px-9 top-[80px] absolute w-full backdrop-blur-sm`}
      >
        <div className='flex-1 flex items-center gap-10 '>
          <div className='w-[202px] h-[144px] relative rounded-md'>
            <Image
              src='/shop.png'
              layout='fill'
              objectFit='cover'
              alt='shop image'
            />
          </div>
          <div className='flex-4 flex gap-[120px]'>
            <div className=''>
              <h1 className='capitalize underline text-center pb-3'>jewel</h1>
              <ul className='text-center uppercase flex flex-col gap-2'>
                {jewels.map((jewel, idx) => (
                  <li key={idx}>
                    <Link href={jewel.href}>{jewel.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=''>
              <h1 className='capitalize underline text-center pb-3'>
                dropdown header
              </h1>
              <ul className='text-center uppercase flex flex-col gap-2'>
                {dropdown.map((drop, idx) => (
                  <li key={idx}>
                    <Link href={drop.href}>{drop.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=''>
              <h1 className='capitalize underline text-center pb-3'>
                dropdown header
              </h1>
              <ul className='text-center uppercase flex flex-col gap-2'>
                {dropdown.map((drop, idx) => (
                  <li key={idx}>
                    <Link href={drop.href}>{drop.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          salesDropDown
            ? ' transition-all transform origin-top duration-500 z-10'
            : 'top-[-300px] transition-all transform origin-top duration-500'
        } py-[50px] px-9 top-[80px] absolute w-full backdrop-blur-sm`}
      >
        <div className='flex-1 flex items-center gap-10 '>
          <div className='w-[202px] h-[144px] relative rounded-md'>
            <Image
              src='/sales.png'
              layout='fill'
              objectFit='cover'
              alt='sales image'
            />
          </div>
          <div className='flex-4 flex gap-[120px]'>
            <div className=''>
              <h1 className='capitalize underline text-center pb-3'>
                dropdown header
              </h1>
              <ul className='text-center uppercase flex flex-col gap-2'>
                {dropdown.map((drop, idx) => (
                  <li key={idx}>
                    <Link href={drop.href}>{drop.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=''>
              <h1 className='capitalize underline text-center pb-3'>
                dropdown header
              </h1>
              <ul className='text-center uppercase flex flex-col gap-2'>
                {dropdown.map((drop, idx) => (
                  <li key={idx}>
                    <Link href={drop.href}>{drop.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=''>
              <h1 className='capitalize underline text-center pb-3'>
                dropdown header
              </h1>
              <ul className='text-center uppercase flex flex-col gap-2'>
                {dropdown.map((drop, idx) => (
                  <li key={idx}>
                    <Link href={drop.href}>{drop.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
