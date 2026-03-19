import { NextRequest, NextResponse } from 'next/server'
import { AppDataSource } from '@/lib/database'
import { User } from '@/entities/User'

export async function GET() {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize()
    }
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    return NextResponse.json(users, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize()
    }
    const body = await request.json()
    const { name, email } = body
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }
    const userRepository = AppDataSource.getRepository(User)
    const user = userRepository.create({ name, email })
    await userRepository.save(user)
    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    )
  }
}