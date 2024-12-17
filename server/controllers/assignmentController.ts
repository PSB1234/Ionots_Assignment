import { Request, Response } from 'express';
import ProjectAssignment from '../models/ProjectAssignment';
import Project from '../models/Project';
import User from '../models/User';

export const assignmentController = {
  async getAssignmentsByUser(req: Request, res: Response) :Promise<any> {
    try {
      const { userId } = req.params;
      const assignments = await ProjectAssignment.find({ userId })
        .populate('projectId')
        .sort('-createdAt');
      res.json(assignments);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching assignments' });
    }
  },
 async postAssignmentsByUser(req: Request, res: Response) :Promise<any>{
  try {
    const { userId, projectId } = req.body;
    const user = await User.findById(userId);
    const project = await Project.findById(projectId);

    if (!user || !project) {
      return res.status(404).json({ message: 'Candidate or Project not found' });
    }
    
    const newAssignment = new ProjectAssignment({
      userId,
      projectId,
      progress: 0,
      score: null, 
      startDate: new Date()
    });
    await newAssignment.save();
    res.status(201).json(newAssignment);
  } catch (error) {
    res.status(400).json({ message: 'Error Posting assignments' });
  }
 },
  async updateProgress(req: Request, res: Response)  :Promise<any>{
    try {
      const { assignmentId } = req.params;
      const { progress } = req.body;
      
      const assignment = await ProjectAssignment.findByIdAndUpdate(
        assignmentId,
        { progress },
        { new: true }
      );
      
      if (!assignment) {
        return res.status(404).json({ message: 'Assignment not found' });
      }

      // If progress is 100%, update project status to completed
      if (progress === 100) {
        await Project.findByIdAndUpdate(
          assignment.projectId,
          { status: 'completed' }
        );
      }

      res.json(assignment);
    } catch (error) {
      res.status(400).json({ message: 'Error updating progress' });
    }
  },

  async submitScore(req: Request, res: Response)  :Promise<any>{
    try {
      const { assignmentId } = req.params;
      const { score } = req.body;
      
      const assignment = await ProjectAssignment.findByIdAndUpdate(
        assignmentId,
        { 
          score,
          completionDate: new Date()
        },
        { new: true }
      ).populate('userId');

      if (!assignment) {
        return res.status(404).json({ message: 'Assignment not found' });
      }

      const user = await User.findById(assignment.userId);
      if (user) {
        const assignments = await ProjectAssignment.find({ 
          userId: user._id,
          score: { $exists: true }
        });
        
        const totalScore = assignments.reduce((sum, a) => sum + (a.score || 0), 0) / assignments.length;
        await User.findByIdAndUpdate(user._id, { totalScore });
      }

      res.json(assignment);
    } catch (error) {
      res.status(400).json({ message: 'Error submitting score' });
    }
  }
};