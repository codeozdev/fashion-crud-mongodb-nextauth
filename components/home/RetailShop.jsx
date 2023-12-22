import Image from 'next/image'

export default function RetailShop() {
  return (
    <div className='grid grid-cols-2 place-items-center gap-20 3xl:gap-5 my-20 bg-[#eff8ff]'>
      <Image
        src='/1.jpg'
        alt='retail'
        width={1920}
        height={1080}
        className='object-cover w-full  object-top'
        quality={100}
      />

      <div>
        <h1>
          <span className='text-primary animate-pulse'>Retail</span> shop owners
        </h1>

        <p className='text-[1.5rem]'>
          Credits go to Unsplash and FreePik websites for images used in this
          Little Fashion by Tooplate.
        </p>
        <p className='font-bold text-sm text-neutral-600 mt-10'>
          EXPLORE PRODUCTS
        </p>
      </div>
    </div>
  )
}
