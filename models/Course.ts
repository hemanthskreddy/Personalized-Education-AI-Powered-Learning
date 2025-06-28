import mongoose, { Schema, models } from 'mongoose'

const CourseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  category: { type: String, required: true },
  estimatedTime: { type: String, required: true },
  lessons: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
})

export default models.Course || mongoose.model('Course', CourseSchema) 