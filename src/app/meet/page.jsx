import React from 'react'
import Image from 'next/image'
import Derrick from '../../../public/derrick.png'
import Lorna from '../../../public/lorna.png'
import Shadrack from '../../../public/shadrack.png'
import Fred from '../../../public/fred.png'
import Katie from '../../../public/katie.png'
import Eric from '../../../public/eric.png'
import Marian from '../../../public/marian.png'
import Frederik from '../../../public/frederik.png'

const MeetPage = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div>
            <h1 className='text-[#5F45CC] md:text-[45px] text-[30px] text-center flex justify-center items-center mt-4'>Our Team</h1>
        </div>
        <div className=' grid md:grid-cols-4 items-center gap-3 p-2'>
             <div className='flex flex-col items-center justify-center  text-center md:mb-3  p-2 gap-3'>
                <Image src={Lorna} width={160} height={120} className='rounded-[100%] bg-[#bbb]' />

                <h1 className='font-bold text-[20px]  '>Prof Lorna Paul</h1>
                <span className='text-[#5F45CC] text-[18px]'>Physiotherapist and Professor of Allied Health Science at Glasgow Caledonian</span>
                {/* <p>
                    Empower residents 
                    to maintain their potential and sense of 
                    achievement through provision of aids and equipment.
                </p> */}
            </div>
           
            <div className='flex flex-col items-center justify-center  text-center md:mt-4  p-2 gap-3'>
                <Image src={Fred} width={150} height={120} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[20px]  '>Prof Stephen Fred Sarfo</h1>
                <span className='text-[#5F45CC] text-[18px]'>Principal Investigator/Neurologist at Komfo Anokye Teaching Hospital & KNUST</span>
                {/* <p>
                    Empower residents 
                    to maintain their potential and sense of 
                    achievement through provision of aids and equipment.
                </p> */}
            </div>

            <div className='flex flex-col items-center justify-center  text-center   p-2 gap-3'>
                <Image src={Marian} width={150} height={120} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[20px]  '>Prof Marian Brady</h1>
                <span className='text-[#5F45CC] text-[18px]'>Speech and Language Therapist (Glasgow Caledonian University)</span>
                {/* <p>
                    Empower residents 
                    to maintain their potential and sense of 
                    achievement through provision of aids and equipment.
                </p> */}
            </div>
            <div className='flex flex-col items-center justify-center text-center md:mt-[30px]  gap-3  p-2'>
                <Image src={Frederik} width={150} height={120} className='rounded-[100%]  bg-[#bbb]' />
                <h1 className='font-bold text-[20px] '>Prof Frederik Van Wijck</h1>
                <span className='flex items-center justify-center text-[#5F45CC] text-[18px]'>Prof of Neurological Rehabilitation and Co-Director of the Research Centre for Health</span>
                {/* <p className='flex items-center justify-center'>
                undertaking assessments of patients’ physical, 
                communication, interaction and cognitive skills

                </p> */}
            </div>
            
            
            <div className='flex flex-col items-center justify-center md:mb-[50px] text-center gap-3  p-2'>
                <Image src={Katie} width={150} height={120} className='rounded-[100%] md:mt-[20px] bg-[#bbb]' />
                <h1 className='font-bold text-[20px]'>Dr. Katie Thompson</h1>
                <span className='flex items-center justify-center text-[#5F45CC] text-[18px]'>Occupational Therapist & Systematic Reviewer (NESSIE)</span>
                {/* <p className='flex items-center justify-center'>
                undertaking assessments of patients’ physical, 
                communication, interaction and cognitive skills

                </p> */}
            </div>
            <div className='flex flex-col items-center justify-center text-center  gap-3 p-2'>
                <Image src={Eric} width={150} height={120} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[20px]'> Eric Opoku</h1>
                <span className='text-[#5F45CC] text-[18px]'>Occupational Therapist <br/> (Glasgow Caledonian University)</span>
                {/* <p> Collaborates with PI and institution 
                    to respond to any audit findings and 
                    implement approved recommendations.
                </p> */}
            </div>

            <div className='flex flex-col items-center justify-center text-center   gap-3 p-2'>
                <Image src={Shadrack} width={150} height={120} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[20px]  '> Shadrack Osei Asibey</h1>
                <span className='text-[#5F45CC] text-[18px]'>Research Coordinator/Assistant (Komfo Anokye Teaching Hospital)</span>
                {/* <p> Collaborates with PI and institution 
                    to respond to any audit findings and 
                    implement approved recommendations.
                </p> */}
            </div>
            <div className='flex flex-col items-center justify-center  text-center   p-2 gap-3'>
                <Image src={Derrick} width={150} height={120} className='rounded-[100%] bg-[#bbb]' />
                <h1 className='font-bold text-[20px] '>Derrick Antwi</h1>
                <span className='text-[#5F45CC] text-[18px]'>Senior Occupational Therapist (Komfo Anokye Teaching Hospital)</span>
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