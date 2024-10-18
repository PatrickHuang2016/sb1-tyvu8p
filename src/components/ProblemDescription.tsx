import React from 'react';
import { FileText } from 'lucide-react';
import { Problem } from '../types';

interface ProblemDescriptionProps {
  problem: Problem;
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h2 className="text-lg font-semibold mb-2 flex items-center">
        <FileText className="mr-2" /> {problem.title}
      </h2>
      <p className="text-gray-600">{problem.description}</p>
    </div>
  );
};

export default ProblemDescription;