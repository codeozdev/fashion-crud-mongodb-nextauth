import Image from 'next/image'
import Link from 'next/link'

export default function SlideShow({ image, title, description, button }) {
  return (
    <div className='w-full'>
      <div className='relative w-full h-auto'>
        {/* TEXT */}
        <div className='absolute sm:bottom-24 3xl:bottom-52 left-[28.125rem] z-50 space-y-10'>
          <div className='text-[4rem] font-[900] text-white'>{title}</div>
          <p className='text-[1.5rem] text-neutral-100 w-[50rem] mb-10'>
            {description}
          </p>
          <div className='rounded-lg bg-black text-white font-bold py-5 px-8 w-fit'>
            <Link href={'/'} className='text-base '>
              {button}
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className='relative sm:w-[120rem] 3xl:w-[160rem] h-[34.375rem] 3xl:h-[53.125rem]'>
          <Image
            src={image}
            alt='fashion'
            fill
            className='object-cover w-full h-full object-top'
            quality={100}
            priority={true}
          />
          <div className='bg-black/20 absolute inset-0' />
        </div>
      </div>
    </div>
  )
}

//
