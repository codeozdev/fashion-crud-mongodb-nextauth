'use client'
import Image from 'next/image'
import Slider from 'react-slick'

export default function SlideShow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className='container text-center py-20'>
      <h1 className='select-none'>
        Customer love, <br /> <span className='text-primary'>Little </span>
        Fashion
      </h1>
      <Slider {...settings}>
        <div className='max-w-3xl space-y-7 my-4'>
          <p className='text-2xl font-extralight  tracking-widest'>
            Over three years in business, We{"'"}ve had the chance to work on a
            variety of projects, with companies Lorem ipsum dolar sit amet
          </p>
          <div className='flex items-center gap-4'>
            <Image
              src='/story/4.jpeg'
              alt='retail'
              width={55}
              height={55}
              className='object-cover rounded-full '
            />
            <h2>
              Catherine, <span className='font-bold'>Digital Art Fashion</span>
            </h2>
          </div>
        </div>

        <div className='max-w-3xl space-y-7 my-4'>
          <p className='text-2xl font-extralight  tracking-widest'>
            Over three years in business, We{"'"}ve had the chance to work on a
            variety of projects, with companies Lorem ipsum dolar sit amet
          </p>
          <div className='flex items-center gap-4'>
            <Image
              src='/story/2.jpeg'
              alt='retail'
              width={55}
              height={55}
              className='object-cover rounded-full '
            />
            <h2>
              Marie, <span className='font-bold'>Art Fashion Desing</span>
            </h2>
          </div>
        </div>

        <div className='max-w-3xl space-y-7 my-4'>
          <p className='text-2xl font-extralight  tracking-widest'>
            Over three years in business, We{"'"}ve had the chance to work on a
            variety of projects, with companies Lorem ipsum dolar sit amet
          </p>
          <div className='flex items-center gap-4'>
            <Image
              src='/story/3.jpeg'
              alt='retail'
              width={55}
              height={55}
              className='object-cover rounded-full '
            />
            <h2>
              Sandar, <span className='font-bold'>Zoom Fashion Idea</span>
            </h2>
          </div>
        </div>
      </Slider>
    </div>
  )
}
