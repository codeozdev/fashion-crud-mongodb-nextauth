import Link from 'next/link'
import { FaYoutube } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='bg-black text-white py-20'>
      <div className='container grid grid-cols-3 place-items-center gap-4'>
        <div className='space-y-4'>
          <h2 className='text-[2rem] font-[900]'>
            <span className='text-neutral-500 hover:text-primary'>Little</span>{' '}
            Fashion
          </h2>
          <p className='text-neutral-500 pt-10'>
            Copyright © 2045 Little Fashion
          </p>
          <p className='text-neutral-500'>Designed by Tooplate</p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-[2rem] font-[900]'>Sitemap</h2>
          <div className='flex flex-col pt-10'>
            <Link href={'/story'} className='text-neutral-500'>
              Story
            </Link>
            <Link href={'/'} className='text-neutral-500'>
              Privacy policy
            </Link>
            <Link href={'/contact'} className='text-neutral-500'>
              Contact
            </Link>
          </div>
        </div>

        <div className='h-[176px] '>
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
