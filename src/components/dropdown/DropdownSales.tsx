import Image from 'next/image'
import Link from 'next/link'

const dropdown = [
  { name: 'nav button', href: '/' },
  { name: 'nav button1', href: '/' },
  { name: 'nav button2', href: '/' },
  { name: 'nav button3', href: '/' },
  { name: 'nav button4', href: '/' },
]

export default function DropdownSales() {
  return (
    <div className=''>
      <div
        // className={`${
        //   salesDropDown
        //     ? ' transition-all transform origin-top duration-500 z-10'
        //     : 'top-[-100%] transition-all transform origin-top duration-500'
        // } py-[50px] px-9 top-[80px] absolute w-full backdrop-blur-sm`}
        className='py-[50px] px-9 top-[80px] absolute w-full backdrop-blur-sm'
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
              <h1 className='capitalize underline font-medium text-center pb-3'>
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
              <h1 className='capitalize font-medium underline text-center pb-3'>
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
              <h1 className='capitalize font-medium underline text-center pb-3'>
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
    </div>
  )
}
