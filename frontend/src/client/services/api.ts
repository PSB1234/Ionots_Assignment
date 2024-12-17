import axios from 'axios';
import { Project } from '../../types';

const API_URL = "http://localhost:5000/api";

export const projectService = {
  async getAllProjects() {
    const response = await axios.get<Project[]>(`${API_URL}/projects`);
    return response.data;
  },

  async assignProject(projectId: string) {
    const response = await axios.put<Project>(
      `${API_URL}/projects/${projectId}/assign`
    );
    return response.data;
  },

  async createProject(project: Omit<Project, 'id'>) {
    const response = await axios.post<Project>(`${API_URL}/projects`, project);
    return response.data;
  }
};