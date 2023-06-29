"use client";
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import { usePathname } from 'next/navigation';





const Links =[
    {
        id: 1,
        title: "Home",
        link:"/"
    },
    {
        id: 2,
        title: "News",
        link:"/news"
    },
    {
        id: 3,
        title: "Our Team",
        link:"/meet"
    },
    {
        id: 4,
        title: "About Us",
        link:"/about"
    },
   
];


const Navbar = () => {
const pathname = usePathname()


     

  return (
    <nav className='h-[100px] flex justify-between items-center mt-2'>
        <Link href="/" ><Image src={Logo} height={180} width={200} className=''/></Link>
        <div className='flex items-center gap-[20px]'>
            {Links.map(({link, title, id})=>(
                <Link key={id} href={link} className={`${pathname===link ? "border-[#5F45CC] border-b-4" : "" } w-[80px] h-[35px] p-1 flex items-center justify-center`} >{title}</Link>
            ))}
            {/* <button className='p-[5px] border-none bg-[#5F45CC] text-white rounded-[3px] w-[70px]'>Login</button> */}
        </div>
    </nav>
  )
}
export default Navbar