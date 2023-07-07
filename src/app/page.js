import Button from '@/components/button/Button'
import Image from 'next/image'
import HeroImg from 'public/hero.png'

export default function Home() {
  return (
   <div className='flex flex-col md:flex-row  items-center gap-[100px]'>
      <div className='flex-1 flex flex-col  items-center md:items-start gap-[50px]'>
        <h1 className='text-[20px] md:text-[35px] mt-4 text-center md:text-left text-[#444] font-[700]'>
        Telerehabilitation for people with neurological conditions in 
        Ghana - A Global Challenge Research Network 
        </h1>
        <p className='text-[18px] font-normal text-[#5F45CC]'>Read more on the about us page</p>
        <Button className='flex justify-center text-center self-center items-center mt-3' text='Read More' url='/about' />
      </div>
      <div className='p-2'>
        <Image src={HeroImg} width={500} height={500} alt='hero image' className='object-cover w-[300px] h-[300px] md:h-full md:w-full'  />
      </div>
   </div>
  )
}
