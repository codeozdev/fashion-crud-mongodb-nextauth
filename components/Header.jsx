import Link from 'next/link'
import { FaRegUser } from 'react-icons/fa'
import { BsBasket3 } from 'react-icons/bs'
import { ToastContainer } from 'react-toastify'

export default function Header() {
  return (
    <div>
      <div className='container flex items-center justify-between py-10'>
        <Link href='/' className='text-[1.5rem] font-bold'>
          <span className='text-primary'>Little</span> Fashion
        </Link>
        <ul className='flex gap-10 '>
          <li>
            <Link
              href='/'
              className='hover:text-primary hover:underline underline-offset-8 decoration-2 decoration-neutral-500'>
              Home
            </Link>
          </li>
          <li>
            <Link
              href={'/story'}
              className='hover:text-primary hover:underline underline-offset-8 decoration-2 decoration-neutral-500'>
              Story
            </Link>
          </li>
          <li>
            <Link
              href='/products'
              className='hover:text-primary hover:underline underline-offset-8 decoration-2 decoration-neutral-500'>
              Products
            </Link>
          </li>
          <li>
            <Link
              href={'/faqs'}
              className='hover:text-primary hover:underline underline-offset-8 decoration-2 decoration-neutral-500'>
              FAQs
            </Link>
          </li>
          <li>
            <Link
              href={'/contact'}
              rel='preload'
              className='hover:text-primary hover:underline underline-offset-8 decoration-2 decoration-neutral-500'>
              Contact
            </Link>
          </li>
        </ul>
        <div className='flex items-center'>
          <Link href={'/login'} className='mr-4'>
            Login
          </Link>
          <Link href={'/account'}>
            <FaRegUser className='inline-block mr-5' size={18} />
          </Link>
          <BsBasket3 className='inline-block' size={18} />
        </div>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  )
}
