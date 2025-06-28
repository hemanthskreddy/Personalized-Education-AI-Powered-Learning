'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  BookOpen, 
  Users, 
  Target, 
  ArrowRight, 
  Play,
  Star,
  CheckCircle,
  Zap,
  BarChart3,
  GraduationCap,
  Briefcase,
  Map,
  User
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Career Guidance',
      description: 'Get personalized education roadmaps based on your qualifications and career goals'
    },
    {
      icon: Map,
      title: 'Personalized Career Roadmaps',
      description: 'Detailed step-by-step paths tailored to your background and aspirations'
    },
    {
      icon: GraduationCap,
      title: 'Qualification-Based Counseling',
      description: 'Career advice specifically designed for your educational background'
    },
    {
      icon: BarChart3,
      title: 'Career Progress Tracking',
      description: 'Monitor your skill development and career readiness progress'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Computer Science Graduate',
      content: 'EduAI helped me create a perfect roadmap from CS to AI/ML. The personalized guidance was exactly what I needed.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Engineering Professional',
      content: 'The AI career counselor understood my background and created a tailored path to transition into software development.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Business Graduate',
      content: 'EduAI showed me how to leverage my business degree in tech. The roadmap was clear and achievable.',
      rating: 5
    }
  ]

  const careerPaths = [
    {
      title: 'Computer Science to AI/ML',
      description: 'Transition from CS to AI/ML roles with structured learning path',
      icon: Brain,
      steps: ['Master Python', 'Learn ML Algorithms', 'Build Projects', 'Get Certifications']
    },
    {
      title: 'Engineering to Software Development',
      description: 'Leverage engineering background for software development careers',
      icon: Target,
      steps: ['Learn Programming', 'Master Tools', 'Build Portfolio', 'Network']
    },
    {
      title: 'Business to Tech',
      description: 'Use business skills to transition into tech roles',
      icon: Briefcase,
      steps: ['Learn Basic Coding', 'Understand Tech', 'Focus on PM/BA', 'Build Experience']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">EduAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
              <a href="#careers" className="text-gray-600 hover:text-primary-600 transition-colors">Career Paths</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary-600 transition-colors">Testimonials</a>
              <Link href="/auth/login" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Personalized Education
                <span className="text-primary-600"> & Career Roadmaps</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get AI-powered personalized education roadmaps and career guidance based on your qualifications, 
                skills, and career aspirations. Transform your learning journey with intelligent recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/register" className="btn-primary text-lg px-8 py-3">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-gray-600">4.9/5</span>
                </div>
                <span className="text-gray-600">•</span>
                <span className="text-gray-600">10,000+ Students</span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-600">50+ Career Paths</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="card p-8 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">AI Career Counselor</h3>
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Personalized career roadmaps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Qualification-based guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Real-time career counseling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Skills development planning</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose EduAI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform creates personalized education roadmaps and career guidance 
              tailored to your qualifications, background, and career aspirations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section id="careers" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Career Paths
            </h2>
            <p className="text-xl text-gray-600">
              Discover personalized roadmaps for different educational backgrounds
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <path.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {path.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {path.description}
                </p>
                <div className="space-y-2">
                  {path.steps.map((step, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of learners who have transformed their careers with personalized guidance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already experiencing personalized education and career guidance.
          </p>
          <Link href="/auth/register" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
            Start Your Career Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-primary-400" />
                <span className="text-xl font-bold">EduAI</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing education through AI-powered personalized career guidance and learning roadmaps.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Career Guidance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Learning Roadmaps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Counselor</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 