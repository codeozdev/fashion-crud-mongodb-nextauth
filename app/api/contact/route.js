import prisma from '@/prisma/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    const new_post = await prisma.post.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    })

    return NextResponse.json(new_post)
  } catch (error) {
    return NextResponse.json({ message: 'POST ERROR', error }, { status: 500 })
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany()

    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ message: 'GET ERROR', error }, { status: 500 })
  }
}
