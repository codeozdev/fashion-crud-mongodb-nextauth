import Link from 'next/link'
import { FaYoutube } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='bg-black text-white py-20'>
      <div className='container grid grid-cols-3 place-items-center gap-4'>
        <div className='space-y-4 place-self-start'>
          <h2 className='text-[2rem] font-[900]'>
            <span className='text-gray-400 hover:text-primary'>Little</span>{' '}
            Fashion
          </h2>
          <p className='text-gray-400 pt-10'>
            Copyright © 2045 Little Fashion
          </p>
          <p className='text-gray-400'>Designed by Tooplate</p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-[2rem] font-[900]'>Sitemap</h2>
          <div className='flex flex-col pt-10'>
            <Link href={'/story'} className='text-gray-400'>
              Story
            </Link>
            <Link href={'/'} className='text-gray-400'>
              Privacy policy
            </Link>
            <Link href={'/contact'} className='text-gray-400'>
              Contact
            </Link>
          </div>
        </div>

        <div className='h-[176px] place-self-end'>
          <h2 className='text-[2rem] font-[900]'>Social</h2>
          <div className='flex items-center justify-center gap-4'>
            <FaYoutube />
            <FaWhatsapp />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  )
}
