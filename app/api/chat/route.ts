import { NextRequest, NextResponse } from 'next/server'

interface UserProfile {
  name: string
  degree: string
  qualifications: string
  experience: string
  careerGoals: string
}

// Detailed career roadmaps by qualification
const careerRoadmaps = {
  computerScience: {
    title: "Computer Science Career Roadmap",
    steps: [
      "1. Master Core Programming (Python, Java, JavaScript)",
      "2. Learn Data Structures & Algorithms",
      "3. Choose Specialization: AI/ML, Web Development, or Data Science",
      "4. Build Portfolio Projects",
      "5. Get Industry Certifications (AWS, Azure, Google Cloud)",
      "6. Network and Apply for Internships",
      "7. Start with Junior Developer Role",
      "8. Advance to Senior/Lead Positions"
    ],
    careers: [
      "Software Engineer", "Data Scientist", "AI/ML Engineer", 
      "Full-Stack Developer", "DevOps Engineer", "Cybersecurity Analyst"
    ]
  },
  engineering: {
    title: "Engineering to Tech Career Roadmap",
    steps: [
      "1. Strengthen Programming Fundamentals (Python, C++, Java)",
      "2. Learn Software Development Methodologies",
      "3. Master Relevant Tools (Git, Docker, Cloud Platforms)",
      "4. Build Technical Projects",
      "5. Gain Industry Experience Through Internships",
      "6. Consider Advanced Certifications",
      "7. Transition to Software Engineering Roles",
      "8. Specialize in Embedded Systems or Robotics"
    ],
    careers: [
      "Software Engineer", "Systems Engineer", "Data Engineer", 
      "Technical Consultant", "Embedded Systems Engineer"
    ]
  },
  business: {
    title: "Business to Tech Career Roadmap",
    steps: [
      "1. Learn Basic Programming (Python, SQL)",
      "2. Understand Digital Tools and Platforms",
      "3. Develop Technical Literacy",
      "4. Focus on Product Management or Data Analysis",
      "5. Build Digital Projects",
      "6. Network in Tech Industry",
      "7. Consider Relevant Certifications",
      "8. Start with Business Analyst Role"
    ],
    careers: [
      "Product Manager", "Business Analyst", "Digital Marketing Manager", 
      "Data Analyst", "Digital Transformation Specialist"
    ]
  }
}

// Skill recommendations by career path
const skillRecommendations = {
  ai_ml: [
    "Python (NumPy, Pandas, Scikit-learn)",
    "Deep Learning (TensorFlow, PyTorch)",
    "Machine Learning Algorithms",
    "Data Visualization (Matplotlib, Seaborn)",
    "Statistics and Mathematics",
    "Cloud Platforms (AWS SageMaker, Google AI)"
  ],
  web_development: [
    "HTML, CSS, JavaScript",
    "React.js or Vue.js",
    "Node.js and Express",
    "Database Management (SQL, MongoDB)",
    "Git and Version Control",
    "Deployment and DevOps"
  ],
  data_science: [
    "Python for Data Analysis",
    "SQL and Database Management",
    "Statistical Analysis",
    "Data Visualization Tools",
    "Machine Learning Basics",
    "Big Data Technologies"
  ]
}

export async function POST(req: NextRequest) {
  try {
    const { message, userProfile } = await req.json()
    
    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const apiKey = process.env.HUGGINGFACE_API_KEY
    const lowerMessage = message.toLowerCase()

    // Enhanced career guidance responses with user profile context
    let response = getPersonalizedCareerGuidance(lowerMessage, userProfile)

    // Try to get AI response if API key is available
    if (apiKey && apiKey !== 'your_huggingface_api_key_here') {
      try {
        const contextPrompt = userProfile ? 
          `You are an expert career counselor. User Profile: ${userProfile.name} has a ${userProfile.degree} degree, ${userProfile.experience} experience, and wants to become a ${userProfile.careerGoals}. User asks: ${message}. Provide detailed, personalized career guidance with specific steps and recommendations based on their background.` :
          `You are an expert career counselor specializing in tech careers. A student asks: ${message}. Provide detailed, practical career guidance with specific steps and recommendations.`

        const aiResponse = await fetch(
          'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              inputs: contextPrompt,
              parameters: {
                max_length: 300,
                temperature: 0.7,
                do_sample: true,
                top_p: 0.9,
              },
            }),
          }
        )

        if (aiResponse.ok) {
          const data = await aiResponse.json()
          const generatedText = data[0]?.generated_text
          if (generatedText && generatedText.length > 20) {
            // Combine AI response with our structured guidance
            response = `${generatedText}\n\n${response}`
          }
        }
      } catch (error) {
        console.error('Hugging Face API error:', error)
        // Continue with our structured response
      }
    }

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Chat API error:', error)
    const fallbackResponse = "I'm here to help you with your career planning! Please tell me about your educational background, current skills, and career goals so I can provide personalized guidance and roadmaps."
    return NextResponse.json({ response: fallbackResponse })
  }
}

