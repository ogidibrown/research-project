import React from 'react';
import Image from 'next/image';





const footer = () => {
  return (
    <footer className='h-[50px] text-center flex flex-col md:flex-row items-center md:justify-between gap-3'>
        <div className='text-[14px]'>@2023 TELEREHABILITATION. All rights reserved.</div>
        <div className='flex gap-[12px] items-center'>
        <Image src='/img1.png' width={20} height={20}  alt='facebook' className=' cursor-pointer p-[12px]' />
        <Image src='/img2.png' width={20} height={20}  alt='instagram' className=' cursor-pointer p-[12px]' />
        <Image src='/img3.png' width={20} height={20}  alt='linkdin' className=' cursor-pointer p-[12px]' />
        <Image src='/img4.png' width={22} height={22}  alt='youtube' className=' cursor-pointer p-[12px]' />
        </div>
    </footer>
  )
}

export default footer