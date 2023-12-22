import Image from 'next/image'
import ModalShow from '@/components/story/ModalShow'

const characters = [
  {
    id: 1,
    name: 'Don Haruko',
    role: 'Product, VP',
    description1:
      'The Urban Minimalist! Embracing the simplicity of city life, Alex believes less is more when it comes to fashion.',
    description2:
      'With a wardrobe dominated by clean lines, neutral tones, and versatile pieces, Alex effortlessly achieves a polished and sophisticated look',
    image: '/story/1.jpeg',
  },
  {
    id: 2,
    name: 'Kelly',
    role: 'Marketing',
    description1:
      'The Urban Minimalist! Embracing the simplicity of city life, Alex believes less is more when it comes to fashion.',
    description2:
      'With a wardrobe dominated by clean lines, neutral tones, and versatile pieces, Alex effortlessly achieves a polished and sophisticated look',
    image: '/story/2.jpeg',
  },
  {
    id: 3,
    name: 'Marie',
    role: 'Founder',
    description1:
      'The Urban Minimalist! Embracing the simplicity of city life, Alex believes less is more when it comes to fashion.',
    description2:
      'With a wardrobe dominated by clean lines, neutral tones, and versatile pieces, Alex effortlessly achieves a polished and sophisticated look',
    image: '/story/3.jpeg',
  },
]

export default function Characters() {
  return (
    <>
      {characters.map((character) => (
        <div
          key={character.id}
          className='flex items-center justify-between gap-5 bg-white p-10 w-full rounded'>
          <Image
            src={character.image}
            alt='retail'
            width={85}
            height={85}
            className='object-cover rounded-full'
            quality={100}
          />
          <div className='flex-1'>
            <h3>{character.name}</h3>
            <p className='font-bold'>{character.role}</p>
          </div>
          <div className=' '>
            <ModalShow
              name={character.name}
              role={character.role}
              description1={character.description1}
              description2={character.description2}
            />
          </div>
        </div>
      ))}
    </>
  )
}
