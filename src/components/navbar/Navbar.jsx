"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import { usePathname } from 'next/navigation';
import {FaBars} from 'react-icons/fa';






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

const [open, setOpen]= useState(false);



const toggleNav = ()=>{
    setOpen(!open)
}




     

  return (
    <nav className='h-[100px] flex justify-between items-center mt-2'>
        <Link href="/" ><Image src={Logo} height={130} width={160} alt='logo' className='md:h-[170px] md:w-[250px] h-[90px] w-[110px] md:p-2 '/></Link>
        
            <FaBars  onClick={toggleNav} className={ ` ${open ? '':''} md:hidden h-[30px] w-[40px] cursor-pointer`}/>
        
            <div className={` hidden md:flex md:items-center md:gap-[20px] `}>
                { Links.map(({link, title, id})=>(
                    <Link key={id} href={link}  className={`${pathname===link ? "border-[#5F45CC] border-b-4" : ""  }  w-[90px] h-[35px] p-1 flex flex-col md:flex-row  items-center justify-center`} >{title}</Link>
                ))}
                
                {/* <button className='p-[5px] border-none bg-[#5F45CC] text-white rounded-[3px] w-[70px]'>Login</button> */}
            </div>
        

            <div className={` absolute right-[35px] top-[85px]  md:hidden  flex flex-col items-center text-white gap-[20px] bg-[#6045ccd7] w-[200px] rounded-[10px] `}>
                { open&& Links.map(({link, title, id})=>(
                    <Link key={id} href={link} onClick={()=>setOpen(!open)} className={`${pathname===link ? "border-[#111] border-b-4" : ""  }  w-[90px] h-[35px] p-1 flex flex-col md:flex-row  items-center justify-center`} >{title}</Link>
                ))}
                
                {/* <button className='p-[5px] border-none bg-[#5F45CC] text-white rounded-[3px] w-[70px]'>Login</button> */}
            </div>
        
                
    </nav>
  )
}
export default Navbar