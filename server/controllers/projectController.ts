import { Request, Response } from 'express';
import Project from '../models/Project';
import User from '../models/User';
export const projectController = {
  async getAllProjects(req: Request, res: Response) :Promise<void> {
    try {
      const projects = await Project.find();
      res.json(projects);
    }
     catch (error:any) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching projects' });
    }
  },

  async createProject(req: Request, res: Response) :Promise<any>{
    try {
      const { title, description, deadline, status } = req.body;
      if (!title || !description || !deadline) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
      const project = new Project(req.body);
      await project.save();
      await User.updateMany({}, { $push: { assignedProjects: project._id } });
      res.status(201).json(project);
    } catch (error:any) {
      console.error(error);
      res.status(400).json({ message: 'Error creating project' });
    }
  },

  async assignProject(req: Request, res: Response) :Promise<any>{
    try {
      const { projectId } = req.params;
      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      } 
      project.status = 'assigned';
      await project.save();
      res.json(project);
    } catch (error:any) {
      console.error(error);
      res.status(400).json({ message: 'Error assigning project', error: error.message });
    }
  },
  async acceptProject(req: Request, res: Response):Promise<any> {
    try {
      const { projectId } = req.params;
      const { userId } = req.body;  
  
      // Find the user who is accepting the project
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Find the project in the user's assigned projects
      const projectIndex = user.assignedProjects.findIndex(
        (project) => project.projectId.toString() === projectId
      );
  
      if (projectIndex === -1) {
        return res.status(404).json({ message: 'Project not assigned to user' });
      }
  
      // Change the status of the project for this user only
      user.assignedProjects[projectIndex].status = 'accepted';
      
      // Save the user document with the updated assignedProjects
      await user.save();
  
      res.json({ message: 'Project accepted', user });
    } catch (error: any) {
      console.error(error);
      res.status(400).json({ message: 'Error accepting project', error: error.message });
    }
  }
};