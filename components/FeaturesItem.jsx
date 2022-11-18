import Image from 'next/image'
import React from 'react'

const FeaturesItem = ({CardImage, title, paragraph}) => {
  return (
    <div className='font-lato text-[16px]flex flex-col items-center justify-center py-[20px] px-[6px] rounded-md border bg-white shadow-3xl'>
        <div className='mt-4 relative w-full h-[5rem]'>
        <Image src={CardImage}  alt="/" layout='fill' className="object-contain"  />
    </div>
    <div className=''>
        <h4 className='text-[20px] my-[15px] font-roboto font-medium text-[#171614]'>{title}</h4>
        <p className='px-[10px] mb-6 leading-5 text-black font-lato text-[.9rem] tracking-[1px]'>{paragraph}</p>
    </div>
 </div>
  )
}

export default FeaturesItem;

{/* <div className="relative w-full h-[30rem]">
        <Image src={MainLogo} alt="/" layout='fill' className="object-contain" />
      </div> */}

      // alt="/" width={70} height={70} className='mt-20 p-[5px]'


      // shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]