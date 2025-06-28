/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  env: {
    GROQ_API_KEY: process.env.GROQ_API_KEY,
    MONGODB_URI: process.env.MONGODB_URI,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
  },
}

module.exports = nextConfig 