import { getServerSession } from 'next-auth/next'
import { options } from '@/app/api/auth/[...nextauth]/route'
import SignOut from '@/components/SignOut'
import Image from 'next/image'

export default async function AccountPage() {
  const session = await getServerSession(options)

  return (
    <div className='flex flex-col h-[calc(100vh-452px)] justify-center items-center '>
      <h1>Account Page</h1>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      {session.user.image ? (
        <Image src={session.user.image} alt='img' width={100} height={100} />
      ) : (
        <div>
          <p>Profil resmi bulunamadı.</p>
        </div>
      )}
      <SignOut />
    </div>
  )
}