function getPersonalizedCareerGuidance(message: string, userProfile?: UserProfile): string {
  // If user profile is available, provide highly personalized responses
  if (userProfile) {
    const { name, degree, experience, careerGoals } = userProfile
    
    // Personalized roadmap based on user's background
    if (message.includes('roadmap') || message.includes('path') || message.includes('plan')) {
      if (degree.toLowerCase().includes('computer science') || degree.toLowerCase().includes('cs')) {
        const roadmap = careerRoadmaps.computerScience
        return `🎯 Personalized Career Roadmap for ${name}:\n\nBased on your ${degree} degree and goal to become a ${careerGoals}, here's your customized path:\n\n${roadmap.steps.join('\n')}\n\n💼 Recommended Career Paths for you:\n${roadmap.careers.join(', ')}\n\n📈 Next Steps:\n1. Focus on ${careerGoals.toLowerCase()} specific skills\n2. Build projects showcasing your ${experience} experience\n3. Network with professionals in ${careerGoals} field\n4. Consider relevant certifications for ${careerGoals}`
      }
      if (degree.toLowerCase().includes('engineering')) {
        const roadmap = careerRoadmaps.engineering
        return `🎯 Personalized Career Roadmap for ${name}:\n\nLeveraging your ${degree} background to become a ${careerGoals}:\n\n${roadmap.steps.join('\n')}\n\n💼 Recommended Career Paths for you:\n${roadmap.careers.join(', ')}\n\n📈 Next Steps:\n1. Build on your engineering problem-solving skills\n2. Develop ${careerGoals.toLowerCase()} specific technical skills\n3. Create projects that bridge engineering and ${careerGoals}\n4. Network with engineering professionals in tech`
      }
      if (degree.toLowerCase().includes('business')) {
        const roadmap = careerRoadmaps.business
        return `🎯 Personalized Career Roadmap for ${name}:\n\nUsing your ${degree} background to transition into ${careerGoals}:\n\n${roadmap.steps.join('\n')}\n\n💼 Recommended Career Paths for you:\n${roadmap.careers.join(', ')}\n\n📈 Next Steps:\n1. Leverage your business acumen for ${careerGoals} roles\n2. Develop technical skills relevant to ${careerGoals}\n3. Build digital projects showcasing business + tech skills\n4. Network in tech industry with business perspective`
      }
    }

    // Personalized skill recommendations
    if (message.includes('skill') || message.includes('learn') || message.includes('technology')) {
      if (careerGoals.toLowerCase().includes('ai') || careerGoals.toLowerCase().includes('machine learning') || careerGoals.toLowerCase().includes('ml')) {
        return `🎯 Personalized Skills for ${name}:\n\nBased on your ${degree} degree and ${experience} experience, here are the essential skills for becoming a ${careerGoals}:\n\n${skillRecommendations.ai_ml.join('\n')}\n\n📚 Learning Path for you:\n1. Start with Python (build on your ${experience})\n2. Learn ML fundamentals through online courses\n3. Build AI projects using your ${degree} background\n4. Get certifications relevant to ${careerGoals}\n5. Network with AI professionals`
      }
      if (careerGoals.toLowerCase().includes('web') || careerGoals.toLowerCase().includes('developer')) {
        return `🎯 Personalized Skills for ${name}:\n\nBased on your ${degree} degree and ${experience} experience, here are the essential skills for becoming a ${careerGoals}:\n\n${skillRecommendations.web_development.join('\n')}\n\n📚 Learning Path for you:\n1. Build on your ${experience} with modern web technologies\n2. Create portfolio projects showcasing your ${degree} background\n3. Learn full-stack development\n4. Get relevant certifications\n5. Build a strong online presence`
      }
      if (careerGoals.toLowerCase().includes('data') || careerGoals.toLowerCase().includes('analytics')) {
        return `🎯 Personalized Skills for ${name}:\n\nBased on your ${degree} degree and ${experience} experience, here are the essential skills for becoming a ${careerGoals}:\n\n${skillRecommendations.data_science.join('\n')}\n\n📚 Learning Path for you:\n1. Leverage your ${degree} analytical thinking\n2. Learn data analysis tools and techniques\n3. Build data projects using your ${experience}\n4. Get data science certifications\n5. Network with data professionals`
      }
    }

    // General personalized guidance
    if (message.includes('career') || message.includes('job') || message.includes('work')) {
      return `🎯 Personalized Career Guidance for ${name}:\n\nBased on your profile:\n• Degree: ${degree}\n• Experience: ${experience}\n• Career Goal: ${careerGoals}\n\n💡 My Recommendations:\n\n1. **Leverage Your Background**: Your ${degree} degree provides a strong foundation for ${careerGoals}\n\n2. **Skill Development**: Focus on ${careerGoals.toLowerCase()} specific skills while building on your ${experience}\n\n3. **Project Portfolio**: Create projects that showcase your ${degree} knowledge applied to ${careerGoals}\n\n4. **Networking**: Connect with professionals who have similar backgrounds to yours\n\n5. **Certifications**: Pursue certifications relevant to ${careerGoals} that complement your ${degree}\n\nWould you like me to create a detailed roadmap or focus on specific skills?`
    }

    // Default personalized response
    return `Hello ${name}! 👋\n\nI can see you have a ${degree} degree with ${experience} experience and want to become a ${careerGoals}. Let me help you create a personalized career development plan!\n\nWhat would you like to focus on:\n• Detailed career roadmap for ${careerGoals}\n• Specific skills you need to learn\n• How to leverage your ${degree} background\n• Project ideas to build your portfolio\n• Networking strategies for ${careerGoals}`
  }

  // Fallback responses for users without profile
  if (message.includes('roadmap') || message.includes('path') || message.includes('plan')) {
    if (message.includes('computer science') || message.includes('cs') || message.includes('programming')) {
      const roadmap = careerRoadmaps.computerScience
      return `${roadmap.title}:\n\n${roadmap.steps.join('\n')}\n\nRecommended Career Paths:\n${roadmap.careers.join(', ')}`
    }
    if (message.includes('engineering') || message.includes('technical')) {
      const roadmap = careerRoadmaps.engineering
      return `${roadmap.title}:\n\n${roadmap.steps.join('\n')}\n\nRecommended Career Paths:\n${roadmap.careers.join(', ')}`
    }
    if (message.includes('business') || message.includes('management')) {
      const roadmap = careerRoadmaps.business
      return `${roadmap.title}:\n\n${roadmap.steps.join('\n')}\n\nRecommended Career Paths:\n${roadmap.careers.join(', ')}`
    }
  }

  // Skill recommendations
  if (message.includes('skill') || message.includes('learn') || message.includes('technology')) {
    if (message.includes('ai') || message.includes('machine learning') || message.includes('ml')) {
      return `Essential Skills for AI/ML Careers:\n\n${skillRecommendations.ai_ml.join('\n')}\n\nStart with Python and gradually build your ML knowledge through projects and courses.`
    }
    if (message.includes('web') || message.includes('frontend') || message.includes('backend')) {
      return `Essential Skills for Web Development:\n\n${skillRecommendations.web_development.join('\n')}\n\nFocus on building real projects to showcase your skills.`
    }
    if (message.includes('data') || message.includes('analytics')) {
      return `Essential Skills for Data Science:\n\n${skillRecommendations.data_science.join('\n')}\n\nStart with Python and SQL, then move to advanced analytics.`
    }
  }

  // Career guidance
  if (message.includes('career') || message.includes('job') || message.includes('work')) {
    return "I can help you plan your career! Please tell me:\n\n1. Your educational background (Computer Science, Engineering, Business, etc.)\n2. Your current skills and experience\n3. What type of career interests you (AI/ML, Web Development, Data Science, etc.)\n\nThis will help me provide a personalized career roadmap and skill recommendations."
  }

  // Qualification-based guidance
  if (message.includes('qualification') || message.includes('degree') || message.includes('background')) {
    return "To provide the best career guidance, please share:\n\n• Your educational background\n• Current skills and experience\n• Career interests and goals\n• Preferred work environment\n\nI'll create a personalized roadmap with specific steps and skill recommendations."
  }

  // General guidance
  if (message.includes('help') || message.includes('guide') || message.includes('advice')) {
    return "I'm your AI career counselor! I can help you with:\n\n• Personalized career roadmaps\n• Skill development recommendations\n• Industry insights and trends\n• Learning path planning\n• Career transition guidance\n\nWhat would you like to know about your career development?"
  }

  // Default response
  return "I'm here to help you with your career planning! Please tell me about your educational background, current skills, and career goals. I'll provide personalized guidance, roadmaps, and skill recommendations to help you succeed in your chosen field."
} 