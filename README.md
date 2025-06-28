# EduAI – Personalized Education Platform (AI-Powered Learning/Teaching)

## Description
EduAI is a revolutionary AI-powered personalized education platform that adapts to individual learning styles and needs. It leverages advanced AI to create custom learning paths, provide real-time feedback, and help students and teachers achieve their educational goals efficiently.

## Purpose
- **Problem:** Traditional education is one-size-fits-all, which can leave many students behind or unchallenged.
- **Solution:** EduAI personalizes the learning experience using AI, ensuring every learner gets the right content, at the right pace, with real-time support.
- **Impact:** Increases engagement, improves outcomes, and empowers both students and educators.

## Scope
- **Use Cases:**
  - Students seeking adaptive, self-paced learning
  - Teachers wanting to track and support student progress
  - Institutions aiming to modernize their digital learning
- **Future Scalability:**
  - Add more AI models (e.g., for essay grading, adaptive quizzes)
  - Integrate with more databases and learning management systems
  - Support for mobile apps and internationalization

## Features Used & Integrated
- AI-powered chat assistant (Hugging Face DialoGPT)
- Personalized learning dashboard
- Adaptive course recommendations
- Progress tracking and analytics
- Authentication (demo accounts provided)
- Modern, responsive UI (Tailwind CSS)
- MongoDB database integration

## Tech Stack Used
- **Frontend:** Next.js (App Router, TypeScript), React, Tailwind CSS, Framer Motion, Lucide Icons
- **Backend/API:** Next.js API routes, Hugging Face Inference API, MongoDB, Mongoose
- **Authentication:** Demo login (can be extended with NextAuth.js)
- **Other:** React Hot Toast, Chart.js, Zustand (for state management)

## Setup & Usage
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd personalized-education-ai
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env.local` file with:
   ```env
   HUGGINGFACE_API_KEY=your_huggingface_api_key
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open the app:**
   Visit [http://localhost:3000](http://localhost:3000)

## Demo Credentials
- **Email:** demo@eduai.com
- **Password:** demo123

## Key Features
- Modern, accessible UI
- AI-powered chat for instant help (using free Hugging Face API)
- Personalized dashboard with recommendations
- Progress analytics and achievements
- Demo authentication for easy testing

## License
MIT 