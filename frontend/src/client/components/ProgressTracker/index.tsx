import React from 'react';
import { ProjectAssignment } from '../../../types';
import { TrendingUp } from 'lucide-react';

interface ProgressTrackerProps {
  assignment: ProjectAssignment;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ assignment }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-lg font-medium text-gray-900">Progress</h4>
        <span className="text-sm text-gray-500">
          {assignment.progress}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${assignment.progress}%` }}
        ></div>
      </div>
      {assignment.score && (
        <div className="mt-4 flex items-center text-gray-700">
          <TrendingUp className="w-4 h-4 mr-2" />
          <span>Current Score: {assignment.score}</span>
        </div>
      )}
    </div>
  );
}