import React, { useState } from 'react';
import { Code, Send } from 'lucide-react';
import { Problem } from '../types';

interface CodeEditorProps {
  selectedProblem: Problem | null;
  onCodeReview: (review: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ selectedProblem, onCodeReview }) => {
  const [code, setCode] = useState('// Write your code here');

  const handleSubmit = async () => {
    if (!selectedProblem) {
      alert('Please select a problem first');
      return;
    }

    try {
      const response = await fetch('/api/code-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          problem: selectedProblem,
          code: code,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get code review');
      }

      const data = await response.json();
      onCodeReview(data.review);
    } catch (error) {
      console.error('Error submitting code:', error);
      alert('Failed to submit code. Please try again.');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow flex-grow flex flex-col">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <Code className="mr-2" /> Code Editor
      </h2>
      <textarea
        className="w-full flex-grow p-2 border border-gray-300 rounded font-mono text-sm"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button 
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 flex items-center justify-center"
        onClick={handleSubmit}
      >
        <Send className="mr-2" /> Submit Solution
      </button>
    </div>
  );
};

export default CodeEditor;