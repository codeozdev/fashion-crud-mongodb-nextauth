'use client'

import { useState } from 'react'
import Modal from '@/components/story/Modal'

import { FaYoutube } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { BsChevronDoubleDown } from 'react-icons/bs'

export default function ModalShow({ name, role, description1, description2 }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className='text-lg animate-bounce'>
        <BsChevronDoubleDown />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='divide-y space-y-10'>
          <div className='text-center'>
            <h2 className='text-[2.25rem] font-bold'>{name}</h2>
            <p className='font-bold text-lg'>{role}</p>
          </div>

          <div className='mt-10 grid grid-cols-2 p-10 gap-5'>
            <p className='text-center'>{description1}</p>
            <p className='text-center'>{description2}</p>
          </div>
        </div>

        <div className='flex items-center gap-3 justify-start w-full'>
          <p className='text-sm font-bold items-start'>Where to find?</p>
          <FaYoutube />
          <FaWhatsapp />
          <FaInstagram />
        </div>
      </Modal>
    </div>
  )
}
