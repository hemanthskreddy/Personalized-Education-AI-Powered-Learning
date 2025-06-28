'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Clock, 
  Award,
  MessageSquare,
  Zap,
  BarChart3,
  Play,
  CheckCircle,
  Star,
  GraduationCap,
  Briefcase,
  User,
  Map,
  Edit,
  Save
} from 'lucide-react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import AIChat from '../components/AIChat'

interface UserProfile {
  name: string
  degree: string
  qualifications: string
  experience: string
  careerGoals: string
}

interface CareerRecommendation {
  id: string
  type: 'roadmap' | 'skill' | 'career'
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  reason: string
  field: string
  steps?: string[]
}

interface LearningPath {
  id: string
  title: string
  description: string
  progress: number
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  category: string
  estimatedTime: string
  skills: string[]
  completedSkills: number
}

export default function Dashboard() {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'John Student',
    degree: 'Computer Science',
    qualifications: 'Bachelor\'s in Computer Science',
    experience: '1-2 years programming',
    careerGoals: 'AI/ML Engineer'
  })
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [careerRecommendations, setCareerRecommendations] = useState<CareerRecommendation[]>([])
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isChatOpen, setIsChatOpen] = useState(false)

  useEffect(() => {
    // Generate personalized recommendations based on user profile
    console.log('Generating recommendations for profile:', userProfile)
    generatePersonalizedRecommendations()
    setIsLoading(false)
  }, [userProfile])

  const generatePersonalizedRecommendations = () => {
    const { degree, qualifications, experience, careerGoals } = userProfile
    
    console.log('Generating recommendations with:', { degree, experience, careerGoals })
    
    // Generate recommendations based on user profile
    let recommendations: CareerRecommendation[] = []
    let paths: LearningPath[] = []

    if (degree.toLowerCase().includes('computer science') || degree.toLowerCase().includes('cs')) {
      console.log('Generating Computer Science recommendations')
      recommendations = [
        {
          id: '1',
          type: 'roadmap',
          title: 'AI/ML Career Roadmap',
          description: 'Complete roadmap for transitioning into AI/ML roles with detailed skill progression',
          priority: 'high',
          reason: `Based on your ${degree} background and ${careerGoals} goals`,
          field: 'Computer Science',
          steps: [
            'Master Python programming fundamentals',
            'Learn data structures and algorithms',
            'Study machine learning basics',
            'Build ML projects portfolio',
            'Get industry certifications',
            'Apply for AI/ML internships'
          ]
        },
        {
          id: '2',
          type: 'career',
          title: 'Full-Stack Development Path',
          description: 'Comprehensive path to become a full-stack developer with modern technologies',
          priority: 'medium',
          reason: 'Your programming experience shows strong technical aptitude',
          field: 'Programming',
          steps: [
            'Learn HTML, CSS, JavaScript',
            'Master React.js framework',
            'Learn backend development (Node.js)',
            'Database management skills',
            'DevOps and deployment',
            'Build full-stack projects'
          ]
        }
      ]

      paths = [
        {
          id: '1',
          title: 'Machine Learning Fundamentals',
          description: 'Learn the fundamentals of ML algorithms and applications',
          progress: 75,
          difficulty: 'Intermediate',
          category: 'AI/ML',
          estimatedTime: '8 weeks',
          skills: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Data Visualization'],
          completedSkills: 4
        },
        {
          id: '2',
          title: 'Advanced JavaScript & React',
          description: 'Master modern JavaScript features and React development',
          progress: 45,
          difficulty: 'Advanced',
          category: 'Web Development',
          estimatedTime: '6 weeks',
          skills: ['JavaScript', 'React.js', 'Node.js', 'Express', 'MongoDB'],
          completedSkills: 2
        }
      ]
    } else if (degree.toLowerCase().includes('engineering')) {
      console.log('Generating Engineering recommendations')
      recommendations = [
        {
          id: '1',
          type: 'roadmap',
          title: 'Engineering to Software Development',
          description: 'Leverage your engineering background for software development careers',
          priority: 'high',
          reason: `Your ${degree} degree provides excellent problem-solving skills`,
          field: 'Engineering',
          steps: [
            'Strengthen programming fundamentals',
            'Learn software development methodologies',
            'Master relevant tools (Git, Docker)',
            'Build technical projects',
            'Gain industry experience',
            'Transition to software roles'
          ]
        }
      ]

      paths = [
        {
          id: '1',
          title: 'Software Engineering Fundamentals',
          description: 'Essential software development skills for engineers',
          progress: 60,
          difficulty: 'Intermediate',
          category: 'Software Development',
          estimatedTime: '10 weeks',
          skills: ['Programming', 'Software Design', 'Version Control', 'Testing', 'Deployment'],
          completedSkills: 3
        }
      ]
    } else if (degree.toLowerCase().includes('business')) {
      console.log('Generating Business recommendations')
      recommendations = [
        {
          id: '1',
          type: 'roadmap',
          title: 'Business to Tech Transition',
          description: 'Use your business skills to transition into tech roles',
          priority: 'high',
          reason: `Your ${degree} background is valuable for tech business roles`,
          field: 'Business',
          steps: [
            'Learn basic programming (Python, SQL)',
            'Understand digital tools and platforms',
            'Develop technical literacy',
            'Focus on product management',
            'Build digital projects',
            'Network in tech industry'
          ]
        }
      ]

      paths = [
        {
          id: '1',
          title: 'Digital Business & Analytics',
          description: 'Combine business knowledge with technical skills',
          progress: 40,
          difficulty: 'Beginner',
          category: 'Business Tech',
          estimatedTime: '12 weeks',
          skills: ['Python', 'SQL', 'Data Analysis', 'Digital Marketing', 'Product Management'],
          completedSkills: 2
        }
      ]
    } else {
      console.log('No specific degree match, generating default recommendations')
      // Default recommendations for any degree
      recommendations = [
        {
          id: '1',
          type: 'roadmap',
          title: 'General Tech Career Roadmap',
          description: 'Comprehensive roadmap for transitioning into tech careers',
          priority: 'high',
          reason: `Based on your ${degree} background and ${careerGoals} goals`,
          field: 'General',
          steps: [
            'Learn programming fundamentals (Python, JavaScript)',
            'Understand software development basics',
            'Build portfolio projects',
            'Get relevant certifications',
            'Network with tech professionals',
            'Apply for entry-level positions'
          ]
        }
      ]

      paths = [
        {
          id: '1',
          title: 'Programming Fundamentals',
          description: 'Learn the basics of programming and software development',
          progress: 30,
          difficulty: 'Beginner',
          category: 'Programming',
          estimatedTime: '10 weeks',
          skills: ['Python', 'JavaScript', 'HTML/CSS', 'Git', 'Basic Algorithms'],
          completedSkills: 1
        }
      ]
    }

    console.log('Setting recommendations:', recommendations)
    console.log('Setting learning paths:', paths)
    
    setCareerRecommendations(recommendations)
    setLearningPaths(paths)
  }

  const handleProfileUpdate = (updatedProfile: UserProfile) => {
    setUserProfile(updatedProfile)
    setIsEditingProfile(false)
    toast.success('Profile updated! Generating new recommendations...')
  }

  const handleCareerRecommendation = (recommendation: CareerRecommendation) => {
    toast.success(`Opening: ${recommendation.title}`)
    // Handle recommendation action
  }

  const handleStartLearningPath = (pathId: string) => {
    toast.success('Starting learning path...')
    // Navigate to learning path
  }

  if (isLoading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center">
          <Brain className="h-12 w-12 text-primary-600 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading your personalized career dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">EduAI Career Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary-600">{userProfile.name.charAt(0)}</span>
                </div>
                <span className="text-sm text-gray-700">{userProfile.name}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Your Profile</h2>
              <button
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
              >
                {isEditingProfile ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                <span>{isEditingProfile ? 'Save' : 'Edit Profile'}</span>
              </button>
            </div>
            
            {isEditingProfile ? (
              <ProfileForm 
                profile={userProfile} 
                onSave={handleProfileUpdate}
                onCancel={() => setIsEditingProfile(false)}
              />
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Name</label>
                  <p className="text-gray-900">{userProfile.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Degree</label>
                  <p className="text-gray-900">{userProfile.degree}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Experience</label>
                  <p className="text-gray-900">{userProfile.experience}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Career Goal</label>
                  <p className="text-gray-900">{userProfile.careerGoals}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userProfile.name}! 👋
          </h1>
          <p className="text-gray-600">
            Your AI career counselor has prepared personalized education roadmaps and career recommendations based on your {userProfile.degree} background and {userProfile.careerGoals} goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Career Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Map className="h-5 w-5 text-blue-500 mr-2" />
                  Personalized Career Roadmaps
                </h2>
                <span className="text-sm text-gray-500">Updated based on your profile</span>
              </div>
              <div className="space-y-4">
                {careerRecommendations.map((recommendation, index) => (
                  <div
                    key={recommendation.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            recommendation.priority === 'high' ? 'bg-red-100 text-red-800' :
                            recommendation.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {recommendation.priority} priority
                          </span>
                          <span className="text-xs text-gray-500 capitalize">
                            {recommendation.type}
                          </span>
                          <span className="text-xs text-gray-500">
                            {recommendation.field}
                          </span>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-1">
                          {recommendation.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {recommendation.description}
                        </p>
                        <p className="text-xs text-gray-500 mb-3">
                          <strong>Why recommended:</strong> {recommendation.reason}
                        </p>
                        {recommendation.steps && (
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-xs font-medium text-gray-700 mb-2">Key Steps:</p>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {recommendation.steps.slice(0, 3).map((step, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-primary-600 mr-2">•</span>
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => handleCareerRecommendation(recommendation)}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        View Roadmap
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Learning Paths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
                Your Learning Paths
              </h2>
              <div className="space-y-6">
                {learningPaths.map((path) => (
                  <div key={path.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {path.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{path.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center">
                            <Target className="h-4 w-4 mr-1" />
                            {path.difficulty}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {path.estimatedTime}
                          </span>
                          <span className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {path.completedSkills}/{path.skills.length} skills
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {path.skills.map((skill, index) => (
                            <span
                              key={index}
                              className={`text-xs px-2 py-1 rounded-full ${
                                index < path.completedSkills
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => handleStartLearningPath(path.id)}
                        className="btn-primary flex items-center"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Continue
                      </button>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{path.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${path.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <BarChart3 className="h-5 w-5 text-primary-600 mr-2" />
                Your Career Progress
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Learning Paths</span>
                  <span className="font-semibold">{learningPaths.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Skills Acquired</span>
                  <span className="font-semibold">{learningPaths.reduce((acc, path) => acc + path.completedSkills, 0)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Study Streak</span>
                  <span className="font-semibold text-green-600">7 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Career Readiness</span>
                  <span className="font-semibold text-primary-600">87%</span>
                </div>
              </div>
            </motion.div>

            {/* AI Career Counselor */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 text-primary-600 mr-2" />
                AI Career Counselor
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get personalized education roadmaps and career guidance based on your qualifications, skills, and career goals.
              </p>
              <button 
                onClick={() => setIsChatOpen(true)}
                className="btn-primary w-full flex items-center justify-center"
              >
                <Brain className="h-4 w-4 mr-2" />
                Start Career Planning
              </button>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 text-primary-600 mr-2" />
                Career Milestones
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Path Completed</p>
                    <p className="text-xs text-gray-500">Data Science Fundamentals</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Career Milestone</p>
                    <p className="text-xs text-gray-500">AI/ML Roadmap Created</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* AI Chat Modal */}
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} userProfile={userProfile} />
    </div>
  )
}

// Profile Form Component
function ProfileForm({ profile, onSave, onCancel }: { 
  profile: UserProfile; 
  onSave: (profile: UserProfile) => void; 
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(profile)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="input-field"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
          <select
            value={formData.degree}
            onChange={(e) => setFormData({...formData, degree: e.target.value})}
            className="input-field"
            required
          >
            <option value="">Select Degree</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Business">Business</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
          <select
            value={formData.experience}
            onChange={(e) => setFormData({...formData, experience: e.target.value})}
            className="input-field"
            required
          >
            <option value="">Select Experience</option>
            <option value="No experience">No experience</option>
            <option value="1-2 years programming">1-2 years programming</option>
            <option value="3-5 years programming">3-5 years programming</option>
            <option value="5+ years programming">5+ years programming</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Career Goal</label>
          <select
            value={formData.careerGoals}
            onChange={(e) => setFormData({...formData, careerGoals: e.target.value})}
            className="input-field"
            required
          >
            <option value="">Select Goal</option>
            <option value="AI/ML Engineer">AI/ML Engineer</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Full-Stack Developer">Full-Stack Developer</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Qualifications</label>
        <textarea
          value={formData.qualifications}
          onChange={(e) => setFormData({...formData, qualifications: e.target.value})}
          className="input-field"
          rows={3}
          placeholder="Describe your qualifications, certifications, or relevant experience..."
        />
      </div>
      <div className="flex space-x-3">
        <button type="submit" className="btn-primary">
          Save Profile
        </button>
        <button type="button" onClick={onCancel} className="btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  )
} 