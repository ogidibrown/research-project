import React from 'react'
import Image from 'next/image'
import Derrick from '../../../public/derrick.png'
import Lorna from '../../../public/lorna.png'

const MeetPage = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div>
            <h1 className='text-[#5F45CC] text-[45px] text-center flex justify-center items-center'>Our Team</h1>
        </div>
        <div className='md:flex md:justify-evenly items-center gap-3 p-3'>
            <div className='flex flex-col items-center justify-center text-center gap-3 p-3'>
                <Image src={Derrick} width={195} height={150} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[25px]'>Derrick Antwi</h1>
                <span className='flex items-center justify-center text-[#5F45CC] text-[18px]'>Creative Leader</span>
                <p className='flex items-center justify-center'>Lorem ipsum dolor 
                   sit amet consectetur adipisicing elit. 
                   Aut, explicabo doloribus nihil animi odit repellendus
                   velit sit deleniti sed voluptates, impedit qui
                   culpa quam et iusto saepe modi enim officiis.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center text-center gap-3 p-3'>
                <Image src={Lorna} width={200} height={200} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[25px]'>Derrick Antwi</h1>
                <span className='text-[#5F45CC] text-[18px]'>Creative Leader</span>
                <p>Lorem ipsum dolor 
                   sit amet consectetur adipisicing elit. 
                   Aut, explicabo doloribus nihil animi odit repellendus
                   velit sit deleniti sed voluptates, impedit qui
                   culpa quam et iusto saepe modi enim officiis.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center text-center p-3 gap-3'>
                <Image src={Derrick} width={195} height={150} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[25px]'>Derrick Antwi</h1>
                <span className='text-[#5F45CC] text-[18px]'>Creative Leader</span>
                <p>Lorem ipsum dolor 
                   sit amet consectetur adipisicing elit. 
                   Aut, explicabo doloribus nihil animi odit repellendus
                   velit sit deleniti sed voluptates, impedit qui
                   culpa quam et iusto saepe modi enim officiis.
                </p>
            </div>
        </div>
    </div>
  )
}

export default MeetPage