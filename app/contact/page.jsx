import Image from 'next/image'
import FormComponents from '@/components/contact/FormComponents'

export default function ContactPage() {
  return (
    <div className=''>
      <div className='grid grid-cols-2 place-items-center gap-20 3xl:gap-5 bg-[#eff8ff]'>
        <div className=''>
          <h2 className='text-[4rem] font-extrabold'>
            <span className='text-[4rem] font-extrabold bg-primary text-white'>
              Say hello to us
            </span>
            <br /> love to hear you
          </h2>
        </div>

        <Image
          src='/contact/1.jpg'
          alt='retail'
          width={1920}
          height={1080}
          className='object-cover w-full object-top'
          quality={100}
          priority={true}
        />
      </div>
      <FormComponents />
    </div>
  )
}
