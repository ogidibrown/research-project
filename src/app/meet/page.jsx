import React from 'react'
import Image from 'next/image'
import Derrick from '../../../public/derrick.png'
import Lorna from '../../../public/lorna.png'
import Shadrack from '../../../public/shadrack.png'
import Fred from '../../../public/fred.png'

const MeetPage = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div>
            <h1 className='text-[#5F45CC] text-[45px] text-center flex justify-center items-center'>Our Team</h1>
        </div>
        <div className=' grid md:grid-cols-4 items-center gap-3 p-2'>
            <div className='flex flex-col items-center justify-center text-center gap-3  p-2'>
                <Image src={Lorna} width={150} height={120} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[20px]'>Dr. Katie Thompson</h1>
                <span className='flex items-center justify-center text-[#5F45CC] text-[18px]'>Occupational Therapist & Systematic Reviewer (NESSIE)</span>
                {/* <p className='flex items-center justify-center'>
                undertaking assessments of patients’ physical, 
                communication, interaction and cognitive skills

                </p> */}
            </div>
            <div className='flex flex-col items-center justify-center text-center  gap-3 p-2'>
                <Image src={Shadrack} width={150} height={120} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[20px]'> Shadrack Osei Asibey</h1>
                <span className='text-[#5F45CC] text-[18px]'>Research Coordinator/Assistant</span>
                {/* <p> Collaborates with PI and institution 
                    to respond to any audit findings and 
                    implement approved recommendations.
                </p> */}
            </div>
            <div className='flex flex-col items-center justify-center  text-center md:mt-1  p-2 gap-3'>
                <Image src={Derrick} width={150} height={120} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[20px]  '>Derrick Antwi</h1>
                <span className='text-[#5F45CC] text-[18px]'>Senior Occupational Therapist</span>
                {/* <p>
                    Empower residents 
                    to maintain their potential and sense of 
                    achievement through provision of aids and equipment.
                </p> */}
            </div>
            <div className='flex flex-col items-center justify-center  text-center md:mt-1  p-2 gap-3'>
                <Image src={Fred} width={150} height={120} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[20px]  '>Prof Stephen Fred Sarfo</h1>
                <span className='text-[#5F45CC] text-[18px]'>Principal Investigator/Neurologist at KATH & KNUST</span>
                {/* <p>
                    Empower residents 
                    to maintain their potential and sense of 
                    achievement through provision of aids and equipment.
                </p> */}
            </div>
            <div className='flex flex-col items-center justify-center text-center gap-3  p-2'>
                <Image src={Lorna} width={150} height={120} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[20px]'>Eric Opoku</h1>
                <span className='flex items-center justify-center text-[#5F45CC] text-[18px]'>Occupational Therapist</span>
                {/* <p className='flex items-center justify-center'>
                undertaking assessments of patients’ physical, 
                communication, interaction and cognitive skills

                </p> */}
            </div>
            <div className='flex flex-col items-center justify-center text-center  gap-3 p-2'>
                <Image src={Shadrack} width={150} height={120} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[20px]'> Shadrack Osei Asibey</h1>
                <span className='text-[#5F45CC] text-[18px]'>Research Coordinator/Assistant</span>
                {/* <p> Collaborates with PI and institution 
                    to respond to any audit findings and 
                    implement approved recommendations.
                </p> */}
            </div>
            <div className='flex flex-col items-center justify-center  text-center md:mt-1  p-2 gap-3'>
                <Image src={Derrick} width={150} height={120} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[20px]  '>Derrick Antwi</h1>
                <span className='text-[#5F45CC] text-[18px]'>Senior Occupational Therapist</span>
                {/* <p>
                    Empower residents 
                    to maintain their potential and sense of 
                    achievement through provision of aids and equipment.
                </p> */}
            </div>
            <div className='flex flex-col items-center justify-center  text-center md:mt-1  p-2 gap-3'>
                <Image src={Derrick} width={150} height={120} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[20px]  '>Derrick Antwi</h1>
                <span className='text-[#5F45CC] text-[18px]'>Senior Occupational Therapist</span>
                {/* <p>
                    Empower residents 
                    to maintain their potential and sense of 
                    achievement through provision of aids and equipment.
                </p> */}
            </div>
        </div>
    </div>
  )
}

export default MeetPage