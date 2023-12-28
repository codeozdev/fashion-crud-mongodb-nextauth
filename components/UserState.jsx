'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { FaRegUser } from 'react-icons/fa'

export default function UserState() {
  const { data: session } = useSession()

  return (
    <ul>
      {!session ? (
        <li className='hover:underline'>
          <Link href='/login'>Login</Link>
        </li>
      ) : (
        <li className='hover:underline'>
          <Link href={'/account'}>
            <FaRegUser className='inline-block mr-5' size={18} />
          </Link>
        </li>
      )}
    </ul>
  )
}
