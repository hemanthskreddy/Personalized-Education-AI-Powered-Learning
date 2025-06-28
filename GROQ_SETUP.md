# Groq API Setup Guide

## 🚀 Getting Started with Groq

Groq is a fast and reliable AI API that powers the personalized career guidance in this application. Here's how to set it up:

## 📋 Step-by-Step Setup

### 1. Create a Groq Account

1. Visit [Groq Console](https://console.groq.com/)
2. Click "Sign Up" or "Get Started"
3. Create your account using email or GitHub
4. Verify your email address

### 2. Get Your API Key

1. Log in to your Groq Console
2. Navigate to the **API Keys** section in the sidebar
3. Click **"Create API Key"**
4. Give your key a descriptive name (e.g., "Personalized Education AI")
5. Copy the generated API key (it starts with `gsk_`)

### 3. Add to Your Environment

1. In your project root, create or edit `.env.local`
2. Add your Groq API key:

```env
GROQ_API_KEY=gsk_your_actual_api_key_here
```

### 4. Test the Integration

1. Start your development server: `npm run dev`
2. Go to the dashboard and open the AI chat
3. Ask a question about career guidance
4. You should receive a fast, personalized response!

## 💡 Why Groq?

### Speed
- **Sub-second responses** - Much faster than traditional AI APIs
- **Real-time chat** - No waiting for AI responses
- **Low latency** - Great user experience

### Reliability
- **99.9% uptime** - Highly reliable service
- **Consistent performance** - Predictable response times
- **Robust infrastructure** - Built for production use

### Cost-Effective
- **Generous free tier** - 100 requests per minute
- **Pay-as-you-go** - Only pay for what you use
- **No hidden fees** - Transparent pricing

### Quality
- **Llama 3.1 8B model** - High-quality responses
- **Context-aware** - Understands user profiles
- **Structured output** - Consistent formatting

## 🔧 API Configuration

The application uses the following Groq configuration:

```typescript
{
  model: 'llama3-8b-8192',
  messages: [
    {
      role: 'system',
      content: 'You are an expert career counselor...'
    },
    {
      role: 'user',
      content: 'User question with profile context'
    }
  ],
  temperature: 0.7,
  max_tokens: 800,
  top_p: 0.9
}
```

## 📊 Usage Limits

### Free Tier
- **100 requests per minute**
- **Suitable for development and testing**
- **No credit card required**

### Paid Plans
- **Higher rate limits**
- **Priority support**
- **Advanced features**

## 🛠️ Troubleshooting

### Common Issues

**"API key not found"**
- Make sure your `.env.local` file exists
- Check that the API key is correctly formatted
- Restart your development server

**"Rate limit exceeded"**
- You've hit the free tier limit
- Wait a minute and try again
- Consider upgrading to a paid plan

**"Invalid API key"**
- Double-check your API key
- Make sure you copied it correctly
- Generate a new key if needed

### Getting Help

- **Groq Documentation**: [docs.groq.com](https://docs.groq.com/)
- **Community Support**: [Discord](https://discord.gg/groq)
- **Email Support**: Available for paid users

## 🎯 Best Practices

### API Key Security
- Never commit your API key to version control
- Use environment variables for all sensitive data
- Rotate your API keys regularly

### Rate Limiting
- Implement proper error handling for rate limits
- Consider caching responses for repeated questions
- Monitor your usage to stay within limits

### Error Handling
- Always have fallback responses when API is unavailable
- Log errors for debugging
- Provide helpful error messages to users

## 🚀 Next Steps

Once you have Groq set up:

1. **Test the chat functionality** with different user profiles
2. **Customize the prompts** in `app/api/chat/route.ts`
3. **Add more career paths** to the roadmap system
4. **Deploy your application** with the API key configured

---

**Happy coding! 🎉** 