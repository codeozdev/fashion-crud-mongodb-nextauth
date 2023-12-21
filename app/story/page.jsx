import Image from 'next/image'

import Characters from '@/components/story/Characters'
import SlideShow from '@/components/story/SlideShow'

export default function StoryPage() {
  return (
    <div>
      {/*GRID*/}
      <div className='grid grid-cols-2 place-items-center gap-20 3xl:gap-5 bg-[#eff8ff]'>
        <div>
          <h2 className='text-[4rem] font-extrabold'>
            <span className='text-[4rem] font-extrabold bg-primary text-white'>
              Company
            </span>
            <br /> Fashion
          </h2>
        </div>

        <Image
          src='/2.jpg'
          alt='retail'
          width={1920}
          height={1080}
          className='object-cover w-full object-top'
          quality={100}
          priority={true}
        />
      </div>
      {/*Characters*/}
      <div className='bg-[#d0d1d1] p-32'>
        <div className='container'>
          <h1 className='py-0'>
            Meet our <span className='text-primary'>team</span>
          </h1>
          {/*GRID*/}
          <div className='grid grid-cols-3 place-items-center gap-5'>
            <Characters />
          </div>
        </div>
      </div>

      <div>
        <SlideShow />
      </div>
    </div>
  )
}
