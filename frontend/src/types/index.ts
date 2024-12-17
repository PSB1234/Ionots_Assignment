import { Types  } from 'mongoose';

export interface Project {
  _id?: Types.ObjectId;
  title: string;
  description: string;
  deadline: string;
  status: 'available' | 'assigned' | 'completed';
  score?: number;
}

export interface User {
  _id?:Types.ObjectId;
  name: string;
  email: string;
  assignedProjects: Types.ObjectId[];
  totalScore: number;
}

export interface ProjectAssignment {
  _id?: Types.ObjectId;
  projectId: Types.ObjectId;
  userId: Types.ObjectId;
  startDate: Date;
  completionDate?: Date;
  progress: number;
  score?: number;
  createdAt?: Date; 
  updatedAt?: Date; 
}