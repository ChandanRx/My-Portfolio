'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const NavItem = ({ActiveItem,name,route,setActiveItem}) =>{
     return (
      ActiveItem !== name ? (
        <Link href={route}>
      
            <span onClick={()=>setActiveItem(name)} className='font-semibold hover:text-indigo-500'>{name}</span>
          
        </Link>
      ):null
     )  
}

const Navbar = () => {
  const [ActiveItem, setActiveItem] = useState('')

  const pathname = usePathname()

  useEffect(()=>{
    
   if(pathname === '/') setActiveItem('About')
   if(pathname === '/Projects') setActiveItem('Projects')
   if(pathname === '/Resume') setActiveItem('Resume')

  },[])
  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className='text-xl font-bold text-indigo-500 border-b-4 border-indigo-950 md:text-2xl '>{ActiveItem}</span>
      <div className='flex space-x-5 text-lg'>
            <NavItem ActiveItem={ActiveItem} setActiveItem={setActiveItem} name='About' route='/' />
            <NavItem ActiveItem={ActiveItem} setActiveItem={setActiveItem} name='Projects' route='/Projects' />
            <NavItem ActiveItem={ActiveItem} setActiveItem={setActiveItem} name='Resume' route='/Resume' />
      </div>
    </div>
  )
}

export default Navbar;