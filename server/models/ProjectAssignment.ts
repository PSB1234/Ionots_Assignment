import mongoose, { Schema, Document } from 'mongoose';
import { ProjectAssignment } from '../types';

export interface ProjectAssignmentDocument extends Omit<ProjectAssignment, '_id'>, Document {}

const projectAssignmentSchema = new Schema({
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  startDate: { type: Date, required: true },
  completionDate: { type: Date },
  progress: { type: Number, default: 0, min: 0, max: 100 },
  score: { type: Number, min: 0, max: 100 }
}, {
  timestamps: true
});

export default mongoose.model<ProjectAssignmentDocument>('ProjectAssignment', projectAssignmentSchema);