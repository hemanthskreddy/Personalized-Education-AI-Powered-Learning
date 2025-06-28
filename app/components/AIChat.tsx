'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X, Brain, User, GraduationCap } from 'lucide-react'
import toast from 'react-hot-toast'

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

interface UserProfile {
  name: string
  degree: string
  qualifications: string
  experience: string
  careerGoals: string
}

interface AIChatProps {
  isOpen: boolean
  onClose: () => void
  userProfile?: UserProfile
}

export default function AIChat({ isOpen, onClose, userProfile }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: userProfile ? 
        `Hello ${userProfile.name}! I'm your personalized education and career counselor. I can see you have a ${userProfile.degree} degree and want to become a ${userProfile.careerGoals}. Let me help you create a customized learning roadmap based on your background and goals. What specific aspects of your career development would you like to discuss?` :
        'Hello! I\'m your personalized education and career counselor. I can help you create a customized learning roadmap based on your qualifications, interests, and career goals. What\'s your educational background and what career path interests you?',
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const requestBody = {
        message: inputMessage,
        userProfile: userProfile || null
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        throw new Error('Failed to get AI response')
      }

      const data = await response.json()
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'ai',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Failed to get AI response. Please try again.')
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I apologize, but I\'m having trouble responding right now. Please try again later, or you can ask me about your educational background and career goals for personalized guidance.',
        sender: 'ai',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const quickQuestions = userProfile ? [
    `Based on my ${userProfile.degree} degree, what's my career roadmap?`,
    `I want to become a ${userProfile.careerGoals}, what skills do I need?`,
    `Help me create a learning plan for my ${userProfile.experience} experience level`,
    `What certifications should I pursue for ${userProfile.careerGoals}?`,
    `How can I leverage my ${userProfile.degree} background for better opportunities?`
  ] : [
    "I have a Computer Science degree, what's my career roadmap?",
    "I'm an Engineering graduate, help me with my learning path",
    "I have a Business background, how can I transition to tech?",
    "What skills should I learn for AI/ML careers?",
    "Help me create a personalized education plan"
  ]

  const sendQuickQuestion = (question: string) => {
    setInputMessage(question)
    setTimeout(() => {
      sendMessage()
    }, 100)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[800px] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-8 w-8 text-primary-600" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Personalized Education & Career Counselor</h2>
                  {userProfile && (
                    <p className="text-sm text-gray-600">
                      {userProfile.name} • {userProfile.degree} • {userProfile.careerGoals}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-6 py-4 ${
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {message.sender === 'ai' && (
                        <Brain className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-base leading-relaxed">{message.text}</p>
                        <p className="text-xs opacity-70 mt-2">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                      {message.sender === 'user' && (
                        <User className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 rounded-lg px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <Brain className="h-5 w-5 text-primary-600" />
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-6 py-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3 font-medium">Quick questions you can ask:</p>
                <div className="flex flex-wrap gap-3">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => sendQuickQuestion(question)}
                      className="text-sm bg-primary-50 text-primary-700 px-4 py-2 rounded-lg hover:bg-primary-100 transition-colors border border-primary-200"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={userProfile ? 
                    `Ask me about your ${userProfile.degree} career path, skills for ${userProfile.careerGoals}, or personalized learning recommendations...` :
                    "Tell me about your background, qualifications, and career goals..."
                  }
                  className="flex-1 input-field text-base"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="btn-primary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 