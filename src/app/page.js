import Button from '@/components/Button/Button'
import Image from 'next/image'
import HeroImg from 'public/hero.png'

export default function Home() {
  return (
   <div className='flex items-center gap-[100px]'>
      <div className='flex-1 flex flex-col gap-[50px]'>
        <h1 className='text-[35px] text-[#444] font-[700]'>
        Telerehabilitation for people with neurological conditions in 
        Ghana - A Global Challenge Research Network
        </h1>
        <p className='text-[20px] font-normal text-[#5F45CC]'>Read more on the about us page</p>
        <Button text='Read More' url='/about' />
      </div>
      <div>
        <Image src={HeroImg} width={500} height={500} alt='hero image' className='object-cover w-full'  />
      </div>
   </div>
  )
}
