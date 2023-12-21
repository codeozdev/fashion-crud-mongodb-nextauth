import Featured from '@/components/home/Featured'
import Popular from '@/components/products/Popular'

export default function ProductsPage() {
  return (
    <div>
      <div className='bg-[#eff8ff] py-20'>
        <h2 className='text-[4rem] font-extrabold container'>
          <span className='text-[4rem] font-extrabold text-primary'>
            Choose your
          </span>
          <br /> favorite stuffs
        </h2>
      </div>
      <Featured />
      <Popular />
    </div>
  )
}
