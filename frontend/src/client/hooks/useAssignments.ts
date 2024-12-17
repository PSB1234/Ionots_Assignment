import { useState, useEffect } from 'react';
import { ProjectAssignment } from '../../types';
import { assignmentService } from '../services/assignmentService';

export const useAssignments = (userId: string) => {
  const [assignments, setAssignments] = useState<ProjectAssignment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAssignments();
  }, [userId]);

  const fetchAssignments = async () => {
    try {
      const data = await assignmentService.getAssignmentsByCandidate(userId);
      setAssignments(data);
    } catch (err) {
      setError('Failed to fetch assignments');
    } finally {
      setLoading(false);
    }
  };

  const updateProgress = async (assignmentId: string, progress: number) => {
    try {
      await assignmentService.updateProgress(assignmentId, progress);
      await fetchAssignments();
    } catch (err) {
      setError('Failed to update progress');
    }
  };

  const submitScore = async (assignmentId: string, score: number) => {
    try {
      await assignmentService.submitScore(assignmentId, score);
      await fetchAssignments();
    } catch (err) {
      setError('Failed to submit score');
    }
  };

  return { assignments, loading, error, updateProgress, submitScore };
};