import axios from 'axios';
import { ProjectAssignment } from '../../types';

const API_URL = "http://localhost:5000/api";

export const assignmentService = {
  async getAssignmentsByCandidate(userId: string) {
    const response = await axios.get<ProjectAssignment[]>(
      `${API_URL}/assignments/user/${userId}`
    );
    return response.data;
  },

  async updateProgress(assignmentId: string, progress: number) {
    const response = await axios.put<ProjectAssignment>(
      `${API_URL}/assignments/${assignmentId}/progress`,
      { progress }
    );
    return response.data;
  },

  async submitScore(assignmentId: string, score: number) {
    const response = await axios.put<ProjectAssignment>(
      `${API_URL}/assignments/${assignmentId}/score`,
      { score }
    );
    return response.data;
  }
};