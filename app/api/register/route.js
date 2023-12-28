import { NextResponse } from 'next/server'
import prisma from '@/prisma/prismadb'
import bcrypt from 'bcryptjs'

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, name, password } = body

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 },
      )
    }

    const handlePassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: handlePassword,
      },
    })

    return NextResponse.json(
      newUser,
      { message: 'User created' },
      { status: 201 },
    )
  } catch (e) {
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 },
    )
  }
}
