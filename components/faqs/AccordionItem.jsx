'use client'

import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'

export default function AccordionItem() {
  const [open, setOpen] = React.useState(1)

  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className='text-2xl'>
          What is Little Fashion?
        </AccordionHeader>
        <AccordionBody className='space-y-3 text-xl'>
          <p>
            <span className='text-gray-600 font-bold py-5'>Little Fashion</span>{' '}
            is free Bootstrap 5 website template for everyone. There are 8 HTML
            pages included in this template and you can expand more pages as you
            need.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className='text-2xl'>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody className='text-xl py-5'>
          <p>
            Convallis blandit massa, dictum mattis diam finibus sed. Integer
            elementum consectetur nibh, in varius dui fermentum nec. Nulla
            placerat aliquam turpis, vel dictum elit condimentum ut. Nunc orci.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className='text-2xl'>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody className='text-xl py-5'>
          <p>
            Nec, semper in erat. Ut fermentum semper ornare. Suspendisse non
            accumsan ex. Morbi molestie ante eget lectus.
          </p>
        </AccordionBody>
      </Accordion>
    </>
  )
}
