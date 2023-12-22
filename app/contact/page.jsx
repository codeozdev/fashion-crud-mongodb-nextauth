import Image from 'next/image'
import { FaYoutube } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

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
      {/*GRID*/}
      <div className='container grid grid-cols-2 my-10'>
        {/*FORM*/}
        <div className='w-full'>
          <h1>
            Let{"'"}s <span className='text-primary'>begin</span>
          </h1>
          <div className='w-4/5'>
            <input type='text' placeholder='Full name' />
            <input type='text' placeholder='Email adress' />
            <input type='text' placeholder='Subject' />
            <textarea
              rows='7'
              className='resize-none w-full rounded outline-none border-2 border-gray-400 p-4 text-xl text-gray-700 my-4'
              placeholder='Tell us about the project'
            />
          </div>
          <button className='bg-primary hover:bg-orange-800 text-white px-10 py-4 rounded-full'>
            Send
          </button>
        </div>
        {/*GRID*/}
        <div className='grid grid-cols-2 place-items-center p-10 3xl:p-20'>
          <div className='h-full w-full border-r-2 flex flex-col justify-center items-center space-y-3'>
            <h2 className='text-[1.2rem] font-extrabold'>New Business</h2>
            <p className='font-extrabold text-[0.75rem] text-gray-500'>
              HELLO@DOMAIN.COM
            </p>
          </div>
          <div className='h-full w-full border-b-2 flex flex-col justify-center items-center space-y-3 -mb-1'>
            <h2 className='text-[1.2rem] font-extrabold'>Main Studio</h2>
            <p className='font-extrabold text-[0.75rem] text-gray-500'>
              STUDIO@DOMAIN.COM
            </p>
          </div>
          <div className='h-full w-full border-t-2 flex flex-col justify-center items-center space-y-3'>
            <h2 className='text-[1.2rem] font-extrabold'>Our Office</h2>
            <p className='font-extrabold text-[0.75rem] text-gray-500'>
              Akeshusstra Oslo, Norway
            </p>
          </div>

          <div className='h-full w-full border-l-2 flex flex-col justify-center items-center space-y-3 -ml-1'>
            <h2 className='text-[1.2rem] font-extrabold'>Our Socials</h2>
            <p className='font-extrabold text-[0.75rem] text-gray-500'>
              <div className='flex items-center gap-5'>
                <FaYoutube className='inline-block' size={20} />
                <FaWhatsapp className='inline-block' size={20} />
                <FaInstagram className='inline-block' size={20} />
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
