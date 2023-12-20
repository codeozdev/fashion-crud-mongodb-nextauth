import Link from 'next/link'
import { FaRegUser } from 'react-icons/fa'
import { BsBasket3 } from 'react-icons/bs'

export default function Header() {
  return (
    <div className='container flex items-center justify-between py-10'>
      <h3>
        <span className='text-primary'>Little</span> Fashion
      </h3>
      <ul className='flex gap-10 '>
        <li>
          <Link href='/' className='hover:text-primary'>
            Home
          </Link>
        </li>
        <li>
          <Link href={'/story'} className='hover:text-primary'>
            Story
          </Link>
        </li>
        <li>
          <Link href='/products' className='hover:text-primary'>
            Products
          </Link>
        </li>
        <li>
          <Link href='/faqs' className='hover:text-primary'>
            FAQs
          </Link>
        </li>
        <li>
          <Link href='/contact' className='hover:text-primary'>
            Contact
          </Link>
        </li>
      </ul>
      <div>
        <FaRegUser className='inline-block mr-5' size={18} />
        <BsBasket3 className='inline-block' size={18} />
      </div>
    </div>
  )
}
