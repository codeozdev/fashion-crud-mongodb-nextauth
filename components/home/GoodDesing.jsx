'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function GoodDesing() {
  const [intro, setIntro] = useState(true)
  const [how, setHow] = useState(false)
  const [cap, setCap] = useState(false)

  const handleIntro = () => {
    setIntro(true)
    setHow(false)
    setCap(false)
  }
  const handleHow = () => {
    setIntro(false)
    setHow(true)
    setCap(false)
  }
  const handleCap = () => {
    setIntro(false)
    setHow(false)
    setCap(true)
  }

  return (
    <div className='container py-10'>
      <h1 className='text-center'>
        Get started with <span className='text-primary'>Little</span> Fashion
      </h1>
      {/* GRID */}
      <div className='grid grid-cols-3 place-items-center'>
        <div className='flex justify-center flex-col gap-4 '>
          <button
            className='text-[1.125rem] font-bold hover:text-primary'
            onClick={handleIntro}>
            Introduction
          </button>
          <button
            className='text-[1.125rem] font-bold hover:text-primary'
            onClick={handleHow}>
            How we work?
          </button>
          <button
            className='text-[1.125rem] font-bold hover:text-primary'
            onClick={handleCap}>
            Capabilites
          </button>
        </div>
        <div className=''>
          {intro && (
            <Image
              src='/desing/1.jpeg'
              alt='desing'
              width={500}
              height={500}
              className='object-cover w-[90%]'
            />
          )}

          {how && (
            <Image
              src='/desing/2.webp'
              alt='desing'
              width={500}
              height={500}
              className='object-cover w-[90%] 3xl:h-[384.3px]'
            />
          )}

          {cap && (
            <Image
              src='/desing/2.jpeg'
              alt='desing'
              width={500}
              height={500}
              className='object-cover w-[90%]'
            />
          )}
        </div>

        {/* CLICK */}
        {intro && (
          <div>
            <h2 className='text-[2rem] font-bold'>
              Good <span className='text-primary'>Design</span> <br></br> Ideas
              for
              <span className='text-primary'> your </span>
              fashion
            </h2>

            <p className='3xl:text-[1.25rem] text-neutral-500 max-w-md my-5 3xl:my-10'>
              Little Fashion templates comes with sign in / sign up pages,
              product listing / product detail, about, FAQs, and contact page.
            </p>

            <p className='3xl:text-[1.25rem]3xl:text-[1.25rem] text-neutral-500 max-w-md'>
              Little Fashion templates comes with sign in / sign up pages,
              product listing / product detail, about, FAQs, and contact page.
            </p>
            <p className='font-bold text-sm text-neutral-600 mt-3'>
              LEARN MORE ABOUT US
            </p>
          </div>
        )}

        {how && (
          <div>
            <h2 className='text-[2rem] font-bold'>Life at Studio</h2>
            <p className='3xl:text-[1.25rem] text-neutral-500 max-w-md my-5 3xl:my-5'>
              Over three years in business, We{"'"}ve had the chance to work on
              a variety of projects, with companies
            </p>

            <p className='3xl:text-[1.25rem]3xl:text-[1.25rem] text-neutral-500 max-w-md'>
              Custom work is branding, web design, UI/UX design
            </p>
            <p className='font-bold text-sm text-neutral-600 mt-24'>
              WORK WITH US
            </p>
          </div>
        )}

        {cap && (
          <div>
            <h2 className='text-[2rem] font-bold'>What can help you?</h2>
            <p className='3xl:text-[1.25rem] text-neutral-500 max-w-md my-5 3xl:my-5'>
              Over three years in business, We{"'"}ve had the chance on projects
            </p>

            <div className='flex flex-col gap-3'>
              <div className='flex justify-between items-center'>
                <p className='font-bold pr-3'>Branding</p>
                <hr className='flex-1' />
                <h3 className='font-bold pl-3'>90%</h3>
              </div>
              <div className='flex justify-between items-center'>
                <p className='font-bold pr-3'>Design & Stragety</p>
                <hr className='flex-1' />
                <h3 className='font-bold pl-3'>70%</h3>
              </div>
              <div className='flex justify-between items-center'>
                <p className='font-bold pr-3'>Online Platform</p>
                <hr className='flex-1' />
                <h3 className='font-bold pl-3'>80%</h3>
              </div>
            </div>
            <p className='font-bold text-sm text-neutral-600 mt-6 3xl:mt-12'>
              WORK WITH US
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
