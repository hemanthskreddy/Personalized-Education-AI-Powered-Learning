# Personalized Education AI Platform

An AI-powered personalized education and career guidance platform built with Next.js, featuring intelligent career roadmaps, skill recommendations, and personalized learning paths.

## 🚀 Features

- **Personalized Career Roadmaps** - AI-generated career paths based on user qualifications
- **User Profile System** - Collect and store user background, experience, and career goals
- **AI Career Counselor** - Intelligent chat interface for personalized guidance
- **Learning Path Tracking** - Monitor progress through skill development journeys
- **Modern UI/UX** - Beautiful, responsive design with smooth animations
- **Real-time AI Responses** - Powered by Groq's fast LLM API

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **AI Integration**: Groq API (Llama 3.1 8B model)
- **Styling**: Tailwind CSS, Framer Motion
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: NextAuth.js (ready for implementation)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB database (optional for full functionality)
- Groq API key

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd personalized-education-ai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# Groq API Key for AI chat functionality
GROQ_API_KEY=your_groq_api_key_here

# MongoDB Connection String (optional)
MONGODB_URI=your_mongodb_connection_string_here

# NextAuth Configuration (optional)
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000
```

### 4. Get Your Groq API Key

1. Visit [Groq Console](https://console.groq.com/)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key and add it to your `.env.local` file

**Note**: Groq offers generous free tier limits and fast response times!

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎯 How It Works

### User Profile System
1. Users input their educational background, experience, and career goals
2. The system generates personalized recommendations based on their profile
3. Career roadmaps are tailored to their specific degree and experience level

### AI Career Counselor
1. Users can chat with an AI counselor about their career development
2. The AI provides personalized advice based on their profile
3. Responses include specific skill recommendations and actionable steps

### Personalized Learning Paths
1. The system creates customized learning journeys
2. Progress tracking for skill development
3. Recommendations for certifications and projects

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── chat/          # AI chat API with Groq integration
│   │   └── courses/
│   ├── auth/
│   ├── components/
│   │   └── AIChat.tsx     # AI chat component
│   ├── dashboard/
│   │   └── page.tsx       # Main dashboard with user profiles
│   └── page.tsx           # Landing page
├── lib/
│   └── mongodb.ts         # Database connection
├── models/
│   ├── Course.ts
│   └── User.ts
└── README.md
```

## 🔧 Configuration

### Environment Variables

- `GROQ_API_KEY`: Your Groq API key for AI functionality
- `MONGODB_URI`: MongoDB connection string (optional)
- `NEXTAUTH_SECRET`: Secret for NextAuth.js (optional)
- `NEXTAUTH_URL`: Your application URL

### AI Model Configuration

The application uses Groq's Llama 3.1 8B model for:
- Personalized career guidance
- Skill recommendations
- Learning path suggestions
- Real-time chat responses

## 🎨 Customization

### Adding New Career Paths

Edit `app/api/chat/route.ts` to add new career roadmaps:

```typescript
const careerRoadmaps = {
  // Add your new career path here
  newCareer: {
    title: "New Career Roadmap",
    steps: [
      "Step 1: ...",
      "Step 2: ...",
      // Add more steps
    ],
    careers: ["Career 1", "Career 2"]
  }
}
```

### Customizing AI Prompts

Modify the AI prompts in `app/api/chat/route.ts` to change how the AI responds to users.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Groq for providing fast and reliable AI API
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- Framer Motion for smooth animations

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ for personalized education and career development** 