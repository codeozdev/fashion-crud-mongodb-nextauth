export default function Modal({ children, modalOpen, setModalOpen }) {
  return (
    <>
      {modalOpen && (
        <div className='bg-black/50 fixed inset-0 z-20'>
          <div className='flex justify-center items-center h-full'>
            <div className='flex flex-col bg-white text-black w-1/2 p-5 items-center'>
              <button
                className='text-5xl ml-auto'
                onClick={() => setModalOpen(false)}>
                &times;
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

//Burada sadece Modal cercevesi olusturuldu. Rengi, boyutu icerik ise ModalShow componentinde olusturuldu.
