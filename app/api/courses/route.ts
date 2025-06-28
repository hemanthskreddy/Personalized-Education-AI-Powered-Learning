import { NextRequest, NextResponse } from 'next/server'

// Demo course data
const demoCourses = [
  {
    id: '1',
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of ML algorithms and applications',
    progress: 75,
    difficulty: 'Intermediate',
    category: 'Computer Science',
    estimatedTime: '8 weeks',
    lessons: 24,
    completedLessons: 18
  },
  {
    id: '2',
    title: 'Advanced JavaScript Concepts',
    description: 'Master modern JavaScript features and best practices',
    progress: 45,
    difficulty: 'Advanced',
    category: 'Programming',
    estimatedTime: '6 weeks',
    lessons: 18,
    completedLessons: 8
  },
  {
    id: '3',
    title: 'Data Science Fundamentals',
    description: 'Essential concepts in data analysis and visualization',
    progress: 90,
    difficulty: 'Beginner',
    category: 'Data Science',
    estimatedTime: '10 weeks',
    lessons: 30,
    completedLessons: 27
  }
]

export async function GET() {
  try {
    // In a real app, you would fetch from MongoDB here
    // For demo purposes, return static data
    return NextResponse.json({ courses: demoCourses })
  } catch (error) {
    console.error('Error fetching courses:', error)
    return NextResponse.json({ courses: demoCourses })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    // In a real app, you would save to MongoDB here
    return NextResponse.json({ message: 'Course created successfully', course: body })
  } catch (error) {
    console.error('Error creating course:', error)
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 })
  }
} 