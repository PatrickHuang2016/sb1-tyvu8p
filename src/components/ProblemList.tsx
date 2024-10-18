import React from 'react';
import { List } from 'lucide-react';
import { Problem } from '../types';

const problems: Problem[] = [
  { 
    id: 1, 
    title: "Two Sum", 
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."
  },
  { 
    id: 2, 
    title: "Add Two Numbers", 
    difficulty: "Medium",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list."
  },
  { 
    id: 3, 
    title: "Longest Substring Without Repeating Characters", 
    difficulty: "Medium",
    description: "Given a string s, find the length of the longest substring without repeating characters."
  },
];

interface ProblemListProps {
  onSelectProblem: (problem: Problem) => void;
}

const ProblemList: React.FC<ProblemListProps> = ({ onSelectProblem }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <List className="mr-2" /> Problem List
      </h2>
      <ul className="space-y-2">
        {problems.map((problem) => (
          <li 
            key={problem.id} 
            className="p-2 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => onSelectProblem(problem)}
          >
            <span className="font-medium">{problem.title}</span>
            <span className={`ml-2 text-sm ${
              problem.difficulty === 'Easy' ? 'text-green-500' :
              problem.difficulty === 'Medium' ? 'text-yellow-500' : 'text-red-500'
            }`}>
              {problem.difficulty}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemList;