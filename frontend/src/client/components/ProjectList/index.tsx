import React from 'react';
import { Project} from '../../../types';
import { ProjectCard } from '../ProjectCard';
import { ProgressTracker } from '../ProgressTracker';
import { Types } from 'mongoose';

interface ProjectListProps {
  projects: Project[];
  onAssign: (projectId: string) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects, onAssign }) => {
  const availableProjects = projects.filter(p => p.status === 'available');
  const assignedProjects = projects.filter(p => p.status === 'assigned');

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignedProjects.map(project => (
            <div key={project._id?.toString()}>
              <ProjectCard project={project} />
              <ProgressTracker
                assignment={{
                  _id: new Types.ObjectId(),
                  projectId: project._id!,
                  userId: new Types.ObjectId(), // This should come from auth context
                  startDate: new Date(),
                  progress: 65,
                  score: project.score,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Available Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableProjects.map(project => (
            <ProjectCard
              key={project._id?.toString()}
              project={project}
              onAssign={onAssign}
            />
          ))}
        </div>
      </div>
    </>
  );
};