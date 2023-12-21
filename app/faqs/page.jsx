import AccordionItem from '@/components/faqs/AccordionItem'

export default function FaqsPage() {
  return (
    <div className='3xl:h-screen'>
      <div className='bg-[#eff8ff] py-20'>
        <h2 className='text-[4rem] font-extrabold container'>
          <span className='text-[4rem] font-extrabold text-primary'>
            Your favorite questions
          </span>
          <br /> and our answers to them
        </h2>
      </div>
      {/*Collapse*/}
      <div className='container h-fit mt-10'>
        <h1>General Info.</h1>
        <AccordionItem />
      </div>
      <div className='bg-[#eff8ff] py-20 mt-20 text-end'>
        <h2 className='text-[4rem] font-extrabold container'>
          <span className='text-[4rem] font-extrabold text-primary'>
            Convallis blandit massa
          </span>
          <br /> diam finibus sed
        </h2>
      </div>
    </div>
  )
}
