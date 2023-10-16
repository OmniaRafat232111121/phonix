'use client'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ThemeButton'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname=usePathname()
  const navigation=[
    {
      title:'Phone',
      href:'/'
    },
    {
      title:'About',
      href:'/about'
    },
    {
      title:'Services',
      href:'/services'
    },
    {
      title:'Contact',
      href:'/contact'

    }
  ]
  return (
    <div className='border-b-[1px]'>
      <div className='max-w-screen-xl mx-auto flex 
      items-center justify-between h-20'>
    {/*logo*/}
    <div >
      <Link href={'/'} className='uppercase font-semibold underline decoration-[1px]
       hover:text-blue-600 underline-offset-2 hover:leading-8'>Phonix</Link>

    </div>
    {/*links*/}
    <div className='hidden md:inline-flex items-center gap-7 '>
{navigation.map((item)=>(
   <Link href={item?.href} key={item?.title} className={`relative
    group overflow-hidden ${pathname === item?.href &&'text-blue-900'}`}>
     {item?.title}
     <span className={` w-full h-[1px] absolute inline-flex  bottom-0 left-0 bg-black
      -translate-x-[105%] 
     group-hover:translate-x-0 duration-300 ease-in-out
      ${pathname === item?.href ? 'bg-blue-900 dark:bg-blue-900 translate-x-0'
      :'dark:bg-white bg-dark '}`}/>
   </Link>
))}
    </div>

    <div>
      <ModeToggle/>
    </div>
      </div> 

    </div>
  )
}

export default Header