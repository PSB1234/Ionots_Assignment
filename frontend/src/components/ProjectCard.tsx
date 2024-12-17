import React from 'react';
import { Project } from '../types';
import { Calendar, CheckCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onAssign?: (projectId: string) => void;
}


export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onAssign }) => {
  const statusColors = {
    available: 'bg-green-100 text-green-800',
    assigned: 'bg-blue-100 text-blue-800',
    completed: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex items-center text-gray-500 mb-4">
        <Calendar className="w-4 h-4 mr-2" />
        <span>Deadline: {new Date(project.deadline).toLocaleDateString()}</span>
      </div>
      {project.score !== undefined && (
        <div className="flex items-center text-gray-500 mb-4">
          <CheckCircle className="w-4 h-4 mr-2" />
          <span>Score: {project.score}</span>
        </div>
      )}
      {project.status === 'available' && onAssign && (
        <button
          onClick={() => project._id && onAssign(project._id.toString())}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Accept Project
        </button>
      )}
    </div>
  );
}