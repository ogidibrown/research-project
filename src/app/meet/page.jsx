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
        <div className='md:flex md:justify-evenly items-center gap-3 p-3'>
            <div className='flex flex-col items-center justify-center text-center gap-3 md:w-[33.3%] p-3'>
                <Image src={Lorna} width={195} height={150} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[25px]'>Dr. Katie Thompson</h1>
                <span className='flex items-center justify-center text-[#5F45CC] text-[18px]'>Occupational Therapist & Systematic Reviewer (NESSIE)</span>
                <p className='flex items-center justify-center'>
                Developing treatment plans and
                assessing a patient’s home and/or work environment 
                and recommending adaptations to fit the patient’s 
                needs and improve independence
                </p>
            </div>
            <div className='flex flex-col items-center justify-center text-center md:w-[33.3%] gap-3 p-3'>
                <Image src={Shadrack} width={195} height={150} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[25px]'> Shadrack Osei Asibey</h1>
                <span className='text-[#5F45CC] text-[18px]'>Research Coordinator/Assistant</span>
                <p>Works with the PI to manage the day 
                    to day activities of the study including study requirements, 
                    problem solving, communication, protocol management 
                    and maintains study timelines..
                </p>
            </div>
            <div className='flex flex-col items-center justify-center md:w-[33.3%] text-center md:mt-1  p-3 gap-3'>
                <Image src={Derrick} width={195} height={150} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[25px]  '>Derrick Antwi</h1>
                <span className='text-[#5F45CC] text-[18px]'>Senior Occupational Therapist</span>
                <p>
                    Encourage and empower residents 
                    to maintain their potential and sense of 
                    achievement through provision of aids and equipment.
                    Using technical or computer equipment to document 
                    and display patient medical information and reports
                     
                     
                     
                </p>
            </div>
        </div>
    </div>
  )
}

export default MeetPage