import { NextRequest, NextResponse } from 'next/server'

// Demo user credentials
const demoUser = {
  email: 'demo@eduai.com',
  password: 'demo123',
  name: 'John Student',
  id: '1'
}

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    // Demo authentication
    if (email === demoUser.email && password === demoUser.password) {
      return NextResponse.json({
        success: true,
        user: {
          id: demoUser.id,
          name: demoUser.name,
          email: demoUser.email
        },
        message: 'Login successful'
      })
    } else {
      return NextResponse.json({
        success: false,
        message: 'Invalid credentials. Use demo@eduai.com / demo123'
      }, { status: 401 })
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({
      success: false,
      message: 'Login failed'
    }, { status: 500 })
  }
} 