import Link from 'next/link'
import React from 'react'

const Button = ({text, url}) => {
  return (
    <Link href={url}>
    <button className='bg-[#5F45CC] p-[20px] cursor-pointer rounded-[50px] border-none max-w-max h-[50px] flex items-center text-white'>{text}</button>
    </Link>
  )
}

export default Button