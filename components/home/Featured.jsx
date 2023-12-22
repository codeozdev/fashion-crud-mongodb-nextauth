import Image from 'next/image'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'

export default function Featured() {
  return (
    <div className='my-20 container'>
      <h1 className='text-center'>Featured Products</h1>
      {/* GRID */}
      <div className='grid grid-cols-3 gap-10'>
        <div className='mt-5'>
          <div className='relative'>
            <Image
              src={'/featured/1.jpeg'}
              alt='desing'
              width={700}
              height={700}
              className='object-cover'
            />
            <p className='absolute top-5 left-5 bg-white py-2 px-4 text-sm font-semibold'>
              New Arrival
            </p>
            <FaHeart
              className='absolute top-5 right-5  fill-white hover:fill-red-500 cursor-pointer'
              size={30}
            />
          </div>
          <div className='p-8'>
            <div className='flex items-center justify-between'>
              <h3>Tree pot</h3>
              <p>$25</p>
            </div>
            <p className='text-sm'>Original package design from house</p>
          </div>
        </div>

        <div className='mt-5'>
          <div className='relative'>
            <Image
              src={'/featured/2.jpeg'}
              alt='desing'
              width={700}
              height={700}
              className='object-cover'
            />
            <p className='absolute top-5 left-5 bg-white py-2 px-4 text-sm font-semibold'>
              Low Price
            </p>
            <FaHeart
              className='absolute top-5 right-5  fill-white hover:fill-red-500 cursor-pointer'
              size={30}
            />
          </div>
          <div className='p-8'>
            <div className='flex items-center justify-between'>
              <h3>Fashion Set</h3>
              <p>$35</p>
            </div>
            <p className='text-sm'>Costume Package</p>
          </div>
        </div>

        <div className='mt-5'>
          <div className='relative'>
            <Image
              src={'/featured/3.jpeg'}
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
              <h3>Juice Drinks</h3>
              <p>$45</p>
            </div>
            <p className='text-sm'>Nature made another world</p>
          </div>
        </div>
      </div>
      <Link
        href={'/products'}
        className='font-bold text-sm text-gray-600 underline underline-offset-8 decoration-2 flex items-center justify-center mt-10 w-full'>
        VIEW ALL PRODUCTS
      </Link>
    </div>
  )
}
