import React from 'react'
import Image from 'next/image'
import Derrick from '../../../public/derrick.png'
import Lorna from '../../../public/lorna.png'
import Shadrack from '../../../public/shadrack.png'

const MeetPage = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div>
            <h1 className='text-[#5F45CC] text-[45px] text-center flex justify-center items-center'>Our Team</h1>
        </div>
        <div className='md:flex md:justify-evenly items-center gap-3 p-2'>
            <div className='flex flex-col items-center justify-center text-center gap-3  p-2'>
                <Image src={Lorna} width={195} height={150} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[25px]'>Dr. Katie Thompson</h1>
                <span className='flex items-center justify-center text-[#5F45CC] text-[18px]'>Occupational Therapist & Systematic Reviewer (NESSIE)</span>
                <p className='flex items-center justify-center'>
                undertaking assessments of patients’ physical, 
                communication, interaction and cognitive skills

                </p>
            </div>
            <div className='flex flex-col items-center justify-center text-center  gap-3 p-2'>
                <Image src={Shadrack} width={195} height={150} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[25px]'> Shadrack Osei Asibey</h1>
                <span className='text-[#5F45CC] text-[18px]'>Research Coordinator/Assistant</span>
                <p> Collaborates with PI and institution 
                    to respond to any audit findings and 
                    implement approved recommendations.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center  text-center md:mt-1  p-2 gap-3'>
                <Image src={Derrick} width={195} height={150} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[25px]  '>Derrick Antwi</h1>
                <span className='text-[#5F45CC] text-[18px]'>Senior Occupational Therapist</span>
                <p>
                    Empower residents 
                    to maintain their potential and sense of 
                    achievement through provision of aids and equipment.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center  text-center md:mt-1  p-2 gap-3'>
                <Image src={Derrick} width={195} height={150} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[25px]  '>Derrick Antwi</h1>
                <span className='text-[#5F45CC] text-[18px]'>Senior Occupational Therapist</span>
                <p>
                    Empower residents 
                    to maintain their potential and sense of 
                    achievement through provision of aids and equipment.
                </p>
            </div>
        </div>
    </div>
  )
}

export default MeetPage