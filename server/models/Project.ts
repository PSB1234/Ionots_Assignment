import mongoose, { Schema, Document } from 'mongoose';
import { Project } from '../types';

export interface ProjectDocument extends Omit<Project, '_id'>, Document {}

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  status: {
    type: String,
    enum: ['available', 'assigned', 'completed'],
    default: 'available'
  },
  score: { type: Number }
}, {
  timestamps: true
});

export default mongoose.model<ProjectDocument>('Project', projectSchema);