import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/prisma/prismadb'
import bcrypt from 'bcryptjs'

export const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials
        try {
          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          })

          if (!user) {
            console.log('User not found')
          }

          const isPasswordValid = await bcrypt.compare(password, user.password)
          if (!isPasswordValid) {
            console.log('Password is not valid')
          }

          return user
        } catch (e) {
          console.log(e)
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
}

const handler = NextAuth(options)

export { handler as GET, handler as POST }
