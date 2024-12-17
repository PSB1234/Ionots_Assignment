import { useState, useEffect } from 'react';
import { Project } from '../../types';
import { projectService } from '../services/api';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await projectService.getAllProjects();
      setProjects(data);
    } catch (err) {
      setError('Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  const assignProject = async (projectId: string) => {
    try {
      await projectService.assignProject(projectId);
      await fetchProjects();
    } catch (err) {
      setError('Failed to assign project');
    }
  };

  return { projects, loading, error, assignProject };
};