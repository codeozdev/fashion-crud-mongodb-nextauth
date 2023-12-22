import Image from 'next/image'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'

export default function Popular() {
  return (
    <div className='my-20 container pb-10'>
      <h1 className='text-center'>Popular</h1>
      {/* GRID */}
      <div className='grid grid-cols-3 gap-10'>
        <div className='mt-5'>
          <div className='relative'>
            <Image
              src={'/products/1.jpeg'}
              alt='desing'
              width={700}
              height={700}
              className='object-cover'
            />
            <p className='absolute top-5 left-5 bg-white py-2 px-4 text-sm font-semibold'>
              Trending
            </p>
            <FaHeart
              className='absolute top-5 right-5  fill-white hover:fill-red-500 cursor-pointer'
              size={30}
            />
          </div>
          <div className='p-8'>
            <div className='flex items-center justify-between'>
              <h3>Package</h3>
              <p>$50</p>
            </div>
            <p className='text-sm'>Original package design from house</p>
          </div>
        </div>

        <div className='mt-5'>
          <div className='relative'>
            <Image
              src={'/products/2.jpeg'}
              alt='desing'
              width={700}
              height={700}
              className='object-cover'
            />

            <FaHeart
              className='absolute top-5 right-5  fill-white hover:fill-red-500 cursor-pointer'
              size={30}
            />
          </div>
          <div className='p-8'>
            <div className='flex items-center justify-between'>
              <h3>Bottle</h3>
              <p>$10</p>
            </div>
            <p className='text-sm'>Package desing</p>
          </div>
        </div>

        <div className='mt-5'>
          <div className='relative'>
            <Image
              src={'/products/3.jpeg'}
              alt='desing'
              width={700}
              height={700}
              className='object-cover'
            />
            <FaHeart
              className='absolute top-5 right-5  fill-white hover:fill-red-500 cursor-pointer'
              size={30}
            />
          </div>
          <div className='p-8'>
            <div className='flex items-center justify-between'>
              <h3>Medicane</h3>
              <p>$200</p>
            </div>
            <p className='text-sm'>Original desing from house</p>
          </div>
        </div>
      </div>
    </div>
  )
}
