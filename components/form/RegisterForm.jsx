'use client'

import Link from 'next/link'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { signIn } from 'next-auth/react'

export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !name || !password) {
      return toast.error('Please fill in all fields')
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, password }),
      })

      const data = await res.json()

      if (res.ok) {
        toast.success('Registered successfully')
        router.push('/login')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='w-full h-[calc(100vh-452px)] flex flex-col items-center'>
      <form
        className='flex flex-col items-center justify-center h-full gap-3'
        onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className='w-full select-none sm:space-y-2'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            autoComplete='on'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='sm:my-0 '
          />
          <input
            type='text'
            placeholder='Name'
            name='name'
            autoComplete='on'
            onChange={(e) => setName(e.target.value)}
            value={name}
            className='sm:my-0 3xl:my-4'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            autoComplete='on'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className='sm:my-0 3xl:my-4'
          />
        </div>
        <div className='flex items-center'>
          <button
            className='bg-primary text-white font-bold cursor-pointer px-6 py-2'
            type='submit'>
            Register
          </button>
        </div>
        <Link href={'/login'} className='mt-3 text-lg text-red-500'>
          Login
        </Link>
      </form>
    </div>
  )
}
